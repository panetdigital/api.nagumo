<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// routes/api.php

use App\Http\Controllers\ProdutoController;

Route::resource('produtos', ProdutoController::class);


/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 */