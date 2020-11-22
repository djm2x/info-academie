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
use App\Ville;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Routing\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

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
    protected  $villes;

    public function __construct(
        User $users,
        Prof $profs,
        TypeActivite $typeActivites,
        Activite $activites,
        TypeCours $typeCours,
        LieuCours $lieuCours,
        NiveauScolaire $niveauScolaires,
        Video $videos,
        Ville $villes
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
        $this->villes = $villes;
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

        $activites = $this->activites
            ->where('idTypeActivite', 1)
            ->with(['typeActivite'])
            ->get();

        $villes = $this->villes
            ->get();

        // $typeActivites = $this->typeActivites
        //     ->where('active', true)
        //     ->with(['activites'])
        //     ->get()
        //     ;

        $user = $user = JWTAuth::user();

        $profs = $this->profs
            ->with(['user'])
            ->orderBy('note', 'desc')
            ->take(3)
            ->get()
            ;

        return view('page/home/home', compact('users', 'profs', 'videos', 'activites', 'villes', 'user'));
    }

    public function profs(Request $request
    , int $startIndex, int $pageSize, int $typeActivite, int $activite, int $typeCours, int $lieuCours, int $niveauScolaire, string $prof, int $ville)
    {
        // $activite = $request->input('activite');
        // $typeCours = $request->input('typeCours');
        // $niveauScolaire = $request->input('niveauScolaire');
        //->where(1, '<>', 1);
        $activites = $this->activites->get();
        $typeCourss = $this->typeCours->get();
        $niveauScolaires = $this->niveauScolaires->get();

        $matchThese = [ ];

        // if ($prof != '*') {
        //     array_push($matchThese, ['user.nom', 'LIKE', "%{$prof}%"]);
        // }

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
            ->whereHas('user', function (Builder $query) use ($prof, $ville) {
                $query->where([
                    $prof != '*' ? ['nom', 'LIKE', "%{$prof}%"] : ['1','1'],
                    $ville != 0 ? ['idVille', $ville] : ['1','1']
                ]);
            })
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
