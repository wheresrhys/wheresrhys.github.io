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