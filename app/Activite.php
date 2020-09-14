<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activite extends Model
{
    protected $guarded = [];
    
    public function typeActivite()
    {
        return $this->belongsTo(TypeActivite::class, 'idTypeActivite');
    }
}
