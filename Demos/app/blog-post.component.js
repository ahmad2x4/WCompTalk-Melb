//Try following to see if element is created real custom element
//document.createElement('blog-post').__proto__ !== HTMLUnknownElement.prototype

(function(app) {
    app.BlogPostComponent =
        ng.core.Component({
            selector: 'blog-post',
            templateUrl: 'app/blog-post.html',
            inputs : ['postTitle'], // Equivalent to @Input('myValue')
            styles: ['p { color: red; }'],  //scoped style see document header -> style
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
