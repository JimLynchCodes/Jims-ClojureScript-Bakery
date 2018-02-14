// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.view.timing');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('day8.re_frame.trace.common_styles');
goog.require('day8.re_frame.trace.view.components');
day8.re_frame.trace.view.timing.timing_styles = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-trace--","#--re-frame-trace--",1281525766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timing-details",".timing-details",-1912013482),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame.trace.common_styles.white_background_color,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),day8.re_frame.trace.common_styles.gs_31s,new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame.trace.common_styles.gs_19], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".timing-details--line",".timing-details--line",-1160642396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1em 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"26em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, ["-webkit-padding-start","20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 1em 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".rft-tag__timing",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame.trace.common_styles.disabled_background_color,new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.common_styles.border_line_color)].join(''),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".timing-part-panel",cljs.core.merge.call(null,day8.re_frame.trace.common_styles.panel_style.call(null,"3px"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame.trace.common_styles.gs_7s], null))], null)], null);
day8.re_frame.trace.view.timing.timing_tag = (function day8$re_frame$trace$view$timing$timing_tag(label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.tag,"rft-tag__timing",label], null);
});
day8.re_frame.trace.view.timing.timing_section = (function day8$re_frame$trace$view$timing$timing_section(label,time){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"3px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-textbox-label",new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.timing.timing_tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),"ms"].join('')], null)], null)], null);
});
day8.re_frame.trace.view.timing.render = (function day8$re_frame$trace$view$timing$render(){
var timing_data_available_QMARK_ = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662)], null)));
if(cljs.core.truth_(timing_data_available_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-details",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame.trace.common_styles.gs_12s,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-part-panel",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.timing.timing_section,"total",cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.timing.timing_section,"event",cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297)], null)))], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__29231__auto__ = ((function (timing_data_available_QMARK_){
return (function day8$re_frame$trace$view$timing$render_$_iter__45664(s__45665){
return (new cljs.core.LazySeq(null,((function (timing_data_available_QMARK_){
return (function (){
var s__45665__$1 = s__45665;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45665__$1);
if(temp__4657__auto__){
var s__45665__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45665__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__45665__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__45667 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__45666 = (0);
while(true){
if((i__45666 < size__29230__auto__)){
var frame = cljs.core._nth.call(null,c__29229__auto__,i__45666);
var frame_time = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593),frame], null));
cljs.core.chunk_append.call(null,b__45667,(function (){var x__29285__auto__ = cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"timing-part-panel",new cljs.core.Keyword(null,"gap","gap",80255254),"25px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Animation frame #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.timing.timing_section,"total",cljs.core.deref.call(null,frame_time)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["af",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)].join('')], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})());

var G__45668 = (i__45666 + (1));
i__45666 = G__45668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45667),day8$re_frame$trace$view$timing$render_$_iter__45664.call(null,cljs.core.chunk_rest.call(null,s__45665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45667),null);
}
} else {
var frame = cljs.core.first.call(null,s__45665__$2);
var frame_time = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593),frame], null));
return cljs.core.cons.call(null,(function (){var x__29285__auto__ = cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),"timing-part-panel",new cljs.core.Keyword(null,"gap","gap",80255254),"25px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Animation frame #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.timing.timing_section,"total",cljs.core.deref.call(null,frame_time)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["af",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame)].join('')], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})(),day8$re_frame$trace$view$timing$render_$_iter__45664.call(null,cljs.core.rest.call(null,s__45665__$2)));
}
} else {
return null;
}
break;
}
});})(timing_data_available_QMARK_))
,null,null));
});})(timing_data_available_QMARK_))
;
return iter__29231__auto__.call(null,cljs.core.range.call(null,(1),(cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152)], null))) + (1))));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.line,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-details--line"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.p,"Be careful. There are two problems with these numbers:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Accurately timing anything in the browser is a nightmare. One moment a given function takes 1ms and the next it takes 10ms, and you'll never know why. So bouncy."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"You're currently running the dev build, not the production build. So don't freak out too much. Yet."], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Timing documentation",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame.trace.common_styles.gs_7s], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Day8/re-frame-trace/blob/master/docs/HyperlinkedInformation/UnderstandingTiming.md"], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"timing-details",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"No timing data available currently."], null)], null)], null);
}
});

//# sourceMappingURL=timing.js.map?rel=1518582113008
