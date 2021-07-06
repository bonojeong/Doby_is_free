// 1. nav p 마우스 click 했을 때 classList 추가 .nav_depth_menu 왼쪽으로 이동
function navOn() {
    document.querySelector('.nav_depth_menu').classList.add('navToggle');
    document.querySelector('.movie_poster').classList.add('movie_poster_off');
}

function navDepth1(){
    document.querySelector('.depth_text1_2').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.remove('on');
    document.querySelector('.depth_text1_6').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.remove('on');
    document.querySelector('.depth_text1_1').classList.add('on');
}
function navDepth2(){
    document.querySelector('.depth_text1_1').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.remove('on');
    document.querySelector('.depth_text1_6').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.remove('on');
    document.querySelector('.depth_text1_2').classList.add('on');
}
function navDepth3(){
    document.querySelector('.depth_text1_1').classList.remove('on');
    document.querySelector('.depth_text1_2').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.remove('on');
    document.querySelector('.depth_text1_6').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.add('on');
}
function navDepth4(){
    document.querySelector('.depth_text1_1').classList.remove('on');
    document.querySelector('.depth_text1_2').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.remove('on');
    document.querySelector('.depth_text1_6').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.add('on');
}
function navDepth5(){
    document.querySelector('.depth_text1_1').classList.remove('on');
    document.querySelector('.depth_text1_2').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.remove('on');
    document.querySelector('.depth_text1_6').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.add('on');
}
function navDepth6(){
    document.querySelector('.depth_text1_1').classList.remove('on');
    document.querySelector('.depth_text1_2').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.remove('on')
    document.querySelector('.depth_text1_6').classList.add('on');
}
function navDepth7(){
    document.querySelector('.depth_text1_1').classList.remove('on');
    document.querySelector('.depth_text1_2').classList.remove('on');
    document.querySelector('.depth_text1_3').classList.remove('on');
    document.querySelector('.depth_text1_4').classList.remove('on');
    document.querySelector('.depth_text1_5').classList.remove('on');
    document.querySelector('.depth_text1_6').classList.remove('on');
    document.querySelector('.depth_text1_7').classList.add('on');
}

let nav_depth_menu = document.querySelector('.nav_depth_menu');
console.log(nav_depth_menu)
function nav_depth_menuOff(){

}