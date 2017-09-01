<?php
    require '../vendor/autoload.php';

    $app = new \Slim\Slim(array(
        'templates.path' => '../view'
    ));



    $app->get('/*', function () use ($app){
        $app->render(
            'index.php', array(
                'app' => $app,
            )
        );
    });

//    $app->get('/', function () use ($app){
//        $app->render('index.html');
//    });
//
//    $app->get('/post/:code', function ($code) {
//        echo "post, " . $code;
//    });

    $app->run();
?>