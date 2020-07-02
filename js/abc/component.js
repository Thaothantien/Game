const components = {
    register: ` 
    <div id="app"></div><section class="register-container">
    <form class="register-form">
      <div class="form-header">
        Đăng ký tài khoản
      </div>
      <div class="form-content">
        <div class="name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstname" placeholder="Firstname" />
            <div class="message-error" id="firstname-error"></div>
          </div>
          <div class="input-wrapper">
            <input type="text" name="lastname" placeholder="Lastname" />
            <div class="message-error" id="lastname-error"></div>
          </div>
        </div>
        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Email" />
          <div class="message-error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Password" />
          <div class="message-error" id="password-error"></div>
        </div>
        <div class="input-wrapper">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <div class="message-error" id="confirm-password-error"></div>
        </div>
        <div id="register-success" class="message-success"></div>
        <div id="register-error" class="message-error"></div>
      </div>
      
      <div class="form-footer">
        <a href="#" id="nut">Bạn đã có tài khoản! Ấn vào đây để đăng nhập</a>
        <button id="dangky" type="submit">Đăng ký</button>
      </div>
    </form>
  </section>`,

    login: ` 
  <section class="login-container">
  <form class="login-form">
    <div class="login-header">
      Đăng nhập tài khoản
    </div>
    <div class="login-content">
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email" />
        <div class="message-error" id="email-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="password" />
        <div class="message-error" id="password-error"></div>
      </div>
      <div id="login-success" class="message-success"></div>
      <div id="login-error" class="message-error"></div>
    </div>
    <div class="login-footer">
      <a href="#" id="nut">Quay lại trang đăng ký nếu chưa có tài khoản!</a>
      <button id="login-btn" type="submit">Đăng nhập</button>
    </div>
  </form>
</section>`,

    header: `<!-- ##### Header Area Start ##### -->
<header class="header-area">
    <!-- Top Header Area -->
    <div class="top-header-area">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 d-flex align-items-center justify-content-between">
                    <!-- Logo Area -->
                    <div class="logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                    </div>

                    <!-- Search & Login Area -->
                    <div class="search-login-area d-flex align-items-center">
                        <!-- Top Search Area -->
                        <div class="top-search-area">
                            <form type="submit" id="formSearch">
                                <input type="search" name="top-search" id="topSearch" placeholder="Tìm kiếm">
                                <button type="submit" class="btn" id="searchClick"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <!-- Login Area -->
                        <div id="signIn">
                            <div class="login-area">
                                <a href="#"><span id="text-login">Login / Register</span> <i class="fa fa-lock" aria-hidden="true"></i></a>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Navbar Area -->
    <div class="egames-main-menu" id="sticker">
        <div class="classy-nav-container breakpoint-off">
            <div class="container">
                <!-- Menu -->
                <nav class="classy-navbar justify-content-between" id="egamesNav">

                    <!-- Navbar Toggler -->
                    <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <!-- Menu -->
                    <div class="classy-menu">

                        <!-- Close Button -->
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>

                        <!-- Nav Start -->
                        <div class="classynav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>
                                    <!-- <ul class="dropdown">
                                        <li><a href="game-review.html">Game Review</a></li>
                                        <li><a href="single-game-review.html">Single Game Review</a></li>
                                    </ul> -->                        
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="#" class="contact">Liên hệ</a></li>
                            </ul>
                        </div>
                        <!-- Nav End -->
                    </div>

                    <!-- Top Social Info -->
                    <div class="top-social-info">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/MindX.School/" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                       
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
<!-- ##### Header Area End ##### -->`,

    homepage: ` 
 <!-- Preloader -->

<!-- ##### Hero Area Start ##### -->
<div class="hero-area">
    <!-- Hero Post Slides -->
    <div class="hero-post-slides owl-carousel">
        <!-- Single Slide -->
        <div class="single-slide bg-img bg-overlay" style="background-image: url(img/bg-img/gta5.jpg);">
            <!-- Blog Content -->
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-lg-9">
                        <div class="blog-content" data-animation="fadeInUp" data-delay="100ms">
                            <h2 data-animation="fadeInUp" data-delay="400ms">Tuyệt vọng vì mãi không có GTA 6, game thủ chế luôn trailer GTA 5 cho PS10</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single Slide -->
        <div class="single-slide bg-img bg-overlay" style="background-image: url(img/bg-img/thelastofus.jpg);">
            <!-- Blog Content -->
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-lg-9">
                        <div class="blog-content" data-animation="fadeInUp" data-delay="100ms">
                            <h2 data-animation="fadeInUp" data-delay="400ms">Điều gì khiến The Last of Us 2 "kẻ khen tận trời, người chê thậm tệ"</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single Slide -->
        <div class="single-slide bg-img bg-overlay" style="background-image: url(img/bg-img/apexlegend.jpg);">
            <!-- Blog Content -->
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-lg-9">
                        <div class="blog-content" data-animation="fadeInUp" data-delay="100ms">
                            <h2 data-animation="fadeInUp" data-delay="400ms">Apex Legends Mobile sẽ mở cửa thử nghiệm vào cuối năm nay</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- ##### Hero Area End ##### -->

<!-- ##### Games Area Start ##### -->
<div class="games-area section-padding-100-0">
    <div class="container">
        <div class="row">
            <!-- Single Games Area -->
            <div class="col-12 col-md-4">
                <div class="single-games-area text-center mb-100 wow fadeInUp" data-wow-delay="100ms">
                    <img src="img/bg-img/game1.jpg" alt="">
                    <a href="#" class="btn egames-btn mt-30">View Games</a>
                </div>
            </div>

            <!-- Single Games Area -->
            <div class="col-12 col-md-4">
                <div class="single-games-area text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                    <img src="img/bg-img/game2.jpg" alt="">
                    <a href="#" class="btn egames-btn mt-30">View Games</a>
                </div>
            </div>

            <!-- Single Games Area -->
            <div class="col-12 col-md-4">
                <div class="single-games-area text-center mb-100 wow fadeInUp" data-wow-delay="500ms">
                    <img src="img/bg-img/game3.jpg" alt="">
                    <a href="#" class="btn egames-btn mt-30">View Games</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ##### Games Area End ##### -->

<!-- ##### Monthly Picks Area Start ##### -->
<section class="monthly-picks-area section-padding-100 bg-pattern">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="left-right-pattern"></div>
            </div>
        </div>
    </div>

    <div class="container">

        <div class="row">
            <div class="col-12">
                <ul class="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="popular-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">TOP Game Tuần</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="latest-tab" data-toggle="tab" href="#latest" role="tab" aria-controls="latest" aria-selected="false">TOP Game Tháng</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="tab-content wow fadeInUp" data-wow-delay="500ms" id="myTabContent">
        <div class="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
            <!-- Popular Games Slideshow -->
            <div class="popular-games-slideshow owl-carousel">

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/50.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Grand Theft Auto V</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">PC/Console</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/2611-pubg-mobile-vng-2018-1.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">PUBG Mobile VN</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/van-mong-tu-thoi-ca-2.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Vân Mộng Tứ Thời Ca</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/54.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Persona 5</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">PC/Console</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/Game8-aumix-ra-mat (1).jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Au Mix</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/rakan-back.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Liên Minh Huyền Thoại</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Online</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="tab-pane fade" id="latest" role="tabpanel" aria-labelledby="latest-tab">
            <!-- Latest Games Slideshow -->
            <div class="latest-games-slideshow owl-carousel">

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/1511-quang-hai-2019-5.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Giang Hồ Chi Mộng</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/1805-kiem-hon-3d-2020-1.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Kiếm Hồn 3D</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/52.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">God of War</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">PC/Console</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/bg-quyen-vuong-chien-vng.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">KOF Allstars VNG</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/Game8-aumix-ra-mat (1).jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Au Mix</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/rakan-back.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Liên Minh Huyền Thoại</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Online</a>
                        </div>
                    </div>
                </div>

                <!-- Single Games -->
                <div class="single-games-slide">
                    <img src="img/bg-img/garena-free-fire-2.jpg" alt="">
                    <div class="slide-text">
                        <a href="#" class="game-title">Garena Free Fire</a>
                        <div class="meta-data">
                            <a href="#">User: 9.1/10</a>
                            <a href="#">Mobile</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<!-- ##### Monthly Picks Area End ##### -->


<!-- ##### Articles Area Start ##### -->
<section class="latest-articles-area section-padding-100-0 bg-img bg-pattern bg-fixed" style="background-image: url(img/bg-img/5.jpg);">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <div class="mb-100">
                    <!-- Title -->
                    <h2 class="section-title mb-70 wow fadeInUp" data-wow-delay="100ms">Tin Mới Nhất</h2>
                    <div id="test">
                        <!-- *** Single Articles Area *** -->
                    </div>
                    <nav aria-label=...>
                        <ul class="pagination">
                            <li id="previous-page"><a href="javascript:void(0)" aria-label=Previous><span aria-hidden=true>&laquo;</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <!-- Title -->
                <h2 class="section-title mb-70 wow fadeInUp" data-wow-delay="100ms">Ưu Đãi HOT</h2>

                <!-- Single Widget Area -->
                <div class="single-widget-area add-widget wow fadeInUp" data-wow-delay="300ms">
                    <a href="#"><img src="img/bg-img/add.png" alt=""></a>
                    <!-- Side Img -->
                    <img src="img/bg-img/side-img.png" class="side-img" alt="">
                </div>
            </div>

        </div>
    </div>
</section>
<!-- ##### Articles Area End ##### -->

<!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,

    review: `<!-- Preloader -->

<!-- ##### Breadcrumb Area Start ##### -->
<div class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/27.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <!-- Breadcrumb Text -->
            <div class="col-12">
                <div class="breadcrumb-text">
                    <h2>Đánh giá Game</h2>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ##### Breadcrumb Area End ##### -->

<!-- ##### Game Review Area Start ##### -->
<section class="game-review-area section-padding-100">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div id="oneReview">
                    <!-- *** Single Review Area *** -->
                </div>

                <!-- ### Pagination Area ### -->
                <nav aria-label=...>
                        <ul class="pagination mt-100">
                            <li id="previous-page"><a href="javascript:void(0)" aria-label=Previous><span aria-hidden=true>&laquo;</span></a></li>
                        </ul>
                </nav>
            </div>
        </div>
    </div>
</section>
<!-- ##### Game Review Area End ##### -->

<!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,

    magazine: `

<!-- ##### Breadcrumb Area Start ##### -->
<section class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/3.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <!-- Breadcrumb Text -->
            <div class="col-12">
                <div class="breadcrumb-text">
                    <h2>Game Online</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Breadcrumb Area End ##### -->

<!-- ##### Articles Area Start ##### -->
<section class="articles-area section-padding-0-100">
    <div class="container">
        <div class="row justify-content-center">
            <!-- Articles Post Area -->
            <div class="col-12 col-lg-8">
                <div class="mt-100">
                    <div id="oneMaga">
                    <!-- *** Single Articles Area *** -->
                    </div>

                    <!-- ### Pagination Area ### -->
                    <nav aria-label=...>
                        <ul class="pagination mt-100">
                            <li id="previous-page"><a href="javascript:void(0)" aria-label=Previous><span aria-hidden=true>&laquo;</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Sidebar Area -->
            <div class="col-12 col-sm-9 col-md-6 col-lg-4">
                <div class="sidebar-area mt-100">

                    <!-- Single Widget Area -->
                    <div class="single-widget-area add-widget">
                        <a href="#"><img src="img/bg-img/add.png" alt=""></a>
                        <!-- Side Img -->
                        <img src="img/bg-img/side-img.png" class="side-img" alt="">
                    </div>

                    <!-- Single Widget Area -->
                    <div class="single-widget-area video-widget">
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/14.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/15.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Tips to improve your game</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/16.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Game reviews: the best of 2018</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/17.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/18.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
                    </div>

                    <!-- Single Widget Area -->
                    <div class="single-widget-area post-widget">
                        <h4 class="widget-title">Tin mới nhất</h4>
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/19.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/20.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">Gaming at a new lever: 2018 new release</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/21.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">2018 Comicon: See the lastest news</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/22.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Articles Area End ##### -->

<!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,

    magazine1: `

<!-- ##### Breadcrumb Area Start ##### -->
<section class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/3.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <!-- Breadcrumb Text -->
            <div class="col-12">
                <div class="breadcrumb-text">
                    <h2>PC/Console</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Breadcrumb Area End ##### -->

<!-- ##### Articles Area Start ##### -->
<section class="articles-area section-padding-0-100">
    <div class="container">
        <div class="row justify-content-center">
            <!-- Articles Post Area -->
            <div class="col-12 col-lg-8">
                <div class="mt-100">
                    <div id="oneMaga">
                    <!-- *** Single Articles Area *** -->
                    </div>

                    <!-- ### Pagination Area ### -->
                    <nav aria-label=...>
                        <ul class="pagination mt-100">
                            <li id="previous-page"><a href="javascript:void(0)" aria-label=Previous><span aria-hidden=true>&laquo;</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Sidebar Area -->
            <div class="col-12 col-sm-9 col-md-6 col-lg-4">
                <div class="sidebar-area mt-100">

                    <!-- Single Widget Area -->
                    <div class="single-widget-area add-widget">
                        <a href="#"><img src="img/bg-img/add.png" alt=""></a>
                        <!-- Side Img -->
                        <img src="img/bg-img/side-img.png" class="side-img" alt="">
                    </div>

                    <!-- Single Widget Area -->
                    <div class="single-widget-area video-widget">
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/14.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/15.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Tips to improve your game</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/16.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Game reviews: the best of 2018</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/17.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/18.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
                    </div>

                    <!-- Single Widget Area -->
                    <div class="single-widget-area post-widget">
                        <h4 class="widget-title">Tin mới nhất</h4>
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/19.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/20.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">Gaming at a new lever: 2018 new release</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/21.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">2018 Comicon: See the lastest news</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/22.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Articles Area End ##### -->

<!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,

    magazine2: `

<!-- ##### Breadcrumb Area Start ##### -->
<section class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/3.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <!-- Breadcrumb Text -->
            <div class="col-12">
                <div class="breadcrumb-text">
                    <h2>Esport</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Breadcrumb Area End ##### -->

<!-- ##### Articles Area Start ##### -->
<section class="articles-area section-padding-0-100">
    <div class="container">
        <div class="row justify-content-center">
            <!-- Articles Post Area -->
            <div class="col-12 col-lg-8">
                <div class="mt-100">
                    <div id="oneMaga">
                    <!-- *** Single Articles Area *** -->
                    </div>

                    <!-- ### Pagination Area ### -->
                    <nav aria-label=...>
                        <ul class="pagination mt-100">
                            <li id="previous-page"><a href="javascript:void(0)" aria-label=Previous><span aria-hidden=true>&laquo;</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Sidebar Area -->
            <div class="col-12 col-sm-9 col-md-6 col-lg-4">
                <div class="sidebar-area mt-100">

                    <!-- Single Widget Area -->
                    <div class="single-widget-area add-widget">
                        <a href="#"><img src="img/bg-img/add.png" alt=""></a>
                        <!-- Side Img -->
                        <img src="img/bg-img/side-img.png" class="side-img" alt="">
                    </div>

                    <!-- Single Widget Area -->
                    <div class="single-widget-area video-widget">
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/14.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/15.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Tips to improve your game</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/16.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Game reviews: the best of 2018</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/17.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>

                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/18.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
                    </div>

                    <!-- Single Widget Area -->
                    <div class="single-widget-area post-widget">
                        <h4 class="widget-title">Tin mới nhất</h4>
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/19.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/20.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">Gaming at a new lever: 2018 new release</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/21.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">2018 Comicon: See the lastest news</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>

                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/22.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Articles Area End ##### -->

<!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,

    singleView: `<!-- ##### Header Area Start ##### -->
    <header class="header-area wow fadeInDown" data-wow-delay="500ms">
        <!-- Top Header Area -->
        <div class="top-header-area">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 d-flex align-items-center justify-content-between">
                        <!-- Logo Area -->
                        <div class="logo">
                            <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                        </div>
    
                        <!-- Search & Login Area -->
                        <div class="search-login-area d-flex align-items-center">
                            <!-- Top Search Area -->
                            <div class="top-search-area">
                                <form type="submit" id="formSearch">
                                    <input type="search" name="top-search" id="topSearch" placeholder="Search">
                                    <button type="submit" class="btn" id="searchClick"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                            <!-- Login Area -->
                            <div class="login-area" id="signIn">
                                <a href="http://127.0.0.1:5500/register.html"><span>Login / Register</span> <i class="fa fa-lock" aria-hidden="true"></i></a>    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Navbar Area -->
        <div class="egames-main-menu" id="sticker">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Menu -->
                    <nav class="classy-navbar justify-content-between" id="egamesNav">
    
                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>
    
                        <!-- Menu -->
                        <div class="classy-menu">
    
                            <!-- Close Button -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>
    
                            <!-- Nav Start -->
                            <div class="classynav">
                                <ul>
                                    <li><a href="index.html">Trang chủ</a></li>
                                    <li><a href="#" class="gameOnlOff">Game Online</a></li>
                                        <!-- <ul class="dropdown">
                                            <li><a href="game-review.html">Game Review</a></li>
                                            <li><a href="single-game-review.html">Single Game Review</a></li>
                                        </ul> -->                        
                                    <li><a href="#" class="gameOnlOff">Game Offline</a></li>
                                    <li><a href="#" class="review" >Review</a></li>
                                    <li><a href="#" class="gameOnlOff">Esport</a></li>
                                    <li><a href="#" class="contact">Liên hệ</a></li>
                                </ul>
                            </div>
                            <!-- Nav End -->
                        </div>
    
                        <!-- Top Social Info -->
                        <div class="top-social-info">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                           
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>  
  
  <!-- ##### Breadcrumb Area Start ##### -->
  <section class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/23.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <!-- Breadcrumb Text -->
            <div class="col-12">
                <div class="breadcrumb-text">
                    <h2>Article</h2>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- ##### Breadcrumb Area End ##### -->
  
  <!-- ##### Post Details Area Start ##### -->
  <section class="post-news-area section-padding-0-100">
    <div class="container">
        <div class="row justify-content-center">
            <!-- Post Details Content Area -->
            <div class="col-12 col-lg-8">
                <div class="mt-100">
                    <div class="post-details-content mb-100" id="content">
                    </div>
  
                    <!-- Comment Area Start -->
                    <div class="comment_area clearfix mb-70">
                        <h4 class="mb-50">Comments</h4>
                        <ol id="commentMaga">
                            <!-- Single Comment Area -->
                            <li class="single_comment_area">
                                <!-- Comment Content -->
                                <div class="comment-content d-flex">
                                    <!-- Comment Author -->
                                    <div class="comment-author">
                                        <img src="img/bg-img/32.jpg" alt="author">
                                    </div>
                                    <!-- Comment Meta -->
                                    <div class="comment-meta">
                                        <a href="#" class="post-author">William Smith</a>
                                        <a href="#" class="post-date">July 12, 2018</a>
                                        <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet.</p>
                                        <a href="#reply" class="reply">Reply</a>
                                    </div>
                                </div>
  
                                <ol class="children">
                                    <li class="single_comment_area">
                                        <!-- Comment Content -->
                                        <div class="comment-content d-flex">
                                            <!-- Comment Author -->
                                            <div class="comment-author">
                                                <img src="img/bg-img/33.jpg" alt="author">
                                            </div>
                                            <!-- Comment Meta -->
                                            <div class="comment-meta">
                                                <a href="#" class="post-author">Jaku Smith</a>
                                                <a href="#" class="post-date">July 12, 2018</a>
                                                <p>Facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet.</p>
                                                <a href="#reply" class="reply">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </li>
  
                            <!-- Single Comment Area -->
                            <li class="single_comment_area">
                                <!-- Comment Content -->
                                <div class="comment-content d-flex">
                                    <!-- Comment Author -->
                                    <div class="comment-author">
                                        <img src="img/bg-img/32.jpg" alt="author">
                                    </div>
                                    <!-- Comment Meta -->
                                    <div class="comment-meta">
                                        <a href="#" class="post-author">James Carter</a>
                                        <a href="#" class="post-date">July 12, 2018</a>
                                        <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet.</p>
                                        <a href="#reply" class="reply">Reply</a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
  
                    <div class="post-a-comment-area mb-30 clearfix" id="reply">
                        <h4 class="mb-50">Leave a reply</h4>
  
                        <!-- Reply Form -->
                        <div class="contact-form-area">
                            <form id="chatSubmit">
                                <div class="row">
                                    <div class="col-12">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn egames-btn w-100" type="submit">Submit Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  
            <!-- Sidebar Widget -->
            <div class="col-12 col-sm-9 col-md-6 col-lg-4">
                <div class="sidebar-area mt-100">
  
                    <!-- Single Widget Area -->
                    <div class="single-widget-area add-widget">
                        <a href="#"><img src="img/bg-img/add.png" alt=""></a>
                        <!-- Side Img -->
                        <img src="img/bg-img/side-img.png" class="side-img" alt="">
                    </div>
  
                    <!-- Single Widget Area -->
                    <div class="single-widget-area video-widget">
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/14.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
  
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/15.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Tips to improve your game</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
  
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/16.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Game reviews: the best of 2018</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
  
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/17.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">Assemble Your Squad and Join the Battle</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
  
                        <!-- Single Video Widget -->
                        <div class="single-video-widget d-flex">
                            <div class="video-thumbnail">
                                <img src="img/bg-img/18.jpg" alt="">
                            </div>
                            <div class="video-text">
                                <a href="#" class="video-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                            <div class="video-rating">8.3/10</div>
                        </div>
                    </div>
  
                    <!-- Single Widget Area -->
                    <div class="single-widget-area post-widget">
                        <h4 class="widget-title">Tin mới nhất</h4>
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/19.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
  
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/20.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">Gaming at a new lever: 2018 new release</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
  
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/21.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">2018 Comicon: See the lastest news</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
  
                        <!-- Single Post Widget -->
                        <div class="single-post-area d-flex">
                            <div class="blog-thumbnail">
                                <img src="img/bg-img/22.jpg" alt="">
                            </div>
                            <div class="blog-content">
                                <a href="#" class="post-title">New to gaming? Here are some tips</a>
                                <span>Nintendo Wii, PS4, XBox 360</span>
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- ##### Post Details Area End ##### -->
  
  <!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  <!-- ##### Footer Area End ##### -->


`,

    contact: `<!-- ##### Breadcrumb Area Start ##### -->
<section class="breadcrumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/23.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <!-- Breadcrumb Text -->
            <div class="col-12">
                <div class="breadcrumb-text">
                    <h2>Liên Hệ</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Breadcrumb Area End ##### -->

<!-- ##### Contact Area Start ##### -->
<section class="contact-area section-padding-100">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="contact-content mb-100">
                            <a href="#" class="mb-50 d-block"><img src="img/core-img/logo.png" alt=""></a>
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="contact-content mb-100">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h. Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="contact-content mb-100">
                            <!-- Single Contact Info -->
                            <div class="single-contact-info d-flex align-items-center">
                                <div class="title">
                                    <p>Địa chỉ</p>
                                </div>
                                <p>Tầng 6, toà C, 22 Thành Công, Ba Đình, Hà Nội</p>
                            </div>

                            <!-- Single Contact Info -->
                            <div class="single-contact-info d-flex align-items-center">
                                <div class="title">
                                    <p>Điện thoại</p>
                                </div>
                                <p>+53 345 7953 32453</p>
                            </div>

                            <!-- Single Contact Info -->
                            <div class="single-contact-info d-flex align-items-center">
                                <div class="title">
                                    <p>E-mail</p>
                                </div>
                                <p>thaorua000@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12">
                <!-- Google Maps -->
                <div class="map-area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ##### Contact Area End ##### -->

<!-- ##### Footer Area Start ##### -->
<footer class="footer-area">
    <!-- Main Footer Area -->
    <div class="main-footer-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="100ms">
                        <div class="widget-title">
                            <a href="index.html"><img src="img/core-img/logo2.png" alt=""></a>
                        </div>
                        <div class="widget-content">
                            <p>Thông tin nhanh & mới nhất được cập nhật hàng giờ. Tin tức Việt Nam & thế giới về game online cùng thư viện game đầy đủ nhất và cập nhật liên tục 24h.</p>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="300ms">
                        <div class="widget-title">
                            <h4>Đánh Giá Game</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Loạn Thế Anh Hùng</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Ultimate Fishing Simulator</a></li>
                                    <li><a href="#">Call of Duty: Mobile VN</a></li>
                                    <li><a href="#">Đấu Trường Chân Lý Mobile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Single Footer Widget -->
                <div class="col-12 col-sm-7 col-lg-4">
                    <div class="single-footer-widget mb-70 wow fadeInUp" data-wow-delay="700ms">
                        <div class="widget-title">
                            <h4>Có gì mới</h4>
                        </div>
                        <div class="widget-content">
                            <nav>
                                <ul>
                                    <li><a href="#">Au Mix</a></li>
                                    <li><a href="#">Grand Theft Auto</a></li>
                                    <li><a href="#">Bloodborne</a></li>
                                    <li><a href="#">God of war</a></li>
                                    <li><a href="#">Persona 5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copywrite Area -->
    <div class="copywrite-content">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-sm-5">
                    <!-- Copywrite Text -->
                    <p class="copywrite-text"><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
                </div>
                <div class="col-12 col-sm-7">
                    <!-- Footer Nav -->
                    <div class="footer-nav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>                  
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`,
    submit: `<section>
<form class="submit-form">
  <div class="form-header">
    Đăng tải bài viết
  </div>
  <div class="form-content">
    <div class="input-wrapper">
      <input type="text" name="owner" placeholder="Tên chủ bài viết" />
      <div class="message-error" id="owner-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="datetime" name="time" placeholder="Ngày đăng bài" />
      <div class="message-error" id="time-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" name="picture" placeholder="Ảnh đầu trang" />
      <div class="message-error" id="picture-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" name="title" placeholder="Tên tiêu đề" />
      <div class="message-error" id="title-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" name="content" placeholder="Nội dung bài viết" />
      <div class="message-error" id="content-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" name="contentMaga" placeholder="Nội dung bài viết chi tiết" />
      <div class="message-error" id="content-maga-error"></div>
    </div>
  </div>
  <div class="form-footer">
    <button type="submit">Đăng tải</button>
    <a href=# id="back">Quay lại trang chủ</a>
  </div>
</form>
</section>`,

    headerAdmin: `<!-- ##### Header Area Start ##### -->
<header class="header-area">
    <!-- Top Header Area -->
    <div class="top-header-area">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 d-flex align-items-center justify-content-between">
                    <!-- Logo Area -->
                    <div class="logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""></a>
                    </div>

                    <!-- Search & Login Area -->
                    <div class="search-login-area d-flex align-items-center">
                        <!-- Top Search Area -->
                        <div class="top-search-area">
                            <form type="submit" id="formSearch">
                                <input type="search" name="top-search" id="topSearch" placeholder="Tìm kiếm">
                                <button type="submit" class="btn" id="searchClick"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <!-- Login Area -->
                        <div id="signIn">
                            <div class="login-area">
                                <a href="#"><span id="text-login">Login / Register</span> <i class="fa fa-lock" aria-hidden="true"></i></a>    
                            </div>
                        </div>
                        <button id="submitForm">Tải</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Navbar Area -->
    <div class="egames-main-menu" id="sticker">
        <div class="classy-nav-container breakpoint-off">
            <div class="container">
                <!-- Menu -->
                <nav class="classy-navbar justify-content-between" id="egamesNav">

                    <!-- Navbar Toggler -->
                    <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <!-- Menu -->
                    <div class="classy-menu">

                        <!-- Close Button -->
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>

                        <!-- Nav Start -->
                        <div class="classynav">
                            <ul>
                                <li><a href="index.html">Trang chủ</a></li>
                                <li><a href="#" class="magazine1">Game Online</a></li>
                                    <!-- <ul class="dropdown">
                                        <li><a href="game-review.html">Game Review</a></li>
                                        <li><a href="single-game-review.html">Single Game Review</a></li>
                                    </ul> -->                        
                                <li><a href="#" class="magazine2">PC/Console</a></li>
                                <li><a href="#" class="review" >Review</a></li>
                                <li><a href="#" class="magazine3">Esport</a></li>
                                <li><a href="#" class="contact">Liên hệ</a></li>
                            </ul>
                        </div>
                        <!-- Nav End -->
                    </div>

                    <!-- Top Social Info -->
                    <div class="top-social-info">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/MindX.School/" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                       
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
<!-- ##### Header Area End ##### -->`


};
