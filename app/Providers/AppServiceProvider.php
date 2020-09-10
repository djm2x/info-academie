<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Session;

class AppServiceProvider extends ServiceProvider
{
    protected $cntsh = [
        //1cntsh
        ['route' => 'cntsh/diagramme', 'name' => 'Diagramme'],
        ['route' => 'cntsh/missions', 'name' => 'Missions'],
        ['route' => 'cntsh/directeur', 'name' => 'Motdudirecteur'],
        ['route' => 'cntsh/reseau', 'name' => 'Reseaunational'],
        ['route' => 'cntsh/gouvernance', 'name' => 'Gouvernance'],
        ['route' => 'cntsh/histoire', 'name' => 'Histoire'],
        ['route' => 'cntsh/bilan', 'name' => 'Bilanactivite'],
    ];
    protected $sang = [
        //2sang
        ['route' => 'sang/quoi', 'name' => 'Lesangestquoi'],
        ['route' => 'sang/produit', 'name' => 'Produitsanguins'],
        ['route' => 'sang/hemovigilance', 'name' => 'Hemouigilance'],
        ['route' => 'sang/cout', 'name' => 'Coutdeprestation'],
        ['route' => 'sang/situation', 'name' => 'Situationnationalededondesang'],
        ['route' => 'sang/audit', 'name' => 'Audit'],
    ];
    protected $partenaires = [
        //4Partenaires
        ['route' => 'partenaires/association', 'name' => 'Associationdonneurs'],
        ['route' => 'partenaires/partenaires', 'name' => 'Partenairesinstitutionnels'],
        ['route' => 'partenaires/transfusion', 'name' => 'Transfusionmondiale'],
        ['route' => 'partenaires/press', 'name' => 'Press'],
    ];
    protected $don = [
        //3don du sang
        ['route' => 'planification', 'name' => 'Planification'],
        ['route' => 'don-du-song/Pourquoi', 'name' => 'Pouquoidonnerdusang'],
        ['route' => 'don-du-song/qui', 'name' => 'Quipeutdeonnerdusang'],
        ['route' => 'don-du-song/informations', 'name' => 'Informationspostdon'],
        ['route' => 'don-du-song/promesse', 'name' => 'Faireunepromessededon'],
        ['route' => 'don-du-song/ou-donner', 'name' => 'Oudonnersonsang'],
        ['route' => 'don-du-song/faq', 'name' => 'FAQ'],

        //  ['route' => 'president', 'name' => 'Nos Activiés'],
        //  ['route' => 'president', 'name' => 'Galerie'],
        //  ['route' => 'president', 'name' => 'Contact'],

    ];
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->singleton(Uow::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        view()->share('cntsh', $this->cntsh);
        view()->share('sang', $this->sang);
        view()->share('partenaires', $this->partenaires);
        view()->share('don', $this->don);
    }
}
