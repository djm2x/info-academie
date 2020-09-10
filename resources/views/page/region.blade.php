@extends('master')

@section('entete')
@stop

@section('titre')
@stop

@section('titre_contenu')
@stop

@section('content')
    {{-- {{$list}} --}}

    <section class="region">
        <div class="container flex-column d-flex justify-content-center align-items-center">

            <div class="para d-flex flex-column align-items-center mt-5">
                <p class="text-danger h2 font-weight-bold">PLAFINICATION</p>
                <p class="col-md-8 text-center">
                    Nos planification sur tous les region marocaine
                </p>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
            </div>

            <div class="row d-flex justify-content-center p-2 mt-5">
                @foreach ($list as $e)
                    <div class="col-md-6 col-sm-6 col-lg-4 mb-3">
                        <div class="card">
                            <img src="{{url('regions/'.str_replace(';', '', $e->imageUrl))}}" class="card-img-top" alt="...">
                            {{-- <p>{{url('regions/'.str_replace(';', '', $e->imageUrl))}}</p> --}}
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

@stop


@section('pied_page')
@stop
