<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    @yield('entete')
    <title>Info-academie</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/png" href="{{ asset('assets/fav2.png') }}" />
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    @yield('styles')
</head>

<body style="{{ app()->getLocale() == 'fr' ? 'direction: ltr' : 'direction: rtl' }}">
    <div id="haut"></div>

    @include('navone')


    <main class=" w-100 bg-white">
        {{-- @include('reading-progress-bar')
        @include('reading-progress') --}}
        <div class="img10">

            @yield('content')
        </div>
    </main>

    <footer>
        @include('footer')
    </footer>


    <a id="btn" class="d-flex justify-content-center align-items-center"><i class="fas fa-arrow-up text-white"></i></a>

    <!-- Scripts -->
    <script>
        console.log('jjjj')
        const navBtn = document.querySelector('.navbar-toggler')
        const bar = document.querySelector('.fa-bars')
        const x = document.querySelector('.fa-times')
        let isBar = true;
        navBtn.addEventListener('click', (e) => {
            if (isBar) {
                bar.style.display = 'none';
                x.style.display = 'inline';
                isBar = false;
            } else {
                bar.style.display = 'inline';
                x.style.display = 'none';
                isBar = true;
            }
        });

        //
        document.querySelector('#btn').addEventListener('click', () => {
            document.querySelector('#haut').scrollIntoView({block: 'end', inline: 'nearest', behavior: 'smooth'})
        });
    </script>
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('scripts')
    @yield('scripts-footer')
    @yield('scripts-sidenav')
</body>
</html>
