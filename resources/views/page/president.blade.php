@extends('master')

@section('entete')
@stop


@section('title')
    <h1>{{$model->title}}</h1>
@stop

@section('content')
    {{-- {{$list}} --}}
<section class="president">
    {{-- <div class="wallpaper" style="background-image: url('{{url('presidents/'.str_replace(';', '', $model->imageUrl))}}');">
        <div class="para d-flex flex-column align-items-center mt-5">
            <p class="text-danger h2 font-weight-bold anime">{{$model->title}}</p>

            <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
        </div>
    </div> --}}

    <div class="container mt-5 mb-5 mt-5">
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            <div class="col-md-12 mb-5 d-flex justify-content-center align-items-center">
                <img src="{{url('presidents/'.str_replace(';', '', $model->imageUrl))}}"
                class="card-img-top" alt="..." style="width: 200px">
            </div>
            <div class="col-md-12">
                {!! $model->description !!}
            </div>
        </div>

    </div>
</section>

@stop


@section('pied_page')
@stop
