// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40594){
var map__40595 = p__40594;
var map__40595__$1 = ((((!((map__40595 == null)))?((((map__40595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40595):map__40595);
var operation = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__40595__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__28423__auto__ = child_of;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__40597_40609 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__40598_40610 = null;
var count__40599_40611 = (0);
var i__40600_40612 = (0);
while(true){
if((i__40600_40612 < count__40599_40611)){
var vec__40601_40613 = cljs.core._nth.call(null,chunk__40598_40610,i__40600_40612);
var k_40614 = cljs.core.nth.call(null,vec__40601_40613,(0),null);
var cb_40615 = cljs.core.nth.call(null,vec__40601_40613,(1),null);
try{cb_40615.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e40604){var e_40616 = e40604;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_40614,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_40616);
}
var G__40617 = seq__40597_40609;
var G__40618 = chunk__40598_40610;
var G__40619 = count__40599_40611;
var G__40620 = (i__40600_40612 + (1));
seq__40597_40609 = G__40617;
chunk__40598_40610 = G__40618;
count__40599_40611 = G__40619;
i__40600_40612 = G__40620;
continue;
} else {
var temp__4657__auto___40621 = cljs.core.seq.call(null,seq__40597_40609);
if(temp__4657__auto___40621){
var seq__40597_40622__$1 = temp__4657__auto___40621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40597_40622__$1)){
var c__29262__auto___40623 = cljs.core.chunk_first.call(null,seq__40597_40622__$1);
var G__40624 = cljs.core.chunk_rest.call(null,seq__40597_40622__$1);
var G__40625 = c__29262__auto___40623;
var G__40626 = cljs.core.count.call(null,c__29262__auto___40623);
var G__40627 = (0);
seq__40597_40609 = G__40624;
chunk__40598_40610 = G__40625;
count__40599_40611 = G__40626;
i__40600_40612 = G__40627;
continue;
} else {
var vec__40605_40628 = cljs.core.first.call(null,seq__40597_40622__$1);
var k_40629 = cljs.core.nth.call(null,vec__40605_40628,(0),null);
var cb_40630 = cljs.core.nth.call(null,vec__40605_40628,(1),null);
try{cb_40630.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e40608){var e_40631 = e40608;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_40629,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_40631);
}
var G__40632 = cljs.core.next.call(null,seq__40597_40622__$1);
var G__40633 = null;
var G__40634 = (0);
var G__40635 = (0);
seq__40597_40609 = G__40632;
chunk__40598_40610 = G__40633;
count__40599_40611 = G__40634;
i__40600_40612 = G__40635;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1518440272094
