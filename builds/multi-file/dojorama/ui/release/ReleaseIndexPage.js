//>>built
require({cache:{"url:dojorama/ui/release/template/ReleaseIndexPage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n    <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n    <ul data-dojo-attach-point="actionsNode"></ul>\n    <div data-dojo-attach-point="notificationNode"></div>\n    \n    <div class="well well-large">\n        <div data-dojo-attach-point="gridNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="playerNode"></div>\n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/release/css/ReleaseIndexPage.css":"body {background: white;}.field-title {}"}});
define("dojorama/ui/release/ReleaseIndexPage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_PlayerMixin,../_global/mixin/_NotificationMixin,../_global/mixin/_FooterMixin,./mixin/_ReleaseBreadcrumbsMixin,./mixin/_ReleaseActionsMixin,./mixin/_ReleaseComponentTitleMixin,./widget/ReleaseGridWidget,../../service/release-store,dojo/_base/lang,dojo/topic,dojo/text!./template/ReleaseIndexPage.html,dojo/text!./css/ReleaseIndexPage.css,dojo/i18n!./nls/ReleaseIndexPage".split(","),function(d,
e,f,g,h,i,j,k,l,m,n,o,p,q,b,c,r,s,t){return d([e,f,g,h,i,j,k,l,m,n,o],{router:null,request:null,session:null,templateString:r,gridWidget:null,constructor:function(a){this.router=a.router;this.request=a.request;this.session=a.session},postCreate:function(){this.inherited(arguments);this.setCss(s,"all");this.setTitle(t.pageTitle);this.gridWidget=new p({request:this.request,router:this.router,store:q},this.gridNode);this.setReleaseIndexBreadcrumbsItems();this.setSubscriptions()},startup:function(){this.inherited(arguments);
this.showNavigation();this.showFooter();this.showReleaseBreadcrumbs();this.showReleaseActions();this.gridWidget.startup()},setSubscriptions:function(){this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/unknown-error",b.hitch(this,function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/update-ok",b.hitch(this,function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/update-error",b.hitch(this,
function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/delete-ok",b.hitch(this,function(a){this.showNotification(a.notification)})));this.own(c.subscribe("ui/release/widget/ReleaseGridWidget/delete-error",b.hitch(this,function(a){this.showNotification(a.notification)})))}})});