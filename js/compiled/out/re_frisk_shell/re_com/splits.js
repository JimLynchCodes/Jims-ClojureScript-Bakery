// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frisk_shell.re_com.splits');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizonal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_frisk_shell.re_com.splits.drag_handle = (function re_frisk_shell$re_com$splits$drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('');
var flex_flow = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((vertical_QMARK_)?"row":"column"))," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_flow_style.call(null,flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null)], null);
});
/**
 * Returns markup for a horizontal layout component
 */
re_frisk_shell.re_com.splits.h_split = (function re_frisk_shell$re_com$splits$h_split(var_args){
var args__29599__auto__ = [];
var len__29592__auto___50551 = arguments.length;
var i__29593__auto___50552 = (0);
while(true){
if((i__29593__auto___50552 < len__29592__auto___50551)){
args__29599__auto__.push((arguments[i__29593__auto___50552]));

var G__50553 = (i__29593__auto___50552 + (1));
i__29593__auto___50552 = G__50553;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return re_frisk_shell.re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

re_frisk_shell.re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__50545){
var map__50546 = p__50545;
var map__50546__$1 = ((((!((map__50546 == null)))?((((map__50546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50546):map__50546);
var args = map__50546__$1;
var size = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.call(null,"h-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (mouse_x){
var container = document.getElementById(container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientX));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
], null):null),attr);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document){
return (function() { 
var G__50554__delegate = function (p__50548){
var map__50549 = p__50548;
var map__50549__$1 = ((((!((map__50549 == null)))?((((map__50549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50549):map__50549);
var _splitter_size = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__50549__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
};
var G__50554 = function (var_args){
var p__50548 = null;
if (arguments.length > 0) {
var G__50555__i = 0, G__50555__a = new Array(arguments.length -  0);
while (G__50555__i < G__50555__a.length) {G__50555__a[G__50555__i] = arguments[G__50555__i + 0]; ++G__50555__i;}
  p__50548 = new cljs.core.IndexedSeq(G__50555__a,0,null);
} 
return G__50554__delegate.call(this,p__50548);};
G__50554.cljs$lang$maxFixedArity = 0;
G__50554.cljs$lang$applyTo = (function (arglist__50556){
var p__50548 = cljs.core.seq(arglist__50556);
return G__50554__delegate(p__50548);
});
G__50554.cljs$core$IFn$_invoke$arity$variadic = G__50554__delegate;
return G__50554;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__50546,map__50546__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document))
});

re_frisk_shell.re_com.splits.h_split.cljs$lang$maxFixedArity = (0);

re_frisk_shell.re_com.splits.h_split.cljs$lang$applyTo = (function (seq50544){
return re_frisk_shell.re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50544));
});

/**
 * Returns markup for a vertical layout component
 */
re_frisk_shell.re_com.splits.v_split = (function re_frisk_shell$re_com$splits$v_split(var_args){
var args__29599__auto__ = [];
var len__29592__auto___50564 = arguments.length;
var i__29593__auto___50565 = (0);
while(true){
if((i__29593__auto___50565 < len__29592__auto___50564)){
args__29599__auto__.push((arguments[i__29593__auto___50565]));

var G__50566 = (i__29593__auto___50565 + (1));
i__29593__auto___50565 = G__50566;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return re_frisk_shell.re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

re_frisk_shell.re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__50558){
var map__50559 = p__50558;
var map__50559__$1 = ((((!((map__50559 == null)))?((((map__50559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50559):map__50559);
var args = map__50559__$1;
var size = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var open_bottom_split_QMARK_ = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965));
var container_id = cljs.core.gensym.call(null,"v-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (mouse_y){
var container = document.getElementById(container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientY));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
], null):null),attr);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_){
return (function() { 
var G__50567__delegate = function (p__50561){
var map__50562 = p__50561;
var map__50562__$1 = ((((!((map__50562 == null)))?((((map__50562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50562):map__50562);
var _splitter_size = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__50562__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var perc = (cljs.core.truth_((function (){var and__28411__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,split_perc),parseInt(initial_split));
if(and__28411__auto__){
var and__28411__auto____$1 = open_bottom_split_QMARK_;
if(cljs.core.truth_(and__28411__auto____$1)){
return cljs.core.deref.call(null,open_bottom_split_QMARK_);
} else {
return and__28411__auto____$1;
}
} else {
return and__28411__auto__;
}
})())?"70":cljs.core.deref.call(null,split_perc));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-top",cljs.core.deref.call(null,dragging_QMARK_),perc),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - perc)),panel_2], null)], null);
};
var G__50567 = function (var_args){
var p__50561 = null;
if (arguments.length > 0) {
var G__50568__i = 0, G__50568__a = new Array(arguments.length -  0);
while (G__50568__i < G__50568__a.length) {G__50568__a[G__50568__i] = arguments[G__50568__i + 0]; ++G__50568__i;}
  p__50561 = new cljs.core.IndexedSeq(G__50568__a,0,null);
} 
return G__50567__delegate.call(this,p__50561);};
G__50567.cljs$lang$maxFixedArity = 0;
G__50567.cljs$lang$applyTo = (function (arglist__50569){
var p__50561 = cljs.core.seq(arglist__50569);
return G__50567__delegate(p__50561);
});
G__50567.cljs$core$IFn$_invoke$arity$variadic = G__50567__delegate;
return G__50567;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__50559,map__50559__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin,document,open_bottom_split_QMARK_))
});

re_frisk_shell.re_com.splits.v_split.cljs$lang$maxFixedArity = (0);

re_frisk_shell.re_com.splits.v_split.cljs$lang$applyTo = (function (seq50557){
return re_frisk_shell.re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50557));
});


//# sourceMappingURL=splits.js.map?rel=1518440305275
