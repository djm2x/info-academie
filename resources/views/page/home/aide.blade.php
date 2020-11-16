<style>
    .videos {
        position: relative;

    }
    .videos::before {
        content: '';
        z-index: 0;
        background-color: #9561e217;
        position: absolute;
        height: 200px;
        left: -99px;
        width: 200px;
        top: 225px;
        transform: rotate(45deg);
    }

    .videos::after {
        content: '';
        z-index: 0;
        background-color: #9561e225;
        position: absolute;
        height: 200px;
        right: -150px;
        width: 300px;
        bottom: 50px;
        transform: rotate(45deg);
    }
</style>

<section class="videos">
    <div class="py-5" style="background-color: white">
        <div class="container">
            <div class="col-md-12 justify-content-center">

                <div class="d-flex justify-content-center align-items-center mb-5">
                    <p class="h1 text-primary2 font-weight-bolder">Aide</p>
                </div>

                <div class="row">
                    @foreach ($videos as $e)

                        <div class="col-md-6 col-sm-6 col-lg-4 pl-1 pr-1 justify-content-center align-items-center mt-2">
                            <div class="card mat-elevation-z8">

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
                <div class="d-flex flex-row-reverse w-100">

                    <a class="btn btn-purple mt-5 ml-2" href="videos/0/3" style="width: 100px; border-radius: 0%;">
                        <i class="fas fa-angle-double-right"></i>
                    </a>
                </div>
            </div>



        </div>
    </div>
</section>
