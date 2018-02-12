// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.reframe.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.db');
goog.require('bakery_app.utils.bulk_item_pricer');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("bakery-app.reframe.events","fuck","bakery-app.reframe.events/fuck",-2112296232),(function (_,___$1){
return bakery_app.reframe.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("bakery-app.reframe.events","initialize-db","bakery-app.reframe.events/initialize-db",301598277),(function (_,___$1){
return bakery_app.reframe.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("bakery-app.reframe.events","change-item-quantity","bakery-app.reframe.events/change-item-quantity",700872677),(function (db,p__32806){
var vec__32807 = p__32806;
var f = cljs.core.nth.call(null,vec__32807,(0),null);
var g = cljs.core.nth.call(null,vec__32807,(1),null);
cljs.core.println.call(null,"db is ",db);

cljs.core.println.call(null,"g is ",g);

cljs.core.println.call(null,"f is ",f);

cljs.core.println.call(null,"in event ",cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)));

cljs.core.println.call(null,"in event ",cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)));

var newQuantity = ((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"amountToChange","amountToChange",1253783288).cljs$core$IFn$_invoke$arity$1(g)))?(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null)) + (1)):(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null)) - (1)));
return cljs.core.assoc_in.call(null,((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"amountToChange","amountToChange",1253783288).cljs$core$IFn$_invoke$arity$1(g)))?cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null),newQuantity):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233)], null),bakery_app.utils.bulk_item_pricer.get_price.call(null,newQuantity,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"price","price",22129180)], null)),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),new cljs.core.Keyword(null,"amount","amount",364489504)], null)),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,g,new cljs.core.Keyword(null,"itemName","itemName",862733157)),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591)], null))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("bakery-app.reframe.events","initialize-shopping-cart","bakery-app.reframe.events/initialize-shopping-cart",251604268),(function (db,p__32810){
var vec__32811 = p__32810;
cljs.core.println.call(null,"init shopping cart!");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"shoppingCart","shoppingCart",1335540168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cartItems","cartItems",-301802854),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591),(0)], null));
}));

//# sourceMappingURL=events.js.map?rel=1518440256107
