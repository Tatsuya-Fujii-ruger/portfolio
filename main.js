$(function(){

    //ページ内スクロール
    $('a[href^="."]').on("click", function(){
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "." || href == "" ? 'html' : href);
        var position = target.offset().top-100; 
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        $('.header').toggleClass('openNav');
  
        return false;
    });
  
    //ページトップに戻るボタン
    var pagetop = $('#js-page-top');
    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
  
    pagetop.on("click", function(){
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  
    //ハンバーガーメニュー
    $('#js-nav-toggle').on("click", function(){
        $('.header').toggleClass('openNav');
    });
  
    //要素のフェードインアニメーション
    $(window).on('scroll', function(){
        $('.js-fade-trigger').each(function(){
            var scroll = $(window).scrollTop();
            var elemTop = $(this).offset().top;
            var windowHeight = $(window).height();
  
            if(scroll > elemTop - windowHeight / 2 - 50) {
                if($(this).hasClass('fade-element-up')) {
                    $(this).addClass('fade-up');
                } else if($(this).hasClass('fade-element-scale')) {
                    $(this).addClass('fade-scale');
                } else if($(this).hasClass('fade-elem')) {
                    $(this).find('.fade-element-scale').addClass('fade-scale');
                } else if($(this).hasClass('fade-element-left')) {
                    $(this).addClass('fade-left');
                } else if($(this).hasClass('fade-element-right')) {
                    $(this).addClass('fade-right');
                }
            }
        });
    });
  
    $(window).trigger('scroll');
  });
  
  