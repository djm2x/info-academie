<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cours;
use Faker\Generator as Faker;

$factory->define(Cours::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        [1, 'Mathématiques', 'الرياضيات'], [1 ,'Français', 'فرنسي'], [1 ,'Arabe', 'عرب'],
        [2, 'Mathématiques', 'الرياضيات'], [2, 'Français', 'فرنسي'], [2, 'Arabe', 'عرب'],
        [3, 'Mathématiques', 'الرياضيات'], [3, 'Français', 'فرنسي'], [3, 'Arabe', 'عرب'],
        [4, 'Mathématiques', 'الرياضيات'], [4, 'Français', 'فرنسي'], [4, 'Arabe', 'عرب'],
        [5, 'Mathématiques', 'الرياضيات'], [5, 'Français', 'فرنسي'], [5, 'Arabe', 'عرب'],
        [6, 'Mathématiques', 'الرياضيات'], [6, 'Français', 'فرنسي'], [6, 'Arabe', 'عرب'],
        [7, 'Mathématiques', 'الرياضيات'], [7, 'Français', 'فرنسي'], [7, 'Arabe', 'عرب'],
        [8, 'Mathématiques', 'الرياضيات'], [8, 'Français', 'فرنسي'], [8, 'Arabe', 'عرب'],
        [9, 'Mathématiques', 'الرياضيات'], [9, 'Français', 'فرنسي'], [9, 'Arabe', 'عرب'],
        [10, 'Mathématiques', 'الرياضيات'], [10, 'Français', 'فرنسي'], [10, 'Arabe', 'عرب'],
        [11, 'Mathématiques', 'الرياضيات'], [11, 'Français', 'فرنسي'], [11, 'Arabe', 'عرب'],
        [12, 'Mathématiques', 'الرياضيات'], [12, 'Français', 'فرنسي'], [12, 'Arabe', 'عرب'],
    ];

    return [
        //
        'nom' => $list[$i][1],
        'nomAr' => $list[$i][2],
        'filesUrl' => '',
        'vidoesUrl' => '',
        'idNiveauScolaire' => $list[$i++][0],
    ];
});
