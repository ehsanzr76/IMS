<?php


namespace App\Interfaces;


use Illuminate\Database\Eloquent\Collection;

interface EmployeeInterface
{
    public function index(): Collection;
}
