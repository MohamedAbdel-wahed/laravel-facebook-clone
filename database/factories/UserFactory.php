<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $first_name=explode(' ',$this->faker->name)[0];
        $last_name=explode(' ',$this->faker->name)[1];

        return [
            'fName' => $first_name,
            'lName' => $last_name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => 'test1234', // password
            'remember_token' => Str::random(10),
        ];
    }
}
