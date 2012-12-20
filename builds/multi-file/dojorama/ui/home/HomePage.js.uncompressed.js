require({cache:{
'url:dojorama/ui/home/template/HomePage.html':"<div>\n    <div data-dojo-attach-point=\"navigationNode\"></div>\n    <h1>Home</h1>\n    <div data-dojo-attach-point=\"playerNode\"></div>\n    <div data-dojo-attach-point=\"footerNode\"></div>\n</div>",
'url:dojorama/ui/home/css/HomePage.css':"body {background: yellow;}"}});
/*jshint strict:false */

define("dojorama/ui/home/HomePage", [
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "dojomat/_StateAware",
    "../_global/mixin/_NavigationMixin",
    "../_global/mixin/_PlayerMixin",
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
    _PlayerMixin,
    _FooterMixin,
    template,
    css
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware, _StateAware, _NavigationMixin, _PlayerMixin, _FooterMixin], {

        router: null,
        request: null,
        session: null,
        templateString: template,
        
        constructor: function (params) {
            this.router = params.router;
            this.request = params.request;
            this.session = params.session;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css, 'all');
            this.setTitle('Home');
        },

        startup: function () {
            this.inherited(arguments);
            this.showNavigation();
            this.showPlayer();
            this.showFooter();
        }
    });
});