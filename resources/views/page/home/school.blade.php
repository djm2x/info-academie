<style>
    .activites {
        position: relative;

    }
    .activites::before {
        content: '';
        z-index: -1;
        background-color: #9561e217;
        position: absolute;
        height: 300px;
        left: -150px;
        width: 300px;
        top: 50px;
        border-radius: 50%;
    }

    .activites::after {
        content: '';
        z-index: -1;
        background-color: #9561e225;
        position: absolute;
        height: 300px;
        right: -150px;
        width: 300px;
        bottom: 50px;
        border-radius: 50%;
    }
</style>


<section class="activites">
    @foreach ($typeActivites as $e)
    <div class="py-5" style="{{$loop->iteration % 2 == 0 ? 'background-color: white' : 'background-color: #c9a4ff1a' }}">
        <div class="container">
            <div class="col-md-12 justify-content-center">
                <div class="d-flex justify-content-center align-items-center mb-5">
                    {{-- <button class="btn btn-primary">{{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}</button> --}}
                    <p class="h1 text-primary2 font-weight-bolder">{{ app()->getLocale() == 'fr' ? $e->nom : $e->nomAr }}</p>
                </div>

                <div class="row">
                    @for ($i = 0; $i < 3; $i++)

                        <div class="col-md-6 col-sm-6 col-lg-4 pl-1 pr-1 justify-content-center align-items-center">
                            <div class="card mat-elevation-z8">
                                <img src="{{strpos($e->activites[$i]->imageUrl, 'http') !== false ? $e->activites[$i]->imageUrl : url('activites/'.$e->activites[$i]->id.'/'.str_replace(';', '', $e->activites[$i]->imageUrl))}}"
                                onerror="this.onerror=null;this.src='/assets/404.png';" alt="..." style="width: 100%">

                                <div class="card-body">
                                    {{-- <p class="card-text m-0 text-dark font-weight-bold">${e.title}</p>
                                    <p class="card-text m-0 text-dark text-muted">
                                        ${e.description.substring(0, 50)} ...
                                    </p> --}}
                                    <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-3">
                                        <a class="btn btn-purple text-uppercase" href={{"profs/0/20/".$e->id."/".$e->activites[$i]->id."/0/0/0/*"}} style="border-radius: 0%;">
                                            {{ app()->getLocale() == 'fr' ? $e->activites[$i]->nom : $e->activites[$i]->nomAr }} <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endfor
                    {{-- <a class="btn btn-danger ml-2 mt-3" href={{"profs/0/20/" . $e->id . "/0/0/0/0/*"}}>
                        Voir plus ...
                    </a> --}}

                    <div class="d-flex flex-row-reverse w-100">

                        <a class="btn btn-purple mt-5 ml-2" href={{"profs/0/20/" . $e->id . "/0/0/0/0/*"}} style="width: 100px; border-radius: 0%;">
                            <i class="fas fa-angle-double-right"></i>
                        </a>
                    </div>


                </div>
                {{-- <hr class="mb-0"> --}}
            </div>



        </div>
    </div>
    @endforeach
</section>
