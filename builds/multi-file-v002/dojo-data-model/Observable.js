//>>built
define("dojo-data-model/Observable",["dojo/store/Observable"],function(b){return function(a){var d=b(a),e=d.query;d.query=function(b,a){var c=e(b,a),g=c.observe;c.observe=function(b,a){return g(function(a,c,e){var f=a;"function"!==typeof a.deserialize&&(f=d.getModelInstance(),f.deserialize(a));return b(f,c,e)},a)};return c};return d}});
//@ sourceMappingURL=Observable.js.map