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

let visualInnerText = document.querySelector('.vis_upper_text p').children
let reserve_btn = document.querySelector('.reserve_btn');
let visLowerInnerText = document.querySelector('.vis_lower_text > p ');
//visual 텍스트 effect
function mainEffect(){ 
    setTimeout(function(){
        setTimeout(function() {      
            visualInnerText[0].style.left = `0px`;
        }, 300);
        setTimeout(function() {      
            visualInnerText[1].style.left = `0px`;
        }, 1000);
        setTimeout(function() {      
            visualInnerText[2].style.left = `0px`;
        }, 1500);
        setTimeout(function() {      
            reserve_btn.style.left = `0px`;
        }, 2200);
        setTimeout(function() {
            visLowerInnerText.style.transform = `translateX(0)`;
        }, 3000)
    }, 500);
}
mainEffect();


//addEventListener로 scroll이벤트를 줘서 값을 구한다음 
//selcetionAnimation 함수 적용하기
let selectedAnimation = function() {
    let selMovieTextsArr, selMoviePosterArr, winH;
    
    let initModule = function(){
        selMovieTextsArr = document.querySelectorAll('.sel_movie_texts');
        selMoviePosterArr = document.querySelectorAll('.sel_movie_poster');
        //윈도우 높이
        winH = window.innerHeight; // 969px
        _addEventHandlers();
    }
//스크롤, 파일이 load됐을 때 function _checkPosition 작동
//resize 됐을 때 function initModule 작동
    let _addEventHandlers = function(){
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    }
    let _checkPosition = function () {
        for (let i = 0; i < selMovieTextsArr.length; i++) {
            //selMovieTextsArr 의 Top값이 winH보다 작을 때 함수 작동
            let posFromTop = selMovieTextsArr[i].getBoundingClientRect().top;
            if (winH > posFromTop + 300) {
                //classList.add로 클래스 이름 주기
                selMovieTextsArr[i].classList.add("sel_movie_effect1");
                selMoviePosterArr[i].classList.add("sel_movie_effect2");
            }
        }
    }  
    return {
        init: initModule
    }
}
selectedAnimation().init();


// -------------------------------------------------------------

//eventpage 
//목록에 있는것을 아무거나 누르면 메인스크린에 있는 번호랑 바뀐다(addEventListener 마우스 효과적용)
//바뀔때 목록은 다시 재배치 되는데
// 재배치될 떄 1234 순으로 된다. ( map 사용해서 배열 재구성)
// 메인에 있는 인덱스 번호는 목록에는 있으면 안된다. (filter로 메인번호 거른다)
// 번호 + 선 먼저나오고  // 텍스트 한번에 나오고 (위-먼저)
// 텍스트나오고 버튼나온다 (아래-나중)

//스크린용 class 생성
class eventSelect {
    constructor(screen_n, screen_T1, screen_T2, screen_H4, screen_P){
        this.screen_n = screen_n;
        this.screen_T1 = screen_T1;
        this.screen_T2 = screen_T2;
        this.screen_H4 = screen_H4;
        this.screen_P = screen_P;
    }
}
const eventText = [
    new eventSelect(
        '1', 
        'FILM MARK EVENT', 
        'LUCA', 
        '영화 속 명장면을 내 손 안에 담아보는 나만의 컬렉터블 기프트 No.15',
        `바다 밖은 위험해?!아니, 궁금해!<span>바다 밖 세상이 궁금하지만, 두렵기도 한 호기심 많은 소년'루카'</span>`
    ),
    new eventSelect(
        '2', 
        'FILM MARK EVENT', 
        `Call Restricion`, 
        '영화 속 명장면을 내 손 안에 담아보는 나만의 컬렉터블 기프트 No.15',
        `바다 밖은 위험해?!아니, 궁금해!<span>바다 밖 세상이 궁금하지만, 두렵기도 한 호기심 많은 소년'루카'</span>`
    ),
    new eventSelect(
        '3', 
        'FILM MARK EVENT', 
        `Killer's Bodyguard2`, 
        '영화 속 명장면을 내 손 안에 담아보는 나만의 컬렉터블 기프트 No.15',
        `바다 밖은 위험해?!아니, 궁금해!<span>바다 밖 세상이 궁금하지만, 두렵기도 한 호기심 많은 소년'루카'</span>`
    ),
    new eventSelect(
        '4', 
        'FILM MARK EVENT', 
        'Cash Truck', 
        '영화 속 명장면을 내 손 안에 담아보는 나만의 컬렉터블 기프트 No.15',
        `바다 밖은 위험해?!아니, 궁금해!<span>바다 밖 세상이 궁금하지만, 두렵기도 한 호기심 많은 소년'루카'</span>`
    ),
    new eventSelect(
        '5', 
        'Battleground PCS4 Live', 
        'In-Game Item', 
        '영화 속 명장면을 내 손 안에 담아보는 나만의 컬렉터블 기프트 No.15',
        `바다 밖은 위험해?!아니, 궁금해!<span>바다 밖 세상이 궁금하지만, 두렵기도 한 호기심 많은 소년'루카'</span>`
    )
]
//리스트용 class 생성
class eventSmallSelect {
    constructor(screen_Sn, screen_ST){
        this.screen_Sn = screen_Sn;
        this.screen_ST = screen_ST;
    }
}
const eventSmallText = [
    new eventSmallSelect(1, 'FILM MARK EVENT<span>LUCA</span>'),
    new eventSmallSelect(2, 'FILM MARK EVENT<span>Call Restriction</span>'),
    new eventSmallSelect(3, `FILM MARK EVENT<span>Killer's Bodyguard 2</span>`),
    new eventSmallSelect(4, 'FILM MARK EVENT<span>Cash Truck</span>'),
    new eventSmallSelect(5, 'FILM MARK EVENT<span>In-Game Item</span>'),
]
let screen_number = document.querySelector('.screen_number');
let screen_texts = document.querySelectorAll('.screen_text span');
let screen_lower_h4 = document.querySelector('.screen_lower_text h4');
let screen_lower_p = document.querySelector('.screen_lower p');
let event_btn = document.querySelector('.event_btn a');

console.log(screen_number)

let eventNum =1;
function test(eventNum){
    screen_number.innerHTML = eventText[eventNum-1].screen_n
    screen_texts[0].innerHTML = eventText[eventNum-1].screen_T1
    screen_texts[1].innerHTML = eventText[eventNum-1].screen_T2
    screen_lower_h4.innerHTML = eventText[eventNum-1].screen_H4
    screen_lower_p.innerHTML = eventText[eventNum-1].screen_P
}
test(eventNum)

function eventEffect(id){
    eventNum = id.getAttribute('data-num')
    if(eventNum == 2){
        id.setAttribute('data-num',1);
        document.querySelector(`.small_screen1 h1`).innerHTML = id.getAttribute('data-num');
        document.querySelector(`.small_screen1 p`).innerHTML = eventSmallText[id-1].screen_ST;
    }
    test(eventNum);
    console.log(eventNum);

    //다시 눌렀을때 초기화 상태    
    screen_number.style.opacity = `0`; 
    screen_number.style.transition = `0s`;  
    screen_texts[0].style.transform = `translateX(-100%)`;
    screen_texts[0].style.transition = `0s`;
    screen_texts[1].style.transform = `translateX(-100%)`;
    screen_texts[1].style.transition = `0s`;
    screen_lower_h4.style.transform = `translateX(-100%)`;
    screen_lower_h4.style.transition = `0s`;
    screen_lower_p.style.transform = `translateX(-100%)`;
    screen_lower_p.style.transition = `0s`;
    event_btn.style.transform = `translateX(-100%)`;
    event_btn.style.transition = `0s`;

    //클릭했을때 텍스트 인터렉션 효과
    setTimeout(function(){
        setTimeout(function() {      
            screen_number.style.opacity = `1`;
            screen_number.style.transition = `0.5s`;
        }, 300);
        setTimeout(function() {      
            screen_texts[0].style.transform = `translateX(0)`;
            screen_texts[0].style.transition = `0.5s`;
        }, 800);
        setTimeout(function() {      
            screen_texts[1].style.transform = `translateX(0)`;
            screen_texts[1].style.transition = `0.5s`;
        }, 800);
        setTimeout(function() {      
            screen_lower_h4.style.transform = `translateX(0)`;
            screen_lower_h4.style.transition = `0.5s`;
        }, 1200);
        setTimeout(function() {
            screen_lower_p.style.transform = `translateX(0)`;
            screen_lower_p.style.transition = `0.5s`;
        }, 1500)
        setTimeout(function() {
            event_btn.style.transform = `translateX(0)`;
            event_btn.style.transition = `0.5s`;
        }, 1800)
    }, 500);
}
// ----------------------------------------------


//gototheTop 눌렀을 때 페이지 상단으로 이동
//scrollTop ---- top or bottom: y 축 
//left or right : x축
//behavior : 움직일때 반응 instant, smooth, auto
function toTheTop(){
    window.scrollTo({top:0, behavior:'smooth'});
}