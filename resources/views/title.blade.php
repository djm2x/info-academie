@if (!request()->is('/'))
    <section class="title d-flex align-items-center">
        <div class="container">
            <h2 class="{{ app()->getLocale() == 'fr' ? 'm-0' : 'm-0 text-right' }}">@yield('title')</h2>
        </div>
    </section>
@endif