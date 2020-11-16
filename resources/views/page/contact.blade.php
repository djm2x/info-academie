@extends('master')

@section('title')
    @lang('page.Nouscontacter')
@stop

@section('content')
<section class="contact">
    <div class="{{ app()->getLocale() == 'fr' ? 'text-left container px-0' : 'text-right container px-0' }}">
        <div class="d-flex flex-wrap justify-content-center align-items-center mat-elevation-z20 p-2" style="margin: 100px 0">
            <div class="col-md-5">
                <h1 class="font-weight-bolder mb-5 text-purple" style="font-size: 3em">Contactez-nous</h1>

                <form id="myForm">
                    <div class="row d-flex flex-column align-items-center fade show">

                        <div id="toaster">

                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label>@lang('page.Nom')</label>
                                <input id="name" type="text" class="form-control">
                            </div>

                            <div class="form-group">
                                <label>@lang('page.Email')</label>
                                <input id="email" type="email" class="form-control" required>
                            </div>

                            <div class="form-group">
                                <label>@lang('page.Tel')</label>
                                <input id="phone" type="text" class="form-control">
                            </div>

                            <div class="form-group">
                                <label>@lang('page.Message')</label>
                                <textarea id="message" class="form-control" rows="3" required></textarea>
                            </div>
                            <div class="d-flex flex-row-reverse mt-2">
                                <button type="submit" class="btn btn-purple" style="width: 100px; border-radius: 0%;">@lang('page.Envoyer')</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-7 p-0">
                <img src="/assets2/contact.png" style="width: 100%">
            </div>
        </div>

        {{-- <div class="d-flex flex-wrap justify-content-center align-items-center mt-3 mb-3">
            <div class="col-md-6">

            </div>
            <div class="col-md-6">
                <div class="card">
                    <iframe style="height: 50vh"
                    src="https://maps.google.com/maps?q=temara&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div> --}}
    </div>
    {{-- https://google-map-generator.com/ --}}

  </div>
</section>
@stop

@section('scripts')
    <script>
        const myForm = document.getElementById('myForm');
        const toaster = document.getElementById('toaster');

        myForm.addEventListener('submit', async e => {
            e.preventDefault();
            const o = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
            }

            console.log(o);

            try {
                toaster.innerHTML = '';
                const r = await axios.post('/api/contacts', o);
                console.log(r);
                toasterHtml();
            } catch (error) {
                console.warn(error)
            }
        })

        /**
         * @param {Array} data
         */
         function toasterHtml() {
            let translate = {!! json_encode(app()->getLocale())  !!};
            translate = translate === 'fr' ? 'Votre message a été bien transmise' : 'تم إرسال رسالتك بنجاح';
            toaster.innerHTML =
            `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>${translate}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `;
        }
    </script>
@stop
