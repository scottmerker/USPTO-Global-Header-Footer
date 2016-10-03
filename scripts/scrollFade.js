(function() {
    "use strict";

    // set up scrolling when the DOM is ready
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.uspto-header-middle').fadeOut();
            } else {
                $('.uspto-header-middle').fadeIn();
            } // if
        });
    });
})();