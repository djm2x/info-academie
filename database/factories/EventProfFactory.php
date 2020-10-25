<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\EventProf;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;

$factory->define(EventProf::class, function (Faker $faker) {
    static $i = 1;
    $year = 2020;
    $month = $faker->numberBetween(1, 12);
    $day = $faker->numberBetween(1, 30);
    $hour = $i % 2 == 0 ? '09' : '17';
    $start = new Carbon("{$year}-{$month}-{$day} {$hour}:00:00");
    $end = new Carbon("{$year}-{$month}-{$day} {$hour}:00:00");
    // $datetime = new Carbon('2016-01-23 11:53:20');
    if ($i == 10) {
        $i = 1;
    }
    return [
        //
        'title' => $faker->domainName ,
        'start' => $start ,
        'end' => $end ,
        'color' => '#ad2121_#FAE3E3' ,
        'draggable' => true,
        'resizable' => "1_1",
        'month' => $month,
        'year' => $year ,
        'idUser' => $i++,
    ];
});
