// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('mranderson047.reagent.v0v7v0.reagent.core');
day8.re_frame.trace.view.components.search_input = (function day8$re_frame$trace$view$components$search_input(p__45616){
var map__45617 = p__45616;
var map__45617__$1 = ((((!((map__45617 == null)))?((((map__45617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45617):map__45617);
var title = cljs.core.get.call(null,map__45617__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__45617__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__45617__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__45617__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.call(null,map__45617__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,title);
var save = ((function (val,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if((cljs.core.count.call(null,v) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});})(val,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))))?(25):cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__45614_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__45614_SHARP_.target.value);

return on_change.call(null,p1__45614_SHARP_);
});})(val,save,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__45615_SHARP_){
var G__45619 = p1__45615_SHARP_.which;
switch (G__45619) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__45617,map__45617__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame.trace.view.components.scroll_BANG_ = (function day8$re_frame$trace$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame.trace.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame$trace$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame.trace.view.components.autoscroll_list = (function day8$re_frame$trace$view$components$autoscroll_list(p__45621,child){
var map__45622 = p__45621;
var map__45622__$1 = ((((!((map__45622 == null)))?((((map__45622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45622):map__45622);
var class$ = cljs.core.get.call(null,map__45622__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.call(null,map__45622__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,null);
var should_scroll = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,true);
return mranderson047.reagent.v0v7v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame.trace.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(0));
});})(node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_.call(null,should_scroll,day8.re_frame.trace.view.components.scrolled_to_end_QMARK_.call(null,cljs.core.deref.call(null,node),(100)));
});})(node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__28411__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.deref.call(null,should_scroll);
} else {
return and__28411__auto__;
}
})())){
return day8.re_frame.trace.view.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(500));
} else {
return null;
}
});})(node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_){
return (function (p__45624,child__$1){
var map__45625 = p__45624;
var map__45625__$1 = ((((!((map__45625 == null)))?((((map__45625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45625):map__45625);
var class$__$1 = cljs.core.get.call(null,map__45625__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__45625,map__45625__$1,class$__$1,node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_.call(null,node,dom_node);
});})(map__45625,map__45625__$1,class$__$1,node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__45622,map__45622__$1,class$,scroll_QMARK_))
], null));
});
day8.re_frame.trace.view.components.string__GT_css = (function day8$re_frame$trace$view$components$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__45628){
var vec__45629 = p__45628;
var property = cljs.core.nth.call(null,vec__45629,(0),null);
var value = cljs.core.nth.call(null,vec__45629,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__45627_SHARP_){
return clojure.string.split.call(null,p1__45627_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame.trace.view.components.default_cljs_devtools_prefs = cljs.core.deref.call(null,devtools.prefs.default_config);
day8.re_frame.trace.view.components.reset_wrapping = (function day8$re_frame$trace$view$components$reset_wrapping(css_string){
return clojure.string.replace.call(null,css_string,/white-space:nowrap;/,"");
});
day8.re_frame.trace.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame.trace.view.components.effective_cljs_devtools_prefs = cljs.core.merge.call(null,day8.re_frame.trace.view.components.default_cljs_devtools_prefs,day8.re_frame.trace.view.components.customized_cljs_devtools_prefs);
day8.re_frame.trace.view.components.make_devtools_api_call = (function day8$re_frame$trace$view$components$make_devtools_api_call(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45634 = arguments.length;
var i__29593__auto___45635 = (0);
while(true){
if((i__29593__auto___45635 < len__29592__auto___45634)){
args__29599__auto__.push((arguments[i__29593__auto___45635]));

var G__45636 = (i__29593__auto___45635 + (1));
i__29593__auto___45635 = G__45636;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

day8.re_frame.trace.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__45605__auto__ = devtools.prefs.get_prefs.call(null);
var prefs__45606__auto__ = day8.re_frame.trace.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_.call(null,prefs__45606__auto__);

return cljs.core.apply.call(null,api_fn,args);
}finally {if(cljs.core._EQ_.call(null,devtools.prefs.get_prefs.call(null),prefs__45606__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__45606__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_.call(null,previous_config__45605__auto__);
}});

day8.re_frame.trace.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

day8.re_frame.trace.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq45632){
var G__45633 = cljs.core.first.call(null,seq45632);
var seq45632__$1 = cljs.core.next.call(null,seq45632);
return day8.re_frame.trace.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic(G__45633,seq45632__$1);
});

day8.re_frame.trace.view.components.cljs_devtools_header = (function day8$re_frame$trace$view$components$cljs_devtools_header(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45638 = arguments.length;
var i__29593__auto___45639 = (0);
while(true){
if((i__29593__auto___45639 < len__29592__auto___45638)){
args__29599__auto__.push((arguments[i__29593__auto___45639]));

var G__45640 = (i__29593__auto___45639 + (1));
i__29593__auto___45639 = G__45640;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame.trace.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq45637){
return day8.re_frame.trace.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45637));
});

day8.re_frame.trace.view.components.cljs_devtools_body = (function day8$re_frame$trace$view$components$cljs_devtools_body(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45642 = arguments.length;
var i__29593__auto___45643 = (0);
while(true){
if((i__29593__auto___45643 < len__29592__auto___45642)){
args__29599__auto__.push((arguments[i__29593__auto___45643]));

var G__45644 = (i__29593__auto___45643 + (1));
i__29593__auto___45643 = G__45644;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

day8.re_frame.trace.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame.trace.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq45641){
return day8.re_frame.trace.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45641));
});

day8.re_frame.trace.view.components.cljs_devtools_has_body = (function day8$re_frame$trace$view$components$cljs_devtools_has_body(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45646 = arguments.length;
var i__29593__auto___45647 = (0);
while(true){
if((i__29593__auto___45647 < len__29592__auto___45646)){
args__29599__auto__.push((arguments[i__29593__auto___45647]));

var G__45648 = (i__29593__auto___45647 + (1));
i__29593__auto___45647 = G__45648;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq45645){
return day8.re_frame.trace.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45645));
});

day8.re_frame.trace.view.components.get_object = (function day8$re_frame$trace$view$components$get_object(jsonml){
return cljs.core.get.call(null,jsonml,(1)).object;
});
day8.re_frame.trace.view.components.get_config = (function day8$re_frame$trace$view$components$get_config(jsonml){
return cljs.core.get.call(null,jsonml,(1)).config;
});
day8.re_frame.trace.view.components.data_structure = (function day8$re_frame$trace$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-trace--object",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?" expanded":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__28411__auto__)){
return day8.re_frame.trace.view.components.cljs_devtools_has_body.call(null,day8.re_frame.trace.view.components.get_object.call(null,jsonml__$1),day8.re_frame.trace.view.components.get_config.call(null,jsonml__$1));
} else {
return and__28411__auto__;
}
})())?day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,day8.re_frame.trace.view.components.cljs_devtools_body.call(null,day8.re_frame.trace.view.components.get_object.call(null,jsonml__$1),day8.re_frame.trace.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"body","body",-2049205669))):day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,day8.re_frame.trace.view.components.cljs_devtools_header.call(null,day8.re_frame.trace.view.components.get_object.call(null,jsonml__$1),day8.re_frame.trace.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"header","header",119441134))))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame.trace.view.components.jsonml__GT_hiccup = (function day8$re_frame$trace$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__45649 = jsonml;
var seq__45650 = cljs.core.seq.call(null,vec__45649);
var first__45651 = cljs.core.first.call(null,seq__45650);
var seq__45650__$1 = cljs.core.next.call(null,seq__45650);
var tag_name = first__45651;
var first__45651__$1 = cljs.core.first.call(null,seq__45650__$1);
var seq__45650__$2 = cljs.core.next.call(null,seq__45650__$1);
var attributes = first__45651__$1;
var children = seq__45650__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,tag_name)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.view.components.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,attributes),"style"))], null)], null),cljs.core.map_indexed.call(null,((function (vec__45649,seq__45650,first__45651,seq__45650__$1,tag_name,first__45651__$1,seq__45650__$2,attributes,children,tagnames){
return (function (i,child){
return day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,child,cljs.core.conj.call(null,path,i));
});})(vec__45649,seq__45650,first__45651,seq__45650__$1,tag_name,first__45651__$1,seq__45650__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.call(null,tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame.trace.view.components.subtree = (function day8$re_frame$trace$view$components$subtree(data,title,path){
var expanded_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__28423__auto__ = title;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__28411__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null));
} else {
return and__28411__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,day8.re_frame.trace.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame.trace.view.components.subscription_render = (function day8$re_frame$trace$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__28423__auto__ = title;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__28411__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null));
} else {
return and__28411__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,day8.re_frame.trace.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame.trace.view.components.simple_render = (function day8$re_frame$trace$view$components$simple_render(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45659 = arguments.length;
var i__29593__auto___45660 = (0);
while(true){
if((i__29593__auto___45660 < len__29592__auto___45659)){
args__29599__auto__.push((arguments[i__29593__auto___45660]));

var G__45661 = (i__29593__auto___45660 + (1));
i__29593__auto___45660 = G__45661;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((2) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((2)),(0),null)):null);
return day8.re_frame.trace.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29600__auto__);
});

day8.re_frame.trace.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__45655){
var vec__45656 = p__45655;
var class$ = cljs.core.nth.call(null,vec__45656,(0),null);
var expanded_QMARK_ = mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_,vec__45656,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-trace--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__28411__auto__)){
return (typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null));
} else {
return and__28411__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame.trace.view.components.jsonml__GT_hiccup.call(null,day8.re_frame.trace.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__45656,class$))
});

day8.re_frame.trace.view.components.simple_render.cljs$lang$maxFixedArity = (2);

day8.re_frame.trace.view.components.simple_render.cljs$lang$applyTo = (function (seq45652){
var G__45653 = cljs.core.first.call(null,seq45652);
var seq45652__$1 = cljs.core.next.call(null,seq45652);
var G__45654 = cljs.core.first.call(null,seq45652__$1);
var seq45652__$2 = cljs.core.next.call(null,seq45652__$1);
return day8.re_frame.trace.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic(G__45653,G__45654,seq45652__$2);
});

day8.re_frame.trace.view.components.tag = (function day8$re_frame$trace$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});

//# sourceMappingURL=components.js.map?rel=1518582112933
