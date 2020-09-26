<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;


Route::get('', 'HomeController@index')->name('home');
Route::get('/profs/{startIndex}/{pageSize}/{typeActivite}/{activite}/{typeCours}/{lieuCours}/{niveauScolaire}', 'HomeController@profs')->name('profs');
Route::get('/profs/{id}', 'HomeController@prof')->name('prof');



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

