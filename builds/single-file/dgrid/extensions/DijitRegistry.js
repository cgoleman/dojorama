//>>built
define("dgrid/extensions/DijitRegistry",["dojo/_base/declare","dojo/dom-geometry","dijit/registry"],function(c,d,b){return c(null,{minSize:0,maxSize:Infinity,layoutPriority:0,showTitle:!0,buildRendering:function(){b.add(this);this.inherited(arguments);this.domNode.setAttribute("widgetId",this.id)},startup:function(){if(!this._started){this.inherited(arguments);var a=b.getEnclosingWidget(this.domNode.parentNode);a&&a.isLayoutContainer&&this._resizeHandle.remove()}},destroyRecursive:function(){this.destroy()},
destroy:function(){this.inherited(arguments);b.remove(this.id)},getChildren:function(){return[]},resize:function(a){a&&d.setMarginBox(this.domNode,a);this.inherited(arguments)},_set:function(a,b){this[a]=b},watch:function(){}})});