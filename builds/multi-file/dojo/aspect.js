//>>built
define("dojo/aspect",[],function(){function n(g,d,h,k){var c=g[d],f="around"==d,a;if(f){var p=h(function(){return c.advice(this,arguments)});a={remove:function(){a.cancelled=!0},advice:function(e,b){return a.cancelled?c.advice(e,b):p.apply(e,b)}}}else a={remove:function(){if(this.advice){this.advice=null;var e=a.previous,b=a.next;!b&&!e?delete g[d]:(e?e.next=b:g[d]=b,b&&(b.previous=e))}},id:m++,advice:h,receiveArguments:k};if(c&&!f)if("after"==d){for(;c.next&&(c=c.next););c.next=a;a.previous=c}else"before"==
d&&(g[d]=a,a.next=c,c.previous=a);else g[d]=a;return a}function l(g){return function(d,h,k,c){var f=d[h],a;if(!f||f.target!=d)d[h]=a=function(){for(var d=m,e=arguments,b=a.before;b;)e=b.advice.apply(this,e)||e,b=b.next;if(a.around)var c=a.around.advice(this,e);for(b=a.after;b&&b.id<d;){if(b.receiveArguments)var f=b.advice.apply(this,e),c=void 0===f?c:f;else c=b.advice.call(this,c,e);b=b.next}return c},f&&(a.around={advice:function(a,c){return f.apply(a,c)}}),a.target=d;d=n(a||f,g,k,c);k=null;return d}}
var m=0,q=l("after"),r=l("before"),s=l("around");return{before:r,around:s,after:q}});