
{{-- data comes from namespace \Providers\AppServiceProvider; --}}
<style>
    .space-letter a{
        letter-spacing: 1px;
    }

    .space-letter .dropdown-toggle::after {
        margin-right: 0.255em;
    }
</style>

<ul class="{{ app()->getLocale() == 'fr' ? 'navbar-nav p-0 w-100' : 'navbar-nav p-0 w-100 text-right space-letter' }}">
    <li class="nav-item">
        <a class="{{ request()->is('/') ? 'nav-link home active' : 'nav-link home' }}" href="{{ route('home') }}">
            <i  class="fas fa-home d-none d-md-block"></i>
            <span class="d-sm-none">@lang('menu.Accueil')</span>
        </a>
    </li>

    

    
    <span style="flex: 1 1 auto;"></span>
    
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{-- <i class="fas fa-language fa-2x"></i> &nbsp;--}}
            <span>{{ app()->getLocale() == 'fr' ? 'Français' : 'العربية' }}</span>
        </a>
        {{-- <a class="{{ request()->is('planification') ? 'nav-link active' : 'nav-link' }}" href="{{ route('planification') }}">Don du song</a> --}}
        <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
            <a class="{{ app()->getLocale() == 'fr' ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('localization/fr') }}">Français</a>
            <a class="{{ app()->getLocale() == 'ar' ? 'dropdown-item active' : 'dropdown-item' }}" href="{{ url('localization/ar') }}">العربية</a>
        </div>
        
    </li>
    
    <li class="nav-item">
        <a class="{{ request()->is('activite') ? 'nav-link active' : 'nav-link' }}" href="{{ route('activite') }}">@lang('menu.Connecter')</a>
    </li>
    {{-- <li class="nav-item">
        <a class="{{ request()->is('actualite') ? 'nav-link active' : 'nav-link' }}" href="{{ route('actualite') }}">@lang('menu.Actualite')</a>
    </li> --}}
    <li class="nav-item">
        <a class="{{ request()->is('galerie') ? 'nav-link active' : 'nav-link' }}" href="{{ route('galerie') }}">@lang('menu.Enregistre')</a>
    </li>
    {{-- <li class="nav-item ml-3">
        <a class="btn btn-warning" href="{{ route('admin') }}">Back-office</a>
    </li> --}}
</ul>
