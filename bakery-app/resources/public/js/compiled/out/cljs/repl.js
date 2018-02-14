// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31019){
var map__31020 = p__31019;
var map__31020__$1 = ((((!((map__31020 == null)))?((((map__31020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31020):map__31020);
var m = map__31020__$1;
var n = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31022_31044 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31023_31045 = null;
var count__31024_31046 = (0);
var i__31025_31047 = (0);
while(true){
if((i__31025_31047 < count__31024_31046)){
var f_31048 = cljs.core._nth.call(null,chunk__31023_31045,i__31025_31047);
cljs.core.println.call(null,"  ",f_31048);

var G__31049 = seq__31022_31044;
var G__31050 = chunk__31023_31045;
var G__31051 = count__31024_31046;
var G__31052 = (i__31025_31047 + (1));
seq__31022_31044 = G__31049;
chunk__31023_31045 = G__31050;
count__31024_31046 = G__31051;
i__31025_31047 = G__31052;
continue;
} else {
var temp__4657__auto___31053 = cljs.core.seq.call(null,seq__31022_31044);
if(temp__4657__auto___31053){
var seq__31022_31054__$1 = temp__4657__auto___31053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31022_31054__$1)){
var c__29262__auto___31055 = cljs.core.chunk_first.call(null,seq__31022_31054__$1);
var G__31056 = cljs.core.chunk_rest.call(null,seq__31022_31054__$1);
var G__31057 = c__29262__auto___31055;
var G__31058 = cljs.core.count.call(null,c__29262__auto___31055);
var G__31059 = (0);
seq__31022_31044 = G__31056;
chunk__31023_31045 = G__31057;
count__31024_31046 = G__31058;
i__31025_31047 = G__31059;
continue;
} else {
var f_31060 = cljs.core.first.call(null,seq__31022_31054__$1);
cljs.core.println.call(null,"  ",f_31060);

var G__31061 = cljs.core.next.call(null,seq__31022_31054__$1);
var G__31062 = null;
var G__31063 = (0);
var G__31064 = (0);
seq__31022_31044 = G__31061;
chunk__31023_31045 = G__31062;
count__31024_31046 = G__31063;
i__31025_31047 = G__31064;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31065 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28423__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31065);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31065)))?cljs.core.second.call(null,arglists_31065):arglists_31065));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31026_31066 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31027_31067 = null;
var count__31028_31068 = (0);
var i__31029_31069 = (0);
while(true){
if((i__31029_31069 < count__31028_31068)){
var vec__31030_31070 = cljs.core._nth.call(null,chunk__31027_31067,i__31029_31069);
var name_31071 = cljs.core.nth.call(null,vec__31030_31070,(0),null);
var map__31033_31072 = cljs.core.nth.call(null,vec__31030_31070,(1),null);
var map__31033_31073__$1 = ((((!((map__31033_31072 == null)))?((((map__31033_31072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31033_31072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31033_31072):map__31033_31072);
var doc_31074 = cljs.core.get.call(null,map__31033_31073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31075 = cljs.core.get.call(null,map__31033_31073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31071);

cljs.core.println.call(null," ",arglists_31075);

if(cljs.core.truth_(doc_31074)){
cljs.core.println.call(null," ",doc_31074);
} else {
}

var G__31076 = seq__31026_31066;
var G__31077 = chunk__31027_31067;
var G__31078 = count__31028_31068;
var G__31079 = (i__31029_31069 + (1));
seq__31026_31066 = G__31076;
chunk__31027_31067 = G__31077;
count__31028_31068 = G__31078;
i__31029_31069 = G__31079;
continue;
} else {
var temp__4657__auto___31080 = cljs.core.seq.call(null,seq__31026_31066);
if(temp__4657__auto___31080){
var seq__31026_31081__$1 = temp__4657__auto___31080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31026_31081__$1)){
var c__29262__auto___31082 = cljs.core.chunk_first.call(null,seq__31026_31081__$1);
var G__31083 = cljs.core.chunk_rest.call(null,seq__31026_31081__$1);
var G__31084 = c__29262__auto___31082;
var G__31085 = cljs.core.count.call(null,c__29262__auto___31082);
var G__31086 = (0);
seq__31026_31066 = G__31083;
chunk__31027_31067 = G__31084;
count__31028_31068 = G__31085;
i__31029_31069 = G__31086;
continue;
} else {
var vec__31035_31087 = cljs.core.first.call(null,seq__31026_31081__$1);
var name_31088 = cljs.core.nth.call(null,vec__31035_31087,(0),null);
var map__31038_31089 = cljs.core.nth.call(null,vec__31035_31087,(1),null);
var map__31038_31090__$1 = ((((!((map__31038_31089 == null)))?((((map__31038_31089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31038_31089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31038_31089):map__31038_31089);
var doc_31091 = cljs.core.get.call(null,map__31038_31090__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31092 = cljs.core.get.call(null,map__31038_31090__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31088);

cljs.core.println.call(null," ",arglists_31092);

if(cljs.core.truth_(doc_31091)){
cljs.core.println.call(null," ",doc_31091);
} else {
}

var G__31093 = cljs.core.next.call(null,seq__31026_31081__$1);
var G__31094 = null;
var G__31095 = (0);
var G__31096 = (0);
seq__31026_31066 = G__31093;
chunk__31027_31067 = G__31094;
count__31028_31068 = G__31095;
i__31029_31069 = G__31096;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__31040 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31041 = null;
var count__31042 = (0);
var i__31043 = (0);
while(true){
if((i__31043 < count__31042)){
var role = cljs.core._nth.call(null,chunk__31041,i__31043);
var temp__4657__auto___31097__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31097__$1)){
var spec_31098 = temp__4657__auto___31097__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31098));
} else {
}

var G__31099 = seq__31040;
var G__31100 = chunk__31041;
var G__31101 = count__31042;
var G__31102 = (i__31043 + (1));
seq__31040 = G__31099;
chunk__31041 = G__31100;
count__31042 = G__31101;
i__31043 = G__31102;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31040);
if(temp__4657__auto____$1){
var seq__31040__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31040__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__31040__$1);
var G__31103 = cljs.core.chunk_rest.call(null,seq__31040__$1);
var G__31104 = c__29262__auto__;
var G__31105 = cljs.core.count.call(null,c__29262__auto__);
var G__31106 = (0);
seq__31040 = G__31103;
chunk__31041 = G__31104;
count__31042 = G__31105;
i__31043 = G__31106;
continue;
} else {
var role = cljs.core.first.call(null,seq__31040__$1);
var temp__4657__auto___31107__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31107__$2)){
var spec_31108 = temp__4657__auto___31107__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31108));
} else {
}

var G__31109 = cljs.core.next.call(null,seq__31040__$1);
var G__31110 = null;
var G__31111 = (0);
var G__31112 = (0);
seq__31040 = G__31109;
chunk__31041 = G__31110;
count__31042 = G__31111;
i__31043 = G__31112;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1518581462062
