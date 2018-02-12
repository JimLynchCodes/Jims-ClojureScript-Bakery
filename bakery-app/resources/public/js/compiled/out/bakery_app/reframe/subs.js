// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.reframe.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("bakery-app.reframe.subs","name","bakery-app.reframe.subs/name",-1385246800),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("bakery-app.reframe.subs","items","bakery-app.reframe.subs/items",2062489977),(function (db){
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("bakery-app.reframe.subs","cartItems","bakery-app.reframe.subs/cartItems",-1384363233),(function (db){
return new cljs.core.Keyword(null,"cartItems","cartItems",-301802854).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shoppingCart","shoppingCart",1335540168).cljs$core$IFn$_invoke$arity$1(db));
}));
bakery_app.reframe.subs.ya = (function bakery_app$reframe$subs$ya(acc,item){
cljs.core.println.call(null,"ARFFF");

cljs.core.println.call(null,"item ",item);

cljs.core.println.call(null,"acc ",acc);

cljs.core.println.call(null,"item keyword ",cljs.core.nth.call(null,item,(0)));

cljs.core.println.call(null,"item obj ",cljs.core.nth.call(null,item,(1)));

cljs.core.println.call(null,"price of quantity selected ",cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233)));

cljs.core.println.call(null,"END ARFFF");

return (acc + cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("bakery-app.reframe.subs","totalPrice","bakery-app.reframe.subs/totalPrice",698314218),(function (db){
return cljs.core.reduce.call(null,bakery_app.reframe.subs.ya,(0),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
}));

//# sourceMappingURL=subs.js.map?rel=1518440256066
