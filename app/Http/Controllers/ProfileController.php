<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;


class ProfileController extends Controller
{
    public function show(User $user)
    {
      return response()->json($user);
    }

    public function update(User $user)
    {

      $data=request()->validate([
        'first_name'=> ['required', 'string', 'max:20'],
        'last_name'=> ['required', 'string', 'max:20'],
        'photo'=>['sometimes','image','mimes:jpg,jpeg','max:800'],
        'cover'=>['sometimes','image','mimes:jpg,jpeg','max:1000'],
        'bio'=> ['nullable','sometimes','max:150']
      ]);

      $photoName= request('photo') ? uniqid('profile',true).request('photo')->getClientOriginalName() : $user->photo;
      $coverName= request('cover') ? uniqid('cover',true).request('cover')->getClientOriginalName() : $user->cover;

      $updatedData= $this->checkForUpdatedFields($user,$data,$photoName,$coverName);
      User::where('id',Auth::id())->update($updatedData);

     return response()->json($updatedData);
    }


    protected function checkForUpdatedFields($user,$data,$req_photo,$req_cover)
    {
      $updatedData=[];

      if($user->first_name!==$data['first_name'])
          $updatedData['first_name']= $data['first_name'];

      if($user->last_name!==$data['last_name'])
          $updatedData['last_name']= $data['last_name'];

      if($user->bio!==$data['bio'])
          $updatedData['bio']= $data['bio'];

      if($user->photo!==$req_photo){
          $data['photo']->storeAs('uploads/profile',$req_photo,'public');
          $updatedData['photo']= $req_photo;
      }

      if($user->cover!==$req_cover){
          $data['cover']->storeAs('uploads/cover',$req_cover,'public');
          $updatedData['cover']= $req_cover;
      }


      return $updatedData;
    }

}
