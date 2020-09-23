<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\NiveauScolaire;
use Faker\Generator as Faker;

$factory->define(NiveauScolaire::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        'Primaire',
        'Collège',
        'Tronc commun',
        '1er bac',
        '2eme bac',
    ];
    $listAr = [
        'ابتدائي',
        'إعدادي',
        'جدع مشترك ',
        'سنة أولى بكالوريا',
        'سنة ثانية بكالوريا',

    ];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i++],
    ];
});
