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
var seq__31763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31764 = null;
var count__31765 = (0);
var i__31766 = (0);
while(true){
if((i__31766 < count__31765)){
var vec__31767 = cljs.core._nth.call(null,chunk__31764,i__31766);
var effect_key = cljs.core.nth.call(null,vec__31767,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31767,(1),null);
var temp__4655__auto___31773 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31773)){
var effect_fn_31774 = temp__4655__auto___31773;
effect_fn_31774.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__31775 = seq__31763;
var G__31776 = chunk__31764;
var G__31777 = count__31765;
var G__31778 = (i__31766 + (1));
seq__31763 = G__31775;
chunk__31764 = G__31776;
count__31765 = G__31777;
i__31766 = G__31778;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31763);
if(temp__4657__auto__){
var seq__31763__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31763__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__31763__$1);
var G__31779 = cljs.core.chunk_rest.call(null,seq__31763__$1);
var G__31780 = c__29262__auto__;
var G__31781 = cljs.core.count.call(null,c__29262__auto__);
var G__31782 = (0);
seq__31763 = G__31779;
chunk__31764 = G__31780;
count__31765 = G__31781;
i__31766 = G__31782;
continue;
} else {
var vec__31770 = cljs.core.first.call(null,seq__31763__$1);
var effect_key = cljs.core.nth.call(null,vec__31770,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31770,(1),null);
var temp__4655__auto___31783 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31783)){
var effect_fn_31784 = temp__4655__auto___31783;
effect_fn_31784.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__31785 = cljs.core.next.call(null,seq__31763__$1);
var G__31786 = null;
var G__31787 = (0);
var G__31788 = (0);
seq__31763 = G__31785;
chunk__31764 = G__31786;
count__31765 = G__31787;
i__31766 = G__31788;
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
var seq__31789 = cljs.core.seq.call(null,value);
var chunk__31790 = null;
var count__31791 = (0);
var i__31792 = (0);
while(true){
if((i__31792 < count__31791)){
var map__31793 = cljs.core._nth.call(null,chunk__31790,i__31792);
var map__31793__$1 = ((((!((map__31793 == null)))?((((map__31793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31793):map__31793);
var effect = map__31793__$1;
var ms = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31793__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31789,chunk__31790,count__31791,i__31792,map__31793,map__31793__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31789,chunk__31790,count__31791,i__31792,map__31793,map__31793__$1,effect,ms,dispatch))
,ms);
}

var G__31797 = seq__31789;
var G__31798 = chunk__31790;
var G__31799 = count__31791;
var G__31800 = (i__31792 + (1));
seq__31789 = G__31797;
chunk__31790 = G__31798;
count__31791 = G__31799;
i__31792 = G__31800;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31789);
if(temp__4657__auto__){
var seq__31789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31789__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__31789__$1);
var G__31801 = cljs.core.chunk_rest.call(null,seq__31789__$1);
var G__31802 = c__29262__auto__;
var G__31803 = cljs.core.count.call(null,c__29262__auto__);
var G__31804 = (0);
seq__31789 = G__31801;
chunk__31790 = G__31802;
count__31791 = G__31803;
i__31792 = G__31804;
continue;
} else {
var map__31795 = cljs.core.first.call(null,seq__31789__$1);
var map__31795__$1 = ((((!((map__31795 == null)))?((((map__31795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31795):map__31795);
var effect = map__31795__$1;
var ms = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31795__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31789,chunk__31790,count__31791,i__31792,map__31795,map__31795__$1,effect,ms,dispatch,seq__31789__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31789,chunk__31790,count__31791,i__31792,map__31795,map__31795__$1,effect,ms,dispatch,seq__31789__$1,temp__4657__auto__))
,ms);
}

var G__31805 = cljs.core.next.call(null,seq__31789__$1);
var G__31806 = null;
var G__31807 = (0);
var G__31808 = (0);
seq__31789 = G__31805;
chunk__31790 = G__31806;
count__31791 = G__31807;
i__31792 = G__31808;
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
var seq__31809 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31810 = null;
var count__31811 = (0);
var i__31812 = (0);
while(true){
if((i__31812 < count__31811)){
var event = cljs.core._nth.call(null,chunk__31810,i__31812);
re_frame.router.dispatch.call(null,event);

var G__31813 = seq__31809;
var G__31814 = chunk__31810;
var G__31815 = count__31811;
var G__31816 = (i__31812 + (1));
seq__31809 = G__31813;
chunk__31810 = G__31814;
count__31811 = G__31815;
i__31812 = G__31816;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31809);
if(temp__4657__auto__){
var seq__31809__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31809__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__31809__$1);
var G__31817 = cljs.core.chunk_rest.call(null,seq__31809__$1);
var G__31818 = c__29262__auto__;
var G__31819 = cljs.core.count.call(null,c__29262__auto__);
var G__31820 = (0);
seq__31809 = G__31817;
chunk__31810 = G__31818;
count__31811 = G__31819;
i__31812 = G__31820;
continue;
} else {
var event = cljs.core.first.call(null,seq__31809__$1);
re_frame.router.dispatch.call(null,event);

var G__31821 = cljs.core.next.call(null,seq__31809__$1);
var G__31822 = null;
var G__31823 = (0);
var G__31824 = (0);
seq__31809 = G__31821;
chunk__31810 = G__31822;
count__31811 = G__31823;
i__31812 = G__31824;
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
var seq__31825 = cljs.core.seq.call(null,value);
var chunk__31826 = null;
var count__31827 = (0);
var i__31828 = (0);
while(true){
if((i__31828 < count__31827)){
var event = cljs.core._nth.call(null,chunk__31826,i__31828);
clear_event.call(null,event);

var G__31829 = seq__31825;
var G__31830 = chunk__31826;
var G__31831 = count__31827;
var G__31832 = (i__31828 + (1));
seq__31825 = G__31829;
chunk__31826 = G__31830;
count__31827 = G__31831;
i__31828 = G__31832;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31825);
if(temp__4657__auto__){
var seq__31825__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31825__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__31825__$1);
var G__31833 = cljs.core.chunk_rest.call(null,seq__31825__$1);
var G__31834 = c__29262__auto__;
var G__31835 = cljs.core.count.call(null,c__29262__auto__);
var G__31836 = (0);
seq__31825 = G__31833;
chunk__31826 = G__31834;
count__31827 = G__31835;
i__31828 = G__31836;
continue;
} else {
var event = cljs.core.first.call(null,seq__31825__$1);
clear_event.call(null,event);

var G__31837 = cljs.core.next.call(null,seq__31825__$1);
var G__31838 = null;
var G__31839 = (0);
var G__31840 = (0);
seq__31825 = G__31837;
chunk__31826 = G__31838;
count__31827 = G__31839;
i__31828 = G__31840;
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

//# sourceMappingURL=fx.js.map?rel=1518580798501
