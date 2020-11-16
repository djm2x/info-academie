@extends('master')



@section('titre')
@stop


@section('content')


    @include('page.home.first')
    @include('divider')
    @include('page.home.prof', ['profs' => $profs])
    @include('divider')
    @include('page.home.school', ['typeActivites' => $typeActivites])
    @include('divider')
    @include('page.home.aide', ['videos' => $videos])







@stop


@section('pied_page')
@stop
