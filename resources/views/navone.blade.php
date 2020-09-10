



<section class="navMobile d-md-none">

        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand  pl-3 " href="{{ route('home') }}">
                <img src="{{ asset('images/icon2.jpg') }}" style="width:150px" alt="don du song">
            </a>
            <button class="navbar-toggler  pr-3" type="button" data-toggle="collapse" data-target="#navbarMobile" aria-controls="navbarMobile" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
                <i class="fas fa-times" style="display: none"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarMobile">
                @include('nav-shared')
            </div>


                <form class="p-3 d-flex align-items-center justify-content-center  w-100" style="background-color:#fff">
                    <input class="form-control mr-sm-2 mr-3" type="search" placeholder="@lang('menu.Recherche')" aria-label="Search">
                    <a class="navbar-brand search" href="{{ route('home') }}">
                        <i class="fas fa-search"></i>
                    </a>
                </form>
                <section style="background-color: #f70509; width: 100vw; height: 1px"></section>
        </nav>
</section>

{{--  --}}

<section class="navthree  d-none d-md-block">
    <div class="container  p-0">
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars" style="color:white"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                @include('nav-shared')
            </div>
        </nav>
    </div>

</section>

<section style="background-color: #f70509; width: 100vw; height: 1px"></section>

