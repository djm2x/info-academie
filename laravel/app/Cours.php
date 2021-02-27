<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    protected $guarded = [];

    public function niveauScolaire()
    {
        return $this->belongsTo(NiveauScolaire::class, 'idNiveauScolaire');
    }

    public function branche()
    {
        return $this->belongsTo(Branche::class, 'idBranche');
    }
}
