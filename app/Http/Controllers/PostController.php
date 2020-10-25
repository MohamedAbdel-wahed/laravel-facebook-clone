<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth')->except(['index']);
    }


    public function index()
    {
        $posts=Post::with('user')->latest()->get();
        return response()->json($posts);
    }

    public function create()
    {
        $data=request()->validate([
            'privacy'=>'required',
            'content'=>'required|max:500'
        ]);

          $post=auth()->user()->posts()->create($data);
          $post->user=auth()->user();

        return response()->json($post);
    }


    public function like(Post $post)
    {
       return $post->toggleLike(auth()->user());
    }


    public function checkIfLiked(Post $post)
    {
        $liked=$post->isLikedBy(auth()->user());
        return response($liked);
    }

    public function getLikes(Post $post)
    {
       $ids= $post->likes->pluck('user_id');
       $likers=User::whereIn('id',$ids)->select('id','first_name','last_name','photo')->get();
       return response($likers);
    }
}
