<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /**
         * Seeder config
         */
        Employee::create([
            'first_name' => 'Mirian',
            'last_name' => 'Quispe',
            'email' => 'imjustmirian@gmail.com',
            'phone' => '11 92332-3883',
            'department_id' => 1,
            'password' => Hash::make('pass1234')

        ]);

        /**
         * Factory config
         */
        Employee::factory()->count(20)->create();
    }
}
