@extends('master')



@section('titre')
@stop


@section('content')

<section class="videos">
    <div class="py-5" style="background-color: white">
        <div class="container">
            <div class="col-md-12 justify-content-center">
                <div class="d-flex justify-content-center align-items-center mb-3">

                    <p class="h1">Aide</p>

                </div>

                <div class="row">
                    @foreach ($videos as $e)

                        <div class="col-md-6 col-sm-6 col-lg-6 pl-1 pr-1 justify-content-center align-items-center mt-2">
                            <div class="card">

                                @if(strpos($e->urlVideo, 'http') !== false)
                                <iframe src="{{  url(str_replace('/watch?v=', '/embed/',$e->urlVideo)) }}"
                                    width="100%" height="250px" frameborder="0" allowfullscreen>
                                </iframe>
                                @else
                                    <video  width="100%" height="250px"  controls >
                                        <source src="{{ asset('videos/'.str_replace(';', '',$e->urlVideo)) }}"  type="video/mp4">
                                        Your browser does not support HTML5 video.
                                    </video>
                                @endif

                                <div class="card-body">
                                    <p class="h5 mt-2 text-dark font-weight-bold">{{$e->title}}</p>
                                    {{-- <p class="card-text m-0 text-dark font-weight-bold">{{substr($e->intro, 0, 100)}}</p> --}}
                                    {{-- <p class="card-text m-0 text-dark text-muted">
                                        {{substr($e->description, 0, 100)}} ...
                                    </p> --}}
                                    {{-- <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-3">
                                        <span><i class="fas fa-star"></i> {{$e->note}}</span>

                                        <a class="btn btn-primary text-uppercase" href="profs/{{$e->id}}">
                                           Detail <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div> --}}
                                </div>
                            </div>
                        </div>
                    @endforeach

                </div>
                <a class="btn btn-danger mt-3 ml-2" href="profs/0/20/0/0/0/0/0">
                    {{-- {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} --}}
                    Voir plus ...
                </a>
                {{-- <hr class="mb-0"> --}}
            </div>



        </div>
    </div>
</section>

@stop


@section('pied_page')
@stop
