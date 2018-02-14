// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame.trace.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame.trace.utils.localstorage.safe_prefix = "day8.re-frame.trace.";
day8.re_frame.trace.utils.localstorage.safe_key = (function day8$re_frame$trace$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-trace value from local storage.
 */
day8.re_frame.trace.utils.localstorage.get = (function day8$re_frame$trace$utils$localstorage$get(var_args){
var G__45865 = arguments.length;
switch (G__45865) {
case 1:
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame.trace.utils.localstorage.get.call(null,key,null);
});

day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame.trace.utils.localstorage.storage.get(day8.re_frame.trace.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame.trace.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-trace value to local storage.
 */
day8.re_frame.trace.utils.localstorage.save_BANG_ = (function day8$re_frame$trace$utils$localstorage$save_BANG_(key,value){
return day8.re_frame.trace.utils.localstorage.storage.set(day8.re_frame.trace.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-trace config keys
 */
day8.re_frame.trace.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame$trace$utils$localstorage$delete_all_keys_BANG_(){
var seq__45867 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__45868 = null;
var count__45869 = (0);
var i__45870 = (0);
while(true){
if((i__45870 < count__45869)){
var k = cljs.core._nth.call(null,chunk__45868,i__45870);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame.trace.utils.localstorage.safe_prefix)){
day8.re_frame.trace.utils.localstorage.storage.remove(k);
} else {
}

var G__45871 = seq__45867;
var G__45872 = chunk__45868;
var G__45873 = count__45869;
var G__45874 = (i__45870 + (1));
seq__45867 = G__45871;
chunk__45868 = G__45872;
count__45869 = G__45873;
i__45870 = G__45874;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45867);
if(temp__4657__auto__){
var seq__45867__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45867__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__45867__$1);
var G__45875 = cljs.core.chunk_rest.call(null,seq__45867__$1);
var G__45876 = c__29262__auto__;
var G__45877 = cljs.core.count.call(null,c__29262__auto__);
var G__45878 = (0);
seq__45867 = G__45875;
chunk__45868 = G__45876;
count__45869 = G__45877;
i__45870 = G__45878;
continue;
} else {
var k = cljs.core.first.call(null,seq__45867__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame.trace.utils.localstorage.safe_prefix)){
day8.re_frame.trace.utils.localstorage.storage.remove(k);
} else {
}

var G__45879 = cljs.core.next.call(null,seq__45867__$1);
var G__45880 = null;
var G__45881 = (0);
var G__45882 = (0);
seq__45867 = G__45879;
chunk__45868 = G__45880;
count__45869 = G__45881;
i__45870 = G__45882;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1518582114359
