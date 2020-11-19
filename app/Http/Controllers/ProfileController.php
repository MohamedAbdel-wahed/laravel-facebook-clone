<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Events\NewRequest;
use App\Notifications\NewFriendRequest;
use Illuminate\Support\Facades\DB;
use Auth;


class ProfileController extends Controller
{
  public function getProfilePosts(User $user)
  {
    $posts = $user->posts()->latest()->get();
    foreach ($posts as $post) {
      $post->user = $user;
    }

    return response()->json($posts);
  }

  public function show(User $user)
  {
    return response()->json($user);
  }

  public function update(User $user)
  {
    $data = request()->validate([
      'first_name' => ['required', 'string', 'max:20'],
      'last_name' => ['required', 'string', 'max:20'],
      'photo' => ['sometimes', 'image', 'mimes:jpg,jpeg', 'max:800'],
      'cover' => ['sometimes', 'image', 'mimes:jpg,jpeg', 'max:1000'],
      'bio' => ['nullable', 'sometimes', 'max:150']
    ]);

    $photoName = request('photo') ? uniqid('profile', true) . request('photo')->getClientOriginalName() : $user->photo;
    $coverName = request('cover') ? uniqid('cover', true) . request('cover')->getClientOriginalName() : $user->cover;

    $updatedData = $this->checkForUpdatedFields($user, $data, $photoName, $coverName);
    User::where('id', Auth::id())->update($updatedData);

    return response()->json($updatedData);
  }


  protected function checkForUpdatedFields($user, $data, $req_photo, $req_cover)
  {
    $updatedData = [];

    if ($user->first_name !== $data['first_name'])
      $updatedData['first_name'] = $data['first_name'];

    if ($user->last_name !== $data['last_name'])
      $updatedData['last_name'] = $data['last_name'];

    if ($user->bio !== $data['bio'])
      $updatedData['bio'] = $data['bio'];

    if ($user->photo !== $req_photo) {
      $data['photo']->storeAs('uploads/profile', $req_photo, 'public');
      $updatedData['photo'] = $req_photo;

      $user_photos = json_decode($user->all_photos);
      array_push($user_photos, $req_photo);
      $updatedData['all_photos'] = $user_photos;
    }

    if ($user->cover !== $req_cover) {
      $data['cover']->storeAs('uploads/cover', $req_cover, 'public');
      $updatedData['cover'] = $req_cover;

      $user_covers = json_decode($user->all_covers);
      array_push($user_covers, $req_cover);
      $updatedData['all_covers'] = $user_covers;
    }

    return $updatedData;
  }

  public function checkIfPending(User $user)
  {
    $result= $this->managePendingRequest($user);
    return response()->json($result);
  }

  public function addFriend(User $user)
  {
    auth()->user()->send_request($user); 
    $result= $this->managePendingRequest($user);
    
    $broadcastData=[];
    $requests= DB::table('friend_requests')->where('reciever_id',$user->id)->get();

    $broadcastData['sender']= $user;
    $broadcastData['requests']= count($requests);

    broadcast(New NewRequest($broadcastData))->toOthers();
    User::where('id',$user->id)->update([
      "requests"=> count($requests)
    ]);

    return response()->json($result);
  }

  protected function managePendingRequest($user)
  {
    $result= [];
    $isFriend= auth()->user()->isFriend($user) || $user->isFriend(auth()->user());
    $isPending = auth()->user()->isPending($user) || $user->isPending(auth()->user());
    
    if($isPending){
       $friendship= auth()->user()->requests()->where('sender_id',Auth::id())->orWhere('sender_id',$user->id)->select('sender_id','reciever_id')->get()[0]->toArray();
      $result['friendship']= $friendship;
      $result['isPending']= true;
      $result['isFriend']= false;
    }
    else if(!$isPending && $isFriend){
      $result['friendship']= null;
      $result['isPending']= false;
      $result['isFriend']= true;
    }
    else{
      $result['friendship']= null;
      $result['isPending']= false;
      $result['isFriend']= false;
    }

    return $result;
  }

  public function getRequests(User $user)
  {
     $ids= DB::table('friend_requests')->where('reciever_id',Auth::id())->latest('id')->get()->pluck('sender_id');
     $requests=User::whereIn('id',$ids)->get();

     return response()->json($requests);
  }

  public function acceptRequest(User $user)
  {
    auth()->user()->accept_request($user);
    return response()->json(['friendship'=>null,'isPending'=>false, 'isFriend'=>true]);
  } 

  public function rejectRequest(User $user)
  {
     auth()->user()->reject_request($user);
     return response()->json(['friendship'=>null,'isPending'=>false, 'isFriend'=>false]);
  } 

  public function removeFriend(User $user)
  {
     auth()->user()->remove_friend($user);
     return response()->json(['friendship'=>null,'isPending'=>false, 'isFriend'=>false]);
  } 

  public function getFriends()
  {
    
  }



}
