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
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>

                <div class="d-flex justify-content-center">
                    {!! $videos->withQueryString()->links() !!}
                </div>
            </div>



        </div>
    </div>
</section>

@stop


@section('pied_page')
@stop
