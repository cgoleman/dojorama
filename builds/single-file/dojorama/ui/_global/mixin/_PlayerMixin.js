//>>built
define("dojorama/ui/_global/mixin/_PlayerMixin",["dojo/_base/declare","../widget/PlayerWidget"],function(a,b){return a([],{playerWidget:null,postCreate:function(){this.inherited(arguments);this.playerWidget=new b({session:this.session},this.playerNode)},startup:function(){this.inherited(arguments);this.playerWidget.startup()},showPlayer:function(){this.playerWidget.show()}})});