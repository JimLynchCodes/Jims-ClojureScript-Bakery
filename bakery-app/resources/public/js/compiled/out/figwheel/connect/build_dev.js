// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('bakery_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32237__delegate = function (x){
if(cljs.core.truth_(bakery_app.core.mount_root)){
return cljs.core.apply.call(null,bakery_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bakery-app.core/mount-root' is missing");
}
};
var G__32237 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__32238__i = 0, G__32238__a = new Array(arguments.length -  0);
while (G__32238__i < G__32238__a.length) {G__32238__a[G__32238__i] = arguments[G__32238__i + 0]; ++G__32238__i;}
  x = new cljs.core.IndexedSeq(G__32238__a,0,null);
} 
return G__32237__delegate.call(this,x);};
G__32237.cljs$lang$maxFixedArity = 0;
G__32237.cljs$lang$applyTo = (function (arglist__32239){
var x = cljs.core.seq(arglist__32239);
return G__32237__delegate(x);
});
G__32237.cljs$core$IFn$_invoke$arity$variadic = G__32237__delegate;
return G__32237;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1518615209398
