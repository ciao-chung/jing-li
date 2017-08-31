<?php
    $page = $_GET['page'];
    if(!$page) $page = 'root';

    switch ($page) {
        case 'root':
            include_once 'view/root.php';
            break;
        case 'post':
            $code = $_GET['code'];
            if(!$code) {
                include_once 'view/404.php';
                break;
            }
            include_once 'view/post.php';
            break;
        default:
            include_once 'view/404.php';
            break;
    }
?>