//>>built
require({cache:{"url:dojorama/ui/release/template/ReleaseCreatePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n    \n    <div class="container main">\n        <ul data-dojo-attach-point="breadcrumbsNode"></ul>\n        <h1 data-dojo-attach-point="sectionTitleNode"></h1>\n        <ul data-dojo-attach-point="actionsNode"></ul>\n        <div data-dojo-attach-point="notificationNode"></div>\n    \n        <div class="well well-large">\n            <div data-dojo-attach-point="formNode"></div>\n        </div>\n    \n        <div data-dojo-attach-point="playerNode"></div>\n    </div>\n    \n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/styles/inline/ui/release/ReleaseCreatePage.css":"body {background: white;}"}});
define("dojorama/ui/release/ReleaseCreatePage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_PlayerMixin,../_global/mixin/_NotificationMixin,../_global/mixin/_FooterMixin,./mixin/_ReleaseBreadcrumbsMixin,./mixin/_ReleaseActionsMixin,./mixin/_ReleaseComponentTitleMixin,../release/widget/ReleaseCreateFormWidget,../../service/release-store,dojo/topic,dojo/_base/lang,dojo/text!./template/ReleaseCreatePage.html,dojo/i18n!./nls/ReleaseCreatePage,dojo/text!../../styles/inline/ui/release/ReleaseCreatePage.css".split(","),function(c,
d,e,f,g,h,i,j,k,l,m,n,o,p,q,b,r,s,t){return c([d,e,f,g,h,i,j,k,l,m,n],{router:null,request:null,session:null,templateString:r,formWidget:null,releaseStore:null,constructor:function(a){this.router=a.router;this.request=a.request;this.session=a.session},postCreate:function(){this.inherited(arguments);this.setCss(t,"all");this.setTitle(s.pageTitle);this.formWidget=new o({store:p},this.formNode);this.setReleaseCreateBreadcrumbsItems();this.setSubscriptions()},startup:function(){this.inherited(arguments);
this.showNavigation();this.showFooter();this.showReleaseBreadcrumbs();this.showReleaseActions();this.formWidget.startup();this.formWidget.show()},setSubscriptions:function(){this.own(q.subscribe("ui/release/widget/ReleaseCreateFormWidget/create-ok",b.hitch(this,function(a){this.setNotification(a.notification.message,a.notification.type);setTimeout(b.hitch(this,function(){this.push(this.router.getRoute("releaseUpdate").assemble({id:a.model.get("id")}))}),0)})))}})});