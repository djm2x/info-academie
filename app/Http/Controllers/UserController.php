<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends SuperController
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $nom, string $prenom, string $email, string $tel, string $adresse, string $cin, string $role, int $idVille) // : Collection
    {

        $matchThese = [];

        if ($nom != '*') {
            array_push($matchThese, ['nom', 'LIKE', "%{$nom}%"]);
        }

        if ($prenom != '*') {
            array_push($matchThese, ['prenom', 'LIKE', "%{$prenom}%"]);
        }

        if ($email != '*') {
            array_push($matchThese, ['email', 'LIKE', "%{$email}%"]);
        }
        if ($tel != '*') {
            array_push($matchThese, ['tel', 'LIKE', "%{$tel}%"]);
        }
        if ($adresse != '*') {
            array_push($matchThese, ['adresse', 'LIKE', "%{$adresse}%"]);
        }
        if ($cin != '*') {
            array_push($matchThese, ['cin', 'LIKE', "%{$cin}%"]);
        }
        if ($role != '*') {
            array_push($matchThese, ['role', 'LIKE', "%{$role}%"]);
        }
        if ($idVille != 0) {
            array_push($matchThese, ['idVille', $idVille]);
        }


        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);
            
        $count = $q->count();

        $list = $q->skip($startIndex)
            ->take($pageSize)
            ->with(['ville'])
            ->get();


        return ['list' => $list, 'count' => $count];
    }
}
