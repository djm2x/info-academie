<section class="profs bg-white">
    <div class="py-2" style="background-color: white">
        <div class="container">
            <div class="col-md-12 justify-content-center">
                <div class="d-flex justify-content-center align-items-center mb-5">
                    {{-- <p class="h1">Nos professeur ont du talent</p> --}}
                    <p class="h1 text-primary2 font-weight-bolder">Rencontrez nos prof talentueux</p>

                </div>

                <div class="row">
                    @foreach ($profs as $e)

                        <div class="col-md-6 col-sm-6 col-lg-4 px-1 justify-content-center align-items-center">
                            <div class="card mat-elevation-z8 my-2">

                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="{{strpos($e->user->imageUrl, 'http') !== false ? $e->user->imageUrl : url('users/'.$e->user->id.'/'.str_replace(';', '', $e->user->imageUrl) )}}"
                                    onerror="this.onerror=null;this.src='/assets2/profe.jpg';" alt="..." style="width: 100%; height: 300px;">
                                </div>
                                <hr class="m-0">

                                <div class="d-flex flex-row-reverse">
                                    <a class="btn btn-purple mx-2" style="margin-top: -20px;width: 40px;height: 40px; border-radius: 50%;" href="profs/{{$e->id}}">
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>

                                <div class="card-body pt-2">
                                    <div class="d-flex justify-content-between">
                                        <p class="h5 text-dark font-weight-bold">{{$e->user->nom}} {{$e->user->prenom}}</p>
                                        <span style="color: var(--purple); font-weight: bold;"><i class="fas fa-star"></i> {{$e->note}}</span>
                                    </div>
                                    <p class="card-text m-0 text-muted">{{substr($e->intro, 0, 100)}}</p>
                                </div>
                            </div>
                        </div>
                        @endforeach
                        <div class="d-flex flex-row-reverse w-100">

                            <a class="btn btn-purple mt-5 ml-2" href="profs/0/20/0/0/0/0/0/*/0" style="width: 100px; border-radius: 0%;">
                                <i class="fas fa-angle-double-right"></i>
                            </a>
                        </div>
                </div>
                {{-- <hr class="mb-0"> --}}
            </div>



        </div>
    </div>
</section>
