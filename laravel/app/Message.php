<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $guarded = [];

    public function me()
    {
        return $this->belongsTo(User::class, 'idMe');
    }

    public function otheruser()
    {
        return $this->belongsTo(User::class, 'idOtherUser');
    }
}
