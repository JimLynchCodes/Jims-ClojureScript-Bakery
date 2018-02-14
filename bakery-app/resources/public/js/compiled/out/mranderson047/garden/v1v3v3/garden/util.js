// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson047.garden.v1v3v3.garden.util.format = (function mranderson047$garden$v1v3v3$garden$util$format(var_args){
var args__29599__auto__ = [];
var len__29592__auto___43674 = arguments.length;
var i__29593__auto___43675 = (0);
while(true){
if((i__29593__auto___43675 < len__29592__auto___43674)){
args__29599__auto__.push((arguments[i__29593__auto___43675]));

var G__43676 = (i__29593__auto___43675 + (1));
i__29593__auto___43675 = G__43676;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq43672){
var G__43673 = cljs.core.first.call(null,seq43672);
var seq43672__$1 = cljs.core.next.call(null,seq43672);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__43673,seq43672__$1);
});


/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson047.garden.v1v3v3.garden.util.to_str = (function mranderson047$garden$v1v3v3$garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))){
return this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__29106__auto__ = (((this$ == null))?null:this$);
var m__29107__auto__ = (mranderson047.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,this$);
} else {
var m__29107__auto____$1 = (mranderson047.garden.v1v3v3.garden.util.to_str["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"_",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"null",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
mranderson047.garden.v1v3v3.garden.util.as_str = (function mranderson047$garden$v1v3v3$garden$util$as_str(var_args){
var args__29599__auto__ = [];
var len__29592__auto___43678 = arguments.length;
var i__29593__auto___43679 = (0);
while(true){
if((i__29593__auto___43679 < len__29592__auto___43678)){
args__29599__auto__.push((arguments[i__29593__auto___43679]));

var G__43680 = (i__29593__auto___43679 + (1));
i__29593__auto___43679 = G__43680;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.util.to_str,args));
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq43677){
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43677));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.string__GT_int = (function mranderson047$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__29599__auto__ = [];
var len__29592__auto___43687 = arguments.length;
var i__29593__auto___43688 = (0);
while(true){
if((i__29593__auto___43688 < len__29592__auto___43687)){
args__29599__auto__.push((arguments[i__29593__auto___43688]));

var G__43689 = (i__29593__auto___43688 + (1));
i__29593__auto___43688 = G__43689;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__43683){
var vec__43684 = p__43683;
var radix = cljs.core.nth.call(null,vec__43684,(0),null);
var radix__$1 = (function (){var or__28423__auto__ = radix;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq43681){
var G__43682 = cljs.core.first.call(null,seq43681);
var seq43681__$1 = cljs.core.next.call(null,seq43681);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__43682,seq43681__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.int__GT_string = (function mranderson047$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__29599__auto__ = [];
var len__29592__auto___43696 = arguments.length;
var i__29593__auto___43697 = (0);
while(true){
if((i__29593__auto___43697 < len__29592__auto___43696)){
args__29599__auto__.push((arguments[i__29593__auto___43697]));

var G__43698 = (i__29593__auto___43697 + (1));
i__29593__auto___43697 = G__43698;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__43692){
var vec__43693 = p__43692;
var radix = cljs.core.nth.call(null,vec__43693,(0),null);
var radix__$1 = (function (){var or__28423__auto__ = radix;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq43690){
var G__43691 = cljs.core.first.call(null,seq43690);
var seq43690__$1 = cljs.core.next.call(null,seq43690);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__43691,seq43690__$1);
});

/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.util.space_join = (function mranderson047$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.util.comma_join = (function mranderson047$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__29231__auto__ = (function mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__43699(s__43700){
return (new cljs.core.LazySeq(null,(function (){
var s__43700__$1 = s__43700;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43700__$1);
if(temp__4657__auto__){
var s__43700__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43700__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__43700__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__43702 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__43701 = (0);
while(true){
if((i__43701 < size__29230__auto__)){
var x = cljs.core._nth.call(null,c__29229__auto__,i__43701);
cljs.core.chunk_append.call(null,b__43702,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,x)));

var G__43703 = (i__43701 + (1));
i__43701 = G__43703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43702),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__43699.call(null,cljs.core.chunk_rest.call(null,s__43700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43702),null);
}
} else {
var x = cljs.core.first.call(null,s__43700__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,x)),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__43699.call(null,cljs.core.rest.call(null,s__43700__$2)));
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
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson047.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson047$garden$v1v3v3$garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
mranderson047.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson047.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_media_QMARK_(x){
var and__28411__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__28411__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
var and__28411__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__28411__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_import_QMARK_(x){
var and__28411__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__28411__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.prefix = (function mranderson047$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson047$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return mranderson047.garden.v1v3v3.garden.util.prefix.call(null,p__$1,s);
} else {
return mranderson047.garden.v1v3v3.garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson047.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
mranderson047.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__28780__auto__ = a;
var y__28781__auto__ = b;
return ((x__28780__auto__ < y__28781__auto__) ? x__28780__auto__ : y__28781__auto__);
})();
var top = (function (){var x__28773__auto__ = a;
var y__28774__auto__ = b;
return ((x__28773__auto__ > y__28774__auto__) ? x__28773__auto__ : y__28774__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson047.garden.v1v3v3.garden.util.clip = (function mranderson047$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__43704 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__43704,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__43704,(1),null);
var x__28773__auto__ = a__$1;
var y__28774__auto__ = (function (){var x__28780__auto__ = b__$1;
var y__28781__auto__ = n;
return ((x__28780__auto__ < y__28781__auto__) ? x__28780__auto__ : y__28781__auto__);
})();
return ((x__28773__auto__ > y__28774__auto__) ? x__28773__auto__ : y__28774__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson047.garden.v1v3v3.garden.util.average = (function mranderson047$garden$v1v3v3$garden$util$average(var_args){
var args__29599__auto__ = [];
var len__29592__auto___43710 = arguments.length;
var i__29593__auto___43711 = (0);
while(true){
if((i__29593__auto___43711 < len__29592__auto___43710)){
args__29599__auto__.push((arguments[i__29593__auto___43711]));

var G__43712 = (i__29593__auto___43711 + (1));
i__29593__auto___43711 = G__43712;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((2) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((2)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq43707){
var G__43708 = cljs.core.first.call(null,seq43707);
var seq43707__$1 = cljs.core.next.call(null,seq43707);
var G__43709 = cljs.core.first.call(null,seq43707__$1);
var seq43707__$2 = cljs.core.next.call(null,seq43707__$1);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__43708,G__43709,seq43707__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson047.garden.v1v3v3.garden.util.cartesian_product = (function mranderson047$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__29599__auto__ = [];
var len__29592__auto___43714 = arguments.length;
var i__29593__auto___43715 = (0);
while(true){
if((i__29593__auto___43715 < len__29592__auto___43714)){
args__29599__auto__.push((arguments[i__29593__auto___43715]));

var G__43716 = (i__29593__auto___43715 + (1));
i__29593__auto___43715 = G__43716;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function mranderson047$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__43717 = (i - (1));
var G__43718 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__43717;
v_seqs__$2 = G__43718;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return mranderson047$garden$v1v3v3$garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq43713){
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43713));
});


//# sourceMappingURL=util.js.map?rel=1518582107546
