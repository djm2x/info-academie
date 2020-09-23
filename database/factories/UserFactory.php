<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'nom' => $faker->firstName(),
        'prenom' => $faker->lastName,
        'tel1' => $faker->phoneNumber,
        'tel2' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'password' => '123',
        'isActive' => $faker->boolean,
        'date' => $faker->dateTime,
        'adresse' => $faker->address,
        'imageUrl' => 'assets/404.jpg',
        'cin' => $faker->creditCardNumber,
        'role' => $faker->randomElement(['prof', 'student']),
        'idVille' => $faker->numberBetween(1, 3),
    ];
});
