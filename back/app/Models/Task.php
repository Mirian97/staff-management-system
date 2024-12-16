<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'assignee_id',
        'due_date',
    ];

    protected $casts = [
        'due_date' => 'date:Y-m-d',
    ];

    /**
     * Define the relationship with the assigned employee.
     */
    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'assignee_id');
    }
}
