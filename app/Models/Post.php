<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Like;


class Post extends Model
{
    use HasFactory;

    protected $guarded=[];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

   public function likes()
   {
       return $this->hasMany(Like::class);
   }

   public function isLikedBy(User $user)
    {
        return $this->likes()->where('user_id',$user->id)->exists();
    }

    public function like(User $user)
    {
        return Like::create([
            'user_id'=> $user->id,
            'post_id'=> $this->id
        ]);
    }

    public function unlike(User $user)
    {
        return $this->likes()->where('user_id',$user->id)->delete();
    }

    public function toggleLike(User $user)
    {
        if($this->isLikedBy($user))
            $this->unlike($user);
        else
            $this->like($user);
    }

    // Comments
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    

}
