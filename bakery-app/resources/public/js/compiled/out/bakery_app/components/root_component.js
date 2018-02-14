// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.components.root_component');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.subs');
goog.require('reagent.core');
goog.require('bakery_app.reframe.events');
goog.require('bakery_app.reframe.handlers');
goog.require('bakery_app.components.container.product_list');
goog.require('bakery_app.components.container.shopping_cart');
bakery_app.components.root_component.root_component = (function bakery_app$components$root_component$root_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.handlers","load-product-list","bakery-app.reframe.handlers/load-product-list",1478089745)], null));
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"root-component",new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"root-component"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.container.product_list.product_list_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.container.shopping_cart.shopping_cart_component], null)], null);
})], null));
});

//# sourceMappingURL=root_component.js.map?rel=1518615209256
