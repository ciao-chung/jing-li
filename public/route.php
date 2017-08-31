<?php
    $view_path = '../view/';
    $data_path = '../data/';
    $page = $_GET['page'];
    if(!$page) $page = 'root';
    if($page != 'root' && $page != 'post' && $page != 'tube-cleaning' && $page != 'contactus') $page = 'root';

    // 如果是文案, title改為文案標題
    if($page == 'post') {
        $post_code = $_GET['code'];
        $post = include_once $data_path.'post/'.$post_code.'.php';
        if(gettype($post) == 'array') {
            $GLOBALS['page_title'] = $post['title'];
        }

        else {
            $page = '404';
        }
    }
?>