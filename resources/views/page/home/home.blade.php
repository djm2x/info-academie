@extends('master')



@section('titre')
@stop


@section('content')
<div>

    @include('page.home.first')
    @include('divider')
    @include('page.home.second', ['activites' => $activites, 'villes' => $villes])
    @include('divider')
    @include('page.home.prof', ['profs' => $profs])
    @include('divider')
    @include('page.home.carousel', ['activites' => $activites])
    @include('divider')
    {{-- @include('page.home.school', ['typeActivites' => $typeActivites])
    @include('divider') --}}
    @include('page.home.aide', ['videos' => $videos])
</div>

@stop


@section('pied_page')
@stop
