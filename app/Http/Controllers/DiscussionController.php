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

    public function getContacts(int $idUser) // : Collection
    {
        // $matchThese = [ ];

        // $idUser == 0 ?: array_push($matchThese, ['idMe', $idUser]);
        // $idUser == 0 ?: array_push($matchThese, ['idOtherUser', $idUser]);

        $list = $this->_context
            ->where('idMe', $idUser)
            ->orWhere('idOtherUser', $idUser)
            // ->with(['otheruser:id,nom'])
            ->with(['otheruser', 'me'])
            ->get()
            ;

        return $list;
    }


}
