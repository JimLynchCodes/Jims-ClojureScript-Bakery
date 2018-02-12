// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.subs');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.cofx');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.std_interceptors');
goog.require('clojure.set');
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch = mranderson047.re_frame.v0v10v2.re_frame.router.dispatch;
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync = mranderson047.re_frame.v0v10v2.re_frame.router.dispatch_sync;
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub = mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub;
mranderson047.re_frame.v0v10v2.re_frame.core.subscribe = mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe;
mranderson047.re_frame.v0v10v2.re_frame.core.clear_sub = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.subs.kind);
mranderson047.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_ = mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub_raw = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id,handler_fn);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_fx = mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx;
mranderson047.re_frame.v0v10v2.re_frame.core.clear_fx = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.fx.kind);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_cofx = mranderson047.re_frame.v0v10v2.re_frame.cofx.reg_cofx;
mranderson047.re_frame.v0v10v2.re_frame.core.inject_cofx = mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_cofx;
mranderson047.re_frame.v0v10v2.re_frame.core.clear_cofx = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_event_db(var_args){
var G__41822 = arguments.length;
switch (G__41822) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,id,null,handler);
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson047.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_event_fx(var_args){
var G__41825 = arguments.length;
switch (G__41825) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson047.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx = (function mranderson047$re_frame$v0v10v2$re_frame$core$reg_event_ctx(var_args){
var G__41828 = arguments.length;
switch (G__41828) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson047.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

mranderson047.re_frame.v0v10v2.re_frame.core.clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
mranderson047.re_frame.v0v10v2.re_frame.core.debug = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.debug;
mranderson047.re_frame.v0v10v2.re_frame.core.path = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.path;
mranderson047.re_frame.v0v10v2.re_frame.core.enrich = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.enrich;
mranderson047.re_frame.v0v10v2.re_frame.core.trim_v = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.trim_v;
mranderson047.re_frame.v0v10v2.re_frame.core.after = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.after;
mranderson047.re_frame.v0v10v2.re_frame.core.on_changes = mranderson047.re_frame.v0v10v2.re_frame.std_interceptors.on_changes;
mranderson047.re_frame.v0v10v2.re_frame.core.__GT_interceptor = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor;
mranderson047.re_frame.v0v10v2.re_frame.core.get_coeffect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect;
mranderson047.re_frame.v0v10v2.re_frame.core.assoc_coeffect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect;
mranderson047.re_frame.v0v10v2.re_frame.core.get_effect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect;
mranderson047.re_frame.v0v10v2.re_frame.core.assoc_effect = mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_effect;
mranderson047.re_frame.v0v10v2.re_frame.core.enqueue = mranderson047.re_frame.v0v10v2.re_frame.interceptor.enqueue;
mranderson047.re_frame.v0v10v2.re_frame.core.set_loggers_BANG_ = mranderson047.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_;
mranderson047.re_frame.v0v10v2.re_frame.core.console = mranderson047.re_frame.v0v10v2.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson047.re-frame.v0v10v2.re-frame and returns a function which, when
 *   later called, will restore mranderson047.re-frame.v0v10v2.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.core.make_restore_fn = (function mranderson047$re_frame$v0v10v2$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_41834 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_41835 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)));
var seq__41830_41836 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_41835,original_subs_41834));
var chunk__41831_41837 = null;
var count__41832_41838 = (0);
var i__41833_41839 = (0);
while(true){
if((i__41833_41839 < count__41832_41838)){
var sub_41840 = cljs.core._nth.call(null,chunk__41831_41837,i__41833_41839);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_41840);

var G__41841 = seq__41830_41836;
var G__41842 = chunk__41831_41837;
var G__41843 = count__41832_41838;
var G__41844 = (i__41833_41839 + (1));
seq__41830_41836 = G__41841;
chunk__41831_41837 = G__41842;
count__41832_41838 = G__41843;
i__41833_41839 = G__41844;
continue;
} else {
var temp__4657__auto___41845 = cljs.core.seq.call(null,seq__41830_41836);
if(temp__4657__auto___41845){
var seq__41830_41846__$1 = temp__4657__auto___41845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41830_41846__$1)){
var c__29262__auto___41847 = cljs.core.chunk_first.call(null,seq__41830_41846__$1);
var G__41848 = cljs.core.chunk_rest.call(null,seq__41830_41846__$1);
var G__41849 = c__29262__auto___41847;
var G__41850 = cljs.core.count.call(null,c__29262__auto___41847);
var G__41851 = (0);
seq__41830_41836 = G__41848;
chunk__41831_41837 = G__41849;
count__41832_41838 = G__41850;
i__41833_41839 = G__41851;
continue;
} else {
var sub_41852 = cljs.core.first.call(null,seq__41830_41846__$1);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_41852);

var G__41853 = cljs.core.next.call(null,seq__41830_41846__$1);
var G__41854 = null;
var G__41855 = (0);
var G__41856 = (0);
seq__41830_41836 = G__41853;
chunk__41831_41837 = G__41854;
count__41832_41838 = G__41855;
i__41833_41839 = G__41856;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$core$add_post_event_callback(var_args){
var G__41858 = arguments.length;
switch (G__41858) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.call(null,f,f);
});

mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,id,f);
});

mranderson047.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

mranderson047.re_frame.v0v10v2.re_frame.core.remove_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$core$remove_post_event_callback(id){
return mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback.call(null,mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,id);
});
mranderson047.re_frame.v0v10v2.re_frame.core.register_handler = (function mranderson047$re_frame$v0v10v2$re_frame$core$register_handler(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41861 = arguments.length;
var i__29593__auto___41862 = (0);
while(true){
if((i__29593__auto___41862 < len__29592__auto___41861)){
args__29599__auto__.push((arguments[i__29593__auto___41862]));

var G__41863 = (i__29593__auto___41862 + (1));
i__29593__auto___41862 = G__41863;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson047.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db,args);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq41860){
return mranderson047.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41860));
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub = (function mranderson047$re_frame$v0v10v2$re_frame$core$register_sub(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41865 = arguments.length;
var i__29593__auto___41866 = (0);
while(true){
if((i__29593__auto___41866 < len__29592__auto___41865)){
args__29599__auto__.push((arguments[i__29593__auto___41866]));

var G__41867 = (i__29593__auto___41866 + (1));
i__29593__auto___41866 = G__41867;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson047.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub_raw,args);
});

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq41864){
return mranderson047.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41864));
});


//# sourceMappingURL=core.js.map?rel=1518440276108
