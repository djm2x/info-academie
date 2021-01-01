<?php

namespace App\Http\Controllers;

use App\Cours;
use Illuminate\Http\Request;

class CoursController extends SuperController
{
    public function __construct(Cours $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir
        , string $nom, string $nomAr, int $idNiveauScolaire, int $idBranche) // : Collection
    {
        $matchThese = [ ];

        if ($nom != '*') {
            array_push($matchThese, ['nom', 'LIKE', "%{$nom}%"]);
        }

        if ($nomAr != '*') {
            array_push($matchThese, ['nomAr', 'LIKE', "%{$nomAr}%"]);
        }

        // if ($idNiveauScolaire != 0) {
        // }
        array_push($matchThese, ['idNiveauScolaire', $idNiveauScolaire]);

        if ($idBranche != 0) {
            array_push($matchThese, ['idBranche', $idBranche]);
        }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);

        $count = $q->count();

        $list = $q->skip($startIndex)
            ->take($pageSize)
            ->with(['niveauScolaire:id,nom,nomAr', 'branche:id,nom,nomAr'])
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }


    public function getByNiveauAndBranche(int $idNiveauScolaire, int $idBranche) // : Collection
    {
        $matchThese = [ ];

        $idNiveauScolaire == 0 ?: array_push($matchThese, ['idNiveauScolaire', $idNiveauScolaire]);
        $idBranche == 0 ?: array_push($matchThese, ['idBranche', $idBranche]);

        $list = $this->_context
            ->where($matchThese)
            ->get()
            ;

        return $list;
    }
}
