<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends SuperController
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $nom, string $prenom, string $email, string $tel, string $adresse, string $cin, string $role, string $idVille) // : Collection
    {
        $q = $this->_context;
            // ->where('idCircuit',string $$id)
            if ($nom != '*') {
                $q->where('nom', 'LIKE', "%{$nom}%");
            }
            if ($prenom != '*') {
                $q->where('prenom', 'LIKE', "%{$prenom}%");
            }
            if ($email != '*') {
                $q->where('email', 'LIKE', "%{$email}%");
            }
            if ($tel != '*') {
                $q->where('tel', 'LIKE', "%{$tel}%");
            }
            if ($adresse != '*') {
                $q->where('adresse', 'LIKE', "%{$adresse}%");
            }
            if ($cin != '*') {
                $q->where('cin', 'LIKE', "%{$cin}%");
            }
            if ($role != '*') {
                $q->where('role', 'LIKE', "%{$role}%");
            }
            if ($idVille != '*') {
                $q->where('idVille', 'LIKE', "%{$idVille}%");
            }

            
            $list = $q
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            // ->with('region')
            ->get();

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }
}
