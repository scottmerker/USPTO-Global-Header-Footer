(function() {
    "use strict";

    /*
     * Collapse the header when the user scrolls down.
     */
    function collapseHeader() {
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
                        // collapse the header
                        $('#usptoGlobalHeader').addClass("collapse-header");
                    } else {
                        // restore the header
                        $('#usptoGlobalHeader').removeClass("collapse-header");
                    } // if
                }, 200);
            } // if
        });
    } // collapseHeader()

    // set up scrolling when the DOM is ready
    $(document).ready(function() {
        collapseHeader();
    });
})();