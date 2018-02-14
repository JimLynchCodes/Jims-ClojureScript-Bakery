// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('bakery_app.reframe.events');
goog.require('bakery_app.components.root_component');
goog.require('bakery_app.config');
goog.require('bakery_app.reframe.handlers');
cljs.core.enable_console_print_BANG_.call(null);
bakery_app.core.dev_setup = (function bakery_app$core$dev_setup(){
if(bakery_app.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
bakery_app.core.mount_root = (function bakery_app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bakery_app.components.root_component.root_component], null),document.getElementById("app"));
});
bakery_app.core.init = (function bakery_app$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bakery-app.reframe.events","initialize-db","bakery-app.reframe.events/initialize-db",301598277)], null));

bakery_app.core.dev_setup.call(null);

return bakery_app.core.mount_root.call(null);
});
goog.exportSymbol('bakery_app.core.init', bakery_app.core.init);

//# sourceMappingURL=core.js.map?rel=1518583797257
