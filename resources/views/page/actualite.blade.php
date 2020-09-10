@extends('master')


@section('title')
    @lang('menu.Actualite')
@stop
@section('content')

<section class="actualite">

    <div class="container flex-column d-flex justify-content-center align-items-center">
        {{-- <div class="d-flex justify-content-center align-items-center ml-auto mt-5  mb-5">
            <span>Filtrer par : &nbsp;&nbsp;</span>
            <select class="form-control" id="year" style="width:100px">
                <option value="0">Année</option>
                @foreach($years as $e)
                    <option value="{{$e->year}}">{{$e->year}}</option>
                @endforeach
            </select>
        </div> --}}


        <div class="d-flex justify-content-center align-items-center flex-wrap mt-3 w-100">
            <div class="col-md-12"  id="blogList">
            @foreach($list as $e)
                <div class="row">
                    <div class="col-md-3 p-0">
                        <a href="{{url('actualite/'.$e->id)}}   ">
                            <img src="{{url('actualites/'.str_replace(';', '', $e->imageUrl))}}" onerror="this.onerror=null;this.src='/images/404.png';" class="w-100" style="height: 150px;">
                        </a>
                    </div>
                    <div class="col-md-9 d-flex justify-content-between flex-column pr-0">
                        <p class="m-0" style="font-size: 1.1em; font-weight: 700">{{$e->title}}</p>
                        <p class="text-muted" style="font-size: 1.1em"><i class="far fa-calendar-alt"></i> {{date('d/m/Y', strtotime($e->date))}}</p>
                        <p style="font-size: 1.1em">{{substr(strip_tags($e->description),0,200)}} ...</p>
                        <div class="d-flex flex-row-reverse mt-5 mt-auto">
                            <a class="btn btn-danger mybtn text-uppercase" href="{{url('actualite/'.$e->id)}}   ">
                                <span style="font-size: 1.1em;">plus d'info...</span>
                            </a>
                        </div>
                    </div>
                </div>

                <hr>
            @endforeach
            </div>
        </div>

        {{-- this template give s you a function {onPageChange(pageIndex, pageSize)} and a variable to change {count}--}}
        @include('pagination', ['count' => $count])
    </div>
</section>
@stop



@section('scripts')
    <script>

        // get('#year').addEventListener('change', () => {
        //     console.log(pageIndex, +get('#pageSize').value, +get('#year').value)

        //     onPageChange(pageIndex, +get('#pageSize').value, +get('#year').value)
        // } );

        const spinner = `<div class="spinner-border text-success m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>`;

        /**
         * @param {number} pageIndex
         * @param {number} pageSize
         */
        async function onPageChange(pageIndex, pageSize) {
            // console.log(pageIndex, pageSize)
            const startIndex = pageIndex * pageSize;
            get('#blogList').innerHTML = spinner;

            try {
                const r = await axios.get(`/api/actualites/pageApi/${startIndex}/${pageSize}`); ///${+get('#year').value}
                const list = r.data.list;

                get('#count').innerHTML = r.data.count;

                // console.log(r)
                if (list) {
                    get('#blogList').innerHTML = render(list);
                }

            } catch (e) {
                e.response?.data ? console.warn(e.response?.data) : console.warn(e);
            }
        }

        /**
         * @param {Array} data
         * @returns {string}
         */
        function render(data) {
            let html = '';
            data.forEach((e, i) => {
                html +=
                    `
                    <div class="row">
                        <div class="col-md-5">
                            <a href="/actualite/${e.id}">
                                <img src="actualites/${e.imageUrl?.replace(';', '')}" onerror="this.onerror=null;this.src='/images/404.png';" class="w-100" style="height: 180px;">
                            </a>
                        </div>
                        <div class="col-md-7">
                            <p style="font-size: 1.2em">${e.title}</p>
                        </div>
                    </div>

                    <div class="btn btn-danger mybtn text-uppercase" class="d-flex flex-row-reverse mt-2  mb-2">
                        <a href="/actualite/${e.id}"><span style="font-size: 1.1em;">plus d'info...</span></a>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <a href="/actualite/${e.id}   ">
                                <img src="actualites/${e.imageUrl?.replace(';', '')}" onerror="this.onerror=null;this.src='/images/404.png';" class="w-100" style="height: 150px;">
                            </a>
                        </div>
                        <div class="col-md-9 d-flex justify-content-between flex-column">
                            <p class="m-0" style="font-size: 1.1em; font-weight: 700">${e.title}</p>
                            <p class="text-muted" style="font-size: 1.1em"><i class="far fa-calendar-alt"></i> ${new Date(e.date).toISOString().slice(0,10)}</p>
                            <p style="font-size: 1.1em">${e.description.substring(0, 200)} ...</p>
                            <div class="d-flex flex-row-reverse mt-5 mt-auto">
                                <a class="btn btn-danger mybtn text-uppercase" href="/actualite/${e.id}">
                                    <span style="font-size: 1.1em;">plus d'info...</span>
                                </a>
                            </div>
                        </div>
                    </div>

                <hr>
                `;
            });

            return html;
        }
    </script>
@stop
