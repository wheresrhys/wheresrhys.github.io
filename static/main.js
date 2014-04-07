(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Duplicate the title and link at the top of the content boxes
// TODO - wrap the image in a link too
Array.prototype.forEach.call(document.querySelectorAll('.accordion>li>span>a'), function(el) {
    var content = el.parentNode.nextElementSibling;

    if (!content) {
        return false;
    }

    var h2 = document.createElement('h2'),
        firstProperChild = (function() {
            var child = content.firstChild;
            while (child.nodeType === 3) {
                child = child.nextSibling;
            }
            return child;
        }());

    h2.appendChild(document.cloneNode(el));

    content.insertBefore(h2, firstProperChild);
});

var container = document.querySelector('.fake-json');
// Add event handlers to open and close teh accordions
container.addEventListener('click', function(ev) {
    var link = ev.target,
        li = link.parentNode.parentNode;
    if (link.nodeName === 'A' && li.parentNode.className.indexOf('accordion') > -1) {
        var open = container.querySelectorAll('.expanded');

        if (open.length && open[0] !== li) {
            open[0].className = '';
        }

        li.className = (li.className === 'expanded') ? '' : 'expanded';
        if (li.className === 'expanded') {
            // download images if screen is wide enough
            var screenWidth = document.documentElement.clientWidth;

            if (screenWidth >= 500) {
                var img = li.querySelector('img');

                if (img) {
                    img.setAttribute('src', img.getAttribute('data-src'));
                    li.className += ' hasImage';
                }
            }
        }
        ev.cancelBubble = true;
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    }

});
},{}],2:[function(require,module,exports){
// carry out formatting for js operators and other symbols
Array.prototype.filter.call(document.querySelectorAll('.fake-json dd, .fake-json li'), function(el) {
    return !el.childElementCount;
}).forEach(function(el) {
    el.innerHTML = el.innerHTML.replace(/(\sor\s|\sand\s|\(|\))/g, function($0, $1) {
        switch ($1) {
            case ' or ':
                return ' <b class="operator">||</b> ';
            case ' and ':
                return ' <b class="operator">&&</b> ';
            default:
                return '<b class="plain">' + $1 + '</b>';
        }
    });
});

// auto increment version number
document.getElementById('age').innerHTML = '0.' + ((new Date()).getFullYear() - 1981) / 10;
},{}],3:[function(require,module,exports){
// 
// Hide url bar on mobile and iPad
// 
var BODY_SCROLL_TOP = false,
    win = window,
    doc = document,

    // So we don't redefine this function everytime we
    // we call hideUrlBar
    getScrollTop = function() {
        return win.pageYOffset || doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
    },

    // It should be up to the mobile
    hideUrlBar = function() {
        // if there is a hash, or var BODY_SCROLL_TOP hasn't been set yet, wait till that happens
        if (!location.hash && BODY_SCROLL_TOP !== false) {
            win.scrollTo(0, BODY_SCROLL_TOP === 1 ? 0 : 1);
        }
    },

    hideUrlBarOnLoad = function() {
        var bodycheck;

        // If there's a hash, or addEventListener is undefined, stop here
        if (!location.hash && win.addEventListener) {

            // scroll to 1
            window.scrollTo(0, 1);
            BODY_SCROLL_TOP = 1;

            // reset to 0 on bodyready, if needed
            bodycheck = setInterval(function() {
                if (doc.body) {
                    clearInterval(bodycheck);
                    BODY_SCROLL_TOP = getScrollTop();
                    hideUrlBar();
                }
            }, 15);

            win.addEventListener('load', function() {
                setTimeout(function() {
                    // at load, if user hasn't scrolled more than 20 or so...
                    if (getScrollTop() < 20) {
                        // reset to hide addr bar at onload
                        hideUrlBar();
                    }
                }, 0);
            });
        }
    };

hideUrlBarOnLoad();
},{}],4:[function(require,module,exports){
require('./hide-url-bar');
require('./fake-json');
require('./accordion');
},{"./accordion":1,"./fake-json":2,"./hide-url-bar":3}]},{},[4])