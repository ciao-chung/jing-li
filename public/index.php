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
    </head>
    <body>
        <?php
            $app->get('/', function () use ($app) {
                $app->render('home.php');
            });

            $app->get('/post/:code', function ($code) use ($app) {
                $app->render('post.php', [
                    'code' => $code,
                ]);
            });

            $app->run();
        ?>
    </body>
</html>
