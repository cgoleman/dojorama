/*jshint strict:false */

define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "../_global/mixin/_NavigationMixin",
    "../_global/mixin/_FooterMixin",
    "dojo/text!./template/HomePage.html",
    "dojo/text!./css/HomePage.css"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware,
    _StateAware,
    _NavigationMixin,
    _FooterMixin,
    template,
    css
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware, _NavigationMixin, _FooterMixin], {

        router: null,
        request: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
            this.request = params.request;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css, 'all');
            this.setTitle('Home');
        },

        startup: function () {
            this.inherited(arguments);
            this.showNavigation();
            this.showFooter();
        }
    });
});