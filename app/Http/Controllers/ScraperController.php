<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScraperController extends Controller
{
    public function index (Request $request)
    {
        return view('welcome');
    }
}
