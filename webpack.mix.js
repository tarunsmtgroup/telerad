const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')	
    .copy('resources/ckeditor', 'public/ckeditor')
	.js('resources/js/user-management.js', 'public/js')
	.js('resources/js/audit-management.js', 'public/js')
	.js('resources/js/template-management.js', 'public/js')
	.js('resources/js/site-management.js', 'public/js')
	.js('resources/js/region-management.js', 'public/js')
	.js('resources/js/non-dicom-account-management.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
	.sass('resources/sass/_user_management.scss', 'public/css')
	.sass('resources/sass/_template_management.scss', 'public/css')
	.sass('resources/sass/_non_dicom_account.scss', 'public/css');
