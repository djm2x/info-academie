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

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $nom, string $nomAr) // : Collection
    {
        $matchThese = [ ];

        if ($nom != '*') {
            array_push($matchThese, ['nom', 'LIKE', "%{$nom}%"]);
        }

        if ($nomAr != '*') {
            array_push($matchThese, ['nomAr', 'LIKE', "%{$nomAr}%"]);
        }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);
            
        $count = $q->count();

        $list = $q->skip($startIndex)
            ->take($pageSize)
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }
}
