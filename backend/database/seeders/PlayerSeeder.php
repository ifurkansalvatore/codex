<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Player;

class PlayerSeeder extends Seeder
{
    public function run(): void
    {
        Player::create([
            'name' => 'Player One',
            'price' => 100.0,
            'description' => 'Sample player',
        ]);

        Player::create([
            'name' => 'Player Two',
            'price' => 150.0,
            'description' => 'Another sample player',
        ]);
    }
}
