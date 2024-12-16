<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => [
                'required',
                'string',
                'max:255',
            ],
            'last_name' => [
                'required',
                'string',
                'max:255',
            ],
            'email' => [
                'required',
                /**
                 * Validate email by RFC pattern, more strict
                 */
                'email:rfc',
                'max:255',
                /**
                 * Check if email employee is unique
                 */
                Rule::unique('employees', 'email')->ignore($this->employee),
            ],
            'phone' => [
                'required',
                'string',
                'max:20',
            ],
            'password' => [
                'required',
                'string',
                'min:6',
                "confirmed"
            ],
            'department_id' => [
                'required',
                'integer',
                /**
                 * Check if department_id exists
                 */
                Rule::exists('departments', 'id'),
            ],
        ];
    }
}
