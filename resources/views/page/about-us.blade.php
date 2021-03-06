@extends('master')

@section('title')
    @lang('page.Nouscontacter')
@stop

@section('content')
<section class="about-us  bg-white" >
    <div class="{{ app()->getLocale() == 'fr' ? 'text-left container px-0' : 'text-right container px-0' }}" style=" margin-top: 100px;">
        <div class="d-flex flex-wrap justify-content-center  mat-elevation-z20 bg-white align-items-center mt-3 mb-3 p-2">
            <div class="col-md-6">
                <h1 class="font-weight-bolder mb-5 text-purple" style="font-size: 3em">Qui sommes nous</h1>

                <p class="mb-5">
                    Info Académie propose des cours collectifs et des cours particuliers en présentiel et en live
                     dans toutes les matières afin d’aider les élèves à optimiser leurs résultats à l’école. Info
                     dispose également d’une plateforme interactive en ligne permettant l’accès aux cours dispensés
                      en temps réel pour la préparation aux examens. Du primaire aux études supérieures, les enseignants
                      sont spécialistes dans leur domaine, proposent des cours de soutien scolaire intensifs et sur mesure,
                      vous donnant l’assurance de voir votre enfant faire des progrès rapidement.
                </p>

                <a class="btn btn-purple" style="border-radius: 0%;"  href="/contact">
                    Contactez-nous
                </a>
            </div>
            <div class="col-md-6 p-0">
                <img src="/assets2/knowledge.png" style="width: 100%">
            </div>
        </div>

  </div>
</section>
@stop

