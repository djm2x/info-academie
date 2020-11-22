

<div class="fixed-top mat-elevation-z6" style="background-color: #9c27b0">

    <nav class="container  navbar navbar-expand-lg navbar-light px-0 py-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
            {{-- <img src="assets/icon.png" style="width: 30px; height: 30px;" onerror="this.onerror=null;this.src='/assets/icon.png';"> --}}
            <i class="fas fa-graduation-cap text-primary2"></i>
            <span style="font-weight: bolder " class="text-primary2">Info-acdemie</span>
        </a>
        <span style="flex: 1 1 auto;"></span>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03" style="flex-grow: 0">
            <ul class="navbar-nav mx-2 mt-2 mt-lg-0">
                <li class="nav-item">
                    <a id="connection" class="btn btn-outline-secondary" >@lang('menu.Connecter')</a>
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
