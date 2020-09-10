@extends('master')

@section('title')
    {{$model->title}}
@stop



@section('content')
    {{-- {{$list}} --}}
<section class="president">
    <div class="wallpaper" style="background-image: url('{{url('activites/'.str_replace(';', '', $model->imageUrl))}}'), url('{{url('images/verts.png')}});">
        <div class="para d-flex flex-column align-items-center mt-5">
            {{-- <p class="text-danger text-uppercase  mt-5 h1 font-weight-bold anime">{{$model->title}}</p>

            <div class="progress anime">
                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div> --}}
            <div class="mt-5 d-flex flex-column align-items-center">
                <p class=" h3 font-weight-bold anime">{{$model->region->name}}</p>
                <p class=" h5 font-weight-bold anime">Par {{$model->user->name}}</p>
            </div>
        </div>
    </div>
    {{--  --}}
    <div class="container mt-5 mb-5 anime">
        {{-- {{ $model }} --}}
        {!! $model->description !!}
    </div>
</section>

@stop


