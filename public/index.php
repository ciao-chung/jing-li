<?php
    $config = json_decode(file_get_contents(__DIR__.'/../data/config.json'));

    $GLOBALS['page_title'] = $config->company->name;

    include_once 'route.php';
?>
<html>
    <head>
        <title>
            <?php echo $GLOBALS['page_title']; ?>
        </title>
        <script src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
    </head>
    <body>
        <?php include_once $view_path.$page.'.php'; ?>
    </body>
</html>
