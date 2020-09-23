<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\LieuCours;
use Faker\Generator as Faker;

$factory->define(LieuCours::class, function (Faker $faker) {
    static $i = 0;
    $list = ['Donner des cours à distance', 'Aller au domicile de l\'élève', 'Accueillez l\'étudiant chez moi'];
    $listAr = ['إعطاء دروس عن بعد', 'الذهاب لمنزل التلميذ', 'استقبال التلميذ في منزلي'];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i++],
    ];
});
