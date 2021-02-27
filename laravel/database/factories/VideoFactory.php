<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        'جديد تعلم اللغه الانجليزيه عن طريق التواصل للمبتدئين ',
        'EP13 حوارات لتعلم اللغة الفرنسية للمبتدئين : الذهاب إلى المحكمة',
        'EP12  حوارات لتعلم اللغة الفرنسية للمبتدئين : حجز رحلة طيران',
        '12 تعلم الإنجليزية من الصفر مع أنفو أكاديمي أسماء الحاجيات الشخصية  الحلقة',
        '11تعلم الإنجليزية من الصفر مع أنفو أكاديمي أسماء الملابس الحلقة',
        'EP 11 حوارات لتعلم اللغة الفرنسية للمبتدئين : الوجبات السريعة و بعض الصفات',
        'جديد تعلم اللغه الانجليزيه عن طريق التواصل للمبتدئين ',
        'EP13 حوارات لتعلم اللغة الفرنسية للمبتدئين : الذهاب إلى المحكمة',
        'EP12  حوارات لتعلم اللغة الفرنسية للمبتدئين : حجز رحلة طيران',
        '12 تعلم الإنجليزية من الصفر مع أنفو أكاديمي أسماء الحاجيات الشخصية  الحلقة',
        '11تعلم الإنجليزية من الصفر مع أنفو أكاديمي أسماء الملابس الحلقة',
        'EP 11 حوارات لتعلم اللغة الفرنسية للمبتدئين : الوجبات السريعة و بعض الصفات',
    ];

    $videos = [
        'https://www.youtube.com/watch?v=5GI5Xma6WHA',
        'https://www.youtube.com/watch?v=Pqe3kKoG_Ao',
        'https://www.youtube.com/watch?v=vNjbwk4S-LI',
        'https://www.youtube.com/watch?v=t7Rsnoxitnw',
        'https://www.youtube.com/watch?v=98wpFWaGceg',
        'https://www.youtube.com/watch?v=d_vUZEByM2o',
        'https://www.youtube.com/watch?v=5GI5Xma6WHA',
        'https://www.youtube.com/watch?v=Pqe3kKoG_Ao',
        'https://www.youtube.com/watch?v=vNjbwk4S-LI',
        'https://www.youtube.com/watch?v=t7Rsnoxitnw',
        'https://www.youtube.com/watch?v=98wpFWaGceg',
        'https://www.youtube.com/watch?v=d_vUZEByM2o',
    ];
    return [
        'title' => $list[$i],
        'order' => $i + 1,
        'description' => '',
        'urlVideo' => $videos[$i++],
        'date' => $faker->dateTime,
    ];
});
