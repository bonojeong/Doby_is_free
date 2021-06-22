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