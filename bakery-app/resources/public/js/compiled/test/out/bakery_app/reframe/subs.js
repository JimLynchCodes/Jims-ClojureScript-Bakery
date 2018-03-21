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
bakery_app.reframe.subs.combinePricesOfSelected = (function bakery_app$reframe$subs$combinePricesOfSelected(acc,item){
return (acc + cljs.core.get.call(null,cljs.core.nth.call(null,item,(1)),new cljs.core.Keyword(null,"priceOfQuantitySelected","priceOfQuantitySelected",-620072233)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("bakery-app.reframe.subs","totalPrice","bakery-app.reframe.subs/totalPrice",698314218),(function (db){
return cljs.core.reduce.call(null,bakery_app.reframe.subs.combinePricesOfSelected,(0),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(db));
}));

//# sourceMappingURL=subs.js.map
