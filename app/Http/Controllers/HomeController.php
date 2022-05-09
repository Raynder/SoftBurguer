<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return view('perfil.index', compact('user'));
    }

    public function update(Request $request){
        User::find(Auth::user()->id)->update($request->all());

        return redirect()->route('perfil');
    }
}
