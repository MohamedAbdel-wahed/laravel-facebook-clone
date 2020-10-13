@extends('layouts.app')

@section('content')
    <div>
        <Root :auth-user="{{auth()->user()}}"></Root>
    </div>
@endsection