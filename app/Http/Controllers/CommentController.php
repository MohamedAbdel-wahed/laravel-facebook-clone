<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;


class CommentController extends Controller
{
    public function __construct()
    {
       return $this->middleware('auth')->except(['index']);
    }

    public function index(Post $post)
    {
        $comments=$post->comments()->with('user')->latest()->paginate(3);
        return response()->json($comments);
    }

    public function create()
    {
      $data=request()->validate([
        'content'=>'required|max:300'
      ]);

      $comment=auth()->user()->comments()->create(array_merge(
        $data,
        ['post_id'=> request('post_id')]
      ));

      $comment->user= auth()->user();

       return response()->json($comment);
    }
}
