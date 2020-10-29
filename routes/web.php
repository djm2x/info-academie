<?php

use App\Events\MessageEvent;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;


Route::get('', 'HomeController@index')->name('home');
Route::get('/profs/{startIndex}/{pageSize}/{typeActivite}/{activite}/{typeCours}/{lieuCours}/{niveauScolaire}/{prof}', 'HomeController@profs')->name('profs');
Route::get('/videos/{startIndex}/{pageSize}', 'HomeController@videos')->name('videos');
Route::get('/profs/{id}', 'HomeController@prof')->name('prof');
// Route::get('/broadcasting/auth', 'AccountController@broadcasting')->middleware('auth:api')->name('broadcasting');





// Route::get('event', function() {

//     // this fires the event
//     $message = ['data'=>'hi is me'];

//     event(new MessageEvent($message));

//     return "event fired";
// });


Route::get('/phpinfo', function() {
    return phpinfo();
});

Route::get('localization/{locale}', function ($locale) {
    if (! in_array($locale, ['fr', 'ar'])) {
        abort(400);
    }
    // dd($locale);
    // App::setLocale($locale);

    // $locale2 = App::getLocale();

    // dd($locale2);

    //
    Session::put('locale', $locale);
    return redirect()->back();

    // $locale = App::getLocale();

    // if (App::isLocale('en')) {
    //     //
    // }
});


Route::fallback(function (string $route) {

    if(beginWith($route, "admin") || beginWith($route, "auth")) {
        return View::make('index');
    }

    // return redirect('');
});


function beginWith($str, $begnString) {
    $len = strlen($begnString);
    return (substr($str, 0, $len) === $begnString);
}

Route::get('/length', function() {
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
    return count($list);
});

