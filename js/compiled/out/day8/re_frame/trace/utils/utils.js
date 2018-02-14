// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.utils.utils');
goog.require('cljs.core');
day8.re_frame.trace.utils.utils.diff_link = "https://github.com/Day8/re-frame-trace/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector
 */
day8.re_frame.trace.utils.utils.last_in_vec = (function day8$re_frame$trace$utils$utils$last_in_vec(v){
return cljs.core.nth.call(null,v,(cljs.core.count.call(null,v) - (1)));
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame.trace.utils.utils.find_all_indexes_in_vec = (function day8$re_frame$trace$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.call(null,(function (p1__45757_SHARP_,p2__45756_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__45756_SHARP_))){
return p1__45757_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame.trace.utils.utils.find_index_in_vec = (function day8$re_frame$trace$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first.call(null,day8.re_frame.trace.utils.utils.find_all_indexes_in_vec.call(null,pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame.trace.utils.utils.id_between_xf = (function day8$re_frame$trace$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__45758_SHARP_){
return ((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45758_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45758_SHARP_) <= ending));
}));
});
day8.re_frame.trace.utils.utils.spy = (function day8$re_frame$trace$utils$utils$spy(var_args){
var G__45760 = arguments.length;
switch (G__45760) {
case 1:
return day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame.trace.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame.trace.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame.trace.utils.utils.pluralize = (function day8$re_frame$trace$utils$utils$pluralize(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45769 = arguments.length;
var i__29593__auto___45770 = (0);
while(true){
if((i__29593__auto___45770 < len__29592__auto___45769)){
args__29599__auto__.push((arguments[i__29593__auto___45770]));

var G__45771 = (i__29593__auto___45770 + (1));
i__29593__auto___45770 = G__45771;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((2) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((2)),(0),null)):null);
return day8.re_frame.trace.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29600__auto__);
});

day8.re_frame.trace.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__45765){
var vec__45766 = p__45765;
var plural = cljs.core.nth.call(null,vec__45766,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),num))?singular:(function (){var or__28423__auto__ = plural;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame.trace.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

day8.re_frame.trace.utils.utils.pluralize.cljs$lang$applyTo = (function (seq45762){
var G__45763 = cljs.core.first.call(null,seq45762);
var seq45762__$1 = cljs.core.next.call(null,seq45762);
var G__45764 = cljs.core.first.call(null,seq45762__$1);
var seq45762__$2 = cljs.core.next.call(null,seq45762__$1);
return day8.re_frame.trace.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__45763,G__45764,seq45762__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame.trace.utils.utils.pluralize_ = (function day8$re_frame$trace$utils$utils$pluralize_(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45779 = arguments.length;
var i__29593__auto___45780 = (0);
while(true){
if((i__29593__auto___45780 < len__29592__auto___45779)){
args__29599__auto__.push((arguments[i__29593__auto___45780]));

var G__45781 = (i__29593__auto___45780 + (1));
i__29593__auto___45780 = G__45781;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((2) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((2)),(0),null)):null);
return day8.re_frame.trace.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29600__auto__);
});

day8.re_frame.trace.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__45775){
var vec__45776 = p__45775;
var plural = cljs.core.nth.call(null,vec__45776,(0),null);
if(cljs.core._EQ_.call(null,(1),num)){
return singular;
} else {
var or__28423__auto__ = plural;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame.trace.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

day8.re_frame.trace.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq45772){
var G__45773 = cljs.core.first.call(null,seq45772);
var seq45772__$1 = cljs.core.next.call(null,seq45772);
var G__45774 = cljs.core.first.call(null,seq45772__$1);
var seq45772__$2 = cljs.core.next.call(null,seq45772__$1);
return day8.re_frame.trace.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic(G__45773,G__45774,seq45772__$2);
});


//# sourceMappingURL=utils.js.map?rel=1518582113552
