//>>built
define("dojo-data-model/QueryResults",["dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/promise/Promise","dojo/when"],function(d,k,l,m,n){var j=function(a,i){var e=null,f=function(a){var b=[],c=null;d.forEach(a,function(a){c=i();c.deserialize(a);b[b.length]=c});return b},g=function(a,b){a[b]=function(){var c=arguments;return a.then(function(a){Array.prototype.unshift.call(c,f(a));return j(d[b].apply(d,c),i)})}},h=function(a,b){a[b]||(a[b]=function(){var c=arguments;Array.prototype.unshift.call(c,
a);return d[b].apply(d,c)})};if(a)a.then?(e=new l,a.then(function(a){e.resolve(f(a))},function(a){e.reject(a)},function(a){e.progress(a)}),a=k.delegate(new m,e.promise),g(a,"forEach"),g(a,"filter"),g(a,"map")):(a=f(a),h(a,"forEach"),h(a,"filter"),h(a,"map"));else return a;if(!a.total)a.total=n(a,function(a){return a.length});return a};return j});