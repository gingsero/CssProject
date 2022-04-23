var gnbBtnHome = document.getElementById("_gnb_btn_home")
var gnbBtnAbout = document.getElementById("_gnb_btn_about")
var gnbBtnPortfolio = document.getElementById("_gnb_btn_portfolio")
var gnbBtnBlog = document.getElementById("_gnb_btn_blog")
var gnbBtnContact = document.getElementById("_gnb_btn_contact")

/*var header = document.getElementsByTagName('header');
var $page = $('.page-start'); //색상이 변할 부분
var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
});

window.onscroll(function(){ //스크롤시
    var scrolled = window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
});*/


gnbBtnHome.onclick = function() { location.href = "#_home" }
gnbBtnAbout.onclick = function() { location.href = "#_about" }
gnbBtnPortfolio.onclick = function() { location.href = "#_portfolio" }
gnbBtnBlog.onclick = function() { location.href = "#_blog" }
gnbBtnContact.onclick = function() { location.href = "#_contact" }