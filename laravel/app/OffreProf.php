<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OffreProf extends Model
{
    protected $guarded = [];

    public function typeCours()
    {
        return $this->belongsTo(TypeCours::class, 'idTypeCours');
    }
}
