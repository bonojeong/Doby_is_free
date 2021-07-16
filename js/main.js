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
const viewPort = document.documentElement.clientWidth;
console.log(document.documentElement.clientHeight);
console.log(viewPort);


console.log(indexchild);

let videoNum = 1;
let videostop = 0;

//mymenu 추가
$(document).ready(function(){
    $(".my_menu").load("myMenu/index.html");
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

// 스크롤시 이벤트 발생
eventcheckWeek = false;
eventcheckrecom = false;

let mainRecomRepeat;

let preLoadVideo = [];
function preload(){
    for(i=1;i<=4;i++){
        preLoadVideo[i] = `video/video${i}.mp4`;
    }
}
preload();+
document.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    
    if(((scrollTop+200) > (windowHeight*0.3) ) && !eventcheckWeek){
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
        video.src = preLoadVideo[videoNum];
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    else{
        videoNum -=1;
        video.src = preLoadVideo[videoNum];
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    for(i=0;i<4;i++){
        movieSlide[i].style.opacity = '0.4';
        bar[i].style.opacity = '0.2';
        bar[i].style.width = '10px';
    }
    movieSlide[videoNum-1].style.opacity = '1';
    bar[videoNum-1].style.opacity = '1';
    bar[videoNum-1].style.width = '100px';
};
nextBtn.onclick = function(){
    resetEffect();
    if(videoNum == 4){
        videoNum = 1;
        video.src = preLoadVideo[videoNum];
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    else{
        videoNum +=1;
        video.src = preLoadVideo[videoNum];
        indexchild[1].innerHTML = h2text[videoNum-1];
        indexchild[2].innerHTML = h2text2[videoNum-1];
        mainEffect();
    }
    for(i=0;i<4;i++){
        movieSlide[i].style.opacity = '0.4';
        bar[i].style.opacity = '0.2';
        bar[i].style.width = '10px';
    }
    movieSlide[videoNum-1].style.opacity = '1';
    bar[videoNum-1].style.opacity = '1';
    bar[videoNum-1].style.width = '100px';
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

let recomHeight = recommendSlide.offsetHeight;
const recomimg = recommendSlide.children;
let recomSlideNum = 0;



function recomSlideStart (){
    recomHeight = recommendSlide.offsetHeight;
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
const bigCard = document.querySelector('.bigcard_img');
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
                bigCard.src = `image/main4/bigCard_${id.alt.replace('카드','')}.png`;
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
const cinemaMainIndex = document.querySelector('.cinema_main_index');
const cinemaAlphabet = document.querySelector('.cinema_alphabet span');
const cinemali = document.querySelectorAll('.cinemaul li');

cinemali[0].addEventListener('click',function(){
    cinemaAlphabet.style.opacity = '0';
    cinemaMainTitle.style.transform = 'translateX(-150%)';
    cinemaMainIndex.style.transform = 'translateX(-150%)';
    setTimeout(function(){
        cinemaAlphabet.innerHTML = cinemaMainAlphabet[0];
        cinemaMainTitle.innerHTML = cinemaMainTitleArray[0];
        cinemaMainIndex.innerHTML = cinemaMainIndexArray[0];
        setTimeout(function(){
            cinemaAlphabet.style.opacity = '1';
            cinemaMainTitle.style.transform = 'translateX(0)';
            setTimeout(function(){
                cinemaMainIndex.style.transform = 'translateX(0)';
            },500);
        }, 200);
    }, 200);
});
cinemali[1].addEventListener('click',function(){
    cinemaAlphabet.style.opacity = '0';
    cinemaMainTitle.style.transform = 'translateX(-150%)';
    cinemaMainIndex.style.transform = 'translateX(-150%)';
    setTimeout(function(){
        cinemaAlphabet.innerHTML = cinemaMainAlphabet[1];
        cinemaMainTitle.innerHTML = cinemaMainTitleArray[1];
        cinemaMainIndex.innerHTML = cinemaMainIndexArray[1];
        setTimeout(function(){
            cinemaAlphabet.style.opacity = '1';
            cinemaMainTitle.style.transform = 'translateX(0)';
            setTimeout(function(){
                cinemaMainIndex.style.transform = 'translateX(0)';
            },500);
        }, 200);
    }, 200);
});
cinemali[2].addEventListener('click',function(){
    cinemaAlphabet.style.opacity = '0';
    cinemaMainTitle.style.transform = 'translateX(-150%)';
    cinemaMainIndex.style.transform = 'translateX(-150%)';
    setTimeout(function(){
        cinemaAlphabet.innerHTML = cinemaMainAlphabet[2];
        cinemaMainTitle.innerHTML = cinemaMainTitleArray[2];
        cinemaMainIndex.innerHTML = cinemaMainIndexArray[2];
        setTimeout(function(){
            cinemaAlphabet.style.opacity = '1';
            cinemaMainTitle.style.transform = 'translateX(0)';
            setTimeout(function(){
                cinemaMainIndex.style.transform = 'translateX(0)';
            },500);
        }, 200);
    }, 200);
});
cinemali[3].addEventListener('click',function(){
    cinemaAlphabet.style.opacity = '0';
    cinemaMainTitle.style.transform = 'translateX(-150%)';
    cinemaMainIndex.style.transform = 'translateX(-150%)';
    setTimeout(function(){
        cinemaAlphabet.innerHTML = cinemaMainAlphabet[3];
        cinemaMainTitle.innerHTML = cinemaMainTitleArray[3];
        cinemaMainIndex.innerHTML = cinemaMainIndexArray[3];
        setTimeout(function(){
            cinemaAlphabet.style.opacity = '1';
            cinemaMainTitle.style.transform = 'translateX(0)';
            setTimeout(function(){
                cinemaMainIndex.style.transform = 'translateX(0)';
            },500);
        }, 200);
    }, 200);
});
cinemali[4].addEventListener('click',function(){
    cinemaAlphabet.style.opacity = '0';
    cinemaMainTitle.style.transform = 'translateX(-150%)';
    cinemaMainIndex.style.transform = 'translateX(-150%)';
    setTimeout(function(){
        cinemaAlphabet.innerHTML = cinemaMainAlphabet[4];
        cinemaMainTitle.innerHTML = cinemaMainTitleArray[4];
        cinemaMainIndex.innerHTML = cinemaMainIndexArray[4];
        setTimeout(function(){
            cinemaAlphabet.style.opacity = '1';
            cinemaMainTitle.style.transform = 'translateX(0)';
            setTimeout(function(){
                cinemaMainIndex.style.transform = 'translateX(0)';
            },500);
        }, 200);
    }, 200);
});
cinemali[5].addEventListener('click',function(){
    cinemaAlphabet.style.opacity = '0';
    cinemaMainTitle.style.transform = 'translateX(-150%)';
    cinemaMainIndex.style.transform = 'translateX(-150%)';
    setTimeout(function(){
        cinemaAlphabet.innerHTML = cinemaMainAlphabet[5];
        cinemaMainTitle.innerHTML = cinemaMainTitleArray[5];
        cinemaMainIndex.innerHTML = cinemaMainIndexArray[5];
        setTimeout(function(){
            cinemaAlphabet.style.opacity = '1';
            cinemaMainTitle.style.transform = 'translateX(0)';
            setTimeout(function(){
                cinemaMainIndex.style.transform = 'translateX(0)';
            },500);
        }, 200);
    }, 200);
});



const cinemaMainTitleArray = [
    'Absolute Cinema Expeience.<br><span>4DX</span>',
    'PREMIUM & COZY CINEMA.<br><span>GOLD CLASS</span>',
    'Never Compromise.<br><span>IMAX</span>',
    "World's first multi-projection<br><span>SCREEN　X</span>",
    'Overwhelming & Realistic<br><span>STARIUM</span>',
    'Presrigious Cinema & Fine Dining<br><span>CINE de CHEF</span>'
];
const cinemaMainIndexArray = [
    "4DX는 영화의 장면에 맞추어 움직이는 모션시트와 더불어 바람, 빛, 안개, 향기, 진동 등의 다양한 환경 효과를 느낄 수 있는 오감 체험 특별 상영관입니다. 단순한 영화 관람을 넘어 관객들은 영화 속 주인공이 된 듯한 체험을 할 수 있으며, 장면마다 생생함을 극대화시키는 4DX 효과를 통해 영화에 더욱 몰입할 수 있습니다. 4DX는 기본이 되는 3가지 모션 <span>히브(Heave)</span>, <span>롤(Roll)</span>, <span>피치(Pitch)</span>를 혼합해 다양한 장면을 연출하며 <span>모션체어(Motion Chair)</span>와 특수 환경장비를 극장에 도입한 프리미엄 영화 포맷으로, 영화 장면에 따라 의자가 움직이거나 바람이 불고 향기가 납니다,",
    "최고의 몰입감을 주는 <span>Curved스크린</span>과 디테일한 사운드를 느끼실 수 있는 라인어웨이 스피커, 최상의 안락함을 주는 리클라이너 좌석까지 최고릐 관람 확경을 제공함과 동시에 웰컴음료/컴포트 패키지, 핸드폰 충전 서비스, 개인물품 수납 테이블 등 고객 맞춤형 서비스까지 제공되는 프리미엄 상영관입니다. CGV왕십리 골드 클래스에 최초 도입된 <span>FLEXOUND</span>는 필란드에서 연구, 생산된 고음질 개인증강오디오 시스템으로 각각의 시트마다. 정교하게 튜닝된 시스템이 기존 상영관의 오디오 시스템과 더불어 좌석 별 최적의 사운드 존을 만들어냅니다.",
    "MAX는 Image Maximum의 약자로 '인간이 볼 수 있는 한계까지 보여준다'는 의미입니다. 캐나다 IMAX사에서 개발한 필름 포멧으로 이 필름 포멧과 카메라를 사용해 촬영하며 아이맥스 스크린의 <span>시야 범위는 70˚</span>로, 사람의 최대 시야각보다 넓기 때문에 시야에 스크린을 가득 채워 몰입감을 극대화하는 효과가 있습니다. IMAX영화는 이로써 영화를 직접적으로 체험하는 느낌을 제공합니다. 고출력 6채널로 구성된 음향시스템을 구성하며 사운드 트랙을 DVD나 하드에 담아 재생하므로 음질의 손상이 없습니다. 따라서 일반 디지털 영화 상영 시 사용하는 <span>스피커나 앰프의 10배</span>에 가까운 출력을 지닙니다.",
    "ScreenX는 스크린의 경계를 넘어 극대화된 몰입감을 제공하는 <span>세계 최초 멀티프로젝션</span> 특별관입니다. 스크린을 넘어 스페이스가 되다! 지금까지 우리는 좁은 화면에 갇혀 있었습니다. ScreenX가 마치 현장에 있는 것처럼 실감나는 이유는 <span>270도</span>까지 스크린을 3면으로 확장하여 화면이 공간으로 느껴지기 때문입니다. 100여개의 ScreenX 특허 기술로 기존 영화관에서 볼 수 없던 공간감을 경험하세요.",
    "스타리움은 초대형 스크린과 초고해상도 디지털 영상에 <span>16채널 사운드 시스템</span>으로 구성된 프리미엄 상영관입니다. 이곳에선 현실을 압도하는 공간감을 느낄 수 있습니다. 최대 시야각을 보장하는 <span>초대형 실버스크린</span>과 좌석위치에 관계없이 동일하게 전달되는 사운드 시스템으로 고객님에게 영화를 아낌없이 즐길 수 있게 해줍니다. 스타리움은 센텀시티, 영등포에서 운영되고 있습니다. ",
    "특별한 초대의 시간에 진정한 품격을 더합니다. 꿈이 현실로 이루어지는 씨네드쉐프에서 소중한 분들과 함께 최고의 가치를 경험하십시오. NASA(미 항공 우주국)의 비행사 보호용 소재로 유명한 프리미엄 매트리스&베개 <span>브랜드 ‘템퍼’와의 콜라보레이션</span>으로 탄생한 세계 최초 리클라이닝 침대 영화관. 전 좌석에 머리, 상체, 다리의 각도가 자유자재로 조절되는 <span>리클라이닝 전동 침대</span>를 도입하여, 인체에 무리가 없는 최적의 편안함을 제공합니다. 무료로 제공되는 음료와 핑거푸드 외에도 좌석마다 단정하게 세팅된 슬리퍼, 옷걸이, 핸드폰 충전 케이블과 여성 관객을 배려한 블랭킷 등 섬세한 정성을 담은 최상의 서비스를 경험할 수 있습니다."
];
const cinemaMainAlphabet = ['4','G','I','X','S','C'];



function cinemaSmallIndexChange(id){
    console.log(id);
}

/*-------------------------------------------------------------------------------------*/
const brandLeft = document.querySelector('.brand_left');
const brandRight = document.querySelector('.brand_right');
const brandTitle = document.querySelector('.brand_title');
const brandTitlechild = brandTitle.children;
console.log(brandTitlechild[1]);
let brandNum1 = 0;
let brandNum2 = 0;

function brandEffect(){ 
    setTimeout(function(){
        setTimeout(function() {      
            brandTitlechild[0].style.transform = 'translateX(0)';
        }, 500);
        setTimeout(function() {      
            brandTitlechild[1].style.transform = 'translateX(0)';
        }, 1200);
        setTimeout(function() {      
            brandTitlechild[2].style.transform = 'translateX(0)';
        }, 2000);
    }, 500);
}
brandEffect();
setInterval(() =>{
    brandLeft.style.top = '-'+brandNum1*0.036+'%';
    brandNum1 +=1;
    if(brandNum1 == 2280){
        brandLeft.style.transition = '0ms';
        brandLeft.style.top = '0%';
        brandNum1 = 0;
        setTimeout(()=>{
            brandLeft.style.transition = '10ms';
        }, 50);
    }
},10);
setInterval(() =>{
    brandRight.style.top = brandNum2*0.070+'%';
    brandNum2 +=1;
    if(brandNum2 == 1200){
        brandRight.style.transition = '0ms';
        brandRight.style.top = '0%';
        brandNum2 = 0;
        setTimeout(()=>{
            brandRight.style.transition = '10ms';
        }, 50);
    }
},10);


/*--------------------------------------------------------------------------------------------*/