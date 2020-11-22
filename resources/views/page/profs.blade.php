@extends('master')

@section('title')
    @lang('page.NosActivites')
@stop

@section('content')

    <section class="{{ app()->getLocale() == 'fr' ? 'profs text-left container px-0' : 'profs text-right container px-0' }}">
        <div class=" flex-column d-flex justify-content-center align-items-center mt-5">

            <div class="d-flex flex-wrap justify-content-center align-items-center pt-5 mb-3">

                <div class="col-md-6">
                    <h1 class="font-weight-bolder text-primary2 mb-5" style="font-size: 3em">Nous Professeurs <b>({{$count}})</b></h1>

                    <div class="para d-flex flex-column align-items-center mt-5 w-100">
                    {{-- <p>{{$count}}</p> --}}
                        {{-- <form method="GET" action="{{ route('profs') }}"> --}}
                        <form id="myForm" method="GET">
                            {{-- @csrf --}}

                            <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputCity">Professeur</label>
                                <input type="text" class="form-control" name="prof">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="inputState">Type Cours</label>
                                <select id="inputState" class="form-control" name="typeCours">
                                    <option selected value="0">...</option>
                                    @foreach($typeCourss as $e) <option value="{{$e->id}}">{{$e->nom}}</option> @endforeach
                                </select>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="inputState">Niveau Scolaires</label>
                                <select id="inputState" class="form-control" name="niveauScolaire">
                                    <option selected value="0">...</option>
                                    @foreach($niveauScolaires as $e) <option value="{{$e->id}}">{{$e->nom}}</option> @endforeach
                                </select>
                            </div>
                            </div>

                            <button type="submit" class="btn btn-purple"><i class="fas fa-search"></i> Rechercher</button>
                        </form>

                        <script>
                            const url = window.location.origin;

                            document.querySelector('#myForm').addEventListener('submit', (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);

                                const prof = formData.get('prof') === '' ? '*' : formData.get('prof');
                                const typeCours = formData.get('typeCours');
                                const niveauScolaire = formData.get('niveauScolaire');

                                window.location = `${url}/profs/0/20/0/0/${typeCours}/0/${niveauScolaire}/${prof}/0`
                            });
                        </script>
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <img src="/assets2/tuto.png" style="width: 120%">
                </div>
            </div>





            <div id="list" class="d-flex justify-content-center align-items-center flex-wrap p-2 mt-5">
                <div class="row">
                    @foreach ($profs as $e)

                    <div class="col-md-12 p-1 ">
                        <div class="card mat-elevation-z8">
                            <div class="row my-2">
                                <div class="col-md-4">
                                    <div class="d-flex flex-column justify-content-center align-items-center ml-2">
                                        <img src="{{strpos($e->user->imageUrl, 'http') !== false ? $e->user->imageUrl : url('users/'.$e->user->id.'/'.str_replace(';', '', $e->user->imageUrl))}}"
                                        onerror="this.onerror=null;this.src='/assets2/profe.jpg';" alt="..." style="height: 200px;">



                                        <p class="h5 text-purple font-weight-bold mt-2">{{$e->user->nom}} {{$e->user->prenom}}</p>
                                    </div>
                                </div>

                                <div class="col-md-8 p-0">
                                    <div class=" card-body d-flex flex-column justify-content-between  h-100">
                                        <div class="d-flex flex-row-reverse justify-content-between align-items-center mb-3">
                                            <a class="btn btn-purple" href="/profs/{{$e->id}}" style="width: 100px; border-radius: 0%;">
                                                <i class="fas fa-angle-double-right"></i>
                                            </a>
                                            <span class="text-purple"><i class="fas fa-star"></i> {{$e->note}}</span>

                                        </div>
                                        <div>
                                            <p class="card-text mb-2 text-purple font-weight-bold">{{substr($e->intro, 0, 100)}}</p>
                                            <p class="card-text mb-2 text-dark text-muted">
                                                {{substr($e->description, 0, 100)}} ...
                                            </p>
                                        </div>

                                        <div class="d-flex">
                                            @foreach ($activites as $a)
                                                @if(strpos($e->idsActivites, ';' . $a->id . ';') !== false)
                                                    <a class="mx-1 px-1 font-weight-bold mat-elevation-z3" style="color: var(--purple);" href={{"/profs/0/20/0/" . $a->id . "/0/0/0/*/0"}}>
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

            <div class="d-flex justify-content-center">
                {{-- <p>dddddddddd</p> --}}
                {!! $profs->links() !!}
            </div>

            {{-- <div class="d-flex justify-content-center align-items-center mb-5">
                <span class="d-none d-md-block">@lang('page.elementparpage')&nbsp;:&nbsp;</span>
                <select class="form-control" id="pageSize" style="width:75px">

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
            </div> --}}
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
