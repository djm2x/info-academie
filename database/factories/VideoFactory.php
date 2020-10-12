<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        'Devil May Cry 5 - BOSS RUSH',
        'Doctor Strange - Best Scenes',
        'Angular Date Parsing Gotchas',
    ];

    $videos = [
        'https://www.youtube.com/watch?v=xA74A8IjqC8',
        'https://www.youtube.com/watch?v=pz0wB9y7h2I',
        'https://www.youtube.com/watch?v=phO_gOBI2mg',
    ];
    return [
        'title' => $list[$i],
        'order' => $i + 1,
        'description' => '',
        'urlVideo' => $videos[$i++],
        'date' => $faker->dateTime,
    ];
});
