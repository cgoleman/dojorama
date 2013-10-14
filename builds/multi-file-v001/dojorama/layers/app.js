//>>built
require({cache:{"dojomat/_AppAware":function(){define(["dojo/_base/declare","dojo/topic"],function(g,c){return g([],{setStylesheets:function(b){c.publish("dojomat/_AppAware/stylesheets",b)},setCss:function(b,a){c.publish("dojomat/_AppAware/css",{css:b,media:a})},setTitle:function(b){c.publish("dojomat/_AppAware/title",{title:b})},setNotification:function(b,a){c.publish("dojomat/_AppAware/notification",{message:b,type:a})},handleNotFound:function(){c.publish("dojomat/_AppAware/not-found",{})},handleError:function(b){c.publish("dojomat/_AppAware/error",
b)}})})},"dojomat/_StateAware":function(){define(["dojo/_base/declare","dojo/topic"],function(g,c){return g([],{push:function(b){c.publish("dojomat/_StateAware/push-state",{url:b});document.body.scrollTop&&(document.body.scrollTop=0);document.documentElement.scrollTop&&(document.documentElement.scrollTop=0)}})})},"dojomat/Application":function(){define("routed/Request routed/Router dojo/has!dijit?dijit/registry:mijit/registry dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has dojo/on dojo/query dojo/topic dojo/dom-construct ./Notification ./Session dojo/domReady!".split(" "),
function(g,c,b,a,e,d,f,k,h,l,m,n,p){var q=function(){f.add("native-history-state",function(a){return void 0!==a.history&&void 0!==a.history.pushState})},r=function(){f.add("native-localstorage",function(a){var b=!1;try{b=void 0!==a.localStorage&&void 0!==a.localStorage.setItem}catch(d){}return b})};return a([],{lastRequest:null,router:new c,session:new p,notification:new n,stylesheetNodes:[],cssNode:null,pageNodeId:"page",refNode:null,constructor:function(a){d.mixin(this,a)},run:function(){q();r();
this.setSubscriptions();this.registerPopState();this.handleState()},setStylesheets:function(a){var b=function(a,b){var d=null,c=null,e=null,d=h("head link[rel\x3dstylesheet]");b&&b.href&&(d.length?(c=d[d.length-1],e="after"):(c=h("head script")[0],e="before"),d={rel:"stylesheet",media:b.media||"all",href:b.href},a[a.length]=m.create("link",d,c,e))};e.forEach(this.stylesheetNodes,function(a){m.destroy(a)});this.stylesheetNodes=[];a&&a.length?e.forEach(a,d.hitch(this,function(a){b(this.stylesheetNodes,
a)})):b(this.stylesheetNodes,a)},setCss:function(a,b){a=a||"";var d={media:b||"all"},c=h("head script")[0];this.cssNode&&m.destroy(this.cssNode);this.cssNode=m.create("style",d,c,"before");this.cssNode.styleSheet?this.cssNode.styleSheet.cssText=a:this.cssNode.innerHTML=a},setPageNode:function(){var a={id:this.pageNodeId},d=this.refNode||h("body")[0];b.byId(this.pageNodeId)&&b.byId(this.pageNodeId).destroyRecursive();m.create("div",a,d,"last")},handleState:function(a,b,d){var c;return function(){var e=
this,h=arguments,f=d&&!c;clearTimeout(c);c=setTimeout(function(){c=null;d||a.apply(e,h)},b);f&&a.apply(e,h)}}(function(){var a=null,b=new g(window.location.href);if(!this.lastRequest||!this.lastRequest.isSame(window.location.href))this.lastRequest=b,this.router.route(b),(a=this.router.getCurrentRoute())?a.run(b):this.makeNotFoundPage()},500,!0),registerPopState:function(){k(window,"popstate",d.hitch(this,function(a){this.handleState()}))},makePage:function(a,b,c,e){var h=function(b){this.setStylesheets(e);
this.setCss();this.setPageNode();b=new b({request:a,router:this.router,session:this.session,notification:this.notification.get()},this.pageNodeId);this.notification.clear();b.startup()};c.length?require(c,d.hitch(this,function(){require([b],d.hitch(this,h))})):require([b],d.hitch(this,h))},makeNotFoundPage:function(){alert("Page not found")},makeErrorPage:function(a){alert("An error has occured")},setSubscriptions:function(){l.subscribe("dojomat/_AppAware/css",d.hitch(this,function(a){this.setCss(a.css,
a.media)}));l.subscribe("dojomat/_AppAware/stylesheets",d.hitch(this,function(a){this.setStylesheets(a)}));l.subscribe("dojomat/_AppAware/title",d.hitch(this,function(a){window.document.title=a.title}));l.subscribe("dojomat/_AppAware/notification",d.hitch(this,function(a){this.notification.set(a)}));l.subscribe("dojomat/_AppAware/error",d.hitch(this,function(a){this.makeErrorPage(a)}));l.subscribe("dojomat/_AppAware/not-found",d.hitch(this,function(){this.makeNotFoundPage()}));l.subscribe("dojomat/_StateAware/push-state",
d.hitch(this,function(a){this.pushState(a)}))},pushState:function(a){f("native-history-state")?(history.pushState({},"",a.url),this.handleState()):window.location=a.url}})})},"routed/Request":function(){define([],function(){var g=function(a){return a.replace(/^\s+|\s+$/g,"")},c=function(a){a=a.split("?")[0].split("#")[0].replace(/\w+:\/\/[\w\d\._\-]*:?\d*/,"");return a.match(/^\//)?a:""},b=function(a){var b={};a=(a.split("?")[1]||"").split("#")[0];var d=null,c=null,k=null;if(a){d=a.split("\x26");
for(c=0;c<d.length;c+=1)k=d[c].split("\x3d"),b[g(decodeURIComponent(k[0]))]=g(decodeURIComponent(k[1]))}return b};return function(a){var e=c(g(decodeURIComponent(a))),d=(a.split("?")[1]||"").split("#")[0],f=b(a),k={};return{getPathname:function(){return e},getQueryString:function(){return d},getQueryParams:function(){return f},getPathParams:function(){return k},setPathParam:function(a,b){k[a]=b},getPathParam:function(a){return k[a]||null},getQueryParam:function(a){return f[a]||null},isSame:function(a){var d;
if(e!==c(a))return!1;a=b(a);for(d in f)if(f.hasOwnProperty(d)&&(void 0===a[d]||a[d]!==f[d]))return!1;for(d in a)if(a.hasOwnProperty(d)&&(void 0===f[d]||a[d]!==f[d]))return!1;return!0},debug:function(){console.log("getPathname(): ",this.getPathname());console.log("getQueryParams(): ",this.getQueryParams());console.log("getPathParams(): ",this.getPathParams())}}}})},"routed/Router":function(){define(["./Route"],function(g){return function(c){var b=null,a=[],e=null;for(e in c)c.hasOwnProperty(e)&&(a[e]=
c[e]);return{addRoute:function(b,c){a[b]=c},route:function(d){var c,e,h=[];for(c in a)if(a.hasOwnProperty(c)&&(h=a[c].match(d.getPathname()))){b=c;for(e in h)h.hasOwnProperty(e)&&d.setPathParam(e,h[e]);return d}return null},getCurrentRoute:function(){return a[b]||null},getCurrentRouteName:function(){return b},getRoute:function(b){return a[b]||void 0}}}})},"routed/Route":function(){define([],function(){return function(g,c){return{run:c,match:function(b){b=b.replace(/^\/|\/$/g,"").split("/");var a=
g.replace(/^\/|\/$/g,"").split("/"),c={},d=0,f=null;if(b.length!==a.length)return!1;for(d=0;d<b.length;d+=1)if(a[d].match(/^\:(\w*)$/))f=a[d].replace(/^\:(\w*)$/,"$1"),c[f]=decodeURIComponent(b[d]);else if(a[d]!==decodeURIComponent(b[d]))return!1;return c},assemble:function(b,a){for(var c="",d=null,d=null,f=0,k=g.replace(/^\/|\/$/g,"").split("/"),h=null,l=[],f=0;f<k.length;f+=1){if(k[f].match(/^\:(\w*)$/)){d=k[f].replace(/^\:(\w*)$/,"$1");if(void 0===b[d])throw Error('Missing param "'+d+'" for schema: "'+
g+'"');d=b[d]}else d=k[f];c+="/"+d}g.match(/\/$/)&&(c+="/");if(a){for(h in a)a.hasOwnProperty(h)&&l.push(h+"\x3d"+encodeURIComponent(a[h]));l.length&&(c+="?"+l.join("\x26"))}return c}}}})},"dojomat/Notification":function(){define(["dojo/_base/declare","dojo/_base/json","dojo/has","dojo/cookie"],function(g,c,b,a){return g([],{id:"dojomat-notification",get:function(){return b("native-localstorage")&&b("native-history-state")?c.fromJson(localStorage.getItem(this.id)):c.fromJson(a(this.id))},clear:function(){b("native-localstorage")&&
b("native-history-state")?localStorage.removeItem(this.id):a(this.id,null,{expires:-1,path:"/"})},set:function(e){b("native-localstorage")&&b("native-history-state")?localStorage.setItem(this.id,c.toJson(e)):a(this.id,c.toJson(e),{expires:1,path:"/"})}})})},"dojomat/Session":function(){define(["dojo/_base/declare"],function(g){return g([],{props:{},get:function(c){return this.props[c]},set:function(c,b){this.props[c]=b},destroy:function(c){this.props[c]&&this.props[c].remove&&(this.props[c].remove(),
delete this.props[c]);this.props[c]&&this.props[c].destroy&&(this.props[c].destroy(),delete this.props[c])}})})},"dojomat/populateRouter":function(){define(["routed/Route","dojo/_base/lang"],function(g,c){return function(b,a){var e=null,d=function(a,c,d){return function(e){b.makePage(e,a,c,d)}};for(e in a)a.hasOwnProperty(e)&&b.router.addRoute(e,new g(a[e].schema,c.hitch(b,d(a[e].widget,a[e].layers||[],a[e].stylesheets))))}})},"dojorama/routing-map":function(){define(["dojo/_base/config","require"],
function(g,c){var b=g["routing-map"].pathPrefix,a=g["routing-map"].layers||{},e=c.toAbsMid;return{home:{schema:b+"",widget:e("./ui/home/HomePage"),layers:a.home||[]},storage:{schema:b+"/storage",widget:e("./ui/storage/StoragePage"),layers:a.storage||[]},releaseIndex:{schema:b+"/releases",widget:e("./ui/release/ReleaseIndexPage"),layers:a.release||[]},releaseUpdate:{schema:b+"/release/:id",widget:e("./ui/release/ReleaseUpdatePage"),layers:a.release||[]},releaseCreate:{schema:b+"/new-release/",widget:e("./ui/release/ReleaseCreatePage"),
layers:a.release||[]}}})},"dojorama/App":function(){define("dojo/_base/declare dojo/_base/lang routed/Request dojomat/Application dojomat/populateRouter ./routing-map require dojo/domReady!".split(" "),function(g,c,b,a,e,d,f){var k=function(a){var b=a.getQueryString();a=a.getPathname()+(""!==b?"?":"")+b;window._gaq&&window._gaq.push(["_trackPageview",a])};return g([a],{constructor:function(){e(this,d);this.run()},makeNotFoundPage:function(){var a=new b(window.location.href);f(["./ui/error/NotFoundPage"],
c.hitch(this,function(b){this.setStylesheets();this.setCss();this.setPageNode();(new b({request:a,router:this.router},this.pageNodeId)).startup();this.notification.clear()}));k(a)},makeErrorPage:function(a){var d=new b(window.location.href);f(["./ui/error/ErrorPage"],c.hitch(this,function(b){this.setStylesheets();this.setCss();this.setPageNode();(new b({request:d,router:this.router,error:a},this.pageNodeId)).startup();this.notification.clear()}));k(d)},makePage:function(a,b,c,d){this.inherited(arguments);
k(a)}})})}}});define("dojorama/layers/app",[],1);
//@ sourceMappingURL=app.js.map