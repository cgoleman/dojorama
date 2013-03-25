//>>built
define("dgrid/ColumnSet","dojo/_base/kernel dojo/_base/declare dojo/_base/Deferred dojo/on dojo/aspect dojo/query dojo/has ./util/misc put-selector/put xstyle/has-class ./Grid dojo/_base/sniff xstyle/css!./css/columnset.css".split(" "),function(v,w,x,r,u,s,f,y,m,z,B){function t(a){var d=a.domNode,b=a._columnSetScrollers,c=a._columnSetScrollerContents,e=a.columnSets,k=0,n=0,p=0,g,h;g=0;for(e=e.length;g<e;g++)k+=n,h=s(".dgrid-column-set["+l+'\x3d"'+g+'"]',d)[0],n=h.offsetWidth,h=h.firstChild.offsetWidth,
c[g].style.width=h+"px",b[g].style.width=n+"px",b[g].style.bottom=a.showFooter?a.footerNode.offsetHeight+"px":"0px",b[g].style.overflowX=h>n?"scroll":"auto",b[g].style.left=k+"px",h>n&&p++;a.bodyNode.style.bottom=p?f("dom-scrollbar-height")+(f("ie")?1:0)+"px":"0"}function A(a,d){function b(){s(".dgrid-column-set",d).forEach(function(a){a.scrollLeft=c[a.getAttribute(l)]})}var c=a._columnSetScrollLefts;8>f("ie")||f("quirks")?setTimeout(b,1):b()}f.add("event-mousewheel",function(a,d,b){return"undefined"!==
typeof b.onmousewheel});f.add("event-wheel",function(a,d,b){a=!1;try{WheelEvent("wheel"),a=!0}catch(c){}finally{return a}});var l="data-dgrid-column-set-id";z("safari","ie-7");var q;f("touch")||(q=f("event-mousewheel")||f("event-wheel")?function(a){return function(d,b){return r(d,f("event-wheel")?"wheel":"mousewheel",function(c){var e=c.target;1!==e.nodeType&&(e=e.parentNode);for(;!s.matches(e,".dgrid-column-set["+l+"]",d);)if(e===d||!(e=e.parentNode))return;(c=c.deltaX||-c.wheelDeltaX/3)&&b.call(null,
a,e,c)})}}:function(a){return function(d,b){return r(d,".dgrid-column-set["+l+"]:MozMousePixelScroll",function(c){1===c.axis&&b.call(null,a,this,c.detail)})}});return w(null,{postCreate:function(){this.inherited(arguments);if(!f("touch"))this.on(q(this),function(a,d,b){d=d.getAttribute(l);a=a._columnSetScrollers[d];b=a.scrollLeft+b;a.scrollLeft=0>b?0:b})},columnSets:[],createRowCells:function(a,d){for(var b=m("table.dgrid-row-table"),c=m(b,"tbody tr"),e=0,k=this.columnSets.length;e<k;e++)m(c,a+".dgrid-column-set-cell.dgrid-column-set-"+
e+" div.dgrid-column-set["+l+"\x3d"+e+"]").appendChild(this.inherited(arguments,[a,d,this.columnSets[e]]));return b},renderArray:function(){var a=this,d=this.inherited(arguments);x.when(d,function(b){for(var c=0;c<b.length;c++)A(a,b[c])});return d},renderHeader:function(){function a(){var a=this.scrollLeft,b=this.getAttribute(l);p[b]!=a&&(p[b]=a,s(".dgrid-column-set["+l+'\x3d"'+b+'"],.dgrid-column-set-scroller['+l+'\x3d"'+b+'"]',e).forEach(function(b){b.scrollLeft=a}))}function d(b,c){var d=k[c]=
m(e,"div.dgrid-column-set-scroller.dgrid-scrollbar-height.dgrid-column-set-scroller-"+c+"["+l+"\x3d"+c+"]");f[c]=m(d,"div.dgrid-column-set-scroller-content");r(d,"scroll",a)}function b(){t(g)}this.inherited(arguments);var c=this.columnSets,e=this.domNode,k=this._columnSetScrollers,f=this._columnSetScrollerContents={},p=this._columnSetScrollLefts={},g=this,h,q;if(k)for(h in k)m(k[h],"!");else u.after(this,"resize",b,!0),u.after(this,"styleColumn",b,!0),r(e,".dgrid-column-set:dgrid-cellfocusin",a);
k=this._columnSetScrollers={};h=0;for(q=c.length;h<q;h++)d(c[h],h);t(this)},styleColumnSet:function(a,d){var b=this.addCssRule("#"+y.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-set-"+a,d);t(this);return b},_destroyColumns:function(){var a=this.columnSets.length,d,b,c,e,k,f,l,g;for(d=0;d<a;d++){f=this.columnSets[d];b=0;for(e=f.length;b<e;b++){l=f[b];c=0;for(k=l.length;c<k;c++)g=l[c],"function"===typeof g.destroy&&g.destroy()}}this.inherited(arguments)},configStructure:function(){this.columns=
{};for(var a=0,d=this.columnSets.length;a<d;a++)for(var b=this.columnSets[a],c=0;c<b.length;c++)b[c]=this._configColumns(a+"-"+c+"-",b[c])},_setColumnSets:function(a){this._destroyColumns();this.columnSets=a;this._updateColumns()},setColumnSets:function(a){v.deprecated("setColumnSets(...)",'use set("columnSets", ...) instead',"dgrid 1.0");this.set("columnSets",a)}})});