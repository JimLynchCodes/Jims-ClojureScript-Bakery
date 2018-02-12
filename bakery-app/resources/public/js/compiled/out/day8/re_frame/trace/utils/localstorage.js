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
var G__45873 = arguments.length;
switch (G__45873) {
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
var seq__45875 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__45876 = null;
var count__45877 = (0);
var i__45878 = (0);
while(true){
if((i__45878 < count__45877)){
var k = cljs.core._nth.call(null,chunk__45876,i__45878);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame.trace.utils.localstorage.safe_prefix)){
day8.re_frame.trace.utils.localstorage.storage.remove(k);
} else {
}

var G__45879 = seq__45875;
var G__45880 = chunk__45876;
var G__45881 = count__45877;
var G__45882 = (i__45878 + (1));
seq__45875 = G__45879;
chunk__45876 = G__45880;
count__45877 = G__45881;
i__45878 = G__45882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45875);
if(temp__4657__auto__){
var seq__45875__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45875__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__45875__$1);
var G__45883 = cljs.core.chunk_rest.call(null,seq__45875__$1);
var G__45884 = c__29262__auto__;
var G__45885 = cljs.core.count.call(null,c__29262__auto__);
var G__45886 = (0);
seq__45875 = G__45883;
chunk__45876 = G__45884;
count__45877 = G__45885;
i__45878 = G__45886;
continue;
} else {
var k = cljs.core.first.call(null,seq__45875__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame.trace.utils.localstorage.safe_prefix)){
day8.re_frame.trace.utils.localstorage.storage.remove(k);
} else {
}

var G__45887 = cljs.core.next.call(null,seq__45875__$1);
var G__45888 = null;
var G__45889 = (0);
var G__45890 = (0);
seq__45875 = G__45887;
chunk__45876 = G__45888;
count__45877 = G__45889;
i__45878 = G__45890;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1518440290583
