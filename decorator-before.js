//Try following to see if element is created real custom element
var before = function(before, fn) {
    return function() {
        before.apply(this, arguments);
        return fn.apply(this, arguments);
    };
};
document.registerElement = before(function() { console.log('element ' + arguments[0] + ' registered') }, document.registerElement);

document.importNode = before(function() { console.log('template used') }, document.importNode);
