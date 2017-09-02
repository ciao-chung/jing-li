<?php
    require '../vendor/autoload.php';
    $config = json_decode(file_get_contents('../data/config.json'));
    $app = new \Slim\Slim(array(
        'templates.path' => '../view'
    ));
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta charset="utf-8">
        <meta name="keywords" content="<?php echo $config->seo->title; ?>">
        <meta name="description" content="<?php echo $config->seo->description; ?>">
        <meta property="og:title" content="<?php echo $config->seo->title; ?>">
        <meta property="og:site_name" content="<?php echo $config->seo->title; ?>">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <title><?php echo $config->seo->title; ?></title>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <link rel="stylesheet" href="assets/css/owl.carousel.css">
        <link rel="stylesheet" href="assets/css/owl.theme.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <script type="text/javascript" src="assets/js/app.js"></script>
    </head>
    <body>
        <?php
            $app->render('global/menu.php');
        ?>

        <?php
            $app->get('/', function () use ($app, $config) {
                $app->render('home.php', [
                  'config' => $config,
                ]);
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
        <script type="text/javascript" src="assets/js/jquery-2.1.3.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/js/owl.carousel.js"></script>
        <script type="text/javascript" src="assets/js/jquery.hoverdir.js"></script>
        <script type="text/javascript">
            $(function() {
                $('.portfolio-item > .item-image').each( function() { $(this).hoverdir({
                    hoverDelay : 75
                }); } );
            });

            $(document).ready(function() {
                $("#twit").owlCarousel({
                    navigation : true,
                    slideSpeed : 100,
                    paginationSpeed : 400,
                    navigationText : false,
                    singleItem: true,
                    autoPlay: true,
                    pagination: false
                });
            });

            $(document).ready(function() {
                $("#client-speech").owlCarousel({
                    autoPlay: 5000,
                    stopOnHover: true,
                    singleItem:true
                });
            });
        </script>
        <?php $app->render('global/footer.php'); ?>
    </body>
</html>
