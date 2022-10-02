<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=>'required|unique:employees|max:255',
            'email'=>'required|unique:employees|max:255',
            'phone'=>'required|min:11|numeric',
            'address'=>'string',
            'nid'=>'required|numeric',
            'photo'=>'file|max:2048'
        ];
    }
}
