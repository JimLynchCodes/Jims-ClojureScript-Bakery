// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__49496){
var map__49497 = p__49496;
var map__49497__$1 = ((((!((map__49497 == null)))?((((map__49497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49497):map__49497);
var args = map__49497__$1;
var on_change = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__49497__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__49499 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__28423__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__49499,external_model_value);
} else {
return G__49499;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__49500,event){
var map__49501 = p__49500;
var map__49501__$1 = ((((!((map__49501 == null)))?((((map__49501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49501):map__49501);
var state = map__49501__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__49503 = event;
var G__49503__$1 = (((G__49503 instanceof cljs.core.Keyword))?G__49503.fqn:null);
switch (G__49503__$1) {
case "input-text-blurred":
var and__28411__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__28411__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__28423__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49503__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__49505,event){
var map__49506 = p__49505;
var map__49506__$1 = ((((!((map__49506 == null)))?((((map__49506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49506):map__49506);
var state = map__49506__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__49506__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__49508 = event;
var G__49508__$1 = (((G__49508 instanceof cljs.core.Keyword))?G__49508.fqn:null);
switch (G__49508__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__49510,new_value){
var map__49511 = p__49510;
var map__49511__$1 = ((((!((map__49511 == null)))?((((map__49511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49511):map__49511);
var state = map__49511__$1;
var on_change = cljs.core.get.call(null,map__49511__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__49513,suggestion){
var map__49514 = p__49513;
var map__49514__$1 = ((((!((map__49514 == null)))?((((map__49514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49514):map__49514);
var state = map__49514__$1;
var suggestion_to_string = cljs.core.get.call(null,map__49514__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__49516 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__49516,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__49516;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__49517,index){
var map__49518 = p__49517;
var map__49518__$1 = ((((!((map__49518 == null)))?((((map__49518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49518):map__49518);
var state = map__49518__$1;
var suggestions = cljs.core.get.call(null,map__49518__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__49520 = state;
var G__49520__$1 = cljs.core.assoc.call(null,G__49520,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__49520__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__49520__$1,suggestion):G__49520__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__49520__$2,suggestion);
} else {
return G__49520__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__49521,index){
var map__49522 = p__49521;
var map__49522__$1 = ((((!((map__49522 == null)))?((((map__49522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49522):map__49522);
var state = map__49522__$1;
var suggestions = cljs.core.get.call(null,map__49522__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__49524){
var map__49525 = p__49524;
var map__49525__$1 = ((((!((map__49525 == null)))?((((map__49525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49525):map__49525);
var state = map__49525__$1;
var suggestion_active_index = cljs.core.get.call(null,map__49525__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__49527 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__49527,suggestion_active_index);
} else {
return G__49527;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__49528){
var map__49529 = p__49528;
var map__49529__$1 = ((((!((map__49529 == null)))?((((map__49529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49529):map__49529);
var state = map__49529__$1;
var suggestions = cljs.core.get.call(null,map__49529__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__49529__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__49531 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__49531,re_com.typeahead.wrap.call(null,((function (){var or__28423__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__49531;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__49532){
var map__49533 = p__49532;
var map__49533__$1 = ((((!((map__49533 == null)))?((((map__49533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49533):map__49533);
var state = map__49533__$1;
var suggestions = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__49535 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__49535,re_com.typeahead.wrap.call(null,((function (){var or__28423__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__49535;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__49536 = state;
var G__49536__$1 = re_com.typeahead.clear_suggestions.call(null,G__49536)
;
var G__49536__$2 = cljs.core.assoc.call(null,G__49536__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__49536__$2,null);
} else {
return G__49536__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__49537){
var map__49538 = p__49537;
var map__49538__$1 = ((((!((map__49538 == null)))?((((map__49538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49538):map__49538);
var state = map__49538__$1;
var input_text = cljs.core.get.call(null,map__49538__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__49538__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__49540 = state;
if(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__28411__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__28411__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__49540,input_text);
} else {
return G__49540;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__49541_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__49541_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__){
return (function (state_49558){
var state_val_49559 = (state_49558[(1)]);
if((state_val_49559 === (1))){
var state_49558__$1 = state_49558;
var statearr_49560_49572 = state_49558__$1;
(statearr_49560_49572[(2)] = null);

(statearr_49560_49572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (2))){
var state_49558__$1 = state_49558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49558__$1,(4),c_search);
} else {
if((state_val_49559 === (3))){
var inst_49556 = (state_49558[(2)]);
var state_49558__$1 = state_49558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49558__$1,inst_49556);
} else {
if((state_val_49559 === (4))){
var inst_49544 = (state_49558[(7)]);
var inst_49544__$1 = (state_49558[(2)]);
var inst_49545 = cljs.core.deref.call(null,state_atom);
var inst_49546 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_49545);
var inst_49547 = cljs.core._EQ_.call(null,"",inst_49544__$1);
var state_49558__$1 = (function (){var statearr_49561 = state_49558;
(statearr_49561[(7)] = inst_49544__$1);

(statearr_49561[(8)] = inst_49546);

return statearr_49561;
})();
if(inst_49547){
var statearr_49562_49573 = state_49558__$1;
(statearr_49562_49573[(1)] = (5));

} else {
var statearr_49563_49574 = state_49558__$1;
(statearr_49563_49574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (5))){
var inst_49549 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_49558__$1 = state_49558;
var statearr_49564_49575 = state_49558__$1;
(statearr_49564_49575[(2)] = inst_49549);

(statearr_49564_49575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (6))){
var inst_49544 = (state_49558[(7)]);
var inst_49546 = (state_49558[(8)]);
var inst_49551 = re_com.typeahead.search_data_source_BANG_.call(null,inst_49546,state_atom,inst_49544);
var state_49558__$1 = state_49558;
var statearr_49565_49576 = state_49558__$1;
(statearr_49565_49576[(2)] = inst_49551);

(statearr_49565_49576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49559 === (7))){
var inst_49553 = (state_49558[(2)]);
var state_49558__$1 = (function (){var statearr_49566 = state_49558;
(statearr_49566[(9)] = inst_49553);

return statearr_49566;
})();
var statearr_49567_49577 = state_49558__$1;
(statearr_49567_49577[(2)] = null);

(statearr_49567_49577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__34071__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto____0 = (function (){
var statearr_49568 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49568[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto__);

(statearr_49568[(1)] = (1));

return statearr_49568;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto____1 = (function (state_49558){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49569){if((e49569 instanceof Object)){
var ex__33987__auto__ = e49569;
var statearr_49570_49578 = state_49558;
(statearr_49570_49578[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49579 = state_49558;
state_49558 = G__49579;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto__ = function(state_49558){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto____1.call(this,state_49558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_49571 = f__34072__auto__.call(null);
(statearr_49571[(6)] = c__34071__auto__);

return statearr_49571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__49581 = cljs.core.deref.call(null,state_atom);
var map__49581__$1 = ((((!((map__49581 == null)))?((((map__49581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49581):map__49581);
var state = map__49581__$1;
var input_text = cljs.core.get.call(null,map__49581__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__49581__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__49581,map__49581__$1,state,input_text,c_input){
return (function (p1__49580_SHARP_){
var G__49583 = p1__49580_SHARP_;
var G__49583__$1 = cljs.core.assoc.call(null,G__49583,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__49583__$1,new_text);
} else {
return G__49583__$1;
}
});})(map__49581,map__49581__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__49584 = cljs.core._EQ_;
var expr__49585 = event.which;
if(cljs.core.truth_(pred__49584.call(null,goog.events.KeyCodes.UP,expr__49585))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__49584.call(null,goog.events.KeyCodes.DOWN,expr__49585))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__49584.call(null,goog.events.KeyCodes.ENTER,expr__49585))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__49584.call(null,goog.events.KeyCodes.ESC,expr__49585))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__49584.call(null,goog.events.KeyCodes.TAB,expr__49585))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__29599__auto__ = [];
var len__29592__auto___49609 = arguments.length;
var i__29593__auto___49610 = (0);
while(true){
if((i__29593__auto___49610 < len__29592__auto___49609)){
args__29599__auto__.push((arguments[i__29593__auto___49610]));

var G__49611 = (i__29593__auto___49610 + (1));
i__29593__auto___49610 = G__49611;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__49589){
var map__49590 = p__49589;
var map__49590__$1 = ((((!((map__49590 == null)))?((((map__49590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49590):map__49590);
var args = map__49590__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__49592 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__49592__$1 = ((((!((map__49592 == null)))?((((map__49592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49592):map__49592);
var state = map__49592__$1;
var c_search = cljs.core.get.call(null,map__49592__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__49592__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function() { 
var G__49612__delegate = function (p__49594){
var map__49595 = p__49594;
var map__49595__$1 = ((((!((map__49595 == null)))?((((map__49595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49595):map__49595);
var args__$1 = map__49595__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__49595__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__49597 = cljs.core.deref.call(null,state_atom);
var map__49597__$1 = ((((!((map__49597 == null)))?((((map__49597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49597):map__49597);
var state__$1 = map__49597__$1;
var suggestions = cljs.core.get.call(null,map__49597__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__49597__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__49597__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__49597__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__28423__auto__ = width;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__28423__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__29231__auto__ = ((function (map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function re_com$typeahead$iter__49599(s__49600){
return (new cljs.core.LazySeq(null,((function (map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function (){
var s__49600__$1 = s__49600;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49600__$1);
if(temp__4657__auto__){
var s__49600__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49600__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__49600__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__49602 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__49601 = (0);
while(true){
if((i__49601 < size__29230__auto__)){
var vec__49603 = cljs.core._nth.call(null,c__29229__auto__,i__49601);
var i = cljs.core.nth.call(null,vec__49603,(0),null);
var s = cljs.core.nth.call(null,vec__49603,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__49602,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__49601,selected_QMARK_,vec__49603,i,s,c__29229__auto__,size__29230__auto__,b__49602,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__49601,selected_QMARK_,vec__49603,i,s,c__29229__auto__,size__29230__auto__,b__49602,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__49601,selected_QMARK_,vec__49603,i,s,c__29229__auto__,size__29230__auto__,b__49602,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function (p1__49587_SHARP_){
p1__49587_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__49601,selected_QMARK_,vec__49603,i,s,c__29229__auto__,size__29230__auto__,b__49602,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__49613 = (i__49601 + (1));
i__49601 = G__49613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49602),re_com$typeahead$iter__49599.call(null,cljs.core.chunk_rest.call(null,s__49600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49602),null);
}
} else {
var vec__49606 = cljs.core.first.call(null,s__49600__$2);
var i = cljs.core.nth.call(null,vec__49606,(0),null);
var s = cljs.core.nth.call(null,vec__49606,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__49606,i,s,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__49606,i,s,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__49606,i,s,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args){
return (function (p1__49587_SHARP_){
p1__49587_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__49606,i,s,s__49600__$2,temp__4657__auto__,map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__49599.call(null,cljs.core.rest.call(null,s__49600__$2)));
}
} else {
return null;
}
break;
}
});})(map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
,null,null));
});})(map__49597,map__49597__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49595,map__49595__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
;
return iter__29231__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__49612 = function (var_args){
var p__49594 = null;
if (arguments.length > 0) {
var G__49614__i = 0, G__49614__a = new Array(arguments.length -  0);
while (G__49614__i < G__49614__a.length) {G__49614__a[G__49614__i] = arguments[G__49614__i + 0]; ++G__49614__i;}
  p__49594 = new cljs.core.IndexedSeq(G__49614__a,0,null);
} 
return G__49612__delegate.call(this,p__49594);};
G__49612.cljs$lang$maxFixedArity = 0;
G__49612.cljs$lang$applyTo = (function (arglist__49615){
var p__49594 = cljs.core.seq(arglist__49615);
return G__49612__delegate(p__49594);
});
G__49612.cljs$core$IFn$_invoke$arity$variadic = G__49612__delegate;
return G__49612;
})()
;
;})(map__49592,map__49592__$1,state,c_search,c_input,state_atom,input_text_model,map__49590,map__49590__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq49588){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49588));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__34071__auto___49696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___49696,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___49696,out){
return (function (state_49666){
var state_val_49667 = (state_49666[(1)]);
if((state_val_49667 === (7))){
var inst_49621 = (state_49666[(2)]);
var state_49666__$1 = state_49666;
var statearr_49668_49697 = state_49666__$1;
(statearr_49668_49697[(2)] = inst_49621);

(statearr_49668_49697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (1))){
var inst_49616 = null;
var state_49666__$1 = (function (){var statearr_49669 = state_49666;
(statearr_49669[(7)] = inst_49616);

return statearr_49669;
})();
var statearr_49670_49698 = state_49666__$1;
(statearr_49670_49698[(2)] = null);

(statearr_49670_49698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (4))){
var state_49666__$1 = state_49666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49666__$1,(7),in$);
} else {
if((state_val_49667 === (15))){
var inst_49651 = (state_49666[(2)]);
var state_49666__$1 = (function (){var statearr_49671 = state_49666;
(statearr_49671[(8)] = inst_49651);

return statearr_49671;
})();
var statearr_49672_49699 = state_49666__$1;
(statearr_49672_49699[(2)] = null);

(statearr_49672_49699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (13))){
var inst_49639 = (state_49666[(9)]);
var inst_49653 = cljs.core._EQ_.call(null,inst_49639,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_49666__$1 = state_49666;
if(inst_49653){
var statearr_49673_49700 = state_49666__$1;
(statearr_49673_49700[(1)] = (16));

} else {
var statearr_49674_49701 = state_49666__$1;
(statearr_49674_49701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (6))){
var inst_49625 = (state_49666[(10)]);
var inst_49624 = (state_49666[(2)]);
var inst_49625__$1 = cljs.core.async.timeout.call(null,ms);
var inst_49633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49634 = [in$,inst_49625__$1];
var inst_49635 = (new cljs.core.PersistentVector(null,2,(5),inst_49633,inst_49634,null));
var state_49666__$1 = (function (){var statearr_49675 = state_49666;
(statearr_49675[(11)] = inst_49624);

(statearr_49675[(10)] = inst_49625__$1);

return statearr_49675;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49666__$1,(8),inst_49635);
} else {
if((state_val_49667 === (17))){
var state_49666__$1 = state_49666;
var statearr_49676_49702 = state_49666__$1;
(statearr_49676_49702[(2)] = null);

(statearr_49676_49702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (3))){
var inst_49664 = (state_49666[(2)]);
var state_49666__$1 = state_49666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49666__$1,inst_49664);
} else {
if((state_val_49667 === (12))){
var inst_49624 = (state_49666[(11)]);
var state_49666__$1 = state_49666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49666__$1,(15),out,inst_49624);
} else {
if((state_val_49667 === (2))){
var inst_49616 = (state_49666[(7)]);
var inst_49618 = (inst_49616 == null);
var state_49666__$1 = state_49666;
if(cljs.core.truth_(inst_49618)){
var statearr_49677_49703 = state_49666__$1;
(statearr_49677_49703[(1)] = (4));

} else {
var statearr_49678_49704 = state_49666__$1;
(statearr_49678_49704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (11))){
var inst_49661 = (state_49666[(2)]);
var inst_49616 = inst_49661;
var state_49666__$1 = (function (){var statearr_49679 = state_49666;
(statearr_49679[(7)] = inst_49616);

return statearr_49679;
})();
var statearr_49680_49705 = state_49666__$1;
(statearr_49680_49705[(2)] = null);

(statearr_49680_49705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (9))){
var inst_49637 = (state_49666[(12)]);
var inst_49645 = cljs.core.nth.call(null,inst_49637,(0),null);
var inst_49646 = cljs.core.nth.call(null,inst_49637,(1),null);
var state_49666__$1 = (function (){var statearr_49681 = state_49666;
(statearr_49681[(13)] = inst_49646);

return statearr_49681;
})();
var statearr_49682_49706 = state_49666__$1;
(statearr_49682_49706[(2)] = inst_49645);

(statearr_49682_49706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (5))){
var inst_49616 = (state_49666[(7)]);
var state_49666__$1 = state_49666;
var statearr_49683_49707 = state_49666__$1;
(statearr_49683_49707[(2)] = inst_49616);

(statearr_49683_49707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (14))){
var inst_49659 = (state_49666[(2)]);
var state_49666__$1 = state_49666;
var statearr_49684_49708 = state_49666__$1;
(statearr_49684_49708[(2)] = inst_49659);

(statearr_49684_49708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (16))){
var inst_49638 = (state_49666[(14)]);
var state_49666__$1 = state_49666;
var statearr_49685_49709 = state_49666__$1;
(statearr_49685_49709[(2)] = inst_49638);

(statearr_49685_49709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (10))){
var inst_49625 = (state_49666[(10)]);
var inst_49639 = (state_49666[(9)]);
var inst_49648 = cljs.core._EQ_.call(null,inst_49639,inst_49625);
var state_49666__$1 = state_49666;
if(inst_49648){
var statearr_49686_49710 = state_49666__$1;
(statearr_49686_49710[(1)] = (12));

} else {
var statearr_49687_49711 = state_49666__$1;
(statearr_49687_49711[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (18))){
var inst_49657 = (state_49666[(2)]);
var state_49666__$1 = state_49666;
var statearr_49688_49712 = state_49666__$1;
(statearr_49688_49712[(2)] = inst_49657);

(statearr_49688_49712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49667 === (8))){
var inst_49639 = (state_49666[(9)]);
var inst_49637 = (state_49666[(12)]);
var inst_49637__$1 = (state_49666[(2)]);
var inst_49638 = cljs.core.nth.call(null,inst_49637__$1,(0),null);
var inst_49639__$1 = cljs.core.nth.call(null,inst_49637__$1,(1),null);
var inst_49640 = cljs.core._EQ_.call(null,inst_49639__$1,in$);
var state_49666__$1 = (function (){var statearr_49689 = state_49666;
(statearr_49689[(14)] = inst_49638);

(statearr_49689[(9)] = inst_49639__$1);

(statearr_49689[(12)] = inst_49637__$1);

return statearr_49689;
})();
if(inst_49640){
var statearr_49690_49713 = state_49666__$1;
(statearr_49690_49713[(1)] = (9));

} else {
var statearr_49691_49714 = state_49666__$1;
(statearr_49691_49714[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34071__auto___49696,out))
;
return ((function (switch__33983__auto__,c__34071__auto___49696,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__33984__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__33984__auto____0 = (function (){
var statearr_49692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49692[(0)] = re_com$typeahead$debounce_$_state_machine__33984__auto__);

(statearr_49692[(1)] = (1));

return statearr_49692;
});
var re_com$typeahead$debounce_$_state_machine__33984__auto____1 = (function (state_49666){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49693){if((e49693 instanceof Object)){
var ex__33987__auto__ = e49693;
var statearr_49694_49715 = state_49666;
(statearr_49694_49715[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49716 = state_49666;
state_49666 = G__49716;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__33984__auto__ = function(state_49666){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__33984__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__33984__auto____1.call(this,state_49666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__33984__auto____0;
re_com$typeahead$debounce_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__33984__auto____1;
return re_com$typeahead$debounce_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___49696,out))
})();
var state__34073__auto__ = (function (){var statearr_49695 = f__34072__auto__.call(null);
(statearr_49695[(6)] = c__34071__auto___49696);

return statearr_49695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___49696,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1518582127141
