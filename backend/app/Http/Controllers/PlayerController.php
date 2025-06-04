<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\JsonResponse;

class PlayerController extends BaseController
{
    public function index(): JsonResponse
    {
        return response()->json(Player::all());
    }

    public function show(int $id): JsonResponse
    {
        $player = Player::findOrFail($id);
        return response()->json($player);
    }

    public function store(Request $request): JsonResponse
    {
        $player = Player::create($request->only(['name', 'price', 'description']));
        return response()->json($player, 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $player = Player::findOrFail($id);
        $player->update($request->only(['name', 'price', 'description']));
        return response()->json($player);
    }

    public function destroy(int $id): JsonResponse
    {
        $player = Player::findOrFail($id);
        $player->delete();
        return response()->json(['deleted' => true]);
    }
}
