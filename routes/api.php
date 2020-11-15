<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::group(['prefix'=>'profile'], function(){
  Route::get('/{user}/posts', 'ProfileController@getProfilePosts');
  Route::get('/{user}', 'ProfileController@show');

  Route::group(['middleware'=>'auth'], function(){
    Route::patch('/{user}/edit', 'ProfileController@update');
    Route::post('/{user}/add', 'ProfileController@addFriend');
    Route::get('/{user}/isPending', 'ProfileController@checkIfPending');
    Route::get('/{user}/requests', 'ProfileController@getRequests');
    Route::post('/{user}/accept-request', 'ProfileController@acceptRequest');
    Route::post('/{user}/reject-request', 'ProfileController@rejectRequest');
    Route::post('/{user}/remove-friend', 'ProfileController@removeFriend');
  });

});


Route::group(['prefix'=>'posts'], function(){
    Route::get('/', 'PostController@index');
    Route::get('/{post}/like-status', 'PostController@checkIfLiked');
    Route::get('/{post}/likes', 'PostController@getLikes');
    Route::get('/{post}/comments', 'CommentController@index');

    Route::group(['middleware'=>'auth'], function(){
      Route::post('/create', 'PostController@create');
      Route::post('/{post}/like', 'PostController@like');
      Route::post('/{post}/comments/create', 'CommentController@create');
    });
    
});


Route::group(['prefix' => 'notifications', 'middleware'=> 'auth'], function () {
    Route::get('/requests-count', 'NotificationController@getNumOFRequests');
    Route::get('/requests', 'NotificationController@showRequests');
});
