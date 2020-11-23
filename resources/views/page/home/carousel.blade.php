<style>
     .activites {
        position: relative;

    }
    .activites::before {
        content: '';
        z-index: -1;
        background-color: #9561e217;
        position: absolute;
        height: 300px;
        left: 0;
        width: 300px;
        top: 50px;
        border-radius: 50%;
    }

    .activites::after {
        content: '';
        z-index: -1;
        background-color: #9561e225;
        position: absolute;
        height: 300px;
        right: 150px;
        width: 300px;
        bottom: 50px;
        border-radius: 50%;
    }

    .item {
    height: 10rem;
    background: #4DC7A0;
    padding: 1rem;
}

</style>

<section class="activites bg-white">
    <div class="py-5" style="background-color: #c9a4ff1a">
    <div class="container">

        <div class="d-flex justify-content-center align-items-center mb-5">
            <p class="h1 text-primary2 font-weight-bolder">
                {{ app()->getLocale() == 'fr' && count($activites) > 0 ? $activites[0]->typeActivite->nom : $activites[0]->typeActivite->nomAr }}
            </p>
        </div>


        <div class="owl-carousel owl-theme">

                @foreach ($activites as $e)
                <div class="col-md-12 px-2 py-2">
                    <div class="card mat-elevation-z2">
                        <img src="{{strpos($e->imageUrl, 'http') !== false ? $e->imageUrl : url('activites/'.$e->id.'/'.str_replace(';', '', $e->imageUrl))}}"
                        onerror="this.onerror=null;this.src='/assets/404.png';" alt="..." style="width: 100%; height: 300px;">

                        <div class="card-body">
                            {{-- <p class="card-text m-0 text-dark font-weight-bold">${e.title}</p>
                            <p class="card-text m-0 text-dark text-muted">
                                ${e.description.substring(0, 50)} ...
                            </p> --}}
                            <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-3">
                                <a class="btn btn-purple text-uppercase" href={{"profs/0/20/".$e->id."/".$e->id."/0/0/0/*/0"}} style="border-radius: 0%;">
                                    {{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }} <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
        </div>
    </div>
</div>
</section>


@section('scripts')
    <script>
        $('.owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1600:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        })
</script>
@stop

