//>>built
define("dojo/i18n","./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "),function(p,v,q,w,A,r,s,B,C){q.add("dojo-preload-i18n-Api",1);s=p.i18n={};var D=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,E=function(a,c,b,d){var e=[b+d];c=c.split("-");for(var h="",g=0;g<c.length;g++)if(h+=(h?"-":"")+c[g],!a||a[h])e.push(b+h+"/"+d),e.specificity=h;return e},m={},z=function(a,c,b){b=b?b.toLowerCase():p.locale;a=a.replace(/\./g,"/");c=c.replace(/\./g,"/");
return/root/i.test(b)?a+"/nls/"+c:a+"/nls/"+b+"/"+c},F=p.getL10nName=function(a,c,b){return C.id+"!"+z(a,c,b)},G=function(a,c,b,d,e,h){a([c],function(g){var n=r.clone(g.root),t=E(!g._v1x&&g,e,b,d);a(t,function(){for(var a=1;a<t.length;a++)n=r.mixin(r.clone(n),arguments[a]);m[c+"/"+e]=n;n.$locale=t.specificity;h()})})},H=function(a){var c=A.extraLocale||[],c=r.isArray(c)?c:[c];c.push(a);return c},y=function(a,c,b){if(q("dojo-preload-i18n-Api")){var d=a.split("*"),e="preload"==d[1];e&&(m[a]||(m[a]=
1,I(d[2],B.parse(d[3]),1,c)),b(1));if(!(d=e))u&&x.push([a,c,b]),d=u;if(d)return}a=D.exec(a);var h=a[1]+"/",g=a[5]||a[4],n=h+g,d=(a=a[5]&&a[4])||p.locale,t=n+"/"+d;a=a?[d]:H(d);var f=a.length,k=function(){--f||b(r.delegate(m[t]))};w.forEach(a,function(a){var b=n+"/"+a;q("dojo-preload-i18n-Api")&&l(b);m[b]?k():G(c,n,h,g,a,k)})};if(q("dojo-unit-tests"))var J=s.unitTests=[];q("dojo-preload-i18n-Api");var K=s.normalizeLocale=function(a){a=a?a.toLowerCase():p.locale;return"root"==a?"ROOT":a},u=0,x=[],I=
s._preloadLocalizations=function(a,c,b,d){function e(a,c){d([a],c)}function f(a,c){for(var b=a.split("-");b.length;){if(c(b.join("-")))return;b.pop()}c("ROOT")}function g(b){b=K(b);f(b,function(b){if(0<=w.indexOf(c,b)){var d=a.replace(/\./g,"/")+"_"+b;u++;e(d,function(a){for(var c in a)m[v.toAbsMid(c)+"/"+b]=a[c];for(--u;!u&&x.length;)y.apply(null,x.shift())});return!0}return!1})}d=d||v;g();w.forEach(p.config.extraLocale,g)},l=function(){},f={},k=new Function("__bundle","__checkForLegacyModules",
"__mid","__amdValue","var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),l=function(a){for(var c,b=a.split("/"),d=p.global[b[0]],e=1;d&&e<b.length-1;d=
d[b[e++]]);d&&((c=d[b[e]])||(c=d[b[e].replace(/-/g,"_")]),c&&(m[a]=c));return c};s.getLocalization=function(a,c,b){var d;a=z(a,c,b);y(a,v,function(a){d=a});return d};q("dojo-unit-tests")&&J.push(function(a){a.register("tests.i18n.unit",function(a){var b;b=k("{prop:1}",l,"nonsense",f);a.is({prop:1},b);a.is(void 0,b[1]);b=k("({prop:1})",l,"nonsense",f);a.is({prop:1},b);a.is(void 0,b[1]);b=k("{'prop-x':1}",l,"nonsense",f);a.is({"prop-x":1},b);a.is(void 0,b[1]);b=k("({'prop-x':1})",l,"nonsense",f);a.is({"prop-x":1},
b);a.is(void 0,b[1]);b=k("define({'prop-x':1})",l,"nonsense",f);a.is(f,b);a.is({"prop-x":1},f.result);b=k("define('some/module', {'prop-x':1})",l,"nonsense",f);a.is(f,b);a.is({"prop-x":1},f.result);b=k("this is total nonsense and should throw an error",l,"nonsense",f);a.is(b instanceof Error,!0)})});return r.mixin(s,{dynamic:!0,normalize:function(a,c){return/^\./.test(a)?c(a):a},load:y,cache:m,getL10nName:F})});