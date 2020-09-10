<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activite extends Model
{
    public function typeActivite()
    {
        return $this->belongsTo(TypeActivite::class, 'idTypeActivite');
    }
}
