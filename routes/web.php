<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::post('/join-us', [\App\Http\Controllers\FrontendController::class, 'storeJoinUs'])->name('join-us.store');

// Admin route to view messages
Route::get('/admin/messages', [\App\Http\Controllers\FrontendController::class, 'viewMessages'])->name('admin.messages');
