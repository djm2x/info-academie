<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branche extends Model
{
    protected $guarded = [];

    public function niveauScolaire()
    {
        return $this->belongsTo(NiveauScolaire::class, 'idNiveauScolaire');
    }
}
