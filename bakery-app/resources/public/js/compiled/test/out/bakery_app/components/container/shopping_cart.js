// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.components.container.shopping_cart');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.subs');
goog.require('bakery_app.reframe.events');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('bakery_app.components.presentational.shopping_cart_item');
bakery_app.components.container.shopping_cart.shopping_cart_component = (function bakery_app$components$container$shopping_cart$shopping_cart_component(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","items","bakery-app.reframe.subs/items",2062489977)], null));
var totalPrice = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","totalPrice","bakery-app.reframe.subs/totalPrice",698314218)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCartContainer"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCartBox"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cart-header"], null),"Cart"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__8395__auto__ = ((function (items,totalPrice){
return (function bakery_app$components$container$shopping_cart$shopping_cart_component_$_iter__12935(s__12936){
return (new cljs.core.LazySeq(null,((function (items,totalPrice){
return (function (){
var s__12936__$1 = s__12936;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12936__$1);
if(temp__4657__auto__){
var s__12936__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12936__$2)){
var c__8393__auto__ = cljs.core.chunk_first.call(null,s__12936__$2);
var size__8394__auto__ = cljs.core.count.call(null,c__8393__auto__);
var b__12938 = cljs.core.chunk_buffer.call(null,size__8394__auto__);
if((function (){var i__12937 = (0);
while(true){
if((i__12937 < size__8394__auto__)){
var item = cljs.core._nth.call(null,c__8393__auto__,i__12937);
cljs.core.chunk_append.call(null,b__12938,(((new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.presentational.shopping_cart_item.shopping_cart_component,item], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)], null)));

var G__12939 = (i__12937 + (1));
i__12937 = G__12939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12938),bakery_app$components$container$shopping_cart$shopping_cart_component_$_iter__12935.call(null,cljs.core.chunk_rest.call(null,s__12936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12938),null);
}
} else {
var item = cljs.core.first.call(null,s__12936__$2);
return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.presentational.shopping_cart_item.shopping_cart_component,item], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)], null)),bakery_app$components$container$shopping_cart$shopping_cart_component_$_iter__12935.call(null,cljs.core.rest.call(null,s__12936__$2)));
}
} else {
return null;
}
break;
}
});})(items,totalPrice))
,null,null));
});})(items,totalPrice))
;
return iter__8395__auto__.call(null,cljs.core.deref.call(null,items));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__totalContainer"], null),"Total $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),goog.string.format("%.2f",cljs.core.deref.call(null,totalPrice))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items,totalPrice){
return (function (){
return alert("Credit card processing coming soon!");
});})(items,totalPrice))
,new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__checkoutButton"], null),["Checkout"].join('')], null)], null)], null)], null);
});

//# sourceMappingURL=shopping_cart.js.map
