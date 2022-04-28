$(function(){

    var active = false;
    $('#mobile-button').on('click', function(){
        if (active === false) {
            $('.mobile-menu').css({
                'display': 'block'
            });
            $('#mobile-button i').removeClass('fa-bars');
            $('#mobile-button i').addClass('fa-circle-xmark');
            $('#mobile-button i').css({
                'color': '#f9ca0d',
            });
            active = true;
        } else {
            $('.mobile-menu').css({
                'display': 'none'
            });
            $('#mobile-button i').removeClass('fa-circle-xmark');
            $('#mobile-button i').addClass('fa-bars');
            $('#mobile-button i').css({
                'color': 'white',
            });
            active = false;
        }
    });

})