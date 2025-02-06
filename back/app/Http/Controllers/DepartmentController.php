<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::withCount("employees")->paginate(10);
        return response()->json($departments);
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
    public function store(DepartmentRequest $request)
    {
        $department = Department::create($request->validated());

        return response()->json([
            'message' => 'Department created successfully.',
            'data' => $department,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        return response()->json($department);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DepartmentRequest $request, Department $department)
    {
        $department->update($request->validated());

        return response()->json([
            'message' => 'Department updated successfully.',
            'data' => $department,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();

        return response()->json([
            'message' => 'Department deleted successfully.',
        ]);
    }

    public function listByName(Request $request)
    {
        $name =  $request->query("name");

        $departments = Department::whereLike('id', '%'.$name.'%')
            ->orWhereLike('name', '%'.$name.'%')
            ->limit(100)
            ->select(["id AS value", "name AS label"])
            ->get();


        return response()->json($departments);
    }
}
