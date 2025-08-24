<?php

namespace App\View\Components;

use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class MetaTags extends Component
{
    public function render(): View
    {
        $title = "Peaceisrael";
        $description = "We are an association striving to create a new reality of shared life between Jews and Arabs in Israel, based on mutual respect, equality and security for all. An equal and shared society where every citizen, Jewish and Arab, can live with dignity, security and full equality.";
        $image = asset('/images/og-preview.png');

        return view('components.meta-tags', compact('title', 'description', 'image'));
    }
}
