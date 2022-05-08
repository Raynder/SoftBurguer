const mix = require('laravel-mix');

mix.copy('resources/css/adminlte.min.css', 'public/css/adminlte.min.css')
    .copy('resources/css/adminlte.min.css.map', 'public/css/adminlte.min.css.map')
    .copy('resources/css/ijaboCropTool.min.css', 'public/css/ijaboCropTool.min.css');

mix.copy('resources/js/adminlte.min.js', 'public/js/adminlte.min.js')
    .copy('resources/js/adminlte.min.js.map', 'public/js/adminlte.min.js.map')
    .copy('resources/js/ijaboCropTool.min.js', 'public/js/ijaboCropTool.min.js');

mix.js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .sourceMaps();

mix.css('resources/css/app.css', 'public/css/app.css');

mix.version();