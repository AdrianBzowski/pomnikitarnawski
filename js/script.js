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
//$(window).scroll(function () {
//     
//})
function parallax() {
    var wScroll = $(window).scrollTop();
    $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.5-1300)+'px')
}

//mapa google

//function initMap() {
//        var uluru = {lat: -25.363, lng: 131.044};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 4,
//          center: uluru
//        });
//        var marker = new google.maps.Marker({
//          position: uluru,
//          map: map
//        });
//      }
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