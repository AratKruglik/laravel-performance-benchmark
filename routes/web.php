<?php

use App\Http\Controllers\HealthController;
use Illuminate\Support\Facades\Route;

Route::get('/ping', [HealthController::class, 'ping'])->name('web.healthcheck');

Route::get('/', function () {
    return view('welcome');
});
