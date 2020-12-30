<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Student;
use Faker\Generator as Faker;

$factory->define(Student::class, function (Faker $faker) {
    static $i = 51;
    return [
        //
        'ecole' => $faker->domainName ,
        'niveau' => $faker->numberBetween(1, 12) ,
        'branche' => 1 ,
        'nomParent' => $faker->firstNameMale ,
        'prenomParent' => $faker->lastName ,
        'tel1Parent' => $faker->phoneNumber,
        'tel2Parent' => $faker->phoneNumber,
        'idUser' => $i++ ,
    ];
});
