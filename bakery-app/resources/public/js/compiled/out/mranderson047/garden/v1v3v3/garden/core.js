// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson047.garden.v1v3v3.garden.core.css = (function mranderson047$garden$v1v3v3$garden$core$css(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45727 = arguments.length;
var i__29593__auto___45728 = (0);
while(true){
if((i__29593__auto___45728 < len__29592__auto___45727)){
args__29599__auto__.push((arguments[i__29593__auto___45728]));

var G__45729 = (i__29593__auto___45728 + (1));
i__29593__auto___45728 = G__45729;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson047.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq45726){
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45726));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson047.garden.v1v3v3.garden.core.style = (function mranderson047$garden$v1v3v3$garden$core$style(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45731 = arguments.length;
var i__29593__auto___45732 = (0);
while(true){
if((i__29593__auto___45732 < len__29592__auto___45731)){
args__29599__auto__.push((arguments[i__29593__auto___45732]));

var G__45733 = (i__29593__auto___45732 + (1));
i__29593__auto___45732 = G__45733;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson047.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq45730){
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45730));
});


//# sourceMappingURL=core.js.map?rel=1518440289168
