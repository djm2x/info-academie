<?php

namespace App\Http\Controllers;

use App\Activite;

class ActiviteController extends SuperController
{
    public function __construct(Activite $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $nom, string $nomAr, string $idTypeActivite) // : Collection
    {
        $matchThese = [ ];

        if ($nom != '*') {
            array_push($matchThese, ['nom', 'LIKE', "%{$nom}%"]);
        }

        if ($nomAr != '*') {
            array_push($matchThese, ['nomAr', 'LIKE', "%{$nomAr}%"]);
        }

        if ($idTypeActivite != 0) {
            array_push($matchThese, ['idTypeActivite', $idTypeActivite]);
        }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);
            
        $count = $q->count();

        $list = $q->skip($startIndex)
            ->skip($startIndex)
            ->take($pageSize)
            ->with(['typeActivite:id,nom'])
            // ->with('subcategory.category')
            // ->get(['id', 'nom', 'nomAr', 'imageUrl', 'type_activite.nom'])
            ->get()
            ;

            // $users = App\User::with(['posts' => function ($query) {
            //     $query->orderBy('created_at', 'desc');
            // }])->get();

        return ['list' => $list, 'count' => $count];
    }
}
