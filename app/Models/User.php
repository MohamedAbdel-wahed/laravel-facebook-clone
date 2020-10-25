<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Post;
use App\Models\Like;
use App\Models\Comment;
use DB;


class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [ 'first_name','last_name', 'email', 'password' ];

    protected $hidden = [ 'password', 'remember_token' ];

    protected $casts = [ 'email_verified_at' => 'datetime' ];


    /*  Friend System  */

   public function friending($user)
   {
     DB::table('friend_requests')->insert([
         'sender_id'=>$this->id,
         'reciever_id'=>$user->id
      ]);

     return "request sent successfully";
   }

    public function friend_requests()
    {
       return $this->belongsToMany(User::class,'friend_requests','reciever_id','sender_id')->withTimestamps();
    }

    public function accept_friendship($user)
    {
      DB::table('friend_requests')->where('sender_id',$user->id)->delete();

        DB::table('friends')->insert([
            'user_id'=>$this->id,
            'friend_id'=>$user->id
         ]);

        return "You just accepted user $user->id request";
    }

    public function reject_friendship($user)
    {
        DB::table('friend_requests')->where('sender_id',$user->id)->delete();

        return 'request has been rejected or the user deleted the request';
    }

    public function friends()
    {
      return $this->belongsToMany(User::class,'friends','user_id','friend_id')->withTimestamps();
    }

    public function end_friendship($user)
    {
       DB::table('friends')->where('friend_id',$user->id)->orWhere('friend_id',$this->id)->delete();
      return "You ended you relationship with user $user->id";
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
