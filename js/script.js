$(window).scroll(function () {

    if ($(this).scrollTop() > 200) {
        $('.topNav').fadeOut(300);
        
        $('#navigation').addClass('navBg');
    } else {
        $('.topNav').fadeIn(300);
        
        $('#navigation').removeClass('navBg');
    }
    
parallax();
   
})
function parallax() {
    var wScroll = $(window).scrollTop();
    if(window.innerWidth > 1200) {
    
    $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.5-1500)+'px')
    } else if(window.innerWidth < 1200 && window.innerWidth > 861) {
    $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.5-2000)+'px')
    } else if(window.innerWidth < 860 && window.innerWidth > 760) {
    $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.5-2300)+'px')
    } else if(window.innerWidth < 759 && window.innerWidth > 490) {
    $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.5-2600)+'px')
    }
}


//formularz code

$(document).ready(function() {
  $("html").on("submit","#contact_form",function(e){
    e.preventDefault();
    $("#send_form_status").html('').hide();
    var data=$("#contact_form").serialize();
    $.post("/send_form.php",data,function(res){
      $("#send_form_status").html(res.msg).show();
      if(res.status==1){ 
        $("#contact_form")[0].reset();
      } 
    });
  });
});

//lightbox 

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();

});

//tooltip for topNav icons
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

//SKILL COUNTER//

var a = 0;
$(window).scroll(function() {

    
  var oTop = $('body').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 6000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

//SMOOTH SCROLL//
$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 1.2;			//Scroll time
	var scrollDistance = 300;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});