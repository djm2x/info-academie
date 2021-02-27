<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\OffreProf;
use Faker\Generator as Faker;

$factory->define(OffreProf::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        '65% - 95%',
        '55% - 95%',
        '55% - 95%',
        '50% - 95%',
    ];
    return [
        'interval' => $list[$i],
        'value' => 75,
        'idTypeCours' => ++$i,
    ];
});
