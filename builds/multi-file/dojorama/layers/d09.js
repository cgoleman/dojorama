//>>built
require({cache:{"dojo/store/Cache":function(){define("dojo/store/Cache",["../_base/lang","../_base/Deferred"],function(g,f){var e=function(d,c,a){a=a||{};return g.delegate(d,{query:function(b,r){var h=d.query(b,r);h.forEach(function(b){(!a.isLoaded||a.isLoaded(b))&&c.put(b)});return h},queryEngine:d.queryEngine||c.queryEngine,get:function(b,a){return f.when(c.get(b),function(h){return h||f.when(d.get(b,a),function(a){a&&c.put(a,{id:b});return a})})},add:function(b,a){return f.when(d.add(b,a),function(d){c.add(b&&
"object"==typeof d?d:b,a);return d})},put:function(b,a){c.remove(a&&a.id||this.getIdentity(b));return f.when(d.put(b,a),function(d){c.put(b&&"object"==typeof d?d:b,a);return d})},remove:function(b,a){return f.when(d.remove(b,a),function(){return c.remove(b,a)})},evict:function(b){return c.remove(b)}})};g.setObject("dojo.store.Cache",e);return e})},"dojo/store/JsonRest":function(){define("dojo/store/JsonRest",["../_base/xhr","../_base/lang","../json","../_base/declare","./util/QueryResults"],function(g,
f,e,d,c){return d("dojo.store.JsonRest",null,{constructor:function(a){this.headers={};d.safeMixin(this,a)},headers:{},target:"",idProperty:"id",get:function(a,b){var b=b||{},c=f.mixin({Accept:this.accepts},this.headers,b.headers||b);return g("GET",{url:this.target+a,handleAs:"json",headers:c})},accepts:"application/javascript, application/json",getIdentity:function(a){return a[this.idProperty]},put:function(a,b){var b=b||{},c="id"in b?b.id:this.getIdentity(a),d="undefined"!=typeof c;return g(d&&!b.incremental?
"PUT":"POST",{url:d?this.target+c:this.target,postData:e.stringify(a),handleAs:"json",headers:f.mixin({"Content-Type":"application/json",Accept:this.accepts,"If-Match":!0===b.overwrite?"*":null,"If-None-Match":!1===b.overwrite?"*":null},this.headers,b.headers)})},add:function(a,b){b=b||{};b.overwrite=!1;return this.put(a,b)},remove:function(a,b){b=b||{};return g("DELETE",{url:this.target+a,headers:f.mixin({},this.headers,b.headers)})},query:function(a,b){var b=b||{},d=f.mixin({Accept:this.accepts},
this.headers,b.headers);if(0<=b.start||0<=b.count)d.Range=d["X-Range"]="items="+(b.start||"0")+"-"+("count"in b&&Infinity!=b.count?b.count+(b.start||0)-1:"");var e=-1<this.target.indexOf("?");a&&"object"==typeof a&&(a=(a=g.objectToQuery(a))?(e?"&":"?")+a:"");if(b&&b.sort){for(var i=this.sortParam,a=a+((a||e?"&":"?")+(i?i+"=":"sort(")),e=0;e<b.sort.length;e++)var o=b.sort[e],a=a+((0<e?",":"")+(o.descending?"-":"+")+encodeURIComponent(o.attribute));i||(a+=")")}var j=g("GET",{url:this.target+(a||""),
handleAs:"json",headers:d});j.total=j.then(function(){var b=j.ioArgs.xhr.getResponseHeader("Content-Range");return b&&(b=b.match(/\/(.*)/))&&+b[1]});return c(j)}})})},"dojo/store/util/QueryResults":function(){define("dojo/store/util/QueryResults",["../../_base/array","../../_base/lang","../../_base/Deferred"],function(g,f,e){var d=function(c){function a(b){c[b]||(c[b]=function(){var a=arguments;return e.when(c,function(c){Array.prototype.unshift.call(a,c);return d(g[b].apply(g,a))})})}if(!c)return c;
c.then&&(c=f.delegate(c));a("forEach");a("filter");a("map");if(!c.total)c.total=e.when(c,function(b){return b.length});return c};f.setObject("dojo.store.util.QueryResults",d);return d})},"dojo/store/Memory":function(){define("dojo/store/Memory",["../_base/declare","./util/QueryResults","./util/SimpleQueryEngine"],function(g,f,e){return g("dojo.store.Memory",null,{constructor:function(d){for(var c in d)this[c]=d[c];this.setData(this.data||[])},data:null,idProperty:"id",index:null,queryEngine:e,get:function(d){return this.data[this.index[d]]},
getIdentity:function(d){return d[this.idProperty]},put:function(d,c){var a=this.data,b=this.index,f=this.idProperty,f=d[f]=c&&"id"in c?c.id:f in d?d[f]:Math.random();if(f in b){if(c&&!1===c.overwrite)throw Error("Object already exists");a[b[f]]=d}else b[f]=a.push(d)-1;return f},add:function(d,c){(c=c||{}).overwrite=!1;return this.put(d,c)},remove:function(d){var c=this.index,a=this.data;if(d in c)return a.splice(c[d],1),this.setData(a),!0},query:function(d,c){return f(this.queryEngine(d,c)(this.data))},
setData:function(d){var b;d.items?(this.idProperty=d.identifier,b=this.data=d.items,d=b):this.data=d;this.index={};for(var c=0,a=d.length;c<a;c++)this.index[d[c][this.idProperty]]=c}})})},"dojo/store/util/SimpleQueryEngine":function(){define("dojo/store/util/SimpleQueryEngine",["../../_base/array"],function(g){return function(f,e){function d(a){var a=g.filter(a,f),b=e&&e.sort;b&&a.sort("function"==typeof b?b:function(a,c){for(var d,f=0;d=b[f];f++){var e=a[d.attribute],g=c[d.attribute];if(e!=g)return!!d.descending==
(null==e||e>g)?-1:1}return 0});if(e&&(e.start||e.count)){var c=a.length,a=a.slice(e.start||0,(e.start||0)+(e.count||Infinity));a.total=c}return a}switch(typeof f){default:throw Error("Can not query with a "+typeof f);case "object":case "undefined":var c=f,f=function(a){for(var b in c){var d=c[b];if(d&&d.test){if(!d.test(a[b],a))return!1}else if(d!=a[b])return!1}return!0};break;case "string":if(!this[f])throw Error("No filter function "+f+" was found in store");f=this[f];case "function":}d.matches=
f;return d}})},"dojo/store/Observable":function(){define("dojo/store/Observable",["../_base/kernel","../_base/lang","../_base/Deferred","../_base/array"],function(g,f,e,d){g=function(c){function a(b,a){var d=c[b];d&&(c[b]=function(b){if(i)return d.apply(this,arguments);i=!0;try{var c=d.apply(this,arguments);e.when(c,function(c){a("object"==typeof c&&c||b)});return c}finally{i=!1}})}var b=[],g=0,c=f.delegate(c);c.notify=function(c,a){g++;for(var d=b.slice(),f=0,e=d.length;f<e;f++)d[f](c,a)};var h=
c.query;c.query=function(a,j){var j=j||{},i=h.apply(this,arguments);if(i&&i.forEach){var n=f.mixin({},j);delete n.start;delete n.count;var l=c.queryEngine&&c.queryEngine(a,n),s=g,p=[],q;i.observe=function(a,f){1==p.push(a)&&b.push(q=function(a,b){e.when(i,function(e){var i=e.length!=j.count,h,o;if(++s!=g)throw Error("Query is out of date, you must observe() the query prior to any data modifications");var n,m=-1,k=-1;if(void 0!==b)for(h=0,o=e.length;h<o;h++){var q=e[h];if(c.getIdentity(q)==b){n=q;
m=h;(l||!a)&&e.splice(h,1);break}}if(l){if(a&&(l.matches?l.matches(a):l([a]).length))h=-1<m?m:e.length,e.splice(h,0,a),k=d.indexOf(l(e),a),e.splice(h,1),j.start&&0==k||!i&&k==e.length?k=-1:e.splice(k,0,a)}else a&&(void 0!==b?k=m:j.start||(k=c.defaultIndex||0,e.splice(k,0,a)));if((-1<m||-1<k)&&(f||!l||m!=k)){i=p.slice();for(h=0;e=i[h];h++)e(a||n,m,k)}})});var h={};h.remove=h.cancel=function(){var c=d.indexOf(p,a);-1<c&&(p.splice(c,1),p.length||b.splice(d.indexOf(b,q),1))};return h}}return i};var i;
a("put",function(a){c.notify(a,c.getIdentity(a))});a("add",function(a){c.notify(a)});a("remove",function(a){c.notify(void 0,a)});return c};f.setObject("dojo.store.Observable",g);return g})},"dojo-sm2-playlist/Playlist":function(){define("dojo-sm2-playlist/Playlist",["dojo/_base/declare","dojo/_base/lang","dojo/Evented"],function(g,f,e){var d=g([e],{id:null,constructor:function(c,a){var b=this,d=0,e="onbufferchange,onconnect,ondataerror,onfinish,onload,onpause,onplay,onresume,onsuspend,onstop,onid3,whileloading,whileplaying".split(",");
f.mixin(this,c);for(d=0;d<e.length;d+=1)a[e[d]]=function(a){return function(){b.emit(a,{track:b})}}(e[d]);this.id=a.id;soundManager.createSound(a)}});return g([],{tracks:[],index:-1,onready:function(){soundManager.onready.apply(soundManager,arguments)},addTrack:function(c,a){this.tracks.push(new d(c,a));this.index=0>this.index?0:this.index},getTrack:function(c){return this.tracks[c]},getTracks:function(){return this.tracks},play:function(){this.tracks.length&&this.getCurrentSound().play()},previous:function(){if(this.tracks.length)this.getCurrentSound().stop(),
this.index=0===this.index?this.tracks.length-1:this.index-1,this.getCurrentSound().play()},next:function(){if(this.tracks.length)this.getCurrentSound().stop(),this.index=this.index===this.tracks.length-1?0:this.index+1,this.getCurrentSound().play()},pause:function(){this.tracks.length&&this.getCurrentSound().pause()},isPlaying:function(){var c=this.getCurrentSound();return c?c.playState&&!c.paused:!1},getCurrentSound:function(){return!this.tracks.length?void 0:soundManager.getSoundById(this.getCurrentTrack().id)},
getCurrentTrack:function(){return!this.tracks.length?void 0:this.getTrack(this.index)}})})}}});define("dojorama/layers/d09",[],1);