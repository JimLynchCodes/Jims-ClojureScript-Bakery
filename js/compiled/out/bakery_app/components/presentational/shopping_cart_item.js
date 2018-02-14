// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.components.presentational.shopping_cart_item');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.subs');
goog.require('bakery_app.reframe.events');
goog.require('goog.string');
goog.require('goog.string.format');
bakery_app.components.presentational.shopping_cart_item.shopping_cart_component = (function bakery_app$components$presentational$shopping_cart_item$shopping_cart_component(item){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"shoppingCart__item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)," x ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1)))], null)," ...... $",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),goog.string.format("%.2f",new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item,(1))))], null)], null);
});

//# sourceMappingURL=shopping_cart_item.js.map?rel=1518583431827
