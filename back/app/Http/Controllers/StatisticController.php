<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use App\Models\Task;

class StatisticController extends Controller
{
    public function counts()
    {
        $employee_count = Employee::count();
        $task_count = Task::count();
        $department_count = Department::count();

        return response()->json([
            'employee_count' => $employee_count,
            'task_count' => $task_count,
            'department_count' => $department_count,
        ]);
    }
}
