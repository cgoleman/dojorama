//>>built
require({cache:{"dojorama/ui/storage/widget/RowWidget":function(){define("dojorama/ui/storage/widget/RowWidget",["dojo/_base/declare","mijit/_WidgetBase","mijit/_TemplatedMixin"],function(c,d,e){return c([d,e],{templateString:'<tr><td data-dojo-attach-point="idNode"></td><td data-dojo-attach-point="dataNode"></td></tr>',_setIdAttr:function(a){this.idNode.innerHTML=a;this._set("id",a)},_setDataAttr:function(a){this.dataNode.innerHTML=a;this._set("data",a)}})})},"dojorama/ui/storage/StoragePage":function(){require({cache:{"url:dojorama/ui/storage/template/StoragePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n\n    <div data-dojo-attach-point="mainNode">\n        <h1>Storage</h1>\n        <\!--<button class="btn" data-dojo-attach-event="onclick:_onNewObjClick">New Obj</button>\n        <button class="btn" data-dojo-attach-event="onclick:_onRemObjClick">Remove Obj</button>--\>\n        <button class="btn" data-dojo-attach-event="onclick:_onClearClick">Clear</button>\n        \n        <hr />\n        \n        <table class="table table-striped">\n            <thead>\n                <th>Id</th>\n                <th>Data</th>\n            </thead>\n            <tbody data-dojo-attach-point="tbodyNode"></tbody>\n        </table>\n    </div>\n    \n    <div data-dojo-attach-point="playerNode"></div>\n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/storage/css/StoragePage.css":"body {background: white;}"}});define("dojorama/ui/storage/StoragePage","dojo/_base/declare,mijit/_WidgetBase,mijit/_TemplatedMixin,dojomat/_AppAware,dojomat/_StateAware,../_global/mixin/_NavigationMixin,../_global/mixin/_PlayerMixin,../_global/mixin/_FooterMixin,dojo-local-storage/LocalStorage,dojo/store/Observable,dojo/_base/array,dojo/_base/lang,dojo/_base/json,dojo/text!./template/StoragePage.html,./widget/RowWidget,dojo/text!./css/StoragePage.css".split(","),
function(c,d,e,a,g,h,i,j,k,l,m,f,n,o,p,q){return c([d,e,a,g,h,i,j],{router:null,request:null,session:null,templateString:o,store:null,observer:null,result:null,itemWidgets:[],constructor:function(b){this.router=b.router;this.request=b.request;this.session=b.session;this.store=l(new k)},postCreate:function(){this.inherited(arguments);this.setCss(q,"all");this.setTitle("Storage")},startup:function(){this.inherited(arguments);this.showNavigation();this.showFooter();this.fetchItems()},fetchItems:function(){this.result=
this.store.query({},{sort:[{attribute:"id",descending:!1}]});this.destroyItemWidgets();this.observer&&this.observer.remove&&this.observer.remove();this.observer=this.result.observe(f.hitch(this,function(){this.fetchItems()},!0));this.result.forEach(f.hitch(this,function(b){var a=this.itemWidgets.length;this.itemWidgets[a]=(new p({})).placeAt(this.tbodyNode);this.itemWidgets[a].set("id",this.store.getIdentity(b));this.itemWidgets[a].set("data",n.toJson(b));this.itemWidgets[a].startup()}))},destroyItemWidgets:function(){m.forEach(this.itemWidgets,
f.hitch(this,function(a){a.destroy()}));this.itemWidgets=[]},_onClearClick:function(){localStorage.clear();this.destroyItemWidgets()}})})},"url:dojorama/ui/storage/template/StoragePage.html":'<div>\n    <div data-dojo-attach-point="navigationNode"></div>\n\n    <div data-dojo-attach-point="mainNode">\n        <h1>Storage</h1>\n        <\!--<button class="btn" data-dojo-attach-event="onclick:_onNewObjClick">New Obj</button>\n        <button class="btn" data-dojo-attach-event="onclick:_onRemObjClick">Remove Obj</button>--\>\n        <button class="btn" data-dojo-attach-event="onclick:_onClearClick">Clear</button>\n        \n        <hr />\n        \n        <table class="table table-striped">\n            <thead>\n                <th>Id</th>\n                <th>Data</th>\n            </thead>\n            <tbody data-dojo-attach-point="tbodyNode"></tbody>\n        </table>\n    </div>\n    \n    <div data-dojo-attach-point="playerNode"></div>\n    <div data-dojo-attach-point="footerNode"></div>\n</div>',
"url:dojorama/ui/storage/css/StoragePage.css":"body {background: white;}"}});define("dojorama/layers/storage",[],1);