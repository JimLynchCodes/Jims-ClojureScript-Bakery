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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11146){
var map__11147 = p__11146;
var map__11147__$1 = ((((!((map__11147 == null)))?((((map__11147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11147):map__11147);
var operation = cljs.core.get.call(null,map__11147__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__11147__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__11147__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__11147__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__7587__auto__ = child_of;
if(cljs.core.truth_(or__7587__auto__)){
return or__7587__auto__;
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
var seq__11149_11161 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11150_11162 = null;
var count__11151_11163 = (0);
var i__11152_11164 = (0);
while(true){
if((i__11152_11164 < count__11151_11163)){
var vec__11153_11165 = cljs.core._nth.call(null,chunk__11150_11162,i__11152_11164);
var k_11166 = cljs.core.nth.call(null,vec__11153_11165,(0),null);
var cb_11167 = cljs.core.nth.call(null,vec__11153_11165,(1),null);
try{cb_11167.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11156){var e_11168 = e11156;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11166,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11168);
}
var G__11169 = seq__11149_11161;
var G__11170 = chunk__11150_11162;
var G__11171 = count__11151_11163;
var G__11172 = (i__11152_11164 + (1));
seq__11149_11161 = G__11169;
chunk__11150_11162 = G__11170;
count__11151_11163 = G__11171;
i__11152_11164 = G__11172;
continue;
} else {
var temp__4657__auto___11173 = cljs.core.seq.call(null,seq__11149_11161);
if(temp__4657__auto___11173){
var seq__11149_11174__$1 = temp__4657__auto___11173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11149_11174__$1)){
var c__8426__auto___11175 = cljs.core.chunk_first.call(null,seq__11149_11174__$1);
var G__11176 = cljs.core.chunk_rest.call(null,seq__11149_11174__$1);
var G__11177 = c__8426__auto___11175;
var G__11178 = cljs.core.count.call(null,c__8426__auto___11175);
var G__11179 = (0);
seq__11149_11161 = G__11176;
chunk__11150_11162 = G__11177;
count__11151_11163 = G__11178;
i__11152_11164 = G__11179;
continue;
} else {
var vec__11157_11180 = cljs.core.first.call(null,seq__11149_11174__$1);
var k_11181 = cljs.core.nth.call(null,vec__11157_11180,(0),null);
var cb_11182 = cljs.core.nth.call(null,vec__11157_11180,(1),null);
try{cb_11182.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11160){var e_11183 = e11160;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11181,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11183);
}
var G__11184 = cljs.core.next.call(null,seq__11149_11174__$1);
var G__11185 = null;
var G__11186 = (0);
var G__11187 = (0);
seq__11149_11161 = G__11184;
chunk__11150_11162 = G__11185;
count__11151_11163 = G__11186;
i__11152_11164 = G__11187;
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

//# sourceMappingURL=trace.js.map
