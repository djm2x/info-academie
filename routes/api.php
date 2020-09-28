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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::namespace('Api')->group(function () {
// });

// FILES UPLOAD

Route::post('/files/angEditorUploadImage/{folder}', 'FilesController@angEditorUploadImage');

Route::post('/files/uploadFiles/{folder}', 'FilesController@uploadFiles');
Route::post('/files/deleteFiles', 'FilesController@deleteFiles');

// Route::group(['middleware' => 'camel.case'], function () {
    // typeActivites  
    Route::get('/typeActivites/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'TypeActiviteController@getAll');
    Route::get('/typeActivites/getAllWithActivites', 'TypeActiviteController@getAllWithActivites');
    Route::apiResource('typeActivites', 'TypeActiviteController');

    // activites  
    Route::get('/activites/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}/{idTypeActivite}', 'ActiviteController@getAll');
    Route::apiResource('activites', 'ActiviteController');

    // messages  
    Route::get('/messages/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{object}/{message}/{idUser}', 'MessageController@getAll');
    Route::apiResource('messages', 'MessageController');

    // contactUs  
    Route::get('/contactUs/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{object}/{message}/{idUser}', 'ContactUsController@getAll');
    Route::apiResource('contactUs', 'ContactUsController');

    // niveauScolaires  
    Route::get('/niveauScolaires/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'NiveauScolaireController@getAll');
    Route::apiResource('niveauScolaires', 'NiveauScolaireController');

    // villes
    Route::get('/villes/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'VilleController@getAll');
    Route::apiResource('villes', 'VilleController');

    // typeCours
    Route::get('/typeCours/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'TypeCoursController@getAll');
    Route::apiResource('typeCours', 'TypeCoursController');

    // lieuCours
    Route::get('/lieuCours/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'LieuCoursController@getAll');
    Route::apiResource('lieuCours', 'LieuCoursController');

    // profs
    Route::get('/profs/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'ProfController@getAll');
    Route::get('/profs/getByIdUser/{id}', 'ProfController@getByIdUser');
    Route::apiResource('profs', 'ProfController');

    // students
    Route::get('/students/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'StudentController@getAll');
    Route::get('/students/getByIdUser/{id}', 'StudentController@getByIdUser');
    Route::apiResource('students', 'StudentController');

    // users
    Route::get('/users/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{prenom}/{email}/{tel}/{adresse}/{cin}/{role}/{idVille}', 'UserController@getAll');
    Route::apiResource('users', 'UserController');

    //accounts
    Route::post('/accounts/login', 'AccountController@login');
    // Route::middleware('auth:sanctum')->post('/accounts/login', 'AccountController@login');
    Route::post('/accounts/create', 'AccountController@register');
// });
// Route::group(['middleware' => 'auth.jwt'], function () {
// });
