<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Branche;
use Faker\Generator as Faker;

$factory->define(Branche::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        [10, 'Tronc Commun', 'جذع مشترك'],
        [10, 'Sciences', '     علم'],
        [10, 'Technologies', '     التقنيات'],
        [10, 'Lettres et Sciences Humaines', '     الآداب والعلوم الإنسانية'],
        [11, 'Sciences Mathématiques', '     العلوم الرياضية'],
        [11, 'Sciences Expérimentales', '     علوم تجريبية'],
        [11, 'Sciences et Technologies Électriques', '     العلوم والتقنيات الكهربائية'],
        [11, 'Sciences et Technologies Mécaniques', '     العلوم الميكانيكية والتقنيات'],
        [11, 'Sciences Économiques et Gestion', '     الاقتصاد والإدارة'],
        [11, 'Lettres et Sciences Humaines', '     الآداب والعلوم الإنسانية'],
        [12, 'Sciences Mathématiques A', '     العلوم الرياضية أ'],
        [12, 'Sciences Mathématiques B', '     العلوم الرياضية ب'],
        [12, 'Sciences Physiques', '     علوم فيزيائية'],
        [12, 'Sciences de la Vie et de la Terre (SVT)', '     علوم الأرض والحياة (SVT)'],
        [12, 'Sciences Agronomiques', '     العلوم الزراعية'],
        [12, 'Sciences et Technologies Électriques', '     العلوم والتقنيات الكهربائية'],
        [12, 'Sciences et Technologies Mécaniques', '     العلوم الميكانيكية والتقنيات'],
        [12, 'Sciences Économiques', '     علوم إقتصادية'],
        [12, 'Sciences de Gestion Comptable (SGC)', '     علوم إدارة المحاسبة (SGC)'],
        [12, 'Lettres', '     حروف'],
        [12, 'Sciences Humaines', '     علوم اجتماعية'],
    ];
    return [
        'nom' => $list[$i][1],
        'nomAr' => $list[$i][2],
        'idNiveauScolaire' => $list[$i++][0],
    ];
});
