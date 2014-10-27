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

    h2.appendChild(el.cloneNode(true));

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