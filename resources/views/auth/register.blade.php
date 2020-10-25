@extends('layouts.app')

@section('content')
<main class="container mx-auto mx-12 mt-10">
    <div class="flex">

        <div class="w-1/2 flex flex-col justify-center items-center select-none">
            <h1 class="text-gray-800 font-bold tracking-wide" style="font-family:cursive; font-size:50px;">Register</h1>
            <img src="/images/svg/big-fb-logo.svg" style="width:400px;">
        </div>

        <div class="w-1/2 flex justify-center items-center">
            <section class="w-10/12 flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-md">
                <form class="w-full px-6 space-y-6 sm:px-10 sm:space-y-8" method="POST"
                    action="{{ route('register') }}">
                    @csrf

                    <div class="w-full flex">
                        <div class="w-1/2 flex flex-wrap">
                            <label for="first_name" class="block text-gray-700 text-sm font-bold mb-1">First Name:</label>

                            <input id="first_name" type="text" class="form-input w-full @error('first_name')  border-red-500 @enderror" name="first_name" value="{{ old('first_name') }}" required autocomplete="off" autofocus>

                            @error('first_name')
                            <p class="text-red-500 text-xs italic mt-4">
                                {{ $message }}
                            </p>
                            @enderror
                        </div>

                        <div class="w-1/2 flex flex-wrap ml-3">
                            <label for="last_name" class="block text-gray-700 text-sm font-bold mb-1">Last Name:</label>

                            <input id="last_name" type="text" class="form-input w-full @error('last_name')  border-red-500 @enderror" name="last_name" value="{{ old('last_name') }}" required autocomplete="off" autofocus>

                            @error('last_name')
                            <p class="text-red-500 text-xs italic mt-4">
                                {{ $message }}
                            </p>
                            @enderror
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-1">E-Mail:</label>

                        <input id="email" type="email" class="form-input w-full @error('email') border-red-500 @enderror" name="email" value="{{ old('email') }}" required autocomplete="off">

                        @error('email')
                        <p class="text-red-500 text-xs italic mt-4">
                            {{ $message }}
                        </p>
                        @enderror
                    </div>

                    <div class="flex flex-wrap">
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-1">Password:</label>

                        <input id="password" type="password" class="form-input w-full @error('password') border-red-500 @enderror" name="password" required autocomplete="off">

                        @error('password')
                        <p class="text-red-500 text-xs italic mt-4">
                            {{ $message }}
                        </p>
                        @enderror
                    </div>

                    <div class="flex flex-wrap">
                        <label for="password-confirm" class="block text-gray-700 text-sm font-bold mb-1">Confirm Password:</label>

                        <input id="password-confirm" type="password" class="form-input w-full" name="password_confirmation" required autocomplete="off">
                    </div>

                    <div class="flex flex-wrap">
                        <button type="submit" class="w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4 focus:outline-none">Register</button>

                        <p class="w-full text-xs text-center text-gray-700 my-6 sm:text-sm sm:my-8">
                            <span>Already have an account?</span>
                            <a class="text-blue-500 hover:text-blue-700 no-underline hover:underline" href="{{ route('login') }}">Login</a>
                        </p>
                    </div>
                </form>

            </section>
        </div>
    </div>
</main>
@endsection
