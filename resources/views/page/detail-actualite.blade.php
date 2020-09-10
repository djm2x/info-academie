@extends('master')

@section('entete')
@stop


@section('title')
<a href="/actualite" class="text-dark">
    @lang('menu.Actualite')
</a>
@stop

@section('content')
<section class="president">
    <div class="container mt-3 mb-5">

        <div class="d-flex flex-wrap align-items-center">
            <div class="col-md-12">
                <p class="m-0" style="font-size: 1.1em; font-weight: 700">{{$model->title}}</p>
                <p class="text-muted" style="font-size: 1.1em"><i class="far fa-calendar-alt"></i> {{date('d/m/Y', strtotime($model->date))}}</p>
            </div>
            <div class="col-md-6 mb-3">
                <img src="{{url('actualites/'.str_replace(';', '', $model->imageUrl))}}" class="card-img-top" alt="..." style="width: 250px" onerror="this.onerror=null;this.src='/images/404.png';">
            </div>
            <div class="col-md-12">
                {{-- <p class="text-uppercase">{{$type}}</p> --}}

                {{-- <h2>{{ $model->title }}</h2> --}}
                {{-- <p style="font-style: italic; font-size: .9em" class="text-muted mb-5">Le {{date('d-m-Y', strtotime($model->date))}}</p> --}}
                {{strip_tags($model->description)}}
            </div>
        </div>

    </div>
</section>
@stop
