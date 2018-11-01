(function () {
    'use strict';
    var addLink = function (url, label){
        return '<li><a href="' + url + ' target="_blank">' + label + '</a></li>';
    }
    var addButton = function (label, ulIcon){

        return '<button type="button" class="btn btn-default dropdown-toggle ex-btn-inverse"' +
            'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="hidden-xs">' + label + '&nbsp;<span class="caret"></span></span>' +
            '<span class="visible-xs icon-btn"><span class="icon ' + ulIcon + ' icon-inverse"></span></span>' +
            '</button>';
    }

    var processMenu = function (objMenu, node) {
        var navHtml = '';
        var ulClass = '';

        for (var menu in objMenu) {
            navHtml = navHtml + '<div class="btn-group">';
            var objLink = objMenu[menu];
            var ulIcon = objLink.ulIcon;
            navHtml = navHtml + addButton(menu, ulIcon);
            if(objLink.ulClass) {
                ulClass = ' ' + objLink.ulClass;
            }
            navHtml = navHtml + '<ul class="dropdown-menu dropdown-menu-right' + ulClass + '">';

            for (var i = 0; i < objLink.ulLink.length; i++) {
                navHtml = navHtml + addLink(objLink.ulLink[i].url, objLink.ulLink[i].label);
            }
            navHtml = navHtml + '</ul>';
            navHtml = navHtml + '</div>';
        }
        navHtml = navHtml + '</div>' +
                '<div class="btn-group">' +
               '<button type="button" class="btn btn-default dropdown-toggle ex-btn-inverse"' +
                   'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                   '<span class="hidden-xs">MyUSPTO&nbsp;</span>' +
                   '<span class="visible-xs icon-btn"><img src="images/myuspto-icon.svg"/></span>' +
                   '</button>';
        node.innerHTML = navHtml;
    }

    var loadMenu = function (){
        var globalNode = document.getElementById('global-header');
        if(typeof dynamicTransMenu100 !== 'undefined' && globalNode && globalNode.getElementsByClassName("dyn-menuarea")) {
           var node = globalNode.getElementsByClassName("dyn-menuarea")[0];
           processMenu(dynamicTransMenu100, node)
        }
    };

    loadMenu();
}());
