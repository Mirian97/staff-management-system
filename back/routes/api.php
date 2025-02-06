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

Route::middleware("auth")->group(function () {
    Route::get('me', [AuthController::class, 'me']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::get("statistic", [StatisticController::class, "counts"]);

    Route::prefix('employees')->group(function () {
        Route::get('listByName', [EmployeeController::class,'listByName']);
    });
    Route::prefix('departments')->group(function () {
        Route::get('listByName', [DepartmentController::class,'listByName']);
    });
    Route::apiResources([
        'departments' => DepartmentController::class,
        'employees' => EmployeeController::class,
        'tasks' => TaskController::class,
    ]);
});
