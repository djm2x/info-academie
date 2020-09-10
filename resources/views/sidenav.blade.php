
 <style>
    .card {
        padding: 0;
        border-radius: 0;

    }

    .card-body {
        padding: 0 1.25rem;
    }
    .card-title {
        padding-top: 1.25rem;
    }

    .card-title h5{
        /* padding-let: 1.25rem; */
        background-color: #4c4c4c;
        font-weight: 100;
        padding: 5px;
    }

    .card-title a{
        padding-left: calc(1.25rem - 5px) ;
        color: white;
        /* background-color: gray; */
    }
 </style>


<section class="sidenav h-100">
    <div class="card mb-2">
        <video  width="100%"  controls >
            <source src="{{ asset('videos/spot_publicitaire.mp4') }}" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
    </div>


        <div class="card mb-2">
            <div class="card-title">
                <h5><a href="/actualite">@lang('menu.Actualite')</a></h5>
            </div>
            <div class="card-body">
                <div class="d-flex flex-column" id="news" class="row">

                </div>
            </div>
        </div>



    <div class="card mb-2" style="height: 45vh;">
        <div class="card-title">
            <h5><a href="/actualite">Test</a></h5>
        </div>
        <div class="card-body">
            <div class="d-flex flex-column" id="test" class="row">

            </div>
        </div>
    </div>

</section>
@section('scripts-sidenav')
<script>

    //
    const spinner2 = `<div class="2-border text-success m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>`;

        window.addEventListener("DOMContentLoaded", () => {
            console.log('DOMContentLoaded')
            getPage();
        });

        async function getPage() {
            get(`#news`).innerHTML = spinner2;
            // console.log('side>>>')

            try {
                const r = await axios.get(`/api/actualites/news/5`);
                const list = r.data.list;

                // console.log(r)
                // console.log('fouter<<<<')

                if (list) {
                    get(`#news`).innerHTML = '';
                    get(`#news`).innerHTML = populate2(list);
                }

            } catch (e) {
                // try {
                //     e.response?.data ? console.warn(e.response?.data) : console.warn(e);
                // } catch (error) {
                // }
                console.warn(e)

            }
        }

        /**
         * @param {date: Date, titre: string}[] data
         * @returns {void}
         */
        function populate2(data) {
            let html = ''
            data.forEach((e, i) => {
                html +=
                    `<div class="mb-3">
                        <p class="text-muted m-0" style="font-size: .9em">
                            <i class="far fa-calendar-alt"></i> ${dateFormat(new Date(e.date))}
                        </p>
                        <a href="/actualite/${e.id}" class="text-dark">
                            <p style="font-size: 1.1em" class=" m-0">${e.title}</p>
                        </a>
                    </div>
                    `;

                    // <p class="text-muted m-0 mb-3" style="font-size: .6em">
                    //         ${e.description.toString().substring(0, 500)} ...
                    //         ${new DOMParser().parseFromString(e.description, "text/html")} ...
                    //     </p>
            });

            return html;
        }

        function dateFormat(date) {
            let month = `${date.getMonth() + 1}`
            let day = `${date.getDate()}`
            let year = `${date.getFullYear()}`

            month = `${month.length === 1 ? '0' + month : month}`;
            day = `${day.length === 1 ? '0' + day : day}`;

            return `${day}/${month}/${year}`;
        }

        /**
         * @returns {ParentNode} element
         */
        function get(selector) {
            return document.querySelector(selector)
        }
    // const spinner = `<div class="spinner-border text-success m-5" role="status">
    //                     <span class="sr-only">Loading...</span>
    //                 </div>`;

    // window.addEventListener("DOMContentLoaded", () => {
    //     console.log('DOMContentLoaded')
    //     getPage('newsTopThree', 'news');
    //     getPage('agendaTopThree', 'agenda');
    // });

    // async function getPage(context, type) {
    //     get(`#${context}`).innerHTML = spinner;

    //     try {
    //         const r = await axios.get(`/api/blog/${context}`);
    //         const list = r.data.list;

    //         console.log(list)

    //         if (list) {
    //             get(`#${context}`).innerHTML = '';
    //             get(`#${context}`).innerHTML = populate(list, type);
    //         }

    //     } catch (e) {
    //         // try {
    //         //     e.response?.data ? console.warn(e.response?.data) : console.warn(e);
    //         // } catch (error) {
    //         // }
    //         console.warn(e)

    //     }
    // }

    // /**
    //  * @param {date: Date, titre: string}[] data
    //  * @returns {void}
    //  */
    // function populate(data, type) {
    //     let html = ''
    //     data.forEach((e, i) => {
    //         html +=
    //             `<div class="d-flex align-items-center w-100 p-1">
    //                 <div class="col-3 col-md-3 date d-flex flex-column justify-content-between align-items-center">
    //                     <p class="h3 m-0 font-weight-bold" style="z-index: 3;">${new Date(e.date).getDate()}</p>
    //                     <p class="m-0 text-muted" style="z-index: 3; font-size:.8em; white-space: nowrap;">
    //                         ${new Date(e.date).toLocaleString('default', { month: 'long' })}, ${new Date(e.date).getFullYear()}
    //                     </p>
    //                 </div>
    //                 <div class="col-9 col-md-9 pr-0">
    //                     <a class="init-ancre" href="/blogs/${type}/${e.id}""><p class="m-0">${e.title.substring(0, 60)}..</p></a>
    //                 </div>
    //             </div>
    //             `;
    //     });

    //     return html;
    // }

    // /**
    //  * @returns {ParentNode} element
    //  */
    // function get(selector) {
    //     return document.querySelector(selector)
    // }
</script>
@stop
