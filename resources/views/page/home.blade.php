@extends('master')



@section('titre')
@stop


@section('content')
<section class="first">
    <div class="container">
        <div class="mycontent d-flex justify-content-center align-items-center">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <form class="p-3 d-flex align-items-center justify-content-center  w-100">
                        <input class="form-control mr-sm-2 mr-3" type="search" placeholder="@lang('menu.Matiere')" aria-label="Search">
                        <input class="form-control mr-sm-2 mr-3" type="search" placeholder="@lang('menu.Ville')" aria-label="Search">
                        <a class="navbar-brand search" href="{{ route('home') }}">
                            <i class="fas fa-search"></i>
                        </a>
                    </form>
                </div>
                <div class="col-md-5">
                    {{-- <button class="btn btn-primary w-100 mb-3">@lang('menu.Connecter')</button>
                    <button class="btn btn-primary w-100">@lang('menu.Enregistre')</button> --}}
                    <a class="btn btn-primary w-100 mb-3" href="/auth/login">@lang('menu.Connecter')</a>
                    <a class="btn btn-primary w-100" href="/auth/create">@lang('menu.Enregistre')</a>
                </div>
            </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                {{-- <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> --}}
            </ol>

            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <img style="filter: brightness(70%);" src="images/one.jpg" onerror="this.onerror=null;this.src='/assets/404.jpg';" class="d-block w-100" alt="...">

                    {{-- <div class="carousel-caption d-none d-md-block">
                    <h1>ON EST PLUS QU'AMIS</h1>
                    <h5>On est donneurs de song</h5>

                    <a class="btn btn-primary mt-5 " href="http://">REJOIGNEZ-NOUS SUR FACEBOOK</a>
                    </div> --}}
                </div>
                <div class="carousel-item">
                    <img style="filter: brightness(70%);" src="images/dds02.png" onerror="this.onerror=null;this.src='/assets/404.jpg';" class="d-block w-100" alt="...">

                    {{-- <div class="carousel-caption d-none d-md-block">
                    <h1>ON EST PLUS QU'AMIS</h1>
                    <h5>On est donneurs de song</h5>

                    <a class="btn btn-primary mt-5" href="http://">REJOIGNEZ-NOUS SUR FACEBOOK</a>
                    </div> --}}
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>

</section>

<section class="profs">
    <div class="py-5" style="background-color: white">
        <div class="container">
            <div class="col-md-12 justify-content-center">
                <div class="d-flex justify-content-center align-items-center mb-3">
                    
                    <p class="h1">Nous professeur ont du talent</p>
                    
                </div>

                <div class="row">
                    @foreach ($profs as $e)
                   
                        <div class="col-md-6 col-sm-6 col-lg-4 pl-1 pr-1 justify-content-center align-items-center">
                            <div class="card" style="margin-top: 100px">

                                <div class="d-flex justify-content-center align-items-center" style="margin-top: -100px;">
                                    <img src="{{strpos($e->user->imageUrl, 'http') !== false ? $e->user->imageUrl : url('profs/'.$e->id.'/'.$e->imageUrl)}}" 
                                    onerror="this.onerror=null;this.src='/assets/404.png';" class="rounded-circle" alt="..." style="width: 200px; height: 200px;">
                                </div>
                                
                                    
                                
                                <div class="card-body">
                                    <p class="h5 text-dark font-weight-bold">{{$e->user->nom}} {{$e->user->prenom}}</p>
                                    <p class="card-text m-0 text-dark font-weight-bold">{{substr($e->intro, 0, 100)}}</p>
                                    <p class="card-text m-0 text-dark text-muted">
                                        {{substr($e->description, 0, 100)}} ...
                                    </p>
                                    <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-3">
                                        <span><i class="fas fa-star"></i> {{$e->note}}</span>

                                        <a class="btn btn-primary text-uppercase" href="profs/{{$e->id}}">
                                            {{-- {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} --}}
                                           
                                           Detail <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach

                        <a class="btn btn-danger mt-3 ml-2" href="profs/0/20/0/0/0/0/0">
                            {{-- {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} --}}
                            Voir plus ...
                        </a>
                </div>
                {{-- <hr class="mb-0"> --}}
            </div>
        

        
        </div>
    </div>
</section>

<section class="activites">
    @foreach ($typeActivites as $e)
    <div class="py-5" style="{{$loop->iteration % 2 == 0 ? 'background-color: white' : 'background-color: #e8e8e8' }}">
        <div class="container">
            <div class="col-md-12 justify-content-center">
                <div class="d-flex justify-content-center align-items-center mb-3">
                    {{-- <button class="btn btn-primary">{{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}</button> --}}
                    <p class="h1">{{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}</p>
                </div>

                <div class="row">
                    @for ($i = 0; $i < 3; $i++)
                   
                        <div class="col-md-6 col-sm-6 col-lg-4 pl-1 pr-1 justify-content-center align-items-center">
                            <div class="card m-1">
                                <img src="{{strpos($e->activites[$i]->imageUrl, 'http') !== false ? $e->activites[$i]->imageUrl : url('activites/'.$e->activites[$i]->id.'/'.$e->activites[$i]->imageUrl)}}" 
                                onerror="this.onerror=null;this.src='/assets/404.png';" class="card-img-top" alt="...">
                                
                                <div class="card-body">
                                    {{-- <p class="card-text m-0 text-dark font-weight-bold">${e.title}</p>
                                    <p class="card-text m-0 text-dark text-muted">
                                        ${e.description.substring(0, 50)} ...
                                    </p> --}}
                                    <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-3">
                                        <a class="btn btn-primary text-uppercase" href={{"profs/0/20/".$e->id."/".$e->activites[$i]->id."/0/0/0"}}>
                                            {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endfor
                    <a class="btn btn-danger ml-2 mt-3" href={{"profs/0/20/" . $e->id . "/0/0/0/0"}}>
                        Voir plus ...
                    </a>
                </div>
                {{-- <hr class="mb-0"> --}}
            </div>
        

        
        </div>
    </div>
    @endforeach
</section>

@stop


@section('pied_page')
@stop
