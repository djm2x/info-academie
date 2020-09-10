@extends('master')



@section('title')
    {{$model ? (app()->getLocale() == 'fr' ? $model->title : ($model->titleAr != '' ? $model->titleAr : $model->title ))
        : (app()->getLocale() == 'fr' ? 'Pas de titre' : 'لا يوجد عنوان')}}
@stop

@section('content')

<style>
    @media screen and (max-width: 844px) {
        .with-image img{
            width: 80%;
        }
    }

    @media screen and (min-width: 845px) {
        .with-image img{
            width: 80%;
        }
    }

    @media screen and (max-width: 500px) {
        .with-image img{
            width: 100%;
        }
    }

    p { margin: 0;}
</style>
    {{-- {{$list}} --}}
<section class="{{ app()->getLocale() == 'fr' ? 'president text-left' : 'president text-right' }}">

    <div class="mt-3 mb-5">
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            {{-- @if(request()->is('cntsh/gouvernance'))
                <div class="col-md-12 mb-5">
                    <img src="{{url('presidents/'.str_replace(';', '', $model->imageUrl))}}" onerror="this.onerror=null;this.src='/images/verts.png';"
                                                class="card-img-top w-100" alt="{{$model->imageUrl}}">
                </div>
            @endif --}}

            <div class="with-image">
                @if (app()->getLocale() == 'fr')
                {!! $model ? $model->description : 'Le contenu est pas encore publié.' !!}
                @else
                {{-- {!! $model ? str_replace('http://localhost:8000', request()->getSchemeAndHttpHost(), $model->description) : 'Le contenu est pas encore publié.' !!} --}}
                    {!! $model ? ($model->descriptionAr != '' ? $model->descriptionAr : $model->description) : 'لم يتم نشر المحتوى بعد.' !!}
                @endif
            </div>

            {{-- <video  width="100%" controls style="margin-top: 10%" hidden>
                <source src="assets/videos/covid19.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video> --}}
        </div>
    </div>
</section>

@stop


@section('pied_page')
@stop
