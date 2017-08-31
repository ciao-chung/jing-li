<?php
    $view_path = '../view/';
    $data_path = '../data/';
    $page = $_GET['page'];
    if(!$page) $page = 'root';

    switch ($page) {
        // 首頁
        case 'root':
            include_once $view_path.'root.php';
            break;

        case 'tube-cleaning':
            include_once $view_path.'tube-cleaning.php';
            break;

        case 'contactus':
            include_once $view_path.'contactus.php';
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