<section class="footer">
    <div class="container">


    <div class="{{ app()->getLocale() == 'fr' ? 'row text-left' : 'row text-right' }}">
        {{-- <div class="col-md-4 mt-5">
            <a href="/">
                <img class="mb-2" height="80" src="/assets/icon.jpg" width="80" />
            </a>
            <p>@lang('footer.EnsavoirplussurnousText')</p>
            <a class="font-weight-bold text-white" href="/">Comment fonctionne info-academie ?</a>
            <a class="font-weight-bold text-white" href="/">Demande de cours</a>
            <a class="font-weight-bold text-white" href="/">Aide</a>
            <a class="font-weight-bold text-white" href="/">Contactez-nous</a>
        </div> --}}

       

        <div class="col-md-4 mt-5 ">
            <a href="/" class="pl-0">
                <h5 class="font-weight-bold text-white text-uppercase">Cours particuliers info-academie</h5>
            </a>
                <p>
                    Cours particuliers à domicile par nos professeurs particuliers. Du soutien scolaire ou 
                    cours de math à l'aide aux devoirs aux cours de langue comme le français, anglais ou espagnol
                     ou cours de musique comme le piano, la guitare, ou le violon. 
                     Contactez nos profs gratuitement avant de fixer votre rendez-vous ! 
                </p>
        </div>

        <div class="col-md-4 mt-5 ">
            <a href="/" class="pl-0">
                <h5 class="font-weight-bold text-white text-uppercase">Invitez Vos Amis</h5>
            </a>
            <div class="d-flex">

                <a href="/">
                    <img class="mb-2 mr-2" height="80" src="/assets/icon.jpg" width="80" />
                </a>
                <p>
                    Et recevez chacun jusqu’à 50€ de réduction 
                </p>
            </div>
        </div>

        <div class="col-md-4 mt-5">
            <h5 class="font-weight-bold text-white text-uppercase">@lang('footer.newsletter')</h5>

            <p>Restez informés des événements à venir, des discussions locales, des mises à jour du site et des offres promotionnelles</p>

            <form id="newletterForm" class="form-inline">
                <div class="input-group mb-2"  style="direction: ltr">
                    <input type="email" class="form-control" id="newletterEmail" placeholder="@lang('footer.email')">
                    <div class="input-group-prepend">
                        <button type="submit" class="btn btn-success mb-2 text-uppercase" style="border-radius: 0 5px 5px 0;">
                            @lang('footer.subscribe')
                        </button>
                    </div>
                </div>
            </form>
            <span id="msg"></span>
        </div>
    </div>
</div>
</section>

<section class="d-flex justify-content-between align-items-center last">
    <div class="container d-flex flex-wrap justify-content-between align-items-center p-2">
        <span>&copy; <span id="date"></span> Info-academie</span>

        <div class="d-flex flex-wrap align-items-center actions">
            <a class="m-1" href="#">@lang('footer.Montionslegales')</a>
            {{-- <a class="m-1" href="#">@lang('footer.Publications')</a>
            <a class="m-1" href="#">@lang('footer.Alaune')</a> --}}
            <a class="m-1" href="#">@lang('footer.Plandusite')</a>
            <a class="m-1" href="#">@lang('footer.Contact')</a>
        </div>
    </div>

</section>

@section('scripts-footer')

    <script>
         
        const newletterForm = document.getElementById('newletterForm');
        const msg = document.getElementById('msg');
        document.querySelector('#date').innerHTML = new Date().getFullYear()

        newletterForm.addEventListener('submit', async e => {

            e.preventDefault();

            const o = {
                email: document.getElementById('newletterEmail').value,
                date: new Date(),
            }

            console.log(o);

            try {
                msg.innerHTML = "en cours d'envois ...";
                const r = await axios.post('/api/newsLetter', o);
                console.log(r);
                msg.innerHTML = "Email enregister";

                setTimeout(() => msg.innerHTML = '', 4000);

            } catch (e) {
                e.response ? console.warn(e.response.data) : console.warn(e);
            }
        });

        
    </script>

@stop