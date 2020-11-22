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

    Route::get('/typeActivites/getAllWithActivites', 'TypeActiviteController@getAllWithActivites');
Route::apiResource('villes', 'VilleController');
Route::apiResource('niveauScolaires', 'NiveauScolaireController');
Route::apiResource('typeCours', 'TypeCoursController');
Route::apiResource('profs', 'ProfController');
Route::apiResource('students', 'StudentController');


Route::group(['middleware' => 'auth.jwt'], function () {

    // typeActivites
    Route::get('/typeActivites/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'TypeActiviteController@getAll');
    Route::apiResource('typeActivites', 'TypeActiviteController');


    // messages
    Route::post('/messages/postMessage', 'MessageController@postMessage');
    Route::get('/messages/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'MessageController@getAll');
    Route::get('/messages/getMessages/{idDiscussion}', 'MessageController@getMessages');
    Route::apiResource('messages', 'MessageController');

    // discussions
    Route::get('/discussions/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'DiscussionController@getAll');
    Route::get('/discussions/getContacts/{idUser}', 'DiscussionController@getContacts');
    Route::apiResource('discussions', 'DiscussionController');

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
    Route::get('/niveauScolaires/getAll2', 'NiveauScolaireController@getAll2');

    // cours
    Route::get('/cours/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}/{idNiveauScolaire}/{idBranche}', 'CoursController@getAll');
    Route::apiResource('cours', 'CoursController');

    // eventProf
    Route::get('/eventProfs/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{year}/{month}/{idUser}/{title}', 'EventProfController@getAll');
    Route::get('/eventProfs/getByYearMonth/{year}/{month}/{idUser}', 'EventProfController@getByYearMonth');
    Route::apiResource('eventProfs', 'EventProfController');

    // branches
    Route::get('/branches/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}/{idNiveauScolaire}', 'BrancheController@getAll');
    Route::get('/branches/getByForeignkey/{propertyName}/{value}', 'BrancheController@getByForeignkey');
    Route::apiResource('branches', 'BrancheController');

    // villes
    Route::get('/villes/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'VilleController@getAll');

    // videos
    Route::get('/videos/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{title}', 'VideoController@getAll');
    Route::apiResource('videos', 'VideoController');

    // offreProfs
    Route::get('/offreProfs/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'OffreProfController@getAll');
    Route::get('/offreProfs/getAll2', 'OffreProfController@getAll2');
    Route::apiResource('offreProfs', 'OffreProfController');

    // typeCours
    Route::get('/typeCours/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'TypeCoursController@getAll');

    // lieuCours
    Route::get('/lieuCours/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{nomAr}', 'LieuCoursController@getAll');
    Route::apiResource('lieuCours', 'LieuCoursController');

    // profs
    Route::get('/profs/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'ProfController@getAll');
    Route::get('/profs/getByIdUser/{id}', 'ProfController@getByIdUser');
    Route::get('/profs/updateLink/{id}/{lien}', 'ProfController@updateLink');

    // students
    Route::get('/students/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'StudentController@getAll');
    Route::get('/students/getByIdUser/{id}', 'StudentController@getByIdUser');

    // users
    Route::get('/users/getAll/{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{prenom}/{email}/{tel}/{adresse}/{cin}/{role}/{idVille}', 'UserController@getAll');
    Route::get('/users/autocomplete/{column}/{value}', 'UserController@autocomplete');
    Route::apiResource('users', 'UserController');
});
//accounts
Route::post('/accounts/login', 'AccountController@login');
// Route::middleware('auth:sanctum')->post('/accounts/login', 'AccountController@login');
Route::post('/accounts/create', 'AccountController@register');
// Route::get('/accounts/me', 'AccountController@me');
Route::get('/accounts/getClaims/{token}', 'AccountController@getClaims');
Route::post('/accounts/broadcasting', 'AccountController@broadcasting');

Route::post('/broadcasting/auth', 'AccountController@broadcasting')->middleware('auth:api');

Route::post('/contactUs/send', 'ContactUsController@send');



// Route::group(['middleware' => 'camel.case'], function () {
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {

    return ['middleware' => 'api', 'prefix' => 'auth'];
});
