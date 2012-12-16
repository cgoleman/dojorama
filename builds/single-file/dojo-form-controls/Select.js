//>>built
define("dojo-form-controls/Select","dojo/_base/declare,dojo/_base/array,dojo/_base/lang,dojo/dom-construct,dojo/dom-attr,dojo/query,dojo/on,./Option,./_FormWidget".split(","),function(g,d,e,l,f,h,i,j,k){return g([k],{multiple:!1,options:[],templateString:'<select name="${name}" data-dojo-attach-point="containerNode"></select>',_attrToDom:function(a,c,b){"options"!==a&&this.inherited(arguments)},_fillContent:function(){var a=[],c=[];this.srcNodeRef&&f.has(this.srcNodeRef,"data-dojo-type")&&(h("> *",
this.srcNodeRef).forEach(function(b){c[c.length]={value:b.value,label:b.innerHTML,disabled:f.get(b,"disabled")};if(b.selected)a[a.length]=b.value}),f.get(this.srcNodeRef,"multiple")||(a=a.length?a[a.length-1]:""),this.set("options",c),this.set("value",a))},postCreate:function(){this.inherited(arguments);this.own(i(this.domNode,"change",e.hitch(this,function(){this.set("value",this._getValueFromChildren())})));this._loadChildren();this._selectChildren()},_setOptionsAttr:function(a){this._set("options",
a);this._created&&(this._loadChildren(),this._selectChildren())},_setValueAttr:function(a){this._set("value",a);this._created&&this._selectChildren();this._handleOnChange(a)},_setRequiredAttr:function(a){var c=a&&!this.get("disabled")?"true":"false";f.set(this.domNode,{required:c,"aria-required":c});this._set("required",a)},_loadChildren:function(){d.forEach(this.getChildren(),function(a){a.destroyRecursive()});d.forEach(this.get("options"),e.hitch(this,function(a){a=new j({value:a.value,label:a.label,
disabled:a.disabled||!1});a.placeAt(this.domNode,"last");a.startup()}))},_selectChildren:function(){d.forEach(this.getChildren(),e.hitch(this,function(a){this._selectChild(a)}))},_selectChild:function(a){var c=!1,b=this.get("value");e.isArray(b)?d.forEach(b,function(b){b===a.get("value")&&(c=!0)}):b===a.get("value")&&(c=!0);a.set("selected",c)},_getValueFromChildren:function(){var a=[];if(!this.get("multiple"))return-1===this.domNode.selectedIndex?null:this.domNode.options[this.domNode.selectedIndex].value;
for(x=0;x<this.domNode.length;x+=1)if(this.domNode[x].selected)a[a.length]=this.domNode[x].value;return a}})});