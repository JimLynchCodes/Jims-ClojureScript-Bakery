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
var seq__50689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__50690 = null;
var count__50691 = (0);
var i__50692 = (0);
while(true){
if((i__50692 < count__50691)){
var vec__50693 = cljs.core._nth.call(null,chunk__50690,i__50692);
var effect_key = cljs.core.nth.call(null,vec__50693,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50693,(1),null);
var temp__4655__auto___50699 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50699)){
var effect_fn_50700 = temp__4655__auto___50699;
effect_fn_50700.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50701 = seq__50689;
var G__50702 = chunk__50690;
var G__50703 = count__50691;
var G__50704 = (i__50692 + (1));
seq__50689 = G__50701;
chunk__50690 = G__50702;
count__50691 = G__50703;
i__50692 = G__50704;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50689);
if(temp__4657__auto__){
var seq__50689__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50689__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50689__$1);
var G__50705 = cljs.core.chunk_rest.call(null,seq__50689__$1);
var G__50706 = c__29262__auto__;
var G__50707 = cljs.core.count.call(null,c__29262__auto__);
var G__50708 = (0);
seq__50689 = G__50705;
chunk__50690 = G__50706;
count__50691 = G__50707;
i__50692 = G__50708;
continue;
} else {
var vec__50696 = cljs.core.first.call(null,seq__50689__$1);
var effect_key = cljs.core.nth.call(null,vec__50696,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50696,(1),null);
var temp__4655__auto___50709 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50709)){
var effect_fn_50710 = temp__4655__auto___50709;
effect_fn_50710.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50711 = cljs.core.next.call(null,seq__50689__$1);
var G__50712 = null;
var G__50713 = (0);
var G__50714 = (0);
seq__50689 = G__50711;
chunk__50690 = G__50712;
count__50691 = G__50713;
i__50692 = G__50714;
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
var seq__50715 = cljs.core.seq.call(null,value);
var chunk__50716 = null;
var count__50717 = (0);
var i__50718 = (0);
while(true){
if((i__50718 < count__50717)){
var map__50719 = cljs.core._nth.call(null,chunk__50716,i__50718);
var map__50719__$1 = ((((!((map__50719 == null)))?((((map__50719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50719):map__50719);
var effect = map__50719__$1;
var ms = cljs.core.get.call(null,map__50719__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50719__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50715,chunk__50716,count__50717,i__50718,map__50719,map__50719__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50715,chunk__50716,count__50717,i__50718,map__50719,map__50719__$1,effect,ms,dispatch))
,ms);
}

var G__50723 = seq__50715;
var G__50724 = chunk__50716;
var G__50725 = count__50717;
var G__50726 = (i__50718 + (1));
seq__50715 = G__50723;
chunk__50716 = G__50724;
count__50717 = G__50725;
i__50718 = G__50726;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50715);
if(temp__4657__auto__){
var seq__50715__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50715__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50715__$1);
var G__50727 = cljs.core.chunk_rest.call(null,seq__50715__$1);
var G__50728 = c__29262__auto__;
var G__50729 = cljs.core.count.call(null,c__29262__auto__);
var G__50730 = (0);
seq__50715 = G__50727;
chunk__50716 = G__50728;
count__50717 = G__50729;
i__50718 = G__50730;
continue;
} else {
var map__50721 = cljs.core.first.call(null,seq__50715__$1);
var map__50721__$1 = ((((!((map__50721 == null)))?((((map__50721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50721):map__50721);
var effect = map__50721__$1;
var ms = cljs.core.get.call(null,map__50721__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50721__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50715,chunk__50716,count__50717,i__50718,map__50721,map__50721__$1,effect,ms,dispatch,seq__50715__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50715,chunk__50716,count__50717,i__50718,map__50721,map__50721__$1,effect,ms,dispatch,seq__50715__$1,temp__4657__auto__))
,ms);
}

var G__50731 = cljs.core.next.call(null,seq__50715__$1);
var G__50732 = null;
var G__50733 = (0);
var G__50734 = (0);
seq__50715 = G__50731;
chunk__50716 = G__50732;
count__50717 = G__50733;
i__50718 = G__50734;
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
var seq__50735 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__50736 = null;
var count__50737 = (0);
var i__50738 = (0);
while(true){
if((i__50738 < count__50737)){
var event = cljs.core._nth.call(null,chunk__50736,i__50738);
re_frame.router.dispatch.call(null,event);

var G__50739 = seq__50735;
var G__50740 = chunk__50736;
var G__50741 = count__50737;
var G__50742 = (i__50738 + (1));
seq__50735 = G__50739;
chunk__50736 = G__50740;
count__50737 = G__50741;
i__50738 = G__50742;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50735);
if(temp__4657__auto__){
var seq__50735__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50735__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50735__$1);
var G__50743 = cljs.core.chunk_rest.call(null,seq__50735__$1);
var G__50744 = c__29262__auto__;
var G__50745 = cljs.core.count.call(null,c__29262__auto__);
var G__50746 = (0);
seq__50735 = G__50743;
chunk__50736 = G__50744;
count__50737 = G__50745;
i__50738 = G__50746;
continue;
} else {
var event = cljs.core.first.call(null,seq__50735__$1);
re_frame.router.dispatch.call(null,event);

var G__50747 = cljs.core.next.call(null,seq__50735__$1);
var G__50748 = null;
var G__50749 = (0);
var G__50750 = (0);
seq__50735 = G__50747;
chunk__50736 = G__50748;
count__50737 = G__50749;
i__50738 = G__50750;
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
var seq__50751 = cljs.core.seq.call(null,value);
var chunk__50752 = null;
var count__50753 = (0);
var i__50754 = (0);
while(true){
if((i__50754 < count__50753)){
var event = cljs.core._nth.call(null,chunk__50752,i__50754);
clear_event.call(null,event);

var G__50755 = seq__50751;
var G__50756 = chunk__50752;
var G__50757 = count__50753;
var G__50758 = (i__50754 + (1));
seq__50751 = G__50755;
chunk__50752 = G__50756;
count__50753 = G__50757;
i__50754 = G__50758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50751);
if(temp__4657__auto__){
var seq__50751__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50751__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__50751__$1);
var G__50759 = cljs.core.chunk_rest.call(null,seq__50751__$1);
var G__50760 = c__29262__auto__;
var G__50761 = cljs.core.count.call(null,c__29262__auto__);
var G__50762 = (0);
seq__50751 = G__50759;
chunk__50752 = G__50760;
count__50753 = G__50761;
i__50754 = G__50762;
continue;
} else {
var event = cljs.core.first.call(null,seq__50751__$1);
clear_event.call(null,event);

var G__50763 = cljs.core.next.call(null,seq__50751__$1);
var G__50764 = null;
var G__50765 = (0);
var G__50766 = (0);
seq__50751 = G__50763;
chunk__50752 = G__50764;
count__50753 = G__50765;
i__50754 = G__50766;
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

//# sourceMappingURL=fx.js.map?rel=1518440306107
