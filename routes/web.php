<?php

use App\Http\Controllers\AmDashboardController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProviderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/playground', function () {
    return Inertia::render('Playground');
});


// Google Login Route
Route::get('/auth/redirect', [ProviderController::class, 'redirect']);
Route::get('/auth/callback', [ProviderController::class, 'callback']);




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
    
Route::get('/dashboard', [AmDashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/laporan', [AmDashboardController::class, 'laporan'])->middleware(['auth', 'verified'])->name('laporan');
Route::get('/laporan/{slug}', [AmDashboardController::class, 'readLaporan'])->middleware(['auth', 'verified'])->name('read_laporan');
Route::get('/laporan-baru', [AmDashboardController::class, 'addLaporan'])->middleware(['auth', 'verified'])->name('add_laporan');
Route::get('/laporan-edit/{slug}', [AmDashboardController::class, 'editLaporan'])->middleware(['auth', 'verified'])->name('edit_laporan');

Route::post('/upload-image', [AmDashboardController::class, 'storeImage'])->middleware(['auth', 'verified'])->name('upload_image');
Route::post('/delete-image', [AmDashboardController::class, 'destroyImage'])->middleware(['auth', 'verified'])->name('delete_image');
Route::post('/upload-laporan-baru', [AmDashboardController::class, 'createLaporanBaru'])->middleware(['auth', 'verified'])->name('upload_laporan_baru');
Route::post('/update-laporan/{id}', [AmDashboardController::class, 'updateLaporan'])->middleware(['auth', 'verified'])->name('update_laporan');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
