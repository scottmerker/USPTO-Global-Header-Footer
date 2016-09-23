/* 
 Global Footer JS for USPTO
 */
var resizeComplete;

function checkPageWidth() {
    var windowsize = window.innerWidth,
        el = $('.footer-menu-list');

    if (windowsize > 767) {
        //$('.footer-menu-list').addClass('in');
        el.collapse('show');
    } else if (windowsize < 768) {
        //$('.footer-menu-list').removeClass('in');
        el.collapse('hide');
    }
} // checkPageWidth()

$(window).resize(function () {
    clearTimeout(resizeComplete);
    resizeComplete = setTimeout(checkPageWidth, 100);
});

// run when the page is completely loaded
$(document).ready(function() {
    setTimeout(checkPageWidth,1000);
});
