<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getNumOFRequests()
    {
        $notifications= auth()->user()->unreadNotifications()->where('type','App\Notifications\NewFriendRequest')->get();

        return response()->json($notifications);
    }

    public function showRequests()
    {
        $notifications= auth()->user()->unreadNotifications()->where('type','App\Notifications\NewFriendRequest')->get();
        $notifications->markAsRead();
    }


}
