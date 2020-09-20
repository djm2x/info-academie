<?php

use App\Http\Controllers\TypeActiviteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::namespace('Api')->group(function () {
});

// teste state
Route::get('/state/one', 'PlanificationController@state');

// testApi
Route::get('/home/list', 'HomeController@testApi');

// FILES UPLOAD

Route::post('/files/angEditorUploadImage/{folder}', 'FilesController@angEditorUploadImage');

Route::post('/files/uploadFiles/{folder}', 'FilesController@uploadFiles');
Route::post('/files/deleteFiles', 'FilesController@deleteFiles');

// typeActivites  
Route::get('/typeActivites/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'TypeActiviteController@getAll');
Route::get('/typeActivites/getAllWithActivites', 'TypeActiviteController@getAllWithActivites');
Route::apiResource('typeActivites', 'TypeActiviteController');

// niveauScolaires  

Route::get('/niveauScolaires/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'NiveauScolaireController@getAll');
Route::apiResource('niveauScolaires', 'NiveauScolaireController');

// villes
Route::get('/villes/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'VilleController@getAll');
Route::apiResource('villes', 'VilleController');
// typeCours
Route::get('/typeCours/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'TypeCoursController@getAll');
Route::apiResource('typeCours', 'TypeCoursController');
// lieuCours
Route::get('/lieuCours/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'LieuCoursController@getAll');
Route::apiResource('lieuCours', 'LieuCoursController');
// profs
Route::get('/profs/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'ProfController@getAll');
Route::apiResource('profs', 'ProfController');
// students
Route::get('/students/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'StudentController@getAll');
Route::apiResource('students', 'StudentController');

Route::group(['middleware' => 'auth.jwt'], function () {

    Route::get('/users/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'UserController@getAll');
    Route::apiResource('users', 'UserController');

    //regions
    Route::get('/regions/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'RegionController@getList');
    Route::apiResource('regions', 'RegionController');

    //activite
    Route::get('/activites/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'ActiviteController@getAll');
    Route::apiResource('activites', 'ActiviteController');

    //planifications
    Route::get('/planifications/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'PlanificationController@getAll');
    Route::apiResource('planifications', 'PlanificationController');

    //presidents
    Route::get('/presidents/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'PresidentController@getList');
    Route::apiResource('presidents', 'PresidentController');

    //galeries
    Route::get('/galeries/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'GalerieController@getList');
    Route::apiResource('galeries', 'GalerieController');

    //blogs
    Route::get('/blogs/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'BlogController@getAll');
    Route::apiResource('blogs', 'BlogController');

    

    //contacts
    Route::get('/contacts/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'ContactController@getList');
    // Route::apiResource('contacts', 'ContactController');
    Route::get('/contacts/{id}', 'ContactController@show');
    Route::delete('/contacts/{id}', 'ContactController@destroy');
    Route::put('/contacts/{id}', 'ContactController@update');

    // news letter
    Route::get('/newsLetter/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'NewsLetterController@getList');
    // Route::apiResource('newsLetter', 'NewsLetterController');
    Route::get('/newsLetter/{id}', 'NewsLetterController@show');
    Route::delete('/newsLetter/{id}', 'NewsLetterController@destroy');
    Route::put('/newsLetter/{id}', 'NewsLetterController@update');
    //actualite
    Route::get('/actualites/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'ActualiteController@getAll');
    Route::apiResource('actualites', 'ActualiteController');
});

//actulaite
Route::get('/actualites/pageApi/{startIndex}/{pageSize}', 'ActualiteController@pageApi');
Route::get('/actualites/news/{count}', 'ActualiteController@news');

Route::post('/contacts', 'ContactController@store');
Route::post('/newsLetter', 'NewsLetterController@store');

//activite
Route::get('/activites/listApi/{startIndex}/{pageSize}/{idRegion}/{dateOrderDir}', 'ActiviteController@listApi');
//planifications
Route::get('/planifications/getLast/{city}', 'PlanificationController@getLast');


//accounts
Route::post('/accounts/login', 'AccountController@login');
// Route::middleware('auth:sanctum')->post('/accounts/login', 'AccountController@login');

Route::post('/accounts/create', 'AccountController@register');
// Route::apiResource('accounts', 'UserController');
