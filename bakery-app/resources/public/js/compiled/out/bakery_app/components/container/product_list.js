// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.components.container.product_list');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.subs');
goog.require('bakery_app.reframe.events');
bakery_app.components.container.product_list.product_list_component = (function bakery_app$components$container$product_list$product_list_component(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","name","bakery-app.reframe.subs/name",-1385246800)], null));
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.subs","items","bakery-app.reframe.subs/items",2062489977)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productList"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__textContainer__title"], null),"Products"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__29231__auto__ = ((function (name,items){
return (function bakery_app$components$container$product_list$product_list_component_$_iter__32833(s__32834){
return (new cljs.core.LazySeq(null,((function (name,items){
return (function (){
var s__32834__$1 = s__32834;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32834__$1);
if(temp__4657__auto__){
var s__32834__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32834__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__32834__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__32836 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__32835 = (0);
while(true){
if((i__32835 < size__29230__auto__)){
var item = cljs.core._nth.call(null,c__29229__auto__,i__32835);
cljs.core.chunk_append.call(null,b__32836,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"imageURL","imageURL",1945550434)),new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__image"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__textContainer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"name","name",1843675177))], null),"$",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"price","price",22129180))], null),((cljs.core._EQ_.call(null,null,cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," each"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484)),new cljs.core.Keyword(null,"amount","amount",364489504)))].join('')], null)," for $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484)),new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591)))].join('')], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__addtoCartButton",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32835,item,c__29229__auto__,size__29230__auto__,b__32836,s__32834__$2,temp__4657__auto__,name,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.events","change-item-quantity","bakery-app.reframe.events/change-item-quantity",700872677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"itemName","itemName",862733157),cljs.core.nth.call(null,item,(0)),new cljs.core.Keyword(null,"amountToChange","amountToChange",1253783288),(1)], null)], null));
});})(i__32835,item,c__29229__auto__,size__29230__auto__,b__32836,s__32834__$2,temp__4657__auto__,name,items))
], null),["Add to Cart"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__32837 = (i__32835 + (1));
i__32835 = G__32837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32836),bakery_app$components$container$product_list$product_list_component_$_iter__32833.call(null,cljs.core.chunk_rest.call(null,s__32834__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32836),null);
}
} else {
var item = cljs.core.first.call(null,s__32834__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"imageURL","imageURL",1945550434)),new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__image"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__textContainer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"name","name",1843675177))], null),"$",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"price","price",22129180))], null),((cljs.core._EQ_.call(null,null,cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," each"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484)),new cljs.core.Keyword(null,"amount","amount",364489504)))].join('')], null)," for $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484)),new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591)))].join('')], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"productBox__addtoCartButton",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__32834__$2,temp__4657__auto__,name,items){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.events","change-item-quantity","bakery-app.reframe.events/change-item-quantity",700872677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"itemName","itemName",862733157),cljs.core.nth.call(null,item,(0)),new cljs.core.Keyword(null,"amountToChange","amountToChange",1253783288),(1)], null)], null));
});})(item,s__32834__$2,temp__4657__auto__,name,items))
], null),["Add to Cart"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),bakery_app$components$container$product_list$product_list_component_$_iter__32833.call(null,cljs.core.rest.call(null,s__32834__$2)));
}
} else {
return null;
}
break;
}
});})(name,items))
,null,null));
});})(name,items))
;
return iter__29231__auto__.call(null,cljs.core.deref.call(null,items));
})()], null)], null);
});

//# sourceMappingURL=product_list.js.map?rel=1518440256242
