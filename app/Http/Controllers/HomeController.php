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
    /**
     * @var User
     */
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
            ->take(3)
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

            // $idForein = City::find(request()->pickupcity)->country_id;

            // $Circuits->whereHas('Localisations' , function($query) use ($idForein)
            // {
            //     $query->where('country_id','=', $idForein);
            // })

        // actualite
        // $actualites = $this->actualite->orderBy('date', 'desc')->skip(0)->take(3)->get();

        // dd($groupes);
        return view('page/home/home', compact('users', 'typeActivites', 'profs', 'videos'));
    }

    public function profs(Request $request
    , int $startIndex, int $pageSize, int $typeActivite, int $activite, int $typeCours, int $lieuCours, int $niveauScolaire, string $prof)
    {
        // $activite = $request->input('activite');
        // $typeCours = $request->input('typeCours');
        // $niveauScolaire = $request->input('niveauScolaire');
        //->where(1, '<>', 1);
        $activites = $this->activites->get();
        $typeCourss = $this->typeCours->get();
        $niveauScolaires = $this->niveauScolaires->get();

        $matchThese = [ ];

        if ($prof != '*') {
            array_push($matchThese, ['user.nom', 'LIKE', "%{$prof}%"]);
        }

        if ($typeActivite != 0) {
            array_push($matchThese, ['idsTypeActivites', 'LIKE', "%;{$typeActivite};%"]);
        }

        if ($activite !== 0) {
            array_push($matchThese, ['idsActivites', 'LIKE', "%;{$activite};%"]);
        }

        if ($typeCours != 0) {
            array_push($matchThese, ['idsTypeCours', 'LIKE', "%;{$typeCours};%"]);
        }

        // if ($lieuCours != 0) {
        //     // $q->orWhere('idsLieuCours', 'LIKE', "%;{$lieuCours};%");
        //     array_push($matchThese, ['idsLieuCours', 'LIKE', "%;{$lieuCours};%"]);
        // }

        if ($niveauScolaire != 0) {
            // $q->orWhere('idsNiveauScolaires', 'LIKE', "%;{$niveauScolaire};%");
            array_push($matchThese, ['idsNiveauScolaires', 'LIKE', "%;{$niveauScolaire};%"]);
        }

        $q = $this->profs
            ->where($matchThese)
            ->with(['user'])
            ->orderBy('note', 'desc');

        $count = $q->count();

        $profs = $q
            // ->skip($startIndex)
            // ->take($pageSize)
            ->paginate($pageSize)
            // ->appends(request()->except('page'))
            // ->get()
            ;

        return view('page/profs', compact('profs', 'activites', 'count', 'typeCourss', 'niveauScolaires'));
    }

    // public function profs0(Request $req)
    // {
    //     // $activite = $request->input('activite');
    //     // $typeCours = $request->input('typeCours');
    //     // $niveauScolaire = $request->input('niveauScolaire');
    //     //->where(1, '<>', 1);
    //     $activites = $this->activites->get();
    //     $typeCourss = $this->typeCours->get();
    //     $niveauScolaires = $this->niveauScolaires->get();

    //     $matchThese = [ ];

    //     if ($prof != '') {
    //         array_push($matchThese, ['user.nom', 'LIKE', "%{$prof}%"]);
    //     }

    //     if ($typeActivite != 0) {
    //         array_push($matchThese, ['idsTypeActivites', 'LIKE', "%;{$typeActivite};%"]);
    //     }

    //     if ($activite !== 0) {
    //         array_push($matchThese, ['idsActivites', 'LIKE', "%;{$activite};%"]);
    //     }

    //     if ($typeCours != 0) {
    //         array_push($matchThese, ['idsTypeCours', 'LIKE', "%;{$typeCours};%"]);
    //     }

    //     // if ($lieuCours != 0) {
    //     //     // $q->orWhere('idsLieuCours', 'LIKE', "%;{$lieuCours};%");
    //     //     array_push($matchThese, ['idsLieuCours', 'LIKE', "%;{$lieuCours};%"]);
    //     // }

    //     if ($niveauScolaire != 0) {
    //         // $q->orWhere('idsNiveauScolaires', 'LIKE', "%;{$niveauScolaire};%");
    //         array_push($matchThese, ['idsNiveauScolaires', 'LIKE', "%;{$niveauScolaire};%"]);
    //     }

    //     $q = $this->profs
    //         ->where($matchThese)
    //         ->with(['user'])
    //         ->orderBy('note', 'desc');

    //     $count = $q->count();

    //     $profs = $q
    //         // ->skip($startIndex)
    //         // ->take($pageSize)
    //         ->paginate($pageSize)
    //         // ->appends(request()->except('page'))
    //         // ->get()
    //         ;

    //     return view('page/profs', compact('profs', 'activites', 'count', 'typeCourss', 'niveauScolaires'));
    // }

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

    public function videos(int $startIndex, int $pageSize)
    {

        $videos = $this->videos
            ->orderBy('order', 'asc')
            // ->skip($startIndex)
            // ->take($pageSize)
            ->paginate($pageSize)
            ->appends(request()->except('page'))
            // ->get()
            ;

        return view('page/videos', compact('videos'));
    }

    public function video(int $id)
    {
        $model = $this->videos
            ->where('id', $id)
            ->get()
            ;

        return view('page/video', compact('model'));
    }
}
