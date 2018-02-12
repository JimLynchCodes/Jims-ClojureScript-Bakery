// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.view.container');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('re_frame.db');
goog.require('day8.re_frame.trace.view.event');
goog.require('day8.re_frame.trace.view.app_db');
goog.require('day8.re_frame.trace.view.subs');
goog.require('day8.re_frame.trace.view.views');
goog.require('day8.re_frame.trace.view.traces');
goog.require('day8.re_frame.trace.view.timing');
goog.require('day8.re_frame.trace.view.debug');
goog.require('day8.re_frame.trace.view.settings');
goog.require('mranderson047.garden.v1v3v3.garden.core');
goog.require('mranderson047.garden.v1v3v3.garden.units');
goog.require('re_frame.trace');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('day8.re_frame.trace.common_styles');
day8.re_frame.trace.view.container.triangle_down = "<svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<title>Polygon</title>\n<desc>Created using Figma</desc>\n<g id=\"Canvas\" transform=\"translate(-2344 -40)\">\n<g id=\"Polygon\">\n<use xlink:href=\"%23path0_fill\" transform=\"matrix(-1 9.54098e-18 -9.54098e-18 -1 2356 47)\" fill=\"%236EC0E6\"/>\n</g>\n</g>\n<defs>\n<path id=\"path0_fill\" d=\"M 6.05481 0L 12 7L 0 7L 6.05481 0Z\"/>\n</defs>\n</svg>\n";
day8.re_frame.trace.view.container.tab_button = (function day8$re_frame$trace$view$container$tab_button(panel_id,title){
var selected_tab = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-8px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tab button bm-heading-text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,selected_tab,panel_id))?"active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),panel_id], null));
});})(selected_tab))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["data:image/svg+xml;utf8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.view.container.triangle_down)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core._EQ_.call(null,selected_tab,panel_id))?"1":"0")], null)], null)], null)], null)], null);
});
day8.re_frame.trace.view.container.open_external = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"15 15 70 70\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\"><g fill=\"white\" transform=\"rotate(-45, 50, 50)\"><path d=\"M50.015,82.6c8.352,0,16.704-3.179,23.062-9.537c0.977-0.976,0.977-2.559,0-3.535s-2.559-0.977-3.535,0  c-10.769,10.766-28.287,10.765-39.054,0c-10.767-10.768-10.767-28.287,0-39.055c10.768-10.766,28.286-10.766,39.054,0  c0.977,0.977,2.559,0.977,3.535,0s0.977-2.56,0-3.535c-12.717-12.717-33.408-12.717-46.124,0c-12.717,12.717-12.717,33.408,0,46.125  C33.311,79.421,41.663,82.6,50.015,82.6z\"/><path d=\"M94.37,48.229c-0.002-0.002-0.003-0.002-0.005-0.004L83.725,37.585c-0.977-0.977-2.559-0.977-3.535,0s-0.977,2.559,0,3.535  l6.38,6.38H57.063c-1.03-2.903-3.792-4.985-7.048-4.985c-4.134,0-7.485,3.351-7.485,7.485c0,4.134,3.351,7.485,7.485,7.485  c3.256,0,6.018-2.082,7.048-4.985h29.506l-6.38,6.38c-0.977,0.977-0.977,2.559,0,3.535c0.488,0.488,1.128,0.732,1.768,0.732  s1.279-0.244,1.768-0.732L96.14,50l-1.765-1.765C94.373,48.233,94.372,48.231,94.37,48.229z\"/></g></svg>\n";
day8.re_frame.trace.view.container.settings_svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 164 164\" xml:space=\"preserve\">\n    <path fill=\"white\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M81.84,164c-15.38,0-29.768-4.246-42.059-11.625L77.6,114.557  c34.776,10.805,55.768-19.881,43.504-49.777L99.648,86.235C85.9,100.154,65.377,79.619,79.119,65.877l21.541-21.542  c-25.989-15.371-63.361,9.68-50.728,44.244l-37.29,37.289C4.638,113.223,0,98.233,0,82.16C0,36.961,36.641,0.32,81.84,0.32  c45.199,0,81.839,36.641,81.839,81.84S127.039,164,81.84,164z\"/>\n</svg>\n";
day8.re_frame.trace.view.container.orange_settings_svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 164 164\" xml:space=\"preserve\">\n    <path fill=\"%23F2994A\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M81.84,164c-15.38,0-29.768-4.246-42.059-11.625L77.6,114.557  c34.776,10.805,55.768-19.881,43.504-49.777L99.648,86.235C85.9,100.154,65.377,79.619,79.119,65.877l21.541-21.542  c-25.989-15.371-63.361,9.68-50.728,44.244l-37.29,37.289C4.638,113.223,0,98.233,0,82.16C0,36.961,36.641,0.32,81.84,0.32  c45.199,0,81.839,36.641,81.839,81.84S127.039,164,81.84,164z\"/>\n</svg>\n";
day8.re_frame.trace.view.container.pause_svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" data-name=\"Layer 1\" viewBox=\"15 15 70 70\" x=\"0px\" y=\"0px\"><title>13</title><g fill=\"white\" data-name=\"Group\"><path data-name=\"Path\" d=\"M41.79,35.26a2,2,0,0,0-2,2V62.74a2,2,0,1,0,4,0V37.26A2,2,0,0,0,41.79,35.26Z\"/><path data-name=\"Path\" d=\"M58.21,35.26a2,2,0,0,0-2,2V62.74a2,2,0,1,0,4,0V37.26A2,2,0,0,0,58.21,35.26Z\"/><path data-name=\"Compound Path\" d=\"M50,18.44A31.56,31.56,0,1,0,81.56,50,31.6,31.6,0,0,0,50,18.44Zm0,59.12A27.56,27.56,0,1,1,77.56,50,27.59,27.59,0,0,1,50,77.56Z\"/></g></svg>\n";
day8.re_frame.trace.view.container.play_svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" data-name=\"Layer 1\" viewBox=\"15 15 70 70\" x=\"0px\" y=\"0px\">\n    <title>13</title>\n    <g fill=\"%23F2994A\" data-name=\"Group\">\n        <path data-name=\"Compound Path\" d=\"M40.78,67.37,67.55,50,40.78,32.63Zm4-27.38L60.2,50,44.78,60Z\"/>\n        <path data-name=\"Compound Path\"\n              d=\"M50,18.44A31.56,31.56,0,1,0,81.56,50,31.6,31.6,0,0,0,50,18.44Zm0,59.12A27.56,27.56,0,1,1,77.56,50,27.59,27.59,0,0,1,50,77.56Z\"/>\n    </g>\n</svg>\n";
day8.re_frame.trace.view.container.outer_margins = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),["0px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.common_styles.gs_19s)].join('')], null);
day8.re_frame.trace.view.container.right_hand_buttons = (function day8$re_frame$trace$view$container$right_hand_buttons(external_window_QMARK_){
var selected_tab = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null));
var paused_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","paused?","settings/paused?",611315548)], null));
var showing_settings_QMARK_ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_tab),new cljs.core.Keyword(null,"settings","settings",1556144875));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((showing_settings_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bm-active-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,paused_QMARK_,showing_settings_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698)], null));
});})(selected_tab,paused_QMARK_,showing_settings_QMARK_))
], null),"Done"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,paused_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-icon.noselect","img.nav-icon.noselect",35228664),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Play",new cljs.core.Keyword(null,"src","src",-1651076051),["data:image/svg+xml;utf8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.view.container.play_svg)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,paused_QMARK_,showing_settings_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","play","settings/play",870988221)], null));
});})(selected_tab,paused_QMARK_,showing_settings_QMARK_))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-icon.noselect","img.nav-icon.noselect",35228664),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Pause",new cljs.core.Keyword(null,"src","src",-1651076051),["data:image/svg+xml;utf8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.view.container.pause_svg)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,paused_QMARK_,showing_settings_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null));
});})(selected_tab,paused_QMARK_,showing_settings_QMARK_))
], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-icon.noselect","img.nav-icon.noselect",35228664),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Settings",new cljs.core.Keyword(null,"src","src",-1651076051),["data:image/svg+xml;utf8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((showing_settings_QMARK_)?day8.re_frame.trace.view.container.orange_settings_svg:day8.re_frame.trace.view.container.settings_svg))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,paused_QMARK_,showing_settings_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698)], null));
});})(selected_tab,paused_QMARK_,showing_settings_QMARK_))
], null)], null),(cljs.core.truth_(external_window_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.nav-icon.active.noselect","img.nav-icon.active.noselect",-1420524896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Pop out",new cljs.core.Keyword(null,"src","src",-1651076051),["data:image/svg+xml;utf8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame.trace.view.container.open_external)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_tab,paused_QMARK_,showing_settings_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null));
});})(selected_tab,paused_QMARK_,showing_settings_QMARK_))
], null)], null))], null)], null);
});
day8.re_frame.trace.view.container.settings_header = (function day8$re_frame$trace$view$container$settings_header(external_window_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame.trace.common_styles.gs_12s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.label,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-title-text",new cljs.core.Keyword(null,"label","label",1718410804),"Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame.trace.common_styles.gs_12s], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px",new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame.trace.common_styles.sidebar_heading_divider_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame.trace.common_styles.gs_12s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.container.right_hand_buttons,external_window_QMARK_], null)], null);
});
day8.re_frame.trace.view.container.standard_header = (function day8$re_frame$trace$view$container$standard_header(external_window_QMARK_){
var current_event = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104)], null)));
var older_epochs_available_QMARK_ = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335)], null)));
var newer_epochs_available_QMARK_ = cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame.trace.common_styles.gs_12s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow","span.arrow",1996640986),(cljs.core.truth_(older_epochs_available_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_event,older_epochs_available_QMARK_,newer_epochs_available_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","previous-epoch","epochs/previous-epoch",480286026)], null));
});})(current_event,older_epochs_available_QMARK_,newer_epochs_available_QMARK_))
], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"arrow__disabled"], null)),"\u25C0"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"42px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.event-header","span.event-header",19734397),cljs.core.subs.call(null,cljs.core.prn_str.call(null,current_event),(0),(400))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow","span.arrow",1996640986),(cljs.core.truth_(newer_epochs_available_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_event,older_epochs_available_QMARK_,newer_epochs_available_QMARK_){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","next-epoch","epochs/next-epoch",-1703589978)], null));
});})(current_event,older_epochs_available_QMARK_,newer_epochs_available_QMARK_))
], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"arrow__disabled"], null)),"\u25B6"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame.trace.common_styles.gs_12s], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px",new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame.trace.common_styles.sidebar_heading_divider_color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.container.right_hand_buttons,external_window_QMARK_], null)], null);
});
day8.re_frame.trace.view.container.devtools_inner = (function day8$re_frame$trace$view$container$devtools_inner(opts){
var selected_tab = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null));
var panel_type = new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095).cljs$core$IFn$_invoke$arity$1(opts);
var external_window_QMARK_ = cljs.core._EQ_.call(null,panel_type,new cljs.core.Keyword(null,"popup","popup",635890211));
var unloading_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001)], null));
var showing_settings_QMARK_ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_tab),new cljs.core.Keyword(null,"settings","settings",1556144875));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content","div.panel-content",-1191526548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame.trace.common_styles.standard_background_color], null)], null),((showing_settings_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"panel-content-top nav",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 19px"], null),new cljs.core.Keyword(null,"children","children",-940561982),day8.re_frame.trace.view.container.settings_header.call(null,external_window_QMARK_)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"panel-content-top nav",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 19px"], null),new cljs.core.Keyword(null,"children","children",-940561982),day8.re_frame.trace.view.container.standard_header.call(null,external_window_QMARK_)], null)),((showing_settings_QMARK_)?null:new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"panel-content-tabs",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"7px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.container.tab_button.call(null,new cljs.core.Keyword(null,"event","event",301435442),"Event"),day8.re_frame.trace.view.container.tab_button.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),"app-db"),day8.re_frame.trace.view.container.tab_button.call(null,new cljs.core.Keyword(null,"subs","subs",-186681991),"Subs"),day8.re_frame.trace.view.container.tab_button.call(null,new cljs.core.Keyword(null,"traces","traces",-1301138004),"Trace"),day8.re_frame.trace.view.container.tab_button.call(null,new cljs.core.Keyword(null,"timing","timing",-1849225195),"Timing"),(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts))?day8.re_frame.trace.view.container.tab_button.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Debug"):null)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.line,new cljs.core.Keyword(null,"color","color",1011675173),"#EEEEEE"], null),(cljs.core.truth_((function (){var and__28411__auto__ = external_window_QMARK_;
if(and__28411__auto__){
return cljs.core.deref.call(null,unloading_QMARK_);
} else {
return and__28411__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.host-closed","h1.host-closed",-376024389),"Host window has closed. Reopen external window to continue tracing."], null):null),((re_frame.trace.is_trace_enabled_QMARK_.call(null))?null:new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.host-closed","h1.host-closed",-376024389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),"break-word"], null)], null),"Tracing is not enabled. Please set ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"{\"re_frame.trace.trace_enabled_QMARK_\" true}"], null)," in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),":closure-defines"], null)], null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame.trace.common_styles.gs_19s,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"debug","debug",-1608172596),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"timing","timing",-1849225195),null,new cljs.core.Keyword(null,"subs","subs",-186681991),null], null), null),cljs.core.deref.call(null,selected_tab)))?"auto":"initial")], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45868 = cljs.core.deref.call(null,selected_tab);
var G__45868__$1 = (((G__45868 instanceof cljs.core.Keyword))?G__45868.fqn:null);
switch (G__45868__$1) {
case "event":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.event.render], null);

break;
case "app-db":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.app_db.render,re_frame.db.app_db], null);

break;
case "subs":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.subs.render], null);

break;
case "views":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.views.render], null);

break;
case "traces":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.traces.render], null);

break;
case "timing":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.timing.render], null);

break;
case "debug":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.debug.render], null);

break;
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.settings.render], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.app_db.render,re_frame.db.app_db], null);

}
})()], null)], null)], null);
});

//# sourceMappingURL=container.js.map?rel=1518440290535
