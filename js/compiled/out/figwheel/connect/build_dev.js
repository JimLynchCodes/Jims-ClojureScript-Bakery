// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('bakery_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39443__delegate = function (x){
if(cljs.core.truth_(bakery_app.core.mount_root)){
return cljs.core.apply.call(null,bakery_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bakery-app.core/mount-root' is missing");
}
};
var G__39443 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39444__i = 0, G__39444__a = new Array(arguments.length -  0);
while (G__39444__i < G__39444__a.length) {G__39444__a[G__39444__i] = arguments[G__39444__i + 0]; ++G__39444__i;}
  x = new cljs.core.IndexedSeq(G__39444__a,0,null);
} 
return G__39443__delegate.call(this,x);};
G__39443.cljs$lang$maxFixedArity = 0;
G__39443.cljs$lang$applyTo = (function (arglist__39445){
var x = cljs.core.seq(arglist__39445);
return G__39443__delegate(x);
});
G__39443.cljs$core$IFn$_invoke$arity$variadic = G__39443__delegate;
return G__39443;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1518440268592
