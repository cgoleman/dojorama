//>>built
define("dojorama/ui/home/HomePage","dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojomat/_AppAware dojomat/_StateAware ../_global/mixin/_NavigationMixin ../_global/mixin/_PlayerMixin ../_global/mixin/_FooterMixin dojo/_base/lang dojo/dom-attr dojo/query dojo/on dojo/text!./template/HomePage.html dojo/text!../../styles/inline/ui/home/HomePage.css".split(" "),function(e,f,g,h,k,l,m,n,c,p,q,r,s,t){return e([f,g,h,k,l,m,n],{router:null,request:null,session:null,templateString:s,constructor:function(a){this.router=
a.router;this.request=a.request;this.session=a.session},postCreate:function(){this.inherited(arguments);this.setCss(t,"all");this.setTitle("Home");q("a.push",this.domNode).forEach(c.hitch(this,function(a){var b,d=this.router.getRoute(p.get(a,"data-dojorama-route"));d&&(b=d.assemble(),a.href=b,this.own(r(a,"click",c.hitch(this,function(a){a.preventDefault();this.push(b)}))))}))},startup:function(){this.inherited(arguments);this.showNavigation();this.showPlayer();this.showFooter()}})});
require({cache:{"url:dojorama/ui/home/template/HomePage.html":'\x3cdiv\x3e\n    \x3cdiv data-dojo-attach-point\x3d"navigationNode"\x3e\x3c/div\x3e\n    \n    \x3cdiv class\x3d"jumbotron subhead"\x3e\n        \x3cdiv class\x3d"container"\x3e\n            \x3ch1\x3eDojorama\x3c/h1\x3e\n            \x3cp class\x3d"lead"\x3eSingle page demo application based on Dojo, Twitter Bootstrap and history API\x3c/p\x3e\n            \x3cp\x3e\n                \x3ca onclick\x3d"_gaq.push([\'_trackEvent\', \'Jumbotron actions\', \'Download\', \'Download Dojorama\']);" class\x3d"btn btn-primary btn-large" href\x3d"http://github.com/sirprize/dojorama"\x3eDownload\x3c/a\x3e\n                \n                \x3ca onclick\x3d"_gaq.push([\'_trackEvent\', \'Jumbotron actions\', \'Tutorial\', \'Dojorama Tutorial\']);" class\x3d"btn btn-success btn-large" href\x3d"http://sirprize.me/scribble/dojorama-introduction-building-a-dojo-single-page-application/"\x3eTutorial\x3c/a\x3e\n            \x3c/p\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv class\x3d"container main"\x3e\n        \x3cdiv class\x3d"well well-large"\x3e\n            \x3cp\x3eThis is a live demo application for the tutorial: \x3ca href\x3d"http://sirprize.me/scribble/dojorama-introduction-building-a-dojo-single-page-application/"\x3eBuilding a Dojo single page application\x3c/a\x3e. This fictional application is all about music and it\'s the place for the website owners to manage their music.\x3c/p\x3e\n            \n            \x3cp\x3eIf you\'re visiting with a decently modern browser, you\'ll be able to play some music in the player below and keep listening while browsing around. \x3ca href\x3d"#" data-dojorama-route\x3d"releaseCreate" class\x3d"push"\x3eStart here\x3c/a\x3e and create a new release.\x3c/p\x3e\n        \x3c/div\x3e\n        \n        \x3cdiv data-dojo-attach-point\x3d"playerNode"\x3e\x3c/div\x3e\n\n        \x3cdiv class\x3d"well well-large"\x3e\n            \x3cp\x3eDojorama is built on top of these fine libraries:\x3c/p\x3e\n            \x3cul\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/dojo/dojo"\x3edojo/dojo\x3c/a\x3e - The Dojo Toolkit\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/dojo/util"\x3edojo/utils\x3c/a\x3e - Dojo build tool and unit testing (DOH)\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/SitePen/dgrid"\x3eSitePen/dgrid\x3c/a\x3e - Dojo grid widget\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/kriszyp/put-selector"\x3ekriszyp/put-selector\x3c/a\x3e - DOM manipulation (dependency of dgrid)\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/kriszyp/xstyle"\x3ekriszyp/xstyle\x3c/a\x3e - CSS loader (dependency of dgrid)\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/twbs/bootstrap"\x3etwbs/bootstrap\x3c/a\x3e - Frontend framework (CSS only)\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/scottschiller/SoundManager2"\x3escottschiller/SoundManager2\x3c/a\x3e - JavaScript sound API\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/mijit"\x3esirprize/mijit\x3c/a\x3e - Essential Dijit stuff (\x3ccode\x3e_WidgetBase\x3c/code\x3e, \x3ccode\x3e_TemplatedMixin\x3c/code\x3e and \x3ccode\x3eregistry\x3c/code\x3e)\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/dojomat"\x3esirprize/dojomat\x3c/a\x3e - Application controller\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/routed"\x3esirprize/routed\x3c/a\x3e - Routing\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/dobolo"\x3esirprize/dobolo\x3c/a\x3e - Dojo port of some Twitter Bootstrap JavaScript components\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/dojo-data-model"\x3esirprize/dojo-data-model\x3c/a\x3e - Data model for Dojo Applications\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/dojo-form-controls"\x3esirprize/dojo-form-controls\x3c/a\x3e - Dojo widgets for native form controls\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/dojo-local-storage"\x3esirprize/dojo-local-storage\x3c/a\x3e - LocalStorage wrapper providing dojo/store interface\x3c/li\x3e\n                \x3cli\x3e\x3ca href\x3d"http://github.com/sirprize/dojo-sm2-playlist"\x3esirprize/dojo-sm2-playlist\x3c/a\x3e - Dojo/SoundManager2 playlist\x3c/li\x3e\n            \x3c/ul\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-attach-point\x3d"footerNode"\x3e\x3c/div\x3e\n\x3c/div\x3e',"url:dojorama/styles/inline/ui/home/HomePage.css":".jumbotron {position: relative; padding: 40px 0; color: #333; text-align: center; background: #F5F5F5;}.jumbotron h1 {font-size: 80px; font-weight: bold; letter-spacing: -1px; line-height: 1;}.jumbotron p {font-size: 24px; font-weight: 300; line-height: 30px; margin-bottom: 30px;}.jumbotron a {color: #fff; color: rgba(255, 255, 255, 0.5); -webkit-transition: all 0.2s ease-in-out; -moz-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out;}.jumbotron a:hover {color: #fff; text-shadow: 0 0 10px rgba(255, 255, 255, 0.25);}.jumbotron .btn {padding: 14px 24px; font-size: 24px; font-weight: 200; color: #fff; border: 0; -webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 5px rgba(0, 0, 0, 0.25); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 5px rgba(0, 0, 0, 0.25); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 5px rgba(0, 0, 0, 0.25); -webkit-transition: none; -moz-transition: none; transition: none;}.masthead .btn:hover {-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 5px rgba(0, 0, 0, 0.25); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 5px rgba(0, 0, 0, 0.25); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 5px rgba(0, 0, 0, 0.25);}.masthead .btn:active {-webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1); -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1); box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);}.jumbotron .container {position: relative; z-index: 2;}.jumbotron:after {content: ''; display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; opacity: .4;}.masthead {padding: 70px 0 80px; margin-bottom: 0; color: #fff;}.masthead h1 {font-size: 120px; line-height: 1; letter-spacing: -2px;}.masthead p {font-size: 40px; font-weight: 200; line-height: 1.25;}.masthead-links {margin: 0; list-style: none;}.masthead-links li {display: inline; padding: 0 10px; color: rgba(255, 255, 255, 0.25);}.bs-docs-social {padding: 15px 0; text-align: center; background-color: #f5f5f5; border-top: 1px solid #fff; border-bottom: 1px solid #ddd;}.bs-docs-social-buttons {margin-left: 0; margin-bottom: 0; padding-left: 0; list-style: none;}.bs-docs-social-buttons li {display: inline-block; padding: 5px 8px; line-height: 1; *display: inline; *zoom: 1;}.subhead h1 {font-size: 60px;}.subhead p {margin-bottom: 20px;}.subhead .navbar {display: none;}"}});
//@ sourceMappingURL=HomePage.js.map