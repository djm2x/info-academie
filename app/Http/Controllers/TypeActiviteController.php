<?php

namespace App\Http\Controllers;

use App\TypeActivite;
use Illuminate\Http\Request;

class TypeActiviteController extends SuperController
{
    public function __construct(TypeActivite $model)
    {
        parent::__construct($model);
    }

    // public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $idType, string $title) // : Collection
    // {
    //     $q = $this->_context;
    //     // $b = $idType != '*';
    //     if ($idType != '*') {
    //         $q = $q->where('type', 'LIKE', "%{$idType}%");
    //     }

    //     if ($title != '*') {
    //         $q = $q->where('title', 'LIKE', "%{$title}%");
    //     }

    //     $list = $q->orderBy($sortBy, $sortDir)
    //         ->skip($startIndex)
    //         ->take($pageSize)
    //         ->get();

    //     $count = $this->_context->get()->count();

    //     return compact('list', 'count', 'idType');
    // }

    public function getAllWithActivites() // : Collection
    {
        $list = $this->_context
            ->with(['activites'])
            ->get();

        return $list;
    }
}
