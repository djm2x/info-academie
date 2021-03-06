<?php

namespace App\Http\Controllers;

use App\Branche;
use Illuminate\Http\Request;

class BrancheController extends SuperController
{
    public function __construct(Branche $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $nom, string $nomAr, string $idNiveauScolaire) // : Collection
    {
        $matchThese = [ ];

        if ($nom != '*') {
            array_push($matchThese, ['nom', 'LIKE', "%{$nom}%"]);
        }

        if ($nomAr != '*') {
            array_push($matchThese, ['nomAr', 'LIKE', "%{$nomAr}%"]);
        }

        if ($idNiveauScolaire != 0) {
            array_push($matchThese, ['idNiveauScolaire', $idNiveauScolaire]);
        }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);

        $count = $q->count();

        $list = $q->skip($startIndex)
            ->take($pageSize)
            ->with(['niveauScolaire:id,nom,nomAr'])
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }
}
