$(window).scroll(function () {

    if ($(this).scrollTop() > 200) {
        $('.topNav').fadeOut(300);
        
        $('#navigation').addClass('navBg');
    } else {
        $('.topNav').fadeIn(300);
        
        $('#navigation').removeClass('navBg');
    }
    

});
