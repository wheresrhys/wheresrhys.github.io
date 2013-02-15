(function () {
  
  // If we cache this we don't need to re-calibrate everytime we call
  // the hide url bar
  var BODY_SCROLL_TOP = false;
  
  
  // So we don't redefine this function everytime we
  // we call hideUrlBar
  var getScrollTop = function () {
    
    var win = window,
      doc = document;
    
    return win.pageYOffset || doc.compatMode === 'CSS1Compat' && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
    
  };
  
  
  // It should be up to the mobile
  var hideUrlBar = function () {
    
    var win = window;
    
    // if there is a hash, or var BODY_SCROLL_TOP hasn't been set yet, wait till that happens
    if (!location.hash && BODY_SCROLL_TOP !== false) {
            
      win.scrollTo(0, BODY_SCROLL_TOP === 1 ? 0 : 1);
      
    }
  
  };

  
  var hideUrlBarOnLoad = (function () {
    
    var win = window,
      doc = win.document,
      bodycheck;
      
    // If there's a hash, or addEventListener is undefined, stop here
    if (!location.hash && win.addEventListener) {
      
      // scroll to 1
      window.scrollTo(0, 1);
      BODY_SCROLL_TOP = 1;
      
      // reset to 0 on bodyready, if needed
      bodycheck = setInterval(function () {
        
        if (doc.body) {
          
          clearInterval(bodycheck);
          BODY_SCROLL_TOP = getScrollTop();
          hideUrlBar();
          
        }
      
      }, 15);
      
      win.addEventListener('load', function () {
        
        setTimeout(function () {
          
          // at load, if user hasn't scrolled more than 20 or so...
          if (getScrollTop() < 20) {
            
            // reset to hide addr bar at onload
            hideUrlBar();
            
          }
          
        }, 0);
        
      });
      
    }
    
  }());


  // carry out formatting for js operators and other symbols
  var nonStrings = document.querySelectorAll('.fake-json dd, .fake-json li');

  nonStrings = Array.prototype.filter.call(nonStrings, function (el) {
    return !el.childElementCount;
  });

  nonStrings.forEach(function(el) {
    el.innerHTML = el.innerHTML.replace(/(\sor\s|\sand\s|\(|\))/g, function ($0, $1) {
      switch ($1) {
        case ' or ' :
          return ' <b class="operator">||</b> ';         
        case ' and ' :
          return ' <b class="operator">&&</b> ';
        default :
          return '<b class="plain">' + $1 + '</b>';
      }
    }) 
  })

  // auto increment version number
  var age = document.getElementById('age');

  age.innerHTML =  '0.' + ((new Date()).getFullYear() - 1981)/10;

  // add listeners to show/hide portfolio panels
  var container = document.querySelectorAll('.fake-json')[0],
      portfolioLinks = document.querySelectorAll('.accordion>li>span>a'),
      cloneLink = (function () {
        // if (!!container.cloneNode) {
        //   return function (el) {
        //     return el.cloneNode();
        //   }
        // } else {
          return function (el) {
            var clone = document.createElement('a');
            clone.setAttribute('href', el.href);
            clone.textContent = el.textContent;
            return clone;
          }
        // }
        

      }());
      
      //TODO - wrap the image in a link too
  Array.prototype.forEach.call(portfolioLinks, function (el) {
    var content = el.parentNode.nextElementSibling;

    if (!content) {
      return false;
    }

    var h2 = document.createElement('h2');

    h2.appendChild(cloneLink(el));
    var firstProperChild = (function () {
      var child = content.firstChild;
      while (child.nodeType === 3) {
        child = child.nextSibling;
      }
      return child;
    }())
    content.insertBefore(h2, firstProperChild);
  });

  //download images 
  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if (screenWidth > 480) {
    var images = document.getElementsByTagName('img');
    Array.prototype.forEach.call(images, function (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
    })
  }

  container.addEventListener('click', function (ev) {
    if (ev.target.nodeName === 'A' && ev.target.parentNode.parentNode.parentNode.className.indexOf('accordion') > -1) {
      var open = container.querySelectorAll('.expanded');

      if (open.length && open[0] !== ev.target.parentNode.parentNode) {
        open[0].className = '';
      }
      ev.target.parentNode.parentNode.className = (ev.target.parentNode.parentNode.className === 'expanded') ? '' : 'expanded';
      ev.cancelBubble = true;
      ev.preventDefault();
      ev.stopPropagation();
      return false;
    }

  });




}());   