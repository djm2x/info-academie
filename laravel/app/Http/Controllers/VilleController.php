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
            ->skip($startIndex)
            ->take($pageSize)
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }
}
