(function() {
    "use strict";

    // set up scrolling when the DOM is ready
    $(document).ready(function() {
        /*
         * Scroll events can fire a lot. So only check the scrolling one time,
         * 200ms after the scroll.
         */
        $(window).scroll(function() {
            var timeout;

            if (!timeout) {
                timeout = setTimeout(function () {
                    clearTimeout(timeout);
                    timeout = null;
                    if ($(this).scrollTop() > 50) {
                        $('#usptoGlobalHeader').addClass("scrollFade");
                    } else {
                        $('#usptoGlobalHeader').removeClass("scrollFade");
                    } // if
                }, 200);
            } // if

        });

    });
})();