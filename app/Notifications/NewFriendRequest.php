<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewFriendRequest extends Notification
{
    use Queueable;

    public $requests;

    
    public function __construct($requests)
    {
        $this->requests= $requests;
    }

   
    public function via($notifiable)
    {
        return ['database'];
    }


    public function toArray($notifiable)
    {
        return [
            'requests'=> $this->requests
        ];
    }
}
