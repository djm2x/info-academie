<?php

namespace App\Http\Controllers;

use App\NiveauScolaire;
use Illuminate\Http\Request;

class NiveauScolaireController extends SuperController
{
    public function __construct(NiveauScolaire $model)
    {
        parent::__construct($model);
    }
}
