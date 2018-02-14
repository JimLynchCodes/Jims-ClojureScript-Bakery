// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('bakery_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__51924__delegate = function (x){
if(cljs.core.truth_(bakery_app.core.mount_root)){
return cljs.core.apply.call(null,bakery_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bakery-app.core/mount-root' is missing");
}
};
var G__51924 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__51925__i = 0, G__51925__a = new Array(arguments.length -  0);
while (G__51925__i < G__51925__a.length) {G__51925__a[G__51925__i] = arguments[G__51925__i + 0]; ++G__51925__i;}
  x = new cljs.core.IndexedSeq(G__51925__a,0,null);
} 
return G__51924__delegate.call(this,x);};
G__51924.cljs$lang$maxFixedArity = 0;
G__51924.cljs$lang$applyTo = (function (arglist__51926){
var x = cljs.core.seq(arglist__51926);
return G__51924__delegate(x);
});
G__51924.cljs$core$IFn$_invoke$arity$variadic = G__51924__delegate;
return G__51924;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1518583797349
