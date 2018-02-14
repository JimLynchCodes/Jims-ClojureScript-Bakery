// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.utils.bulk_item_pricer');
goog.require('cljs.core');
bakery_app.utils.bulk_item_pricer.get_price = (function bakery_app$utils$bulk_item_pricer$get_price(quantity,singlePrice,bulkAmount,bulkPrice){
if(cljs.core._EQ_.call(null,null,bulkAmount)){
return (quantity * singlePrice);
} else {
if((quantity < bulkAmount)){
return (quantity * singlePrice);
} else {
return ((Math.floor((quantity / bulkAmount)) * bulkPrice) + (cljs.core.mod.call(null,quantity,bulkAmount) * singlePrice));
}
}
});

//# sourceMappingURL=bulk_item_pricer.js.map?rel=1518582077158
