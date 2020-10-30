<?php

namespace App\Events;

use App\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $model;
    // public $user;
    public function __construct(Message $model)
    {
        $this->model = $model;
        // $this->user = $model->me;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return [
            // new PrivateChannel('private.'.$this->model->idOtherUser),
            // new PresenceChannel('private.'.$this->model->idOtherUser),
            new Channel('users.'.$this->model->idOtherUser),
            // new Channel('myhub2'),
        ];
    }

    public function broadcastWith(){
        return ['message' => $this->model];
    }
}
