<?php
  $features = [
    [
      'icon' => 'thumbs-up',
      'title' => '客戶肯定',
      'content' => '多年的耕耘讓<br>我們累積了無數客戶的肯定<br>包含了許多上市上櫃的大公司<br>',
    ],
    [
      'icon' => 'map-marker',
      'title' => '全省服務',
      'content' => '我們的服務遍及全省<br>專業強大的團隊<br>無論在台灣任何地方皆能執行任務',
    ],
    [
      'icon' => 'rocket',
      'title' => '持續精進',
      'content' => '公司雖然經營多年<br>技術仍然不斷的再精進<br>只為帶給客戶更專業的服務',
    ],
  ];
?>
<link rel="stylesheet" href="assets/css/home.css">
<header id="header" class="header-wrapper home-parallax home-fade">
    <div class="header-overlay"></div>
    <div class="header-wrapper-inner">
        <div class="container">

            <div class="welcome-speech">
                <h1><?php echo $config->company->name; ?></h1>
                <p><?php echo $config->company->slogan; ?></p>
            </div>

        </div>
    </div>
</header>

<div class="main-content">

    <section class="intro bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <img src="assets/img/intro.jpg" class="img-responsive center-block" alt="intro">
                </div>

                <div class="col-md-7">
                    <div class="intro-description">
                        <h2>經營理念</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante ex, fermentum vel libero eget interdum semper libero. Curabitur egestas, arcu id tempor convallis.
                        </p>

                        <ul class="points">
                            <li>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                Vestibulum pulvinar commodo malesuada.
                            </li>
                            <li>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                Pellentesque id massa et ligula convallis porta.
                            </li>
                            <li>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                Vivamus sed nunc sed ligula rhoncus sit amet eu elit.
                            </li>
                            <li>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                Curabitur in ipsum vel ipsum vehicula congue.
                            </li>
                        </ul>

                        <a href="#" class="btn btn-slategray">
                            purchase
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-white feature">
        <div class="container">
            <div class="row">
                <?php foreach ($features as $index => $feature) {  ?>
                <div class="col-md-4">
                    <div class="feature-content text-center">
                        <div class="feature-icon-box">
                            <div class="feature-icon center-block">
                                <i class="fa fa-<?php echo $feature['icon']; ?>"></i>
                            </div>
                        </div>
                        <div class="feature-info">
                            <h3 class="feature-heading">
                              <?php echo $feature['title']; ?>
                            </h3>
                            <p class="feature-description">
                                <?php echo $feature['content']; ?>
                            </p>
                        </div>
                    </div>
                </div>
                <?php }; ?>
            </div>
        </div>
    </section>
</div>
