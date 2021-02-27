<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;

class QuestionController extends SuperController
{
    public function __construct(Question $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $value, int $idQuiz) // : Collection
    {
        $list = $this->_context
            ->where([
                $value != '*' ? ['value', 'LIKE', "%{$value}%"] : ['1','1'],
                $idQuiz != 0 ? ['idQuiz', $idQuiz] : ['1','1']
            ])
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->with('quiz')
            ->get()
            ;

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }

    public function getByIdUser(int $id)
    {
        return $this->_context->where('idUser', $id)->first();
    }

    public function getQuestions(int $idQuiz)
    {
        $list = $this->_context
            ->where([
                $idQuiz != 0 ? ['idQuiz', $idQuiz] : ['1','1']
            ])
            // ->with(['cours', 'questions'])
            ->get()
            ;

        return $list;
    }
}
