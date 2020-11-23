<style>
    .footer {
    // color: #a3b1be;
    color: rgba(255, 255, 255, 0.815);
    background-color: #7e20e6;
    // padding: 0 3rem 1rem 3rem;
    position: relative;
    z-index: 2;
    }
    .footer::before {
        clip-path: polygon(56% 0, 100% 21%, 100% 100%, 0 100%, 0 0);
        position: absolute;
        content: '';
        z-index: -1;
        background-color:  var(--primary);
        height: 100%;
        width: 100%;
    }
    .last {
        background-color: #4d1290;
        color: #bdbdbd;

    }
    a {
        color: #bdbdbd;

    }

    a:hover {
            color: rgb(255, 223, 174);
        }
</style>


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
                <h5 class="font-weight-bold text-white text-uppercase mb-3">Qui somme nous</h5>
            </a>
            <div>
                <i class="fas fa-envelope"></i>
                <a href="mailto:infoacademie3@gmail.com">infoacademie3@gmail.com</a>
            </div>

            <div class="mt-2">
                <p class="m-0">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+212660331639">+2126 60 33 16 39</a>
                </p>

                <p class="m-0">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+212622036979">+2126 22 03 69 79</a>
                </p>

                <p class="m-0">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+212617928302">+2126 17 92 83 02</a>
                </p>
            </div>

        </div>

        <div class="col-md-4 mt-5 ">
            <a href="/" class="pl-0">
                <h5 class="font-weight-bold text-white text-uppercase mb-3">Invitez Vos Amis</h5>
            </a>
            <div class="d-flex">

                <a href="/">
                    <img class="mb-2 mr-2" height="80" src="/assets/icon.jpg" width="80" />
                </a>
                <p>
                    Et recevez chacun jusqu’à 50% de réduction
                </p>
            </div>
        </div>

        <div class="col-md-4 mt-5">
            <a href="/contact" class="pl-0">
                <h5 class="font-weight-bold text-white text-uppercase mb-3">Contactez-nous</h5>
            </a>
            <div class="d-flex my-3">
                <a target="_blank" href="https://web.facebook.com/Info-Academie-114019803356403"><i class="fab fa-facebook-square" style="font-size: 50px; margin: 0 4px;color:white;"></i></a>
                <a target="_blank" href="https://www.instagram.com/infoacademie"><i class="fab fa-instagram-square" style="font-size: 50px; margin: 0 4px;color:white;"></i></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCpHmLsOHMajcr-3lHG5gW1Q/featured"><i class="fab fa-youtube-square" style="font-size: 50px; margin: 0 4px;color:white;"></i></a>
            </div>
        </div>
    </div>
</div>
</section>

<section class="d-flex justify-content-between align-items-center last">
    <div class="container d-flex flex-wrap justify-content-between align-items-center p-2">
        <span>&copy; 2019-<span id="date"></span> Info-academie</span>

        <div class="d-flex flex-wrap align-items-center actions">
            {{-- <a class="m-1" href="#">@lang('footer.Montionslegales')</a>
            <a class="m-1" href="#">@lang('footer.Plandusite')</a>
            <a class="m-1" href="#">@lang('footer.Contact')</a> --}}
        </div>
    </div>

</section>

@section('scripts-footer')

    <script>
        document.querySelector('#date').innerHTML = new Date().getFullYear();
        // console.log('footrer')

        // const newletterForm = document.getElementById('newletterForm');
        // const msg = document.getElementById('msg');
        // document.querySelector('#date').innerHTML = new Date().getFullYear()

        // newletterForm.addEventListener('submit', async e => {

        //     e.preventDefault();

        //     const o = {
        //         email: document.getElementById('newletterEmail').value,
        //         date: new Date(),
        //     }

        //     console.log(o);

        //     try {
        //         msg.innerHTML = "en cours d'envois ...";
        //         const r = await axios.post('/api/newsLetter', o);
        //         console.log(r);
        //         msg.innerHTML = "Email enregister";

        //         setTimeout(() => msg.innerHTML = '', 4000);

        //     } catch (e) {
        //         e.response ? console.warn(e.response.data) : console.warn(e);
        //     }
        // });


    </script>

@stop
