<?php
    require '../vendor/autoload.php';

    $app = new \Slim\Slim(array(
        'templates.path' => '../view'
    ));
?>

<!doctype html>
<html lang="zh-tw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
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
