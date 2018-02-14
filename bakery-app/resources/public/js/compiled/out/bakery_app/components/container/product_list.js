// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.components.container.product_list');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.subs');
goog.require('bakery_app.reframe.events');
goog.require('bakery_app.components.presentational.product_list_item');
bakery_app.components.container.product_list.product_list_component = (function bakery_app$components$container$product_list$product_list_component(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","items","bakery-app.reframe.subs/items",2062489977)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productList"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__textContainer__title"], null),"Products"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__29231__auto__ = ((function (items){
return (function bakery_app$components$container$product_list$product_list_component_$_iter__51862(s__51863){
return (new cljs.core.LazySeq(null,((function (items){
return (function (){
var s__51863__$1 = s__51863;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51863__$1);
if(temp__4657__auto__){
var s__51863__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51863__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__51863__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__51865 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__51864 = (0);
while(true){
if((i__51864 < size__29230__auto__)){
var item = cljs.core._nth.call(null,c__29229__auto__,i__51864);
cljs.core.chunk_append.call(null,b__51865,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.presentational.product_list_item.list_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)));

var G__51866 = (i__51864 + (1));
i__51864 = G__51866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51865),bakery_app$components$container$product_list$product_list_component_$_iter__51862.call(null,cljs.core.chunk_rest.call(null,s__51863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51865),null);
}
} else {
var item = cljs.core.first.call(null,s__51863__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.presentational.product_list_item.list_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)),bakery_app$components$container$product_list$product_list_component_$_iter__51862.call(null,cljs.core.rest.call(null,s__51863__$2)));
}
} else {
return null;
}
break;
}
});})(items))
,null,null));
});})(items))
;
return iter__29231__auto__.call(null,cljs.core.deref.call(null,items));
})()], null)], null);
});

//# sourceMappingURL=product_list.js.map?rel=1518583645094
