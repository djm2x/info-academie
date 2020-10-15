<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    static $i = 1;
    return [
        'nom' => $faker->firstName(),
        'prenom' => $faker->lastName,
        'tel1' => $faker->phoneNumber,
        'tel2' => $faker->phoneNumber,
        'email' => $i == 1 ? 'prof@angular.io' : ($i == 51 ? 'student@angular.io' : $faker->unique()->safeEmail),
        'password' => '123',
        'isActive' => $faker->boolean,
        'date' => $faker->dateTime,
        'adresse' => $faker->address,
        'imageUrl' => $faker->imageUrl(640, 480, 'people'), // 'assets/404.jpg',
        'cin' => $faker->creditCardNumber,
        'role' => $i++ <= 50 ? 'prof' : 'student',
        'idVille' => $faker->numberBetween(1, 3),
    ];
});
