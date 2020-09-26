<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Activite;
use Faker\Generator as Faker;

$factory->define(Activite::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        ['Math', 'رياضيات', 1],
        ['Arab', 'عرب', 1],
        ['Français', 'فرنسي', 1],
        ['Arab', 'عرب', 2],
        ['Français', 'فرنسي', 2],
        ['Anglais', 'الإنجليزية', 2],
        ['dessin', 'رسم', 3],
        ['calcule', 'محسوب', 3],
        ['music', 'موسيقى', 3],
    ];
    return [
        'nom' => $list[$i][0],
        'nomAr' => $list[$i][1],
        'imageUrl' => $faker->imageUrl(640, 480, 'business'),
        'idTypeActivite' => $list[$i++][2],
    ];
});
