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
}catch (e38951){if((e38951 instanceof Error)){
var e = e38951;
return "Error: Unable to stringify";
} else {
throw e38951;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38954 = arguments.length;
switch (G__38954) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38952_SHARP_){
if(typeof p1__38952_SHARP_ === 'string'){
return p1__38952_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38952_SHARP_);
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
var len__29592__auto___38957 = arguments.length;
var i__29593__auto___38958 = (0);
while(true){
if((i__29593__auto___38958 < len__29592__auto___38957)){
args__29599__auto__.push((arguments[i__29593__auto___38958]));

var G__38959 = (i__29593__auto___38958 + (1));
i__29593__auto___38958 = G__38959;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38956){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38956));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29599__auto__ = [];
var len__29592__auto___38961 = arguments.length;
var i__29593__auto___38962 = (0);
while(true){
if((i__29593__auto___38962 < len__29592__auto___38961)){
args__29599__auto__.push((arguments[i__29593__auto___38962]));

var G__38963 = (i__29593__auto___38962 + (1));
i__29593__auto___38962 = G__38963;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38960){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38960));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38964){
var map__38965 = p__38964;
var map__38965__$1 = ((((!((map__38965 == null)))?((((map__38965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38965):map__38965);
var message = cljs.core.get.call(null,map__38965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34071__auto___39044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___39044,ch){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___39044,ch){
return (function (state_39016){
var state_val_39017 = (state_39016[(1)]);
if((state_val_39017 === (7))){
var inst_39012 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39018_39045 = state_39016__$1;
(statearr_39018_39045[(2)] = inst_39012);

(statearr_39018_39045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (1))){
var state_39016__$1 = state_39016;
var statearr_39019_39046 = state_39016__$1;
(statearr_39019_39046[(2)] = null);

(statearr_39019_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (4))){
var inst_38969 = (state_39016[(7)]);
var inst_38969__$1 = (state_39016[(2)]);
var state_39016__$1 = (function (){var statearr_39020 = state_39016;
(statearr_39020[(7)] = inst_38969__$1);

return statearr_39020;
})();
if(cljs.core.truth_(inst_38969__$1)){
var statearr_39021_39047 = state_39016__$1;
(statearr_39021_39047[(1)] = (5));

} else {
var statearr_39022_39048 = state_39016__$1;
(statearr_39022_39048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (15))){
var inst_38976 = (state_39016[(8)]);
var inst_38991 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38976);
var inst_38992 = cljs.core.first.call(null,inst_38991);
var inst_38993 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38992);
var inst_38994 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38993)].join('');
var inst_38995 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38994);
var state_39016__$1 = state_39016;
var statearr_39023_39049 = state_39016__$1;
(statearr_39023_39049[(2)] = inst_38995);

(statearr_39023_39049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (13))){
var inst_39000 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39024_39050 = state_39016__$1;
(statearr_39024_39050[(2)] = inst_39000);

(statearr_39024_39050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (6))){
var state_39016__$1 = state_39016;
var statearr_39025_39051 = state_39016__$1;
(statearr_39025_39051[(2)] = null);

(statearr_39025_39051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (17))){
var inst_38998 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39026_39052 = state_39016__$1;
(statearr_39026_39052[(2)] = inst_38998);

(statearr_39026_39052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (3))){
var inst_39014 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39016__$1,inst_39014);
} else {
if((state_val_39017 === (12))){
var inst_38975 = (state_39016[(9)]);
var inst_38989 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38975,opts);
var state_39016__$1 = state_39016;
if(cljs.core.truth_(inst_38989)){
var statearr_39027_39053 = state_39016__$1;
(statearr_39027_39053[(1)] = (15));

} else {
var statearr_39028_39054 = state_39016__$1;
(statearr_39028_39054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (2))){
var state_39016__$1 = state_39016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39016__$1,(4),ch);
} else {
if((state_val_39017 === (11))){
var inst_38976 = (state_39016[(8)]);
var inst_38981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38982 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38976);
var inst_38983 = cljs.core.async.timeout.call(null,(1000));
var inst_38984 = [inst_38982,inst_38983];
var inst_38985 = (new cljs.core.PersistentVector(null,2,(5),inst_38981,inst_38984,null));
var state_39016__$1 = state_39016;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39016__$1,(14),inst_38985);
} else {
if((state_val_39017 === (9))){
var inst_38976 = (state_39016[(8)]);
var inst_39002 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39003 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38976);
var inst_39004 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39003);
var inst_39005 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39004)].join('');
var inst_39006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39005);
var state_39016__$1 = (function (){var statearr_39029 = state_39016;
(statearr_39029[(10)] = inst_39002);

return statearr_39029;
})();
var statearr_39030_39055 = state_39016__$1;
(statearr_39030_39055[(2)] = inst_39006);

(statearr_39030_39055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (5))){
var inst_38969 = (state_39016[(7)]);
var inst_38971 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38972 = (new cljs.core.PersistentArrayMap(null,2,inst_38971,null));
var inst_38973 = (new cljs.core.PersistentHashSet(null,inst_38972,null));
var inst_38974 = figwheel.client.focus_msgs.call(null,inst_38973,inst_38969);
var inst_38975 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38974);
var inst_38976 = cljs.core.first.call(null,inst_38974);
var inst_38977 = figwheel.client.autoload_QMARK_.call(null);
var state_39016__$1 = (function (){var statearr_39031 = state_39016;
(statearr_39031[(8)] = inst_38976);

(statearr_39031[(9)] = inst_38975);

return statearr_39031;
})();
if(cljs.core.truth_(inst_38977)){
var statearr_39032_39056 = state_39016__$1;
(statearr_39032_39056[(1)] = (8));

} else {
var statearr_39033_39057 = state_39016__$1;
(statearr_39033_39057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (14))){
var inst_38987 = (state_39016[(2)]);
var state_39016__$1 = state_39016;
var statearr_39034_39058 = state_39016__$1;
(statearr_39034_39058[(2)] = inst_38987);

(statearr_39034_39058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (16))){
var state_39016__$1 = state_39016;
var statearr_39035_39059 = state_39016__$1;
(statearr_39035_39059[(2)] = null);

(statearr_39035_39059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (10))){
var inst_39008 = (state_39016[(2)]);
var state_39016__$1 = (function (){var statearr_39036 = state_39016;
(statearr_39036[(11)] = inst_39008);

return statearr_39036;
})();
var statearr_39037_39060 = state_39016__$1;
(statearr_39037_39060[(2)] = null);

(statearr_39037_39060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39017 === (8))){
var inst_38975 = (state_39016[(9)]);
var inst_38979 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38975,opts);
var state_39016__$1 = state_39016;
if(cljs.core.truth_(inst_38979)){
var statearr_39038_39061 = state_39016__$1;
(statearr_39038_39061[(1)] = (11));

} else {
var statearr_39039_39062 = state_39016__$1;
(statearr_39039_39062[(1)] = (12));

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
});})(c__34071__auto___39044,ch))
;
return ((function (switch__33983__auto__,c__34071__auto___39044,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33984__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33984__auto____0 = (function (){
var statearr_39040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39040[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33984__auto__);

(statearr_39040[(1)] = (1));

return statearr_39040;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33984__auto____1 = (function (state_39016){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_39016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e39041){if((e39041 instanceof Object)){
var ex__33987__auto__ = e39041;
var statearr_39042_39063 = state_39016;
(statearr_39042_39063[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39064 = state_39016;
state_39016 = G__39064;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33984__auto__ = function(state_39016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33984__auto____1.call(this,state_39016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33984__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33984__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___39044,ch))
})();
var state__34073__auto__ = (function (){var statearr_39043 = f__34072__auto__.call(null);
(statearr_39043[(6)] = c__34071__auto___39044);

return statearr_39043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___39044,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39065_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39065_SHARP_));
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
var base_path_39067 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39067){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39066){if((e39066 instanceof Error)){
var e = e39066;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39067], null));
} else {
var e = e39066;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39067))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39068){
var map__39069 = p__39068;
var map__39069__$1 = ((((!((map__39069 == null)))?((((map__39069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39069):map__39069);
var opts = map__39069__$1;
var build_id = cljs.core.get.call(null,map__39069__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39069,map__39069__$1,opts,build_id){
return (function (p__39071){
var vec__39072 = p__39071;
var seq__39073 = cljs.core.seq.call(null,vec__39072);
var first__39074 = cljs.core.first.call(null,seq__39073);
var seq__39073__$1 = cljs.core.next.call(null,seq__39073);
var map__39075 = first__39074;
var map__39075__$1 = ((((!((map__39075 == null)))?((((map__39075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39075):map__39075);
var msg = map__39075__$1;
var msg_name = cljs.core.get.call(null,map__39075__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39073__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39072,seq__39073,first__39074,seq__39073__$1,map__39075,map__39075__$1,msg,msg_name,_,map__39069,map__39069__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39072,seq__39073,first__39074,seq__39073__$1,map__39075,map__39075__$1,msg,msg_name,_,map__39069,map__39069__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39069,map__39069__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39077){
var vec__39078 = p__39077;
var seq__39079 = cljs.core.seq.call(null,vec__39078);
var first__39080 = cljs.core.first.call(null,seq__39079);
var seq__39079__$1 = cljs.core.next.call(null,seq__39079);
var map__39081 = first__39080;
var map__39081__$1 = ((((!((map__39081 == null)))?((((map__39081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39081):map__39081);
var msg = map__39081__$1;
var msg_name = cljs.core.get.call(null,map__39081__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39079__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39083){
var map__39084 = p__39083;
var map__39084__$1 = ((((!((map__39084 == null)))?((((map__39084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39084):map__39084);
var on_compile_warning = cljs.core.get.call(null,map__39084__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39084__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39084,map__39084__$1,on_compile_warning,on_compile_fail){
return (function (p__39086){
var vec__39087 = p__39086;
var seq__39088 = cljs.core.seq.call(null,vec__39087);
var first__39089 = cljs.core.first.call(null,seq__39088);
var seq__39088__$1 = cljs.core.next.call(null,seq__39088);
var map__39090 = first__39089;
var map__39090__$1 = ((((!((map__39090 == null)))?((((map__39090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39090):map__39090);
var msg = map__39090__$1;
var msg_name = cljs.core.get.call(null,map__39090__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39088__$1;
var pred__39092 = cljs.core._EQ_;
var expr__39093 = msg_name;
if(cljs.core.truth_(pred__39092.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39093))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39092.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39093))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39084,map__39084__$1,on_compile_warning,on_compile_fail))
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__,msg_hist,msg_names,msg){
return (function (state_39182){
var state_val_39183 = (state_39182[(1)]);
if((state_val_39183 === (7))){
var inst_39102 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39102)){
var statearr_39184_39231 = state_39182__$1;
(statearr_39184_39231[(1)] = (8));

} else {
var statearr_39185_39232 = state_39182__$1;
(statearr_39185_39232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (20))){
var inst_39176 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39186_39233 = state_39182__$1;
(statearr_39186_39233[(2)] = inst_39176);

(statearr_39186_39233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (27))){
var inst_39172 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39187_39234 = state_39182__$1;
(statearr_39187_39234[(2)] = inst_39172);

(statearr_39187_39234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (1))){
var inst_39095 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39095)){
var statearr_39188_39235 = state_39182__$1;
(statearr_39188_39235[(1)] = (2));

} else {
var statearr_39189_39236 = state_39182__$1;
(statearr_39189_39236[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (24))){
var inst_39174 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39190_39237 = state_39182__$1;
(statearr_39190_39237[(2)] = inst_39174);

(statearr_39190_39237[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (4))){
var inst_39180 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39182__$1,inst_39180);
} else {
if((state_val_39183 === (15))){
var inst_39178 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39191_39238 = state_39182__$1;
(statearr_39191_39238[(2)] = inst_39178);

(statearr_39191_39238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (21))){
var inst_39131 = (state_39182[(2)]);
var inst_39132 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39133 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39132);
var state_39182__$1 = (function (){var statearr_39192 = state_39182;
(statearr_39192[(7)] = inst_39131);

return statearr_39192;
})();
var statearr_39193_39239 = state_39182__$1;
(statearr_39193_39239[(2)] = inst_39133);

(statearr_39193_39239[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (31))){
var inst_39161 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39161)){
var statearr_39194_39240 = state_39182__$1;
(statearr_39194_39240[(1)] = (34));

} else {
var statearr_39195_39241 = state_39182__$1;
(statearr_39195_39241[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (32))){
var inst_39170 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39196_39242 = state_39182__$1;
(statearr_39196_39242[(2)] = inst_39170);

(statearr_39196_39242[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (33))){
var inst_39157 = (state_39182[(2)]);
var inst_39158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39159 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39158);
var state_39182__$1 = (function (){var statearr_39197 = state_39182;
(statearr_39197[(8)] = inst_39157);

return statearr_39197;
})();
var statearr_39198_39243 = state_39182__$1;
(statearr_39198_39243[(2)] = inst_39159);

(statearr_39198_39243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (13))){
var inst_39116 = figwheel.client.heads_up.clear.call(null);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(16),inst_39116);
} else {
if((state_val_39183 === (22))){
var inst_39137 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39138 = figwheel.client.heads_up.append_warning_message.call(null,inst_39137);
var state_39182__$1 = state_39182;
var statearr_39199_39244 = state_39182__$1;
(statearr_39199_39244[(2)] = inst_39138);

(statearr_39199_39244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (36))){
var inst_39168 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39200_39245 = state_39182__$1;
(statearr_39200_39245[(2)] = inst_39168);

(statearr_39200_39245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (29))){
var inst_39148 = (state_39182[(2)]);
var inst_39149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39150 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39149);
var state_39182__$1 = (function (){var statearr_39201 = state_39182;
(statearr_39201[(9)] = inst_39148);

return statearr_39201;
})();
var statearr_39202_39246 = state_39182__$1;
(statearr_39202_39246[(2)] = inst_39150);

(statearr_39202_39246[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (6))){
var inst_39097 = (state_39182[(10)]);
var state_39182__$1 = state_39182;
var statearr_39203_39247 = state_39182__$1;
(statearr_39203_39247[(2)] = inst_39097);

(statearr_39203_39247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (28))){
var inst_39144 = (state_39182[(2)]);
var inst_39145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39146 = figwheel.client.heads_up.display_warning.call(null,inst_39145);
var state_39182__$1 = (function (){var statearr_39204 = state_39182;
(statearr_39204[(11)] = inst_39144);

return statearr_39204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(29),inst_39146);
} else {
if((state_val_39183 === (25))){
var inst_39142 = figwheel.client.heads_up.clear.call(null);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(28),inst_39142);
} else {
if((state_val_39183 === (34))){
var inst_39163 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(37),inst_39163);
} else {
if((state_val_39183 === (17))){
var inst_39122 = (state_39182[(2)]);
var inst_39123 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39124 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39123);
var state_39182__$1 = (function (){var statearr_39205 = state_39182;
(statearr_39205[(12)] = inst_39122);

return statearr_39205;
})();
var statearr_39206_39248 = state_39182__$1;
(statearr_39206_39248[(2)] = inst_39124);

(statearr_39206_39248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (3))){
var inst_39114 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39114)){
var statearr_39207_39249 = state_39182__$1;
(statearr_39207_39249[(1)] = (13));

} else {
var statearr_39208_39250 = state_39182__$1;
(statearr_39208_39250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (12))){
var inst_39110 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39209_39251 = state_39182__$1;
(statearr_39209_39251[(2)] = inst_39110);

(statearr_39209_39251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (2))){
var inst_39097 = (state_39182[(10)]);
var inst_39097__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39182__$1 = (function (){var statearr_39210 = state_39182;
(statearr_39210[(10)] = inst_39097__$1);

return statearr_39210;
})();
if(cljs.core.truth_(inst_39097__$1)){
var statearr_39211_39252 = state_39182__$1;
(statearr_39211_39252[(1)] = (5));

} else {
var statearr_39212_39253 = state_39182__$1;
(statearr_39212_39253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (23))){
var inst_39140 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39140)){
var statearr_39213_39254 = state_39182__$1;
(statearr_39213_39254[(1)] = (25));

} else {
var statearr_39214_39255 = state_39182__$1;
(statearr_39214_39255[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (35))){
var state_39182__$1 = state_39182;
var statearr_39215_39256 = state_39182__$1;
(statearr_39215_39256[(2)] = null);

(statearr_39215_39256[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (19))){
var inst_39135 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39135)){
var statearr_39216_39257 = state_39182__$1;
(statearr_39216_39257[(1)] = (22));

} else {
var statearr_39217_39258 = state_39182__$1;
(statearr_39217_39258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (11))){
var inst_39106 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39218_39259 = state_39182__$1;
(statearr_39218_39259[(2)] = inst_39106);

(statearr_39218_39259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (9))){
var inst_39108 = figwheel.client.heads_up.clear.call(null);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(12),inst_39108);
} else {
if((state_val_39183 === (5))){
var inst_39099 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39182__$1 = state_39182;
var statearr_39219_39260 = state_39182__$1;
(statearr_39219_39260[(2)] = inst_39099);

(statearr_39219_39260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (14))){
var inst_39126 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39126)){
var statearr_39220_39261 = state_39182__$1;
(statearr_39220_39261[(1)] = (18));

} else {
var statearr_39221_39262 = state_39182__$1;
(statearr_39221_39262[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (26))){
var inst_39152 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39182__$1 = state_39182;
if(cljs.core.truth_(inst_39152)){
var statearr_39222_39263 = state_39182__$1;
(statearr_39222_39263[(1)] = (30));

} else {
var statearr_39223_39264 = state_39182__$1;
(statearr_39223_39264[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (16))){
var inst_39118 = (state_39182[(2)]);
var inst_39119 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39120 = figwheel.client.heads_up.display_exception.call(null,inst_39119);
var state_39182__$1 = (function (){var statearr_39224 = state_39182;
(statearr_39224[(13)] = inst_39118);

return statearr_39224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(17),inst_39120);
} else {
if((state_val_39183 === (30))){
var inst_39154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39155 = figwheel.client.heads_up.display_warning.call(null,inst_39154);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(33),inst_39155);
} else {
if((state_val_39183 === (10))){
var inst_39112 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39225_39265 = state_39182__$1;
(statearr_39225_39265[(2)] = inst_39112);

(statearr_39225_39265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (18))){
var inst_39128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39129 = figwheel.client.heads_up.display_exception.call(null,inst_39128);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(21),inst_39129);
} else {
if((state_val_39183 === (37))){
var inst_39165 = (state_39182[(2)]);
var state_39182__$1 = state_39182;
var statearr_39226_39266 = state_39182__$1;
(statearr_39226_39266[(2)] = inst_39165);

(statearr_39226_39266[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39183 === (8))){
var inst_39104 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39182__$1 = state_39182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39182__$1,(11),inst_39104);
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
});})(c__34071__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33983__auto__,c__34071__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto____0 = (function (){
var statearr_39227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39227[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto__);

(statearr_39227[(1)] = (1));

return statearr_39227;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto____1 = (function (state_39182){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_39182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e39228){if((e39228 instanceof Object)){
var ex__33987__auto__ = e39228;
var statearr_39229_39267 = state_39182;
(statearr_39229_39267[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39268 = state_39182;
state_39182 = G__39268;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto__ = function(state_39182){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto____1.call(this,state_39182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__,msg_hist,msg_names,msg))
})();
var state__34073__auto__ = (function (){var statearr_39230 = f__34072__auto__.call(null);
(statearr_39230[(6)] = c__34071__auto__);

return statearr_39230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,msg_hist,msg_names,msg))
);

return c__34071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34071__auto___39297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___39297,ch){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___39297,ch){
return (function (state_39283){
var state_val_39284 = (state_39283[(1)]);
if((state_val_39284 === (1))){
var state_39283__$1 = state_39283;
var statearr_39285_39298 = state_39283__$1;
(statearr_39285_39298[(2)] = null);

(statearr_39285_39298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39284 === (2))){
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39283__$1,(4),ch);
} else {
if((state_val_39284 === (3))){
var inst_39281 = (state_39283[(2)]);
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39283__$1,inst_39281);
} else {
if((state_val_39284 === (4))){
var inst_39271 = (state_39283[(7)]);
var inst_39271__$1 = (state_39283[(2)]);
var state_39283__$1 = (function (){var statearr_39286 = state_39283;
(statearr_39286[(7)] = inst_39271__$1);

return statearr_39286;
})();
if(cljs.core.truth_(inst_39271__$1)){
var statearr_39287_39299 = state_39283__$1;
(statearr_39287_39299[(1)] = (5));

} else {
var statearr_39288_39300 = state_39283__$1;
(statearr_39288_39300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39284 === (5))){
var inst_39271 = (state_39283[(7)]);
var inst_39273 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39271);
var state_39283__$1 = state_39283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39283__$1,(8),inst_39273);
} else {
if((state_val_39284 === (6))){
var state_39283__$1 = state_39283;
var statearr_39289_39301 = state_39283__$1;
(statearr_39289_39301[(2)] = null);

(statearr_39289_39301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39284 === (7))){
var inst_39279 = (state_39283[(2)]);
var state_39283__$1 = state_39283;
var statearr_39290_39302 = state_39283__$1;
(statearr_39290_39302[(2)] = inst_39279);

(statearr_39290_39302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39284 === (8))){
var inst_39275 = (state_39283[(2)]);
var state_39283__$1 = (function (){var statearr_39291 = state_39283;
(statearr_39291[(8)] = inst_39275);

return statearr_39291;
})();
var statearr_39292_39303 = state_39283__$1;
(statearr_39292_39303[(2)] = null);

(statearr_39292_39303[(1)] = (2));


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
});})(c__34071__auto___39297,ch))
;
return ((function (switch__33983__auto__,c__34071__auto___39297,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33984__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33984__auto____0 = (function (){
var statearr_39293 = [null,null,null,null,null,null,null,null,null];
(statearr_39293[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33984__auto__);

(statearr_39293[(1)] = (1));

return statearr_39293;
});
var figwheel$client$heads_up_plugin_$_state_machine__33984__auto____1 = (function (state_39283){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_39283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e39294){if((e39294 instanceof Object)){
var ex__33987__auto__ = e39294;
var statearr_39295_39304 = state_39283;
(statearr_39295_39304[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39305 = state_39283;
state_39283 = G__39305;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33984__auto__ = function(state_39283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33984__auto____1.call(this,state_39283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33984__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33984__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___39297,ch))
})();
var state__34073__auto__ = (function (){var statearr_39296 = f__34072__auto__.call(null);
(statearr_39296[(6)] = c__34071__auto___39297);

return statearr_39296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___39297,ch))
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__){
return (function (state_39311){
var state_val_39312 = (state_39311[(1)]);
if((state_val_39312 === (1))){
var inst_39306 = cljs.core.async.timeout.call(null,(3000));
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39311__$1,(2),inst_39306);
} else {
if((state_val_39312 === (2))){
var inst_39308 = (state_39311[(2)]);
var inst_39309 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39311__$1 = (function (){var statearr_39313 = state_39311;
(statearr_39313[(7)] = inst_39308);

return statearr_39313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39311__$1,inst_39309);
} else {
return null;
}
}
});})(c__34071__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33984__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33984__auto____0 = (function (){
var statearr_39314 = [null,null,null,null,null,null,null,null];
(statearr_39314[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33984__auto__);

(statearr_39314[(1)] = (1));

return statearr_39314;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33984__auto____1 = (function (state_39311){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_39311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e39315){if((e39315 instanceof Object)){
var ex__33987__auto__ = e39315;
var statearr_39316_39318 = state_39311;
(statearr_39316_39318[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39319 = state_39311;
state_39311 = G__39319;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33984__auto__ = function(state_39311){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33984__auto____1.call(this,state_39311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33984__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33984__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_39317 = f__34072__auto__.call(null);
(statearr_39317[(6)] = c__34071__auto__);

return statearr_39317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39326){
var state_val_39327 = (state_39326[(1)]);
if((state_val_39327 === (1))){
var inst_39320 = cljs.core.async.timeout.call(null,(2000));
var state_39326__$1 = state_39326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39326__$1,(2),inst_39320);
} else {
if((state_val_39327 === (2))){
var inst_39322 = (state_39326[(2)]);
var inst_39323 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39324 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39323);
var state_39326__$1 = (function (){var statearr_39328 = state_39326;
(statearr_39328[(7)] = inst_39322);

return statearr_39328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39326__$1,inst_39324);
} else {
return null;
}
}
});})(c__34071__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto____0 = (function (){
var statearr_39329 = [null,null,null,null,null,null,null,null];
(statearr_39329[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto__);

(statearr_39329[(1)] = (1));

return statearr_39329;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto____1 = (function (state_39326){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_39326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e39330){if((e39330 instanceof Object)){
var ex__33987__auto__ = e39330;
var statearr_39331_39333 = state_39326;
(statearr_39331_39333[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39334 = state_39326;
state_39326 = G__39334;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto__ = function(state_39326){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto____1.call(this,state_39326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34073__auto__ = (function (){var statearr_39332 = f__34072__auto__.call(null);
(statearr_39332[(6)] = c__34071__auto__);

return statearr_39332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,figwheel_version,temp__4657__auto__))
);

return c__34071__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39335){
var map__39336 = p__39335;
var map__39336__$1 = ((((!((map__39336 == null)))?((((map__39336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39336):map__39336);
var file = cljs.core.get.call(null,map__39336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39336__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39336__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39338 = "";
var G__39338__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39338),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39338);
var G__39338__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39338__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39338__$1);
if(cljs.core.truth_((function (){var and__28411__auto__ = line;
if(cljs.core.truth_(and__28411__auto__)){
return column;
} else {
return and__28411__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39338__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39338__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39339){
var map__39340 = p__39339;
var map__39340__$1 = ((((!((map__39340 == null)))?((((map__39340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39340):map__39340);
var ed = map__39340__$1;
var formatted_exception = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39342_39346 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39343_39347 = null;
var count__39344_39348 = (0);
var i__39345_39349 = (0);
while(true){
if((i__39345_39349 < count__39344_39348)){
var msg_39350 = cljs.core._nth.call(null,chunk__39343_39347,i__39345_39349);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39350);

var G__39351 = seq__39342_39346;
var G__39352 = chunk__39343_39347;
var G__39353 = count__39344_39348;
var G__39354 = (i__39345_39349 + (1));
seq__39342_39346 = G__39351;
chunk__39343_39347 = G__39352;
count__39344_39348 = G__39353;
i__39345_39349 = G__39354;
continue;
} else {
var temp__4657__auto___39355 = cljs.core.seq.call(null,seq__39342_39346);
if(temp__4657__auto___39355){
var seq__39342_39356__$1 = temp__4657__auto___39355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39342_39356__$1)){
var c__29262__auto___39357 = cljs.core.chunk_first.call(null,seq__39342_39356__$1);
var G__39358 = cljs.core.chunk_rest.call(null,seq__39342_39356__$1);
var G__39359 = c__29262__auto___39357;
var G__39360 = cljs.core.count.call(null,c__29262__auto___39357);
var G__39361 = (0);
seq__39342_39346 = G__39358;
chunk__39343_39347 = G__39359;
count__39344_39348 = G__39360;
i__39345_39349 = G__39361;
continue;
} else {
var msg_39362 = cljs.core.first.call(null,seq__39342_39356__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39362);

var G__39363 = cljs.core.next.call(null,seq__39342_39356__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__39342_39346 = G__39363;
chunk__39343_39347 = G__39364;
count__39344_39348 = G__39365;
i__39345_39349 = G__39366;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39367){
var map__39368 = p__39367;
var map__39368__$1 = ((((!((map__39368 == null)))?((((map__39368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39368):map__39368);
var w = map__39368__$1;
var message = cljs.core.get.call(null,map__39368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39370 = cljs.core.seq.call(null,plugins);
var chunk__39371 = null;
var count__39372 = (0);
var i__39373 = (0);
while(true){
if((i__39373 < count__39372)){
var vec__39374 = cljs.core._nth.call(null,chunk__39371,i__39373);
var k = cljs.core.nth.call(null,vec__39374,(0),null);
var plugin = cljs.core.nth.call(null,vec__39374,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39380 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39370,chunk__39371,count__39372,i__39373,pl_39380,vec__39374,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39380.call(null,msg_hist);
});})(seq__39370,chunk__39371,count__39372,i__39373,pl_39380,vec__39374,k,plugin))
);
} else {
}

var G__39381 = seq__39370;
var G__39382 = chunk__39371;
var G__39383 = count__39372;
var G__39384 = (i__39373 + (1));
seq__39370 = G__39381;
chunk__39371 = G__39382;
count__39372 = G__39383;
i__39373 = G__39384;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39370);
if(temp__4657__auto__){
var seq__39370__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39370__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__39370__$1);
var G__39385 = cljs.core.chunk_rest.call(null,seq__39370__$1);
var G__39386 = c__29262__auto__;
var G__39387 = cljs.core.count.call(null,c__29262__auto__);
var G__39388 = (0);
seq__39370 = G__39385;
chunk__39371 = G__39386;
count__39372 = G__39387;
i__39373 = G__39388;
continue;
} else {
var vec__39377 = cljs.core.first.call(null,seq__39370__$1);
var k = cljs.core.nth.call(null,vec__39377,(0),null);
var plugin = cljs.core.nth.call(null,vec__39377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39370,chunk__39371,count__39372,i__39373,pl_39389,vec__39377,k,plugin,seq__39370__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39389.call(null,msg_hist);
});})(seq__39370,chunk__39371,count__39372,i__39373,pl_39389,vec__39377,k,plugin,seq__39370__$1,temp__4657__auto__))
);
} else {
}

var G__39390 = cljs.core.next.call(null,seq__39370__$1);
var G__39391 = null;
var G__39392 = (0);
var G__39393 = (0);
seq__39370 = G__39390;
chunk__39371 = G__39391;
count__39372 = G__39392;
i__39373 = G__39393;
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
var G__39395 = arguments.length;
switch (G__39395) {
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

var seq__39396_39401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39397_39402 = null;
var count__39398_39403 = (0);
var i__39399_39404 = (0);
while(true){
if((i__39399_39404 < count__39398_39403)){
var msg_39405 = cljs.core._nth.call(null,chunk__39397_39402,i__39399_39404);
figwheel.client.socket.handle_incoming_message.call(null,msg_39405);

var G__39406 = seq__39396_39401;
var G__39407 = chunk__39397_39402;
var G__39408 = count__39398_39403;
var G__39409 = (i__39399_39404 + (1));
seq__39396_39401 = G__39406;
chunk__39397_39402 = G__39407;
count__39398_39403 = G__39408;
i__39399_39404 = G__39409;
continue;
} else {
var temp__4657__auto___39410 = cljs.core.seq.call(null,seq__39396_39401);
if(temp__4657__auto___39410){
var seq__39396_39411__$1 = temp__4657__auto___39410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39396_39411__$1)){
var c__29262__auto___39412 = cljs.core.chunk_first.call(null,seq__39396_39411__$1);
var G__39413 = cljs.core.chunk_rest.call(null,seq__39396_39411__$1);
var G__39414 = c__29262__auto___39412;
var G__39415 = cljs.core.count.call(null,c__29262__auto___39412);
var G__39416 = (0);
seq__39396_39401 = G__39413;
chunk__39397_39402 = G__39414;
count__39398_39403 = G__39415;
i__39399_39404 = G__39416;
continue;
} else {
var msg_39417 = cljs.core.first.call(null,seq__39396_39411__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39417);

var G__39418 = cljs.core.next.call(null,seq__39396_39411__$1);
var G__39419 = null;
var G__39420 = (0);
var G__39421 = (0);
seq__39396_39401 = G__39418;
chunk__39397_39402 = G__39419;
count__39398_39403 = G__39420;
i__39399_39404 = G__39421;
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
var len__29592__auto___39426 = arguments.length;
var i__29593__auto___39427 = (0);
while(true){
if((i__29593__auto___39427 < len__29592__auto___39426)){
args__29599__auto__.push((arguments[i__29593__auto___39427]));

var G__39428 = (i__29593__auto___39427 + (1));
i__29593__auto___39427 = G__39428;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39423){
var map__39424 = p__39423;
var map__39424__$1 = ((((!((map__39424 == null)))?((((map__39424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39424):map__39424);
var opts = map__39424__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39422){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39422));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39429){if((e39429 instanceof Error)){
var e = e39429;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39429;

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
return (function (p__39430){
var map__39431 = p__39430;
var map__39431__$1 = ((((!((map__39431 == null)))?((((map__39431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39431):map__39431);
var msg_name = cljs.core.get.call(null,map__39431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518582094766
