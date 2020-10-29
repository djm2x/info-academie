<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Discussion extends Model
{
    public function me()
    {
        return $this->belongsTo(User::class, 'idMe');
    }

    public function otheruser()
    {
        return $this->belongsTo(User::class, 'idOtherUser');
    }
}
