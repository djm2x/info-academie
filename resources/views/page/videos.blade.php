@extends('master')



@section('titre')
@stop


@section('content')

<section class="videos">
    <div class="py-5" style="background-color: white">
        <div class="container">
            <div class="col-md-12 px-0 justify-content-center">

                <div class="d-flex flex-wrap justify-content-center align-items-center mt-3 mb-3" >
                    <div class="col-md-6">
                        <p class="h1 text-primary2 font-weight-bolder mb-4">Nous videos pour vous aider à decouvrir votre plateforme</p>

                        {{-- <p class="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti sunt,
                            fugit illo aliquam ea! Atque omnis consequatur explicabo dolores. Odit quod maxime,
                            dolorum beatae vitae exercitationem ipsam. Natus error dolor similique quae, vero minima,
                            quo laudantium dolorem suscipit, recusandae cum tempora. Ad aliquam ipsum minima illum expedita facilis debitis?
                        </p> --}}


                        {{-- <button class="btn btn-purple">Contactez-nous</button> --}}
                    </div>
                    <div class="col-md-6 p-0">
                        <img src="/assets2/video.png" style="width: 120%">
                    </div>
                </div>

                @include('divider')

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
