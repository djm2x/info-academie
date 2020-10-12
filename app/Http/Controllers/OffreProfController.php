<?php

namespace App\Http\Controllers;

use App\OffreProf;
use Illuminate\Http\Request;

class OffreProfController extends SuperController
{
    public function __construct(OffreProf $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir) // : Collection
    {
        $matchThese = [ ];

        // if ($title != '*') {
        //     array_push($matchThese, ['title', 'LIKE', "%{$title}%"]);
        // }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);

        $count = $q->count();

        $list = $q->skip($startIndex)
            ->skip($startIndex)
            ->take($pageSize)
            ->with(['typeCours:id,nom,nomAr'])
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }
}
