<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/profile/{user}', 'ProfileController@show');
Route::patch('/profile/{user}/edit', 'ProfileController@update');




Route::group(['prefix'=>'posts'], function(){
    Route::get('/', 'PostController@index');
    Route::post('/create', 'PostController@create');

    // likes
    Route::post('/{post}/like', 'PostController@like');
    Route::get('/{post}/like-status', 'PostController@checkIfLiked');
    Route::get('/{post}/likes', 'PostController@getLikes');

    // comments
    Route::get('/{post}/comments', 'CommentController@index');
    Route::post('/{post}/comments/create', 'CommentController@create');
});
