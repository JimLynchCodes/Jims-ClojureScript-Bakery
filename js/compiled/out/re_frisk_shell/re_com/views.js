// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frisk_shell.re_com.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frisk_shell.re_com.ui');
goog.require('re_frisk_shell.re_com.vendors');
goog.require('re_com.core');
goog.require('re_frisk_shell.re_com.splits');
goog.require('clojure.string');
goog.require('re_frisk_shell.frisk');
re_frisk_shell.re_com.views.event_list_item = (function re_frisk_shell$re_com$views$event_list_item(){
return (function (item,checkbox_val,deb_data){
var clrs = new cljs.core.Keyword(null,"evnt-colors","evnt-colors",582185154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data));
var event = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item)))].join('');
var trace_QMARK_ = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(item));
var completed_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
var selected_QMARK_ = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.Keyword(null,"indx","indx",1571035590)], null)),new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item));
var namespace = clojure.string.split.call(null,clojure.string.replace.call(null,event,/:/,""),/\//);
var splited_label = clojure.string.split.call(null,cljs.core.first.call(null,namespace),/\./);
var clr = cljs.core.get.call(null,clrs,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(5)], null),(cljs.core.truth_(clr)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clr)].join('')], null):null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),["list-group-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(((trace_QMARK_) && (!(completed_QMARK_)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"red","red",-969428204)], null):null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clrs,event,trace_QMARK_,completed_QMARK_,selected_QMARK_,namespace,splited_label,clr){
return (function (){
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),item);
});})(clrs,event,trace_QMARK_,completed_QMARK_,selected_QMARK_,namespace,splited_label,clr))
], null),(((trace_QMARK_) && (completed_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)))," ms "].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_((function (){var and__28411__auto__ = cljs.core.deref.call(null,checkbox_val);
if(cljs.core.truth_(and__28411__auto__)){
return (cljs.core.count.call(null,namespace) > (1));
} else {
return and__28411__auto__;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.mapv.call(null,cljs.core.first,splited_label))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,namespace))].join(''):event)], null)], null)], null)], null)], null);
});
});
re_frisk_shell.re_com.views.filter_event = (function re_frisk_shell$re_com$views$filter_event(text){
return (function (item){
var name = clojure.string.lower_case.call(null,cljs.core.name.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item))));
var text__$1 = clojure.string.lower_case.call(null,text);
return cljs.core.not_EQ_.call(null,clojure.string.index_of.call(null,name,text__$1),null);
});
});
re_frisk_shell.re_com.views.events_scroller = (function re_frisk_shell$re_com$views$events_scroller(filtered_events,checkbox_val,deb_data){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"debugger-messages",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var n = reagent.core.dom_node.call(null,this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)))){
return n.scrollTop = n.scrollHeight;
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.scroller,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (p1__50566_SHARP_){
var t = p1__50566_SHARP_.target;
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134),cljs.core._EQ_.call(null,(t.scrollHeight - t.offsetHeight),t.scrollTop));
})], null),(function (){var iter__29231__auto__ = (function re_frisk_shell$re_com$views$events_scroller_$_iter__50567(s__50568){
return (new cljs.core.LazySeq(null,(function (){
var s__50568__$1 = s__50568;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50568__$1);
if(temp__4657__auto__){
var s__50568__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50568__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__50568__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__50570 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__50569 = (0);
while(true){
if((i__50569 < size__29230__auto__)){
var item = cljs.core._nth.call(null,c__29229__auto__,i__50569);
cljs.core.chunk_append.call(null,b__50570,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.event_list_item,item,checkbox_val,deb_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__50571 = (i__50569 + (1));
i__50569 = G__50571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50570),re_frisk_shell$re_com$views$events_scroller_$_iter__50567.call(null,cljs.core.chunk_rest.call(null,s__50568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50570),null);
}
} else {
var item = cljs.core.first.call(null,s__50568__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.event_list_item,item,checkbox_val,deb_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),re_frisk_shell$re_com$views$events_scroller_$_iter__50567.call(null,cljs.core.rest.call(null,s__50568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29231__auto__.call(null,cljs.core.deref.call(null,filtered_events));
})()], null);
})], null));
});
re_frisk_shell.re_com.views.events_view = (function re_frisk_shell$re_com$views$events_view(re_frame_events,deb_data,imp_hndl,exp_hndl){
var checkbox_val = reagent.core.atom.call(null,true);
var checkbox_sort_val = reagent.core.atom.call(null,false);
var trace_QMARK_ = reagent.ratom.make_reaction.call(null,((function (checkbox_val,checkbox_sort_val){
return (function (){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,re_frame_events))));
});})(checkbox_val,checkbox_sort_val))
);
var text_val = reagent.core.atom.call(null,"");
var sorted_events = reagent.ratom.make_reaction.call(null,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,checkbox_sort_val))){
return cljs.core.sort_by.call(null,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val){
return (function (p1__50572_SHARP_){
return cljs.core.get_in.call(null,p1__50572_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val))
,cljs.core._GT_,cljs.core.deref.call(null,re_frame_events));
} else {
return cljs.core.deref.call(null,re_frame_events);
}
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val))
);
var filtered_events = reagent.ratom.make_reaction.call(null,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,text_val),"")){
return cljs.core.deref.call(null,sorted_events);
} else {
return cljs.core.filter.call(null,re_frisk_shell.re_com.views.filter_event.call(null,cljs.core.deref.call(null,text_val)),cljs.core.deref.call(null,sorted_events));
}
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events))
);
return ((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter events",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (p1__50573_SHARP_){
return cljs.core.reset_BANG_.call(null,text_val,p1__50573_SHARP_);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (){
return cljs.core.reset_BANG_.call(null,text_val,"");
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
], null),"X"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (p1__50574_SHARP_){
return cljs.core.reset_BANG_.call(null,checkbox_val,p1__50574_SHARP_);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
,new cljs.core.Keyword(null,"label","label",1718410804),"truncate"], null),(cljs.core.truth_(cljs.core.deref.call(null,trace_QMARK_))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_sort_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (p1__50575_SHARP_){
return cljs.core.reset_BANG_.call(null,checkbox_sort_val,p1__50575_SHARP_);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
,new cljs.core.Keyword(null,"label","label",1718410804),"sort by performance"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.events_scroller,filtered_events,checkbox_val,deb_data], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(3)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(imp_hndl)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),imp_hndl], null),"import"], null):null),(cljs.core.truth_(imp_hndl)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),exp_hndl], null),"export"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (){
cljs.core.reset_BANG_.call(null,re_frame_events,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.dissoc,new cljs.core.Keyword(null,"event-data","event-data",-1726012139));
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
], null),"clear"], null)], null)], null)], null)], null);
});
;})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
});
re_frisk_shell.re_com.views.event_bar = (function re_frisk_shell$re_com$views$event_bar(deb_data){
var evnt_key = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.Keyword(null,"event","event",301435442)], null)));
}));
var clr = reagent.ratom.make_reaction.call(null,((function (evnt_key){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))){
return cljs.core.deref.call(null,evnt_key).call(null,new cljs.core.Keyword(null,"evnt-colors","evnt-colors",582185154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,deb_data)));
} else {
return "";
}
});})(evnt_key))
);
return ((function (evnt_key,clr){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Event",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,evnt_key),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"000000",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,clr),new cljs.core.Keyword(null,"max-length","max-length",-254826109),"6",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (evnt_key,clr){
return (function (p1__50576_SHARP_){
return cljs.core.swap_BANG_.call(null,deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evnt-colors","evnt-colors",582185154),cljs.core.deref.call(null,evnt_key)], null),p1__50576_SHARP_.target.value);
});})(evnt_key,clr))
], null)], null):null)], null)], null);
});
;})(evnt_key,clr))
});
re_frisk_shell.re_com.views.main_view = (function re_frisk_shell$re_com$views$main_view(re_frame_data,deb_data,doc){
var checkbox_sorted_val = reagent.core.atom.call(null,true);
var open_event_split_QMARK_ = reagent.ratom.make_reaction.call(null,((function (checkbox_sorted_val){
return (function (){
return cljs.core.boolean$.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.Keyword(null,"event","event",301435442)], null)));
});})(checkbox_sorted_val))
);
return ((function (checkbox_sorted_val,open_event_split_QMARK_){
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Active subscriptions"], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.v_split,new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"0",new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.handler_frisk,re_frame_data], null)], null)], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.v_split,new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"100",new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965),open_event_split_QMARK_,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checkbox_sorted_val,open_event_split_QMARK_){
return (function (val){
cljs.core.reset_BANG_.call(null,checkbox_sorted_val,val);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame_data)),cljs.core.assoc,new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647),true);

return setTimeout(((function (checkbox_sorted_val,open_event_split_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame_data)),cljs.core.dissoc,new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647));
});})(checkbox_sorted_val,open_event_split_QMARK_))
,(100));
});})(checkbox_sorted_val,open_event_split_QMARK_))
,new cljs.core.Keyword(null,"label","label",1718410804),"sorted"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.main_frisk,re_frame_data,checkbox_sorted_val], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.event_bar,deb_data], null)], null)], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.event_frisk,deb_data], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.vendors.star], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(checkbox_sorted_val,open_event_split_QMARK_))
});
re_frisk_shell.re_com.views.main = (function re_frisk_shell$re_com$views$main(var_args){
var args__29599__auto__ = [];
var len__29592__auto___50585 = arguments.length;
var i__29593__auto___50586 = (0);
while(true){
if((i__29593__auto___50586 < len__29592__auto___50585)){
args__29599__auto__.push((arguments[i__29593__auto___50586]));

var G__50587 = (i__29593__auto___50586 + (1));
i__29593__auto___50586 = G__50587;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return re_frisk_shell.re_com.views.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

re_frisk_shell.re_com.views.main.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,re_frame_events,deb_data,p__50581){
var vec__50582 = p__50581;
var doc = cljs.core.nth.call(null,vec__50582,(0),null);
var imp_hndl = cljs.core.nth.call(null,vec__50582,(1),null);
var exp_hndl = cljs.core.nth.call(null,vec__50582,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.h_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"20",new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.events_view,re_frame_events,deb_data,imp_hndl,exp_hndl], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.main_view,re_frame_data,deb_data,doc], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc], null)], null)], null);
});

re_frisk_shell.re_com.views.main.cljs$lang$maxFixedArity = (3);

re_frisk_shell.re_com.views.main.cljs$lang$applyTo = (function (seq50577){
var G__50578 = cljs.core.first.call(null,seq50577);
var seq50577__$1 = cljs.core.next.call(null,seq50577);
var G__50579 = cljs.core.first.call(null,seq50577__$1);
var seq50577__$2 = cljs.core.next.call(null,seq50577__$1);
var G__50580 = cljs.core.first.call(null,seq50577__$2);
var seq50577__$3 = cljs.core.next.call(null,seq50577__$2);
return re_frisk_shell.re_com.views.main.cljs$core$IFn$_invoke$arity$variadic(G__50578,G__50579,G__50580,seq50577__$3);
});


//# sourceMappingURL=views.js.map?rel=1518582134309
