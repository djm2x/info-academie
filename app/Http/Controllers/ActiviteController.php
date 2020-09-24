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
        $list = $this->_context
            // ->where('idCircuit', $id)
            // ->where('idCircuit', 'LIKE', "%{$value}%")
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            // ->with(['typeActivite:id,nom'])
            // ->with('subcategory.category')
            // ->get(['id', 'nom', 'nomAr', 'imageUrl', 'type_activite.nom'])
            ->get()
            ;

            // $users = App\User::with(['posts' => function ($query) {
            //     $query->orderBy('created_at', 'desc');
            // }])->get();

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }
}
