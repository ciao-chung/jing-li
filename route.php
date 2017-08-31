<?php
    $page = $_GET['page'];
    if(!$page) $page = 'root';

    switch ($page) {
        case 'root':
            include_once 'page/root.php';
            break;
        case 'post':
            $code = $_GET['code'];
            if(!$code) {
                include_once 'page/404.php';
                break;
            }
            include_once 'page/post.php';
            break;
        default:
            include_once 'page/404.php';
            break;
    }
?>