// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.garden.v1v3v3.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.color');
goog.require('mranderson047.garden.v1v3v3.garden.compression');
goog.require('mranderson047.garden.v1v3v3.garden.selectors');
goog.require('mranderson047.garden.v1v3v3.garden.units');
goog.require('mranderson047.garden.v1v3v3.garden.util');
goog.require('mranderson047.garden.v1v3v3.garden.types');
/**
 * The current compiler flags.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__29632__auto___45313 = (function (){
mranderson047.garden.v1v3v3.garden.compiler.with_selector_context = (function mranderson047$garden$v1v3v3$garden$compiler$with_selector_context(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45314 = arguments.length;
var i__29593__auto___45315 = (0);
while(true){
if((i__29593__auto___45315 < len__29592__auto___45314)){
args__29599__auto__.push((arguments[i__29593__auto___45315]));

var G__45316 = (i__29593__auto___45315 + (1));
i__29593__auto___45315 = G__45316;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__29285__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mranderson047.garden.v1v3v3.garden.compiler","*selector-context*","mranderson047.garden.v1v3v3.garden.compiler/*selector-context*",-1281209688,null)),(function (){var x__29285__auto__ = selector_context;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})(),(function (){var x__29285__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})())));
});

mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq45309){
var G__45310 = cljs.core.first.call(null,seq45309);
var seq45309__$1 = cljs.core.next.call(null,seq45309);
var G__45311 = cljs.core.first.call(null,seq45309__$1);
var seq45309__$2 = cljs.core.next.call(null,seq45309__$1);
var G__45312 = cljs.core.first.call(null,seq45309__$2);
var seq45309__$3 = cljs.core.next.call(null,seq45309__$2);
return mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic(G__45310,G__45311,G__45312,seq45309__$3);
});

return null;
})()
;
mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__29632__auto___45321 = (function (){
mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context = (function mranderson047$garden$v1v3v3$garden$compiler$with_media_query_context(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45322 = arguments.length;
var i__29593__auto___45323 = (0);
while(true){
if((i__29593__auto___45323 < len__29592__auto___45322)){
args__29599__auto__.push((arguments[i__29593__auto___45323]));

var G__45324 = (i__29593__auto___45323 + (1));
i__29593__auto___45323 = G__45324;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__29285__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("mranderson047.garden.v1v3v3.garden.compiler","*media-query-context*","mranderson047.garden.v1v3v3.garden.compiler/*media-query-context*",150166342,null)),(function (){var x__29285__auto__ = selector_context;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})(),(function (){var x__29285__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})())));
});

mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq45317){
var G__45318 = cljs.core.first.call(null,seq45317);
var seq45317__$1 = cljs.core.next.call(null,seq45317);
var G__45319 = cljs.core.first.call(null,seq45317__$1);
var seq45317__$2 = cljs.core.next.call(null,seq45317__$1);
var G__45320 = cljs.core.first.call(null,seq45317__$2);
var seq45317__$3 = cljs.core.next.call(null,seq45317__$2);
return mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic(G__45318,G__45319,G__45320,seq45317__$3);
});

return null;
})()
;
mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
mranderson047.garden.v1v3v3.garden.compiler.vendors = (function mranderson047$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
mranderson047.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function mranderson047$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
mranderson047.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function mranderson047$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.compiler.auto_prefixed_properties.call(null),property);
});
mranderson047.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function mranderson047$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__28423__auto__ = mranderson047.garden.v1v3v3.garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
var or__28423__auto____$1 = mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__28423__auto____$1)){
return or__28423__auto____$1;
} else {
var or__28423__auto____$2 = mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__28423__auto____$2)){
return or__28423__auto____$2;
} else {
return mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
mranderson047.garden.v1v3v3.garden.compiler.divide_vec = (function mranderson047$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
mranderson047.garden.v1v3v3.garden.compiler.expand = (function mranderson047$garden$v1v3v3$garden$compiler$expand(this$){
if((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null)))){
return this$.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__29106__auto__ = (((this$ == null))?null:this$);
var m__29107__auto__ = (mranderson047.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,this$);
} else {
var m__29107__auto____$1 = (mranderson047.garden.v1v3v3.garden.compiler.expand["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
mranderson047.garden.v1v3v3.garden.compiler.expand_seqs = (function mranderson047$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,x);
} else {
var x__29285__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
}
}),coll);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function mranderson047$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_.call(null,declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__45325_SHARP_,p2__45326_SHARP_){
return mranderson047.garden.v1v3v3.garden.util.as_str.call(null,p1__45325_SHARP_,"-",p2__45326_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__45327){
var vec__45328 = p__45327;
var k = cljs.core.nth.call(null,vec__45328,(0),null);
var v = cljs.core.nth.call(null,vec__45328,(1),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__45328,k,v,prefix){
return (function (m1,p__45331){
var vec__45332 = p__45331;
var k1 = cljs.core.nth.call(null,vec__45332,(0),null);
var v1 = cljs.core.nth.call(null,vec__45332,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__45328,k,v,prefix))
,m,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,mranderson047.garden.v1v3v3.garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.empty.call(null,declaration),declaration);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_.call(null,declaration)){
return declaration;
} else {
return cljs.core.with_meta.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,declaration),cljs.core.meta.call(null,declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
mranderson047.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
mranderson047.garden.v1v3v3.garden.compiler.extract_reference = (function mranderson047$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__4657__auto__ = cljs.core.re_find.call(null,mranderson047.garden.v1v3v3.garden.compiler.parent_selector_re,mranderson047.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__4657__auto__)){
var reference = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_selector_reference = (function mranderson047$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__4655__auto__ = mranderson047.garden.v1v3v3.garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__4655__auto__)){
var reference = temp__4655__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),(function (){var x__29285__auto__ = mranderson047.garden.v1v3v3.garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
})());
} else {
return selector;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_selector = (function mranderson047$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,mranderson047.garden.v1v3v3.garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_rule = (function mranderson047$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__45335 = cljs.core.split_with.call(null,mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__45335,(0),null);
var children = cljs.core.nth.call(null,vec__45335,(1),null);
var selector__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand_selector.call(null,selector,mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,children);
var vec__45338 = mranderson047.garden.v1v3v3.garden.compiler.divide_vec.call(null,mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__45338,(0),null);
var xs = cljs.core.nth.call(null,vec__45338,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_45341 = mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,xs));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_45341;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,declarations)));
});
if(typeof mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined'){
} else {
mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__29378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mranderson047.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29382__auto__,method_table__29378__auto__,prefer_table__29379__auto__,method_cache__29380__auto__,cached_hierarchy__29381__auto__));
})();
}
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
var x__29285__auto__ = at_rule;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__45342){
var map__45343 = p__45342;
var map__45343__$1 = ((((!((map__45343 == null)))?((((map__45343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45343):map__45343);
var value = cljs.core.get.call(null,map__45343__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__45345 = value;
var map__45345__$1 = ((((!((map__45345 == null)))?((((map__45345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45345):map__45345);
var identifier = cljs.core.get.call(null,map__45345__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__45345__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
var x__29285__auto__ = (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),mranderson047.garden.v1v3v3.garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,frames)], null),null,null,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function mranderson047$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__4655__auto__ = mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,expression,mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__45347){
var map__45348 = p__45347;
var map__45348__$1 = ((((!((map__45348 == null)))?((((map__45348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45348):map__45348);
var value = cljs.core.get.call(null,map__45348__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__45350 = value;
var map__45350__$1 = ((((!((map__45350 == null)))?((((map__45350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45350):map__45350);
var media_queries = cljs.core.get.call(null,map__45350__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__45350__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_45355 = mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,rules)));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_45355;
}})();
var vec__45351 = mranderson047.garden.v1v3v3.garden.compiler.divide_vec.call(null,mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__45351,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__45351,(1),null);
return cljs.core.cons.call(null,(new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_stylesheet = (function mranderson047$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,xs)));
});
goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.IExpandable,"null",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.expand,"null",(function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29285__auto__ = this$__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
});

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29285__auto__ = mranderson047.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
});

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.IExpandable,"_",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.expand,"_",(function (this$){
var x__29285__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
}));

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29285__auto__ = mranderson047.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
});

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29285__auto__ = mranderson047.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29285__auto__ = this$__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto__);
});

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_css = (function mranderson047$garden$v1v3v3$garden$compiler$render_css(this$){
if((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null)))){
return this$.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__29106__auto__ = (((this$ == null))?null:this$);
var m__29107__auto__ = (mranderson047.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,this$);
} else {
var m__29107__auto____$1 = (mranderson047.garden.v1v3v3.garden.compiler.render_css["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

mranderson047.garden.v1v3v3.garden.compiler.comma = ", ";
mranderson047.garden.v1v3v3.garden.compiler.colon = ": ";
mranderson047.garden.v1v3v3.garden.compiler.semicolon = ";";
mranderson047.garden.v1v3v3.garden.compiler.l_brace = " {\n";
mranderson047.garden.v1v3v3.garden.compiler.r_brace = "\n}";
mranderson047.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
mranderson047.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
mranderson047.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
mranderson047.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.compiler.space_separated_list = (function mranderson047$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__45357 = arguments.length;
switch (G__45357) {
case 1:
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list = (function mranderson047$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__45360 = arguments.length;
switch (G__45360) {
case 1:
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__29231__auto__ = (function mranderson047$garden$v1v3v3$garden$compiler$iter__45361(s__45362){
return (new cljs.core.LazySeq(null,(function (){
var s__45362__$1 = s__45362;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45362__$1);
if(temp__4657__auto__){
var s__45362__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45362__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__45362__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__45364 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__45363 = (0);
while(true){
if((i__45363 < size__29230__auto__)){
var x = cljs.core._nth.call(null,c__29229__auto__,i__45363);
cljs.core.chunk_append.call(null,b__45364,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__45366 = (i__45363 + (1));
i__45363 = G__45366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45364),mranderson047$garden$v1v3v3$garden$compiler$iter__45361.call(null,cljs.core.chunk_rest.call(null,s__45362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45364),null);
}
} else {
var x = cljs.core.first.call(null,s__45362__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),mranderson047$garden$v1v3v3$garden$compiler$iter__45361.call(null,cljs.core.rest.call(null,s__45362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29231__auto__.call(null,xs);
})();
return clojure.string.join.call(null,mranderson047.garden.v1v3v3.garden.compiler.comma,ys);
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

mranderson047.garden.v1v3v3.garden.compiler.rule_join = (function mranderson047$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.call(null,mranderson047.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
mranderson047.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
mranderson047.garden.v1v3v3.garden.compiler.indent_str = (function mranderson047$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(mranderson047.garden.v1v3v3.garden.compiler.indent_loc_re,mranderson047.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_value = (function mranderson047$garden$v1v3v3$garden$compiler$render_value(x){
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return mranderson047.garden.v1v3v3.garden.compiler.render_css.call(null,x);
}
});
mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value = (function mranderson047$garden$v1v3v3$garden$compiler$render_property_and_value(p__45367){
var vec__45368 = p__45367;
var prop = cljs.core.nth.call(null,vec__45368,(0),null);
var val = cljs.core.nth.call(null,vec__45368,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_value,val):mranderson047.garden.v1v3v3.garden.compiler.render_value.call(null,val));
return mranderson047.garden.v1v3v3.garden.util.as_str.call(null,prop,mranderson047.garden.v1v3v3.garden.compiler.colon,val__$1,mranderson047.garden.v1v3v3.garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
mranderson047.garden.v1v3v3.garden.compiler.add_blocks = (function mranderson047$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__45371_SHARP_){
return cljs.core.cons.call(null,p1__45371_SHARP_,f.call(null,p1__45371_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks = (function mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__45372){
var vec__45373 = p__45372;
var p = cljs.core.nth.call(null,vec__45373,(0),null);
var v = cljs.core.nth.call(null,vec__45373,(1),null);
var iter__29231__auto__ = ((function (vec__45373,p,v){
return (function mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__45376(s__45377){
return (new cljs.core.LazySeq(null,((function (vec__45373,p,v){
return (function (){
var s__45377__$1 = s__45377;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45377__$1);
if(temp__4657__auto__){
var s__45377__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45377__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__45377__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__45379 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__45378 = (0);
while(true){
if((i__45378 < size__29230__auto__)){
var vendor = cljs.core._nth.call(null,c__29229__auto__,i__45378);
cljs.core.chunk_append.call(null,b__45379,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__45380 = (i__45378 + (1));
i__45378 = G__45380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45379),mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__45376.call(null,cljs.core.chunk_rest.call(null,s__45377__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45379),null);
}
} else {
var vendor = cljs.core.first.call(null,s__45377__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__45376.call(null,cljs.core.rest.call(null,s__45377__$2)));
}
} else {
return null;
}
break;
}
});})(vec__45373,p,v))
,null,null));
});})(vec__45373,p,v))
;
return iter__29231__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_all_properties = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return mranderson047.garden.v1v3v3.garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return mranderson047.garden.v1v3v3.garden.compiler.add_blocks.call(null,(function (block){
var vec__45381 = block;
var p = cljs.core.nth.call(null,vec__45381,(0),null);
var _ = cljs.core.nth.call(null,vec__45381,(1),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__28423__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return mranderson047.garden.v1v3v3.garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?mranderson047.garden.v1v3v3.garden.compiler.prefix_all_properties:mranderson047.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
mranderson047.garden.v1v3v3.garden.compiler.render_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value,mranderson047.garden.v1v3v3.garden.compiler.prefix_declaration.call(null,declaration)));
});
mranderson047.garden.v1v3v3.garden.compiler.render_selector = (function mranderson047$garden$v1v3v3$garden$compiler$render_selector(selector){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_rule = (function mranderson047$garden$v1v3v3$garden$compiler$render_rule(p__45384){
var vec__45385 = p__45384;
var selector = cljs.core.nth.call(null,vec__45385,(0),null);
var declarations = cljs.core.nth.call(null,vec__45385,(1),null);
var rule = vec__45385;
if((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.render_selector.call(null,selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_media_expr_part = (function mranderson047$garden$v1v3v3$garden$compiler$render_media_expr_part(p__45388){
var vec__45389 = p__45388;
var k = cljs.core.nth.call(null,vec__45389,(0),null);
var v = cljs.core.nth.call(null,vec__45389,(1),null);
var vec__45392 = cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__45392,(0),null);
var sv = cljs.core.nth.call(null,vec__45392,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__28411__auto__ = v;
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__28411__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
mranderson047.garden.v1v3v3.garden.compiler.render_media_expr = (function mranderson047$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_unit = (function mranderson047$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__45395 = css_unit;
var map__45395__$1 = ((((!((map__45395 == null)))?((((map__45395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45395):map__45395);
var magnitude = cljs.core.get.call(null,map__45395__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__45395__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_function = (function mranderson047$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__45397 = css_function;
var map__45397__$1 = ((((!((map__45397 == null)))?((((map__45397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45397):map__45397);
var function$ = cljs.core.get.call(null,map__45397__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__45397__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,args):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,args));
return mranderson047.garden.v1v3v3.garden.util.format.call(null,"%s(%s)",mranderson047.garden.v1v3v3.garden.util.to_str.call(null,function$),args__$1);
});
mranderson047.garden.v1v3v3.garden.compiler.render_color = (function mranderson047$garden$v1v3v3$garden$compiler$render_color(c){
var temp__4655__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__4655__auto__)){
var a = temp__4655__auto__;
var map__45399 = mranderson047.garden.v1v3v3.garden.color.as_hsl.call(null,c);
var map__45399__$1 = ((((!((map__45399 == null)))?((((map__45399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45399):map__45399);
var hue = cljs.core.get.call(null,map__45399__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__45399__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__45399__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__45400 = cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__45400,(0),null);
var l = cljs.core.nth.call(null,vec__45400,(1),null);
return mranderson047.garden.v1v3v3.garden.util.format.call(null,"hsla(%s)",mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return mranderson047.garden.v1v3v3.garden.color.as_hex.call(null,c);
}
});
if(typeof mranderson047.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__29378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29382__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mranderson047.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29382__auto__,method_table__29378__auto__,prefer_table__29379__auto__,method_cache__29380__auto__,cached_hierarchy__29381__auto__));
})();
}
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__45404){
var map__45405 = p__45404;
var map__45405__$1 = ((((!((map__45405 == null)))?((((map__45405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45405):map__45405);
var value = cljs.core.get.call(null,map__45405__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__45407 = value;
var map__45407__$1 = ((((!((map__45407 == null)))?((((map__45407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45407):map__45407);
var url = cljs.core.get.call(null,map__45407__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__45407__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?mranderson047.garden.v1v3v3.garden.util.wrap_quotes.call(null,url):mranderson047.garden.v1v3v3.garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?mranderson047.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__45410){
var map__45411 = p__45410;
var map__45411__$1 = ((((!((map__45411 == null)))?((((map__45411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45411):map__45411);
var value = cljs.core.get.call(null,map__45411__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__45413 = value;
var map__45413__$1 = ((((!((map__45413 == null)))?((((map__45413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45413):map__45413);
var identifier = cljs.core.get.call(null,map__45413__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__45413__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.util.to_str.call(null,identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str.call(null,mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__45413,map__45413__$1,identifier,frames,map__45411,map__45411__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__45413,map__45413__$1,identifier,frames,map__45411,map__45411__$1,value))
;
return mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__45413,map__45413__$1,identifier,frames,map__45411,map__45411__$1,value){
return (function (p1__45409_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45409_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__45413,map__45413__$1,identifier,frames,map__45411,map__45411__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,mranderson047.garden.v1v3v3.garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__45415){
var map__45416 = p__45415;
var map__45416__$1 = ((((!((map__45416 == null)))?((((map__45416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45416):map__45416);
var value = cljs.core.get.call(null,map__45416__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__45418 = value;
var map__45418__$1 = ((((!((map__45418 == null)))?((((map__45418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45418):map__45418);
var media_queries = cljs.core.get.call(null,map__45418__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__45418__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str.call(null,mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"null",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.render_css,"null",(function (this$){
return "";
}));

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"number",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.render_css,"number",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"_",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.render_css,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
mranderson047.garden.v1v3v3.garden.compiler.compile_style = (function mranderson047$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_compile = (function mranderson047$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_45420 = mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = flags;

try{return mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.call(null,mranderson047.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,mranderson047.garden.v1v3v3.garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_45420;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_preamble = (function mranderson047$garden$v1v3v3$garden$compiler$do_preamble(p__45421,stylesheet){
var map__45422 = p__45421;
var map__45422__$1 = ((((!((map__45422 == null)))?((((map__45422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45422):map__45422);
var preamble = cljs.core.get.call(null,map__45422__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_compression = (function mranderson047$garden$v1v3v3$garden$compiler$do_compression(p__45424,stylesheet){
var map__45425 = p__45424;
var map__45425__$1 = ((((!((map__45425 == null)))?((((map__45425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45425):map__45425);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__45425__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__45425__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__28423__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return mranderson047.garden.v1v3v3.garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_output_to = (function mranderson047$garden$v1v3v3$garden$compiler$do_output_to(p__45427,stylesheet){
var map__45428 = p__45427;
var map__45428__$1 = ((((!((map__45428 == null)))?((((map__45428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45428):map__45428);
var output_to = cljs.core.get.call(null,map__45428__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.compile_css = (function mranderson047$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__29599__auto__ = [];
var len__29592__auto___45435 = arguments.length;
var i__29593__auto___45436 = (0);
while(true){
if((i__29593__auto___45436 < len__29592__auto___45435)){
args__29599__auto__.push((arguments[i__29593__auto___45436]));

var G__45437 = (i__29593__auto___45436 + (1));
i__29593__auto___45436 = G__45437;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__45432 = (cljs.core.truth_((function (){var and__28411__auto__ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__28411__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__45432,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__45432,(1),null);
return mranderson047.garden.v1v3v3.garden.compiler.do_output_to.call(null,flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_compression.call(null,flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_preamble.call(null,flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq45430){
var G__45431 = cljs.core.first.call(null,seq45430);
var seq45430__$1 = cljs.core.next.call(null,seq45430);
return mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic(G__45431,seq45430__$1);
});


//# sourceMappingURL=compiler.js.map?rel=1518440287295
