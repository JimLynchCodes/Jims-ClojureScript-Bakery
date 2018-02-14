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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40586){
var map__40587 = p__40586;
var map__40587__$1 = ((((!((map__40587 == null)))?((((map__40587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40587):map__40587);
var operation = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__40587__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__40589_40601 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__40590_40602 = null;
var count__40591_40603 = (0);
var i__40592_40604 = (0);
while(true){
if((i__40592_40604 < count__40591_40603)){
var vec__40593_40605 = cljs.core._nth.call(null,chunk__40590_40602,i__40592_40604);
var k_40606 = cljs.core.nth.call(null,vec__40593_40605,(0),null);
var cb_40607 = cljs.core.nth.call(null,vec__40593_40605,(1),null);
try{cb_40607.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e40596){var e_40608 = e40596;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_40606,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_40608);
}
var G__40609 = seq__40589_40601;
var G__40610 = chunk__40590_40602;
var G__40611 = count__40591_40603;
var G__40612 = (i__40592_40604 + (1));
seq__40589_40601 = G__40609;
chunk__40590_40602 = G__40610;
count__40591_40603 = G__40611;
i__40592_40604 = G__40612;
continue;
} else {
var temp__4657__auto___40613 = cljs.core.seq.call(null,seq__40589_40601);
if(temp__4657__auto___40613){
var seq__40589_40614__$1 = temp__4657__auto___40613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40589_40614__$1)){
var c__29262__auto___40615 = cljs.core.chunk_first.call(null,seq__40589_40614__$1);
var G__40616 = cljs.core.chunk_rest.call(null,seq__40589_40614__$1);
var G__40617 = c__29262__auto___40615;
var G__40618 = cljs.core.count.call(null,c__29262__auto___40615);
var G__40619 = (0);
seq__40589_40601 = G__40616;
chunk__40590_40602 = G__40617;
count__40591_40603 = G__40618;
i__40592_40604 = G__40619;
continue;
} else {
var vec__40597_40620 = cljs.core.first.call(null,seq__40589_40614__$1);
var k_40621 = cljs.core.nth.call(null,vec__40597_40620,(0),null);
var cb_40622 = cljs.core.nth.call(null,vec__40597_40620,(1),null);
try{cb_40622.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e40600){var e_40623 = e40600;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_40621,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_40623);
}
var G__40624 = cljs.core.next.call(null,seq__40589_40614__$1);
var G__40625 = null;
var G__40626 = (0);
var G__40627 = (0);
seq__40589_40601 = G__40624;
chunk__40590_40602 = G__40625;
count__40591_40603 = G__40626;
i__40592_40604 = G__40627;
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

//# sourceMappingURL=trace.js.map?rel=1518582097993
