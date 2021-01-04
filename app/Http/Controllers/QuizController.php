<?php

namespace App\Http\Controllers;

use App\Quiz;
use Illuminate\Http\Request;

class QuizController extends SuperController
{
    public function __construct(Quiz $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $title, int $idContext) // : Collection
    {
        $list = $this->_context
            ->where([
                $title != '*' ? ['title', 'LIKE', "%{$title}%"] : ['1','1'],
                $idContext != 0 ? ['idContext', $idContext] : ['1','1']
            ])
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->with('cours')
            ->get()
            ;

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }

    public function getByIdUser(int $id)
    {
        return $this->_context->where('idUser', $id)->first();
    }

    public function getQuiz(int $idContext)
    {
        $list = $this->_context
            ->where([
                $idContext != 0 ? ['idContext', $idContext] : ['1','1']
            ])
            // ->with(['cours', 'questions'])
            ->get()
            ;

        return $list;
    }
}
