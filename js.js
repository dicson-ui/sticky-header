$(document).ready(function () {
    var hcHeight = $("header");
    var lastScrollTop = 0;
    var delta = 5;

    $(window).scroll(function () {
        // sticky
        var scrollposition = $(window).scrollTop();
        var navbarHeight = $("header").innerHeight();
        // console.log(scrollposition);
        if (navbarHeight <= scrollposition) {
            hcHeight.addClass("sticky");
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta) return;

            if (st > lastScrollTop && navbarHeight <= st) {
                // Scroll Down
                hcHeight.removeClass("reveal");
            } else if (st + $(window).height() < $(document).height()) {
                // Scroll Up
                hcHeight.addClass("animation reveal");
            }

            lastScrollTop = st;
        } else if (scrollposition == 0) {
            hcHeight.removeClass("animation reveal sticky");
        }
    });
});
