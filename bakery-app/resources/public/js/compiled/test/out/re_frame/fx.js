// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__11284 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11285 = null;
var count__11286 = (0);
var i__11287 = (0);
while(true){
if((i__11287 < count__11286)){
var vec__11288 = cljs.core._nth.call(null,chunk__11285,i__11287);
var effect_key = cljs.core.nth.call(null,vec__11288,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11288,(1),null);
var temp__4655__auto___11294 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___11294)){
var effect_fn_11295 = temp__4655__auto___11294;
effect_fn_11295.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__11296 = seq__11284;
var G__11297 = chunk__11285;
var G__11298 = count__11286;
var G__11299 = (i__11287 + (1));
seq__11284 = G__11296;
chunk__11285 = G__11297;
count__11286 = G__11298;
i__11287 = G__11299;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11284);
if(temp__4657__auto__){
var seq__11284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11284__$1)){
var c__8426__auto__ = cljs.core.chunk_first.call(null,seq__11284__$1);
var G__11300 = cljs.core.chunk_rest.call(null,seq__11284__$1);
var G__11301 = c__8426__auto__;
var G__11302 = cljs.core.count.call(null,c__8426__auto__);
var G__11303 = (0);
seq__11284 = G__11300;
chunk__11285 = G__11301;
count__11286 = G__11302;
i__11287 = G__11303;
continue;
} else {
var vec__11291 = cljs.core.first.call(null,seq__11284__$1);
var effect_key = cljs.core.nth.call(null,vec__11291,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11291,(1),null);
var temp__4655__auto___11304 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___11304)){
var effect_fn_11305 = temp__4655__auto___11304;
effect_fn_11305.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__11306 = cljs.core.next.call(null,seq__11284__$1);
var G__11307 = null;
var G__11308 = (0);
var G__11309 = (0);
seq__11284 = G__11306;
chunk__11285 = G__11307;
count__11286 = G__11308;
i__11287 = G__11309;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11310 = cljs.core.seq.call(null,value);
var chunk__11311 = null;
var count__11312 = (0);
var i__11313 = (0);
while(true){
if((i__11313 < count__11312)){
var map__11314 = cljs.core._nth.call(null,chunk__11311,i__11313);
var map__11314__$1 = ((((!((map__11314 == null)))?((((map__11314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11314):map__11314);
var effect = map__11314__$1;
var ms = cljs.core.get.call(null,map__11314__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11314__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11310,chunk__11311,count__11312,i__11313,map__11314,map__11314__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11310,chunk__11311,count__11312,i__11313,map__11314,map__11314__$1,effect,ms,dispatch))
,ms);
}

var G__11318 = seq__11310;
var G__11319 = chunk__11311;
var G__11320 = count__11312;
var G__11321 = (i__11313 + (1));
seq__11310 = G__11318;
chunk__11311 = G__11319;
count__11312 = G__11320;
i__11313 = G__11321;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11310);
if(temp__4657__auto__){
var seq__11310__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11310__$1)){
var c__8426__auto__ = cljs.core.chunk_first.call(null,seq__11310__$1);
var G__11322 = cljs.core.chunk_rest.call(null,seq__11310__$1);
var G__11323 = c__8426__auto__;
var G__11324 = cljs.core.count.call(null,c__8426__auto__);
var G__11325 = (0);
seq__11310 = G__11322;
chunk__11311 = G__11323;
count__11312 = G__11324;
i__11313 = G__11325;
continue;
} else {
var map__11316 = cljs.core.first.call(null,seq__11310__$1);
var map__11316__$1 = ((((!((map__11316 == null)))?((((map__11316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11316):map__11316);
var effect = map__11316__$1;
var ms = cljs.core.get.call(null,map__11316__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11316__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11310,chunk__11311,count__11312,i__11313,map__11316,map__11316__$1,effect,ms,dispatch,seq__11310__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11310,chunk__11311,count__11312,i__11313,map__11316,map__11316__$1,effect,ms,dispatch,seq__11310__$1,temp__4657__auto__))
,ms);
}

var G__11326 = cljs.core.next.call(null,seq__11310__$1);
var G__11327 = null;
var G__11328 = (0);
var G__11329 = (0);
seq__11310 = G__11326;
chunk__11311 = G__11327;
count__11312 = G__11328;
i__11313 = G__11329;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__11330 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11331 = null;
var count__11332 = (0);
var i__11333 = (0);
while(true){
if((i__11333 < count__11332)){
var event = cljs.core._nth.call(null,chunk__11331,i__11333);
re_frame.router.dispatch.call(null,event);

var G__11334 = seq__11330;
var G__11335 = chunk__11331;
var G__11336 = count__11332;
var G__11337 = (i__11333 + (1));
seq__11330 = G__11334;
chunk__11331 = G__11335;
count__11332 = G__11336;
i__11333 = G__11337;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11330);
if(temp__4657__auto__){
var seq__11330__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11330__$1)){
var c__8426__auto__ = cljs.core.chunk_first.call(null,seq__11330__$1);
var G__11338 = cljs.core.chunk_rest.call(null,seq__11330__$1);
var G__11339 = c__8426__auto__;
var G__11340 = cljs.core.count.call(null,c__8426__auto__);
var G__11341 = (0);
seq__11330 = G__11338;
chunk__11331 = G__11339;
count__11332 = G__11340;
i__11333 = G__11341;
continue;
} else {
var event = cljs.core.first.call(null,seq__11330__$1);
re_frame.router.dispatch.call(null,event);

var G__11342 = cljs.core.next.call(null,seq__11330__$1);
var G__11343 = null;
var G__11344 = (0);
var G__11345 = (0);
seq__11330 = G__11342;
chunk__11331 = G__11343;
count__11332 = G__11344;
i__11333 = G__11345;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11346 = cljs.core.seq.call(null,value);
var chunk__11347 = null;
var count__11348 = (0);
var i__11349 = (0);
while(true){
if((i__11349 < count__11348)){
var event = cljs.core._nth.call(null,chunk__11347,i__11349);
clear_event.call(null,event);

var G__11350 = seq__11346;
var G__11351 = chunk__11347;
var G__11352 = count__11348;
var G__11353 = (i__11349 + (1));
seq__11346 = G__11350;
chunk__11347 = G__11351;
count__11348 = G__11352;
i__11349 = G__11353;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11346);
if(temp__4657__auto__){
var seq__11346__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11346__$1)){
var c__8426__auto__ = cljs.core.chunk_first.call(null,seq__11346__$1);
var G__11354 = cljs.core.chunk_rest.call(null,seq__11346__$1);
var G__11355 = c__8426__auto__;
var G__11356 = cljs.core.count.call(null,c__8426__auto__);
var G__11357 = (0);
seq__11346 = G__11354;
chunk__11347 = G__11355;
count__11348 = G__11356;
i__11349 = G__11357;
continue;
} else {
var event = cljs.core.first.call(null,seq__11346__$1);
clear_event.call(null,event);

var G__11358 = cljs.core.next.call(null,seq__11346__$1);
var G__11359 = null;
var G__11360 = (0);
var G__11361 = (0);
seq__11346 = G__11358;
chunk__11347 = G__11359;
count__11348 = G__11360;
i__11349 = G__11361;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
