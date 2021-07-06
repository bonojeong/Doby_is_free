//a 태그 새로고침 방지
$('a[href="#"]').click(function(e) {
    e.preventDefault();
});


// 1. nav p 마우스 click 했을 때 classList 추가 .nav_depth_menu 왼쪽으로 이동
function navOn() {
    document.querySelector('.nav_depth_menu').classList.add('navToggle');
    document.querySelector('.movie_poster').classList.add('movie_poster_off');
}

function navDepth(){
    let navP = document.querySelectorAll('.nav > p');
    let depth_text1 = document.querySelectorAll('.depth_text1');

    navP[0].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[0].style.display = 'block'
    })
    navP[1].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[1].style.display = 'block'
    })
    navP[2].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[2].style.display = 'block'
    })
    navP[3].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[3].style.display = 'block'
    })
    navP[4].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[4].style.display = 'block'
    })
    navP[5].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[5].style.display = 'block'
    })
    navP[6].addEventListener('click',function(){
        depth_text1.forEach(item => 
            e.style.display='none'
        )
        depth_text1[6].style.display = 'block'
    })
}
navDepth()