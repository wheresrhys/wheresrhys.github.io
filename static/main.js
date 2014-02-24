(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    //
    // Add interactivity to accordions and download images if not on mobile
    // 


    var container = document.querySelectorAll('.fake-json')[0],
        portfolioLinks = document.querySelectorAll('.accordion>li>span>a'),

        cloneLink = function(el) {
            var clone = document.createElement('a');
            clone.setAttribute('href', el.href);
            clone.textContent = el.textContent;
            return clone;
        };


    // download images if screen is wide enough
    var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (screenWidth > 320) {
        var images = document.getElementsByTagName('img');
        Array.prototype.forEach.call(images, function(img) {
            img.setAttribute('src', img.getAttribute('data-src'));
        })
    }



    // Duplicate the titel and link at the top of teh content boxes
    // TODO - wrap the image in a link too
    Array.prototype.forEach.call(portfolioLinks, function(el) {
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

        h2.appendChild(cloneLink(el));

        content.insertBefore(h2, firstProperChild);
    });


    // Add event handlers to open and close teh accordions
    container.addEventListener('click', function(ev) {
        var link = ev.target;
        li = link.parentNode.parentNode;
        if (link.nodeName === 'A' && li.parentNode.className.indexOf('accordion') > -1) {
            var open = container.querySelectorAll('.expanded');

            if (open.length && open[0] !== li) {
                open[0].className = '';
            }

            li.className = (li.className === 'expanded') ? '' : 'expanded';
            ev.cancelBubble = true;
            ev.preventDefault();
            ev.stopPropagation();
            return false;
        }

    });
},{}],2:[function(require,module,exports){
//
// Carry out any formatting that requires js
// 

// carry out formatting for js operators and other symbols
var nonStrings = document.querySelectorAll('.fake-json dd, .fake-json li');

nonStrings = Array.prototype.filter.call(nonStrings, function(el) {
    return !el.childElementCount;
});

nonStrings.forEach(function(el) {
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
var age = document.getElementById('age');

age.innerHTML = '0.' + ((new Date()).getFullYear() - 1981) / 10;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvd2hlcmVzcmh5cy9TaXRlcy93aGVyZXNyaHlzL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvd2hlcmVzcmh5cy9TaXRlcy93aGVyZXNyaHlzL3NyYy9hY2NvcmRpb24uanMiLCIvVXNlcnMvd2hlcmVzcmh5cy9TaXRlcy93aGVyZXNyaHlzL3NyYy9mYWtlLWpzb24uanMiLCIvVXNlcnMvd2hlcmVzcmh5cy9TaXRlcy93aGVyZXNyaHlzL3NyYy9oaWRlLXVybC1iYXIuanMiLCIvVXNlcnMvd2hlcmVzcmh5cy9TaXRlcy93aGVyZXNyaHlzL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiICAgIC8vXG4gICAgLy8gQWRkIGludGVyYWN0aXZpdHkgdG8gYWNjb3JkaW9ucyBhbmQgZG93bmxvYWQgaW1hZ2VzIGlmIG5vdCBvbiBtb2JpbGVcbiAgICAvLyBcblxuXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWtlLWpzb24nKVswXSxcbiAgICAgICAgcG9ydGZvbGlvTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uPmxpPnNwYW4+YScpLFxuXG4gICAgICAgIGNsb25lTGluayA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBlbC5ocmVmKTtcbiAgICAgICAgICAgIGNsb25lLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH07XG5cblxuICAgIC8vIGRvd25sb2FkIGltYWdlcyBpZiBzY3JlZW4gaXMgd2lkZSBlbm91Z2hcbiAgICB2YXIgc2NyZWVuV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggPiAwKSA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xuXG4gICAgaWYgKHNjcmVlbldpZHRoID4gMzIwKSB7XG4gICAgICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaW1hZ2VzLCBmdW5jdGlvbihpbWcpIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICAvLyBEdXBsaWNhdGUgdGhlIHRpdGVsIGFuZCBsaW5rIGF0IHRoZSB0b3Agb2YgdGVoIGNvbnRlbnQgYm94ZXNcbiAgICAvLyBUT0RPIC0gd3JhcCB0aGUgaW1hZ2UgaW4gYSBsaW5rIHRvb1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwocG9ydGZvbGlvTGlua3MsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpLFxuICAgICAgICAgICAgZmlyc3RQcm9wZXJDaGlsZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNoaWxkLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH0oKSk7XG5cbiAgICAgICAgaDIuYXBwZW5kQ2hpbGQoY2xvbmVMaW5rKGVsKSk7XG5cbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoaDIsIGZpcnN0UHJvcGVyQ2hpbGQpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBBZGQgZXZlbnQgaGFuZGxlcnMgdG8gb3BlbiBhbmQgY2xvc2UgdGVoIGFjY29yZGlvbnNcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgICB2YXIgbGluayA9IGV2LnRhcmdldDtcbiAgICAgICAgbGkgPSBsaW5rLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKGxpbmsubm9kZU5hbWUgPT09ICdBJyAmJiBsaS5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdhY2NvcmRpb24nKSA+IC0xKSB7XG4gICAgICAgICAgICB2YXIgb3BlbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kZWQnKTtcblxuICAgICAgICAgICAgaWYgKG9wZW4ubGVuZ3RoICYmIG9wZW5bMF0gIT09IGxpKSB7XG4gICAgICAgICAgICAgICAgb3BlblswXS5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gKGxpLmNsYXNzTmFtZSA9PT0gJ2V4cGFuZGVkJykgPyAnJyA6ICdleHBhbmRlZCc7XG4gICAgICAgICAgICBldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9KTsiLCIvL1xuLy8gQ2Fycnkgb3V0IGFueSBmb3JtYXR0aW5nIHRoYXQgcmVxdWlyZXMganNcbi8vIFxuXG4vLyBjYXJyeSBvdXQgZm9ybWF0dGluZyBmb3IganMgb3BlcmF0b3JzIGFuZCBvdGhlciBzeW1ib2xzXG52YXIgbm9uU3RyaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWtlLWpzb24gZGQsIC5mYWtlLWpzb24gbGknKTtcblxubm9uU3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChub25TdHJpbmdzLCBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhZWwuY2hpbGRFbGVtZW50Q291bnQ7XG59KTtcblxubm9uU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MLnJlcGxhY2UoLyhcXHNvclxcc3xcXHNhbmRcXHN8XFwofFxcKSkvZywgZnVuY3Rpb24oJDAsICQxKSB7XG4gICAgICAgIHN3aXRjaCAoJDEpIHtcbiAgICAgICAgICAgIGNhc2UgJyBvciAnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnIDxiIGNsYXNzPVwib3BlcmF0b3JcIj58fDwvYj4gJztcbiAgICAgICAgICAgIGNhc2UgJyBhbmQgJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyA8YiBjbGFzcz1cIm9wZXJhdG9yXCI+JiY8L2I+ICc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnPGIgY2xhc3M9XCJwbGFpblwiPicgKyAkMSArICc8L2I+JztcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbi8vIGF1dG8gaW5jcmVtZW50IHZlcnNpb24gbnVtYmVyXG52YXIgYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZScpO1xuXG5hZ2UuaW5uZXJIVE1MID0gJzAuJyArICgobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSAtIDE5ODEpIC8gMTA7IiwiLy8gXG4vLyBIaWRlIHVybCBiYXIgb24gbW9iaWxlIGFuZCBpUGFkXG4vLyBcbnZhciBCT0RZX1NDUk9MTF9UT1AgPSBmYWxzZSxcbiAgICB3aW4gPSB3aW5kb3csXG4gICAgZG9jID0gZG9jdW1lbnQsXG5cbiAgICAvLyBTbyB3ZSBkb24ndCByZWRlZmluZSB0aGlzIGZ1bmN0aW9uIGV2ZXJ5dGltZSB3ZVxuICAgIC8vIHdlIGNhbGwgaGlkZVVybEJhclxuICAgIGdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gd2luLnBhZ2VZT2Zmc2V0IHx8IGRvYy5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCcgJiYgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jLmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG4gICAgfSxcblxuICAgIC8vIEl0IHNob3VsZCBiZSB1cCB0byB0aGUgbW9iaWxlXG4gICAgaGlkZVVybEJhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGhhc2gsIG9yIHZhciBCT0RZX1NDUk9MTF9UT1AgaGFzbid0IGJlZW4gc2V0IHlldCwgd2FpdCB0aWxsIHRoYXQgaGFwcGVuc1xuICAgICAgICBpZiAoIWxvY2F0aW9uLmhhc2ggJiYgQk9EWV9TQ1JPTExfVE9QICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgd2luLnNjcm9sbFRvKDAsIEJPRFlfU0NST0xMX1RPUCA9PT0gMSA/IDAgOiAxKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBoaWRlVXJsQmFyT25Mb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBib2R5Y2hlY2s7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIGhhc2gsIG9yIGFkZEV2ZW50TGlzdGVuZXIgaXMgdW5kZWZpbmVkLCBzdG9wIGhlcmVcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5oYXNoICYmIHdpbi5hZGRFdmVudExpc3RlbmVyKSB7XG5cbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byAxXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMSk7XG4gICAgICAgICAgICBCT0RZX1NDUk9MTF9UT1AgPSAxO1xuXG4gICAgICAgICAgICAvLyByZXNldCB0byAwIG9uIGJvZHlyZWFkeSwgaWYgbmVlZGVkXG4gICAgICAgICAgICBib2R5Y2hlY2sgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jLmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChib2R5Y2hlY2spO1xuICAgICAgICAgICAgICAgICAgICBCT0RZX1NDUk9MTF9UT1AgPSBnZXRTY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZVVybEJhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE1KTtcblxuICAgICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhdCBsb2FkLCBpZiB1c2VyIGhhc24ndCBzY3JvbGxlZCBtb3JlIHRoYW4gMjAgb3Igc28uLi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFNjcm9sbFRvcCgpIDwgMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRvIGhpZGUgYWRkciBiYXIgYXQgb25sb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlVXJsQmFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuaGlkZVVybEJhck9uTG9hZCgpOyIsInJlcXVpcmUoJy4vaGlkZS11cmwtYmFyJyk7XG5yZXF1aXJlKCcuL2Zha2UtanNvbicpO1xucmVxdWlyZSgnLi9hY2NvcmRpb24nKTsiXX0=
