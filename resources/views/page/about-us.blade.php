@extends('master')

@section('title')
    @lang('page.Nouscontacter')
@stop

@section('content')
<section class="about-us">
    <div class="{{ app()->getLocale() == 'fr' ? 'text-left container px-0' : 'text-right container px-0' }}">
        <div class="d-flex flex-wrap justify-content-center align-items-center mt-3 mb-3" style="height: 70vh">
            <div class="col-md-6">
                <h1 class="font-weight-bolder mb-5 text-purple" style="font-size: 3em">Nous somme les meilleur</h1>

                <p class="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti sunt,
                    fugit illo aliquam ea! Atque omnis consequatur explicabo dolores. Odit quod maxime,
                    dolorum beatae vitae exercitationem ipsam. Natus error dolor similique quae, vero minima,
                    quo laudantium dolorem suscipit, recusandae cum tempora. Ad aliquam ipsum minima illum expedita facilis debitis?
                </p>

                <a class="btn btn-purple" href="/contact">
                    Contactez-nous
                </a>
            </div>
            <div class="col-md-6 p-0">
                <img src="/assets2/knowledge.png" style="width: 100%">
            </div>
        </div>

  </div>
</section>
@stop

