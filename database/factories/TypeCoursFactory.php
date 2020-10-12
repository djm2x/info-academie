<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TypeCours;
use Faker\Generator as Faker;

$factory->define(TypeCours::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        'Cours a domicile individuel',
        'Cours a domicile groupe',
        'Cours en ligne individuel',
        'Cours en ligne groupe',
    ];
    $listAr = [
        "دروس منزلية فردية",
        "دروس جماعية في المنزل",
        "دورة فردية عبر الإنترنت" ,
        "دورة جماعية عبر الإنترنت" ,
    ];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i++],
    ];
});
