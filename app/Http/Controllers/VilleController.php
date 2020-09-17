<?php

namespace App\Http\Controllers;

use App\Ville;
use Illuminate\Http\Request;

class VilleController extends SuperController
{
    public function __construct(Ville $model)
    {
        parent::__construct($model);
    }
}
