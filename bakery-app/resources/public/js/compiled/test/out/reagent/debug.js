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
var G__9841__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9842__i = 0, G__9842__a = new Array(arguments.length -  0);
while (G__9842__i < G__9842__a.length) {G__9842__a[G__9842__i] = arguments[G__9842__i + 0]; ++G__9842__i;}
  args = new cljs.core.IndexedSeq(G__9842__a,0,null);
} 
return G__9841__delegate.call(this,args);};
G__9841.cljs$lang$maxFixedArity = 0;
G__9841.cljs$lang$applyTo = (function (arglist__9843){
var args = cljs.core.seq(arglist__9843);
return G__9841__delegate(args);
});
G__9841.cljs$core$IFn$_invoke$arity$variadic = G__9841__delegate;
return G__9841;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9844__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9845__i = 0, G__9845__a = new Array(arguments.length -  0);
while (G__9845__i < G__9845__a.length) {G__9845__a[G__9845__i] = arguments[G__9845__i + 0]; ++G__9845__i;}
  args = new cljs.core.IndexedSeq(G__9845__a,0,null);
} 
return G__9844__delegate.call(this,args);};
G__9844.cljs$lang$maxFixedArity = 0;
G__9844.cljs$lang$applyTo = (function (arglist__9846){
var args = cljs.core.seq(arglist__9846);
return G__9844__delegate(args);
});
G__9844.cljs$core$IFn$_invoke$arity$variadic = G__9844__delegate;
return G__9844;
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

//# sourceMappingURL=debug.js.map
