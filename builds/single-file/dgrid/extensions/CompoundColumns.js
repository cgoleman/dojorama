//>>built
define("dgrid/extensions/CompoundColumns",["dojo/_base/lang","dojo/_base/declare","dgrid/Grid","put-selector/put","xstyle/css!../css/extensions/CompoundColumns.css"],function(m,q,r,s){return q(null,{configStructure:function(){function n(e,b,f){var c=0,h=function(){},p,a,k,l;for(p in e)a=e[p],l=(k=a.children)&&!1!==a.showChildHeaders,k?c+=a.colSpan=n(k,b+1,l):(g.push(a),d[0].push(m.delegate(a,{renderHeaderCell:h})),c++),l||(a=m.delegate(a,{rowSpan:-b})),f&&(d[b]||(d[b]=[])).push(a);return c}var e=
this.subRows&&this.subRows[0]||this.columns,d=[[]],g=[];d[0].className="dgrid-spacer-row";n(e,1,!0);var e=d.length,b,f,h,c;for(b=0;b<e;b++){h=d[b];for(f=0;f<h.length;f++)c=h[f],1>c.rowSpan&&(c.rowSpan+=e)}g=[g];g.headerRows=d;this.subRows=g;this.inherited(arguments)}})});