// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frisk.diff');
goog.require('cljs.core');
goog.require('clojure.set');
re_frisk.diff.mv_keys = (function re_frisk$diff$mv_keys(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.keys.call(null,coll);
} else {
return cljs.core.keep_indexed.call(null,(function (p1__50973_SHARP_,p2__50972_SHARP_){
if((p2__50972_SHARP_ == null)){
return null;
} else {
return p1__50973_SHARP_;
}
}),coll);
}
});
re_frisk.diff.diff_coll = (function re_frisk$diff$diff_coll(a,b){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29231__auto__ = (function re_frisk$diff$diff_coll_$_iter__50974(s__50975){
return (new cljs.core.LazySeq(null,(function (){
var s__50975__$1 = s__50975;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50975__$1);
if(temp__4657__auto__){
var s__50975__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50975__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__50975__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__50977 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__50976 = (0);
while(true){
if((i__50976 < size__29230__auto__)){
var key = cljs.core._nth.call(null,c__29229__auto__,i__50976);
cljs.core.chunk_append.call(null,b__50977,(function (){var val_a = cljs.core.get.call(null,a,key);
var val_b = cljs.core.get.call(null,b,key);
if(cljs.core._EQ_.call(null,val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__28411__auto__ = val_a;
if(cljs.core.truth_(and__28411__auto__)){
return val_b;
} else {
return and__28411__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,re_frisk.diff.diff.call(null,val_a,val_b)], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})());

var G__50978 = (i__50976 + (1));
i__50976 = G__50978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50977),re_frisk$diff$diff_coll_$_iter__50974.call(null,cljs.core.chunk_rest.call(null,s__50975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50977),null);
}
} else {
var key = cljs.core.first.call(null,s__50975__$2);
return cljs.core.cons.call(null,(function (){var val_a = cljs.core.get.call(null,a,key);
var val_b = cljs.core.get.call(null,b,key);
if(cljs.core._EQ_.call(null,val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__28411__auto__ = val_a;
if(cljs.core.truth_(and__28411__auto__)){
return val_b;
} else {
return and__28411__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,re_frisk.diff.diff.call(null,val_a,val_b)], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})(),re_frisk$diff$diff_coll_$_iter__50974.call(null,cljs.core.rest.call(null,s__50975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29231__auto__.call(null,clojure.set.union.call(null,cljs.core.set.call(null,re_frisk.diff.mv_keys.call(null,a)),cljs.core.set.call(null,re_frisk.diff.mv_keys.call(null,b))));
})());
});
re_frisk.diff.diff_set = (function re_frisk$diff$diff_set(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),clojure.set.difference.call(null,a,b),new cljs.core.Keyword(null,"added","added",2057651688),clojure.set.difference.call(null,b,a)], null);
});
re_frisk.diff.diff_rest = (function re_frisk$diff$diff_rest(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),a,new cljs.core.Keyword(null,"after","after",594996914),b], null);
});
re_frisk.diff.diff = (function re_frisk$diff$diff(a,b){
if(cljs.core._EQ_.call(null,a,b)){
return null;
} else {
if((cljs.core.map_QMARK_.call(null,a)) && (cljs.core.map_QMARK_.call(null,b))){
return re_frisk.diff.diff_coll.call(null,a,b);
} else {
if((cljs.core.vector_QMARK_.call(null,a)) && (cljs.core.vector_QMARK_.call(null,b))){
return re_frisk.diff.diff_coll.call(null,a,b);
} else {
if((cljs.core.set_QMARK_.call(null,a)) && (cljs.core.set_QMARK_.call(null,b))){
return re_frisk.diff.diff_set.call(null,a,b);
} else {
return re_frisk.diff.diff_rest.call(null,a,b);

}
}
}
}
});

//# sourceMappingURL=diff.js.map?rel=1518582135879
