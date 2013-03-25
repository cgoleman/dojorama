//>>built
require({cache:{"dgrid/OnDemandGrid":function(){define("dgrid/OnDemandGrid",["dojo/_base/declare","./Grid","./OnDemandList"],function(w,n,s){return w([n,s],{})})},"dgrid/Grid":function(){define("dgrid/Grid","dojo/_base/kernel dojo/_base/declare dojo/on dojo/has put-selector/put ./List ./util/misc dojo/_base/sniff".split(" "),function(w,n,s,m,g,y,A){function x(b,c){c&&c.nodeType&&b.appendChild(c)}var u=8>m("ie")&&!m("quirks"),z=/[^\._a-zA-Z0-9-]/g;n=n(y,{columns:null,cellNavigation:!0,tabableHeader:!0,
showHeader:!0,column:function(b){return"string"==typeof b?this.columns[b]:this.cell(b).column},listType:"grid",cell:function(b,c){if(b.column&&b.element)return b;b.target&&b.target.nodeType&&(b=b.target);var e;if(b.nodeType){do{if(this._rowIdToObject[b.id])break;var a=b.columnId;if(a){c=a;e=b;break}b=b.parentNode}while(b&&b!=this.domNode)}if(!e&&"undefined"!=typeof c){var d=this.row(b);if(a=d.element)for(var a=a.getElementsByTagName("td"),f=0;f<a.length;f++)if(a[f].columnId==c){e=a[f];break}}if(null!=
b)return{row:d||this.row(b),column:c&&this.column(c),element:e}},createRowCells:function(b,c,e){var a=g("table.dgrid-row-table[role\x3dpresentation]"),d=9>m("ie")||m("quirks")?g(a,"tbody"):a,f,h,l,t,n,k,r,q,v,B;e=e||this.subRows;h=0;for(l=e.length;h<l;h++){k=e[h];f=g(d,"tr");k.className&&g(f,"."+k.className);t=0;for(n=k.length;t<n;t++){r=k[t];q=r.id;v=r.className||r.field&&"field-"+r.field;v=g(b+(".dgrid-cell.dgrid-cell-padding"+(q?".dgrid-column-"+q:"")+(v?"."+v:"")).replace(z,"-")+"[role\x3d"+("th"===
b?"columnheader":"gridcell")+"]");v.columnId=q;u?(q=g(v,"!dgrid-cell-padding div.dgrid-cell-padding"),v.contents=q):q=v;if(B=r.colSpan)v.colSpan=B;if(B=r.rowSpan)v.rowSpan=B;c(q,r);f.appendChild(v)}}return a},left:function(b,c){b.element||(b=this.cell(b));return this.cell(this._move(b,-(c||1),"dgrid-cell"))},right:function(b,c){b.element||(b=this.cell(b));return this.cell(this._move(b,c||1,"dgrid-cell"))},renderRow:function(b,c){var e=this,a=this.createRowCells("td",function(a,f){var h=b;f.get?h=
f.get(b):"field"in f&&"_item"!=f.field&&(h=h[f.field]);var l=f.formatter,g=e.formatterScope;l?a.innerHTML="string"===typeof l&&g?g[l](h,b):l(h,b):f.renderCell?x(a,f.renderCell(b,h,a,c)):null!=h&&a.appendChild(document.createTextNode(h))},c&&c.subRows);return g("div[role\x3drow]\x3e",a)},renderHeader:function(){var b=this,c=this.headerNode,e=c.childNodes.length;for(c.setAttribute("role","row");e--;)g(c.childNodes[e],"!");e=this.createRowCells("th",function(a,d){var f=d.headerNode=a;u&&(a=a.parentNode);
var b=d.field;b&&(a.field=b);if(d.renderHeaderCell)x(f,d.renderHeaderCell(f));else if(d.label||d.field)f.appendChild(document.createTextNode(d.label||d.field));!1!==d.sortable&&(b&&"_item"!=b)&&(a.sortable=!0,a.className+=" dgrid-sortable")},this.subRows&&this.subRows.headerRows);this._rowIdToObject[e.id=this.id+"-header"]=this.columns;c.appendChild(e);this._sortListener&&this._sortListener.remove();this._sortListener=s(e,"click,keydown",function(a){if("click"==a.type||32==a.keyCode||!m("opera")&&
13==a.keyCode){var d=a.target,f,h,l;do if(d.sortable){l=[{attribute:f=d.field||d.columnId,descending:(h=b._sort[0])&&h.attribute==f&&!h.descending}];a={bubbles:!0,cancelable:!0,grid:b,parentType:a.type,sort:l};s.emit(d,"dgrid-sort",a)&&(b._sortNode=d,b.set("sort",l));break}while((d=d.parentNode)&&d!=c)}})},resize:function(){var b=this.headerNode.firstChild,c=this.contentNode,e;this.inherited(arguments);if(!m("ie")||7<m("ie")&&!m("quirks"))if(c.style.width="",c&&b&&(e=b.offsetWidth)!=c.offsetWidth)c.style.width=
e+"px"},destroy:function(){this._destroyColumns();this._sortListener&&this._sortListener.remove();this.inherited(arguments)},_setSort:function(b,c){this.inherited(arguments);this.updateSortArrow(this._sort)},updateSortArrow:function(b,c){this._lastSortedArrow&&(g(this._lastSortedArrow,"\x3c!dgrid-sort-up!dgrid-sort-down"),g(this._lastSortedArrow,"!"),delete this._lastSortedArrow);c&&(this._sort=b);if(b[0]){var e=b[0].attribute,a=b[0].descending,d=this._sortNode,f,h,l;delete this._sortNode;if(!d)for(l in f=
this.columns,f)if(h=f[l],h.field==e){d=h.headerNode;break}d&&(d=d.contents||d,this._lastSortedArrow=g(d.firstChild,"-div.dgrid-sort-arrow.ui-icon[role\x3dpresentation]"),this._lastSortedArrow.innerHTML="\x26nbsp;",g(d,a?".dgrid-sort-down":".dgrid-sort-up"),this.resize())}},styleColumn:function(b,c){return this.addCssRule("#"+A.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-"+b,c)},_configColumns:function(b,c){var e=[],a=c instanceof Array,d,f;for(d in c)f=c[d],"string"==typeof f&&(c[d]=f={label:f}),
!a&&!f.field&&(f.field=d),d=f.id=f.id||(isNaN(d)?d:b+d),a&&(this.columns[d]=f),this._configColumn&&this._configColumn(f,d,c,b),f.grid=this,"function"===typeof f.init&&f.init(),e.push(f);return a?c:e},_destroyColumns:function(){var b=this.subRows,c=b&&b.length,e,a,d,f;this.cleanup();for(e=0;e<c;e++){a=0;for(f=b[e].length;a<f;a++)d=b[e][a],"function"===typeof d.destroy&&d.destroy()}},configStructure:function(){var b=this.subRows,c=this._columns=this.columns;this.columns=!c||c instanceof Array?{}:c;
if(b)for(c=0;c<b.length;c++)b[c]=this._configColumns(c+"-",b[c]);else this.subRows=[this._configColumns("",c)]},_getColumns:function(){return this._columns||this.columns},_setColumns:function(b){this._destroyColumns();this.subRows=null;this.columns=b;this._updateColumns()},_setSubRows:function(b){this._destroyColumns();this.subRows=b;this._updateColumns()},setColumns:function(b){w.deprecated("setColumns(...)",'use set("columns", ...) instead',"dgrid 1.0");this.set("columns",b)},setSubRows:function(b){w.deprecated("setSubRows(...)",
'use set("subRows", ...) instead',"dgrid 1.0");this.set("subRows",b)},_updateColumns:function(){this.configStructure();this.renderHeader();this.refresh();this._lastCollection&&this.renderArray(this._lastCollection);this._started&&(this._sort&&this._sort.length?this.updateSortArrow(this._sort):this.resize())}});n.appendIfNode=x;n.defaultRenderCell=function(b,c,e,a){null!=c&&e.appendChild(document.createTextNode(c))};return n})},"dgrid/Selection":function(){define("dgrid/Selection","dojo/_base/kernel dojo/_base/declare dojo/_base/Deferred dojo/on dojo/has dojo/aspect ./List dojo/has!touch?./util/touch put-selector/put dojo/query dojo/_base/sniff".split(" "),
function(w,n,s,m,g,y,A,x,u){function z(a,d){for(var f=a.unselectable=d?"on":"",b=a.getElementsByTagName("*"),c=b.length;--c;)"INPUT"===b[c].tagName||"TEXTAREA"===b[c].tagName||(b[c].unselectable=f)}function b(a,d){var f=a.bodyNode,b=d?"text":21>g("ff")?"-moz-none":"none";e?f.style[e]=b:g("dom-selectstart")?!d&&!a._selectstartHandle?a._selectstartHandle=m(f,"selectstart",function(a){var d=a.target&&a.target.tagName;"INPUT"!==d&&"TEXTAREA"!==d&&a.preventDefault()}):d&&a._selectstartHandle&&(a._selectstartHandle.remove(),
delete a._selectstartHandle):(z(f,!d),!d&&!a._unselectableHandle?a._unselectableHandle=y.after(a,"renderRow",function(a){z(a,!0);return a}):d&&a._unselectableHandle&&(a._unselectableHandle.remove(),delete a._unselectableHandle))}g.add("css-user-select",function(a,d,f){a=f.style;d=["Khtml","O","ms","Moz","Webkit"];f=d.length;var b="userSelect";do if("undefined"!==typeof a[b])return b;while(f--&&(b=d[f]+"UserSelect"));return!1});g.add("dom-selectstart","undefined"!==typeof document.onselectstart);var c=
g("mac")?"metaKey":"ctrlKey",e=g("css-user-select");return n(null,{selectionDelegate:".dgrid-row",selectionEvents:"mousedown,mouseup,dgrid-cellfocusin",deselectOnRefresh:!0,allowSelectAll:!1,selection:{},selectionMode:"extended",allowTextSelection:void 0,create:function(){this.selection={};return this.inherited(arguments)},postCreate:function(){this.inherited(arguments);var a=this.selectionMode;this.selectionMode="";this._setSelectionMode(a);this._initSelectionEvents()},destroy:function(){this.inherited(arguments);
this._selectstartHandle&&this._selectstartHandle.remove();this._unselectableHandle&&this._unselectableHandle.remove()},_setSelectionMode:function(a){a!=this.selectionMode&&(this.clearSelection(),this.selectionMode=a,this._selectionHandlerName="_"+a+"SelectionHandler",this._setAllowTextSelection(this.allowTextSelection))},setSelectionMode:function(a){w.deprecated("setSelectionMode(...)",'use set("selectionMode", ...) instead',"dgrid 1.0");this.set("selectionMode",a)},_setAllowTextSelection:function(a){"undefined"!==
typeof a?b(this,a):b(this,"none"===this.selectionMode);this.allowTextSelection=a},_handleSelect:function(a,d){if(this[this._selectionHandlerName]&&!("dgrid-cellfocusin"==a.type&&"mousedown"==a.parentType||"mouseup"==a.type&&d!=this._waitForMouseUp)){this._waitForMouseUp=null;this._selectionTriggerEvent=a;if(!a.keyCode||!a.ctrlKey||32==a.keyCode)if(!a.shiftKey&&"mousedown"==a.type&&this.isSelected(d))this._waitForMouseUp=d;else this[this._selectionHandlerName](a,d);this._selectionTriggerEvent=null}},
_singleSelectionHandler:function(a,d){var b=a.keyCode?a.ctrlKey:a[c];this._lastSelected===d?this.select(d,null,!b||!this.isSelected(d)):(this.clearSelection(),this.select(d),this._lastSelected=d)},_multipleSelectionHandler:function(a,d){var b=this._lastSelected,h=a.keyCode?a.ctrlKey:a[c],e;a.shiftKey||(e=h?null:!0,b=null);this.select(d,b,e);b||(this._lastSelected=d)},_extendedSelectionHandler:function(a,d){(2===a.button?!this.isSelected(d):!(a.keyCode?a.ctrlKey:a[c]))&&this.clearSelection(null,!0);
this._multipleSelectionHandler(a,d)},_toggleSelectionHandler:function(a,d){this.select(d,null,null)},_initSelectionEvents:function(){var a=this,d=this.selectionDelegate;g("touch")?m(this.contentNode,x.selector(d,x.tap),function(d){a._handleSelect(d,this)}):m(this.contentNode,m.selector(d,this.selectionEvents),function(d){a._handleSelect(d,this)});this.addKeyHandler&&this.addKeyHandler(32,function(d){a._handleSelect(d,d.target)});if(this.allowSelectAll)this.on("keydown",function(d){d[c]&&65==d.keyCode&&
(d.preventDefault(),a[a.allSelected?"clearSelection":"selectAll"]())});y.before(this,"removeRow",function(a,d){var b;d||(b=this.row(a))&&b.id in this.selection&&this.deselect(a)})},allowSelect:function(a){return!0},_selectionEventQueue:function(a,d){var b=this,c="dgrid-"+(a?"select":"deselect"),e=this[c],g=this._selectionTriggerEvent;g&&(g=g.type);if(e)return e;setTimeout(this._fireSelectionEvent=function(){if(e){var a={bubbles:!0,grid:b};g&&(a.parentType=g);a[d]=e;m.emit(b.contentNode,c,a);e=null;
delete b[c]}},0);return e=this[c]=[]},select:function(a,d,b){void 0===b&&(b=!0);a.element||(a=this.row(a));if(!b||this.allowSelect(a)){var c=this.selection,e=c[a.id];null===b&&(b=!e);var g=a.element;!b&&!this.allSelected?delete this.selection[a.id]:c[a.id]=b;g&&(b?u(g,".dgrid-selected.ui-state-active"):u(g,"!dgrid-selected!ui-state-active"));b!=e&&g&&this._selectionEventQueue(b,"rows").push(a);if(d){d.element||(d=this.row(d));d=d.element;c=a.element;for(c=d&&(d.compareDocumentPosition?2==d.compareDocumentPosition(c):
d.sourceIndex>c.sourceIndex)?"down":"up";a.element!=d&&(a=this[c](a));)this.select(a,null,b)}}},deselect:function(a,b){this.select(a,b,!1)},clearSelection:function(a,b){this.allSelected=!1;for(var c in this.selection)a!==c&&this.deselect(c);b||(this._lastSelected=null)},selectAll:function(){this.allSelected=!0;this.selection={};for(var a in this._rowIdToObject){var b=this.row(this._rowIdToObject[a]);this.select(b.id)}},isSelected:function(a){if("undefined"===typeof a||null===a)return!1;a.element||
(a=this.row(a));return a.id in this.selection?!!this.selection[a.id]:this.allSelected&&(!a.data||this.allowSelect(a))},refresh:function(){this.deselectOnRefresh&&(this.clearSelection(),this._fireSelectionEvent&&this._fireSelectionEvent());this._lastSelected=null;return this.inherited(arguments)},renderArray:function(){var a=this,b=this.inherited(arguments);s.when(b,function(b){var d=a.selection,c,e,g;for(c=0;c<b.length;c++)e=a.row(b[c]),(g=e.id in d?d[e.id]:a.allSelected)&&a.select(e,null,g)});return b}})})},
"dgrid/Keyboard":function(){define("dgrid/Keyboard","dojo/_base/declare dojo/aspect dojo/on dojo/_base/lang dojo/has put-selector/put dojo/_base/Deferred dojo/_base/sniff".split(" "),function(w,n,s,m,g,y,A){function x(a){a.preventDefault()}var u={checkbox:1,radio:1,button:1},z=/\bdgrid-cell\b/,b=/\bdgrid-row\b/;g.add("dom-contains",function(a,b,d){return!!d.contains});var c=w(null,{pageSkip:10,tabIndex:0,keyMap:null,headerKeyMap:null,postMixInProperties:function(){this.inherited(arguments);this.keyMap||
(this.keyMap=m.mixin({},c.defaultKeyMap));this.headerKeyMap||(this.headerKeyMap=m.mixin({},c.defaultHeaderKeyMap))},postCreate:function(){function a(b){var k=b.target;return k.type&&(!u[k.type]||32==b.keyCode)}function d(c){function q(){if(k._focusedHeaderNode=B=e?k.headerNode.getElementsByTagName("th")[0]:k.headerNode)B.tabIndex=k.tabIndex}var e=k.cellNavigation,f=e?z:b,r=c===k.headerNode,B=c;r?(q(),n.after(k,"renderHeader",q,!0)):n.after(k,"renderArray",function(a){return A.when(a,function(a){var b=
k._focusedNode||B,d;if(d=f.test(b.className))d=b,d=g("dom-contains")?c.contains(d):c.compareDocumentPosition(d)&8;if(d)return a;d=0;for(var v=c.getElementsByTagName("*"),q;q=v[d];++d)if(f.test(q.className)){b=k._focusedNode=q;break}b.tabIndex=k.tabIndex;return a})});k._listeners.push(s(c,"mousedown",function(b){a(b)||k._focusOnNode(b.target,r,b)}));k._listeners.push(s(c,"keydown",function(b){if(!b.metaKey&&!b.altKey){var d=k[r?"headerKeyMap":"keyMap"][b.keyCode];d&&!a(b)&&d.call(k,b)}}))}this.inherited(arguments);
var k=this;this.tabableHeader&&(d(this.headerNode),s(this.headerNode,"dgrid-cellfocusin",function(){k.scrollTo({x:this.scrollLeft})}));d(this.contentNode)},addKeyHandler:function(a,b,k){return n.after(this[k?"headerKeyMap":"keyMap"],a,b,!0)},_focusOnNode:function(a,b,k){b="_focused"+(b?"Header":"")+"Node";var d=this[b],c=this.cellNavigation?"cell":"row",q=this[c](a),e,f,r,h,l;if(a=q&&q.element){if(this.cellNavigation){e=a.getElementsByTagName("input");l=0;for(r=e.length;l<r;l++)if(f=e[l],(-1!=f.tabIndex||
"lastValue"in f)&&!f.disabled){8>g("ie")&&(f.style.position="relative");f.focus();8>g("ie")&&(f.style.position="");h=!0;break}}k=m.mixin({grid:this},k);k.type&&(k.parentType=k.type);k.bubbles||(k.bubbles=!0);d&&(y(d,"!dgrid-focus[!tabIndex]"),8>g("ie")&&(d.style.position=""),k[c]=this[c](d),s.emit(a,"dgrid-cellfocusout",k));d=this[b]=a;k[c]=q;h||(8>g("ie")&&(a.style.position="relative"),a.tabIndex=this.tabIndex,a.focus());y(a,".dgrid-focus");s.emit(d,"dgrid-cellfocusin",k)}},focusHeader:function(a){this._focusOnNode(a||
this._focusedHeaderNode,!0)},focus:function(a){this._focusOnNode(a||this._focusedNode,!1)}}),e=c.moveFocusVertical=function(a,b){var k=this.cellNavigation,d=this[k?"cell":"row"](a),d=k&&d.column.id,c=this.down(this._focusedNode,b,!0);k&&(c=this.cell(c,d));this._focusOnNode(c,!1,a);a.preventDefault()};w=c.moveFocusUp=function(a){e.call(this,a,-1)};var a=c.moveFocusDown=function(a){e.call(this,a,1)},d=c.moveFocusPageUp=function(a){e.call(this,a,-this.pageSkip)},f=c.moveFocusPageDown=function(a){e.call(this,
a,this.pageSkip)},h=c.moveFocusHorizontal=function(a,b){if(this.cellNavigation){var k=!this.row(a);this._focusOnNode(this.right(this["_focused"+(k?"Header":"")+"Node"],b),k,a);a.preventDefault()}},l=c.moveFocusLeft=function(a){h.call(this,a,-1)},t=c.moveFocusRight=function(a){h.call(this,a,1)},C=c.moveHeaderFocusEnd=function(a,b){var k;this.cellNavigation&&(k=this.headerNode.getElementsByTagName("th"),this._focusOnNode(k[b?0:k.length-1],!0,a));a.preventDefault()},k=c.moveHeaderFocusHome=function(a){C.call(this,
a,!0)},r=c.moveFocusEnd=function(a,b){var k=this,d=this.cellNavigation,c=this.contentNode,q=c.scrollTop+(b?0:c.scrollHeight),c=c[b?"firstChild":"lastChild"],f=-1<c.className.indexOf("dgrid-preload"),e=f?c[(b?"next":"previous")+"Sibling"]:c,r=e.offsetTop+(b?0:e.offsetHeight),h;if(f){for(;e&&0>e.className.indexOf("dgrid-row");)e=e[(b?"next":"previous")+"Sibling"];if(!e)return}!f||1>c.offsetHeight?(d&&(e=this.cell(e,this.cell(a).column.id)),this._focusOnNode(e,!1,a)):(g("dom-addeventlistener")||(a=m.mixin({},
a)),h=n.after(this,"renderArray",function(c){h.remove();return A.when(c,function(c){c=c[b?0:c.length-1];d&&(c=k.cell(c,k.cell(a).column.id));k._focusOnNode(c,!1,a)})}));q===r&&a.preventDefault()},q=c.moveFocusHome=function(a){r.call(this,a,!0)};c.defaultKeyMap={32:x,33:d,34:f,35:r,36:q,37:l,38:w,39:t,40:a};c.defaultHeaderKeyMap={32:x,35:C,36:k,37:l,39:t};return c})},"dgrid/editor":function(){define("dgrid/editor","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/on dojo/aspect dojo/has ./Grid put-selector/put dojo/_base/sniff".split(" "),
function(w,n,s,m,g,y,A,x,u){function z(a,b){a.value=b;if("radio"==a.type||"checkbox"==a.type)a.checked=a.defaultChecked=!!b}function b(a,b){if("number"==typeof b)a=isNaN(a)?a:parseFloat(a);else if("boolean"==typeof b)a="true"==a?!0:"false"==a?!1:a;else if(b instanceof Date){var d=new Date(a);a=isNaN(d.getTime())?a:d}return a}function c(a,b,d,c,e){var f,p,h;if((d&&d.valueOf())!=(c&&c.valueOf())&&(f=a.cell(b),p=f.row,h=f.column,h.field&&p))if(f={grid:a,cell:f,rowId:p.id,oldValue:d,value:c,bubbles:!0,
cancelable:!0},e&&e.type&&(f.parentType=e.type),g.emit(b,"dgrid-datachange",f))a.updateDirty&&(a.updateDirty(p.id,h.field,c),h.autoSave&&setTimeout(function(){a._trackError("save")},0));else{var l;(l=b.widget)?(l._dgridIgnoreChange=!0,l.set("value",d),setTimeout(function(){l._dgridIgnoreChange=!1},0)):(l=b.input)&&z(l,d);return d}return c}function e(a,d,e,f){if(!e.isValid||e.isValid()){d=c;var g=(e.domNode||e).parentNode,h=l?t:e._dgridLastValue,p;p="function"==typeof e.get?b(e.get("value")):b(e["checkbox"==
e.type||"radio"==e.type?"checked":"value"]);a=d(a,g,h,p,f);l?t=a:e._dgridLastValue=a}}function a(a){var b=a.editor,d=a.editOn,c=a.grid,f="string"!=typeof b,h,p,l;h=a.editorArgs||{};"function"==typeof h&&(h=h.call(c,a));if(f)p=new b(h),f=p.focusNode||p.domNode,f.className+=" dgrid-input",p.connect(p,d?"onBlur":"onChange",function(){p._dgridIgnoreChange||e(c,a,this,{type:"widget"})});else if(l=function(b){var d=b.target;"_dgridLastValue"in d&&-1<d.className.indexOf("dgrid-input")&&e(c,a,d,b)},a.grid._hasInputListener||
(c._hasInputListener=!0,c.on("change",function(a){l(a)})),p=f=u(("textarea"==b?"textarea":"input[type\x3d"+b+"]")+".dgrid-input",n.mixin({name:a.field,tabIndex:isNaN(a.tabIndex)?-1:a.tabIndex},h)),9>A("ie")||A("ie")&&A("quirks"))"radio"==b||"checkbox"==b?g(p,"click",function(a){l(a)}):g(p,"change",function(a){l(a)});g(f,"mousedown",function(a){a.stopPropagation()});return p}function d(b,d){var c=a(b),f=b.grid,h=c.domNode||c,m=c.focusNode||h,p=c.domNode?function(){c.set("value",c._dgridLastValue)}:
function(){z(c,c._dgridLastValue);e(b.grid,b,c)};g(m,"keydown",function(a){a=a.keyCode||a.which;27==a?(p(),t=c._dgridLastValue,m.blur()):13==a&&!1!==b.dismissOnEnter&&m.blur()});(b._editorBlurHandle=g.pausable(c,"blur",function(){var a=h.parentNode,d=a.children.length-1,e={alreadyHooked:!0},p=f.cell(h);g.emit(p.element,"dgrid-editor-hide",{grid:f,cell:p,column:b,editor:c,bubbles:!0,cancelable:!1});a.removeChild(h);for(u(p.element,"!dgrid-cell-editing");d--;)u(a.firstChild,"!");x.appendIfNode(a,b.renderCell(b.grid.row(a).data,
t,a,C?n.delegate(e,C):e));l=t=C=null;b._editorBlurHandle.pause()})).pause();return c}function f(a,b,d,c){var e=a.domNode,f=b.grid;e||z(a,c);d.innerHTML="";u(d,".dgrid-cell-editing");u(d,a.domNode||a);e&&(a._started||a.startup(),a._dgridIgnoreChange=!0,a.set("value",c),setTimeout(function(){a._dgridIgnoreChange=!1},0));a._dgridLastValue=c;l&&(t=c,g.emit(d,"dgrid-editor-show",{grid:f,cell:f.cell(d),column:b,editor:a,bubbles:!0,cancelable:!1}))}function h(a){var b,d,c,e,g,h;a.column||(a=this.cell(a));
if(!a||!a.element)return null;b=a.column;e=b.field;d=a.element.contents||a.element;if(g=b.editorInstance){if(l!=d&&(!b.canEdit||b.canEdit(a.row.data,c)))return l=d,a=a.row,c=(c=this.dirty&&this.dirty[a.id])&&e in c?c[e]:b.get?b.get(a.data):a.data[e],f(b.editorInstance,b,d,c),h=new m,setTimeout(function(){g.focus&&g.focus();b._editorBlurHandle&&b._editorBlurHandle.resume();h.resolve(g)},0),h.promise}else if(b.editor&&(g=d.widget||d.input))return h=new m,g.focus&&g.focus(),h.resolve(g),h.promise;return null}
var l,t,C;return function(b,c,e){var l=b.renderCell||x.defaultRenderCell,m=[],n;b||(b={});b.editor=c=c||b.editor||"text";b.editOn=e=e||b.editOn;n="string"!=typeof c;b.widgetArgs&&(w.deprecated("column.widgetArgs","use column.editorArgs instead","dgrid 1.0"),b.editorArgs=b.widgetArgs);y.after(b,"init",e?function(){var a=b.grid;a.edit||(a.edit=h);b.editorInstance=d(b,l)}:function(){var a=b.grid;a.edit||(a.edit=h);n&&m.push(y.before(a,"removeRow",function(c){c=a.cell(c,b.id).element;(c=(c.contents||
c).widget)&&c.destroyRecursive()}))});y.after(b,"destroy",function(){s.forEach(m,function(a){a.remove()});b._editorBlurHandle&&b._editorBlurHandle.remove();e&&n&&b.editorInstance.destroyRecursive()});b.renderCell=e?function(a,c,d,f){if(!f||!f.alreadyHooked)g("TD"==d.tagName?d:d.parentNode,e,function(){C=f;b.grid.edit(this)});return l.call(b,a,c,d,f)}:function(c,d,e,g){if(!b.canEdit||b.canEdit(c,d))c=a(b),f(c,b,e,d),e[n?"widget":"input"]=c;else return l.call(b,c,d,e,g)};return b}})}}});
define("dojorama/layers/dgrid-extra",[],1);