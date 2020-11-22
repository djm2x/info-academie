<style>
    .mycontent {
        position: absolute;
        width: 100%;
        height: 65vh;
        z-index: 1;
    }
</style>


<section class="first">
    <div class="container d-flex flex-column justify-content-center align-items-center">



        <div class="mycontent d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex justify-content-center align-items-center">
                <p class="h2 font-weight-bolder text-white text-center mx-5 col-md-8 mb-3">
                    Chercher le professeur le plus adéquat à votre besoin
                </p>
            </div>

            <form id="myForm" method="GET" class="p-3 row align-items-center justify-content-center" style="width: 70%">
                <div class="form-group col-md-4 my-2 px-1">
                    <select class="form-control" name="activite">
                        <option selected value="0">@lang('menu.Matiere')</option>
                        @foreach($activites as $e) <option value="{{$e->id}}">{{$e->nom}}</option> @endforeach
                    </select>
                </div>

                <div class="form-group col-md-4 my-2 px-1">
                    <select class="form-control" name="ville">
                        <option selected value="0">@lang('menu.Ville')</option>
                        @foreach($villes as $e) <option value="{{$e->id}}">{{$e->nom}}</option> @endforeach
                    </select>
                </div>

                <button type="submit" class="col-md-4 btn btn-purple my-2 mx-1"><i class="fas fa-search"></i> Rechercher</button>
            </form>

            <script>
                const url = window.location.origin;

                document.querySelector('#myForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);

                    const activite = formData.get('activite');
                    const ville = formData.get('ville');

                    window.location = `${url}/profs/0/20/0/${activite}/0/0/0/*/${ville}`
                });
            </script>

        </div>


        <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img style="filter: brightness(40%); height: 65vh;" class="w-100" src="assets2/home/slide1.jpg" onerror="this.onerror=null;this.src='/assets/404.png';" alt="...">

              </div>
              <div class="carousel-item ">
                <img style="filter: brightness(40%); height: 65vh;" class="w-100" src="assets2/home/slide2.jpg" onerror="this.onerror=null;this.src='/assets/404.png';" alt="...">

              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>



    </div>

</section>
