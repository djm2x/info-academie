<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;


Route::get('', 'HomeController@index')->name('home');

//
Route::get('/cntsh/{name}', 'PresidentController@page');
Route::get('/sang/{name}', 'PresidentController@page');
Route::get('/partenaires/{name}', 'PresidentController@page');
Route::get('/planification', 'PlanificationController@page')->name('planification');
Route::get('/don-du-song/{name}', 'PresidentController@page');


Route::get('/activite', 'ActiviteController@list')->name('activite');
Route::get('/activite/{id}', 'ActiviteController@detail')->name('detail-activite');

Route::get('/president', 'PresidentController@list')->name('president');
Route::get('/blog', 'BlogController@list')->name('blog');
// Route::get('/partenaire', 'PartenaireController@list')->name('partenaire');
Route::get('/galerie', 'GalerieController@list')->name('galerie');
Route::get('/detail-galerie/{id}', 'GalerieController@detail')->name('detail-galerie');
Route::get('/contact', 'ContactController@create')->name('contact');

Route::get('/actualite', 'ActualiteController@page')->name('actualites');
Route::get('/actualite/{id}', 'ActualiteController@detail');

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

    return redirect('');
});


function beginWith($str, $begnString) {
    $len = strlen($begnString);
    return (substr($str, 0, $len) === $begnString);
}

