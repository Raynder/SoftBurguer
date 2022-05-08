@extends('layouts.app.app')

@section('content')
    @include('app.home.header')

<main>
    @include('app.home.empresas')

    @include('app.home.destaques')

    @include('app.home.populares')
</main>

    @include('app.layouts.footerPrincipal')
@endsection