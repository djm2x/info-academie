<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Discussion;
use Faker\Generator as Faker;

$factory->define(Discussion::class, function (Faker $faker) {
    static $i = 1;
    return [
        'unReaded' => +$faker->numberBetween(0, 5),
        'date' => $faker->dateTime,
        'idMe' => 1,
        'idOtherUser' => +($i++ + 51),
    ];
});
