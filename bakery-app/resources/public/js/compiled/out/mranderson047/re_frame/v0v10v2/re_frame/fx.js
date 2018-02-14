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
var seq__41443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41444 = null;
var count__41445 = (0);
var i__41446 = (0);
while(true){
if((i__41446 < count__41445)){
var vec__41447 = cljs.core._nth.call(null,chunk__41444,i__41446);
var effect_key = cljs.core.nth.call(null,vec__41447,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41447,(1),null);
var temp__4655__auto___41453 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41453)){
var effect_fn_41454 = temp__4655__auto___41453;
effect_fn_41454.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41455 = seq__41443;
var G__41456 = chunk__41444;
var G__41457 = count__41445;
var G__41458 = (i__41446 + (1));
seq__41443 = G__41455;
chunk__41444 = G__41456;
count__41445 = G__41457;
i__41446 = G__41458;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41443);
if(temp__4657__auto__){
var seq__41443__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41443__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41443__$1);
var G__41459 = cljs.core.chunk_rest.call(null,seq__41443__$1);
var G__41460 = c__29262__auto__;
var G__41461 = cljs.core.count.call(null,c__29262__auto__);
var G__41462 = (0);
seq__41443 = G__41459;
chunk__41444 = G__41460;
count__41445 = G__41461;
i__41446 = G__41462;
continue;
} else {
var vec__41450 = cljs.core.first.call(null,seq__41443__$1);
var effect_key = cljs.core.nth.call(null,vec__41450,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41450,(1),null);
var temp__4655__auto___41463 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41463)){
var effect_fn_41464 = temp__4655__auto___41463;
effect_fn_41464.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41465 = cljs.core.next.call(null,seq__41443__$1);
var G__41466 = null;
var G__41467 = (0);
var G__41468 = (0);
seq__41443 = G__41465;
chunk__41444 = G__41466;
count__41445 = G__41467;
i__41446 = G__41468;
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
var seq__41469 = cljs.core.seq.call(null,value);
var chunk__41470 = null;
var count__41471 = (0);
var i__41472 = (0);
while(true){
if((i__41472 < count__41471)){
var map__41473 = cljs.core._nth.call(null,chunk__41470,i__41472);
var map__41473__$1 = ((((!((map__41473 == null)))?((((map__41473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41473):map__41473);
var effect = map__41473__$1;
var ms = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41473__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41469,chunk__41470,count__41471,i__41472,map__41473,map__41473__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41469,chunk__41470,count__41471,i__41472,map__41473,map__41473__$1,effect,ms,dispatch))
,ms);
}

var G__41477 = seq__41469;
var G__41478 = chunk__41470;
var G__41479 = count__41471;
var G__41480 = (i__41472 + (1));
seq__41469 = G__41477;
chunk__41470 = G__41478;
count__41471 = G__41479;
i__41472 = G__41480;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41469);
if(temp__4657__auto__){
var seq__41469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41469__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41469__$1);
var G__41481 = cljs.core.chunk_rest.call(null,seq__41469__$1);
var G__41482 = c__29262__auto__;
var G__41483 = cljs.core.count.call(null,c__29262__auto__);
var G__41484 = (0);
seq__41469 = G__41481;
chunk__41470 = G__41482;
count__41471 = G__41483;
i__41472 = G__41484;
continue;
} else {
var map__41475 = cljs.core.first.call(null,seq__41469__$1);
var map__41475__$1 = ((((!((map__41475 == null)))?((((map__41475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41475):map__41475);
var effect = map__41475__$1;
var ms = cljs.core.get.call(null,map__41475__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41475__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41469,chunk__41470,count__41471,i__41472,map__41475,map__41475__$1,effect,ms,dispatch,seq__41469__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41469,chunk__41470,count__41471,i__41472,map__41475,map__41475__$1,effect,ms,dispatch,seq__41469__$1,temp__4657__auto__))
,ms);
}

var G__41485 = cljs.core.next.call(null,seq__41469__$1);
var G__41486 = null;
var G__41487 = (0);
var G__41488 = (0);
seq__41469 = G__41485;
chunk__41470 = G__41486;
count__41471 = G__41487;
i__41472 = G__41488;
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
var seq__41489 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41490 = null;
var count__41491 = (0);
var i__41492 = (0);
while(true){
if((i__41492 < count__41491)){
var event = cljs.core._nth.call(null,chunk__41490,i__41492);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41493 = seq__41489;
var G__41494 = chunk__41490;
var G__41495 = count__41491;
var G__41496 = (i__41492 + (1));
seq__41489 = G__41493;
chunk__41490 = G__41494;
count__41491 = G__41495;
i__41492 = G__41496;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41489);
if(temp__4657__auto__){
var seq__41489__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41489__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41489__$1);
var G__41497 = cljs.core.chunk_rest.call(null,seq__41489__$1);
var G__41498 = c__29262__auto__;
var G__41499 = cljs.core.count.call(null,c__29262__auto__);
var G__41500 = (0);
seq__41489 = G__41497;
chunk__41490 = G__41498;
count__41491 = G__41499;
i__41492 = G__41500;
continue;
} else {
var event = cljs.core.first.call(null,seq__41489__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41501 = cljs.core.next.call(null,seq__41489__$1);
var G__41502 = null;
var G__41503 = (0);
var G__41504 = (0);
seq__41489 = G__41501;
chunk__41490 = G__41502;
count__41491 = G__41503;
i__41492 = G__41504;
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
var seq__41505 = cljs.core.seq.call(null,value);
var chunk__41506 = null;
var count__41507 = (0);
var i__41508 = (0);
while(true){
if((i__41508 < count__41507)){
var event = cljs.core._nth.call(null,chunk__41506,i__41508);
clear_event.call(null,event);

var G__41509 = seq__41505;
var G__41510 = chunk__41506;
var G__41511 = count__41507;
var G__41512 = (i__41508 + (1));
seq__41505 = G__41509;
chunk__41506 = G__41510;
count__41507 = G__41511;
i__41508 = G__41512;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41505);
if(temp__4657__auto__){
var seq__41505__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41505__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__41505__$1);
var G__41513 = cljs.core.chunk_rest.call(null,seq__41505__$1);
var G__41514 = c__29262__auto__;
var G__41515 = cljs.core.count.call(null,c__29262__auto__);
var G__41516 = (0);
seq__41505 = G__41513;
chunk__41506 = G__41514;
count__41507 = G__41515;
i__41508 = G__41516;
continue;
} else {
var event = cljs.core.first.call(null,seq__41505__$1);
clear_event.call(null,event);

var G__41517 = cljs.core.next.call(null,seq__41505__$1);
var G__41518 = null;
var G__41519 = (0);
var G__41520 = (0);
seq__41505 = G__41517;
chunk__41506 = G__41518;
count__41507 = G__41519;
i__41508 = G__41520;
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

//# sourceMappingURL=fx.js.map?rel=1518582101106
