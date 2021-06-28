//a태그 새로고침 방지
$('a[href="#"]').click(function(e) {
    e.preventDefault();
});

//my_menu 생성
$(document).ready(function(){
    $(".my_menu").load("../myMenu/index.html");
})
//my_menu on
function menuOn() {
    document.querySelector('.my_menu').classList.add('myMenuOn');
    document.querySelector('.my_menu_bg').classList.add('my_menu_bg_on')
}
//my_menu off
function menuOff(){
    document.querySelector('.my_menu').classList.remove('myMenuOn');
    document.querySelector('.my_menu_bg').classList.remove('my_menu_bg_on')
}

//video자료 선언
//video 언더바 선언
//함수 - 현재시간/전체시간 *100해서 증가율 구하기
//언더바에 증가율 적용 
const video = document.querySelector('video')
const progressBar = document.querySelector('.movie_underbar')
const progress =document.querySelector('.movie_controler')
function handleProgress(){
    const percent = (video.currentTime / video.duration) *100;    
    progressBar.style.width = `${percent}%`
}
//timeupdate는 재생위치가 변경되었을때 발생!
//이벤트 후의 시간을 반환한다 ! 
video.addEventListener('timeupdate',handleProgress);

//(이벤트가 발생한 x축 위치 / movie_controler의 넓이) * 비디오 전체 길이
// 마우스를 찍었을때 영상이 어디쯤인지 알기 위한 식
// 구한 값이 video의 current 값으로 변환
function scrub(e) { 
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; 
    video.currentTime = scrubTime; 
} 
//마우스 클릭했을때 scrub 동작
//마우스 누른 상태로 움직일때 마우스down과 scrub 동작
let mousedown = false; 
progress.addEventListener('click', scrub); 
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); 
progress.addEventListener('mousedown', () => mousedown = true); 
progress.addEventListener('mouseup', () => mousedown = false);



//gototheTop 눌렀을 때 페이지 상단으로 이동
//scrollTop ---- top or bottom: y 축 
//left or right : x축
//behavior : 움직일때 반응 instant, smooth, auto
function toTheTop(){
    window.scrollTo({top:0, behavior:'smooth'});
}