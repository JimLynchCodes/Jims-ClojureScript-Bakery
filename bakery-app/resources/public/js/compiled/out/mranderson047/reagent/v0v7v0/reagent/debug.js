// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__40752__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40753__i = 0, G__40753__a = new Array(arguments.length -  0);
while (G__40753__i < G__40753__a.length) {G__40753__a[G__40753__i] = arguments[G__40753__i + 0]; ++G__40753__i;}
  args = new cljs.core.IndexedSeq(G__40753__a,0,null);
} 
return G__40752__delegate.call(this,args);};
G__40752.cljs$lang$maxFixedArity = 0;
G__40752.cljs$lang$applyTo = (function (arglist__40754){
var args = cljs.core.seq(arglist__40754);
return G__40752__delegate(args);
});
G__40752.cljs$core$IFn$_invoke$arity$variadic = G__40752__delegate;
return G__40752;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40755__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40756__i = 0, G__40756__a = new Array(arguments.length -  0);
while (G__40756__i < G__40756__a.length) {G__40756__a[G__40756__i] = arguments[G__40756__i + 0]; ++G__40756__i;}
  args = new cljs.core.IndexedSeq(G__40756__a,0,null);
} 
return G__40755__delegate.call(this,args);};
G__40755.cljs$lang$maxFixedArity = 0;
G__40755.cljs$lang$applyTo = (function (arglist__40757){
var args = cljs.core.seq(arglist__40757);
return G__40755__delegate(args);
});
G__40755.cljs$core$IFn$_invoke$arity$variadic = G__40755__delegate;
return G__40755;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson047$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1518582098125
