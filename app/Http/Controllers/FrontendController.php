<?php

namespace App\Http\Controllers;

use App\Models\JoinUs;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function storeJoinUs(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'message' => 'nullable|string|max:1000',
        ]);

        JoinUs::create($request->all());

        return redirect()->back();
    }
}
