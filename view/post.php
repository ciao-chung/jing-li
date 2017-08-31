post page
<br>
<hr>
<?php
    $post = include_once $data_path.'post/about.php';
    echo $post['title']."<br>";
    echo $post['content'];
?>
