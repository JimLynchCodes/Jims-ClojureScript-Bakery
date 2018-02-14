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
var G__40156__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40157__i = 0, G__40157__a = new Array(arguments.length -  0);
while (G__40157__i < G__40157__a.length) {G__40157__a[G__40157__i] = arguments[G__40157__i + 0]; ++G__40157__i;}
  args = new cljs.core.IndexedSeq(G__40157__a,0,null);
} 
return G__40156__delegate.call(this,args);};
G__40156.cljs$lang$maxFixedArity = 0;
G__40156.cljs$lang$applyTo = (function (arglist__40158){
var args = cljs.core.seq(arglist__40158);
return G__40156__delegate(args);
});
G__40156.cljs$core$IFn$_invoke$arity$variadic = G__40156__delegate;
return G__40156;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40159__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40160__i = 0, G__40160__a = new Array(arguments.length -  0);
while (G__40160__i < G__40160__a.length) {G__40160__a[G__40160__i] = arguments[G__40160__i + 0]; ++G__40160__i;}
  args = new cljs.core.IndexedSeq(G__40160__a,0,null);
} 
return G__40159__delegate.call(this,args);};
G__40159.cljs$lang$maxFixedArity = 0;
G__40159.cljs$lang$applyTo = (function (arglist__40161){
var args = cljs.core.seq(arglist__40161);
return G__40159__delegate(args);
});
G__40159.cljs$core$IFn$_invoke$arity$variadic = G__40159__delegate;
return G__40159;
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

//# sourceMappingURL=debug.js.map?rel=1518582095949
