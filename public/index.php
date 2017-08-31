<?php
    $config = json_decode(file_get_contents(__DIR__.'/../data/config.json'));

    $GLOBALS['page_title'] = $config->company->name;
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $GLOBALS['domain'] = $protocol.''.$_SERVER['SERVER_NAME'];
    include_once 'route.php';
?>
<html>
    <head>
        <title><?php echo $GLOBALS['page_title']; ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta charset="utf-8">
        <meta name="keywords" content="">
        <meta name="description" content="<?php echo $GLOBALS['page_title']; ?>">
        <meta property="og:title" content="<?php echo $GLOBALS['page_title']; ?>">
        <meta property="og:site_name" content="<?php echo $config->company->name; ?>">
        <meta property="og:url" content="<?php echo $GLOBALS['domain']; ?>">
        <meta property="og:image" content="">
        <script src="/node_modules/jquery/dist/jquery.min.js"></script>
        <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="dist/css/main.css">
    </head>
    <body>
        <?php include_once '../menu/menu.php'; ?>
        <?php include_once $view_path.$page.'.php'; ?>
    </body>
</html>
