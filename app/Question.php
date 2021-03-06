<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $guarded = [];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'idQuiz');
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'idQuiz');
    }
}
