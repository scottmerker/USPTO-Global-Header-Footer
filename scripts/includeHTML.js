(function() {
    "use strict";

    /*
     * Include HTML found in <div> elements marked with a data-include-html
     * attribute.
     * Example:  <div data-include-html="header.html"></div>
     */
    function includeHTML() {
        var divList,        // list of all div elements
            file;           // HTML file to be included

        /*
         * get all of the div elements in the document that have the
         * data-include-html custom attribute
         */
        divList = $("div[data-include-html]");

        // cache the length for speed
        for (var i = 0, len = divList.length; i < len; i++) {
            // retrieve the filename
            file = divList[i].getAttribute("data-include-html");
            // load the file
            $(divList[i]).load(file, function(responseTxt, statusTxt, xhr) {
                /*
                if (statusTxt == "success") {
                    alert("success: loaded external content");
                } //if
                 */
                if (statusTxt == "error") {
                    alert("error: " + xhr.status + ": " + xhr.statusText);
                } // if
            });
        } //for
    } // includeHTML()

    // read in the scripts when the DOM is ready
    $(document).ready(function() {
        includeHTML();
    });
})();