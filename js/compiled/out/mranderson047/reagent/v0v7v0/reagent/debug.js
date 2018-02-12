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
var G__40760__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40761__i = 0, G__40761__a = new Array(arguments.length -  0);
while (G__40761__i < G__40761__a.length) {G__40761__a[G__40761__i] = arguments[G__40761__i + 0]; ++G__40761__i;}
  args = new cljs.core.IndexedSeq(G__40761__a,0,null);
} 
return G__40760__delegate.call(this,args);};
G__40760.cljs$lang$maxFixedArity = 0;
G__40760.cljs$lang$applyTo = (function (arglist__40762){
var args = cljs.core.seq(arglist__40762);
return G__40760__delegate(args);
});
G__40760.cljs$core$IFn$_invoke$arity$variadic = G__40760__delegate;
return G__40760;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40763__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40764__i = 0, G__40764__a = new Array(arguments.length -  0);
while (G__40764__i < G__40764__a.length) {G__40764__a[G__40764__i] = arguments[G__40764__i + 0]; ++G__40764__i;}
  args = new cljs.core.IndexedSeq(G__40764__a,0,null);
} 
return G__40763__delegate.call(this,args);};
G__40763.cljs$lang$maxFixedArity = 0;
G__40763.cljs$lang$applyTo = (function (arglist__40765){
var args = cljs.core.seq(arglist__40765);
return G__40763__delegate(args);
});
G__40763.cljs$core$IFn$_invoke$arity$variadic = G__40763__delegate;
return G__40763;
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

//# sourceMappingURL=debug.js.map?rel=1518440272575
