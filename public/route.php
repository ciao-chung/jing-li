<?php
    $view_path = '../view/';
    $page = $_GET['page'];
    if(!$page) $page = 'root';

    switch ($page) {
        // 首頁
        case 'root':
            include_once $view_path.'root.php';
            break;

        // 文案
        case 'post':
            $code = $_GET['code'];
            if(!$code) {
                include_once $view_path.'404.php';
                break;
            }
            include_once $view_path.'post.php';
            break;

        default:
            include_once $view_path.'404.php';
            break;
    }
?>