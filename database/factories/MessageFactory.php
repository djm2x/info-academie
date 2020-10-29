<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Message;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;

$factory->define(Message::class, function (Faker $faker) {
    static $i = 1;
    return [
        'object' => $faker->sentence(),
        'message' => $faker->paragraph(),
        'vu' => $faker->boolean(),
        'date' => Carbon::now(),
        'idCours' => 1,
        'otherUserName' => 'otherUserName',
        'otherUserImage' => 'otherUserImage',
        'idMe' => 1,
        'idOtherUser' => function() use (&$i){
            $i++;
            if ($i + 51 <= 61) {
                return $i + 51;
            } else {
                $i = 1;
                return $i + 51;
            }
        } ,
        'idDiscussion' => $i,
    ];
});
