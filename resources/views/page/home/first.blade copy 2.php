<section class="first">
    <div class="container">
        <div class="mycontent d-flex justify-content-center align-items-center">
            <div class="row justify-content-center">
                <div class="col-md-7">
                    <form class="p-3 d-flex align-items-center justify-content-center  w-100">
                        <input class="form-control mr-sm-2 mr-3" type="search" placeholder="@lang('menu.Matiere')" aria-label="Search">
                        <input class="form-control mr-sm-2 mr-3" type="search" placeholder="@lang('menu.Ville')" aria-label="Search">
                        <a class="navbar-brand search" href="{{ route('home') }}">
                            <i class="fas fa-search"></i>
                        </a>
                    </form>
                </div>
                <div class="col-md-5">
                    {{-- <button class="btn btn-primary w-100 mb-3">@lang('menu.Connecter')</button>
                    <button class="btn btn-primary w-100">@lang('menu.Enregistre')</button> --}}
                    <a class="btn btn-primary w-100 mb-3" href="/auth/login">@lang('menu.Connecter')</a>
                    <a class="btn btn-primary w-100" href="/auth/create">@lang('menu.Enregistre')</a>
                </div>
            </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                {{-- <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> --}}
            </ol>

            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <img style="filter: brightness(70%);" src="images/one.jpg" onerror="this.onerror=null;this.src='/assets/404.png';" class="d-block w-100" alt="...">

                    {{-- <div class="carousel-caption d-none d-md-block">
                    <h1>ON EST PLUS QU'AMIS</h1>
                    <h5>On est donneurs de song</h5>

                    <a class="btn btn-primary mt-5 " href="http://">REJOIGNEZ-NOUS SUR FACEBOOK</a>
                    </div> --}}
                </div>
                <div class="carousel-item">
                    <img style="filter: brightness(70%);" src="images/dds02.png" onerror="this.onerror=null;this.src='/assets/404.png';" class="d-block w-100" alt="...">

                    {{-- <div class="carousel-caption d-none d-md-block">
                    <h1>ON EST PLUS QU'AMIS</h1>
                    <h5>On est donneurs de song</h5>

                    <a class="btn btn-primary mt-5" href="http://">REJOIGNEZ-NOUS SUR FACEBOOK</a>
                    </div> --}}
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>

</section>
