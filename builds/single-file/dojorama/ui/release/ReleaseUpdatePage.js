//>>built
require({cache:{"url:dojorama/ui/release/template/ReleaseUpdatePage.html":'\x3cdiv\x3e\n    \x3cdiv data-dojo-attach-point\x3d"navigationNode"\x3e\x3c/div\x3e\n    \n    \x3cdiv class\x3d"container main"\x3e\n        \x3cul data-dojo-attach-point\x3d"breadcrumbsNode"\x3e\x3c/ul\x3e\n        \x3ch1 data-dojo-attach-point\x3d"sectionTitleNode"\x3e\x3c/h1\x3e\n        \x3cul data-dojo-attach-point\x3d"actionsNode"\x3e\x3c/ul\x3e\n        \x3cdiv data-dojo-attach-point\x3d"notificationNode"\x3e\x3c/div\x3e\n    \n        \x3cdiv class\x3d"well well-large"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"formNode"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n    \n        \x3cdiv data-dojo-attach-point\x3d"playerNode"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-attach-point\x3d"footerNode"\x3e\x3c/div\x3e\n\x3c/div\x3e',
"url:dojorama/styles/inline/ui/release/ReleaseUpdatePage.css":"body {background: white;}"}});
define("dojorama/ui/release/ReleaseUpdatePage","dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojomat/_AppAware dojomat/_StateAware ../_global/mixin/_NavigationMixin ../_global/mixin/_PlayerMixin ../_global/mixin/_NotificationMixin ../_global/mixin/_FooterMixin ./mixin/_ReleaseBreadcrumbsMixin ./mixin/_ReleaseActionsMixin ./mixin/_ReleaseComponentTitleMixin ./widget/ReleaseUpdateFormWidget ../../service/release-store dojo/topic dojo/_base/lang dojo/text!./template/ReleaseUpdatePage.html dojo/i18n!./nls/ReleaseUpdatePage dojo/text!../../styles/inline/ui/release/ReleaseUpdatePage.css".split(" "),function(d,
e,f,g,h,k,l,m,n,p,q,r,s,t,b,c,u,w,v){return d([e,f,g,h,k,l,m,n,p,q,r],{router:null,request:null,session:null,notification:null,templateString:u,formWidget:null,releaseStore:null,constructor:function(a){this.router=a.router;this.request=a.request;this.session=a.session;this.notification=a.notification},postCreate:function(){this.inherited(arguments);this.setCss(v,"all");this.formWidget=new s({store:t,releaseId:this.request.getPathParam("id")},this.formNode);this.setSubscriptions()},startup:function(){this.inherited(arguments);
this.showNavigation();this.showFooter();this.showReleaseActions();this.formWidget.startup();this.formWidget.show()},setSubscriptions:function(){this.own(b.subscribe("ui/release/widget/ReleaseUpdateFormWidget/load-ok",c.hitch(this,function(a){this.setTitle(a.get("title"));this.setReleaseUpdateBreadcrumbsItems(a.get("title"));this.showReleaseBreadcrumbs();this.notification&&this.showNotification(this.notification)})));this.own(b.subscribe("ui/release/widget/ReleaseUpdateFormWidget/load-error",c.hitch(this,
function(a){this.handleError(a)})));this.own(b.subscribe("ui/release/widget/ReleaseUpdateFormWidget/load-not-found",c.hitch(this,function(){this.handleNotFound()})));this.own(b.subscribe("ui/release/widget/ReleaseUpdateFormWidget/submit",c.hitch(this,function(){this.hideNotification()})));this.own(b.subscribe("ui/release/widget/ReleaseUpdateFormWidget/update-ok",c.hitch(this,function(a){this.setTitle(a.model.get("title"));this.showNotification(a.notification)})))}})});