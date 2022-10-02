<?php


namespace App\Repositories;


use App\Interfaces\EmployeeInterface;
use App\Models\Employee;
use Illuminate\Database\Eloquent\Collection;

class EmployeeRepository implements EmployeeInterface
{
    private \Illuminate\Database\Eloquent\Builder $model;

    public function __construct()
    {
        $this->model = Employee::query();
    }


    public function index(): Collection
    {
        return $this->model->latest()->get();
    }

}
