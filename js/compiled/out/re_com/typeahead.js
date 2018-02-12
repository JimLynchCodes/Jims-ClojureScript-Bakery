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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__49504){
var map__49505 = p__49504;
var map__49505__$1 = ((((!((map__49505 == null)))?((((map__49505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49505):map__49505);
var args = map__49505__$1;
var on_change = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__49505__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__49507 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__28423__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__49507,external_model_value);
} else {
return G__49507;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__49508,event){
var map__49509 = p__49508;
var map__49509__$1 = ((((!((map__49509 == null)))?((((map__49509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49509):map__49509);
var state = map__49509__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__49509__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__49509__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__49511 = event;
var G__49511__$1 = (((G__49511 instanceof cljs.core.Keyword))?G__49511.fqn:null);
switch (G__49511__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49511__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__49513,event){
var map__49514 = p__49513;
var map__49514__$1 = ((((!((map__49514 == null)))?((((map__49514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49514):map__49514);
var state = map__49514__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__49514__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__49516 = event;
var G__49516__$1 = (((G__49516 instanceof cljs.core.Keyword))?G__49516.fqn:null);
switch (G__49516__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__49518,new_value){
var map__49519 = p__49518;
var map__49519__$1 = ((((!((map__49519 == null)))?((((map__49519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49519):map__49519);
var state = map__49519__$1;
var on_change = cljs.core.get.call(null,map__49519__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__49521,suggestion){
var map__49522 = p__49521;
var map__49522__$1 = ((((!((map__49522 == null)))?((((map__49522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49522):map__49522);
var state = map__49522__$1;
var suggestion_to_string = cljs.core.get.call(null,map__49522__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__49524 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__49524,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__49524;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__49525,index){
var map__49526 = p__49525;
var map__49526__$1 = ((((!((map__49526 == null)))?((((map__49526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49526):map__49526);
var state = map__49526__$1;
var suggestions = cljs.core.get.call(null,map__49526__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__49528 = state;
var G__49528__$1 = cljs.core.assoc.call(null,G__49528,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__49528__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__49528__$1,suggestion):G__49528__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__49528__$2,suggestion);
} else {
return G__49528__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__49529,index){
var map__49530 = p__49529;
var map__49530__$1 = ((((!((map__49530 == null)))?((((map__49530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49530):map__49530);
var state = map__49530__$1;
var suggestions = cljs.core.get.call(null,map__49530__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__49532){
var map__49533 = p__49532;
var map__49533__$1 = ((((!((map__49533 == null)))?((((map__49533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49533):map__49533);
var state = map__49533__$1;
var suggestion_active_index = cljs.core.get.call(null,map__49533__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__49535 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__49535,suggestion_active_index);
} else {
return G__49535;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__49536){
var map__49537 = p__49536;
var map__49537__$1 = ((((!((map__49537 == null)))?((((map__49537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49537):map__49537);
var state = map__49537__$1;
var suggestions = cljs.core.get.call(null,map__49537__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__49537__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__49539 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__49539,re_com.typeahead.wrap.call(null,((function (){var or__28423__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__49539;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__49540){
var map__49541 = p__49540;
var map__49541__$1 = ((((!((map__49541 == null)))?((((map__49541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49541):map__49541);
var state = map__49541__$1;
var suggestions = cljs.core.get.call(null,map__49541__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__49541__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__49543 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__49543,re_com.typeahead.wrap.call(null,((function (){var or__28423__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__49543;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__49544 = state;
var G__49544__$1 = re_com.typeahead.clear_suggestions.call(null,G__49544)
;
var G__49544__$2 = cljs.core.assoc.call(null,G__49544__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__49544__$2,null);
} else {
return G__49544__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__49545){
var map__49546 = p__49545;
var map__49546__$1 = ((((!((map__49546 == null)))?((((map__49546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49546):map__49546);
var state = map__49546__$1;
var input_text = cljs.core.get.call(null,map__49546__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__49546__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__49548 = state;
if(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__28411__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__28411__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__49548,input_text);
} else {
return G__49548;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__49549_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__49549_SHARP_);
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
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__){
return (function (state_49566){
var state_val_49567 = (state_49566[(1)]);
if((state_val_49567 === (1))){
var state_49566__$1 = state_49566;
var statearr_49568_49580 = state_49566__$1;
(statearr_49568_49580[(2)] = null);

(statearr_49568_49580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49567 === (2))){
var state_49566__$1 = state_49566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49566__$1,(4),c_search);
} else {
if((state_val_49567 === (3))){
var inst_49564 = (state_49566[(2)]);
var state_49566__$1 = state_49566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49566__$1,inst_49564);
} else {
if((state_val_49567 === (4))){
var inst_49552 = (state_49566[(7)]);
var inst_49552__$1 = (state_49566[(2)]);
var inst_49553 = cljs.core.deref.call(null,state_atom);
var inst_49554 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_49553);
var inst_49555 = cljs.core._EQ_.call(null,"",inst_49552__$1);
var state_49566__$1 = (function (){var statearr_49569 = state_49566;
(statearr_49569[(7)] = inst_49552__$1);

(statearr_49569[(8)] = inst_49554);

return statearr_49569;
})();
if(inst_49555){
var statearr_49570_49581 = state_49566__$1;
(statearr_49570_49581[(1)] = (5));

} else {
var statearr_49571_49582 = state_49566__$1;
(statearr_49571_49582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49567 === (5))){
var inst_49557 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_49566__$1 = state_49566;
var statearr_49572_49583 = state_49566__$1;
(statearr_49572_49583[(2)] = inst_49557);

(statearr_49572_49583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49567 === (6))){
var inst_49552 = (state_49566[(7)]);
var inst_49554 = (state_49566[(8)]);
var inst_49559 = re_com.typeahead.search_data_source_BANG_.call(null,inst_49554,state_atom,inst_49552);
var state_49566__$1 = state_49566;
var statearr_49573_49584 = state_49566__$1;
(statearr_49573_49584[(2)] = inst_49559);

(statearr_49573_49584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49567 === (7))){
var inst_49561 = (state_49566[(2)]);
var state_49566__$1 = (function (){var statearr_49574 = state_49566;
(statearr_49574[(9)] = inst_49561);

return statearr_49574;
})();
var statearr_49575_49585 = state_49566__$1;
(statearr_49575_49585[(2)] = null);

(statearr_49575_49585[(1)] = (2));


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
});})(c__34079__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto____0 = (function (){
var statearr_49576 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49576[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto__);

(statearr_49576[(1)] = (1));

return statearr_49576;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto____1 = (function (state_49566){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49577){if((e49577 instanceof Object)){
var ex__33995__auto__ = e49577;
var statearr_49578_49586 = state_49566;
(statearr_49578_49586[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49587 = state_49566;
state_49566 = G__49587;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto__ = function(state_49566){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto____1.call(this,state_49566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__))
})();
var state__34081__auto__ = (function (){var statearr_49579 = f__34080__auto__.call(null);
(statearr_49579[(6)] = c__34079__auto__);

return statearr_49579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__))
);

return c__34079__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__49589 = cljs.core.deref.call(null,state_atom);
var map__49589__$1 = ((((!((map__49589 == null)))?((((map__49589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49589):map__49589);
var state = map__49589__$1;
var input_text = cljs.core.get.call(null,map__49589__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__49589__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__49589,map__49589__$1,state,input_text,c_input){
return (function (p1__49588_SHARP_){
var G__49591 = p1__49588_SHARP_;
var G__49591__$1 = cljs.core.assoc.call(null,G__49591,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__49591__$1,new_text);
} else {
return G__49591__$1;
}
});})(map__49589,map__49589__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__49592 = cljs.core._EQ_;
var expr__49593 = event.which;
if(cljs.core.truth_(pred__49592.call(null,goog.events.KeyCodes.UP,expr__49593))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__49592.call(null,goog.events.KeyCodes.DOWN,expr__49593))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__49592.call(null,goog.events.KeyCodes.ENTER,expr__49593))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__49592.call(null,goog.events.KeyCodes.ESC,expr__49593))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__49592.call(null,goog.events.KeyCodes.TAB,expr__49593))){
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
var len__29592__auto___49617 = arguments.length;
var i__29593__auto___49618 = (0);
while(true){
if((i__29593__auto___49618 < len__29592__auto___49617)){
args__29599__auto__.push((arguments[i__29593__auto___49618]));

var G__49619 = (i__29593__auto___49618 + (1));
i__29593__auto___49618 = G__49619;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__49597){
var map__49598 = p__49597;
var map__49598__$1 = ((((!((map__49598 == null)))?((((map__49598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49598):map__49598);
var args = map__49598__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__49600 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__49600__$1 = ((((!((map__49600 == null)))?((((map__49600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49600):map__49600);
var state = map__49600__$1;
var c_search = cljs.core.get.call(null,map__49600__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__49600__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function() { 
var G__49620__delegate = function (p__49602){
var map__49603 = p__49602;
var map__49603__$1 = ((((!((map__49603 == null)))?((((map__49603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49603):map__49603);
var args__$1 = map__49603__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__49603__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__49605 = cljs.core.deref.call(null,state_atom);
var map__49605__$1 = ((((!((map__49605 == null)))?((((map__49605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49605):map__49605);
var state__$1 = map__49605__$1;
var suggestions = cljs.core.get.call(null,map__49605__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__49605__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__49605__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__49605__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__29231__auto__ = ((function (map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function re_com$typeahead$iter__49607(s__49608){
return (new cljs.core.LazySeq(null,((function (map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function (){
var s__49608__$1 = s__49608;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49608__$1);
if(temp__4657__auto__){
var s__49608__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49608__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__49608__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__49610 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__49609 = (0);
while(true){
if((i__49609 < size__29230__auto__)){
var vec__49611 = cljs.core._nth.call(null,c__29229__auto__,i__49609);
var i = cljs.core.nth.call(null,vec__49611,(0),null);
var s = cljs.core.nth.call(null,vec__49611,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__49610,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__49609,selected_QMARK_,vec__49611,i,s,c__29229__auto__,size__29230__auto__,b__49610,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__49609,selected_QMARK_,vec__49611,i,s,c__29229__auto__,size__29230__auto__,b__49610,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__49609,selected_QMARK_,vec__49611,i,s,c__29229__auto__,size__29230__auto__,b__49610,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function (p1__49595_SHARP_){
p1__49595_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__49609,selected_QMARK_,vec__49611,i,s,c__29229__auto__,size__29230__auto__,b__49610,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__49621 = (i__49609 + (1));
i__49609 = G__49621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49610),re_com$typeahead$iter__49607.call(null,cljs.core.chunk_rest.call(null,s__49608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49610),null);
}
} else {
var vec__49614 = cljs.core.first.call(null,s__49608__$2);
var i = cljs.core.nth.call(null,vec__49614,(0),null);
var s = cljs.core.nth.call(null,vec__49614,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__49614,i,s,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__49614,i,s,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__49614,i,s,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args){
return (function (p1__49595_SHARP_){
p1__49595_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__49614,i,s,s__49608__$2,temp__4657__auto__,map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__49607.call(null,cljs.core.rest.call(null,s__49608__$2)));
}
} else {
return null;
}
break;
}
});})(map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
,null,null));
});})(map__49605,map__49605__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__49603,map__49603__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
;
return iter__29231__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__49620 = function (var_args){
var p__49602 = null;
if (arguments.length > 0) {
var G__49622__i = 0, G__49622__a = new Array(arguments.length -  0);
while (G__49622__i < G__49622__a.length) {G__49622__a[G__49622__i] = arguments[G__49622__i + 0]; ++G__49622__i;}
  p__49602 = new cljs.core.IndexedSeq(G__49622__a,0,null);
} 
return G__49620__delegate.call(this,p__49602);};
G__49620.cljs$lang$maxFixedArity = 0;
G__49620.cljs$lang$applyTo = (function (arglist__49623){
var p__49602 = cljs.core.seq(arglist__49623);
return G__49620__delegate(p__49602);
});
G__49620.cljs$core$IFn$_invoke$arity$variadic = G__49620__delegate;
return G__49620;
})()
;
;})(map__49600,map__49600__$1,state,c_search,c_input,state_atom,input_text_model,map__49598,map__49598__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq49596){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49596));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__34079__auto___49704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___49704,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___49704,out){
return (function (state_49674){
var state_val_49675 = (state_49674[(1)]);
if((state_val_49675 === (7))){
var inst_49629 = (state_49674[(2)]);
var state_49674__$1 = state_49674;
var statearr_49676_49705 = state_49674__$1;
(statearr_49676_49705[(2)] = inst_49629);

(statearr_49676_49705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (1))){
var inst_49624 = null;
var state_49674__$1 = (function (){var statearr_49677 = state_49674;
(statearr_49677[(7)] = inst_49624);

return statearr_49677;
})();
var statearr_49678_49706 = state_49674__$1;
(statearr_49678_49706[(2)] = null);

(statearr_49678_49706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (4))){
var state_49674__$1 = state_49674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49674__$1,(7),in$);
} else {
if((state_val_49675 === (15))){
var inst_49659 = (state_49674[(2)]);
var state_49674__$1 = (function (){var statearr_49679 = state_49674;
(statearr_49679[(8)] = inst_49659);

return statearr_49679;
})();
var statearr_49680_49707 = state_49674__$1;
(statearr_49680_49707[(2)] = null);

(statearr_49680_49707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (13))){
var inst_49647 = (state_49674[(9)]);
var inst_49661 = cljs.core._EQ_.call(null,inst_49647,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_49674__$1 = state_49674;
if(inst_49661){
var statearr_49681_49708 = state_49674__$1;
(statearr_49681_49708[(1)] = (16));

} else {
var statearr_49682_49709 = state_49674__$1;
(statearr_49682_49709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (6))){
var inst_49633 = (state_49674[(10)]);
var inst_49632 = (state_49674[(2)]);
var inst_49633__$1 = cljs.core.async.timeout.call(null,ms);
var inst_49641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49642 = [in$,inst_49633__$1];
var inst_49643 = (new cljs.core.PersistentVector(null,2,(5),inst_49641,inst_49642,null));
var state_49674__$1 = (function (){var statearr_49683 = state_49674;
(statearr_49683[(10)] = inst_49633__$1);

(statearr_49683[(11)] = inst_49632);

return statearr_49683;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49674__$1,(8),inst_49643);
} else {
if((state_val_49675 === (17))){
var state_49674__$1 = state_49674;
var statearr_49684_49710 = state_49674__$1;
(statearr_49684_49710[(2)] = null);

(statearr_49684_49710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (3))){
var inst_49672 = (state_49674[(2)]);
var state_49674__$1 = state_49674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49674__$1,inst_49672);
} else {
if((state_val_49675 === (12))){
var inst_49632 = (state_49674[(11)]);
var state_49674__$1 = state_49674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49674__$1,(15),out,inst_49632);
} else {
if((state_val_49675 === (2))){
var inst_49624 = (state_49674[(7)]);
var inst_49626 = (inst_49624 == null);
var state_49674__$1 = state_49674;
if(cljs.core.truth_(inst_49626)){
var statearr_49685_49711 = state_49674__$1;
(statearr_49685_49711[(1)] = (4));

} else {
var statearr_49686_49712 = state_49674__$1;
(statearr_49686_49712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (11))){
var inst_49669 = (state_49674[(2)]);
var inst_49624 = inst_49669;
var state_49674__$1 = (function (){var statearr_49687 = state_49674;
(statearr_49687[(7)] = inst_49624);

return statearr_49687;
})();
var statearr_49688_49713 = state_49674__$1;
(statearr_49688_49713[(2)] = null);

(statearr_49688_49713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (9))){
var inst_49645 = (state_49674[(12)]);
var inst_49653 = cljs.core.nth.call(null,inst_49645,(0),null);
var inst_49654 = cljs.core.nth.call(null,inst_49645,(1),null);
var state_49674__$1 = (function (){var statearr_49689 = state_49674;
(statearr_49689[(13)] = inst_49654);

return statearr_49689;
})();
var statearr_49690_49714 = state_49674__$1;
(statearr_49690_49714[(2)] = inst_49653);

(statearr_49690_49714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (5))){
var inst_49624 = (state_49674[(7)]);
var state_49674__$1 = state_49674;
var statearr_49691_49715 = state_49674__$1;
(statearr_49691_49715[(2)] = inst_49624);

(statearr_49691_49715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (14))){
var inst_49667 = (state_49674[(2)]);
var state_49674__$1 = state_49674;
var statearr_49692_49716 = state_49674__$1;
(statearr_49692_49716[(2)] = inst_49667);

(statearr_49692_49716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (16))){
var inst_49646 = (state_49674[(14)]);
var state_49674__$1 = state_49674;
var statearr_49693_49717 = state_49674__$1;
(statearr_49693_49717[(2)] = inst_49646);

(statearr_49693_49717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (10))){
var inst_49647 = (state_49674[(9)]);
var inst_49633 = (state_49674[(10)]);
var inst_49656 = cljs.core._EQ_.call(null,inst_49647,inst_49633);
var state_49674__$1 = state_49674;
if(inst_49656){
var statearr_49694_49718 = state_49674__$1;
(statearr_49694_49718[(1)] = (12));

} else {
var statearr_49695_49719 = state_49674__$1;
(statearr_49695_49719[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (18))){
var inst_49665 = (state_49674[(2)]);
var state_49674__$1 = state_49674;
var statearr_49696_49720 = state_49674__$1;
(statearr_49696_49720[(2)] = inst_49665);

(statearr_49696_49720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49675 === (8))){
var inst_49645 = (state_49674[(12)]);
var inst_49647 = (state_49674[(9)]);
var inst_49645__$1 = (state_49674[(2)]);
var inst_49646 = cljs.core.nth.call(null,inst_49645__$1,(0),null);
var inst_49647__$1 = cljs.core.nth.call(null,inst_49645__$1,(1),null);
var inst_49648 = cljs.core._EQ_.call(null,inst_49647__$1,in$);
var state_49674__$1 = (function (){var statearr_49697 = state_49674;
(statearr_49697[(12)] = inst_49645__$1);

(statearr_49697[(9)] = inst_49647__$1);

(statearr_49697[(14)] = inst_49646);

return statearr_49697;
})();
if(inst_49648){
var statearr_49698_49721 = state_49674__$1;
(statearr_49698_49721[(1)] = (9));

} else {
var statearr_49699_49722 = state_49674__$1;
(statearr_49699_49722[(1)] = (10));

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
});})(c__34079__auto___49704,out))
;
return ((function (switch__33991__auto__,c__34079__auto___49704,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__33992__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__33992__auto____0 = (function (){
var statearr_49700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49700[(0)] = re_com$typeahead$debounce_$_state_machine__33992__auto__);

(statearr_49700[(1)] = (1));

return statearr_49700;
});
var re_com$typeahead$debounce_$_state_machine__33992__auto____1 = (function (state_49674){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49701){if((e49701 instanceof Object)){
var ex__33995__auto__ = e49701;
var statearr_49702_49723 = state_49674;
(statearr_49702_49723[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49724 = state_49674;
state_49674 = G__49724;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__33992__auto__ = function(state_49674){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__33992__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__33992__auto____1.call(this,state_49674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__33992__auto____0;
re_com$typeahead$debounce_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__33992__auto____1;
return re_com$typeahead$debounce_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___49704,out))
})();
var state__34081__auto__ = (function (){var statearr_49703 = f__34080__auto__.call(null);
(statearr_49703[(6)] = c__34079__auto___49704);

return statearr_49703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___49704,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1518440300487
