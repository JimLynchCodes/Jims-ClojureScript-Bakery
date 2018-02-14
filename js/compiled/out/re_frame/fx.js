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
var seq__50681 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__50682 = null;
var count__50683 = (0);
var i__50684 = (0);
while(true){
if((i__50684 < count__50683)){
var vec__50685 = cljs.core._nth.call(null,chunk__50682,i__50684);
var effect_key = cljs.core.nth.call(null,vec__50685,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50685,(1),null);
var temp__4655__auto___50691 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50691)){
var effect_fn_50692 = temp__4655__auto___50691;
effect_fn_50692.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50693 = seq__50681;
var G__50694 = chunk__50682;
var G__50695 = count__50683;
var G__50696 = (i__50684 + (1));
seq__50681 = G__50693;
chunk__50682 = G__50694;
count__50683 = G__50695;
i__50684 = G__50696;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50681);
if(temp__4657__auto__){
var seq__50681__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50681__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50681__$1);
var G__50697 = cljs.core.chunk_rest.call(null,seq__50681__$1);
var G__50698 = c__29262__auto__;
var G__50699 = cljs.core.count.call(null,c__29262__auto__);
var G__50700 = (0);
seq__50681 = G__50697;
chunk__50682 = G__50698;
count__50683 = G__50699;
i__50684 = G__50700;
continue;
} else {
var vec__50688 = cljs.core.first.call(null,seq__50681__$1);
var effect_key = cljs.core.nth.call(null,vec__50688,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50688,(1),null);
var temp__4655__auto___50701 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50701)){
var effect_fn_50702 = temp__4655__auto___50701;
effect_fn_50702.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50703 = cljs.core.next.call(null,seq__50681__$1);
var G__50704 = null;
var G__50705 = (0);
var G__50706 = (0);
seq__50681 = G__50703;
chunk__50682 = G__50704;
count__50683 = G__50705;
i__50684 = G__50706;
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
var seq__50707 = cljs.core.seq.call(null,value);
var chunk__50708 = null;
var count__50709 = (0);
var i__50710 = (0);
while(true){
if((i__50710 < count__50709)){
var map__50711 = cljs.core._nth.call(null,chunk__50708,i__50710);
var map__50711__$1 = ((((!((map__50711 == null)))?((((map__50711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50711):map__50711);
var effect = map__50711__$1;
var ms = cljs.core.get.call(null,map__50711__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50711__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50707,chunk__50708,count__50709,i__50710,map__50711,map__50711__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50707,chunk__50708,count__50709,i__50710,map__50711,map__50711__$1,effect,ms,dispatch))
,ms);
}

var G__50715 = seq__50707;
var G__50716 = chunk__50708;
var G__50717 = count__50709;
var G__50718 = (i__50710 + (1));
seq__50707 = G__50715;
chunk__50708 = G__50716;
count__50709 = G__50717;
i__50710 = G__50718;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50707);
if(temp__4657__auto__){
var seq__50707__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50707__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50707__$1);
var G__50719 = cljs.core.chunk_rest.call(null,seq__50707__$1);
var G__50720 = c__29262__auto__;
var G__50721 = cljs.core.count.call(null,c__29262__auto__);
var G__50722 = (0);
seq__50707 = G__50719;
chunk__50708 = G__50720;
count__50709 = G__50721;
i__50710 = G__50722;
continue;
} else {
var map__50713 = cljs.core.first.call(null,seq__50707__$1);
var map__50713__$1 = ((((!((map__50713 == null)))?((((map__50713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50713):map__50713);
var effect = map__50713__$1;
var ms = cljs.core.get.call(null,map__50713__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50713__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50707,chunk__50708,count__50709,i__50710,map__50713,map__50713__$1,effect,ms,dispatch,seq__50707__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50707,chunk__50708,count__50709,i__50710,map__50713,map__50713__$1,effect,ms,dispatch,seq__50707__$1,temp__4657__auto__))
,ms);
}

var G__50723 = cljs.core.next.call(null,seq__50707__$1);
var G__50724 = null;
var G__50725 = (0);
var G__50726 = (0);
seq__50707 = G__50723;
chunk__50708 = G__50724;
count__50709 = G__50725;
i__50710 = G__50726;
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
var seq__50727 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__50728 = null;
var count__50729 = (0);
var i__50730 = (0);
while(true){
if((i__50730 < count__50729)){
var event = cljs.core._nth.call(null,chunk__50728,i__50730);
re_frame.router.dispatch.call(null,event);

var G__50731 = seq__50727;
var G__50732 = chunk__50728;
var G__50733 = count__50729;
var G__50734 = (i__50730 + (1));
seq__50727 = G__50731;
chunk__50728 = G__50732;
count__50729 = G__50733;
i__50730 = G__50734;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50727);
if(temp__4657__auto__){
var seq__50727__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50727__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50727__$1);
var G__50735 = cljs.core.chunk_rest.call(null,seq__50727__$1);
var G__50736 = c__29262__auto__;
var G__50737 = cljs.core.count.call(null,c__29262__auto__);
var G__50738 = (0);
seq__50727 = G__50735;
chunk__50728 = G__50736;
count__50729 = G__50737;
i__50730 = G__50738;
continue;
} else {
var event = cljs.core.first.call(null,seq__50727__$1);
re_frame.router.dispatch.call(null,event);

var G__50739 = cljs.core.next.call(null,seq__50727__$1);
var G__50740 = null;
var G__50741 = (0);
var G__50742 = (0);
seq__50727 = G__50739;
chunk__50728 = G__50740;
count__50729 = G__50741;
i__50730 = G__50742;
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
var seq__50743 = cljs.core.seq.call(null,value);
var chunk__50744 = null;
var count__50745 = (0);
var i__50746 = (0);
while(true){
if((i__50746 < count__50745)){
var event = cljs.core._nth.call(null,chunk__50744,i__50746);
clear_event.call(null,event);

var G__50747 = seq__50743;
var G__50748 = chunk__50744;
var G__50749 = count__50745;
var G__50750 = (i__50746 + (1));
seq__50743 = G__50747;
chunk__50744 = G__50748;
count__50745 = G__50749;
i__50746 = G__50750;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50743);
if(temp__4657__auto__){
var seq__50743__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50743__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50743__$1);
var G__50751 = cljs.core.chunk_rest.call(null,seq__50743__$1);
var G__50752 = c__29262__auto__;
var G__50753 = cljs.core.count.call(null,c__29262__auto__);
var G__50754 = (0);
seq__50743 = G__50751;
chunk__50744 = G__50752;
count__50745 = G__50753;
i__50746 = G__50754;
continue;
} else {
var event = cljs.core.first.call(null,seq__50743__$1);
clear_event.call(null,event);

var G__50755 = cljs.core.next.call(null,seq__50743__$1);
var G__50756 = null;
var G__50757 = (0);
var G__50758 = (0);
seq__50743 = G__50755;
chunk__50744 = G__50756;
count__50745 = G__50757;
i__50746 = G__50758;
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

//# sourceMappingURL=fx.js.map?rel=1518582135018
