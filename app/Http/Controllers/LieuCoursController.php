<?php

namespace App\Http\Controllers;

use App\LieuCours;
use Illuminate\Http\Request;

class LieuCoursController extends SuperController
{
    public function __construct(LieuCours $model)
    {
        parent::__construct($model);
    }
}
