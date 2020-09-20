<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends SuperController
{
    public function __construct(Student $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir) // : Collection
    {
        $list = $this->_context
            // ->where('idCircuit', $id)
            // ->where('idCircuit', 'LIKE', "%{$value}%")
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->with('region')
            ->get()
            ;

        $count = $this->_context->get()->count();

        return ['list' => $list, 'count' => $count];
    }
}
