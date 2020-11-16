<section class="footer">
    <div class="container py-5">


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
            <a href="/about-us" class="pl-0">
                <h5 class="font-weight-bold text-white text-uppercase">Qui somme nous</h5>
            </a>
            <div>
                <i class="fas fa-envelope"></i>
                <span>email@email.com</span>
            </div>

            <div>
                <i class="fas fa-phone-alt"></i>
                <span>+212 6 00 00 00 00</span>
            </div>

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
            <a href="/contact" class="pl-0">
                <h5 class="font-weight-bold text-white text-uppercase">Contactez-nous</h5>
            </a>
            <div class="d-flex my-3">
                <a><i class="fab fa-facebook-square" style="font-size: 50px; margin: 0 2px;color:white;"></i></a>
                <a><i class="fab fa-instagram-square" style="font-size: 50px; margin: 0 2px;color:white;"></i></a>
                <a><i class="fab fa-youtube-square" style="font-size: 50px; margin: 0 2px;color:white;"></i></a>
            </div>
        </div>
    </div>
</div>
</section>

<section class="d-flex justify-content-between align-items-center last">
    <div class="container d-flex flex-wrap justify-content-between align-items-center p-2">
        <span>&copy; <span id="date"></span> Info-academie</span>

        <div class="d-flex flex-wrap align-items-center actions">
            {{-- <a class="m-1" href="#">@lang('footer.Montionslegales')</a>
            <a class="m-1" href="#">@lang('footer.Plandusite')</a>
            <a class="m-1" href="#">@lang('footer.Contact')</a> --}}
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
