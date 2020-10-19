<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cours;
use Faker\Generator as Faker;

$factory->define(Cours::class, function (Faker $faker) {
    static $i = 0;
    $list = [
        [1, 'Mathématiques', 'الرياضيات'], [1 ,'Activité scientifique', 'النشاط العلمي'], [1 ,'Arabe', 'العربية'],[1, 'Français', 'الفرنسية'], [1 ,'Education Islamique', 'تربية إسلامية'], [1 ,'Éducation artistique', 'التربية الفنية'],
        [2, 'Mathématiques', 'الرياضيات'], [2 ,'Activité scientifique', 'النشاط العلمي'], [2 ,'Arabe', 'العربية'],[2, 'Français', 'الفرنسية'], [2 ,'Education Islamique', 'تربية إسلامية'], [2 ,'Éducation artistique', 'التربية الفنية'],
        [3, 'Mathématiques', 'الرياضيات'], [3 ,'Activité scientifique', 'النشاط العلمي'], [3 ,'Arabe', 'العربية'],[3, 'Français', 'الفرنسية'], [3 ,'Education Islamique', 'تربية إسلامية'], [3 ,'Éducation artistique', 'التربية الفنية'],
        [4, 'Mathématiques', 'الرياضيات'], [4 ,'Activité scientifique', 'النشاط العلمي'], [4 ,'Arabe', 'العربية'],[4, 'Français', 'الفرنسية'], [4 ,'Education Islamique', 'تربية إسلامية'], [4 ,'Éducation artistique', 'التربية الفنية'], [4 ,'Histoire Géographie', 'التاريخ والجغرافيا'],
        [5, 'Mathématiques', 'الرياضيات'], [5 ,'Activité scientifique', 'النشاط العلمي'], [5 ,'Arabe', 'العربية'],[5, 'Français', 'الفرنسية'], [5 ,'Education Islamique', 'تربية إسلامية'], [5 ,'Éducation artistique', 'التربية الفنية'], [5 ,'Histoire Géographie', 'التاريخ والجغرافيا'],
        [6, 'Mathématiques', 'الرياضيات'], [6 ,'Activité scientifique', 'النشاط العلمي'], [6 ,'Arabe', 'العربية'],[6, 'Français', 'الفرنسية'], [6 ,'Education Islamique', 'تربية إسلامية'], [6 ,'Éducation artistique', 'التربية الفنية'], [6 ,'Histoire Géographie', 'التاريخ والجغرافيا'],
        [7, 'Mathématiques', 'الرياضيات'], [7 ,'Physique et Chimie', 'الفيزياء والكيمياء'],[7 ,'Sciences de la Vie et de la Terre ', 'علوم الأرض والحياة'], [7 ,'Arabe', 'العربية'],[7, 'Français', 'الفرنسية'], [7 ,'Education Islamique', 'تربية إسلامية'], [7 ,'Informatique', 'علوم الكمبيوتر'], [7 ,'Histoire Géographie', 'التاريخ والجغرافيا'],
        [8, 'Mathématiques', 'الرياضيات'], [8 ,'Physique et Chimie', 'الفيزياء والكيمياء'],[8 ,'Sciences de la Vie et de la Terre ', 'علوم الأرض والحياة'], [8 ,'Arabe', 'العربية'],[8, 'Français', 'الفرنسية'], [8 ,'Education Islamique', 'تربية إسلامية'], [8 ,'Informatique', 'علوم الكمبيوتر'], [8 ,'Histoire Géographie', 'التاريخ والجغرافيا'],[8 ,'Technologie Industrielle', 'التكنولوجيا الصناعية'],
        [9, 'Mathématiques', 'الرياضيات'], [9 ,'Physique et Chimie', 'الفيزياء والكيمياء'],[9 ,'Sciences de la Vie et de la Terre ', 'علوم الأرض والحياة'], [9 ,'Arabe', 'العربية'],[9, 'Français', 'الفرنسية'], [9 ,'Education Islamique', 'تربية إسلامية'], [9 ,'Informatique', 'علوم الكمبيوتر'], [9 ,'Histoire Géographie', 'التاريخ والجغرافيا'],[9 ,'Technologie Industrielle', 'التكنولوجيا الصناعية'],[9 ,'Anglais', 'الإنجليزية'],
        [10, 'Mathématiques', 'الرياضيات'], [10 ,'Physique et Chimie', 'الفيزياء والكيمياء'],[10 ,'Sciences de la Vie et de la Terre ', 'علوم الأرض والحياة'], [10 ,'Arabe', 'العربية'],[10, 'Français', 'الفرنسية'], [10 ,'Education Islamique', 'تربية إسلامية'], [10 ,'Informatique', 'علوم الكمبيوتر'], [10 ,'Histoire Géographie', 'التاريخ والجغرافيا'],[10 ,'Philosophie', 'الفلسفة'],[10 ,'Anglais', 'الإنجليزية'],
        [11, 'Mathématiques', 'الرياضيات'], [11 ,'Physique et Chimie', 'الفيزياء والكيمياء'],[11 ,'Sciences de la Vie et de la Terre ', 'علوم الأرض والحياة'], [11 ,'Arabe', 'العربية'],[11, 'Français', 'الفرنسية'], [11 ,'Education Islamique', 'تربية إسلامية'], [11 ,'Histoire Géographie', 'التاريخ والجغرافيا'],[11 ,'Philosophie', 'الفلسفة'],[11 ,'Anglais', 'الإنجليزية'],
        [12, 'Mathématiques', 'الرياضيات'], [12 ,'Physique et Chimie', 'الفيزياء والكيمياء'],[12 ,'Sciences de la Vie et de la Terre ', 'علوم الأرض والحياة'], [12 ,'Arabe', 'العربية'],[12, 'Français', 'الفرنسية'], [12 ,'Education Islamique', 'تربية إسلامية'],[12 ,'Philosophie', 'الفلسفة'],[12 ,'Anglais', 'الإنجليزية'],
    ];

    return [
        //
        'nom' => $list[$i][1],
        'nomAr' => $list[$i][2],
        'filesUrl' => '',
        'videosUrl' => '',
        'idBranche' => $list[$i][0] == 10 ? 1 : ($list[$i][0] == 11 ? 6 : ($list[$i][0] == 12 ? 13 : null)),
        'idNiveauScolaire' => $list[$i++][0],
    ];
});
