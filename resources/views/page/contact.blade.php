@extends('master')

@section('title')
    @lang('page.Nouscontacter')
@stop

@section('content')
<section class="contact mx-2">
    <div class="{{ app()->getLocale() == 'fr' ? 'text-left container px-0' : 'text-right container px-0' }}">
        <div class="d-flex flex-wrap justify-content-center align-items-center mat-elevation-z20 bg-white p-2" style="margin: 100px 0">
            <div class="col-md-5">
                <h1 class="font-weight-bolder mb-5 text-purple" style="font-size: 3em">Contactez-nous</h1>

                <form id="myForm">
                    <div class="row d-flex flex-column align-items-center fade show">

                        <div id="toaster">

                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label>@lang('page.Nom')</label>
                                <input name="name" type="text" class="form-control" value="me@me">
                            </div>

                            <div class="form-group">
                                <label>@lang('page.Email')</label>
                                <input name="email" type="email" class="form-control" value="me@me" required>
                            </div>

                            <div class="form-group">
                                <label>@lang('page.Tel')</label>
                                <input name="phone" type="text" class="form-control" value="me@me">
                            </div>

                            <div class="form-group">
                                <label>@lang('page.Message')</label>
                                <textarea name="message" class="form-control" rows="3" required></textarea>
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
        const url = window.location.origin;
        const toaster = document.getElementById('toaster');

        const msgFR = 'Votre message a été bien transmise';
        const msgFrError = "Impossible d'effectuer cette opération";

        document.querySelector('#myForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');

            const o = {
                id: null,
                object: `name: ${name}, email: ${email}, phone: ${phone}`,
                msg: message,
                date: new Date(),
                idUser: null,
            }


                toaster.innerHTML = '';
                const r = await fetch('/api/contactUs/send', {
                    method: 'post',
                    body: JSON.stringify(o),
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                })

                if (!r.ok) {
                    console.warn(r.statusText);
                    toasterHtml(msgFrError, 'danger');
                } else {
                    toasterHtml(msgFR, 'success');
                }

                console.log(r);



        });


        const myForm = document.getElementById('myForm');

        /**
         * @param {Array} data
         */
         function toasterHtml(msg, color) {
            let translate = {!! json_encode(app()->getLocale())  !!};
            translate = translate === 'fr' ? msg : 'تم إرسال رسالتك بنجاح';
            toaster.innerHTML =
            `
            <div class="alert alert-${color} alert-dismissible fade show" role="alert">
                <strong>${translate}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `;
        }
    </script>
@stop
