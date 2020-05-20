var prevScrollpos = window.pageYOffset;
var cirlOver = 0;
var windowH = $(window).height();
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
	  	if (prevScrollpos > currentScrollPos) {
	    	$(".navbar-menu-top").css({"top":"0","background-color":"rgba(0, 0, 0, 0.7"});
	    	$(".navbar-menu-top").removeClass('py-4');
	  	}
	  	else{
	  		
	    	$(".navbar-menu-top").css({"top":"-10em","background-color":"transparent"});
	  	}
  	prevScrollpos = currentScrollPos;
 	if(currentScrollPos==0){
 		$(".navbar-menu-top").addClass('py-4');
  		$(".navbar-menu-top").css({"background-color":"transparent"});
  	}
	var slideBottom = $(".slide-bottom");
	slideBottom.each(function() {
	  	var xpos = $(this).offset().top;
	  	var x22 = xpos - windowH -50;
	  	if(x22 <= currentScrollPos){
			if($(this).hasClass('ani-slideFromBottom')){}
			else{
		  		$(this).addClass('ani-slideFromBottom');
		  	}
	  	}
	});
	var slideRight = $(".slide-right");
	slideRight.each(function() {
	  	var xpos = $(this).offset().top;
	  	var x22 = xpos - windowH;
	  	if(x22 <= currentScrollPos){
			if($(this).hasClass('ani-slideFromRight')){}
			else{
		  		$(this).addClass('ani-slideFromRight');
		  	}
	  	}
	});
	var slideLeft = $(".slide-left");
	slideLeft.each(function() {
	  	var xpos = $(this).offset().top;
	  	var x22 = xpos - windowH;
	  	if(x22 <= currentScrollPos){
			if($(this).hasClass('ani-slideFromLeft')){}
			else{
		  		$(this).addClass('ani-slideFromLeft');
		  	}
	  	}
	});
	var cirPos=$('#circleBar').offset().top;
	if(currentScrollPos >= cirPos - windowH){
		if (cirlOver === 0) {
		cirl('.round');
		cirlOver = 1;

	}}
}

$('.sub-solution').hover(
	function(){
	$('#subSolutionMenu').toggle();
});
$('.sub-about').hover(
	function(){
	$('#subAboutMenu').toggle();
	var xx = $(this).width();
	$('.magic-line').css({'width':xx,'margin-left':xx});
	console.log(xx);
});
var myIndex = 0;var firstSlide = 0;
var x = document.getElementsByClassName("top-slider-item");
$('.top-slider-item').click(function(){
	myIndex = $(this).index();
	var t = $(this).data('target');
	$('.clip-me>img').removeClass('img-topSlider-active');

	var t2 = $(t).data('target');
	$('.top-slider>div').removeClass('top-slider-active');
	
	$(t).addClass('img-topSlider-active');
	$(t2).addClass('top-slider-active');

	$('.top-slider-item').removeClass('top-slider-active');
	var xx = $(this);
	xx.addClass('top-slider-active');

	myIndex++;if (myIndex >= x.length) {myIndex = 0;}
});


function carousel(e) {
  var i;
  
  for (i = 0; i < x.length; i++) {
  		if(i == e)
  		{
    		x[i].click();
    		break;
  		}
	}  
}
function ani(){
	carousel(myIndex);
}
$(function (){
	//setTimeout(ani, 8000);
	var interval;
	if(firstSlide === 0){
	 interval = setInterval(ani, 0);firstSlide=1;}

    $('.top-slider-item').click(function () {
        clearInterval(interval);
        interval = setInterval(ani, 6000);
    });
});

function cirl(el){
	$(el).circleProgress({fill:{color:'#007399'}}).on('circle-animation-progress', function(event, progress, stepValue){
		$(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
	})
}

$('.btn-duan.duan-all').click(function(){
	$('#img-duan-dalam').find('.duan-web').show('300');
	$('#img-duan-dalam').find('.duan-mobi').show('300');
	addduan($(this));
});
$('.btn-duan.duan-web').click(function(){
	$('#img-duan-dalam').find('.duan-web').show('300');
	$('#img-duan-dalam').find('.duan-mobi').hide('300');
	addduan($(this));
});
$('.btn-duan.duan-mobi').click(function(){
	$('#img-duan-dalam').find('.duan-web').hide('300');
	$('#img-duan-dalam').find('.duan-mobi').show('300');
	addduan($(this));

});

function addduan(e){
	var xx = $('.btn-duan');
	//for (var i = 0; i < xx.length; i++) {
		if(xx.hasClass('duan-active')){
			xx.removeClass('duan-active');
			console.log(' i = 1');
		}
		e.addClass('duan-active');

}

/*-----------open modal*/
var viewMode = $('.view-modal');
var viewNext, viewCurr, viewPrev,viewLink,viewCont;
var currentPar,nextPar, prevPar;
var eLast,eFirst;
viewMode.on('click', function(){
	currentPar = $(this).parents('.img-smlr-i');
	viewLink = currentPar.find('.sanpham-info-img>img').attr('src');
	//var c = currentPar.find('.img-smlr-i');
	//var c = currentPar.next();
	//var cc=c.find('.sanpham-info-img>img').attr('src');
	viewCont = currentPar.find('.sanpham-info-img>img').attr('alt');
	$('.modal-body').html('<img src="'+viewLink+'">');
	$('.img-alt').html(viewCont);
});

var screenView = $('#dynamic-content');
screenView.on('click',function(e){
	var mousePos = e.pageX;
	var winWhafl = $(window).width()/2;
	eLast = currentPar.is(':last-child');
	eFirst = currentPar.is(':first-child');

	if(mousePos > winWhafl)
	{
		if(eLast === false)
		{
			currentPar = currentPar.next();
			viewLink = currentPar.find('.sanpham-info-img>img').attr('src');
			$('.modal-body').html('<img src="'+viewLink+'">');
			viewCont = currentPar.find('.sanpham-info-img>img').attr('alt');
			$('.img-alt').html(viewCont);
		}
	}else{
		if(eFirst === false){
			currentPar = currentPar.prev();
			viewLink = currentPar.find('.sanpham-info-img>img').attr('src');
			$('.modal-body').html('<img src="'+viewLink+'">');
			viewCont = currentPar.find('.sanpham-info-img>img').attr('alt');
			$('.img-alt').html(viewCont);
		}
	}
});