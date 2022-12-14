$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    $( function() {
        $( "#accordion" ).accordion();
    } );
});



(function($) {

    $(document).ready(function(){
        $('.toggle-nav').on('click', function() {
            toggleNavigation($(this), $('.nav-pane'));
            changeLetters($(this));
        });

        function toggleNavigation(btn, nav) {
            btn.toggleClass('open');
            nav.toggleClass('open');
        }

        function changeLetters(btn) {
            var m = $('.toggle-nav span.m');
            var e = $('.toggle-nav span.e');
            var n = $('.toggle-nav span.n');
            var u = $('.toggle-nav span.u');

            e.toggleClass('btn-close');

            if(btn.hasClass('open'))
            {
                m.text("E");
                n.text("I");
                u.text("T");
            }
            else
            {
                m.text("M");
                n.text("N");
                u.text("U");
            }
        }
    });

})(jQuery);


