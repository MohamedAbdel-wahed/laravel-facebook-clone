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

Route::group(['prefix'=>'posts'], function(){
    Route::get('/', 'PostController@index');
    Route::post('/create', 'PostController@create');
    Route::post('/{post}/like', 'PostController@like');
    Route::get('/{post}/like-status', 'PostController@checkIfLiked');
    Route::get('/{post}/likes', 'PostController@getLikes');
});