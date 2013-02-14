(function () {

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