<template>
  <nav id="mainNavigation" class="navbar navbar-dafault main-navigation" role="navigation">
    <div class="container">

      <div class="navbar-header">

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div class="navbar-brand">
          <span class="sr-only">Avada Pro Agency</span>
          <a href="/">
            <img src="/static/img/main_logo.png" class="img-responsive center-block" alt="logo">
          </a>
        </div>

      </div>
      <div class="collapse navbar-collapse" id="main-nav-collapse">
        <ul class="nav navbar-nav navbar-right text-uppercase">
          <li>
            <a href="/"><span>首頁</span></a>
          </li>

          <!-- 關於淨麗 -->
          <li class="dropdown">
            <a href="" class="dropdown-toggle" data-toggle="dropdown"><span>關於淨麗</span></a>
            <ul class="dropdown-menu">
              <li>
                <a href="/post/tech">領先技術</a>
              </li>
              <li>
                <a href="/post/customer">我們的客戶</a>
              </li>
              <li>
                <a href="/contact">聯絡我們</a>
              </li>
            </ul>
          </li>

          <!-- 服務項目 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span>服務項目</span></a>
            <ul class="dropdown-menu">
              <li>
                <a href="/post/tube-cleaning">週波室內水管清洗</a>
              </li>
              <li>
                <a href="/post/cleaning">外觀清潔</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/post/allergens"><span>被忽略的過敏源</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
