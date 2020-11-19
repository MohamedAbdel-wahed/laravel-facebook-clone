<?php

namespace App\Http\Controllers;

use Auth; 
use App\Models\User;


class NotificationController extends Controller
{
    public function getNumOFRequests()
    {
        $requests= User::where('id', Auth::id())->get()->pluck('requests');

        return $requests;
    }

    public function showRequests()
    {
        User::where('id', Auth::id())->update([
            'requests'=> 0
        ]);
    }

}
