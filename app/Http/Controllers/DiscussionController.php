<?php

namespace App\Http\Controllers;

use App\Discussion;
use Illuminate\Http\Request;

class DiscussionController extends SuperController
{
    public function __construct(Discussion $model)
    {
        parent::__construct($model);
    }

    // public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $object, string $message, int $idUser) // : Collection
    // {
    //     $matchThese = [ ];

    //     if ($object != '*') {
    //         array_push($matchThese, ['object', 'LIKE', "%{$object}%"]);
    //     }

    //     if ($message != '*') {
    //         array_push($matchThese, ['message', 'LIKE', "%{$message}%"]);
    //     }

    //     if ($idUser != 0) {
    //         array_push($matchThese, ['idUser', $idUser]);
    //     }

    //     $q = $this->_context
    //         ->where($matchThese)
    //         ->orderBy($sortBy, $sortDir);

    //     $count = $q->count();

    //     $list = $q->skip($startIndex)
    //         ->skip($startIndex)
    //         ->take($pageSize)
    //         // ->with(['typeActivite:id,nom'])
    //         ->get()
    //         ;

    //     return ['list' => $list, 'count' => $count];
    // }

    public function getMessages(int $idUser) // : Collection
    {
        $matchThese = [ ];

        $idUser == 0 ?: array_push($matchThese, ['idMe', $idUser]);

        $list = $this->_context
            ->where($matchThese)
            // ->with(['otheruser:id,nom'])
            ->with(['otheruser'])
            ->get()
            ;

        return $list;
    }


}
