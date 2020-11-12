<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Post;
use App\Models\Like;
use App\Models\Comment;
use Illuminate\Support\Facades\DB;


class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [ 'first_name','last_name', 'email', 'password' ];

    protected $hidden = [ 'password', 'remember_token' ];

    protected $casts = [ 'email_verified_at' => 'datetime' ];


    /*  Friend System  */

    public function isPending($user)
    {
      return $this->requests()->where('reciever_id', $user->id)->exists();
    }

    public function isFriend($user)
    {
      return $this->friends()->where('friend_id', $user->id)->exists();
    }


    public function send_request($user)
    {
        if($user->isFriend($this) || $this->isFriend($user)){
          return 'already friend';
        }
        elseif($this->isPending($user) || $user->isPending($this)) {
          $this->requests()->detach($user);
        }
        else{
          $this->requests()->attach($user);
        }             
    }


    public function requests()
    {
        return $this->belongsToMany(User::class,'friend_requests','sender_id', 'reciever_id');
    }


    public function accept_request($user)
    {
      if($user->isPending($this) && !$user->isFriend($this)){
          $user->requests()->detach($this);
          $this->friends()->attach($user);
        }
    }


    public function reject_request($user)
    {
      if($user->isPending($this)) {
          $user->requests()->detach($this);
        }
    }


    public function friends()
    {
      return $this->belongsToMany(User::class,'friends','user_id','friend_id');
    }


   public function remove_friend($user)
   {
       if($this->isFriend($user)){
          DB::table('friends')->where('friend_id',$user->id)->orWhere('friend_id',$this->id)->delete();
       }
   }


   public function posts()
   {
       return $this->hasMany(Post::class);
   }


   public function like()
   {
       return $this->hasOne(Like::class);
   }


  public function comments()
  {
      return $this->hasMany(Comment::class);
  }

}
