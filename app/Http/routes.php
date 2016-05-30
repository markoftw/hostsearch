<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {

    Route::get('/', 'AngularController@serveApp');

    Route::get('/unsupported-browser', 'AngularController@unsupported');

});

//public API routes
$api->group(['middleware' => ['api']], function ($api) {
    
    $api->group(['prefix' => 'auth'], function ($api){
        // Authentication Routes...
        $api->post('login', 'Auth\AuthController@login');
        $api->post('register', 'Auth\AuthController@register');
        // Password Reset Routes...
        $api->post('password/email', 'Auth\PasswordResetController@sendResetLinkEmail');
        $api->get('password/verify', 'Auth\PasswordResetController@verify');
        $api->post('password/reset', 'Auth\PasswordResetController@reset');
    });
    
    $api->get('sample/test', 'AngularController@protectedData');

    // Advanced Search Routes...
    $api->get('dedicated/all', 'Servers\DedicatedController@showAll');
    $api->get('dedicated/show', 'Servers\DedicatedController@showOne');
    $api->get('vps/all', 'Servers\VPSController@showAll');
    $api->get('vps/show', 'Servers\VPSController@showOne');
    $api->get('cloud/all', 'Servers\CloudController@showAll');
    $api->get('cloud/show', 'Servers\CloudController@showOne');

    // About Page Routes...
    $api->post('about/new', 'ContactController@store');

    // git information
    $api->get('git/status', 'HomeController@gitStatus');

    // home page data
    $api->get('home/items', 'HomeController@homeData');
    $api->get('home/tweets', 'HomeController@tweets');
    
});

//protected API routes with JWT (must be logged in)
$api->group(['middleware' => ['api', 'api.auth']], function ($api) {

    $api->post('auth/password/change', 'Auth\PasswordResetController@changePassword');

    // server information
   $api->group(['prefix' => 'server'], function ($api){
        $api->get('usage', 'ServerController@usage');
    });
    
    $api->get('sample/protected', 'AngularController@protectedData');
    //$api->get('profile/username', 'AngularController@protectedProfileUsername');

    $api->group(['middleware' => ['jwt.refresh']], function ($api) {
        $api->get('profile/username', 'HomeController@protectedUsername');
    });

});
