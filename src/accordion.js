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


    // Duplicate the titleand link at the top of teh content boxes
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
            if (li.className === 'expanded') {
                // download images if screen is wide enough
                var screenWidth = document.documentElement.clientWidth;

                if (screenWidth >= 500) {
                    var img = li.getElementsByTagName('img');

                    if (img.length) {
                        img = img[0];
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