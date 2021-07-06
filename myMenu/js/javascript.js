

// 1. nav p 마우스 click 했을 때 classList 추가 .nav_depth_menu 왼쪽으로 이동
function navOn() {
    document.querySelector('.nav_depth_menu').classList.add('navToggle');
    document.querySelector('.movie_poster').classList.add('movie_poster_off');
}

// 2. depth nav 생성
$(document).ready(function(){
    $('.nav > p').eq(0).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(0).css("display","block");
    });
    $('.nav > p').eq(1).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(1).css("display","block");
    });
    $('.nav > p').eq(2).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(2).css("display","block");
    });
    $('.nav > p').eq(3).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(3).css("display","block");
    });
    $('.nav > p').eq(4).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(4).css("display","block");
    });
    $('.nav > p').eq(5).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(5).css("display","block");
    });
    $('.nav > p').eq(6).click(function(){
        $('.depth_text1').css("display","none");
        $('.depth_text1').eq(6).css("display","block");
    });
    
    // nav를 leave 했을 때 depth 메뉴 바깥으로
    $('#menu').on('mouseleave',function(){
        $('.depth_text1').css("display","none");
        $('.movie_poster').removeClass('movie_poster_off');
        $('.nav_depth_menu').removeClass('navToggle');
    })
})

