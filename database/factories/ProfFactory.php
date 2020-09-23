<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Prof;
use Faker\Generator as Faker;

$factory->define(Prof::class, function (Faker $faker) {
    static $i = 1;
    return [
        //
        'description' => $faker->paragraph(),
        'experience' => $faker->paragraph(),
        'approche' => $faker->paragraph(),
        'intro' => $faker->title,
        'videoUrl' => '',
        'cvUrl' => '',
        'prixHrWeb' => $faker->numberBetween(20, 100),
        'prixHrHome' => $faker->numberBetween(20, 100),
        'prixHrWebGroupe' => $faker->numberBetween(20, 100),
        'prixHrHomeGroupe' => $faker->numberBetween(20, 100),
        'idsTypeActivites' => $faker->randomElement([';1;',';2;',';3;']),
        'idsActivites' => $faker->randomElement([';1;',';2;',';3;']),
        'idsTypeCours' => $faker->randomElement([';1;',';2;']),
        'idsLieuCours' => $faker->randomElement([';1;',';2;',';3;']),
        'idsNiveauScolaires' => $faker->randomElement([';1;',';2;',';3;',';4;',';5;']),
        'idUser' => $i++,
    ];

    // function generator() {
    //     for ($i = 1; $i <= 10; ++$i)
    //         yield $i;
    // }
    
    // $number = generator();
    
    // $factory->define(\App\Episode::class, function (Faker $faker, array $extraData) use ($factory, &$number) {
    //     if (is_null($number->current())) {
    //         $number = generator();
    //     }
    //     $data = [
    //         'title' => sprintf('Episode %d', $number->current()),
    //         'description' => $faker->text(200),
    //         'thumbnail' => asset('images') . sprintf('/%d.jpg', $extraData['show_id'])
    //     ];
    //     $number->next();
    //     return $data;
    // });

    // $autoIncrement = autoIncrement();

    // $factory->define(App\Post::class, function (Faker\Generator $faker) use ($autoIncrement) {
    //     $autoIncrement->next();
    //     return [
    //     .....
    //     ........
    //         'weight' => $autoIncrement->current()
    //     ];
    // });

    // function autoIncrement()
    // {
    //     for ($i = 0; $i < 1000; $i++) {
    //         yield $i;
    //     }
    // }
});
