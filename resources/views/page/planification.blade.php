@extends('master')

@section('title')
    PLAFINICATION
@stop

@section('content')
    {{-- {{$list}} --}}

    <section class="planification">
        <div class="container flex-column d-flex justify-content-center  mb-5">

            {{-- <div class="para d-flex flex-column align-items-center mt-5">
                <p class="text-danger h2 font-weight-bold">PLAFINICATION</p>

                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
            </div> --}}

            {{-- <div class="row d-flex justify-content-center p-2 mt-5">
                @foreach ($list as $e)
                    <div class="col-md-6 col-sm-6 col-lg-4 mb-3">
                        <div class="card">
                            <img src="{{url('regions/'.str_replace(';', '', $e->imageUrl))}}" class="card-img-top" alt="...">
                        </div>
                    </div>
                @endforeach
            </div> --}}

            <div class="row mt-5 mb-5">
                <div class="col-md-6" >
                    <div id="show" style="opacity: 0;">

                        <p class="h3">Region : <span id="region">...</span></p>
                        <p class="h4">Ville : <span id="ville">...</span></p>
                        <p class="h4">Titre : <span id="title">...</span></p>
                        <p id="description" class="lead">
                            ...
                        </p>
                    </div>

                </div>
                <div class="col-md-6">
                    <svg id="map" viewbox="0 0 744 744"></svg>
                </div>
            </div>
        </div>
    </section>
@stop


@section('scripts')
    <script src="{{ asset('js/map.maroc/snap.svg-min.js') }}" ></script>
    <script src="{{ asset('js/map.maroc/snap.svg.zpd.min.js') }}" ></script>
    <script src="{{ asset('js/map.maroc/map.callback.event.js') }}" ></script>
    <script>
        const show = document.getElementById('show');
        const region = document.getElementById('region');
        const ville = document.getElementById('ville');
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const spinner = `
            <div class="spinner-border text-success m-5" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        `

        /**
         * @param {string} city
         */
        async function onClick(city) {
            console.log(city);
            ville.innerText = city;
            try {
                show.style.opacity = 1;
                const r = await axios.get(`/api/planifications/getLast/${city}`);

                const planification = r.data;

                console.log('planification : ', planification , '<<')

                if (planification) {
                    region.innerText = planification.region.name;
                    title.innerText = planification.title;
                    description.innerText = planification.description;
                } else {
                    region.innerText = '...';
                    title.innerText ='...';
                    description.innerText = '...';
                }
            } catch (e) {
                console.warn(e)
            }



        }
    </script>
@stop
