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