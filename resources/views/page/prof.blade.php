@extends('master')

@section('title')
    {{$model->user->nom}}
@stop



@section('content')
<section class="prof bg-white">
    <div class="p-4 mb-5 container" style="margin-top: 50px">
            <div class="row mat-elevation-z20 bg-white">
                <div class="col-md-4">
                    <img src="{{strpos($model->user->imageUrl, 'http') !== false ? $model->user->imageUrl : url('users/'.$model->user->id.'/'.str_replace(';', '', $model->user->imageUrl))}}"
                    onerror="this.onerror=null;this.src='/assets2/profe.jpg';" class="p-2 rounded-circle" alt="..." style="width: 200px; height: 200px;">

                </div>
                <div class="col-md-8">
                    <div class="d-flex flex-column justify-content-between align-items-center  h-100">

                        <div class="d-flex flex-row justify-content-between align-items-center w-100">
                            <p class="h3 mt-3 text-purple">{{$model->user->nom}} {{$model->user->prenom}}</p>
                            <span class="text-purple"><i class="fas fa-star"></i> {{$model->note}}</span>

                        </div>

                        <div class="w-100">

                            <span class="h4">{{$model->user->email}}</span>
                            <p class="h6 text-muted">{{$model->intro}}</p>
                        </div>
                    </div>
                    {{-- <hr> --}}
                    {{-- <p class="h5">prix Hr Web : {{$model->prixHrWeb}} DH</p>
                    <p class="h5">prix Hr Home : {{$model->prixHrHome}} DH</p>
                    <p class="h5">prix Hr Web Groupe : {{$model->prixHrWebGroupe}} DH</p>
                    <p class="h5">prix Hr Home Groupe : {{$model->prixHrHomeGroupe}} DH</p> --}}


                </div>

                <div class="col-md-12">

            @include('divider')
            <p class="h5 text-purple font-weight-bold">Description</p>
            <p>{{$model->description}}</p>
            <hr>
            <p class="h5 text-purple font-weight-bold">Experience</p>
            <p>{{$model->experience}}</p>
            <hr>
            <p class="h5 text-purple font-weight-bold">Approche</p>
            <p>{{$model->approche}}</p>
            @include('divider')

            <div class="mb-3">
                <p class="h6 font-weight-bolder">Type Activite</p>
            @foreach ($typeActivites as $e)
                @if(strpos($model->idsTypeActivites, ';' . $e->id . ';') !== false)
                    <a class="mx-1 px-1 text-purple font-weight-bold mat-elevation-z3 mx-2" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*/0"}}>
                        {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                    </a>
                @endif
            @endforeach
            </div>

            <div class="mb-3">
                <p class="h6 font-weight-bolder">Activites</p>
            @foreach ($activites as $e)
                @if(strpos($model->idsActivites, ';' . $e->id . ';') !== false)
                        <a class="mx-1 px-1 text-purple font-weight-bold mat-elevation-z3  mx-2" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*/0"}}>
                        {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                    </a>
                @endif
            @endforeach
            </div>
            <div class="mb-3">
                <p class="h6 font-weight-bolder">Type Cours</p>
            @foreach ($typeCours as $e)
                @if(strpos($model->idsTypeCours, ';' . $e->id . ';') !== false)
                        <a class="mx-1 px-1 text-purple font-weight-bold mat-elevation-z3  mx-2" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*/0"}}>
                        {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                    </a>
                @endif
            @endforeach
            </div>
            <div class="mb-3">
                <p class="h6 font-weight-bolder">Lieu Cours</p>
            @foreach ($lieuCours as $e)
                @if(strpos($model->idsLieuCours, ';' . $e->id . ';') !== false)
                        <a class="mx-1 px-1 text-purple font-weight-bold mat-elevation-z3  mx-2" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*/0"}}>
                        {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                    </a>
                @endif
            @endforeach
            </div>
            <div class="mb-3">
                <p class="h6 font-weight-bolder">Niveau Scolaires</p>
            @foreach ($niveauScolaires as $e)
                @if(strpos($model->idsNiveauScolaires, ';' . $e->id . ';') !== false)
                        <a class="mx-1 px-1 text-purple font-weight-bold mat-elevation-z3  mx-2" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*/0"}}>
                        {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                    </a>
                @endif
            @endforeach
        </div>
        </div>
      </div>
    </div>
</section>
@stop


