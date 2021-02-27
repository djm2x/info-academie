<?php

namespace App\Http\Controllers;

use App\Prof;
use Illuminate\Http\Request;

class ProfController extends SuperController
{
    public function __construct(Prof $model)
    {
        parent::__construct($model);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir) // : Collection
    {
        // return Deal::with(["redeem" => function($q){
        //     $q->where('user_id', '=', 1);
        // }])->get();


        $list = $this->_context
            // ->where('idCircuit', $id)
            // ->where('idCircuit', 'LIKE', "%{$value}%")
            ->orderBy($sortBy, $sortDir)
            ->skip($startIndex)
            ->take($pageSize)
            ->with(['user'])
            ->get();

        $count = $this->_context->count();

        return ['list' => $list, 'count' => $count];
    }

    public function getByIdUser(int $id)
    {
        return $this->_context->where('idUser', $id)->first();
    }

    public function updateLink(int $id, string $lien)
    {
        // Page::where('id', $id)->update(array('image' => 'asdasd'));
        $model = $this->_context->find($id);
        
        if($model != null) {
            $model->lien = str_replace('@', '/', $lien);
            $model->save();

            return ['lien' => str_replace('@', '/', $lien)];
        }

        return ['lien' => ''];
    }
}
