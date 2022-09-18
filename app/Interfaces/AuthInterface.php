<?php


namespace App\Interfaces;


use Illuminate\Database\Eloquent\Model;

interface AuthInterface
{
    public function create($name , $email , $password): Model;
}
