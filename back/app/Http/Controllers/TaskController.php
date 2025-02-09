<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = "%{$request->query(key: 'search')}%";

        $tasks = Task::where(function ($query) use ($search) {
            $query->whereLike('id', $search)
                ->orWhereLike('title', $search)
                ->orWhereLike('description', $search)
                ->orWhereRelation('employee', 'first_name', 'like', $search)
                ->orWhereRelation('employee', 'last_name', 'like', $search);
        })
            ->with('employee')
            ->paginate(10);

        return response()->json($tasks);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        $task = Task::create($request->validated());

        return response()->json([
            'message' => 'The task created successfully.',
            'data' => $task,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return response()->json($task);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task)
    {
        $task->update($request->validated());

        return response()->json([
            'message' => 'Task updated successfully',
            'data' => $task,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json([
            'messade' => 'Task deleted successfully',
        ]);
    }
}
