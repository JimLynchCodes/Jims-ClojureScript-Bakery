// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__41523_41533 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__41524_41534 = null;
var count__41525_41535 = (0);
var i__41526_41536 = (0);
while(true){
if((i__41526_41536 < count__41525_41535)){
var vec__41527_41537 = cljs.core._nth.call(null,chunk__41524_41534,i__41526_41536);
var k_41538 = cljs.core.nth.call(null,vec__41527_41537,(0),null);
var rxn_41539 = cljs.core.nth.call(null,vec__41527_41537,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_41539);

var G__41540 = seq__41523_41533;
var G__41541 = chunk__41524_41534;
var G__41542 = count__41525_41535;
var G__41543 = (i__41526_41536 + (1));
seq__41523_41533 = G__41540;
chunk__41524_41534 = G__41541;
count__41525_41535 = G__41542;
i__41526_41536 = G__41543;
continue;
} else {
var temp__4657__auto___41544 = cljs.core.seq.call(null,seq__41523_41533);
if(temp__4657__auto___41544){
var seq__41523_41545__$1 = temp__4657__auto___41544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41523_41545__$1)){
var c__29262__auto___41546 = cljs.core.chunk_first.call(null,seq__41523_41545__$1);
var G__41547 = cljs.core.chunk_rest.call(null,seq__41523_41545__$1);
var G__41548 = c__29262__auto___41546;
var G__41549 = cljs.core.count.call(null,c__29262__auto___41546);
var G__41550 = (0);
seq__41523_41533 = G__41547;
chunk__41524_41534 = G__41548;
count__41525_41535 = G__41549;
i__41526_41536 = G__41550;
continue;
} else {
var vec__41530_41551 = cljs.core.first.call(null,seq__41523_41545__$1);
var k_41552 = cljs.core.nth.call(null,vec__41530_41551,(0),null);
var rxn_41553 = cljs.core.nth.call(null,vec__41530_41551,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_41553);

var G__41554 = cljs.core.next.call(null,seq__41523_41545__$1);
var G__41555 = null;
var G__41556 = (0);
var G__41557 = (0);
seq__41523_41533 = G__41554;
chunk__41524_41534 = G__41555;
count__41525_41535 = G__41556;
i__41526_41536 = G__41557;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson047.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41558 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41232__auto___41571 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41233__auto___41572 = (end__41232__auto___41571 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__41559_41573 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__41560_41574 = null;
var count__41561_41575 = (0);
var i__41562_41576 = (0);
while(true){
if((i__41562_41576 < count__41561_41575)){
var vec__41563_41577 = cljs.core._nth.call(null,chunk__41560_41574,i__41562_41576);
var k__41234__auto___41578 = cljs.core.nth.call(null,vec__41563_41577,(0),null);
var cb__41235__auto___41579 = cljs.core.nth.call(null,vec__41563_41577,(1),null);
try{cb__41235__auto___41579.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41572,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41566){if((e41566 instanceof java.lang.Exception)){
var e__41236__auto___41580 = e41566;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41578,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41580);
} else {
throw e41566;

}
}
var G__41581 = seq__41559_41573;
var G__41582 = chunk__41560_41574;
var G__41583 = count__41561_41575;
var G__41584 = (i__41562_41576 + (1));
seq__41559_41573 = G__41581;
chunk__41560_41574 = G__41582;
count__41561_41575 = G__41583;
i__41562_41576 = G__41584;
continue;
} else {
var temp__4657__auto___41585 = cljs.core.seq.call(null,seq__41559_41573);
if(temp__4657__auto___41585){
var seq__41559_41586__$1 = temp__4657__auto___41585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41559_41586__$1)){
var c__29262__auto___41587 = cljs.core.chunk_first.call(null,seq__41559_41586__$1);
var G__41588 = cljs.core.chunk_rest.call(null,seq__41559_41586__$1);
var G__41589 = c__29262__auto___41587;
var G__41590 = cljs.core.count.call(null,c__29262__auto___41587);
var G__41591 = (0);
seq__41559_41573 = G__41588;
chunk__41560_41574 = G__41589;
count__41561_41575 = G__41590;
i__41562_41576 = G__41591;
continue;
} else {
var vec__41567_41592 = cljs.core.first.call(null,seq__41559_41586__$1);
var k__41234__auto___41593 = cljs.core.nth.call(null,vec__41567_41592,(0),null);
var cb__41235__auto___41594 = cljs.core.nth.call(null,vec__41567_41592,(1),null);
try{cb__41235__auto___41594.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41572,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41570){if((e41570 instanceof java.lang.Exception)){
var e__41236__auto___41595 = e41570;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41593,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41595);
} else {
throw e41570;

}
}
var G__41596 = cljs.core.next.call(null,seq__41559_41586__$1);
var G__41597 = null;
var G__41598 = (0);
var G__41599 = (0);
seq__41559_41573 = G__41596;
chunk__41560_41574 = G__41597;
count__41561_41575 = G__41598;
i__41562_41576 = G__41599;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41558;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41600 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41600;

} else {
}

return r;
});
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__41602 = arguments.length;
switch (G__41602) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson047.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson047$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__41605 = arguments.length;
switch (G__41605) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41606 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41633 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41633;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41634 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41634;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41635 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41635;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41232__auto___41636 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41233__auto___41637 = (end__41232__auto___41636 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__41607_41638 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__41608_41639 = null;
var count__41609_41640 = (0);
var i__41610_41641 = (0);
while(true){
if((i__41610_41641 < count__41609_41640)){
var vec__41611_41642 = cljs.core._nth.call(null,chunk__41608_41639,i__41610_41641);
var k__41234__auto___41643 = cljs.core.nth.call(null,vec__41611_41642,(0),null);
var cb__41235__auto___41644 = cljs.core.nth.call(null,vec__41611_41642,(1),null);
try{cb__41235__auto___41644.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41637,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41614){if((e41614 instanceof java.lang.Exception)){
var e__41236__auto___41645 = e41614;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41643,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41645);
} else {
throw e41614;

}
}
var G__41646 = seq__41607_41638;
var G__41647 = chunk__41608_41639;
var G__41648 = count__41609_41640;
var G__41649 = (i__41610_41641 + (1));
seq__41607_41638 = G__41646;
chunk__41608_41639 = G__41647;
count__41609_41640 = G__41648;
i__41610_41641 = G__41649;
continue;
} else {
var temp__4657__auto___41650 = cljs.core.seq.call(null,seq__41607_41638);
if(temp__4657__auto___41650){
var seq__41607_41651__$1 = temp__4657__auto___41650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41607_41651__$1)){
var c__29262__auto___41652 = cljs.core.chunk_first.call(null,seq__41607_41651__$1);
var G__41653 = cljs.core.chunk_rest.call(null,seq__41607_41651__$1);
var G__41654 = c__29262__auto___41652;
var G__41655 = cljs.core.count.call(null,c__29262__auto___41652);
var G__41656 = (0);
seq__41607_41638 = G__41653;
chunk__41608_41639 = G__41654;
count__41609_41640 = G__41655;
i__41610_41641 = G__41656;
continue;
} else {
var vec__41615_41657 = cljs.core.first.call(null,seq__41607_41651__$1);
var k__41234__auto___41658 = cljs.core.nth.call(null,vec__41615_41657,(0),null);
var cb__41235__auto___41659 = cljs.core.nth.call(null,vec__41615_41657,(1),null);
try{cb__41235__auto___41659.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41637,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41618){if((e41618 instanceof java.lang.Exception)){
var e__41236__auto___41660 = e41618;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41658,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41660);
} else {
throw e41618;

}
}
var G__41661 = cljs.core.next.call(null,seq__41607_41651__$1);
var G__41662 = null;
var G__41663 = (0);
var G__41664 = (0);
seq__41607_41638 = G__41661;
chunk__41608_41639 = G__41662;
count__41609_41640 = G__41663;
i__41610_41641 = G__41664;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41606;
}} else {
var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41665 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41665;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41666 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41666;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41667 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41667;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41619 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41668 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41668;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41669 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41669;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___41670 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___41670)){
var not_reactive_41671 = temp__4657__auto___41670;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_41671);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41672 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41672;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_41619){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_41619))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_41619){
return (function (){
return handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_41619))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_41619){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_41619))
));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41232__auto___41673 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41233__auto___41674 = (end__41232__auto___41673 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__41620_41675 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__41621_41676 = null;
var count__41622_41677 = (0);
var i__41623_41678 = (0);
while(true){
if((i__41623_41678 < count__41622_41677)){
var vec__41624_41679 = cljs.core._nth.call(null,chunk__41621_41676,i__41623_41678);
var k__41234__auto___41680 = cljs.core.nth.call(null,vec__41624_41679,(0),null);
var cb__41235__auto___41681 = cljs.core.nth.call(null,vec__41624_41679,(1),null);
try{cb__41235__auto___41681.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41674,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41627){if((e41627 instanceof java.lang.Exception)){
var e__41236__auto___41682 = e41627;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41680,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41682);
} else {
throw e41627;

}
}
var G__41683 = seq__41620_41675;
var G__41684 = chunk__41621_41676;
var G__41685 = count__41622_41677;
var G__41686 = (i__41623_41678 + (1));
seq__41620_41675 = G__41683;
chunk__41621_41676 = G__41684;
count__41622_41677 = G__41685;
i__41623_41678 = G__41686;
continue;
} else {
var temp__4657__auto___41687 = cljs.core.seq.call(null,seq__41620_41675);
if(temp__4657__auto___41687){
var seq__41620_41688__$1 = temp__4657__auto___41687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41620_41688__$1)){
var c__29262__auto___41689 = cljs.core.chunk_first.call(null,seq__41620_41688__$1);
var G__41690 = cljs.core.chunk_rest.call(null,seq__41620_41688__$1);
var G__41691 = c__29262__auto___41689;
var G__41692 = cljs.core.count.call(null,c__29262__auto___41689);
var G__41693 = (0);
seq__41620_41675 = G__41690;
chunk__41621_41676 = G__41691;
count__41622_41677 = G__41692;
i__41623_41678 = G__41693;
continue;
} else {
var vec__41628_41694 = cljs.core.first.call(null,seq__41620_41688__$1);
var k__41234__auto___41695 = cljs.core.nth.call(null,vec__41628_41694,(0),null);
var cb__41235__auto___41696 = cljs.core.nth.call(null,vec__41628_41694,(1),null);
try{cb__41235__auto___41696.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41674,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41631){if((e41631 instanceof java.lang.Exception)){
var e__41236__auto___41697 = e41631;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41695,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41697);
} else {
throw e41631;

}
}
var G__41698 = cljs.core.next.call(null,seq__41620_41688__$1);
var G__41699 = null;
var G__41700 = (0);
var G__41701 = (0);
seq__41620_41675 = G__41698;
chunk__41621_41676 = G__41699;
count__41622_41677 = G__41700;
i__41623_41678 = G__41701;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41619;
}} else {
var temp__4655__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41702 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41702;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41703 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41703;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___41704 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___41704)){
var not_reactive_41705 = temp__4657__auto___41704;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_41705);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41706 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41706;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__41707){
var vec__41708 = p__41707;
var k = cljs.core.nth.call(null,vec__41708,(0),null);
var v = cljs.core.nth.call(null,vec__41708,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41711 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41711;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson047$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41744 = arguments.length;
var i__29593__auto___41745 = (0);
while(true){
if((i__29593__auto___41745 < len__29592__auto___41744)){
args__29599__auto__.push((arguments[i__29593__auto___41745]));

var G__41746 = (i__29593__auto___41745 + (1));
i__29593__auto___41745 = G__41746;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__41714 = cljs.core.count.call(null,input_args);
switch (G__41714) {
case (0):
return ((function (G__41714,computation_fn,input_args,err_header){
return (function() {
var G__41748 = null;
var G__41748__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__41748__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
G__41748 = function(_,___$1){
switch(arguments.length){
case 1:
return G__41748__1.call(this,_);
case 2:
return G__41748__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__41748.cljs$core$IFn$_invoke$arity$1 = G__41748__1;
G__41748.cljs$core$IFn$_invoke$arity$2 = G__41748__2;
return G__41748;
})()
;})(G__41714,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__41715 = input_args;
var marker = cljs.core.nth.call(null,vec__41715,(0),null);
var vec = cljs.core.nth.call(null,vec__41715,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__41715,marker,vec,G__41714,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__41715,marker,vec,G__41714,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__41714,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__41714,computation_fn,input_args,err_header))

}
})();
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41718 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41749 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41749;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41232__auto___41750 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41233__auto___41751 = (end__41232__auto___41750 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__41719_41752 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__41720_41753 = null;
var count__41721_41754 = (0);
var i__41722_41755 = (0);
while(true){
if((i__41722_41755 < count__41721_41754)){
var vec__41723_41756 = cljs.core._nth.call(null,chunk__41720_41753,i__41722_41755);
var k__41234__auto___41757 = cljs.core.nth.call(null,vec__41723_41756,(0),null);
var cb__41235__auto___41758 = cljs.core.nth.call(null,vec__41723_41756,(1),null);
try{cb__41235__auto___41758.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41751,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41726){if((e41726 instanceof java.lang.Exception)){
var e__41236__auto___41759 = e41726;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41757,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41759);
} else {
throw e41726;

}
}
var G__41760 = seq__41719_41752;
var G__41761 = chunk__41720_41753;
var G__41762 = count__41721_41754;
var G__41763 = (i__41722_41755 + (1));
seq__41719_41752 = G__41760;
chunk__41720_41753 = G__41761;
count__41721_41754 = G__41762;
i__41722_41755 = G__41763;
continue;
} else {
var temp__4657__auto___41764 = cljs.core.seq.call(null,seq__41719_41752);
if(temp__4657__auto___41764){
var seq__41719_41765__$1 = temp__4657__auto___41764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41719_41765__$1)){
var c__29262__auto___41766 = cljs.core.chunk_first.call(null,seq__41719_41765__$1);
var G__41767 = cljs.core.chunk_rest.call(null,seq__41719_41765__$1);
var G__41768 = c__29262__auto___41766;
var G__41769 = cljs.core.count.call(null,c__29262__auto___41766);
var G__41770 = (0);
seq__41719_41752 = G__41767;
chunk__41720_41753 = G__41768;
count__41721_41754 = G__41769;
i__41722_41755 = G__41770;
continue;
} else {
var vec__41727_41771 = cljs.core.first.call(null,seq__41719_41765__$1);
var k__41234__auto___41772 = cljs.core.nth.call(null,vec__41727_41771,(0),null);
var cb__41235__auto___41773 = cljs.core.nth.call(null,vec__41727_41771,(1),null);
try{cb__41235__auto___41773.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41751,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41730){if((e41730 instanceof java.lang.Exception)){
var e__41236__auto___41774 = e41730;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41772,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41774);
} else {
throw e41730;

}
}
var G__41775 = cljs.core.next.call(null,seq__41719_41765__$1);
var G__41776 = null;
var G__41777 = (0);
var G__41778 = (0);
seq__41719_41752 = G__41775;
chunk__41720_41753 = G__41776;
count__41721_41754 = G__41777;
i__41722_41755 = G__41778;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41718;
}} else {
var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41779 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41779;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41731 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41780 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41780;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41232__auto___41781 = mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41233__auto___41782 = (end__41232__auto___41781 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__41732_41783 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__41733_41784 = null;
var count__41734_41785 = (0);
var i__41735_41786 = (0);
while(true){
if((i__41735_41786 < count__41734_41785)){
var vec__41736_41787 = cljs.core._nth.call(null,chunk__41733_41784,i__41735_41786);
var k__41234__auto___41788 = cljs.core.nth.call(null,vec__41736_41787,(0),null);
var cb__41235__auto___41789 = cljs.core.nth.call(null,vec__41736_41787,(1),null);
try{cb__41235__auto___41789.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41782,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41739){if((e41739 instanceof java.lang.Exception)){
var e__41236__auto___41790 = e41739;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41788,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41790);
} else {
throw e41739;

}
}
var G__41791 = seq__41732_41783;
var G__41792 = chunk__41733_41784;
var G__41793 = count__41734_41785;
var G__41794 = (i__41735_41786 + (1));
seq__41732_41783 = G__41791;
chunk__41733_41784 = G__41792;
count__41734_41785 = G__41793;
i__41735_41786 = G__41794;
continue;
} else {
var temp__4657__auto___41795 = cljs.core.seq.call(null,seq__41732_41783);
if(temp__4657__auto___41795){
var seq__41732_41796__$1 = temp__4657__auto___41795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41732_41796__$1)){
var c__29262__auto___41797 = cljs.core.chunk_first.call(null,seq__41732_41796__$1);
var G__41798 = cljs.core.chunk_rest.call(null,seq__41732_41796__$1);
var G__41799 = c__29262__auto___41797;
var G__41800 = cljs.core.count.call(null,c__29262__auto___41797);
var G__41801 = (0);
seq__41732_41783 = G__41798;
chunk__41733_41784 = G__41799;
count__41734_41785 = G__41800;
i__41735_41786 = G__41801;
continue;
} else {
var vec__41740_41802 = cljs.core.first.call(null,seq__41732_41796__$1);
var k__41234__auto___41803 = cljs.core.nth.call(null,vec__41740_41802,(0),null);
var cb__41235__auto___41804 = cljs.core.nth.call(null,vec__41740_41802,(1),null);
try{cb__41235__auto___41804.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41233__auto___41782,new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e41743){if((e41743 instanceof java.lang.Exception)){
var e__41236__auto___41805 = e41743;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41234__auto___41803,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41236__auto___41805);
} else {
throw e41743;

}
}
var G__41806 = cljs.core.next.call(null,seq__41732_41796__$1);
var G__41807 = null;
var G__41808 = (0);
var G__41809 = (0);
seq__41732_41783 = G__41806;
chunk__41733_41784 = G__41807;
count__41734_41785 = G__41808;
i__41735_41786 = G__41809;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41731;
}} else {
var subscription = computation_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41237__auto___41810 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41237__auto___41810;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq41712){
var G__41713 = cljs.core.first.call(null,seq41712);
var seq41712__$1 = cljs.core.next.call(null,seq41712);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__41713,seq41712__$1);
});


//# sourceMappingURL=subs.js.map?rel=1518582101540
