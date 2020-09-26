@extends('master')

@section('title')
    @lang('page.NosActivites')
@stop

@section('content')

    <section class="{{ app()->getLocale() == 'fr' ? 'profs text-left' : 'profs text-right' }}">
        <div class=" flex-column d-flex justify-content-center align-items-center">

            <div class="para d-flex flex-column align-items-center mt-5 w-100">
            <p>{{$count}}</p>
                {{-- <p class="text-danger h2 font-weight-bold">Nos Activites</p>

                <div class="progress mb-4">
                    <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div> --}}

                   {{-- <p class="h4 col-md-8 text-center mt-4">
                   A la une
                </p> --}}

                {{-- dd{{request()->routeIs('activite') == 1}}dd --}}
                {{-- <div class="d-flex justify-content-center align-items-center flex-wrap">
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
                </div> --}}
            </div>

            <div id="list" class="d-flex justify-content-center align-items-center flex-wrap p-2 mt-5">
                <div class="row">
                    @foreach ($profs as $e)
                   
                    <div class="p-1 ">
                        <div class="card">
                            <div class="row my-2">
                                <div class="col-md-4">
                                    <div class="d-flex flex-column justify-content-center align-items-center ml-2">
                                        <img src="{{strpos($e->user->imageUrl, 'http') !== false ? $e->user->imageUrl : url('profs/'.$e->id.'/'.$e->imageUrl)}}" 
                                        onerror="this.onerror=null;this.src='/images/404.png';" class="p-2 rounded-circle" alt="..." style="width: 200px; height: 200px;">
                                        <p class="h5 text-dark font-weight-bold">{{$e->user->nom}} {{$e->user->prenom}}</p>
                                    </div>
                                </div>
                                
                                    
                                
                                <div class="col-md-8 p-0">
                                    <div class=" card-body d-flex flex-column justify-content-between my-2 h-100">
                                        <div class="d-flex flex-row-reverse justify-content-between align-items-center mb-3">
                                            <a class="btn btn-primary text-uppercase" href="/profs/{{$e->id}}">
                                                {{-- {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} --}}
                                                Voir plus ...
                                            </a>
                                            <span><i class="fas fa-star"></i> {{$e->note}}</span>

                                        </div>
                                        <div>
                                            <p class="card-text m-0 text-dark font-weight-bold">{{substr($e->intro, 0, 100)}}</p>
                                            <p class="card-text m-0 text-dark text-muted">
                                                {{substr($e->description, 0, 100)}} ...
                                            </p>
                                        </div>

                                        <div class="d-flex mb-3">
                                            @foreach ($activites as $a)
                                                @if(strpos($e->idsActivites, ';' . $a->id . ';') !== false)         
                                                    <a class="mx-1 px-1 text-white" style="background: gray;" href={{"/profs/0/20/0/" . $a->id . "/0/0/0"}}>
                                                        {{ app()->getLocale() == 'fr' ? $a->nom : $a->nomAr }}
                                                    </a>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
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
    {{-- <script src="{{ asset('js/activite.js') }}"></script> --}}
@stop
