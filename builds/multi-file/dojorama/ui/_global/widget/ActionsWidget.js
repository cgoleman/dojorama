//>>built
require({cache:{"url:dojorama/ui/_global/widget/template/ActionsWidget.html":'\x3cul class\x3d"nav nav-pills"\x3e\x3c/ul\x3e'}});
define("dojorama/ui/_global/widget/ActionsWidget","dojo/_base/declare mijit/_WidgetBase mijit/_TemplatedMixin dojomat/_StateAware ../mixin/_ToggleMixin dojo/on dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/text!./template/ActionsWidget.html".split(" "),function(e,f,g,h,k,l,c,m,d,n){return e([f,g,h,k],{actions:[],templateString:n,constructor:function(a){this.actions=a.actions},postCreate:function(){this.inherited(arguments);this.hide();m.forEach(this.actions,c.hitch(this,function(a){var b=
d.create("li",a.active?{"class":"active"}:{},this.domNode,"last"),b=d.create("a",{href:a.url,innerHTML:a.label},b,"last");this.own(l(b,"click",c.hitch(this,function(b){b.preventDefault();this.push(a.url)})))}))}})});