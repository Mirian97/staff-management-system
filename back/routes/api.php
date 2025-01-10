<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('ping', function () {
    return 'pong';
});

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [EmployeeController::class, 'store']);

Route::middleware("auth")->group(function () {
    Route::get('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get("statistic", [StatisticController::class, "counts"]);

    Route::apiResources([
        'departments' => DepartmentController::class,
        'employees' => EmployeeController::class,
        'tasks' => TaskController::class,
    ]);
});
