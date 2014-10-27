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