<?php

namespace App\Http\Controllers;

use App\TypeCours;
use Illuminate\Http\Request;

class TypeCoursController extends SuperController
{
    public function __construct(TypeCours $model)
    {
        parent::__construct($model);
    }
}
