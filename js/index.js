let a = true
$(window).scroll(function() {
    var hT = $('.statistics__numbers').offset().top,
        hH = $('.statistics__numbers').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH) && (a === true)){
        $('.statistics__counter').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            a = false
        });
    }
});