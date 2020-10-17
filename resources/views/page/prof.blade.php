@extends('master')

@section('title')
    {{$model->user->nom}}
@stop



@section('content')
<section class="prof">
    <div class="p-2">
            <div class="row">
                <div class="col-md-4">
                    <img src="{{strpos($model->user->imageUrl, 'http') !== false ? $model->user->imageUrl : url('profs/'.$model->id.'/'.$model->imageUrl)}}"
                    onerror="this.onerror=null;this.src='/images/404.png';" class="p-2 rounded-circle" alt="..." style="width: 200px; height: 200px;">
                </div>
                <div class="col-md-8">

                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <p class="h3 mt-3">{{$model->user->nom}} {{$model->user->prenom}}</p>
                        <span><i class="fas fa-star"></i> {{$model->note}}</span>

                    </div>
                    <p class="h4">{{$model->user->email}}</p>
                    <p class="h4 text-muted">{{$model->user->intro}}</p>
                    <hr>
                    {{-- <p class="h5">prix Hr Web : {{$model->prixHrWeb}} DH</p>
                    <p class="h5">prix Hr Home : {{$model->prixHrHome}} DH</p>
                    <p class="h5">prix Hr Web Groupe : {{$model->prixHrWebGroupe}} DH</p>
                    <p class="h5">prix Hr Home Groupe : {{$model->prixHrHomeGroupe}} DH</p> --}}


                </div>
            </div>
            <hr>
            <p class="h3">Description</p>
            <p>{{$model->description}}</p>
            <hr>
            <p class="h3">Experience</p>
            <p>{{$model->experience}}</p>
            <hr>
            <p class="h3">Approche</p>
            <p>{{$model->approche}}</p>
            <hr>

                    <div class="mb-3">
                        <p class="h5">Type Activite</p>
                    @foreach ($typeActivites as $e)
                        @if(strpos($model->idsTypeActivites, ';' . $e->id . ';') !== false)
                             <a class="mx-1 px-1 text-white" style="background: gray;" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*/*"}}>
                                {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                            </a>
                        @endif
                    @endforeach
                    </div>

                    <div class="mb-3">
                        <p class="h5">Activites</p>
                    @foreach ($activites as $e)
                        @if(strpos($model->idsActivites, ';' . $e->id . ';') !== false)
                             <a class="mx-1 px-1 text-white" style="background: gray;" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*"}}>
                                {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                            </a>
                        @endif
                    @endforeach
                    </div>
                    <div class="mb-3">
                        <p class="h5">Type Cours</p>
                    @foreach ($typeCours as $e)
                        @if(strpos($model->idsTypeCours, ';' . $e->id . ';') !== false)
                             <a class="mx-1 px-1 text-white" style="background: gray;" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*"}}>
                                {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                            </a>
                        @endif
                    @endforeach
                    </div>
                    <div class="mb-3">
                        <p class="h5">Lieu Cours</p>
                    @foreach ($lieuCours as $e)
                        @if(strpos($model->idsLieuCours, ';' . $e->id . ';') !== false)
                             <a class="mx-1 px-1 text-white" style="background: gray;" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*"}}>
                                {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                            </a>
                        @endif
                    @endforeach
                    </div>
                    <div class="mb-3">
                        <p class="h5">Niveau Scolaires</p>
                    @foreach ($niveauScolaires as $e)
                        @if(strpos($model->idsNiveauScolaires, ';' . $e->id . ';') !== false)
                             <a class="mx-1 px-1 text-white" style="background: gray;" href={{"/profs/0/20/0/" . $e->id . "/0/0/0/*"}}>
                                {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}
                            </a>
                        @endif
                    @endforeach
      </div>
    </div>
</section>
@stop


