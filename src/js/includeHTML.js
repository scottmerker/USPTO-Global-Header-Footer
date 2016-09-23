(function() {
    "use strict";

    /*
     * Include HTML found in <div> elements marked with an include-html
     * attribute.
     * Example:  <div include-html="header.html"></div>
     *
     * Based on code from:
     *    http://www.w3schools.com/lib/w3data.js
     */
    function includeHTML() {
        var elementList,        // list of all div elements
            newDiv,             // copy of a div element
            file,               // HTML file to be included
            xhttp;

        /*
         * get all of the div elements in the document that have the
         * include-html attribute
         */
        elementList = $("div[include-html]");
        for (var i = 0, len = elementList.length; i < len; i++) {
            // create a copy of the div element, but not any descendants
            newDiv = elementList[i].cloneNode(false);
            file = elementList[i].getAttribute("include-html");

            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                /*
                 * if the request is ready, the response is ready, and the status
                 * is OK, then the file has been read
                 */
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    // remove the include-html tag
                    newDiv.removeAttribute("include-html");
                    // put the file contents in <div>contents</div>
                    newDiv.innerHTML = xhttp.responseText;
                    elementList[i].parentNode.replaceChild(newDiv, elementList[i]);
                    includeHTML();
                } // if
            };
            xhttp.open("GET", file, true);  // open the connection
            xhttp.send();                   // send the request

            return;
        } //for
    } // includeHTML()

    // read in the scripts when the DOM is ready
    $( document ).ready(function() {
        includeHTML();
    });

})();