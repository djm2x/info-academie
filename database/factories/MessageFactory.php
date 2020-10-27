<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Message;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
    static $i = 1;
    return [
        'object' => $faker->sentence(),
        'message' => $faker->paragraph(),
        'vu' => $faker->boolean(),
        'date' => $faker->dateTime,
        'idCours' => 1,
        'otherUserName' => 'otherUserName',
        'idMe' => +($i++ % 2 == 0 ? 1 : 51),
        'idOtherUser' => +$faker->numberBetween(51, 100),
    ];
});
