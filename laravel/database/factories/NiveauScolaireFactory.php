<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\NiveauScolaire;
use Faker\Generator as Faker;

$factory->define(NiveauScolaire::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        "1ére Primaire",
        "2éme Primaire",
        "3éme Primaire",
        "4éme Primaire",
        "5éme Primaire",
        "6éme Primaire",
        "1ére Collège",
        "2éme Collège",
        "3éme Collège",
        "Tronc commun",
        "1ére Bac",
        "2éme Bac",
    ];
    $listAr = [
        "الابتدائية",
        "الثاني الابتدائي",
        "الثالثة الابتدائية",
        "الرابع الابتدائي",
        "الخامسة الابتدائية",
        "6 الابتدائية",
        "1st كلية",
        "2 الكلية",
        "الكلية الثالثة",
        "جذع مشترك",
        "1st البكالوريا",
        "2nd البكالوريا",
    ];

    $values = [
        [150, 127.5, 120, 105],
        [150, 127.5, 120, 105],
        [150, 127.5, 120, 105],
        [150, 127.5, 120, 105],
        [150, 127.5, 120, 105],

        [180, 150, 142.5, 120],

        [195, 172.5, 157.5, 142.5],
        [195, 172.5, 157.5, 142.5],
        [210, 187.5, 165, 150],

        [225, 202.5, 180, 165],
        [240, 217.5, 195, 180],
        [255, 232.5, 210, 187.5],
    ];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i++],
        'idCycle' => $i <= 6 ? 1 : ($i <= 9 ? 2 : 3),
        'coursDomicileIndividuel' => $values[$i - 1][0],
        'coursDomicileGroupe' => $values[$i - 1][1],
        'coursLigneIndividuel' => $values[$i - 1][2],
        'coursLigneGroupe' => $values[$i - 1][3],
    ];
});
