// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38671){
var map__38672 = p__38671;
var map__38672__$1 = ((((!((map__38672 == null)))?((((map__38672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38672):map__38672);
var m = map__38672__$1;
var n = cljs.core.get.call(null,map__38672__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38674_38696 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38675_38697 = null;
var count__38676_38698 = (0);
var i__38677_38699 = (0);
while(true){
if((i__38677_38699 < count__38676_38698)){
var f_38700 = cljs.core._nth.call(null,chunk__38675_38697,i__38677_38699);
cljs.core.println.call(null,"  ",f_38700);

var G__38701 = seq__38674_38696;
var G__38702 = chunk__38675_38697;
var G__38703 = count__38676_38698;
var G__38704 = (i__38677_38699 + (1));
seq__38674_38696 = G__38701;
chunk__38675_38697 = G__38702;
count__38676_38698 = G__38703;
i__38677_38699 = G__38704;
continue;
} else {
var temp__4657__auto___38705 = cljs.core.seq.call(null,seq__38674_38696);
if(temp__4657__auto___38705){
var seq__38674_38706__$1 = temp__4657__auto___38705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38674_38706__$1)){
var c__29262__auto___38707 = cljs.core.chunk_first.call(null,seq__38674_38706__$1);
var G__38708 = cljs.core.chunk_rest.call(null,seq__38674_38706__$1);
var G__38709 = c__29262__auto___38707;
var G__38710 = cljs.core.count.call(null,c__29262__auto___38707);
var G__38711 = (0);
seq__38674_38696 = G__38708;
chunk__38675_38697 = G__38709;
count__38676_38698 = G__38710;
i__38677_38699 = G__38711;
continue;
} else {
var f_38712 = cljs.core.first.call(null,seq__38674_38706__$1);
cljs.core.println.call(null,"  ",f_38712);

var G__38713 = cljs.core.next.call(null,seq__38674_38706__$1);
var G__38714 = null;
var G__38715 = (0);
var G__38716 = (0);
seq__38674_38696 = G__38713;
chunk__38675_38697 = G__38714;
count__38676_38698 = G__38715;
i__38677_38699 = G__38716;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38717 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28423__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38717);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38717)))?cljs.core.second.call(null,arglists_38717):arglists_38717));
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
var seq__38678_38718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38679_38719 = null;
var count__38680_38720 = (0);
var i__38681_38721 = (0);
while(true){
if((i__38681_38721 < count__38680_38720)){
var vec__38682_38722 = cljs.core._nth.call(null,chunk__38679_38719,i__38681_38721);
var name_38723 = cljs.core.nth.call(null,vec__38682_38722,(0),null);
var map__38685_38724 = cljs.core.nth.call(null,vec__38682_38722,(1),null);
var map__38685_38725__$1 = ((((!((map__38685_38724 == null)))?((((map__38685_38724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38685_38724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38685_38724):map__38685_38724);
var doc_38726 = cljs.core.get.call(null,map__38685_38725__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38727 = cljs.core.get.call(null,map__38685_38725__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38723);

cljs.core.println.call(null," ",arglists_38727);

if(cljs.core.truth_(doc_38726)){
cljs.core.println.call(null," ",doc_38726);
} else {
}

var G__38728 = seq__38678_38718;
var G__38729 = chunk__38679_38719;
var G__38730 = count__38680_38720;
var G__38731 = (i__38681_38721 + (1));
seq__38678_38718 = G__38728;
chunk__38679_38719 = G__38729;
count__38680_38720 = G__38730;
i__38681_38721 = G__38731;
continue;
} else {
var temp__4657__auto___38732 = cljs.core.seq.call(null,seq__38678_38718);
if(temp__4657__auto___38732){
var seq__38678_38733__$1 = temp__4657__auto___38732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38678_38733__$1)){
var c__29262__auto___38734 = cljs.core.chunk_first.call(null,seq__38678_38733__$1);
var G__38735 = cljs.core.chunk_rest.call(null,seq__38678_38733__$1);
var G__38736 = c__29262__auto___38734;
var G__38737 = cljs.core.count.call(null,c__29262__auto___38734);
var G__38738 = (0);
seq__38678_38718 = G__38735;
chunk__38679_38719 = G__38736;
count__38680_38720 = G__38737;
i__38681_38721 = G__38738;
continue;
} else {
var vec__38687_38739 = cljs.core.first.call(null,seq__38678_38733__$1);
var name_38740 = cljs.core.nth.call(null,vec__38687_38739,(0),null);
var map__38690_38741 = cljs.core.nth.call(null,vec__38687_38739,(1),null);
var map__38690_38742__$1 = ((((!((map__38690_38741 == null)))?((((map__38690_38741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38690_38741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38690_38741):map__38690_38741);
var doc_38743 = cljs.core.get.call(null,map__38690_38742__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38744 = cljs.core.get.call(null,map__38690_38742__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38740);

cljs.core.println.call(null," ",arglists_38744);

if(cljs.core.truth_(doc_38743)){
cljs.core.println.call(null," ",doc_38743);
} else {
}

var G__38745 = cljs.core.next.call(null,seq__38678_38733__$1);
var G__38746 = null;
var G__38747 = (0);
var G__38748 = (0);
seq__38678_38718 = G__38745;
chunk__38679_38719 = G__38746;
count__38680_38720 = G__38747;
i__38681_38721 = G__38748;
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

var seq__38692 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38693 = null;
var count__38694 = (0);
var i__38695 = (0);
while(true){
if((i__38695 < count__38694)){
var role = cljs.core._nth.call(null,chunk__38693,i__38695);
var temp__4657__auto___38749__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38749__$1)){
var spec_38750 = temp__4657__auto___38749__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38750));
} else {
}

var G__38751 = seq__38692;
var G__38752 = chunk__38693;
var G__38753 = count__38694;
var G__38754 = (i__38695 + (1));
seq__38692 = G__38751;
chunk__38693 = G__38752;
count__38694 = G__38753;
i__38695 = G__38754;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38692);
if(temp__4657__auto____$1){
var seq__38692__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38692__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__38692__$1);
var G__38755 = cljs.core.chunk_rest.call(null,seq__38692__$1);
var G__38756 = c__29262__auto__;
var G__38757 = cljs.core.count.call(null,c__29262__auto__);
var G__38758 = (0);
seq__38692 = G__38755;
chunk__38693 = G__38756;
count__38694 = G__38757;
i__38695 = G__38758;
continue;
} else {
var role = cljs.core.first.call(null,seq__38692__$1);
var temp__4657__auto___38759__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38759__$2)){
var spec_38760 = temp__4657__auto___38759__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38760));
} else {
}

var G__38761 = cljs.core.next.call(null,seq__38692__$1);
var G__38762 = null;
var G__38763 = (0);
var G__38764 = (0);
seq__38692 = G__38761;
chunk__38693 = G__38762;
count__38694 = G__38763;
i__38695 = G__38764;
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

//# sourceMappingURL=repl.js.map?rel=1518440267332
