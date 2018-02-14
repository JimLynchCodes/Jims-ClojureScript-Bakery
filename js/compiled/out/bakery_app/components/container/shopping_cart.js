// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.components.container.shopping_cart');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.subs');
goog.require('bakery_app.reframe.events');
goog.require('goog.string');
goog.require('goog.string.format');
bakery_app.components.container.shopping_cart.shopping_cart_component = (function bakery_app$components$container$shopping_cart$shopping_cart_component(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","name","bakery-app.reframe.subs/name",-1385246800)], null));
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","items","bakery-app.reframe.subs/items",2062489977)], null));
var totalPrice = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","totalPrice","bakery-app.reframe.subs/totalPrice",698314218)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCartContainer"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCartBox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cart"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__29231__auto__ = ((function (name,items,totalPrice){
return (function bakery_app$components$container$shopping_cart$shopping_cart_component_$_iter__30478(s__30479){
return (new cljs.core.LazySeq(null,((function (name,items,totalPrice){
return (function (){
var s__30479__$1 = s__30479;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30479__$1);
if(temp__4657__auto__){
var s__30479__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30479__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__30479__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__30481 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__30480 = (0);
while(true){
if((i__30480 < size__29230__auto__)){
var item = cljs.core._nth.call(null,c__29229__auto__,i__30480);
cljs.core.chunk_append.call(null,b__30481,(((new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))) > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)," x ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)," ...... $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),goog.string.format("%.2f",new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))))], null)], null):null));

var G__30482 = (i__30480 + (1));
i__30480 = G__30482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30481),bakery_app$components$container$shopping_cart$shopping_cart_component_$_iter__30478.call(null,cljs.core.chunk_rest.call(null,s__30479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30481),null);
}
} else {
var item = cljs.core.first.call(null,s__30479__$2);
return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))) > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)," x ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)," ...... $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),goog.string.format("%.2f",new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))))], null)], null):null),bakery_app$components$container$shopping_cart$shopping_cart_component_$_iter__30478.call(null,cljs.core.rest.call(null,s__30479__$2)));
}
} else {
return null;
}
break;
}
});})(name,items,totalPrice))
,null,null));
});})(name,items,totalPrice))
;
return iter__29231__auto__.call(null,cljs.core.deref.call(null,items));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__totalContainer"], null),"Total $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),goog.string.format("%.2f",cljs.core.deref.call(null,totalPrice))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,items,totalPrice){
return (function (){
return alert("Credit card processing coming soon!");
});})(name,items,totalPrice))
,new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__checkoutButton"], null),["Checkout"].join('')], null)], null)], null)], null);
});

//# sourceMappingURL=shopping_cart.js.map?rel=1518581885965
