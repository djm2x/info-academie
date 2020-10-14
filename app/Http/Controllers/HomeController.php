<?php

namespace App\Http\Controllers;

use App\Activite;
use App\Actualite;
use Illuminate\Http\Request;
use App\galerie;
use App\LieuCours;
use App\NiveauScolaire;
use App\Prof;
use App\TypeActivite;
use App\TypeCours;
use App\User;
use App\Video;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    protected  $users;
    protected  $profs;
    protected  $typeActivites;
    protected  $activites;
    protected  $typeCours;
    protected  $lieuCours;
    protected  $niveauScolaires;
    protected  $videos;

    public function __construct(
        User $users,
        Prof $profs,
        TypeActivite $typeActivites,
        Activite $activites,
        TypeCours $typeCours,
        LieuCours $lieuCours,
        NiveauScolaire $niveauScolaires,
        Video $videos
        )
    {
        $this->users = $users;
        $this->profs = $profs;
        $this->typeActivites = $typeActivites;
        $this->activites = $activites;
        $this->typeCours = $typeCours;
        $this->lieuCours = $lieuCours;
        $this->niveauScolaires = $niveauScolaires;
        $this->videos = $videos;
    }


    public function index()
    {
        // $activites = $this->activites
        //     ->get()
        //     ;

        $users = $this->users
            ->get()
            ;

        $videos = $this->videos
            ->orderBy('order', 'asc')
            ->get()
            ;

        $typeActivites = $this->typeActivites
            ->where('active', true)
            ->with(['activites'])
            ->get()
            ;

        $profs = $this->profs
            ->with(['user'])
            ->orderBy('note', 'desc')
            ->take(3)
            ->get()
            ;

        // dd($typeActivites);

            // $countryOfCity = City::find(request()->pickupcity)->country_id;

            // $Circuits->whereHas('Localisations' , function($query) use ($countryOfCity)
            // {
            //     $query->where('country_id','=', $countryOfCity);
            // })

        // actualite
        // $actualites = $this->actualite->orderBy('date', 'desc')->skip(0)->take(3)->get();

        // dd($groupes);
        return view('page/home', compact('users', 'typeActivites', 'profs', 'videos'));
    }

    public function profs(int $startIndex, int $pageSize, int $typeActivite, int $activite, int $typeCours, int $lieuCours, int $niveauScolaire)
    {

        //->where(1, '<>', 1);
        $activites = $this->activites->get();

        $matchThese = [ ];

        if ($typeActivite != 0) {
            // $q->orWhere('idsTypeActivites', 'LIKE', "%;{$typeActivite};%");
            // dd($typeActivite);
            array_push($matchThese, ['idsTypeActivites', 'LIKE', "%;{$typeActivite};%"]);
        }

        if ($activite !== 0) {
            // $q->orWhere('idsActivites', 'LIKE', "%;{$activite};%");
            // dd($activite);
            array_push($matchThese, ['idsActivites', 'LIKE', "%;{$activite};%"]);
        }

        if ($typeCours != 0) {
            // $q->orWhere('idsTypeCours', 'LIKE', "%;{$typeCours};%");
            array_push($matchThese, ['idsTypeCours', 'LIKE', "%;{$typeCours};%"]);
        }

        if ($lieuCours != 0) {
            // $q->orWhere('idsLieuCours', 'LIKE', "%;{$lieuCours};%");
            array_push($matchThese, ['idsLieuCours', 'LIKE', "%;{$lieuCours};%"]);
        }

        if ($niveauScolaire != 0) {
            // $q->orWhere('idsNiveauScolaires', 'LIKE', "%;{$niveauScolaire};%");
            array_push($matchThese, ['idsNiveauScolaires', 'LIKE', "%;{$niveauScolaire};%"]);
        }


        $q = $this->profs
            ->where($matchThese)
            ->with(['user'])
            ->orderBy('note', 'desc');

        $count = $q->count();

        $profs = $q->skip($startIndex)
            ->take($pageSize)
            ->get()
            ;




        return view('page/profs', compact('profs', 'activites', 'count'));
    }

    public function prof(int $id)
    {

        $model = $this->profs->with(['user'])->find($id);

        $typeActivites = $this->typeActivites->get();
        $activites = $this->activites->get();

        $typeCours = $this->typeCours->get();
        $lieuCours = $this->lieuCours->get();
        $niveauScolaires = $this->niveauScolaires->get();

        return view('page/prof', compact('model', 'typeActivites', 'activites', 'typeCours', 'lieuCours', 'niveauScolaires'));
    }
}
