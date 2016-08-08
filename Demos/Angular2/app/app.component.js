(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            directives: [app.BlogPostComponent]

        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
