<?php

namespace App\Http\Controllers;

use App\EventProf;
use Illuminate\Http\Request;

class EventProfController extends SuperController
{
    public function __construct(EventProf $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir
        , int $year, int $month, int $idUser, string $title) // : Collection
    {
        $matchThese = [ ];

        $year == 0 ?: array_push($matchThese, ['year', $year]);
        $month == 0 ?: array_push($matchThese, ['month', $month]);
        $idUser == 0 ?: array_push($matchThese, ['idUser', $idUser]);
        $title == '*' ?: array_push($matchThese, ['title', 'LIKE', "%{$title}%"]);


        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);

        $count = $q->count();

        $list = $q->skip($startIndex)
            ->take($pageSize)
            ->with(['user:id,nom,prenom'])
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }


    public function getByYearMonth(int $year, int $month, int $idUser) // : Collection
    {
        $matchThese = [ ];

        $year == 0 ?: array_push($matchThese, ['year', $year]);
        $month == 0 ?: array_push($matchThese, ['month', $month]);
        $idUser == 0 ?: array_push($matchThese, ['idUser', $idUser]);


        $list = $this->_context
            ->where($matchThese)
            ->with(['user:id,nom,prenom'])
            ->get()
            ;

        return $list;
    }
}
