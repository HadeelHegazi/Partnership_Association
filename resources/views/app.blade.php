<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    <x-meta-tags />

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/images/favicon/apple-touch-icon.png')}}">

    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/images/favicon/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/images/favicon/favicon-16x16.png')}}">

    <!-- Optional explicit Chrome PNG icons -->
    <link rel="icon" type="image/png" sizes="192x192" href="{{asset('/images/favicon/android-chrome-192x192.png')}}">
    <link rel="icon" type="image/png" sizes="512x512" href="{{asset('/images/favicon/android-chrome-512x512.png')}}">

    <!-- ICO fallback for older browsers -->
    <link rel="icon" href="{{asset('/images/favicon/favicon.ico')}}">

    <!-- PWA manifest -->
    <link rel="manifest" href="{{asset('/images/favicon/site.webmanifest')}}">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
