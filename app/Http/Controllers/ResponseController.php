<?php

namespace App\Http\Controllers;

use App\Response;
use Illuminate\Http\Request;

class ResponseController extends SuperController
{
    public function __construct(Response $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, int $idQuestion, int $idUser) // : Collection
    {
        $list = $this->_context
            ->where([
                $idQuestion != 0 ? ['idQuestion', $idQuestion] : ['1','1'],
                $idUser != 0 ? ['idUser', $idUser] : ['1','1']
            ])
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->with('question')
            ->get()
            ;

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }

    public function getByIdUser(int $id)
    {
        return $this->_context->where('idUser', $id)->first();
    }
}
