<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $guarded = [];

    public function cours()
    {
        return $this->belongsTo(Cours::class, 'idCours');
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'idQuiz');
    }
}
