//>>built
define("dojo-data-model/_CrudModel","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/when ./DataModel".split(" "),function(l,m,e,h,k,f){return l([f],{store:null,errorModel:null,promiseOrValue:[],constructor:function(a){var b,c={};this.store=a.store;if(a.errorModel)this.errorModel=a.errorModel;else{for(b in this.props)this.props.hasOwnProperty(b)&&(c[b]="");this.errorModel=new f({props:c})}},getErrorModel:function(){return this.errorModel},save:function(a){var b=new h,c=!1,d=
null,g={},d=this.get(this.store.idProperty);this.errorModel.initialize();try{this.validate()}catch(f){c=f.errors}c?b.reject(this.normalizeClientSideValidationErrors(c)):(d=null===d||void 0===d||""===d?"add":"put",g=this.serialize(),"add"===d&&delete g[this.store.idProperty],this.promiseOrValue.save=this.store[d](g,a),k(this.promiseOrValue.save,e.hitch(this,function(a){this.set(this.store.idProperty,a);b.resolve(this)}),e.hitch(this,function(a){b.reject(this.normalizeServerError(a))})));return b.promise},
remove:function(a){var b=new h,c=this.get(this.store.idProperty);this.errorModel.initialize();this.promiseOrValue.remove=this.store.remove(c,a);k(this.promiseOrValue.remove,e.hitch(this,function(){this.initialize();b.resolve(this)}),e.hitch(this,function(a){b.reject(this.normalizeServerError(a))}));return b.promise},normalizeClientSideValidationErrors:function(a){this.errorModel.set(a);return{code:"invalid-input"}},normalizeServerError:function(a){return!a.response||400===a.response.status?{code:"unknown-error"}:
403===a.response.status?{code:"forbidden"}:404===a.response.status?{code:"not-found"}:422===a.response.status?(this.normalizeServerSideValidationErrors(a),{code:"invalid-input"}):{code:"unknown-error"}},normalizeServerSideValidationErrors:function(a){},destroy:function(){m.forEach(this.promisOrValue,function(a){a.cancel&&a.cancel()})}})});