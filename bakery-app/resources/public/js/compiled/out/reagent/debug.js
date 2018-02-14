// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30673__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30674__i = 0, G__30674__a = new Array(arguments.length -  0);
while (G__30674__i < G__30674__a.length) {G__30674__a[G__30674__i] = arguments[G__30674__i + 0]; ++G__30674__i;}
  args = new cljs.core.IndexedSeq(G__30674__a,0,null);
} 
return G__30673__delegate.call(this,args);};
G__30673.cljs$lang$maxFixedArity = 0;
G__30673.cljs$lang$applyTo = (function (arglist__30675){
var args = cljs.core.seq(arglist__30675);
return G__30673__delegate(args);
});
G__30673.cljs$core$IFn$_invoke$arity$variadic = G__30673__delegate;
return G__30673;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30676__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30677__i = 0, G__30677__a = new Array(arguments.length -  0);
while (G__30677__i < G__30677__a.length) {G__30677__a[G__30677__i] = arguments[G__30677__i + 0]; ++G__30677__i;}
  args = new cljs.core.IndexedSeq(G__30677__a,0,null);
} 
return G__30676__delegate.call(this,args);};
G__30676.cljs$lang$maxFixedArity = 0;
G__30676.cljs$lang$applyTo = (function (arglist__30678){
var args = cljs.core.seq(arglist__30678);
return G__30676__delegate(args);
});
G__30676.cljs$core$IFn$_invoke$arity$variadic = G__30676__delegate;
return G__30676;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1518580795312
