// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38959){if((e38959 instanceof Error)){
var e = e38959;
return "Error: Unable to stringify";
} else {
throw e38959;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38962 = arguments.length;
switch (G__38962) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38960_SHARP_){
if(typeof p1__38960_SHARP_ === 'string'){
return p1__38960_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38960_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29599__auto__ = [];
var len__29592__auto___38965 = arguments.length;
var i__29593__auto___38966 = (0);
while(true){
if((i__29593__auto___38966 < len__29592__auto___38965)){
args__29599__auto__.push((arguments[i__29593__auto___38966]));

var G__38967 = (i__29593__auto___38966 + (1));
i__29593__auto___38966 = G__38967;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38964){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38964));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29599__auto__ = [];
var len__29592__auto___38969 = arguments.length;
var i__29593__auto___38970 = (0);
while(true){
if((i__29593__auto___38970 < len__29592__auto___38969)){
args__29599__auto__.push((arguments[i__29593__auto___38970]));

var G__38971 = (i__29593__auto___38970 + (1));
i__29593__auto___38970 = G__38971;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38968){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38968));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38972){
var map__38973 = p__38972;
var map__38973__$1 = ((((!((map__38973 == null)))?((((map__38973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38973):map__38973);
var message = cljs.core.get.call(null,map__38973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38973__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28423__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28411__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28411__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28411__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34079__auto___39052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___39052,ch){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___39052,ch){
return (function (state_39024){
var state_val_39025 = (state_39024[(1)]);
if((state_val_39025 === (7))){
var inst_39020 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39026_39053 = state_39024__$1;
(statearr_39026_39053[(2)] = inst_39020);

(statearr_39026_39053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (1))){
var state_39024__$1 = state_39024;
var statearr_39027_39054 = state_39024__$1;
(statearr_39027_39054[(2)] = null);

(statearr_39027_39054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (4))){
var inst_38977 = (state_39024[(7)]);
var inst_38977__$1 = (state_39024[(2)]);
var state_39024__$1 = (function (){var statearr_39028 = state_39024;
(statearr_39028[(7)] = inst_38977__$1);

return statearr_39028;
})();
if(cljs.core.truth_(inst_38977__$1)){
var statearr_39029_39055 = state_39024__$1;
(statearr_39029_39055[(1)] = (5));

} else {
var statearr_39030_39056 = state_39024__$1;
(statearr_39030_39056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (15))){
var inst_38984 = (state_39024[(8)]);
var inst_38999 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38984);
var inst_39000 = cljs.core.first.call(null,inst_38999);
var inst_39001 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39000);
var inst_39002 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39001)].join('');
var inst_39003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39002);
var state_39024__$1 = state_39024;
var statearr_39031_39057 = state_39024__$1;
(statearr_39031_39057[(2)] = inst_39003);

(statearr_39031_39057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (13))){
var inst_39008 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39032_39058 = state_39024__$1;
(statearr_39032_39058[(2)] = inst_39008);

(statearr_39032_39058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (6))){
var state_39024__$1 = state_39024;
var statearr_39033_39059 = state_39024__$1;
(statearr_39033_39059[(2)] = null);

(statearr_39033_39059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (17))){
var inst_39006 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39034_39060 = state_39024__$1;
(statearr_39034_39060[(2)] = inst_39006);

(statearr_39034_39060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (3))){
var inst_39022 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39024__$1,inst_39022);
} else {
if((state_val_39025 === (12))){
var inst_38983 = (state_39024[(9)]);
var inst_38997 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38983,opts);
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_38997)){
var statearr_39035_39061 = state_39024__$1;
(statearr_39035_39061[(1)] = (15));

} else {
var statearr_39036_39062 = state_39024__$1;
(statearr_39036_39062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (2))){
var state_39024__$1 = state_39024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39024__$1,(4),ch);
} else {
if((state_val_39025 === (11))){
var inst_38984 = (state_39024[(8)]);
var inst_38989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38990 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38984);
var inst_38991 = cljs.core.async.timeout.call(null,(1000));
var inst_38992 = [inst_38990,inst_38991];
var inst_38993 = (new cljs.core.PersistentVector(null,2,(5),inst_38989,inst_38992,null));
var state_39024__$1 = state_39024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39024__$1,(14),inst_38993);
} else {
if((state_val_39025 === (9))){
var inst_38984 = (state_39024[(8)]);
var inst_39010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39011 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38984);
var inst_39012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39011);
var inst_39013 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39012)].join('');
var inst_39014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39013);
var state_39024__$1 = (function (){var statearr_39037 = state_39024;
(statearr_39037[(10)] = inst_39010);

return statearr_39037;
})();
var statearr_39038_39063 = state_39024__$1;
(statearr_39038_39063[(2)] = inst_39014);

(statearr_39038_39063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (5))){
var inst_38977 = (state_39024[(7)]);
var inst_38979 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38980 = (new cljs.core.PersistentArrayMap(null,2,inst_38979,null));
var inst_38981 = (new cljs.core.PersistentHashSet(null,inst_38980,null));
var inst_38982 = figwheel.client.focus_msgs.call(null,inst_38981,inst_38977);
var inst_38983 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38982);
var inst_38984 = cljs.core.first.call(null,inst_38982);
var inst_38985 = figwheel.client.autoload_QMARK_.call(null);
var state_39024__$1 = (function (){var statearr_39039 = state_39024;
(statearr_39039[(9)] = inst_38983);

(statearr_39039[(8)] = inst_38984);

return statearr_39039;
})();
if(cljs.core.truth_(inst_38985)){
var statearr_39040_39064 = state_39024__$1;
(statearr_39040_39064[(1)] = (8));

} else {
var statearr_39041_39065 = state_39024__$1;
(statearr_39041_39065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (14))){
var inst_38995 = (state_39024[(2)]);
var state_39024__$1 = state_39024;
var statearr_39042_39066 = state_39024__$1;
(statearr_39042_39066[(2)] = inst_38995);

(statearr_39042_39066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (16))){
var state_39024__$1 = state_39024;
var statearr_39043_39067 = state_39024__$1;
(statearr_39043_39067[(2)] = null);

(statearr_39043_39067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (10))){
var inst_39016 = (state_39024[(2)]);
var state_39024__$1 = (function (){var statearr_39044 = state_39024;
(statearr_39044[(11)] = inst_39016);

return statearr_39044;
})();
var statearr_39045_39068 = state_39024__$1;
(statearr_39045_39068[(2)] = null);

(statearr_39045_39068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39025 === (8))){
var inst_38983 = (state_39024[(9)]);
var inst_38987 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38983,opts);
var state_39024__$1 = state_39024;
if(cljs.core.truth_(inst_38987)){
var statearr_39046_39069 = state_39024__$1;
(statearr_39046_39069[(1)] = (11));

} else {
var statearr_39047_39070 = state_39024__$1;
(statearr_39047_39070[(1)] = (12));

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
});})(c__34079__auto___39052,ch))
;
return ((function (switch__33991__auto__,c__34079__auto___39052,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33992__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33992__auto____0 = (function (){
var statearr_39048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39048[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33992__auto__);

(statearr_39048[(1)] = (1));

return statearr_39048;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33992__auto____1 = (function (state_39024){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_39024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e39049){if((e39049 instanceof Object)){
var ex__33995__auto__ = e39049;
var statearr_39050_39071 = state_39024;
(statearr_39050_39071[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39072 = state_39024;
state_39024 = G__39072;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33992__auto__ = function(state_39024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33992__auto____1.call(this,state_39024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33992__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33992__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___39052,ch))
})();
var state__34081__auto__ = (function (){var statearr_39051 = f__34080__auto__.call(null);
(statearr_39051[(6)] = c__34079__auto___39052);

return statearr_39051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___39052,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39073_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39073_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39075 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39075){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39074){if((e39074 instanceof Error)){
var e = e39074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39075], null));
} else {
var e = e39074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39075))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39076){
var map__39077 = p__39076;
var map__39077__$1 = ((((!((map__39077 == null)))?((((map__39077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39077):map__39077);
var opts = map__39077__$1;
var build_id = cljs.core.get.call(null,map__39077__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39077,map__39077__$1,opts,build_id){
return (function (p__39079){
var vec__39080 = p__39079;
var seq__39081 = cljs.core.seq.call(null,vec__39080);
var first__39082 = cljs.core.first.call(null,seq__39081);
var seq__39081__$1 = cljs.core.next.call(null,seq__39081);
var map__39083 = first__39082;
var map__39083__$1 = ((((!((map__39083 == null)))?((((map__39083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39083):map__39083);
var msg = map__39083__$1;
var msg_name = cljs.core.get.call(null,map__39083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39081__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39080,seq__39081,first__39082,seq__39081__$1,map__39083,map__39083__$1,msg,msg_name,_,map__39077,map__39077__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39080,seq__39081,first__39082,seq__39081__$1,map__39083,map__39083__$1,msg,msg_name,_,map__39077,map__39077__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39077,map__39077__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39085){
var vec__39086 = p__39085;
var seq__39087 = cljs.core.seq.call(null,vec__39086);
var first__39088 = cljs.core.first.call(null,seq__39087);
var seq__39087__$1 = cljs.core.next.call(null,seq__39087);
var map__39089 = first__39088;
var map__39089__$1 = ((((!((map__39089 == null)))?((((map__39089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39089):map__39089);
var msg = map__39089__$1;
var msg_name = cljs.core.get.call(null,map__39089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39087__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39091){
var map__39092 = p__39091;
var map__39092__$1 = ((((!((map__39092 == null)))?((((map__39092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39092):map__39092);
var on_compile_warning = cljs.core.get.call(null,map__39092__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39092__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39092,map__39092__$1,on_compile_warning,on_compile_fail){
return (function (p__39094){
var vec__39095 = p__39094;
var seq__39096 = cljs.core.seq.call(null,vec__39095);
var first__39097 = cljs.core.first.call(null,seq__39096);
var seq__39096__$1 = cljs.core.next.call(null,seq__39096);
var map__39098 = first__39097;
var map__39098__$1 = ((((!((map__39098 == null)))?((((map__39098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39098):map__39098);
var msg = map__39098__$1;
var msg_name = cljs.core.get.call(null,map__39098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39096__$1;
var pred__39100 = cljs.core._EQ_;
var expr__39101 = msg_name;
if(cljs.core.truth_(pred__39100.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39101))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39100.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39101))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39092,map__39092__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__,msg_hist,msg_names,msg){
return (function (state_39190){
var state_val_39191 = (state_39190[(1)]);
if((state_val_39191 === (7))){
var inst_39110 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39110)){
var statearr_39192_39239 = state_39190__$1;
(statearr_39192_39239[(1)] = (8));

} else {
var statearr_39193_39240 = state_39190__$1;
(statearr_39193_39240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (20))){
var inst_39184 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39194_39241 = state_39190__$1;
(statearr_39194_39241[(2)] = inst_39184);

(statearr_39194_39241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (27))){
var inst_39180 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39195_39242 = state_39190__$1;
(statearr_39195_39242[(2)] = inst_39180);

(statearr_39195_39242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (1))){
var inst_39103 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39103)){
var statearr_39196_39243 = state_39190__$1;
(statearr_39196_39243[(1)] = (2));

} else {
var statearr_39197_39244 = state_39190__$1;
(statearr_39197_39244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (24))){
var inst_39182 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39198_39245 = state_39190__$1;
(statearr_39198_39245[(2)] = inst_39182);

(statearr_39198_39245[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (4))){
var inst_39188 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39190__$1,inst_39188);
} else {
if((state_val_39191 === (15))){
var inst_39186 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39199_39246 = state_39190__$1;
(statearr_39199_39246[(2)] = inst_39186);

(statearr_39199_39246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (21))){
var inst_39139 = (state_39190[(2)]);
var inst_39140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39140);
var state_39190__$1 = (function (){var statearr_39200 = state_39190;
(statearr_39200[(7)] = inst_39139);

return statearr_39200;
})();
var statearr_39201_39247 = state_39190__$1;
(statearr_39201_39247[(2)] = inst_39141);

(statearr_39201_39247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (31))){
var inst_39169 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39169)){
var statearr_39202_39248 = state_39190__$1;
(statearr_39202_39248[(1)] = (34));

} else {
var statearr_39203_39249 = state_39190__$1;
(statearr_39203_39249[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (32))){
var inst_39178 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39204_39250 = state_39190__$1;
(statearr_39204_39250[(2)] = inst_39178);

(statearr_39204_39250[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (33))){
var inst_39165 = (state_39190[(2)]);
var inst_39166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39166);
var state_39190__$1 = (function (){var statearr_39205 = state_39190;
(statearr_39205[(8)] = inst_39165);

return statearr_39205;
})();
var statearr_39206_39251 = state_39190__$1;
(statearr_39206_39251[(2)] = inst_39167);

(statearr_39206_39251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (13))){
var inst_39124 = figwheel.client.heads_up.clear.call(null);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(16),inst_39124);
} else {
if((state_val_39191 === (22))){
var inst_39145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39146 = figwheel.client.heads_up.append_warning_message.call(null,inst_39145);
var state_39190__$1 = state_39190;
var statearr_39207_39252 = state_39190__$1;
(statearr_39207_39252[(2)] = inst_39146);

(statearr_39207_39252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (36))){
var inst_39176 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39208_39253 = state_39190__$1;
(statearr_39208_39253[(2)] = inst_39176);

(statearr_39208_39253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (29))){
var inst_39156 = (state_39190[(2)]);
var inst_39157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39158 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39157);
var state_39190__$1 = (function (){var statearr_39209 = state_39190;
(statearr_39209[(9)] = inst_39156);

return statearr_39209;
})();
var statearr_39210_39254 = state_39190__$1;
(statearr_39210_39254[(2)] = inst_39158);

(statearr_39210_39254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (6))){
var inst_39105 = (state_39190[(10)]);
var state_39190__$1 = state_39190;
var statearr_39211_39255 = state_39190__$1;
(statearr_39211_39255[(2)] = inst_39105);

(statearr_39211_39255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (28))){
var inst_39152 = (state_39190[(2)]);
var inst_39153 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39154 = figwheel.client.heads_up.display_warning.call(null,inst_39153);
var state_39190__$1 = (function (){var statearr_39212 = state_39190;
(statearr_39212[(11)] = inst_39152);

return statearr_39212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(29),inst_39154);
} else {
if((state_val_39191 === (25))){
var inst_39150 = figwheel.client.heads_up.clear.call(null);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(28),inst_39150);
} else {
if((state_val_39191 === (34))){
var inst_39171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(37),inst_39171);
} else {
if((state_val_39191 === (17))){
var inst_39130 = (state_39190[(2)]);
var inst_39131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39132 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39131);
var state_39190__$1 = (function (){var statearr_39213 = state_39190;
(statearr_39213[(12)] = inst_39130);

return statearr_39213;
})();
var statearr_39214_39256 = state_39190__$1;
(statearr_39214_39256[(2)] = inst_39132);

(statearr_39214_39256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (3))){
var inst_39122 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39122)){
var statearr_39215_39257 = state_39190__$1;
(statearr_39215_39257[(1)] = (13));

} else {
var statearr_39216_39258 = state_39190__$1;
(statearr_39216_39258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (12))){
var inst_39118 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39217_39259 = state_39190__$1;
(statearr_39217_39259[(2)] = inst_39118);

(statearr_39217_39259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (2))){
var inst_39105 = (state_39190[(10)]);
var inst_39105__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39190__$1 = (function (){var statearr_39218 = state_39190;
(statearr_39218[(10)] = inst_39105__$1);

return statearr_39218;
})();
if(cljs.core.truth_(inst_39105__$1)){
var statearr_39219_39260 = state_39190__$1;
(statearr_39219_39260[(1)] = (5));

} else {
var statearr_39220_39261 = state_39190__$1;
(statearr_39220_39261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (23))){
var inst_39148 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39148)){
var statearr_39221_39262 = state_39190__$1;
(statearr_39221_39262[(1)] = (25));

} else {
var statearr_39222_39263 = state_39190__$1;
(statearr_39222_39263[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (35))){
var state_39190__$1 = state_39190;
var statearr_39223_39264 = state_39190__$1;
(statearr_39223_39264[(2)] = null);

(statearr_39223_39264[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (19))){
var inst_39143 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39143)){
var statearr_39224_39265 = state_39190__$1;
(statearr_39224_39265[(1)] = (22));

} else {
var statearr_39225_39266 = state_39190__$1;
(statearr_39225_39266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (11))){
var inst_39114 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39226_39267 = state_39190__$1;
(statearr_39226_39267[(2)] = inst_39114);

(statearr_39226_39267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (9))){
var inst_39116 = figwheel.client.heads_up.clear.call(null);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(12),inst_39116);
} else {
if((state_val_39191 === (5))){
var inst_39107 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39190__$1 = state_39190;
var statearr_39227_39268 = state_39190__$1;
(statearr_39227_39268[(2)] = inst_39107);

(statearr_39227_39268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (14))){
var inst_39134 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39134)){
var statearr_39228_39269 = state_39190__$1;
(statearr_39228_39269[(1)] = (18));

} else {
var statearr_39229_39270 = state_39190__$1;
(statearr_39229_39270[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (26))){
var inst_39160 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39190__$1 = state_39190;
if(cljs.core.truth_(inst_39160)){
var statearr_39230_39271 = state_39190__$1;
(statearr_39230_39271[(1)] = (30));

} else {
var statearr_39231_39272 = state_39190__$1;
(statearr_39231_39272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (16))){
var inst_39126 = (state_39190[(2)]);
var inst_39127 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39128 = figwheel.client.heads_up.display_exception.call(null,inst_39127);
var state_39190__$1 = (function (){var statearr_39232 = state_39190;
(statearr_39232[(13)] = inst_39126);

return statearr_39232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(17),inst_39128);
} else {
if((state_val_39191 === (30))){
var inst_39162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39163 = figwheel.client.heads_up.display_warning.call(null,inst_39162);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(33),inst_39163);
} else {
if((state_val_39191 === (10))){
var inst_39120 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39233_39273 = state_39190__$1;
(statearr_39233_39273[(2)] = inst_39120);

(statearr_39233_39273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (18))){
var inst_39136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39137 = figwheel.client.heads_up.display_exception.call(null,inst_39136);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(21),inst_39137);
} else {
if((state_val_39191 === (37))){
var inst_39173 = (state_39190[(2)]);
var state_39190__$1 = state_39190;
var statearr_39234_39274 = state_39190__$1;
(statearr_39234_39274[(2)] = inst_39173);

(statearr_39234_39274[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39191 === (8))){
var inst_39112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39190__$1 = state_39190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39190__$1,(11),inst_39112);
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
}
});})(c__34079__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33991__auto__,c__34079__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto____0 = (function (){
var statearr_39235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39235[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto__);

(statearr_39235[(1)] = (1));

return statearr_39235;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto____1 = (function (state_39190){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_39190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e39236){if((e39236 instanceof Object)){
var ex__33995__auto__ = e39236;
var statearr_39237_39275 = state_39190;
(statearr_39237_39275[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39276 = state_39190;
state_39190 = G__39276;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto__ = function(state_39190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto____1.call(this,state_39190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__,msg_hist,msg_names,msg))
})();
var state__34081__auto__ = (function (){var statearr_39238 = f__34080__auto__.call(null);
(statearr_39238[(6)] = c__34079__auto__);

return statearr_39238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__,msg_hist,msg_names,msg))
);

return c__34079__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34079__auto___39305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___39305,ch){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___39305,ch){
return (function (state_39291){
var state_val_39292 = (state_39291[(1)]);
if((state_val_39292 === (1))){
var state_39291__$1 = state_39291;
var statearr_39293_39306 = state_39291__$1;
(statearr_39293_39306[(2)] = null);

(statearr_39293_39306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (2))){
var state_39291__$1 = state_39291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39291__$1,(4),ch);
} else {
if((state_val_39292 === (3))){
var inst_39289 = (state_39291[(2)]);
var state_39291__$1 = state_39291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39291__$1,inst_39289);
} else {
if((state_val_39292 === (4))){
var inst_39279 = (state_39291[(7)]);
var inst_39279__$1 = (state_39291[(2)]);
var state_39291__$1 = (function (){var statearr_39294 = state_39291;
(statearr_39294[(7)] = inst_39279__$1);

return statearr_39294;
})();
if(cljs.core.truth_(inst_39279__$1)){
var statearr_39295_39307 = state_39291__$1;
(statearr_39295_39307[(1)] = (5));

} else {
var statearr_39296_39308 = state_39291__$1;
(statearr_39296_39308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (5))){
var inst_39279 = (state_39291[(7)]);
var inst_39281 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39279);
var state_39291__$1 = state_39291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39291__$1,(8),inst_39281);
} else {
if((state_val_39292 === (6))){
var state_39291__$1 = state_39291;
var statearr_39297_39309 = state_39291__$1;
(statearr_39297_39309[(2)] = null);

(statearr_39297_39309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (7))){
var inst_39287 = (state_39291[(2)]);
var state_39291__$1 = state_39291;
var statearr_39298_39310 = state_39291__$1;
(statearr_39298_39310[(2)] = inst_39287);

(statearr_39298_39310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39292 === (8))){
var inst_39283 = (state_39291[(2)]);
var state_39291__$1 = (function (){var statearr_39299 = state_39291;
(statearr_39299[(8)] = inst_39283);

return statearr_39299;
})();
var statearr_39300_39311 = state_39291__$1;
(statearr_39300_39311[(2)] = null);

(statearr_39300_39311[(1)] = (2));


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
});})(c__34079__auto___39305,ch))
;
return ((function (switch__33991__auto__,c__34079__auto___39305,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33992__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33992__auto____0 = (function (){
var statearr_39301 = [null,null,null,null,null,null,null,null,null];
(statearr_39301[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33992__auto__);

(statearr_39301[(1)] = (1));

return statearr_39301;
});
var figwheel$client$heads_up_plugin_$_state_machine__33992__auto____1 = (function (state_39291){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_39291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e39302){if((e39302 instanceof Object)){
var ex__33995__auto__ = e39302;
var statearr_39303_39312 = state_39291;
(statearr_39303_39312[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39313 = state_39291;
state_39291 = G__39313;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33992__auto__ = function(state_39291){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33992__auto____1.call(this,state_39291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33992__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33992__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___39305,ch))
})();
var state__34081__auto__ = (function (){var statearr_39304 = f__34080__auto__.call(null);
(statearr_39304[(6)] = c__34079__auto___39305);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___39305,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__){
return (function (state_39319){
var state_val_39320 = (state_39319[(1)]);
if((state_val_39320 === (1))){
var inst_39314 = cljs.core.async.timeout.call(null,(3000));
var state_39319__$1 = state_39319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39319__$1,(2),inst_39314);
} else {
if((state_val_39320 === (2))){
var inst_39316 = (state_39319[(2)]);
var inst_39317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39319__$1 = (function (){var statearr_39321 = state_39319;
(statearr_39321[(7)] = inst_39316);

return statearr_39321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39319__$1,inst_39317);
} else {
return null;
}
}
});})(c__34079__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33992__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33992__auto____0 = (function (){
var statearr_39322 = [null,null,null,null,null,null,null,null];
(statearr_39322[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33992__auto__);

(statearr_39322[(1)] = (1));

return statearr_39322;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33992__auto____1 = (function (state_39319){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_39319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e39323){if((e39323 instanceof Object)){
var ex__33995__auto__ = e39323;
var statearr_39324_39326 = state_39319;
(statearr_39324_39326[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39327 = state_39319;
state_39319 = G__39327;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33992__auto__ = function(state_39319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33992__auto____1.call(this,state_39319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33992__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33992__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__))
})();
var state__34081__auto__ = (function (){var statearr_39325 = f__34080__auto__.call(null);
(statearr_39325[(6)] = c__34079__auto__);

return statearr_39325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__))
);

return c__34079__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39334){
var state_val_39335 = (state_39334[(1)]);
if((state_val_39335 === (1))){
var inst_39328 = cljs.core.async.timeout.call(null,(2000));
var state_39334__$1 = state_39334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39334__$1,(2),inst_39328);
} else {
if((state_val_39335 === (2))){
var inst_39330 = (state_39334[(2)]);
var inst_39331 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39332 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39331);
var state_39334__$1 = (function (){var statearr_39336 = state_39334;
(statearr_39336[(7)] = inst_39330);

return statearr_39336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39334__$1,inst_39332);
} else {
return null;
}
}
});})(c__34079__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto____0 = (function (){
var statearr_39337 = [null,null,null,null,null,null,null,null];
(statearr_39337[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto__);

(statearr_39337[(1)] = (1));

return statearr_39337;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto____1 = (function (state_39334){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_39334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e39338){if((e39338 instanceof Object)){
var ex__33995__auto__ = e39338;
var statearr_39339_39341 = state_39334;
(statearr_39339_39341[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39342 = state_39334;
state_39334 = G__39342;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto__ = function(state_39334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto____1.call(this,state_39334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34081__auto__ = (function (){var statearr_39340 = f__34080__auto__.call(null);
(statearr_39340[(6)] = c__34079__auto__);

return statearr_39340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__,figwheel_version,temp__4657__auto__))
);

return c__34079__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39343){
var map__39344 = p__39343;
var map__39344__$1 = ((((!((map__39344 == null)))?((((map__39344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39344):map__39344);
var file = cljs.core.get.call(null,map__39344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39344__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39344__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39346 = "";
var G__39346__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39346),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39346);
var G__39346__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39346__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39346__$1);
if(cljs.core.truth_((function (){var and__28411__auto__ = line;
if(cljs.core.truth_(and__28411__auto__)){
return column;
} else {
return and__28411__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39346__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39346__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39347){
var map__39348 = p__39347;
var map__39348__$1 = ((((!((map__39348 == null)))?((((map__39348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39348):map__39348);
var ed = map__39348__$1;
var formatted_exception = cljs.core.get.call(null,map__39348__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39348__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39348__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39350_39354 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39351_39355 = null;
var count__39352_39356 = (0);
var i__39353_39357 = (0);
while(true){
if((i__39353_39357 < count__39352_39356)){
var msg_39358 = cljs.core._nth.call(null,chunk__39351_39355,i__39353_39357);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39358);

var G__39359 = seq__39350_39354;
var G__39360 = chunk__39351_39355;
var G__39361 = count__39352_39356;
var G__39362 = (i__39353_39357 + (1));
seq__39350_39354 = G__39359;
chunk__39351_39355 = G__39360;
count__39352_39356 = G__39361;
i__39353_39357 = G__39362;
continue;
} else {
var temp__4657__auto___39363 = cljs.core.seq.call(null,seq__39350_39354);
if(temp__4657__auto___39363){
var seq__39350_39364__$1 = temp__4657__auto___39363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39350_39364__$1)){
var c__29262__auto___39365 = cljs.core.chunk_first.call(null,seq__39350_39364__$1);
var G__39366 = cljs.core.chunk_rest.call(null,seq__39350_39364__$1);
var G__39367 = c__29262__auto___39365;
var G__39368 = cljs.core.count.call(null,c__29262__auto___39365);
var G__39369 = (0);
seq__39350_39354 = G__39366;
chunk__39351_39355 = G__39367;
count__39352_39356 = G__39368;
i__39353_39357 = G__39369;
continue;
} else {
var msg_39370 = cljs.core.first.call(null,seq__39350_39364__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39370);

var G__39371 = cljs.core.next.call(null,seq__39350_39364__$1);
var G__39372 = null;
var G__39373 = (0);
var G__39374 = (0);
seq__39350_39354 = G__39371;
chunk__39351_39355 = G__39372;
count__39352_39356 = G__39373;
i__39353_39357 = G__39374;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39375){
var map__39376 = p__39375;
var map__39376__$1 = ((((!((map__39376 == null)))?((((map__39376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39376):map__39376);
var w = map__39376__$1;
var message = cljs.core.get.call(null,map__39376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28411__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28411__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28411__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39378 = cljs.core.seq.call(null,plugins);
var chunk__39379 = null;
var count__39380 = (0);
var i__39381 = (0);
while(true){
if((i__39381 < count__39380)){
var vec__39382 = cljs.core._nth.call(null,chunk__39379,i__39381);
var k = cljs.core.nth.call(null,vec__39382,(0),null);
var plugin = cljs.core.nth.call(null,vec__39382,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39378,chunk__39379,count__39380,i__39381,pl_39388,vec__39382,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39388.call(null,msg_hist);
});})(seq__39378,chunk__39379,count__39380,i__39381,pl_39388,vec__39382,k,plugin))
);
} else {
}

var G__39389 = seq__39378;
var G__39390 = chunk__39379;
var G__39391 = count__39380;
var G__39392 = (i__39381 + (1));
seq__39378 = G__39389;
chunk__39379 = G__39390;
count__39380 = G__39391;
i__39381 = G__39392;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39378);
if(temp__4657__auto__){
var seq__39378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39378__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__39378__$1);
var G__39393 = cljs.core.chunk_rest.call(null,seq__39378__$1);
var G__39394 = c__29262__auto__;
var G__39395 = cljs.core.count.call(null,c__29262__auto__);
var G__39396 = (0);
seq__39378 = G__39393;
chunk__39379 = G__39394;
count__39380 = G__39395;
i__39381 = G__39396;
continue;
} else {
var vec__39385 = cljs.core.first.call(null,seq__39378__$1);
var k = cljs.core.nth.call(null,vec__39385,(0),null);
var plugin = cljs.core.nth.call(null,vec__39385,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39397 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39378,chunk__39379,count__39380,i__39381,pl_39397,vec__39385,k,plugin,seq__39378__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39397.call(null,msg_hist);
});})(seq__39378,chunk__39379,count__39380,i__39381,pl_39397,vec__39385,k,plugin,seq__39378__$1,temp__4657__auto__))
);
} else {
}

var G__39398 = cljs.core.next.call(null,seq__39378__$1);
var G__39399 = null;
var G__39400 = (0);
var G__39401 = (0);
seq__39378 = G__39398;
chunk__39379 = G__39399;
count__39380 = G__39400;
i__39381 = G__39401;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39403 = arguments.length;
switch (G__39403) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39404_39409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39405_39410 = null;
var count__39406_39411 = (0);
var i__39407_39412 = (0);
while(true){
if((i__39407_39412 < count__39406_39411)){
var msg_39413 = cljs.core._nth.call(null,chunk__39405_39410,i__39407_39412);
figwheel.client.socket.handle_incoming_message.call(null,msg_39413);

var G__39414 = seq__39404_39409;
var G__39415 = chunk__39405_39410;
var G__39416 = count__39406_39411;
var G__39417 = (i__39407_39412 + (1));
seq__39404_39409 = G__39414;
chunk__39405_39410 = G__39415;
count__39406_39411 = G__39416;
i__39407_39412 = G__39417;
continue;
} else {
var temp__4657__auto___39418 = cljs.core.seq.call(null,seq__39404_39409);
if(temp__4657__auto___39418){
var seq__39404_39419__$1 = temp__4657__auto___39418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39404_39419__$1)){
var c__29262__auto___39420 = cljs.core.chunk_first.call(null,seq__39404_39419__$1);
var G__39421 = cljs.core.chunk_rest.call(null,seq__39404_39419__$1);
var G__39422 = c__29262__auto___39420;
var G__39423 = cljs.core.count.call(null,c__29262__auto___39420);
var G__39424 = (0);
seq__39404_39409 = G__39421;
chunk__39405_39410 = G__39422;
count__39406_39411 = G__39423;
i__39407_39412 = G__39424;
continue;
} else {
var msg_39425 = cljs.core.first.call(null,seq__39404_39419__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39425);

var G__39426 = cljs.core.next.call(null,seq__39404_39419__$1);
var G__39427 = null;
var G__39428 = (0);
var G__39429 = (0);
seq__39404_39409 = G__39426;
chunk__39405_39410 = G__39427;
count__39406_39411 = G__39428;
i__39407_39412 = G__39429;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29599__auto__ = [];
var len__29592__auto___39434 = arguments.length;
var i__29593__auto___39435 = (0);
while(true){
if((i__29593__auto___39435 < len__29592__auto___39434)){
args__29599__auto__.push((arguments[i__29593__auto___39435]));

var G__39436 = (i__29593__auto___39435 + (1));
i__29593__auto___39435 = G__39436;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39431){
var map__39432 = p__39431;
var map__39432__$1 = ((((!((map__39432 == null)))?((((map__39432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39432):map__39432);
var opts = map__39432__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39430){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39430));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39437){if((e39437 instanceof Error)){
var e = e39437;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39437;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39438){
var map__39439 = p__39438;
var map__39439__$1 = ((((!((map__39439 == null)))?((((map__39439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39439):map__39439);
var msg_name = cljs.core.get.call(null,map__39439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518440268491
