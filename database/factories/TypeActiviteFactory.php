<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TypeActivite;
use Faker\Generator as Faker;

$factory->define(TypeActivite::class, function (Faker $faker) {
    static $i = 0;
    $list = ['Soutenance scolaire', 'Langage', 'Activites paralelle'];
    $listAr = ['الدفاع المدرسي', 'لغة', 'الأنشطة الموازية'];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i++],
        'imageUrl' => 'assets/404.jpg',
    ];
});
