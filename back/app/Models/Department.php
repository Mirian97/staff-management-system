<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    /** @use HasFactory<\Database\Factories\DepartmentFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    /**
     * Define the relationship with employees.
     */
    public function employees(): HasMany
    {
        return $this->hasMany(Employee::class);
    }

    public function getFullName(): string
    {
        return $this->first_name.' '.$this->last_name;
    }
}
