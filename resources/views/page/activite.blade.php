@extends('master')

@section('title')
    @lang('page.NosActivites')
@stop

@section('content')
    {{-- {{$list}} --}}
    <style>
        .btn {
            padding: 2px 2px;
            font-size: .8em;
            margin-bottom: 10px;
        }
    </style>

    <section class="{{ app()->getLocale() == 'fr' ? 'region text-left' : 'region text-right' }}">
        <div class=" flex-column d-flex justify-content-center align-items-center">

            <div class="para d-flex flex-column align-items-center mt-5 w-100">
                {{-- <p class="text-danger h2 font-weight-bold">Nos Activites</p>

                <div class="progress mb-4">
                    <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div> --}}

                   {{-- <p class="h4 col-md-8 text-center mt-4">
                   A la une
                </p> --}}

                {{-- dd{{request()->routeIs('activite') == 1}}dd --}}
                <div class="d-flex justify-content-center align-items-center flex-wrap">
                    <select class="form-control m-2" style="width: 18rem;" id="dateSelect">
                        <option value="desc">@lang('page.Recents')</option>
                        <option value="asc">@lang('page.Anciens')</option>
                    </select>

                    <select class="form-control m-2" style="width: 18rem;" id="regionSelect">
                        <option value="0">--@lang('page.Regions')--</option>
                        @foreach($regions as $e)
                            <option value="{{$e->id}}">{{$e->name}}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div id="list" class="d-flex justify-content-center align-items-center flex-wrap p-2 mt-5">

            </div>

            <div class="d-flex justify-content-center align-items-center mb-5">
                <span class="d-none d-md-block">@lang('page.elementparpage')&nbsp;:&nbsp;</span>
                <select class="form-control" id="pageSize" style="width:75px">
                    {{-- <option value="6">6 </option> --}}
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>

                <span class="d-flex ml-2 mr-4">
                    <span id="startIndex"></span>&nbsp;-&nbsp;<span id="endIndex"></span>&nbsp;@lang('page.sur')&nbsp;<span id="count"></span>
                </span>

                <nav class="d-flex justify-content-center align-items-center" style="direction: ltr">
                    <ul class="pagination mb-0">
                        <li class="page-item">
                            <a id="first" class="page-link"><i class="fas fa-angle-double-left"></i></a>
                        </li>

                        <li class="page-item">
                            <a id="previous" class="page-link"><i class="fas fa-angle-left"></i></a>
                        </li>

                        <li class="page-item">
                            <a id="next" class="page-link"><i class="fas fa-angle-right"></i></a>
                        </li>

                        <li class="page-item">
                            <a id="last" class="page-link"><i class="fas fa-angle-double-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
@stop



@section('scripts')
    <script>
        let translate = {!! json_encode(app()->getLocale())  !!};
        translate = translate === 'fr' ? 'plus d\'info' : 'معلومات اكثر';
    </script>
    <script src="{{ asset('js/activite.js') }}"></script>
@stop
