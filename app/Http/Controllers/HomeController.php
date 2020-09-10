<?php

namespace App\Http\Controllers;

use App\Activite;
use App\Actualite;
use Illuminate\Http\Request;
use App\galerie;
use App\TypeActivite;
use App\User;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    protected  $activites;
    protected  $users;
    protected  $typeActivites;

    public function __construct(Activite $activites, User $users, TypeActivite $typeActivites)
    {
        $this->activites = $activites;
        $this->users = $users;
        $this->typeActivites = $typeActivites;
    }

    
    public function index()
    {
        // $activites = $this->activites
        //     ->get()
        //     ;

        $users = $this->users
            ->get()
            ;

        $typeActivites = $this->typeActivites
            ->with(['activites'])
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
        return view('page/home', compact('users', 'typeActivites'));
    }
}
