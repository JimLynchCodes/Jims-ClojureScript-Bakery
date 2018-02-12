// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.metamorphic');
goog.require('day8.re_frame.trace.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","root","settings/root",-1329120290),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"settings","settings",1556144875));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","paused?","settings/paused?",611315548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(settings);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","root","app-db/root",-1721368731),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null),(function (trace,_){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null),(function (trace,_){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.map.call(null,(function (p1__46866_SHARP_){
return cljs.core.assoc.call(null,cljs.core.val.call(null,p1__46866_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key.call(null,p1__46866_SHARP_));
}),cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null),(function (expansions,p__46867){
var vec__46868 = p__46867;
var _ = cljs.core.nth.call(null,vec__46868,(0),null);
var path = cljs.core.nth.call(null,vec__46868,(1),null);
return cljs.core.contains_QMARK_.call(null,expansions,path);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946),(function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647),(function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","categories","traces/categories",-821318016),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null),(function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null),(function (traces,_){
return cljs.core.count.call(null,traces);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null),(function (p__46871,_){
var vec__46872 = p__46871;
var traces = cljs.core.nth.call(null,vec__46872,(0),null);
var beginning = cljs.core.nth.call(null,vec__46872,(1),null);
var ending = cljs.core.nth.call(null,vec__46872,(2),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,day8.re_frame.trace.utils.utils.id_between_xf.call(null,beginning,ending),traces);
}));
day8.re_frame.trace.subs.filter_ignored_views = (function day8$re_frame$trace$subs$filter_ignored_views(p__46875,_){
var vec__46876 = p__46875;
var traces = cljs.core.nth.call(null,vec__46876,(0),null);
var filtered_views = cljs.core.nth.call(null,vec__46876,(1),null);
var munged_ns = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (munged_ns,vec__46876,traces,filtered_views){
return (function (trace){
var and__28411__auto__ = day8.re_frame.trace.metamorphic.render_QMARK_.call(null,trace);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.contains_QMARK_.call(null,munged_ns,cljs.core.subs.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")));
} else {
return and__28411__auto__;
}
});})(munged_ns,vec__46876,traces,filtered_views))
),traces);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null),day8.re_frame.trace.subs.filter_ignored_views);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null),day8.re_frame.trace.subs.filter_ignored_views);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null),(function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517),(function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null),(function (snapshot,_){
return cljs.core.contains_QMARK_.call(null,snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597),(function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null),(function (p__46879,_){
var vec__46880 = p__46879;
var epochs = cljs.core.nth.call(null,vec__46880,(0),null);
var match_ids = cljs.core.nth.call(null,vec__46880,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first.call(null,match_ids)))?cljs.core.first.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last.call(null,match_ids)))?cljs.core.last.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.call(null,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null),(function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (match,_){
return day8.re_frame.trace.metamorphic.matched_event.call(null,match);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null),(function (trace,_){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs,_){
return cljs.core.count.call(null,cljs.core.get.call(null,epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null),(function (p__46883){
var vec__46884 = p__46883;
var current = cljs.core.nth.call(null,vec__46884,(0),null);
var ids = cljs.core.nth.call(null,vec__46884,(1),null);
return (((1) < cljs.core.count.call(null,ids))) && (((current == null)) || ((current > cljs.core.nth.call(null,ids,(0)))));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null),(function (p__46887){
var vec__46888 = p__46887;
var current = cljs.core.nth.call(null,vec__46888,(0),null);
var ids = cljs.core.nth.call(null,vec__46888,(1),null);
return (((1) < cljs.core.count.call(null,ids))) && (!((current == null))) && ((current < day8.re_frame.trace.utils.utils.last_in_vec.call(null,ids)));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
var start_of_epoch = cljs.core.nth.call(null,traces,(0));
var end_of_epoch = day8.re_frame.trace.utils.utils.last_in_vec.call(null,traces);
return day8.re_frame.trace.metamorphic.elapsed_time.call(null,start_of_epoch,end_of_epoch);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
return cljs.core.filter.call(null,(function (p1__46891_SHARP_){
var or__28423__auto__ = day8.re_frame.trace.metamorphic.request_animation_frame_QMARK_.call(null,p1__46891_SHARP_);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return day8.re_frame.trace.metamorphic.request_animation_frame_end_QMARK_.call(null,p1__46891_SHARP_);
}
}),traces);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null),(function (frame_traces){
return cljs.core.count.call(null,cljs.core.filter.call(null,day8.re_frame.trace.metamorphic.request_animation_frame_QMARK_,frame_traces));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null),(function (frame_traces,p__46892){
var vec__46893 = p__46892;
var _ = cljs.core.nth.call(null,vec__46893,(0),null);
var frame_number = cljs.core.nth.call(null,vec__46893,(1),null);
var frames = cljs.core.partition.call(null,(2),frame_traces);
var vec__46896 = cljs.core.first.call(null,cljs.core.drop.call(null,(frame_number - (1)),frames));
var start = cljs.core.nth.call(null,vec__46896,(0),null);
var end = cljs.core.nth.call(null,vec__46896,(1),null);
return day8.re_frame.trace.metamorphic.elapsed_time.call(null,start,end);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null),(function (match){
return cljs.core.get_in.call(null,match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
var start_of_render = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame.trace.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame.trace.utils.utils.last_in_vec.call(null,traces);
return day8.re_frame.trace.metamorphic.elapsed_time.call(null,start_of_render,end_of_epoch);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
return !(cljs.core.empty_QMARK_.call(null,traces));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","root","subs/root",-432796018),(function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
return cljs.core.filter.call(null,day8.re_frame.trace.metamorphic.subscription_QMARK_,traces);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null),(function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
}));
day8.re_frame.trace.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__46899_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,p1__46899_SHARP_));
})], null),null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame.trace.subs","string!","day8.re-frame.trace.subs/string!",-452564170,null),day8.re_frame.trace.subs.string_BANG_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame.trace.subs","string!","day8.re-frame.trace.subs/string!",-452564170,null),day8.re_frame.trace.subs.string_BANG_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__46900){
return cljs.core.coll_QMARK_.call(null,G__46900);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame.trace.subs","string!","day8.re-frame.trace.subs/string!",-452564170,null),day8.re_frame.trace.subs.string_BANG_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__46901){
return cljs.core.map_QMARK_.call(null,G__46901);
}),(function (G__46901){
return cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__46901){
return cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__46901){
return cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__46901){
return cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__46901){
return cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__46901){
return cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__46901){
return (cljs.core.map_QMARK_.call(null,G__46901)) && (cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_.call(null,G__46901,new cljs.core.Keyword(null,"path","path",-188191168)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__46902){
return cljs.core.coll_QMARK_.call(null,G__46902);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame.trace.subs.sub_type_value = (function day8$re_frame$trace$subs$sub_type_value(sub_type){
var G__46903 = sub_type;
var G__46903__$1 = (((G__46903 instanceof cljs.core.Keyword))?G__46903.fqn:null);
switch (G__46903__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame.trace.subs.accumulate_sub_value = (function day8$re_frame$trace$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,order__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var sub_type = temp__4655__auto__;
var G__46905 = (exp - (1));
var G__46906 = (total + (day8.re_frame.trace.subs.sub_type_value.call(null,sub_type) * Math.pow((10),exp)));
var G__46907 = cljs.core.rest.call(null,order__$1);
exp = G__46905;
total = G__46906;
order__$1 = G__46907;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame.trace.subs.accumulate_sub_value_memoized = cljs.core.memoize.call(null,day8.re_frame.trace.subs.accumulate_sub_value);
day8.re_frame.trace.subs.sub_sort_val = (function day8$re_frame$trace$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare.call(null,day8.re_frame.trace.subs.accumulate_sub_value_memoized.call(null,order_y),day8.re_frame.trace.subs.accumulate_sub_value_memoized.call(null,order_x));
});
day8.re_frame.trace.subs.sub_op_type__GT_type = (function day8$re_frame$trace$subs$sub_op_type__GT_type(t){
var G__46908 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__46908__$1 = (((G__46908 instanceof cljs.core.Keyword))?G__46908.fqn:null);
switch (G__46908__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame.trace.subs.prepare_pod_info = (function day8$re_frame$trace$subs$prepare_pod_info(p__46910,p__46911){
var vec__46912 = p__46910;
var sub_info = cljs.core.nth.call(null,vec__46912,(0),null);
var sub_state = cljs.core.nth.call(null,vec__46912,(1),null);
var vec__46915 = p__46911;
var subscription = cljs.core.nth.call(null,vec__46915,(0),null);
var remove_fn = ((cljs.core._EQ_.call(null,subscription,new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716)))?((function (vec__46912,sub_info,sub_state,vec__46915,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,me)) == null);
});})(vec__46912,sub_info,sub_state,vec__46915,subscription))
:cljs.core.constantly.call(null,false));
var subx = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame.trace.subs.sub_sort_val,cljs.core.map.call(null,((function (remove_fn,vec__46912,sub_info,sub_state,vec__46915,subscription){
return (function (me){
var state = cljs.core.val.call(null,me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key.call(null,me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key.call(null,me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.call(null,sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.call(null,subscription__$1),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__28423__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.call(null,sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.call(null,sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__46912,sub_info,sub_state,vec__46915,subscription))
,cljs.core.remove.call(null,remove_fn,sub_state)));
return subx;
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null),(function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null),(function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null),day8.re_frame.trace.subs.prepare_pod_info);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null),day8.re_frame.trace.subs.prepare_pod_info);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null),(function (p__46918){
var vec__46919 = p__46918;
var all_subs = cljs.core.nth.call(null,vec__46919,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.call(null,vec__46919,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.call(null,day8.re_frame.trace.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null),(function (subs,_){
return cljs.core.frequencies.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),subs));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null),(function (subs){
return cljs.core.count.call(null,cljs.core.filter.call(null,day8.re_frame.trace.metamorphic.unchanged_l2_subscription_QMARK_,subs));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null),(function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null),(function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
}));

//# sourceMappingURL=subs.js.map?rel=1518440294268
