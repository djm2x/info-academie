<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Message;
use Illuminate\Broadcasting\BroadcastException;
use Illuminate\Http\Request;
use Throwable;

class MessageController extends SuperController
{
    public function __construct(Message $model)
    {
        parent::__construct($model);
    }


    public function postMessage(Request $request)
    {
        // $model2 = new Message();

        // $model2->fill($request->all());

        $model = $request->all();

        if (env('DB_CONNECTION') == 'sqlite') {
            $model['id'] = null;
        }

        $m = $this->_context->create($model);

        try {
            event(new MessageEvent($m));
        } catch (BroadcastException $e) {
            return [
                'model' => $m,
                'exception' => $e->exception,
                'file' => $e->file,
                'line' => $e->line,
                'message' => $e->message,
                'trace' => $e->trace,
             ];
        }

        return [ 'model' => $m ];



        // return response()->json('fause  > '.$m->idMe);
    }

    public function getAll(int $startIndex, int $pageSize, string $sortBy, string $sortDir, string $object, string $message, int $idUser) // : Collection
    {
        $matchThese = [ ];

        if ($object != '*') {
            array_push($matchThese, ['object', 'LIKE', "%{$object}%"]);
        }

        if ($message != '*') {
            array_push($matchThese, ['message', 'LIKE', "%{$message}%"]);
        }

        if ($idUser != 0) {
            array_push($matchThese, ['idUser', $idUser]);
        }

        $q = $this->_context
            ->where($matchThese)
            ->orderBy($sortBy, $sortDir);

        $count = $q->count();

        $list = $q->skip($startIndex)
            ->skip($startIndex)
            ->take($pageSize)
            // ->with(['typeActivite:id,nom'])
            ->get()
            ;

        return ['list' => $list, 'count' => $count];
    }

    public function getMessages(int $idDiscussion) // : Collection
    {
        $matchThese = [ ];

        $idDiscussion == 0 ?: array_push($matchThese, ['idDiscussion', $idDiscussion]);

        $list = $this->_context
            ->where($matchThese)
            // ->with(['otheruser:id,nom'])
            ->with(['otheruser', 'me'])
            ->get()
            ;

        return $list;
    }


}
