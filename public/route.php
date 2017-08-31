<?php
    $view_path = '../view/';
    $data_path = '../data/';
    $page = $_GET['page'];
    if(!$page) $page = 'root';

    if($page == 'post' && !$_GET['code']) $page = '404';
    if($page != 'root' && $page != 'post' && $page != 'tube-cleaning' && $page != 'contactus') $page = 'root';

    if($page == 'post') {
        $post_code = $_GET['code'];
        $post = include_once $data_path.'post/'.$post_code.'.php';
        $GLOBALS['page_title'] = $post['title'];
    }
?>