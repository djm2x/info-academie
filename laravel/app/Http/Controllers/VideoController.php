<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;

class VideoController extends SuperController
{
    public function __construct(Video $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $title) // : Collection
    {
        $matchThese = [ ];

        if ($title != '*') {
            array_push($matchThese, ['title', 'LIKE', "%{$title}%"]);
        }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);

        $count = $q->count();

        $list = $q->skip($startIndex)
            ->skip($startIndex)
            ->take($pageSize)
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }
}
