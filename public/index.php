<?php
    require '../vendor/autoload.php';

    $app = new \Slim\Slim(array(
        'templates.path' => '../view'
    ));
?>

<!doctype html>
    <html lang="zh-tw">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta charset="utf-8">
        <meta name="keywords" content="">
        <meta name="description" content="">
        <meta property="og:title" content="">
        <meta property="og:site_name" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <title></title>
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="/assets/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/assets/css/main.css">
    </head>
    <body>
        <!-- menu -->
        <?php $app->render('menu/menu.php'); ?>

        <!-- page route -->
        <div data-role="page-container">
          <?php
              $app->get('/', function () use ($app) {
                  $app->render('home.php');
              });

              $app->get('/post/:code', function ($code) use ($app) {
                  $app->render('post.php', [
                      'code' => $code,
                  ]);
              });

              $app->get('/contact', function () use ($app) {
                  $app->render('contact.php');
              });

              $app->run();
          ?>
        </div>
    </body>
</html>
