let video = document.querySelector('video');
let preBtn = document.querySelector('.preBtn');
let stopBtn = document.querySelector('.stopBtn');
let nextBtn = document.querySelector('.nextBtn');
let movieSlide = document.querySelectorAll('.movieSlide li');
let bar = document.querySelectorAll('.bar');
let closead = document.querySelector('.closead');
let ad = document.querySelector('.ad');
let movieindex = document.querySelector('.index');
let indexchild = movieindex.children;
const h2text = ['운명을 바꿀<span>최후의 전쟁</span>이',
                '대한민국 전 세계 최초 개봉',
                '영원히 <span>기억</span>하고 싶은 황홀한',
                '사이즈부터 다른 마블의'
            ];
const h2text2 = ['지금 펼쳐진다!','이것이 <span>K-FAST</span>의 위엄!','<span>모험</span>이 시작된다','<span>히든카드</span>가 온다']
console.log(indexchild);

//a태그 새로고침 방지
$('a[href="#"]').click(function(e) {
    e.preventDefault();
});

//my_menu 생성
$(document).ready(function(){
    $(".my_menu").load("../myMenu/myMenu.html");
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

let videoNum = 1;
let videostop = 0;

// 스크롤시 이벤트 발생
eventcheckWeek = false;
eventcheckrecom = false;

let mainRecomRepeat;

document.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    document.querySelector('#scroll').innerHTML = `${document.documentElement.scrollTop}`;
    
    if(((scrollTop+200) > windowHeight ) && !eventcheckWeek){
        eventcheckWeek = true;
        weekEffect();
        setInterval(() => {
            weekslide();
        }, 3000);
        setInterval(() =>{
            bannerSlide.style.left = '-'+bannerNum*0.1+'%';
            bannerNum +=1;
            if(bannerNum == 1010){
                bannerSlide.style.transition = '0ms';
                bannerSlide.style.left = '0%';
                bannerNum = 0;
                setTimeout(()=>{
                    bannerSlide.style.transition = '10ms';
                }, 50);
            }
        },20);
    }
    if((scrollTop > (windowHeight*2)) && !eventcheckrecom){
        eventcheckrecom = true;
        mainRecomRepeat = setInterval(recomSlideStart,3000);
    }
});

function mainEffect(){ 
    
    setTimeout(function(){
        setTimeout(function() {      
            indexchild[0].style.transform = 'translateX(0)';
        }, 300);
        setTimeout(function() {      
            indexchild[1].style.transform = 'translateX(0)';
        }, 1000);
        setTimeout(function() {      
            indexchild[2].style.transform = 'translateX(0)';
        }, 1500);
        setTimeout(function() {      
            indexchild[3].style.transform = 'translateX(0)';
        }, 2200);
    }, 500);
}
function resetEffect(){
    for(i=0;i<4;i++){
        indexchild[i].style.transform = 'translateX(-100%)';
    }
}
mainEffect();
preBtn.addEventListener('mouseover',function(){
    document.querySelector('.preBtn img').src = 'image/main1/button_1_hover.png';
});
preBtn.addEventListener('mouseout', function(){
    document.querySelector('.preBtn img').src = 'image/main1/button_1.png';
});
stopBtn.addEventListener('mouseover',function(){
    document.querySelector('.stopBtn img').src = 'image/main1/button_2_hover.png';
});
stopBtn.addEventListener('mouseout', function(){
    document.querySelector('.stopBtn img').src = 'image/main1/button_2.png';
});
nextBtn.addEventListener('mouseover',function(){
    document.querySelector('.nextBtn img').src = 'image/main1/button_3_hover.png';
});
nextBtn.addEventListener('mouseout', function(){
    document.querySelector('.nextBtn img').src = 'image/main1/button_3.png';
});

preBtn.onclick = function(e){
    resetEffect();
    if(videoNum == 1){
        videoNum = 4;
        video.src = `video/video${videoNum}.mp4`;
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    else{
        videoNum -=1;
        video.src = `video/video${videoNum}.mp4`;
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    for(i=0;i<4;i++){
        movieSlide[i].style.opacity = '0.4';
        bar[i].style.opacity = '0';
    }
    movieSlide[videoNum-1].style.opacity = '1';
    bar[videoNum-1].style.opacity = '1';
};
nextBtn.onclick = function(){
    resetEffect();
    if(videoNum == 4){
        videoNum = 1;
        video.src = `video/video${videoNum}.mp4`;
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    else{
        videoNum +=1;
        video.src = `video/video${videoNum}.mp4`;
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    for(i=0;i<4;i++){
        movieSlide[i].style.opacity = '0.4';
        bar[i].style.opacity = '0';
    }
    movieSlide[videoNum-1].style.opacity = '1';
    bar[videoNum-1].style.opacity = '1';
};
stopBtn.onclick = function(){
    if(videostop == 0){
        video.play();
        videostop = 1;
    }
    else{ 
        video.pause(); 
        videostop = 0;
    }
   
};

closead.onclick = function(){
    ad.style.display = 'none';
};


/*---------------------------------------------------*/
const weekSlideDom = document.querySelector('.weekslidedom');
const weekNum = document.querySelector('.num');
const weekTitle = document.querySelector('#weekMovie .subTitle');
const weekTitlechild = weekTitle.children;
let posterNum = 0;

function weekEffect(){ 
    setTimeout(function(){
        setTimeout(function() {      
            weekTitlechild[0].style.transform = 'translateX(0)';
        }, 300);
        setTimeout(function() {      
            weekTitlechild[1].style.transform = 'translateX(0)';
        }, 1000);
        setTimeout(function() {      
            weekTitlechild[2].style.transform = 'translateX(0)';
        }, 1000);
        setTimeout(function() {      
            weekTitlechild[3].style.transform = 'translateX(0)';
        }, 1000);
        setTimeout(function() {      
            weekTitlechild[4].style.transform = 'translateX(0)';
        }, 1000);
    }, 500);
}
function weekslide(){
    posterNum +=1;
    
    if(posterNum == 7){
        weekSlideDom.style.transition = '0ms';
        weekSlideDom.style.transform ='translateX(0)';
        posterNum = 0;
        setTimeout(function(){
            weekSlideDom.style.transition = '1s';
        },100);
    }
    weekSlideDom.style.transform = 'translateX(-' + 11.1111*posterNum + '%)';
    if(posterNum == 6){
        weekNum.innerHTML = '01 / 06';
    }
    else{
        weekNum.innerHTML = '0'+(posterNum+1)+' / 06';
    }
}
/*-----------------------------------------------------------------*/
const bannerSlide = document.querySelector('.bannerslide');
let banner = document.querySelectorAll('.banner');
let bannerNum = 0;


/*---------------------------------------------------------------------*/
//자동으로 돌아가는 슬라이더 지만 동글뺑이로도 선택이 가능하게 (선택시 실시적으로 멈춤)
const recommendSlide = document.querySelector('.recommendslide');
const recomli = document.querySelectorAll('.recommendimg li');
console.log(recomli);

const recomHeight = recommendSlide.offsetHeight;
const recomimg = recommendSlide.children;
let recomSlideNum = 0;



function recomSlideStart (){
        if(recomSlideNum == 3){
            let i = 4;
            for(i=0;i<4;i++){
                recomli[i].style.backgroundColor = '#B3B3B3';
                recomli[i].style.opacity = '0.4';
            }
            recomli[0].style.backgroundColor ='#ECA100'; 
            recomli[0].style.opacity ='1';
            let subRecomRepeat = setInterval(function(){
                recomimg[i-1].style.transform = `translateY(0)`;
                i -=1;
                if(i == 0){
                    clearInterval(subRecomRepeat);
                }
            }, 333);
            recomSlideNum =0;
        }
        else{
            recomSlideNum +=1;
            for(i=0;i<4;i++){
                recomli[i].style.backgroundColor = '#B3B3B3';
                recomli[i].style.opacity = '0.4';
            }
            recomimg[recomSlideNum].style.transform = `translateY(-${recomHeight*recomSlideNum}px)`;
            recomli[recomSlideNum].style.backgroundColor = '#ECA100';
            recomli[recomSlideNum].style.opacity = '1';
        } 
}


recomli[0].onclick = function(){
    clearInterval(mainRecomRepeat);
    eventcheckrecom = false;
    let i = 4;
        for(i=0;i<4;i++){
            recomli[i].style.backgroundColor = '#B3B3B3';
            recomli[i].style.opacity = '0.4';
        }
        recomli[0].style.backgroundColor ='#ECA100'; 
        recomli[0].style.opacity ='1';
        let subRecomRepeat = setInterval(function(){
            recomimg[i-1].style.transform = `translateY(0)`;
            i -=1;
            if(i == 0){
                clearInterval(subRecomRepeat);
            }
        }, 100);
        recomSlideNum = 0;
};
recomli[1].onclick = function(){
    clearInterval(mainRecomRepeat);
    eventcheckrecom = false;
    let i = 4;
    recomSlideNum = 1;
    let subRecomRepeat = setInterval(function(){
        recomimg[i-1].style.transform = `translateY(0)`;
        i -=1;
        if(i == 2){
            recomimg[1].style.transform =`translateY(-${recomHeight*recomSlideNum}px)`;
            clearInterval(subRecomRepeat);
        }
    }, 100);

    for(i=0;i<4;i++){
        recomli[i].style.backgroundColor = '#B3B3B3';
        recomli[i].style.opacity = '0.4';
    }
    recomli[recomSlideNum].style.backgroundColor = '#ECA100';
    recomli[recomSlideNum].style.opacity = '1';
};

recomli[2].onclick = function(){
    clearInterval(mainRecomRepeat);
    eventcheckrecom = false;
    let i =4;
    let y =1;
    recomSlideNum = 2;
    let subRecomRepeat = setInterval(function(){
        recomimg[i-1].style.transform = `translateY(0)`;
        i -=1;
        if(i <= 3){
            recomimg[y].style.transform =`translateY(-${recomHeight*y}px)`;
            if(y == 2){
                clearInterval(subRecomRepeat);
            }
            y +=1;
        }
    }, 100);


    for(i=0;i<4;i++){
        recomli[i].style.backgroundColor = '#B3B3B3';
        recomli[i].style.opacity = '0.4';
    }
    recomli[recomSlideNum].style.backgroundColor = '#ECA100';
    recomli[recomSlideNum].style.opacity = '1';
}
recomli[3].onclick = function(){
    clearInterval(mainRecomRepeat);
    eventcheckrecom = false;
    recomSlideNum = 3;
    let j = 1;
    let subRecomRepeat = setInterval(function(){
        recomimg[j].style.transform =`translateY(-${recomHeight*j}px)`;
        j += 1;
        if(j == 4){
            clearInterval(subRecomRepeat);
        }
    }, 100);
    for(i=0;i<4;i++){
        recomli[i].style.backgroundColor = '#B3B3B3';
        recomli[i].style.opacity = '0.4';
    }
    recomli[recomSlideNum].style.backgroundColor = '#ECA100';
    recomli[recomSlideNum].style.opacity = '1';
}

/*--------------------------------------------------------------------------------*/
const leftBtn = document.querySelector('.leftbtn');
const rightBtn = document.querySelector('.rightbtn');
const smallCardGage = document.querySelector('.smallcardgage div');
const cardSlide = document.querySelector('.cardslide');
const cardchild = cardSlide.children;
const bigCard = document.querySelector('.bigcard');
const bigCardName = document.querySelector('.cardleft h3');
const bigCardIndex = document.querySelector('.cardleft div:nth-child(3)');
console.log(bigCardIndex.children);
const cardName = ['M포인트 the red',
                  'The best 신한카드',
                  '신한카드 LABE',
                  '신한카드 The More',
                  '요기요 신한카드',
                  '신한카드 Deep Once',
                  'RPM+ Platinum#'               
];
const cardIndex1 = [
                    '전월카드 이용실적 <span>30만원 이상 시</span> 할인',
                    '전월카드 이용실적 <span>50만원 이상 시</span> 할인',
                    '전월카드 이용실적 <span>20만원 이상 시</span> 할인',
                    '전월카드 이용실적 <span>50만원 이상 시</span> 할인',
                    '전월카드 이용실적 <span>30만원 이상 시</span> 할인',
                    '전월카드 이용실적 <span>35만원 이상 시</span> 할인',
                    '전월카드 이용실적 <span>40만원 이상 시</span> 할인'
];
const cardIndex2 = [
                    '티켓단가 7천원 이상 시 <span>온라인</span>',
                    '티켓단가 8천원 이상 시 <span>온라인</span>',
                    '동반 2인 이상 구매 시 <span>온라인</span>',
                    '티켓단가 7천원 이상 시 <span>온라인</span>',
                    '티켓단가 5천원 이상 시 <span>온라인</span>',
                    '티켓단가 7천원 이상 시 <span>온라인</span>',
                    '동반 2인이상 구매 시 <span>온라인</span>'
];
const cardIndex3 = [
                    '     5,000원',
                    '     5,000원',
                    '     2,000원',
                    '     9,000원',
                    '     4,000원',
                    '     4,000원',
                    '     9,000원'
];
const cardIndex4 = [
                    '            3,000원',
                    '            5,000원',
                    '            5,000원',
                    '            5,000원',
                    '            6,000원',
                    '            2,000원',
                    '            7,000원'
];




let cardNum = 1;

leftBtn.addEventListener('mouseover',function(){
    leftBtn.src = 'image/main4/beforeButton_hover.png';
});
leftBtn.addEventListener('mouseout', function(){
    leftBtn.src = 'image/main4/beforeButton.png';
});

rightBtn.addEventListener('mouseover',function(){
    rightBtn.src = 'image/main4/afterButton_hover.png';
});
rightBtn.addEventListener('mouseout', function(){
    rightBtn.src = 'image/main4/afterButton.png';
});

leftBtn.onclick = function(){
    if(cardNum != 1){
        cardNum -=1;
        cardSlide.style.left = '-'+33.3333*(cardNum-1)+"%";
        smallCardGage.style.transform = `translateX(${33.3333*(cardNum-1)}%)`;
    }
};
rightBtn.onclick = function(){
    if(cardNum != 12){
        cardNum +=1;
        cardSlide.style.left ='-'+33.3333*(cardNum-1)+'%';
        smallCardGage.style.transform = `translateX(${33.3333*(cardNum-1)}%)`;
    }
};

function cardchange(id){
    console.log(id.alt.replace('카드',''));
    setTimeout(function(){
        bigCard.style.opacity = '0';
        bigCardName.style.opacity = '0';
        bigCardIndex.style.opacity = '0';
        setTimeout(function(){
            bigCardName.innerHTML = cardName[id.alt.replace('카드','')-1];
            bigCardIndex.children[0].innerHTML = cardIndex1[id.alt.replace('카드','')-1];
            bigCardIndex.children[2].innerHTML = cardIndex2[id.alt.replace('카드','')-1];
            bigCardIndex.children[3].innerHTML = cardIndex3[id.alt.replace('카드','')-1];
            bigCardIndex.children[6].innerHTML = cardIndex4[id.alt.replace('카드','')-1];
            bigCard.style.transform = 'translateX(-100%)';
            bigCardName.style.opacity = '1';
            bigCardIndex.style.opacity ='1';
            setTimeout(function(){
                bigCard.style.background = `url('../image/main4/bigCard_${id.alt.replace('카드','')}.png')`;
                bigCard.style.opacity = '1';    
                setTimeout(function(){
                    bigCard.style.transition = '1s';
                    bigCard.style.transform = 'translateX(0)';
                    setTimeout(() => {
                        bigCard.style.transition = '0.3s';
                    }, 50);
                }, 100);
            }, 500);
        },500);
    },500);
}


const cardTitle = document.querySelector('#cardEvent .subTitle');
const cardTitlechild = cardTitle.children;

function cardEffect(){ 
    setTimeout(function(){
        setTimeout(function() {      
            cardTitlechild[0].style.transform = 'translateX(0)';
        }, 300);
        setTimeout(function() {      
            cardTitlechild[1].style.transform = 'translateX(0)';
        }, 1000);
        setTimeout(function() {      
            cardTitlechild[2].style.transform = 'translateX(0)';
        }, 1500);
    }, 500);
}
cardEffect();


/*---------------------------------------------------------------------------*/
const cinemaMainTitle = document.querySelector('.cinema_main_title');
const cinemaAlphabet = document.querySelector('.cinema_alphabet');
const cinemali = document.querySelectorAll('.cinemaul li');

cinemali[0].addEventListener('click',function(){
    cinemaMainTitle.innerHTML = cinemaMainTitleArray[0];
    cinemaAlphabet.innerHTML = cinemaMainAlphabet[0];
});
cinemali[1].addEventListener('click',function(){
    cinemaMainTitle.innerHTML = cinemaMainTitleArray[1];
    cinemaAlphabet.innerHTML = cinemaMainAlphabet[1];
});
cinemali[2].addEventListener('click',function(){
    cinemaMainTitle.innerHTML = cinemaMainTitleArray[2];
    cinemaAlphabet.innerHTML = cinemaMainAlphabet[2];
});
cinemali[3].addEventListener('click',function(){
    cinemaMainTitle.innerHTML = cinemaMainTitleArray[3];
    cinemaAlphabet.innerHTML = cinemaMainAlphabet[3];
});
cinemali[4].addEventListener('click',function(){
    cinemaMainTitle.innerHTML = cinemaMainTitleArray[4];
    cinemaAlphabet.innerHTML = cinemaMainAlphabet[4];
});
cinemali[5].addEventListener('click',function(){
    cinemaMainTitle.innerHTML = cinemaMainTitleArray[5];
    cinemaAlphabet.innerHTML = cinemaMainAlphabet[5];
});

const cinemaMainTitleArray = [
    'Absolute Cinema Expeience.<br><span>4DX</span>',
    'PREMIUM & COZY CINEMA.<br><span>GOLD CLASS</span>',
    'Never Compromise.<br><span>IMAX</span>',
    "World's first multi-projection<br><span>SCREEN　X</span>",
    'Overwhelming & Realistic<br><span>STARIUM</span>',
    'Presrigious Cinema & Fine Dining<br><span>CINE de CHEF</span>'
];
const cinemaMainAlphabet = ['4','G','I','X','S','C'];



function cinemaSmallIndexChange(id){
    console.log(id);
}