<style>
    @media (max-width: 768px) {
        .carousel-inner .carousel-item > div {
            display: none;
        }
        .carousel-inner .carousel-item > div:first-child {
            display: block;
        }
    }

    .carousel-inner .carousel-item.active,
    .carousel-inner .carousel-item-next,
    .carousel-inner .carousel-item-prev {
        display: flex;
    }

    /* display 3 */
    @media (min-width: 768px) {

        .carousel-inner .carousel-item-right.active,
        .carousel-inner .carousel-item-next {
        transform: translateX(33.333%);
        }

        .carousel-inner .carousel-item-left.active,
        .carousel-inner .carousel-item-prev {
        transform: translateX(-33.333%);
        }
    }

    .carousel-inner .carousel-item-right,
    .carousel-inner .carousel-item-left{
    transform: translateX(0);
    }

    .activites {
        position: relative;

    }
    .activites::before {
        content: '';
        z-index: -1;
        background-color: #9561e217;
        position: absolute;
        height: 300px;
        left: -150px;
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
        right: -150px;
        width: 300px;
        bottom: 50px;
        border-radius: 50%;
    }

</style>

<section class="activites">
    <div  style="background-color: #c9a4ff1a">
    <div class="container text-center my-3">
        @foreach ($typeActivites as $e)
        <div class="d-flex justify-content-center align-items-center mb-5 pt-5">
            {{-- <button class="btn btn-primary">{{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}</button> --}}
            <p class="h1 text-primary2 font-weight-bolder">{{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}</p>
        </div>
        <div class="row">
            <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                <div class="carousel-inner w-100" role="listbox">
                    @for ($i = 0; $i < 3; $i++)
                        <div class="{{$i == 0 ? 'carousel-item active' : 'carousel-item'}}">
                            <div class="col-md-4 px-2">
                                <div class="card mat-elevation-z4 mb-5">
                                    <img src="{{strpos($e->activites[$i]->imageUrl, 'http') !== false ? $e->activites[$i]->imageUrl : url('activites/'.$e->activites[$i]->id.'/'.str_replace(';', '', $e->activites[$i]->imageUrl))}}"
                                    onerror="this.onerror=null;this.src='/assets/404.png';" alt="..." class="img-fluid">

                                    <div class="card-body">
                                        {{-- <p class="card-text m-0 text-dark font-weight-bold">${e.title}</p>
                                        <p class="card-text m-0 text-dark text-muted">
                                            ${e.description.substring(0, 50)} ...
                                        </p> --}}
                                        <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-3">
                                            <a class="btn btn-purple text-uppercase" href={{"profs/0/20/".$e->id."/".$e->activites[$i]->id."/0/0/0/*/0"}} style="border-radius: 0%;">
                                                {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} <i class="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endfor

                </div>
                <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        {{-- <h5 class="mt-2">Advances one slide at a time</h5> --}}
        @endforeach
    </div>
</div>
</section>

@section('scripts')
    <script>
        $('#recipeCarousel').carousel({
            interval: 17000
        })

        $('.carousel .carousel-item').each(function(){
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
            next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i=0;i<minPerSlide;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    </script>
@stop

