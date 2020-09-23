<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TypeCours;
use Faker\Generator as Faker;

$factory->define(TypeCours::class, function (Faker $faker) {
    static $i = 0;
    $list = ['Cours individuel', 'Cours pour groupe'];
    $listAr = ['دروس فردية', 'دروس جماعية'];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i++],
    ];
});
