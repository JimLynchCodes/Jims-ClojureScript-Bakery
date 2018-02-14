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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__31625){
var map__31626 = p__31625;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var operation = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__31628_31640 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__31629_31641 = null;
var count__31630_31642 = (0);
var i__31631_31643 = (0);
while(true){
if((i__31631_31643 < count__31630_31642)){
var vec__31632_31644 = cljs.core._nth.call(null,chunk__31629_31641,i__31631_31643);
var k_31645 = cljs.core.nth.call(null,vec__31632_31644,(0),null);
var cb_31646 = cljs.core.nth.call(null,vec__31632_31644,(1),null);
try{cb_31646.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e31635){var e_31647 = e31635;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_31645,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_31647);
}
var G__31648 = seq__31628_31640;
var G__31649 = chunk__31629_31641;
var G__31650 = count__31630_31642;
var G__31651 = (i__31631_31643 + (1));
seq__31628_31640 = G__31648;
chunk__31629_31641 = G__31649;
count__31630_31642 = G__31650;
i__31631_31643 = G__31651;
continue;
} else {
var temp__4657__auto___31652 = cljs.core.seq.call(null,seq__31628_31640);
if(temp__4657__auto___31652){
var seq__31628_31653__$1 = temp__4657__auto___31652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31628_31653__$1)){
var c__29262__auto___31654 = cljs.core.chunk_first.call(null,seq__31628_31653__$1);
var G__31655 = cljs.core.chunk_rest.call(null,seq__31628_31653__$1);
var G__31656 = c__29262__auto___31654;
var G__31657 = cljs.core.count.call(null,c__29262__auto___31654);
var G__31658 = (0);
seq__31628_31640 = G__31655;
chunk__31629_31641 = G__31656;
count__31630_31642 = G__31657;
i__31631_31643 = G__31658;
continue;
} else {
var vec__31636_31659 = cljs.core.first.call(null,seq__31628_31653__$1);
var k_31660 = cljs.core.nth.call(null,vec__31636_31659,(0),null);
var cb_31661 = cljs.core.nth.call(null,vec__31636_31659,(1),null);
try{cb_31661.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e31639){var e_31662 = e31639;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_31660,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_31662);
}
var G__31663 = cljs.core.next.call(null,seq__31628_31653__$1);
var G__31664 = null;
var G__31665 = (0);
var G__31666 = (0);
seq__31628_31640 = G__31663;
chunk__31629_31641 = G__31664;
count__31630_31642 = G__31665;
i__31631_31643 = G__31666;
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

//# sourceMappingURL=trace.js.map?rel=1518580797761
