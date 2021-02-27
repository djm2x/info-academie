<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TypeActivite;
use Faker\Generator as Faker;

$factory->define(TypeActivite::class, function (Faker $faker) {
    static $i = 0;
    $list = ['Soutien scolaire', 'Langues', 'Activites paralelle'];
    $listAr = ['الدفاع المدرسي', 'لغة', 'الأنشطة الموازية'];
    $isActive = [true, false, false];

    return [
        //
        'nom' => $list[$i],
        'nomAr' => $listAr[$i],
        'imageUrl' => $faker->imageUrl(640, 480, 'technics'),
        'active' => $isActive[$i++],
    ];
});
