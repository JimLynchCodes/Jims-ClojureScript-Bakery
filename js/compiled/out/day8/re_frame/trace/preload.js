// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.preload');
goog.require('cljs.core');
goog.require('day8.re_frame.trace');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
mranderson047.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_.call(null);
day8.re_frame.trace.init_db_BANG_.call(null);
if(typeof day8.re_frame.trace.preload._ !== 'undefined'){
} else {
day8.re_frame.trace.preload._ = day8.re_frame.trace.init_tracing_BANG_.call(null);
}
day8.re_frame.trace.inject_devtools_BANG_.call(null);

//# sourceMappingURL=preload.js.map?rel=1518582136877
