<?php


namespace App\Repositories;


use App\Interfaces\AuthInterface;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class AuthRepository implements AuthInterface
{
    private \Illuminate\Database\Eloquent\Builder $model;

    public function __construct()
    {
        $this->model = User::query();
    }

    public function create($name , $email , $password): Model
    {
        return $this->model->create([
           'name'=>$name,
           'email'=>$email,
           'password'=>Hash::make($password)
        ]);
    }

}
