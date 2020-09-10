@extends('master')

@section('title')
    @lang('page.GalerieDimages')
@stop

@section('content')
<style>
    .btn {
        padding: 2px 2px;
        font-size: .8em;
    }
</style>
<section class="{{ app()->getLocale() == 'fr' ? 'galerie text-left' : 'galerie text-right' }}">
    {{-- <div class="wallpaper" >
        <div class="para d-flex flex-column align-items-center mt-3">
            <p class="text-danger text-uppercase h2 font-weight-bold anime">Galerie d'images</p>

            <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
        </div>
    </div> --}}
    <div class="container">
        <div class="row d-flex justify-content-center p-2 mt-5">
            @foreach ($list as $e)
                <div  class="col-md-6 col-sm-6 col-lg-4 mb-3 d-flex justify-content-center">
                    <div class="card m-1" style="width: 18rem;cursor: pointer;">
                        <hr class="m-0">
                        <hr class="m-0">
                        <hr class="m-0">
                        <hr class="m-0">
                        <hr class="m-0">
                        <div class="card-body">
                        <p class="card-text m-0 text-dark font-weight-bold">{{$e->title}}</p>
                            <p class="card-text m-0 text-dark text-muted">
                                {{date('d-m-Y', strtotime($e->date))}}
                            </p>
                            <div class="d-flex d-flex flex-row-reverse mt-3 p-1">
                                <a class="btn btn-danger text-uppercase"  href="detail-galerie/{{$e->id}}">@lang('page.plusdinfo')...</a>
                            </div>

                            {{-- <div class="d-flex justify-content-between align-items-center mt-3">
                                <a class="btn btn-danger text-uppercase"  href="activite/${e.id}">plus d'info...</a>
                                <div class="d-flex text-dark social"> </div>
                            </div> --}}
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
  </div>
</section>
@stop

{{-- @section('scripts')
    <script>
        document.querySelector('.card-code').addEventListener('click', () => console.log('clicket'));

        // window.location.href = '/detail-galerie'
    </script>
@stop --}}
