

<div class="fixed-top mat-elevation-z6"  style="background-color: var(--primary) !important">

    <nav class="container  navbar navbar-expand-lg navbar-dark bg-dark"  style="background-color: var(--primary) !important">
        <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-white"></span>
        </button>
        <a class="navbar-brand" href="/">
            {{-- <img src="assets/icon.png" style="width: 30px; height: 30px;" onerror="this.onerror=null;this.src='/assets/icon.png';"> --}}
            <i class="fas fa-graduation-cap text-white"></i>
            <span style="font-weight: bolder " class="text-white">Info-acdemie</span>
        </a>
        <span style="flex: 1 1 auto;"></span>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03" style="flex-grow: 0">
            <ul class="navbar-nav mx-2 mt-2 mt-lg-0">
                <li class="nav-item">
                    <a id="connection" class="btn btn-outline-white" >@lang('menu.Connecter')</a>
                </li>
            </ul>
        </div>
    </nav>

</div>

<script>
    document.addEventListener('DOMContentLoaded', (event) => check())

    const connection = document.querySelector('#connection');

    connection.addEventListener('click', () => check());

    function check() {
        name = localStorage.getItem('NAME');
        if (name !== 'null') {
            connection.innerHTML = name
            connection.setAttribute('href', '/admin')
        } else {
            connection.innerHTML = 'Connecter'
            connection.setAttribute('href', '/auth')
        }
    }
</script>
