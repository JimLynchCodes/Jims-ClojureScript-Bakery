// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__41451 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41452 = null;
var count__41453 = (0);
var i__41454 = (0);
while(true){
if((i__41454 < count__41453)){
var vec__41455 = cljs.core._nth.call(null,chunk__41452,i__41454);
var effect_key = cljs.core.nth.call(null,vec__41455,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41455,(1),null);
var temp__4655__auto___41461 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41461)){
var effect_fn_41462 = temp__4655__auto___41461;
effect_fn_41462.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41463 = seq__41451;
var G__41464 = chunk__41452;
var G__41465 = count__41453;
var G__41466 = (i__41454 + (1));
seq__41451 = G__41463;
chunk__41452 = G__41464;
count__41453 = G__41465;
i__41454 = G__41466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41451);
if(temp__4657__auto__){
var seq__41451__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41451__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41451__$1);
var G__41467 = cljs.core.chunk_rest.call(null,seq__41451__$1);
var G__41468 = c__29262__auto__;
var G__41469 = cljs.core.count.call(null,c__29262__auto__);
var G__41470 = (0);
seq__41451 = G__41467;
chunk__41452 = G__41468;
count__41453 = G__41469;
i__41454 = G__41470;
continue;
} else {
var vec__41458 = cljs.core.first.call(null,seq__41451__$1);
var effect_key = cljs.core.nth.call(null,vec__41458,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41458,(1),null);
var temp__4655__auto___41471 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41471)){
var effect_fn_41472 = temp__4655__auto___41471;
effect_fn_41472.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41473 = cljs.core.next.call(null,seq__41451__$1);
var G__41474 = null;
var G__41475 = (0);
var G__41476 = (0);
seq__41451 = G__41473;
chunk__41452 = G__41474;
count__41453 = G__41475;
i__41454 = G__41476;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__41477 = cljs.core.seq.call(null,value);
var chunk__41478 = null;
var count__41479 = (0);
var i__41480 = (0);
while(true){
if((i__41480 < count__41479)){
var map__41481 = cljs.core._nth.call(null,chunk__41478,i__41480);
var map__41481__$1 = ((((!((map__41481 == null)))?((((map__41481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41481):map__41481);
var effect = map__41481__$1;
var ms = cljs.core.get.call(null,map__41481__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41481__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41477,chunk__41478,count__41479,i__41480,map__41481,map__41481__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41477,chunk__41478,count__41479,i__41480,map__41481,map__41481__$1,effect,ms,dispatch))
,ms);
}

var G__41485 = seq__41477;
var G__41486 = chunk__41478;
var G__41487 = count__41479;
var G__41488 = (i__41480 + (1));
seq__41477 = G__41485;
chunk__41478 = G__41486;
count__41479 = G__41487;
i__41480 = G__41488;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41477);
if(temp__4657__auto__){
var seq__41477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41477__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41477__$1);
var G__41489 = cljs.core.chunk_rest.call(null,seq__41477__$1);
var G__41490 = c__29262__auto__;
var G__41491 = cljs.core.count.call(null,c__29262__auto__);
var G__41492 = (0);
seq__41477 = G__41489;
chunk__41478 = G__41490;
count__41479 = G__41491;
i__41480 = G__41492;
continue;
} else {
var map__41483 = cljs.core.first.call(null,seq__41477__$1);
var map__41483__$1 = ((((!((map__41483 == null)))?((((map__41483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41483):map__41483);
var effect = map__41483__$1;
var ms = cljs.core.get.call(null,map__41483__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41483__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41477,chunk__41478,count__41479,i__41480,map__41483,map__41483__$1,effect,ms,dispatch,seq__41477__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41477,chunk__41478,count__41479,i__41480,map__41483,map__41483__$1,effect,ms,dispatch,seq__41477__$1,temp__4657__auto__))
,ms);
}

var G__41493 = cljs.core.next.call(null,seq__41477__$1);
var G__41494 = null;
var G__41495 = (0);
var G__41496 = (0);
seq__41477 = G__41493;
chunk__41478 = G__41494;
count__41479 = G__41495;
i__41480 = G__41496;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__41497 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41498 = null;
var count__41499 = (0);
var i__41500 = (0);
while(true){
if((i__41500 < count__41499)){
var event = cljs.core._nth.call(null,chunk__41498,i__41500);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41501 = seq__41497;
var G__41502 = chunk__41498;
var G__41503 = count__41499;
var G__41504 = (i__41500 + (1));
seq__41497 = G__41501;
chunk__41498 = G__41502;
count__41499 = G__41503;
i__41500 = G__41504;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41497);
if(temp__4657__auto__){
var seq__41497__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41497__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41497__$1);
var G__41505 = cljs.core.chunk_rest.call(null,seq__41497__$1);
var G__41506 = c__29262__auto__;
var G__41507 = cljs.core.count.call(null,c__29262__auto__);
var G__41508 = (0);
seq__41497 = G__41505;
chunk__41498 = G__41506;
count__41499 = G__41507;
i__41500 = G__41508;
continue;
} else {
var event = cljs.core.first.call(null,seq__41497__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41509 = cljs.core.next.call(null,seq__41497__$1);
var G__41510 = null;
var G__41511 = (0);
var G__41512 = (0);
seq__41497 = G__41509;
chunk__41498 = G__41510;
count__41499 = G__41511;
i__41500 = G__41512;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__41513 = cljs.core.seq.call(null,value);
var chunk__41514 = null;
var count__41515 = (0);
var i__41516 = (0);
while(true){
if((i__41516 < count__41515)){
var event = cljs.core._nth.call(null,chunk__41514,i__41516);
clear_event.call(null,event);

var G__41517 = seq__41513;
var G__41518 = chunk__41514;
var G__41519 = count__41515;
var G__41520 = (i__41516 + (1));
seq__41513 = G__41517;
chunk__41514 = G__41518;
count__41515 = G__41519;
i__41516 = G__41520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41513);
if(temp__4657__auto__){
var seq__41513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41513__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41513__$1);
var G__41521 = cljs.core.chunk_rest.call(null,seq__41513__$1);
var G__41522 = c__29262__auto__;
var G__41523 = cljs.core.count.call(null,c__29262__auto__);
var G__41524 = (0);
seq__41513 = G__41521;
chunk__41514 = G__41522;
count__41515 = G__41523;
i__41516 = G__41524;
continue;
} else {
var event = cljs.core.first.call(null,seq__41513__$1);
clear_event.call(null,event);

var G__41525 = cljs.core.next.call(null,seq__41513__$1);
var G__41526 = null;
var G__41527 = (0);
var G__41528 = (0);
seq__41513 = G__41525;
chunk__41514 = G__41526;
count__41515 = G__41527;
i__41516 = G__41528;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1518440275679
