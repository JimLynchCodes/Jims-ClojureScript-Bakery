// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47567 = arguments.length;
switch (G__47567) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47568 = (function (f,blockable,meta47569){
this.f = f;
this.blockable = blockable;
this.meta47569 = meta47569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47570,meta47569__$1){
var self__ = this;
var _47570__$1 = this;
return (new cljs.core.async.t_cljs$core$async47568(self__.f,self__.blockable,meta47569__$1));
});

cljs.core.async.t_cljs$core$async47568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47570){
var self__ = this;
var _47570__$1 = this;
return self__.meta47569;
});

cljs.core.async.t_cljs$core$async47568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47569","meta47569",1579644064,null)], null);
});

cljs.core.async.t_cljs$core$async47568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47568";

cljs.core.async.t_cljs$core$async47568.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async47568");
});

cljs.core.async.__GT_t_cljs$core$async47568 = (function cljs$core$async$__GT_t_cljs$core$async47568(f__$1,blockable__$1,meta47569){
return (new cljs.core.async.t_cljs$core$async47568(f__$1,blockable__$1,meta47569));
});

}

return (new cljs.core.async.t_cljs$core$async47568(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47574 = arguments.length;
switch (G__47574) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47577 = arguments.length;
switch (G__47577) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47580 = arguments.length;
switch (G__47580) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47582 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47582);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47582,ret){
return (function (){
return fn1.call(null,val_47582);
});})(val_47582,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47584 = arguments.length;
switch (G__47584) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29368__auto___47586 = n;
var x_47587 = (0);
while(true){
if((x_47587 < n__29368__auto___47586)){
(a[x_47587] = (0));

var G__47588 = (x_47587 + (1));
x_47587 = G__47588;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__47589 = (i + (1));
i = G__47589;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47590 = (function (flag,meta47591){
this.flag = flag;
this.meta47591 = meta47591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47592,meta47591__$1){
var self__ = this;
var _47592__$1 = this;
return (new cljs.core.async.t_cljs$core$async47590(self__.flag,meta47591__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47592){
var self__ = this;
var _47592__$1 = this;
return self__.meta47591;
});})(flag))
;

cljs.core.async.t_cljs$core$async47590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47590.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47591","meta47591",451415905,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47590";

cljs.core.async.t_cljs$core$async47590.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async47590");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47590 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47590(flag__$1,meta47591){
return (new cljs.core.async.t_cljs$core$async47590(flag__$1,meta47591));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47590(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47593 = (function (flag,cb,meta47594){
this.flag = flag;
this.cb = cb;
this.meta47594 = meta47594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47595,meta47594__$1){
var self__ = this;
var _47595__$1 = this;
return (new cljs.core.async.t_cljs$core$async47593(self__.flag,self__.cb,meta47594__$1));
});

cljs.core.async.t_cljs$core$async47593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47595){
var self__ = this;
var _47595__$1 = this;
return self__.meta47594;
});

cljs.core.async.t_cljs$core$async47593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47594","meta47594",717882110,null)], null);
});

cljs.core.async.t_cljs$core$async47593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47593";

cljs.core.async.t_cljs$core$async47593.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async47593");
});

cljs.core.async.__GT_t_cljs$core$async47593 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47593(flag__$1,cb__$1,meta47594){
return (new cljs.core.async.t_cljs$core$async47593(flag__$1,cb__$1,meta47594));
});

}

return (new cljs.core.async.t_cljs$core$async47593(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47596_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47596_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47597_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28423__auto__ = wport;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47598 = (i + (1));
i = G__47598;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28423__auto__ = ret;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28411__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28411__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28411__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29599__auto__ = [];
var len__29592__auto___47604 = arguments.length;
var i__29593__auto___47605 = (0);
while(true){
if((i__29593__auto___47605 < len__29592__auto___47604)){
args__29599__auto__.push((arguments[i__29593__auto___47605]));

var G__47606 = (i__29593__auto___47605 + (1));
i__29593__auto___47605 = G__47606;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47601){
var map__47602 = p__47601;
var map__47602__$1 = ((((!((map__47602 == null)))?((((map__47602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47602):map__47602);
var opts = map__47602__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47599){
var G__47600 = cljs.core.first.call(null,seq47599);
var seq47599__$1 = cljs.core.next.call(null,seq47599);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47600,seq47599__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47608 = arguments.length;
switch (G__47608) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34079__auto___47654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___47654){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___47654){
return (function (state_47632){
var state_val_47633 = (state_47632[(1)]);
if((state_val_47633 === (7))){
var inst_47628 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47634_47655 = state_47632__$1;
(statearr_47634_47655[(2)] = inst_47628);

(statearr_47634_47655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (1))){
var state_47632__$1 = state_47632;
var statearr_47635_47656 = state_47632__$1;
(statearr_47635_47656[(2)] = null);

(statearr_47635_47656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (4))){
var inst_47611 = (state_47632[(7)]);
var inst_47611__$1 = (state_47632[(2)]);
var inst_47612 = (inst_47611__$1 == null);
var state_47632__$1 = (function (){var statearr_47636 = state_47632;
(statearr_47636[(7)] = inst_47611__$1);

return statearr_47636;
})();
if(cljs.core.truth_(inst_47612)){
var statearr_47637_47657 = state_47632__$1;
(statearr_47637_47657[(1)] = (5));

} else {
var statearr_47638_47658 = state_47632__$1;
(statearr_47638_47658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (13))){
var state_47632__$1 = state_47632;
var statearr_47639_47659 = state_47632__$1;
(statearr_47639_47659[(2)] = null);

(statearr_47639_47659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (6))){
var inst_47611 = (state_47632[(7)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47632__$1,(11),to,inst_47611);
} else {
if((state_val_47633 === (3))){
var inst_47630 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47632__$1,inst_47630);
} else {
if((state_val_47633 === (12))){
var state_47632__$1 = state_47632;
var statearr_47640_47660 = state_47632__$1;
(statearr_47640_47660[(2)] = null);

(statearr_47640_47660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (2))){
var state_47632__$1 = state_47632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47632__$1,(4),from);
} else {
if((state_val_47633 === (11))){
var inst_47621 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
if(cljs.core.truth_(inst_47621)){
var statearr_47641_47661 = state_47632__$1;
(statearr_47641_47661[(1)] = (12));

} else {
var statearr_47642_47662 = state_47632__$1;
(statearr_47642_47662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (9))){
var state_47632__$1 = state_47632;
var statearr_47643_47663 = state_47632__$1;
(statearr_47643_47663[(2)] = null);

(statearr_47643_47663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (5))){
var state_47632__$1 = state_47632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47644_47664 = state_47632__$1;
(statearr_47644_47664[(1)] = (8));

} else {
var statearr_47645_47665 = state_47632__$1;
(statearr_47645_47665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (14))){
var inst_47626 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47646_47666 = state_47632__$1;
(statearr_47646_47666[(2)] = inst_47626);

(statearr_47646_47666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (10))){
var inst_47618 = (state_47632[(2)]);
var state_47632__$1 = state_47632;
var statearr_47647_47667 = state_47632__$1;
(statearr_47647_47667[(2)] = inst_47618);

(statearr_47647_47667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47633 === (8))){
var inst_47615 = cljs.core.async.close_BANG_.call(null,to);
var state_47632__$1 = state_47632;
var statearr_47648_47668 = state_47632__$1;
(statearr_47648_47668[(2)] = inst_47615);

(statearr_47648_47668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___47654))
;
return ((function (switch__33991__auto__,c__34079__auto___47654){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_47649 = [null,null,null,null,null,null,null,null];
(statearr_47649[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_47649[(1)] = (1));

return statearr_47649;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_47632){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47650){if((e47650 instanceof Object)){
var ex__33995__auto__ = e47650;
var statearr_47651_47669 = state_47632;
(statearr_47651_47669[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47670 = state_47632;
state_47632 = G__47670;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_47632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_47632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___47654))
})();
var state__34081__auto__ = (function (){var statearr_47652 = f__34080__auto__.call(null);
(statearr_47652[(6)] = c__34079__auto___47654);

return statearr_47652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___47654))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47671){
var vec__47672 = p__47671;
var v = cljs.core.nth.call(null,vec__47672,(0),null);
var p = cljs.core.nth.call(null,vec__47672,(1),null);
var job = vec__47672;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34079__auto___47843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___47843,res,vec__47672,v,p,job,jobs,results){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___47843,res,vec__47672,v,p,job,jobs,results){
return (function (state_47679){
var state_val_47680 = (state_47679[(1)]);
if((state_val_47680 === (1))){
var state_47679__$1 = state_47679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47679__$1,(2),res,v);
} else {
if((state_val_47680 === (2))){
var inst_47676 = (state_47679[(2)]);
var inst_47677 = cljs.core.async.close_BANG_.call(null,res);
var state_47679__$1 = (function (){var statearr_47681 = state_47679;
(statearr_47681[(7)] = inst_47676);

return statearr_47681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47679__$1,inst_47677);
} else {
return null;
}
}
});})(c__34079__auto___47843,res,vec__47672,v,p,job,jobs,results))
;
return ((function (switch__33991__auto__,c__34079__auto___47843,res,vec__47672,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0 = (function (){
var statearr_47682 = [null,null,null,null,null,null,null,null];
(statearr_47682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__);

(statearr_47682[(1)] = (1));

return statearr_47682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1 = (function (state_47679){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47683){if((e47683 instanceof Object)){
var ex__33995__auto__ = e47683;
var statearr_47684_47844 = state_47679;
(statearr_47684_47844[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47845 = state_47679;
state_47679 = G__47845;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = function(state_47679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1.call(this,state_47679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___47843,res,vec__47672,v,p,job,jobs,results))
})();
var state__34081__auto__ = (function (){var statearr_47685 = f__34080__auto__.call(null);
(statearr_47685[(6)] = c__34079__auto___47843);

return statearr_47685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___47843,res,vec__47672,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47686){
var vec__47687 = p__47686;
var v = cljs.core.nth.call(null,vec__47687,(0),null);
var p = cljs.core.nth.call(null,vec__47687,(1),null);
var job = vec__47687;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29368__auto___47846 = n;
var __47847 = (0);
while(true){
if((__47847 < n__29368__auto___47846)){
var G__47690_47848 = type;
var G__47690_47849__$1 = (((G__47690_47848 instanceof cljs.core.Keyword))?G__47690_47848.fqn:null);
switch (G__47690_47849__$1) {
case "compute":
var c__34079__auto___47851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47847,c__34079__auto___47851,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (__47847,c__34079__auto___47851,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async){
return (function (state_47703){
var state_val_47704 = (state_47703[(1)]);
if((state_val_47704 === (1))){
var state_47703__$1 = state_47703;
var statearr_47705_47852 = state_47703__$1;
(statearr_47705_47852[(2)] = null);

(statearr_47705_47852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (2))){
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47703__$1,(4),jobs);
} else {
if((state_val_47704 === (3))){
var inst_47701 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47703__$1,inst_47701);
} else {
if((state_val_47704 === (4))){
var inst_47693 = (state_47703[(2)]);
var inst_47694 = process.call(null,inst_47693);
var state_47703__$1 = state_47703;
if(cljs.core.truth_(inst_47694)){
var statearr_47706_47853 = state_47703__$1;
(statearr_47706_47853[(1)] = (5));

} else {
var statearr_47707_47854 = state_47703__$1;
(statearr_47707_47854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (5))){
var state_47703__$1 = state_47703;
var statearr_47708_47855 = state_47703__$1;
(statearr_47708_47855[(2)] = null);

(statearr_47708_47855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (6))){
var state_47703__$1 = state_47703;
var statearr_47709_47856 = state_47703__$1;
(statearr_47709_47856[(2)] = null);

(statearr_47709_47856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47704 === (7))){
var inst_47699 = (state_47703[(2)]);
var state_47703__$1 = state_47703;
var statearr_47710_47857 = state_47703__$1;
(statearr_47710_47857[(2)] = inst_47699);

(statearr_47710_47857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47847,c__34079__auto___47851,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async))
;
return ((function (__47847,switch__33991__auto__,c__34079__auto___47851,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0 = (function (){
var statearr_47711 = [null,null,null,null,null,null,null];
(statearr_47711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__);

(statearr_47711[(1)] = (1));

return statearr_47711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1 = (function (state_47703){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47712){if((e47712 instanceof Object)){
var ex__33995__auto__ = e47712;
var statearr_47713_47858 = state_47703;
(statearr_47713_47858[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47859 = state_47703;
state_47703 = G__47859;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = function(state_47703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1.call(this,state_47703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__;
})()
;})(__47847,switch__33991__auto__,c__34079__auto___47851,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async))
})();
var state__34081__auto__ = (function (){var statearr_47714 = f__34080__auto__.call(null);
(statearr_47714[(6)] = c__34079__auto___47851);

return statearr_47714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(__47847,c__34079__auto___47851,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async))
);


break;
case "async":
var c__34079__auto___47860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47847,c__34079__auto___47860,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (__47847,c__34079__auto___47860,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async){
return (function (state_47727){
var state_val_47728 = (state_47727[(1)]);
if((state_val_47728 === (1))){
var state_47727__$1 = state_47727;
var statearr_47729_47861 = state_47727__$1;
(statearr_47729_47861[(2)] = null);

(statearr_47729_47861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47728 === (2))){
var state_47727__$1 = state_47727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47727__$1,(4),jobs);
} else {
if((state_val_47728 === (3))){
var inst_47725 = (state_47727[(2)]);
var state_47727__$1 = state_47727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47727__$1,inst_47725);
} else {
if((state_val_47728 === (4))){
var inst_47717 = (state_47727[(2)]);
var inst_47718 = async.call(null,inst_47717);
var state_47727__$1 = state_47727;
if(cljs.core.truth_(inst_47718)){
var statearr_47730_47862 = state_47727__$1;
(statearr_47730_47862[(1)] = (5));

} else {
var statearr_47731_47863 = state_47727__$1;
(statearr_47731_47863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47728 === (5))){
var state_47727__$1 = state_47727;
var statearr_47732_47864 = state_47727__$1;
(statearr_47732_47864[(2)] = null);

(statearr_47732_47864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47728 === (6))){
var state_47727__$1 = state_47727;
var statearr_47733_47865 = state_47727__$1;
(statearr_47733_47865[(2)] = null);

(statearr_47733_47865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47728 === (7))){
var inst_47723 = (state_47727[(2)]);
var state_47727__$1 = state_47727;
var statearr_47734_47866 = state_47727__$1;
(statearr_47734_47866[(2)] = inst_47723);

(statearr_47734_47866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47847,c__34079__auto___47860,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async))
;
return ((function (__47847,switch__33991__auto__,c__34079__auto___47860,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0 = (function (){
var statearr_47735 = [null,null,null,null,null,null,null];
(statearr_47735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__);

(statearr_47735[(1)] = (1));

return statearr_47735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1 = (function (state_47727){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47736){if((e47736 instanceof Object)){
var ex__33995__auto__ = e47736;
var statearr_47737_47867 = state_47727;
(statearr_47737_47867[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47868 = state_47727;
state_47727 = G__47868;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = function(state_47727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1.call(this,state_47727);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__;
})()
;})(__47847,switch__33991__auto__,c__34079__auto___47860,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async))
})();
var state__34081__auto__ = (function (){var statearr_47738 = f__34080__auto__.call(null);
(statearr_47738[(6)] = c__34079__auto___47860);

return statearr_47738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(__47847,c__34079__auto___47860,G__47690_47848,G__47690_47849__$1,n__29368__auto___47846,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47690_47849__$1)].join('')));

}

var G__47869 = (__47847 + (1));
__47847 = G__47869;
continue;
} else {
}
break;
}

var c__34079__auto___47870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___47870,jobs,results,process,async){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___47870,jobs,results,process,async){
return (function (state_47760){
var state_val_47761 = (state_47760[(1)]);
if((state_val_47761 === (1))){
var state_47760__$1 = state_47760;
var statearr_47762_47871 = state_47760__$1;
(statearr_47762_47871[(2)] = null);

(statearr_47762_47871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (2))){
var state_47760__$1 = state_47760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47760__$1,(4),from);
} else {
if((state_val_47761 === (3))){
var inst_47758 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47760__$1,inst_47758);
} else {
if((state_val_47761 === (4))){
var inst_47741 = (state_47760[(7)]);
var inst_47741__$1 = (state_47760[(2)]);
var inst_47742 = (inst_47741__$1 == null);
var state_47760__$1 = (function (){var statearr_47763 = state_47760;
(statearr_47763[(7)] = inst_47741__$1);

return statearr_47763;
})();
if(cljs.core.truth_(inst_47742)){
var statearr_47764_47872 = state_47760__$1;
(statearr_47764_47872[(1)] = (5));

} else {
var statearr_47765_47873 = state_47760__$1;
(statearr_47765_47873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (5))){
var inst_47744 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47760__$1 = state_47760;
var statearr_47766_47874 = state_47760__$1;
(statearr_47766_47874[(2)] = inst_47744);

(statearr_47766_47874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (6))){
var inst_47746 = (state_47760[(8)]);
var inst_47741 = (state_47760[(7)]);
var inst_47746__$1 = cljs.core.async.chan.call(null,(1));
var inst_47747 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47748 = [inst_47741,inst_47746__$1];
var inst_47749 = (new cljs.core.PersistentVector(null,2,(5),inst_47747,inst_47748,null));
var state_47760__$1 = (function (){var statearr_47767 = state_47760;
(statearr_47767[(8)] = inst_47746__$1);

return statearr_47767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47760__$1,(8),jobs,inst_47749);
} else {
if((state_val_47761 === (7))){
var inst_47756 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
var statearr_47768_47875 = state_47760__$1;
(statearr_47768_47875[(2)] = inst_47756);

(statearr_47768_47875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (8))){
var inst_47746 = (state_47760[(8)]);
var inst_47751 = (state_47760[(2)]);
var state_47760__$1 = (function (){var statearr_47769 = state_47760;
(statearr_47769[(9)] = inst_47751);

return statearr_47769;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47760__$1,(9),results,inst_47746);
} else {
if((state_val_47761 === (9))){
var inst_47753 = (state_47760[(2)]);
var state_47760__$1 = (function (){var statearr_47770 = state_47760;
(statearr_47770[(10)] = inst_47753);

return statearr_47770;
})();
var statearr_47771_47876 = state_47760__$1;
(statearr_47771_47876[(2)] = null);

(statearr_47771_47876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___47870,jobs,results,process,async))
;
return ((function (switch__33991__auto__,c__34079__auto___47870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0 = (function (){
var statearr_47772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__);

(statearr_47772[(1)] = (1));

return statearr_47772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1 = (function (state_47760){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47773){if((e47773 instanceof Object)){
var ex__33995__auto__ = e47773;
var statearr_47774_47877 = state_47760;
(statearr_47774_47877[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47878 = state_47760;
state_47760 = G__47878;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = function(state_47760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1.call(this,state_47760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___47870,jobs,results,process,async))
})();
var state__34081__auto__ = (function (){var statearr_47775 = f__34080__auto__.call(null);
(statearr_47775[(6)] = c__34079__auto___47870);

return statearr_47775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___47870,jobs,results,process,async))
);


var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__,jobs,results,process,async){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__,jobs,results,process,async){
return (function (state_47813){
var state_val_47814 = (state_47813[(1)]);
if((state_val_47814 === (7))){
var inst_47809 = (state_47813[(2)]);
var state_47813__$1 = state_47813;
var statearr_47815_47879 = state_47813__$1;
(statearr_47815_47879[(2)] = inst_47809);

(statearr_47815_47879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (20))){
var state_47813__$1 = state_47813;
var statearr_47816_47880 = state_47813__$1;
(statearr_47816_47880[(2)] = null);

(statearr_47816_47880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (1))){
var state_47813__$1 = state_47813;
var statearr_47817_47881 = state_47813__$1;
(statearr_47817_47881[(2)] = null);

(statearr_47817_47881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (4))){
var inst_47778 = (state_47813[(7)]);
var inst_47778__$1 = (state_47813[(2)]);
var inst_47779 = (inst_47778__$1 == null);
var state_47813__$1 = (function (){var statearr_47818 = state_47813;
(statearr_47818[(7)] = inst_47778__$1);

return statearr_47818;
})();
if(cljs.core.truth_(inst_47779)){
var statearr_47819_47882 = state_47813__$1;
(statearr_47819_47882[(1)] = (5));

} else {
var statearr_47820_47883 = state_47813__$1;
(statearr_47820_47883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (15))){
var inst_47791 = (state_47813[(8)]);
var state_47813__$1 = state_47813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47813__$1,(18),to,inst_47791);
} else {
if((state_val_47814 === (21))){
var inst_47804 = (state_47813[(2)]);
var state_47813__$1 = state_47813;
var statearr_47821_47884 = state_47813__$1;
(statearr_47821_47884[(2)] = inst_47804);

(statearr_47821_47884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (13))){
var inst_47806 = (state_47813[(2)]);
var state_47813__$1 = (function (){var statearr_47822 = state_47813;
(statearr_47822[(9)] = inst_47806);

return statearr_47822;
})();
var statearr_47823_47885 = state_47813__$1;
(statearr_47823_47885[(2)] = null);

(statearr_47823_47885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (6))){
var inst_47778 = (state_47813[(7)]);
var state_47813__$1 = state_47813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47813__$1,(11),inst_47778);
} else {
if((state_val_47814 === (17))){
var inst_47799 = (state_47813[(2)]);
var state_47813__$1 = state_47813;
if(cljs.core.truth_(inst_47799)){
var statearr_47824_47886 = state_47813__$1;
(statearr_47824_47886[(1)] = (19));

} else {
var statearr_47825_47887 = state_47813__$1;
(statearr_47825_47887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (3))){
var inst_47811 = (state_47813[(2)]);
var state_47813__$1 = state_47813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47813__$1,inst_47811);
} else {
if((state_val_47814 === (12))){
var inst_47788 = (state_47813[(10)]);
var state_47813__$1 = state_47813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47813__$1,(14),inst_47788);
} else {
if((state_val_47814 === (2))){
var state_47813__$1 = state_47813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47813__$1,(4),results);
} else {
if((state_val_47814 === (19))){
var state_47813__$1 = state_47813;
var statearr_47826_47888 = state_47813__$1;
(statearr_47826_47888[(2)] = null);

(statearr_47826_47888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (11))){
var inst_47788 = (state_47813[(2)]);
var state_47813__$1 = (function (){var statearr_47827 = state_47813;
(statearr_47827[(10)] = inst_47788);

return statearr_47827;
})();
var statearr_47828_47889 = state_47813__$1;
(statearr_47828_47889[(2)] = null);

(statearr_47828_47889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (9))){
var state_47813__$1 = state_47813;
var statearr_47829_47890 = state_47813__$1;
(statearr_47829_47890[(2)] = null);

(statearr_47829_47890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (5))){
var state_47813__$1 = state_47813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47830_47891 = state_47813__$1;
(statearr_47830_47891[(1)] = (8));

} else {
var statearr_47831_47892 = state_47813__$1;
(statearr_47831_47892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (14))){
var inst_47791 = (state_47813[(8)]);
var inst_47793 = (state_47813[(11)]);
var inst_47791__$1 = (state_47813[(2)]);
var inst_47792 = (inst_47791__$1 == null);
var inst_47793__$1 = cljs.core.not.call(null,inst_47792);
var state_47813__$1 = (function (){var statearr_47832 = state_47813;
(statearr_47832[(8)] = inst_47791__$1);

(statearr_47832[(11)] = inst_47793__$1);

return statearr_47832;
})();
if(inst_47793__$1){
var statearr_47833_47893 = state_47813__$1;
(statearr_47833_47893[(1)] = (15));

} else {
var statearr_47834_47894 = state_47813__$1;
(statearr_47834_47894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (16))){
var inst_47793 = (state_47813[(11)]);
var state_47813__$1 = state_47813;
var statearr_47835_47895 = state_47813__$1;
(statearr_47835_47895[(2)] = inst_47793);

(statearr_47835_47895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (10))){
var inst_47785 = (state_47813[(2)]);
var state_47813__$1 = state_47813;
var statearr_47836_47896 = state_47813__$1;
(statearr_47836_47896[(2)] = inst_47785);

(statearr_47836_47896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (18))){
var inst_47796 = (state_47813[(2)]);
var state_47813__$1 = state_47813;
var statearr_47837_47897 = state_47813__$1;
(statearr_47837_47897[(2)] = inst_47796);

(statearr_47837_47897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47814 === (8))){
var inst_47782 = cljs.core.async.close_BANG_.call(null,to);
var state_47813__$1 = state_47813;
var statearr_47838_47898 = state_47813__$1;
(statearr_47838_47898[(2)] = inst_47782);

(statearr_47838_47898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto__,jobs,results,process,async))
;
return ((function (switch__33991__auto__,c__34079__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0 = (function (){
var statearr_47839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__);

(statearr_47839[(1)] = (1));

return statearr_47839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1 = (function (state_47813){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47840){if((e47840 instanceof Object)){
var ex__33995__auto__ = e47840;
var statearr_47841_47899 = state_47813;
(statearr_47841_47899[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47900 = state_47813;
state_47813 = G__47900;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__ = function(state_47813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1.call(this,state_47813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__,jobs,results,process,async))
})();
var state__34081__auto__ = (function (){var statearr_47842 = f__34080__auto__.call(null);
(statearr_47842[(6)] = c__34079__auto__);

return statearr_47842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__,jobs,results,process,async))
);

return c__34079__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47902 = arguments.length;
switch (G__47902) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47905 = arguments.length;
switch (G__47905) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47908 = arguments.length;
switch (G__47908) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34079__auto___47957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___47957,tc,fc){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___47957,tc,fc){
return (function (state_47934){
var state_val_47935 = (state_47934[(1)]);
if((state_val_47935 === (7))){
var inst_47930 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
var statearr_47936_47958 = state_47934__$1;
(statearr_47936_47958[(2)] = inst_47930);

(statearr_47936_47958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (1))){
var state_47934__$1 = state_47934;
var statearr_47937_47959 = state_47934__$1;
(statearr_47937_47959[(2)] = null);

(statearr_47937_47959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (4))){
var inst_47911 = (state_47934[(7)]);
var inst_47911__$1 = (state_47934[(2)]);
var inst_47912 = (inst_47911__$1 == null);
var state_47934__$1 = (function (){var statearr_47938 = state_47934;
(statearr_47938[(7)] = inst_47911__$1);

return statearr_47938;
})();
if(cljs.core.truth_(inst_47912)){
var statearr_47939_47960 = state_47934__$1;
(statearr_47939_47960[(1)] = (5));

} else {
var statearr_47940_47961 = state_47934__$1;
(statearr_47940_47961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (13))){
var state_47934__$1 = state_47934;
var statearr_47941_47962 = state_47934__$1;
(statearr_47941_47962[(2)] = null);

(statearr_47941_47962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (6))){
var inst_47911 = (state_47934[(7)]);
var inst_47917 = p.call(null,inst_47911);
var state_47934__$1 = state_47934;
if(cljs.core.truth_(inst_47917)){
var statearr_47942_47963 = state_47934__$1;
(statearr_47942_47963[(1)] = (9));

} else {
var statearr_47943_47964 = state_47934__$1;
(statearr_47943_47964[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (3))){
var inst_47932 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47934__$1,inst_47932);
} else {
if((state_val_47935 === (12))){
var state_47934__$1 = state_47934;
var statearr_47944_47965 = state_47934__$1;
(statearr_47944_47965[(2)] = null);

(statearr_47944_47965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (2))){
var state_47934__$1 = state_47934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47934__$1,(4),ch);
} else {
if((state_val_47935 === (11))){
var inst_47911 = (state_47934[(7)]);
var inst_47921 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47934__$1,(8),inst_47921,inst_47911);
} else {
if((state_val_47935 === (9))){
var state_47934__$1 = state_47934;
var statearr_47945_47966 = state_47934__$1;
(statearr_47945_47966[(2)] = tc);

(statearr_47945_47966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (5))){
var inst_47914 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47915 = cljs.core.async.close_BANG_.call(null,fc);
var state_47934__$1 = (function (){var statearr_47946 = state_47934;
(statearr_47946[(8)] = inst_47914);

return statearr_47946;
})();
var statearr_47947_47967 = state_47934__$1;
(statearr_47947_47967[(2)] = inst_47915);

(statearr_47947_47967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (14))){
var inst_47928 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
var statearr_47948_47968 = state_47934__$1;
(statearr_47948_47968[(2)] = inst_47928);

(statearr_47948_47968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (10))){
var state_47934__$1 = state_47934;
var statearr_47949_47969 = state_47934__$1;
(statearr_47949_47969[(2)] = fc);

(statearr_47949_47969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47935 === (8))){
var inst_47923 = (state_47934[(2)]);
var state_47934__$1 = state_47934;
if(cljs.core.truth_(inst_47923)){
var statearr_47950_47970 = state_47934__$1;
(statearr_47950_47970[(1)] = (12));

} else {
var statearr_47951_47971 = state_47934__$1;
(statearr_47951_47971[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___47957,tc,fc))
;
return ((function (switch__33991__auto__,c__34079__auto___47957,tc,fc){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_47952 = [null,null,null,null,null,null,null,null,null];
(statearr_47952[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_47952[(1)] = (1));

return statearr_47952;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_47934){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e47953){if((e47953 instanceof Object)){
var ex__33995__auto__ = e47953;
var statearr_47954_47972 = state_47934;
(statearr_47954_47972[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47973 = state_47934;
state_47934 = G__47973;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_47934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_47934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___47957,tc,fc))
})();
var state__34081__auto__ = (function (){var statearr_47955 = f__34080__auto__.call(null);
(statearr_47955[(6)] = c__34079__auto___47957);

return statearr_47955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___47957,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__){
return (function (state_47994){
var state_val_47995 = (state_47994[(1)]);
if((state_val_47995 === (7))){
var inst_47990 = (state_47994[(2)]);
var state_47994__$1 = state_47994;
var statearr_47996_48014 = state_47994__$1;
(statearr_47996_48014[(2)] = inst_47990);

(statearr_47996_48014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (1))){
var inst_47974 = init;
var state_47994__$1 = (function (){var statearr_47997 = state_47994;
(statearr_47997[(7)] = inst_47974);

return statearr_47997;
})();
var statearr_47998_48015 = state_47994__$1;
(statearr_47998_48015[(2)] = null);

(statearr_47998_48015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (4))){
var inst_47977 = (state_47994[(8)]);
var inst_47977__$1 = (state_47994[(2)]);
var inst_47978 = (inst_47977__$1 == null);
var state_47994__$1 = (function (){var statearr_47999 = state_47994;
(statearr_47999[(8)] = inst_47977__$1);

return statearr_47999;
})();
if(cljs.core.truth_(inst_47978)){
var statearr_48000_48016 = state_47994__$1;
(statearr_48000_48016[(1)] = (5));

} else {
var statearr_48001_48017 = state_47994__$1;
(statearr_48001_48017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (6))){
var inst_47981 = (state_47994[(9)]);
var inst_47974 = (state_47994[(7)]);
var inst_47977 = (state_47994[(8)]);
var inst_47981__$1 = f.call(null,inst_47974,inst_47977);
var inst_47982 = cljs.core.reduced_QMARK_.call(null,inst_47981__$1);
var state_47994__$1 = (function (){var statearr_48002 = state_47994;
(statearr_48002[(9)] = inst_47981__$1);

return statearr_48002;
})();
if(inst_47982){
var statearr_48003_48018 = state_47994__$1;
(statearr_48003_48018[(1)] = (8));

} else {
var statearr_48004_48019 = state_47994__$1;
(statearr_48004_48019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (3))){
var inst_47992 = (state_47994[(2)]);
var state_47994__$1 = state_47994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47994__$1,inst_47992);
} else {
if((state_val_47995 === (2))){
var state_47994__$1 = state_47994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47994__$1,(4),ch);
} else {
if((state_val_47995 === (9))){
var inst_47981 = (state_47994[(9)]);
var inst_47974 = inst_47981;
var state_47994__$1 = (function (){var statearr_48005 = state_47994;
(statearr_48005[(7)] = inst_47974);

return statearr_48005;
})();
var statearr_48006_48020 = state_47994__$1;
(statearr_48006_48020[(2)] = null);

(statearr_48006_48020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (5))){
var inst_47974 = (state_47994[(7)]);
var state_47994__$1 = state_47994;
var statearr_48007_48021 = state_47994__$1;
(statearr_48007_48021[(2)] = inst_47974);

(statearr_48007_48021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (10))){
var inst_47988 = (state_47994[(2)]);
var state_47994__$1 = state_47994;
var statearr_48008_48022 = state_47994__$1;
(statearr_48008_48022[(2)] = inst_47988);

(statearr_48008_48022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47995 === (8))){
var inst_47981 = (state_47994[(9)]);
var inst_47984 = cljs.core.deref.call(null,inst_47981);
var state_47994__$1 = state_47994;
var statearr_48009_48023 = state_47994__$1;
(statearr_48009_48023[(2)] = inst_47984);

(statearr_48009_48023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33992__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33992__auto____0 = (function (){
var statearr_48010 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48010[(0)] = cljs$core$async$reduce_$_state_machine__33992__auto__);

(statearr_48010[(1)] = (1));

return statearr_48010;
});
var cljs$core$async$reduce_$_state_machine__33992__auto____1 = (function (state_47994){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_47994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48011){if((e48011 instanceof Object)){
var ex__33995__auto__ = e48011;
var statearr_48012_48024 = state_47994;
(statearr_48012_48024[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48025 = state_47994;
state_47994 = G__48025;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33992__auto__ = function(state_47994){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33992__auto____1.call(this,state_47994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33992__auto____0;
cljs$core$async$reduce_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33992__auto____1;
return cljs$core$async$reduce_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__))
})();
var state__34081__auto__ = (function (){var statearr_48013 = f__34080__auto__.call(null);
(statearr_48013[(6)] = c__34079__auto__);

return statearr_48013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__))
);

return c__34079__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__,f__$1){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__,f__$1){
return (function (state_48031){
var state_val_48032 = (state_48031[(1)]);
if((state_val_48032 === (1))){
var inst_48026 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48031__$1 = state_48031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48031__$1,(2),inst_48026);
} else {
if((state_val_48032 === (2))){
var inst_48028 = (state_48031[(2)]);
var inst_48029 = f__$1.call(null,inst_48028);
var state_48031__$1 = state_48031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48031__$1,inst_48029);
} else {
return null;
}
}
});})(c__34079__auto__,f__$1))
;
return ((function (switch__33991__auto__,c__34079__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33992__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33992__auto____0 = (function (){
var statearr_48033 = [null,null,null,null,null,null,null];
(statearr_48033[(0)] = cljs$core$async$transduce_$_state_machine__33992__auto__);

(statearr_48033[(1)] = (1));

return statearr_48033;
});
var cljs$core$async$transduce_$_state_machine__33992__auto____1 = (function (state_48031){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48034){if((e48034 instanceof Object)){
var ex__33995__auto__ = e48034;
var statearr_48035_48037 = state_48031;
(statearr_48035_48037[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48038 = state_48031;
state_48031 = G__48038;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33992__auto__ = function(state_48031){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33992__auto____1.call(this,state_48031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33992__auto____0;
cljs$core$async$transduce_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33992__auto____1;
return cljs$core$async$transduce_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__,f__$1))
})();
var state__34081__auto__ = (function (){var statearr_48036 = f__34080__auto__.call(null);
(statearr_48036[(6)] = c__34079__auto__);

return statearr_48036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__,f__$1))
);

return c__34079__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48040 = arguments.length;
switch (G__48040) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__){
return (function (state_48065){
var state_val_48066 = (state_48065[(1)]);
if((state_val_48066 === (7))){
var inst_48047 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
var statearr_48067_48088 = state_48065__$1;
(statearr_48067_48088[(2)] = inst_48047);

(statearr_48067_48088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (1))){
var inst_48041 = cljs.core.seq.call(null,coll);
var inst_48042 = inst_48041;
var state_48065__$1 = (function (){var statearr_48068 = state_48065;
(statearr_48068[(7)] = inst_48042);

return statearr_48068;
})();
var statearr_48069_48089 = state_48065__$1;
(statearr_48069_48089[(2)] = null);

(statearr_48069_48089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (4))){
var inst_48042 = (state_48065[(7)]);
var inst_48045 = cljs.core.first.call(null,inst_48042);
var state_48065__$1 = state_48065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48065__$1,(7),ch,inst_48045);
} else {
if((state_val_48066 === (13))){
var inst_48059 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
var statearr_48070_48090 = state_48065__$1;
(statearr_48070_48090[(2)] = inst_48059);

(statearr_48070_48090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (6))){
var inst_48050 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
if(cljs.core.truth_(inst_48050)){
var statearr_48071_48091 = state_48065__$1;
(statearr_48071_48091[(1)] = (8));

} else {
var statearr_48072_48092 = state_48065__$1;
(statearr_48072_48092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (3))){
var inst_48063 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48065__$1,inst_48063);
} else {
if((state_val_48066 === (12))){
var state_48065__$1 = state_48065;
var statearr_48073_48093 = state_48065__$1;
(statearr_48073_48093[(2)] = null);

(statearr_48073_48093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (2))){
var inst_48042 = (state_48065[(7)]);
var state_48065__$1 = state_48065;
if(cljs.core.truth_(inst_48042)){
var statearr_48074_48094 = state_48065__$1;
(statearr_48074_48094[(1)] = (4));

} else {
var statearr_48075_48095 = state_48065__$1;
(statearr_48075_48095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (11))){
var inst_48056 = cljs.core.async.close_BANG_.call(null,ch);
var state_48065__$1 = state_48065;
var statearr_48076_48096 = state_48065__$1;
(statearr_48076_48096[(2)] = inst_48056);

(statearr_48076_48096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (9))){
var state_48065__$1 = state_48065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48077_48097 = state_48065__$1;
(statearr_48077_48097[(1)] = (11));

} else {
var statearr_48078_48098 = state_48065__$1;
(statearr_48078_48098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (5))){
var inst_48042 = (state_48065[(7)]);
var state_48065__$1 = state_48065;
var statearr_48079_48099 = state_48065__$1;
(statearr_48079_48099[(2)] = inst_48042);

(statearr_48079_48099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (10))){
var inst_48061 = (state_48065[(2)]);
var state_48065__$1 = state_48065;
var statearr_48080_48100 = state_48065__$1;
(statearr_48080_48100[(2)] = inst_48061);

(statearr_48080_48100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48066 === (8))){
var inst_48042 = (state_48065[(7)]);
var inst_48052 = cljs.core.next.call(null,inst_48042);
var inst_48042__$1 = inst_48052;
var state_48065__$1 = (function (){var statearr_48081 = state_48065;
(statearr_48081[(7)] = inst_48042__$1);

return statearr_48081;
})();
var statearr_48082_48101 = state_48065__$1;
(statearr_48082_48101[(2)] = null);

(statearr_48082_48101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_48083 = [null,null,null,null,null,null,null,null];
(statearr_48083[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_48083[(1)] = (1));

return statearr_48083;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_48065){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48084){if((e48084 instanceof Object)){
var ex__33995__auto__ = e48084;
var statearr_48085_48102 = state_48065;
(statearr_48085_48102[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48103 = state_48065;
state_48065 = G__48103;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_48065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_48065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__))
})();
var state__34081__auto__ = (function (){var statearr_48086 = f__34080__auto__.call(null);
(statearr_48086[(6)] = c__34079__auto__);

return statearr_48086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__))
);

return c__34079__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29106__auto__ = (((_ == null))?null:_);
var m__29107__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,_);
} else {
var m__29107__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29107__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m);
} else {
var m__29107__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48104 = (function (ch,cs,meta48105){
this.ch = ch;
this.cs = cs;
this.meta48105 = meta48105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48106,meta48105__$1){
var self__ = this;
var _48106__$1 = this;
return (new cljs.core.async.t_cljs$core$async48104(self__.ch,self__.cs,meta48105__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48106){
var self__ = this;
var _48106__$1 = this;
return self__.meta48105;
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48105","meta48105",-1542626292,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48104";

cljs.core.async.t_cljs$core$async48104.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48104");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48104 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48104(ch__$1,cs__$1,meta48105){
return (new cljs.core.async.t_cljs$core$async48104(ch__$1,cs__$1,meta48105));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48104(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34079__auto___48326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___48326,cs,m,dchan,dctr,done){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___48326,cs,m,dchan,dctr,done){
return (function (state_48241){
var state_val_48242 = (state_48241[(1)]);
if((state_val_48242 === (7))){
var inst_48237 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48243_48327 = state_48241__$1;
(statearr_48243_48327[(2)] = inst_48237);

(statearr_48243_48327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (20))){
var inst_48140 = (state_48241[(7)]);
var inst_48152 = cljs.core.first.call(null,inst_48140);
var inst_48153 = cljs.core.nth.call(null,inst_48152,(0),null);
var inst_48154 = cljs.core.nth.call(null,inst_48152,(1),null);
var state_48241__$1 = (function (){var statearr_48244 = state_48241;
(statearr_48244[(8)] = inst_48153);

return statearr_48244;
})();
if(cljs.core.truth_(inst_48154)){
var statearr_48245_48328 = state_48241__$1;
(statearr_48245_48328[(1)] = (22));

} else {
var statearr_48246_48329 = state_48241__$1;
(statearr_48246_48329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (27))){
var inst_48184 = (state_48241[(9)]);
var inst_48182 = (state_48241[(10)]);
var inst_48109 = (state_48241[(11)]);
var inst_48189 = (state_48241[(12)]);
var inst_48189__$1 = cljs.core._nth.call(null,inst_48182,inst_48184);
var inst_48190 = cljs.core.async.put_BANG_.call(null,inst_48189__$1,inst_48109,done);
var state_48241__$1 = (function (){var statearr_48247 = state_48241;
(statearr_48247[(12)] = inst_48189__$1);

return statearr_48247;
})();
if(cljs.core.truth_(inst_48190)){
var statearr_48248_48330 = state_48241__$1;
(statearr_48248_48330[(1)] = (30));

} else {
var statearr_48249_48331 = state_48241__$1;
(statearr_48249_48331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (1))){
var state_48241__$1 = state_48241;
var statearr_48250_48332 = state_48241__$1;
(statearr_48250_48332[(2)] = null);

(statearr_48250_48332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (24))){
var inst_48140 = (state_48241[(7)]);
var inst_48159 = (state_48241[(2)]);
var inst_48160 = cljs.core.next.call(null,inst_48140);
var inst_48118 = inst_48160;
var inst_48119 = null;
var inst_48120 = (0);
var inst_48121 = (0);
var state_48241__$1 = (function (){var statearr_48251 = state_48241;
(statearr_48251[(13)] = inst_48121);

(statearr_48251[(14)] = inst_48120);

(statearr_48251[(15)] = inst_48118);

(statearr_48251[(16)] = inst_48119);

(statearr_48251[(17)] = inst_48159);

return statearr_48251;
})();
var statearr_48252_48333 = state_48241__$1;
(statearr_48252_48333[(2)] = null);

(statearr_48252_48333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (39))){
var state_48241__$1 = state_48241;
var statearr_48256_48334 = state_48241__$1;
(statearr_48256_48334[(2)] = null);

(statearr_48256_48334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (4))){
var inst_48109 = (state_48241[(11)]);
var inst_48109__$1 = (state_48241[(2)]);
var inst_48110 = (inst_48109__$1 == null);
var state_48241__$1 = (function (){var statearr_48257 = state_48241;
(statearr_48257[(11)] = inst_48109__$1);

return statearr_48257;
})();
if(cljs.core.truth_(inst_48110)){
var statearr_48258_48335 = state_48241__$1;
(statearr_48258_48335[(1)] = (5));

} else {
var statearr_48259_48336 = state_48241__$1;
(statearr_48259_48336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (15))){
var inst_48121 = (state_48241[(13)]);
var inst_48120 = (state_48241[(14)]);
var inst_48118 = (state_48241[(15)]);
var inst_48119 = (state_48241[(16)]);
var inst_48136 = (state_48241[(2)]);
var inst_48137 = (inst_48121 + (1));
var tmp48253 = inst_48120;
var tmp48254 = inst_48118;
var tmp48255 = inst_48119;
var inst_48118__$1 = tmp48254;
var inst_48119__$1 = tmp48255;
var inst_48120__$1 = tmp48253;
var inst_48121__$1 = inst_48137;
var state_48241__$1 = (function (){var statearr_48260 = state_48241;
(statearr_48260[(13)] = inst_48121__$1);

(statearr_48260[(14)] = inst_48120__$1);

(statearr_48260[(18)] = inst_48136);

(statearr_48260[(15)] = inst_48118__$1);

(statearr_48260[(16)] = inst_48119__$1);

return statearr_48260;
})();
var statearr_48261_48337 = state_48241__$1;
(statearr_48261_48337[(2)] = null);

(statearr_48261_48337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (21))){
var inst_48163 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48265_48338 = state_48241__$1;
(statearr_48265_48338[(2)] = inst_48163);

(statearr_48265_48338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (31))){
var inst_48189 = (state_48241[(12)]);
var inst_48193 = done.call(null,null);
var inst_48194 = cljs.core.async.untap_STAR_.call(null,m,inst_48189);
var state_48241__$1 = (function (){var statearr_48266 = state_48241;
(statearr_48266[(19)] = inst_48193);

return statearr_48266;
})();
var statearr_48267_48339 = state_48241__$1;
(statearr_48267_48339[(2)] = inst_48194);

(statearr_48267_48339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (32))){
var inst_48184 = (state_48241[(9)]);
var inst_48182 = (state_48241[(10)]);
var inst_48181 = (state_48241[(20)]);
var inst_48183 = (state_48241[(21)]);
var inst_48196 = (state_48241[(2)]);
var inst_48197 = (inst_48184 + (1));
var tmp48262 = inst_48182;
var tmp48263 = inst_48181;
var tmp48264 = inst_48183;
var inst_48181__$1 = tmp48263;
var inst_48182__$1 = tmp48262;
var inst_48183__$1 = tmp48264;
var inst_48184__$1 = inst_48197;
var state_48241__$1 = (function (){var statearr_48268 = state_48241;
(statearr_48268[(9)] = inst_48184__$1);

(statearr_48268[(10)] = inst_48182__$1);

(statearr_48268[(22)] = inst_48196);

(statearr_48268[(20)] = inst_48181__$1);

(statearr_48268[(21)] = inst_48183__$1);

return statearr_48268;
})();
var statearr_48269_48340 = state_48241__$1;
(statearr_48269_48340[(2)] = null);

(statearr_48269_48340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (40))){
var inst_48209 = (state_48241[(23)]);
var inst_48213 = done.call(null,null);
var inst_48214 = cljs.core.async.untap_STAR_.call(null,m,inst_48209);
var state_48241__$1 = (function (){var statearr_48270 = state_48241;
(statearr_48270[(24)] = inst_48213);

return statearr_48270;
})();
var statearr_48271_48341 = state_48241__$1;
(statearr_48271_48341[(2)] = inst_48214);

(statearr_48271_48341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (33))){
var inst_48200 = (state_48241[(25)]);
var inst_48202 = cljs.core.chunked_seq_QMARK_.call(null,inst_48200);
var state_48241__$1 = state_48241;
if(inst_48202){
var statearr_48272_48342 = state_48241__$1;
(statearr_48272_48342[(1)] = (36));

} else {
var statearr_48273_48343 = state_48241__$1;
(statearr_48273_48343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (13))){
var inst_48130 = (state_48241[(26)]);
var inst_48133 = cljs.core.async.close_BANG_.call(null,inst_48130);
var state_48241__$1 = state_48241;
var statearr_48274_48344 = state_48241__$1;
(statearr_48274_48344[(2)] = inst_48133);

(statearr_48274_48344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (22))){
var inst_48153 = (state_48241[(8)]);
var inst_48156 = cljs.core.async.close_BANG_.call(null,inst_48153);
var state_48241__$1 = state_48241;
var statearr_48275_48345 = state_48241__$1;
(statearr_48275_48345[(2)] = inst_48156);

(statearr_48275_48345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (36))){
var inst_48200 = (state_48241[(25)]);
var inst_48204 = cljs.core.chunk_first.call(null,inst_48200);
var inst_48205 = cljs.core.chunk_rest.call(null,inst_48200);
var inst_48206 = cljs.core.count.call(null,inst_48204);
var inst_48181 = inst_48205;
var inst_48182 = inst_48204;
var inst_48183 = inst_48206;
var inst_48184 = (0);
var state_48241__$1 = (function (){var statearr_48276 = state_48241;
(statearr_48276[(9)] = inst_48184);

(statearr_48276[(10)] = inst_48182);

(statearr_48276[(20)] = inst_48181);

(statearr_48276[(21)] = inst_48183);

return statearr_48276;
})();
var statearr_48277_48346 = state_48241__$1;
(statearr_48277_48346[(2)] = null);

(statearr_48277_48346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (41))){
var inst_48200 = (state_48241[(25)]);
var inst_48216 = (state_48241[(2)]);
var inst_48217 = cljs.core.next.call(null,inst_48200);
var inst_48181 = inst_48217;
var inst_48182 = null;
var inst_48183 = (0);
var inst_48184 = (0);
var state_48241__$1 = (function (){var statearr_48278 = state_48241;
(statearr_48278[(9)] = inst_48184);

(statearr_48278[(10)] = inst_48182);

(statearr_48278[(20)] = inst_48181);

(statearr_48278[(27)] = inst_48216);

(statearr_48278[(21)] = inst_48183);

return statearr_48278;
})();
var statearr_48279_48347 = state_48241__$1;
(statearr_48279_48347[(2)] = null);

(statearr_48279_48347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (43))){
var state_48241__$1 = state_48241;
var statearr_48280_48348 = state_48241__$1;
(statearr_48280_48348[(2)] = null);

(statearr_48280_48348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (29))){
var inst_48225 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48281_48349 = state_48241__$1;
(statearr_48281_48349[(2)] = inst_48225);

(statearr_48281_48349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (44))){
var inst_48234 = (state_48241[(2)]);
var state_48241__$1 = (function (){var statearr_48282 = state_48241;
(statearr_48282[(28)] = inst_48234);

return statearr_48282;
})();
var statearr_48283_48350 = state_48241__$1;
(statearr_48283_48350[(2)] = null);

(statearr_48283_48350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (6))){
var inst_48173 = (state_48241[(29)]);
var inst_48172 = cljs.core.deref.call(null,cs);
var inst_48173__$1 = cljs.core.keys.call(null,inst_48172);
var inst_48174 = cljs.core.count.call(null,inst_48173__$1);
var inst_48175 = cljs.core.reset_BANG_.call(null,dctr,inst_48174);
var inst_48180 = cljs.core.seq.call(null,inst_48173__$1);
var inst_48181 = inst_48180;
var inst_48182 = null;
var inst_48183 = (0);
var inst_48184 = (0);
var state_48241__$1 = (function (){var statearr_48284 = state_48241;
(statearr_48284[(29)] = inst_48173__$1);

(statearr_48284[(9)] = inst_48184);

(statearr_48284[(30)] = inst_48175);

(statearr_48284[(10)] = inst_48182);

(statearr_48284[(20)] = inst_48181);

(statearr_48284[(21)] = inst_48183);

return statearr_48284;
})();
var statearr_48285_48351 = state_48241__$1;
(statearr_48285_48351[(2)] = null);

(statearr_48285_48351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (28))){
var inst_48200 = (state_48241[(25)]);
var inst_48181 = (state_48241[(20)]);
var inst_48200__$1 = cljs.core.seq.call(null,inst_48181);
var state_48241__$1 = (function (){var statearr_48286 = state_48241;
(statearr_48286[(25)] = inst_48200__$1);

return statearr_48286;
})();
if(inst_48200__$1){
var statearr_48287_48352 = state_48241__$1;
(statearr_48287_48352[(1)] = (33));

} else {
var statearr_48288_48353 = state_48241__$1;
(statearr_48288_48353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (25))){
var inst_48184 = (state_48241[(9)]);
var inst_48183 = (state_48241[(21)]);
var inst_48186 = (inst_48184 < inst_48183);
var inst_48187 = inst_48186;
var state_48241__$1 = state_48241;
if(cljs.core.truth_(inst_48187)){
var statearr_48289_48354 = state_48241__$1;
(statearr_48289_48354[(1)] = (27));

} else {
var statearr_48290_48355 = state_48241__$1;
(statearr_48290_48355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (34))){
var state_48241__$1 = state_48241;
var statearr_48291_48356 = state_48241__$1;
(statearr_48291_48356[(2)] = null);

(statearr_48291_48356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (17))){
var state_48241__$1 = state_48241;
var statearr_48292_48357 = state_48241__$1;
(statearr_48292_48357[(2)] = null);

(statearr_48292_48357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (3))){
var inst_48239 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48241__$1,inst_48239);
} else {
if((state_val_48242 === (12))){
var inst_48168 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48293_48358 = state_48241__$1;
(statearr_48293_48358[(2)] = inst_48168);

(statearr_48293_48358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (2))){
var state_48241__$1 = state_48241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48241__$1,(4),ch);
} else {
if((state_val_48242 === (23))){
var state_48241__$1 = state_48241;
var statearr_48294_48359 = state_48241__$1;
(statearr_48294_48359[(2)] = null);

(statearr_48294_48359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (35))){
var inst_48223 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48295_48360 = state_48241__$1;
(statearr_48295_48360[(2)] = inst_48223);

(statearr_48295_48360[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (19))){
var inst_48140 = (state_48241[(7)]);
var inst_48144 = cljs.core.chunk_first.call(null,inst_48140);
var inst_48145 = cljs.core.chunk_rest.call(null,inst_48140);
var inst_48146 = cljs.core.count.call(null,inst_48144);
var inst_48118 = inst_48145;
var inst_48119 = inst_48144;
var inst_48120 = inst_48146;
var inst_48121 = (0);
var state_48241__$1 = (function (){var statearr_48296 = state_48241;
(statearr_48296[(13)] = inst_48121);

(statearr_48296[(14)] = inst_48120);

(statearr_48296[(15)] = inst_48118);

(statearr_48296[(16)] = inst_48119);

return statearr_48296;
})();
var statearr_48297_48361 = state_48241__$1;
(statearr_48297_48361[(2)] = null);

(statearr_48297_48361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (11))){
var inst_48140 = (state_48241[(7)]);
var inst_48118 = (state_48241[(15)]);
var inst_48140__$1 = cljs.core.seq.call(null,inst_48118);
var state_48241__$1 = (function (){var statearr_48298 = state_48241;
(statearr_48298[(7)] = inst_48140__$1);

return statearr_48298;
})();
if(inst_48140__$1){
var statearr_48299_48362 = state_48241__$1;
(statearr_48299_48362[(1)] = (16));

} else {
var statearr_48300_48363 = state_48241__$1;
(statearr_48300_48363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (9))){
var inst_48170 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48301_48364 = state_48241__$1;
(statearr_48301_48364[(2)] = inst_48170);

(statearr_48301_48364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (5))){
var inst_48116 = cljs.core.deref.call(null,cs);
var inst_48117 = cljs.core.seq.call(null,inst_48116);
var inst_48118 = inst_48117;
var inst_48119 = null;
var inst_48120 = (0);
var inst_48121 = (0);
var state_48241__$1 = (function (){var statearr_48302 = state_48241;
(statearr_48302[(13)] = inst_48121);

(statearr_48302[(14)] = inst_48120);

(statearr_48302[(15)] = inst_48118);

(statearr_48302[(16)] = inst_48119);

return statearr_48302;
})();
var statearr_48303_48365 = state_48241__$1;
(statearr_48303_48365[(2)] = null);

(statearr_48303_48365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (14))){
var state_48241__$1 = state_48241;
var statearr_48304_48366 = state_48241__$1;
(statearr_48304_48366[(2)] = null);

(statearr_48304_48366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (45))){
var inst_48231 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48305_48367 = state_48241__$1;
(statearr_48305_48367[(2)] = inst_48231);

(statearr_48305_48367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (26))){
var inst_48173 = (state_48241[(29)]);
var inst_48227 = (state_48241[(2)]);
var inst_48228 = cljs.core.seq.call(null,inst_48173);
var state_48241__$1 = (function (){var statearr_48306 = state_48241;
(statearr_48306[(31)] = inst_48227);

return statearr_48306;
})();
if(inst_48228){
var statearr_48307_48368 = state_48241__$1;
(statearr_48307_48368[(1)] = (42));

} else {
var statearr_48308_48369 = state_48241__$1;
(statearr_48308_48369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (16))){
var inst_48140 = (state_48241[(7)]);
var inst_48142 = cljs.core.chunked_seq_QMARK_.call(null,inst_48140);
var state_48241__$1 = state_48241;
if(inst_48142){
var statearr_48309_48370 = state_48241__$1;
(statearr_48309_48370[(1)] = (19));

} else {
var statearr_48310_48371 = state_48241__$1;
(statearr_48310_48371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (38))){
var inst_48220 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48311_48372 = state_48241__$1;
(statearr_48311_48372[(2)] = inst_48220);

(statearr_48311_48372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (30))){
var state_48241__$1 = state_48241;
var statearr_48312_48373 = state_48241__$1;
(statearr_48312_48373[(2)] = null);

(statearr_48312_48373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (10))){
var inst_48121 = (state_48241[(13)]);
var inst_48119 = (state_48241[(16)]);
var inst_48129 = cljs.core._nth.call(null,inst_48119,inst_48121);
var inst_48130 = cljs.core.nth.call(null,inst_48129,(0),null);
var inst_48131 = cljs.core.nth.call(null,inst_48129,(1),null);
var state_48241__$1 = (function (){var statearr_48313 = state_48241;
(statearr_48313[(26)] = inst_48130);

return statearr_48313;
})();
if(cljs.core.truth_(inst_48131)){
var statearr_48314_48374 = state_48241__$1;
(statearr_48314_48374[(1)] = (13));

} else {
var statearr_48315_48375 = state_48241__$1;
(statearr_48315_48375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (18))){
var inst_48166 = (state_48241[(2)]);
var state_48241__$1 = state_48241;
var statearr_48316_48376 = state_48241__$1;
(statearr_48316_48376[(2)] = inst_48166);

(statearr_48316_48376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (42))){
var state_48241__$1 = state_48241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48241__$1,(45),dchan);
} else {
if((state_val_48242 === (37))){
var inst_48200 = (state_48241[(25)]);
var inst_48209 = (state_48241[(23)]);
var inst_48109 = (state_48241[(11)]);
var inst_48209__$1 = cljs.core.first.call(null,inst_48200);
var inst_48210 = cljs.core.async.put_BANG_.call(null,inst_48209__$1,inst_48109,done);
var state_48241__$1 = (function (){var statearr_48317 = state_48241;
(statearr_48317[(23)] = inst_48209__$1);

return statearr_48317;
})();
if(cljs.core.truth_(inst_48210)){
var statearr_48318_48377 = state_48241__$1;
(statearr_48318_48377[(1)] = (39));

} else {
var statearr_48319_48378 = state_48241__$1;
(statearr_48319_48378[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48242 === (8))){
var inst_48121 = (state_48241[(13)]);
var inst_48120 = (state_48241[(14)]);
var inst_48123 = (inst_48121 < inst_48120);
var inst_48124 = inst_48123;
var state_48241__$1 = state_48241;
if(cljs.core.truth_(inst_48124)){
var statearr_48320_48379 = state_48241__$1;
(statearr_48320_48379[(1)] = (10));

} else {
var statearr_48321_48380 = state_48241__$1;
(statearr_48321_48380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___48326,cs,m,dchan,dctr,done))
;
return ((function (switch__33991__auto__,c__34079__auto___48326,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33992__auto__ = null;
var cljs$core$async$mult_$_state_machine__33992__auto____0 = (function (){
var statearr_48322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48322[(0)] = cljs$core$async$mult_$_state_machine__33992__auto__);

(statearr_48322[(1)] = (1));

return statearr_48322;
});
var cljs$core$async$mult_$_state_machine__33992__auto____1 = (function (state_48241){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48323){if((e48323 instanceof Object)){
var ex__33995__auto__ = e48323;
var statearr_48324_48381 = state_48241;
(statearr_48324_48381[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48382 = state_48241;
state_48241 = G__48382;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33992__auto__ = function(state_48241){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33992__auto____1.call(this,state_48241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33992__auto____0;
cljs$core$async$mult_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33992__auto____1;
return cljs$core$async$mult_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___48326,cs,m,dchan,dctr,done))
})();
var state__34081__auto__ = (function (){var statearr_48325 = f__34080__auto__.call(null);
(statearr_48325[(6)] = c__34079__auto___48326);

return statearr_48325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___48326,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48384 = arguments.length;
switch (G__48384) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m);
} else {
var m__29107__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,state_map);
} else {
var m__29107__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29106__auto__ = (((m == null))?null:m);
var m__29107__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,m,mode);
} else {
var m__29107__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29599__auto__ = [];
var len__29592__auto___48396 = arguments.length;
var i__29593__auto___48397 = (0);
while(true){
if((i__29593__auto___48397 < len__29592__auto___48396)){
args__29599__auto__.push((arguments[i__29593__auto___48397]));

var G__48398 = (i__29593__auto___48397 + (1));
i__29593__auto___48397 = G__48398;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48390){
var map__48391 = p__48390;
var map__48391__$1 = ((((!((map__48391 == null)))?((((map__48391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48391):map__48391);
var opts = map__48391__$1;
var statearr_48393_48399 = state;
(statearr_48393_48399[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48391,map__48391__$1,opts){
return (function (val){
var statearr_48394_48400 = state;
(statearr_48394_48400[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48391,map__48391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48395_48401 = state;
(statearr_48395_48401[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48386){
var G__48387 = cljs.core.first.call(null,seq48386);
var seq48386__$1 = cljs.core.next.call(null,seq48386);
var G__48388 = cljs.core.first.call(null,seq48386__$1);
var seq48386__$2 = cljs.core.next.call(null,seq48386__$1);
var G__48389 = cljs.core.first.call(null,seq48386__$2);
var seq48386__$3 = cljs.core.next.call(null,seq48386__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48387,G__48388,G__48389,seq48386__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48402 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48403){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48403 = meta48403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48404,meta48403__$1){
var self__ = this;
var _48404__$1 = this;
return (new cljs.core.async.t_cljs$core$async48402(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48403__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48404){
var self__ = this;
var _48404__$1 = this;
return self__.meta48403;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48403","meta48403",-2101303326,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48402";

cljs.core.async.t_cljs$core$async48402.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48402");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48402 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48402(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48403){
return (new cljs.core.async.t_cljs$core$async48402(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48403));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48402(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34079__auto___48566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___48566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___48566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48506){
var state_val_48507 = (state_48506[(1)]);
if((state_val_48507 === (7))){
var inst_48421 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48508_48567 = state_48506__$1;
(statearr_48508_48567[(2)] = inst_48421);

(statearr_48508_48567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (20))){
var inst_48433 = (state_48506[(7)]);
var state_48506__$1 = state_48506;
var statearr_48509_48568 = state_48506__$1;
(statearr_48509_48568[(2)] = inst_48433);

(statearr_48509_48568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (27))){
var state_48506__$1 = state_48506;
var statearr_48510_48569 = state_48506__$1;
(statearr_48510_48569[(2)] = null);

(statearr_48510_48569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (1))){
var inst_48408 = (state_48506[(8)]);
var inst_48408__$1 = calc_state.call(null);
var inst_48410 = (inst_48408__$1 == null);
var inst_48411 = cljs.core.not.call(null,inst_48410);
var state_48506__$1 = (function (){var statearr_48511 = state_48506;
(statearr_48511[(8)] = inst_48408__$1);

return statearr_48511;
})();
if(inst_48411){
var statearr_48512_48570 = state_48506__$1;
(statearr_48512_48570[(1)] = (2));

} else {
var statearr_48513_48571 = state_48506__$1;
(statearr_48513_48571[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (24))){
var inst_48457 = (state_48506[(9)]);
var inst_48480 = (state_48506[(10)]);
var inst_48466 = (state_48506[(11)]);
var inst_48480__$1 = inst_48457.call(null,inst_48466);
var state_48506__$1 = (function (){var statearr_48514 = state_48506;
(statearr_48514[(10)] = inst_48480__$1);

return statearr_48514;
})();
if(cljs.core.truth_(inst_48480__$1)){
var statearr_48515_48572 = state_48506__$1;
(statearr_48515_48572[(1)] = (29));

} else {
var statearr_48516_48573 = state_48506__$1;
(statearr_48516_48573[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (4))){
var inst_48424 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48424)){
var statearr_48517_48574 = state_48506__$1;
(statearr_48517_48574[(1)] = (8));

} else {
var statearr_48518_48575 = state_48506__$1;
(statearr_48518_48575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (15))){
var inst_48451 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48451)){
var statearr_48519_48576 = state_48506__$1;
(statearr_48519_48576[(1)] = (19));

} else {
var statearr_48520_48577 = state_48506__$1;
(statearr_48520_48577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (21))){
var inst_48456 = (state_48506[(12)]);
var inst_48456__$1 = (state_48506[(2)]);
var inst_48457 = cljs.core.get.call(null,inst_48456__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48458 = cljs.core.get.call(null,inst_48456__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48459 = cljs.core.get.call(null,inst_48456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48506__$1 = (function (){var statearr_48521 = state_48506;
(statearr_48521[(9)] = inst_48457);

(statearr_48521[(13)] = inst_48458);

(statearr_48521[(12)] = inst_48456__$1);

return statearr_48521;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48506__$1,(22),inst_48459);
} else {
if((state_val_48507 === (31))){
var inst_48488 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48488)){
var statearr_48522_48578 = state_48506__$1;
(statearr_48522_48578[(1)] = (32));

} else {
var statearr_48523_48579 = state_48506__$1;
(statearr_48523_48579[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (32))){
var inst_48465 = (state_48506[(14)]);
var state_48506__$1 = state_48506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48506__$1,(35),out,inst_48465);
} else {
if((state_val_48507 === (33))){
var inst_48456 = (state_48506[(12)]);
var inst_48433 = inst_48456;
var state_48506__$1 = (function (){var statearr_48524 = state_48506;
(statearr_48524[(7)] = inst_48433);

return statearr_48524;
})();
var statearr_48525_48580 = state_48506__$1;
(statearr_48525_48580[(2)] = null);

(statearr_48525_48580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (13))){
var inst_48433 = (state_48506[(7)]);
var inst_48440 = inst_48433.cljs$lang$protocol_mask$partition0$;
var inst_48441 = (inst_48440 & (64));
var inst_48442 = inst_48433.cljs$core$ISeq$;
var inst_48443 = (cljs.core.PROTOCOL_SENTINEL === inst_48442);
var inst_48444 = (inst_48441) || (inst_48443);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48444)){
var statearr_48526_48581 = state_48506__$1;
(statearr_48526_48581[(1)] = (16));

} else {
var statearr_48527_48582 = state_48506__$1;
(statearr_48527_48582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (22))){
var inst_48465 = (state_48506[(14)]);
var inst_48466 = (state_48506[(11)]);
var inst_48464 = (state_48506[(2)]);
var inst_48465__$1 = cljs.core.nth.call(null,inst_48464,(0),null);
var inst_48466__$1 = cljs.core.nth.call(null,inst_48464,(1),null);
var inst_48467 = (inst_48465__$1 == null);
var inst_48468 = cljs.core._EQ_.call(null,inst_48466__$1,change);
var inst_48469 = (inst_48467) || (inst_48468);
var state_48506__$1 = (function (){var statearr_48528 = state_48506;
(statearr_48528[(14)] = inst_48465__$1);

(statearr_48528[(11)] = inst_48466__$1);

return statearr_48528;
})();
if(cljs.core.truth_(inst_48469)){
var statearr_48529_48583 = state_48506__$1;
(statearr_48529_48583[(1)] = (23));

} else {
var statearr_48530_48584 = state_48506__$1;
(statearr_48530_48584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (36))){
var inst_48456 = (state_48506[(12)]);
var inst_48433 = inst_48456;
var state_48506__$1 = (function (){var statearr_48531 = state_48506;
(statearr_48531[(7)] = inst_48433);

return statearr_48531;
})();
var statearr_48532_48585 = state_48506__$1;
(statearr_48532_48585[(2)] = null);

(statearr_48532_48585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (29))){
var inst_48480 = (state_48506[(10)]);
var state_48506__$1 = state_48506;
var statearr_48533_48586 = state_48506__$1;
(statearr_48533_48586[(2)] = inst_48480);

(statearr_48533_48586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (6))){
var state_48506__$1 = state_48506;
var statearr_48534_48587 = state_48506__$1;
(statearr_48534_48587[(2)] = false);

(statearr_48534_48587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (28))){
var inst_48476 = (state_48506[(2)]);
var inst_48477 = calc_state.call(null);
var inst_48433 = inst_48477;
var state_48506__$1 = (function (){var statearr_48535 = state_48506;
(statearr_48535[(15)] = inst_48476);

(statearr_48535[(7)] = inst_48433);

return statearr_48535;
})();
var statearr_48536_48588 = state_48506__$1;
(statearr_48536_48588[(2)] = null);

(statearr_48536_48588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (25))){
var inst_48502 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48537_48589 = state_48506__$1;
(statearr_48537_48589[(2)] = inst_48502);

(statearr_48537_48589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (34))){
var inst_48500 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48538_48590 = state_48506__$1;
(statearr_48538_48590[(2)] = inst_48500);

(statearr_48538_48590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (17))){
var state_48506__$1 = state_48506;
var statearr_48539_48591 = state_48506__$1;
(statearr_48539_48591[(2)] = false);

(statearr_48539_48591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (3))){
var state_48506__$1 = state_48506;
var statearr_48540_48592 = state_48506__$1;
(statearr_48540_48592[(2)] = false);

(statearr_48540_48592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (12))){
var inst_48504 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48506__$1,inst_48504);
} else {
if((state_val_48507 === (2))){
var inst_48408 = (state_48506[(8)]);
var inst_48413 = inst_48408.cljs$lang$protocol_mask$partition0$;
var inst_48414 = (inst_48413 & (64));
var inst_48415 = inst_48408.cljs$core$ISeq$;
var inst_48416 = (cljs.core.PROTOCOL_SENTINEL === inst_48415);
var inst_48417 = (inst_48414) || (inst_48416);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48417)){
var statearr_48541_48593 = state_48506__$1;
(statearr_48541_48593[(1)] = (5));

} else {
var statearr_48542_48594 = state_48506__$1;
(statearr_48542_48594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (23))){
var inst_48465 = (state_48506[(14)]);
var inst_48471 = (inst_48465 == null);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48471)){
var statearr_48543_48595 = state_48506__$1;
(statearr_48543_48595[(1)] = (26));

} else {
var statearr_48544_48596 = state_48506__$1;
(statearr_48544_48596[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (35))){
var inst_48491 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
if(cljs.core.truth_(inst_48491)){
var statearr_48545_48597 = state_48506__$1;
(statearr_48545_48597[(1)] = (36));

} else {
var statearr_48546_48598 = state_48506__$1;
(statearr_48546_48598[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (19))){
var inst_48433 = (state_48506[(7)]);
var inst_48453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48433);
var state_48506__$1 = state_48506;
var statearr_48547_48599 = state_48506__$1;
(statearr_48547_48599[(2)] = inst_48453);

(statearr_48547_48599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (11))){
var inst_48433 = (state_48506[(7)]);
var inst_48437 = (inst_48433 == null);
var inst_48438 = cljs.core.not.call(null,inst_48437);
var state_48506__$1 = state_48506;
if(inst_48438){
var statearr_48548_48600 = state_48506__$1;
(statearr_48548_48600[(1)] = (13));

} else {
var statearr_48549_48601 = state_48506__$1;
(statearr_48549_48601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (9))){
var inst_48408 = (state_48506[(8)]);
var state_48506__$1 = state_48506;
var statearr_48550_48602 = state_48506__$1;
(statearr_48550_48602[(2)] = inst_48408);

(statearr_48550_48602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (5))){
var state_48506__$1 = state_48506;
var statearr_48551_48603 = state_48506__$1;
(statearr_48551_48603[(2)] = true);

(statearr_48551_48603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (14))){
var state_48506__$1 = state_48506;
var statearr_48552_48604 = state_48506__$1;
(statearr_48552_48604[(2)] = false);

(statearr_48552_48604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (26))){
var inst_48466 = (state_48506[(11)]);
var inst_48473 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48466);
var state_48506__$1 = state_48506;
var statearr_48553_48605 = state_48506__$1;
(statearr_48553_48605[(2)] = inst_48473);

(statearr_48553_48605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (16))){
var state_48506__$1 = state_48506;
var statearr_48554_48606 = state_48506__$1;
(statearr_48554_48606[(2)] = true);

(statearr_48554_48606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (38))){
var inst_48496 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48555_48607 = state_48506__$1;
(statearr_48555_48607[(2)] = inst_48496);

(statearr_48555_48607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (30))){
var inst_48457 = (state_48506[(9)]);
var inst_48458 = (state_48506[(13)]);
var inst_48466 = (state_48506[(11)]);
var inst_48483 = cljs.core.empty_QMARK_.call(null,inst_48457);
var inst_48484 = inst_48458.call(null,inst_48466);
var inst_48485 = cljs.core.not.call(null,inst_48484);
var inst_48486 = (inst_48483) && (inst_48485);
var state_48506__$1 = state_48506;
var statearr_48556_48608 = state_48506__$1;
(statearr_48556_48608[(2)] = inst_48486);

(statearr_48556_48608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (10))){
var inst_48408 = (state_48506[(8)]);
var inst_48429 = (state_48506[(2)]);
var inst_48430 = cljs.core.get.call(null,inst_48429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48431 = cljs.core.get.call(null,inst_48429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48432 = cljs.core.get.call(null,inst_48429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48433 = inst_48408;
var state_48506__$1 = (function (){var statearr_48557 = state_48506;
(statearr_48557[(16)] = inst_48431);

(statearr_48557[(17)] = inst_48432);

(statearr_48557[(18)] = inst_48430);

(statearr_48557[(7)] = inst_48433);

return statearr_48557;
})();
var statearr_48558_48609 = state_48506__$1;
(statearr_48558_48609[(2)] = null);

(statearr_48558_48609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (18))){
var inst_48448 = (state_48506[(2)]);
var state_48506__$1 = state_48506;
var statearr_48559_48610 = state_48506__$1;
(statearr_48559_48610[(2)] = inst_48448);

(statearr_48559_48610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (37))){
var state_48506__$1 = state_48506;
var statearr_48560_48611 = state_48506__$1;
(statearr_48560_48611[(2)] = null);

(statearr_48560_48611[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48507 === (8))){
var inst_48408 = (state_48506[(8)]);
var inst_48426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48408);
var state_48506__$1 = state_48506;
var statearr_48561_48612 = state_48506__$1;
(statearr_48561_48612[(2)] = inst_48426);

(statearr_48561_48612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___48566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33991__auto__,c__34079__auto___48566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33992__auto__ = null;
var cljs$core$async$mix_$_state_machine__33992__auto____0 = (function (){
var statearr_48562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48562[(0)] = cljs$core$async$mix_$_state_machine__33992__auto__);

(statearr_48562[(1)] = (1));

return statearr_48562;
});
var cljs$core$async$mix_$_state_machine__33992__auto____1 = (function (state_48506){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48563){if((e48563 instanceof Object)){
var ex__33995__auto__ = e48563;
var statearr_48564_48613 = state_48506;
(statearr_48564_48613[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48614 = state_48506;
state_48506 = G__48614;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33992__auto__ = function(state_48506){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33992__auto____1.call(this,state_48506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33992__auto____0;
cljs$core$async$mix_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33992__auto____1;
return cljs$core$async$mix_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___48566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34081__auto__ = (function (){var statearr_48565 = f__34080__auto__.call(null);
(statearr_48565[(6)] = c__34079__auto___48566);

return statearr_48565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___48566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29107__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p,v,ch);
} else {
var m__29107__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48616 = arguments.length;
switch (G__48616) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p);
} else {
var m__29107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29106__auto__ = (((p == null))?null:p);
var m__29107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,p,v);
} else {
var m__29107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48620 = arguments.length;
switch (G__48620) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28423__auto__,mults){
return (function (p1__48618_SHARP_){
if(cljs.core.truth_(p1__48618_SHARP_.call(null,topic))){
return p1__48618_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48618_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28423__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48621 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48622){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48622 = meta48622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48623,meta48622__$1){
var self__ = this;
var _48623__$1 = this;
return (new cljs.core.async.t_cljs$core$async48621(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48622__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48623){
var self__ = this;
var _48623__$1 = this;
return self__.meta48622;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48622","meta48622",-1372972365,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48621";

cljs.core.async.t_cljs$core$async48621.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48621");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48621 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48622){
return (new cljs.core.async.t_cljs$core$async48621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48622));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48621(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34079__auto___48741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___48741,mults,ensure_mult,p){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___48741,mults,ensure_mult,p){
return (function (state_48695){
var state_val_48696 = (state_48695[(1)]);
if((state_val_48696 === (7))){
var inst_48691 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
var statearr_48697_48742 = state_48695__$1;
(statearr_48697_48742[(2)] = inst_48691);

(statearr_48697_48742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (20))){
var state_48695__$1 = state_48695;
var statearr_48698_48743 = state_48695__$1;
(statearr_48698_48743[(2)] = null);

(statearr_48698_48743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (1))){
var state_48695__$1 = state_48695;
var statearr_48699_48744 = state_48695__$1;
(statearr_48699_48744[(2)] = null);

(statearr_48699_48744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (24))){
var inst_48674 = (state_48695[(7)]);
var inst_48683 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48674);
var state_48695__$1 = state_48695;
var statearr_48700_48745 = state_48695__$1;
(statearr_48700_48745[(2)] = inst_48683);

(statearr_48700_48745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (4))){
var inst_48626 = (state_48695[(8)]);
var inst_48626__$1 = (state_48695[(2)]);
var inst_48627 = (inst_48626__$1 == null);
var state_48695__$1 = (function (){var statearr_48701 = state_48695;
(statearr_48701[(8)] = inst_48626__$1);

return statearr_48701;
})();
if(cljs.core.truth_(inst_48627)){
var statearr_48702_48746 = state_48695__$1;
(statearr_48702_48746[(1)] = (5));

} else {
var statearr_48703_48747 = state_48695__$1;
(statearr_48703_48747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (15))){
var inst_48668 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
var statearr_48704_48748 = state_48695__$1;
(statearr_48704_48748[(2)] = inst_48668);

(statearr_48704_48748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (21))){
var inst_48688 = (state_48695[(2)]);
var state_48695__$1 = (function (){var statearr_48705 = state_48695;
(statearr_48705[(9)] = inst_48688);

return statearr_48705;
})();
var statearr_48706_48749 = state_48695__$1;
(statearr_48706_48749[(2)] = null);

(statearr_48706_48749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (13))){
var inst_48650 = (state_48695[(10)]);
var inst_48652 = cljs.core.chunked_seq_QMARK_.call(null,inst_48650);
var state_48695__$1 = state_48695;
if(inst_48652){
var statearr_48707_48750 = state_48695__$1;
(statearr_48707_48750[(1)] = (16));

} else {
var statearr_48708_48751 = state_48695__$1;
(statearr_48708_48751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (22))){
var inst_48680 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
if(cljs.core.truth_(inst_48680)){
var statearr_48709_48752 = state_48695__$1;
(statearr_48709_48752[(1)] = (23));

} else {
var statearr_48710_48753 = state_48695__$1;
(statearr_48710_48753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (6))){
var inst_48626 = (state_48695[(8)]);
var inst_48674 = (state_48695[(7)]);
var inst_48676 = (state_48695[(11)]);
var inst_48674__$1 = topic_fn.call(null,inst_48626);
var inst_48675 = cljs.core.deref.call(null,mults);
var inst_48676__$1 = cljs.core.get.call(null,inst_48675,inst_48674__$1);
var state_48695__$1 = (function (){var statearr_48711 = state_48695;
(statearr_48711[(7)] = inst_48674__$1);

(statearr_48711[(11)] = inst_48676__$1);

return statearr_48711;
})();
if(cljs.core.truth_(inst_48676__$1)){
var statearr_48712_48754 = state_48695__$1;
(statearr_48712_48754[(1)] = (19));

} else {
var statearr_48713_48755 = state_48695__$1;
(statearr_48713_48755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (25))){
var inst_48685 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
var statearr_48714_48756 = state_48695__$1;
(statearr_48714_48756[(2)] = inst_48685);

(statearr_48714_48756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (17))){
var inst_48650 = (state_48695[(10)]);
var inst_48659 = cljs.core.first.call(null,inst_48650);
var inst_48660 = cljs.core.async.muxch_STAR_.call(null,inst_48659);
var inst_48661 = cljs.core.async.close_BANG_.call(null,inst_48660);
var inst_48662 = cljs.core.next.call(null,inst_48650);
var inst_48636 = inst_48662;
var inst_48637 = null;
var inst_48638 = (0);
var inst_48639 = (0);
var state_48695__$1 = (function (){var statearr_48715 = state_48695;
(statearr_48715[(12)] = inst_48636);

(statearr_48715[(13)] = inst_48661);

(statearr_48715[(14)] = inst_48638);

(statearr_48715[(15)] = inst_48637);

(statearr_48715[(16)] = inst_48639);

return statearr_48715;
})();
var statearr_48716_48757 = state_48695__$1;
(statearr_48716_48757[(2)] = null);

(statearr_48716_48757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (3))){
var inst_48693 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48695__$1,inst_48693);
} else {
if((state_val_48696 === (12))){
var inst_48670 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
var statearr_48717_48758 = state_48695__$1;
(statearr_48717_48758[(2)] = inst_48670);

(statearr_48717_48758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (2))){
var state_48695__$1 = state_48695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48695__$1,(4),ch);
} else {
if((state_val_48696 === (23))){
var state_48695__$1 = state_48695;
var statearr_48718_48759 = state_48695__$1;
(statearr_48718_48759[(2)] = null);

(statearr_48718_48759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (19))){
var inst_48626 = (state_48695[(8)]);
var inst_48676 = (state_48695[(11)]);
var inst_48678 = cljs.core.async.muxch_STAR_.call(null,inst_48676);
var state_48695__$1 = state_48695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48695__$1,(22),inst_48678,inst_48626);
} else {
if((state_val_48696 === (11))){
var inst_48650 = (state_48695[(10)]);
var inst_48636 = (state_48695[(12)]);
var inst_48650__$1 = cljs.core.seq.call(null,inst_48636);
var state_48695__$1 = (function (){var statearr_48719 = state_48695;
(statearr_48719[(10)] = inst_48650__$1);

return statearr_48719;
})();
if(inst_48650__$1){
var statearr_48720_48760 = state_48695__$1;
(statearr_48720_48760[(1)] = (13));

} else {
var statearr_48721_48761 = state_48695__$1;
(statearr_48721_48761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (9))){
var inst_48672 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
var statearr_48722_48762 = state_48695__$1;
(statearr_48722_48762[(2)] = inst_48672);

(statearr_48722_48762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (5))){
var inst_48633 = cljs.core.deref.call(null,mults);
var inst_48634 = cljs.core.vals.call(null,inst_48633);
var inst_48635 = cljs.core.seq.call(null,inst_48634);
var inst_48636 = inst_48635;
var inst_48637 = null;
var inst_48638 = (0);
var inst_48639 = (0);
var state_48695__$1 = (function (){var statearr_48723 = state_48695;
(statearr_48723[(12)] = inst_48636);

(statearr_48723[(14)] = inst_48638);

(statearr_48723[(15)] = inst_48637);

(statearr_48723[(16)] = inst_48639);

return statearr_48723;
})();
var statearr_48724_48763 = state_48695__$1;
(statearr_48724_48763[(2)] = null);

(statearr_48724_48763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (14))){
var state_48695__$1 = state_48695;
var statearr_48728_48764 = state_48695__$1;
(statearr_48728_48764[(2)] = null);

(statearr_48728_48764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (16))){
var inst_48650 = (state_48695[(10)]);
var inst_48654 = cljs.core.chunk_first.call(null,inst_48650);
var inst_48655 = cljs.core.chunk_rest.call(null,inst_48650);
var inst_48656 = cljs.core.count.call(null,inst_48654);
var inst_48636 = inst_48655;
var inst_48637 = inst_48654;
var inst_48638 = inst_48656;
var inst_48639 = (0);
var state_48695__$1 = (function (){var statearr_48729 = state_48695;
(statearr_48729[(12)] = inst_48636);

(statearr_48729[(14)] = inst_48638);

(statearr_48729[(15)] = inst_48637);

(statearr_48729[(16)] = inst_48639);

return statearr_48729;
})();
var statearr_48730_48765 = state_48695__$1;
(statearr_48730_48765[(2)] = null);

(statearr_48730_48765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (10))){
var inst_48636 = (state_48695[(12)]);
var inst_48638 = (state_48695[(14)]);
var inst_48637 = (state_48695[(15)]);
var inst_48639 = (state_48695[(16)]);
var inst_48644 = cljs.core._nth.call(null,inst_48637,inst_48639);
var inst_48645 = cljs.core.async.muxch_STAR_.call(null,inst_48644);
var inst_48646 = cljs.core.async.close_BANG_.call(null,inst_48645);
var inst_48647 = (inst_48639 + (1));
var tmp48725 = inst_48636;
var tmp48726 = inst_48638;
var tmp48727 = inst_48637;
var inst_48636__$1 = tmp48725;
var inst_48637__$1 = tmp48727;
var inst_48638__$1 = tmp48726;
var inst_48639__$1 = inst_48647;
var state_48695__$1 = (function (){var statearr_48731 = state_48695;
(statearr_48731[(12)] = inst_48636__$1);

(statearr_48731[(14)] = inst_48638__$1);

(statearr_48731[(17)] = inst_48646);

(statearr_48731[(15)] = inst_48637__$1);

(statearr_48731[(16)] = inst_48639__$1);

return statearr_48731;
})();
var statearr_48732_48766 = state_48695__$1;
(statearr_48732_48766[(2)] = null);

(statearr_48732_48766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (18))){
var inst_48665 = (state_48695[(2)]);
var state_48695__$1 = state_48695;
var statearr_48733_48767 = state_48695__$1;
(statearr_48733_48767[(2)] = inst_48665);

(statearr_48733_48767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48696 === (8))){
var inst_48638 = (state_48695[(14)]);
var inst_48639 = (state_48695[(16)]);
var inst_48641 = (inst_48639 < inst_48638);
var inst_48642 = inst_48641;
var state_48695__$1 = state_48695;
if(cljs.core.truth_(inst_48642)){
var statearr_48734_48768 = state_48695__$1;
(statearr_48734_48768[(1)] = (10));

} else {
var statearr_48735_48769 = state_48695__$1;
(statearr_48735_48769[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___48741,mults,ensure_mult,p))
;
return ((function (switch__33991__auto__,c__34079__auto___48741,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_48736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48736[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_48736[(1)] = (1));

return statearr_48736;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_48695){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48737){if((e48737 instanceof Object)){
var ex__33995__auto__ = e48737;
var statearr_48738_48770 = state_48695;
(statearr_48738_48770[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48771 = state_48695;
state_48695 = G__48771;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_48695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_48695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___48741,mults,ensure_mult,p))
})();
var state__34081__auto__ = (function (){var statearr_48739 = f__34080__auto__.call(null);
(statearr_48739[(6)] = c__34079__auto___48741);

return statearr_48739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___48741,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48773 = arguments.length;
switch (G__48773) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48776 = arguments.length;
switch (G__48776) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48779 = arguments.length;
switch (G__48779) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34079__auto___48846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___48846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___48846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48818){
var state_val_48819 = (state_48818[(1)]);
if((state_val_48819 === (7))){
var state_48818__$1 = state_48818;
var statearr_48820_48847 = state_48818__$1;
(statearr_48820_48847[(2)] = null);

(statearr_48820_48847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (1))){
var state_48818__$1 = state_48818;
var statearr_48821_48848 = state_48818__$1;
(statearr_48821_48848[(2)] = null);

(statearr_48821_48848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (4))){
var inst_48782 = (state_48818[(7)]);
var inst_48784 = (inst_48782 < cnt);
var state_48818__$1 = state_48818;
if(cljs.core.truth_(inst_48784)){
var statearr_48822_48849 = state_48818__$1;
(statearr_48822_48849[(1)] = (6));

} else {
var statearr_48823_48850 = state_48818__$1;
(statearr_48823_48850[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (15))){
var inst_48814 = (state_48818[(2)]);
var state_48818__$1 = state_48818;
var statearr_48824_48851 = state_48818__$1;
(statearr_48824_48851[(2)] = inst_48814);

(statearr_48824_48851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (13))){
var inst_48807 = cljs.core.async.close_BANG_.call(null,out);
var state_48818__$1 = state_48818;
var statearr_48825_48852 = state_48818__$1;
(statearr_48825_48852[(2)] = inst_48807);

(statearr_48825_48852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (6))){
var state_48818__$1 = state_48818;
var statearr_48826_48853 = state_48818__$1;
(statearr_48826_48853[(2)] = null);

(statearr_48826_48853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (3))){
var inst_48816 = (state_48818[(2)]);
var state_48818__$1 = state_48818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48818__$1,inst_48816);
} else {
if((state_val_48819 === (12))){
var inst_48804 = (state_48818[(8)]);
var inst_48804__$1 = (state_48818[(2)]);
var inst_48805 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48804__$1);
var state_48818__$1 = (function (){var statearr_48827 = state_48818;
(statearr_48827[(8)] = inst_48804__$1);

return statearr_48827;
})();
if(cljs.core.truth_(inst_48805)){
var statearr_48828_48854 = state_48818__$1;
(statearr_48828_48854[(1)] = (13));

} else {
var statearr_48829_48855 = state_48818__$1;
(statearr_48829_48855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (2))){
var inst_48781 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48782 = (0);
var state_48818__$1 = (function (){var statearr_48830 = state_48818;
(statearr_48830[(9)] = inst_48781);

(statearr_48830[(7)] = inst_48782);

return statearr_48830;
})();
var statearr_48831_48856 = state_48818__$1;
(statearr_48831_48856[(2)] = null);

(statearr_48831_48856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (11))){
var inst_48782 = (state_48818[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48818,(10),Object,null,(9));
var inst_48791 = chs__$1.call(null,inst_48782);
var inst_48792 = done.call(null,inst_48782);
var inst_48793 = cljs.core.async.take_BANG_.call(null,inst_48791,inst_48792);
var state_48818__$1 = state_48818;
var statearr_48832_48857 = state_48818__$1;
(statearr_48832_48857[(2)] = inst_48793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (9))){
var inst_48782 = (state_48818[(7)]);
var inst_48795 = (state_48818[(2)]);
var inst_48796 = (inst_48782 + (1));
var inst_48782__$1 = inst_48796;
var state_48818__$1 = (function (){var statearr_48833 = state_48818;
(statearr_48833[(7)] = inst_48782__$1);

(statearr_48833[(10)] = inst_48795);

return statearr_48833;
})();
var statearr_48834_48858 = state_48818__$1;
(statearr_48834_48858[(2)] = null);

(statearr_48834_48858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (5))){
var inst_48802 = (state_48818[(2)]);
var state_48818__$1 = (function (){var statearr_48835 = state_48818;
(statearr_48835[(11)] = inst_48802);

return statearr_48835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48818__$1,(12),dchan);
} else {
if((state_val_48819 === (14))){
var inst_48804 = (state_48818[(8)]);
var inst_48809 = cljs.core.apply.call(null,f,inst_48804);
var state_48818__$1 = state_48818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48818__$1,(16),out,inst_48809);
} else {
if((state_val_48819 === (16))){
var inst_48811 = (state_48818[(2)]);
var state_48818__$1 = (function (){var statearr_48836 = state_48818;
(statearr_48836[(12)] = inst_48811);

return statearr_48836;
})();
var statearr_48837_48859 = state_48818__$1;
(statearr_48837_48859[(2)] = null);

(statearr_48837_48859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (10))){
var inst_48786 = (state_48818[(2)]);
var inst_48787 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48818__$1 = (function (){var statearr_48838 = state_48818;
(statearr_48838[(13)] = inst_48786);

return statearr_48838;
})();
var statearr_48839_48860 = state_48818__$1;
(statearr_48839_48860[(2)] = inst_48787);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48819 === (8))){
var inst_48800 = (state_48818[(2)]);
var state_48818__$1 = state_48818;
var statearr_48840_48861 = state_48818__$1;
(statearr_48840_48861[(2)] = inst_48800);

(statearr_48840_48861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___48846,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33991__auto__,c__34079__auto___48846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_48841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48841[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_48841[(1)] = (1));

return statearr_48841;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_48818){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48842){if((e48842 instanceof Object)){
var ex__33995__auto__ = e48842;
var statearr_48843_48862 = state_48818;
(statearr_48843_48862[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48863 = state_48818;
state_48818 = G__48863;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_48818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_48818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___48846,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34081__auto__ = (function (){var statearr_48844 = f__34080__auto__.call(null);
(statearr_48844[(6)] = c__34079__auto___48846);

return statearr_48844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___48846,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48866 = arguments.length;
switch (G__48866) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34079__auto___48920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___48920,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___48920,out){
return (function (state_48898){
var state_val_48899 = (state_48898[(1)]);
if((state_val_48899 === (7))){
var inst_48878 = (state_48898[(7)]);
var inst_48877 = (state_48898[(8)]);
var inst_48877__$1 = (state_48898[(2)]);
var inst_48878__$1 = cljs.core.nth.call(null,inst_48877__$1,(0),null);
var inst_48879 = cljs.core.nth.call(null,inst_48877__$1,(1),null);
var inst_48880 = (inst_48878__$1 == null);
var state_48898__$1 = (function (){var statearr_48900 = state_48898;
(statearr_48900[(7)] = inst_48878__$1);

(statearr_48900[(9)] = inst_48879);

(statearr_48900[(8)] = inst_48877__$1);

return statearr_48900;
})();
if(cljs.core.truth_(inst_48880)){
var statearr_48901_48921 = state_48898__$1;
(statearr_48901_48921[(1)] = (8));

} else {
var statearr_48902_48922 = state_48898__$1;
(statearr_48902_48922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (1))){
var inst_48867 = cljs.core.vec.call(null,chs);
var inst_48868 = inst_48867;
var state_48898__$1 = (function (){var statearr_48903 = state_48898;
(statearr_48903[(10)] = inst_48868);

return statearr_48903;
})();
var statearr_48904_48923 = state_48898__$1;
(statearr_48904_48923[(2)] = null);

(statearr_48904_48923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (4))){
var inst_48868 = (state_48898[(10)]);
var state_48898__$1 = state_48898;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48898__$1,(7),inst_48868);
} else {
if((state_val_48899 === (6))){
var inst_48894 = (state_48898[(2)]);
var state_48898__$1 = state_48898;
var statearr_48905_48924 = state_48898__$1;
(statearr_48905_48924[(2)] = inst_48894);

(statearr_48905_48924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (3))){
var inst_48896 = (state_48898[(2)]);
var state_48898__$1 = state_48898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48898__$1,inst_48896);
} else {
if((state_val_48899 === (2))){
var inst_48868 = (state_48898[(10)]);
var inst_48870 = cljs.core.count.call(null,inst_48868);
var inst_48871 = (inst_48870 > (0));
var state_48898__$1 = state_48898;
if(cljs.core.truth_(inst_48871)){
var statearr_48907_48925 = state_48898__$1;
(statearr_48907_48925[(1)] = (4));

} else {
var statearr_48908_48926 = state_48898__$1;
(statearr_48908_48926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (11))){
var inst_48868 = (state_48898[(10)]);
var inst_48887 = (state_48898[(2)]);
var tmp48906 = inst_48868;
var inst_48868__$1 = tmp48906;
var state_48898__$1 = (function (){var statearr_48909 = state_48898;
(statearr_48909[(10)] = inst_48868__$1);

(statearr_48909[(11)] = inst_48887);

return statearr_48909;
})();
var statearr_48910_48927 = state_48898__$1;
(statearr_48910_48927[(2)] = null);

(statearr_48910_48927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (9))){
var inst_48878 = (state_48898[(7)]);
var state_48898__$1 = state_48898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48898__$1,(11),out,inst_48878);
} else {
if((state_val_48899 === (5))){
var inst_48892 = cljs.core.async.close_BANG_.call(null,out);
var state_48898__$1 = state_48898;
var statearr_48911_48928 = state_48898__$1;
(statearr_48911_48928[(2)] = inst_48892);

(statearr_48911_48928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (10))){
var inst_48890 = (state_48898[(2)]);
var state_48898__$1 = state_48898;
var statearr_48912_48929 = state_48898__$1;
(statearr_48912_48929[(2)] = inst_48890);

(statearr_48912_48929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48899 === (8))){
var inst_48868 = (state_48898[(10)]);
var inst_48878 = (state_48898[(7)]);
var inst_48879 = (state_48898[(9)]);
var inst_48877 = (state_48898[(8)]);
var inst_48882 = (function (){var cs = inst_48868;
var vec__48873 = inst_48877;
var v = inst_48878;
var c = inst_48879;
return ((function (cs,vec__48873,v,c,inst_48868,inst_48878,inst_48879,inst_48877,state_val_48899,c__34079__auto___48920,out){
return (function (p1__48864_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48864_SHARP_);
});
;})(cs,vec__48873,v,c,inst_48868,inst_48878,inst_48879,inst_48877,state_val_48899,c__34079__auto___48920,out))
})();
var inst_48883 = cljs.core.filterv.call(null,inst_48882,inst_48868);
var inst_48868__$1 = inst_48883;
var state_48898__$1 = (function (){var statearr_48913 = state_48898;
(statearr_48913[(10)] = inst_48868__$1);

return statearr_48913;
})();
var statearr_48914_48930 = state_48898__$1;
(statearr_48914_48930[(2)] = null);

(statearr_48914_48930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___48920,out))
;
return ((function (switch__33991__auto__,c__34079__auto___48920,out){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_48915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48915[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_48915[(1)] = (1));

return statearr_48915;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_48898){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48916){if((e48916 instanceof Object)){
var ex__33995__auto__ = e48916;
var statearr_48917_48931 = state_48898;
(statearr_48917_48931[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48932 = state_48898;
state_48898 = G__48932;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_48898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_48898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___48920,out))
})();
var state__34081__auto__ = (function (){var statearr_48918 = f__34080__auto__.call(null);
(statearr_48918[(6)] = c__34079__auto___48920);

return statearr_48918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___48920,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48934 = arguments.length;
switch (G__48934) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34079__auto___48979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___48979,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___48979,out){
return (function (state_48958){
var state_val_48959 = (state_48958[(1)]);
if((state_val_48959 === (7))){
var inst_48940 = (state_48958[(7)]);
var inst_48940__$1 = (state_48958[(2)]);
var inst_48941 = (inst_48940__$1 == null);
var inst_48942 = cljs.core.not.call(null,inst_48941);
var state_48958__$1 = (function (){var statearr_48960 = state_48958;
(statearr_48960[(7)] = inst_48940__$1);

return statearr_48960;
})();
if(inst_48942){
var statearr_48961_48980 = state_48958__$1;
(statearr_48961_48980[(1)] = (8));

} else {
var statearr_48962_48981 = state_48958__$1;
(statearr_48962_48981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (1))){
var inst_48935 = (0);
var state_48958__$1 = (function (){var statearr_48963 = state_48958;
(statearr_48963[(8)] = inst_48935);

return statearr_48963;
})();
var statearr_48964_48982 = state_48958__$1;
(statearr_48964_48982[(2)] = null);

(statearr_48964_48982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (4))){
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48958__$1,(7),ch);
} else {
if((state_val_48959 === (6))){
var inst_48953 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
var statearr_48965_48983 = state_48958__$1;
(statearr_48965_48983[(2)] = inst_48953);

(statearr_48965_48983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (3))){
var inst_48955 = (state_48958[(2)]);
var inst_48956 = cljs.core.async.close_BANG_.call(null,out);
var state_48958__$1 = (function (){var statearr_48966 = state_48958;
(statearr_48966[(9)] = inst_48955);

return statearr_48966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48958__$1,inst_48956);
} else {
if((state_val_48959 === (2))){
var inst_48935 = (state_48958[(8)]);
var inst_48937 = (inst_48935 < n);
var state_48958__$1 = state_48958;
if(cljs.core.truth_(inst_48937)){
var statearr_48967_48984 = state_48958__$1;
(statearr_48967_48984[(1)] = (4));

} else {
var statearr_48968_48985 = state_48958__$1;
(statearr_48968_48985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (11))){
var inst_48935 = (state_48958[(8)]);
var inst_48945 = (state_48958[(2)]);
var inst_48946 = (inst_48935 + (1));
var inst_48935__$1 = inst_48946;
var state_48958__$1 = (function (){var statearr_48969 = state_48958;
(statearr_48969[(8)] = inst_48935__$1);

(statearr_48969[(10)] = inst_48945);

return statearr_48969;
})();
var statearr_48970_48986 = state_48958__$1;
(statearr_48970_48986[(2)] = null);

(statearr_48970_48986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (9))){
var state_48958__$1 = state_48958;
var statearr_48971_48987 = state_48958__$1;
(statearr_48971_48987[(2)] = null);

(statearr_48971_48987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (5))){
var state_48958__$1 = state_48958;
var statearr_48972_48988 = state_48958__$1;
(statearr_48972_48988[(2)] = null);

(statearr_48972_48988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (10))){
var inst_48950 = (state_48958[(2)]);
var state_48958__$1 = state_48958;
var statearr_48973_48989 = state_48958__$1;
(statearr_48973_48989[(2)] = inst_48950);

(statearr_48973_48989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48959 === (8))){
var inst_48940 = (state_48958[(7)]);
var state_48958__$1 = state_48958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48958__$1,(11),out,inst_48940);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___48979,out))
;
return ((function (switch__33991__auto__,c__34079__auto___48979,out){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_48974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48974[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_48974[(1)] = (1));

return statearr_48974;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_48958){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_48958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e48975){if((e48975 instanceof Object)){
var ex__33995__auto__ = e48975;
var statearr_48976_48990 = state_48958;
(statearr_48976_48990[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48991 = state_48958;
state_48958 = G__48991;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_48958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_48958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___48979,out))
})();
var state__34081__auto__ = (function (){var statearr_48977 = f__34080__auto__.call(null);
(statearr_48977[(6)] = c__34079__auto___48979);

return statearr_48977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___48979,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48993 = (function (f,ch,meta48994){
this.f = f;
this.ch = ch;
this.meta48994 = meta48994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48995,meta48994__$1){
var self__ = this;
var _48995__$1 = this;
return (new cljs.core.async.t_cljs$core$async48993(self__.f,self__.ch,meta48994__$1));
});

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48995){
var self__ = this;
var _48995__$1 = this;
return self__.meta48994;
});

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48996 = (function (f,ch,meta48994,_,fn1,meta48997){
this.f = f;
this.ch = ch;
this.meta48994 = meta48994;
this._ = _;
this.fn1 = fn1;
this.meta48997 = meta48997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48998,meta48997__$1){
var self__ = this;
var _48998__$1 = this;
return (new cljs.core.async.t_cljs$core$async48996(self__.f,self__.ch,self__.meta48994,self__._,self__.fn1,meta48997__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48998){
var self__ = this;
var _48998__$1 = this;
return self__.meta48997;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48992_SHARP_){
return f1.call(null,(((p1__48992_SHARP_ == null))?null:self__.f.call(null,p1__48992_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48996.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48994","meta48994",1989802759,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48993","cljs.core.async/t_cljs$core$async48993",18704869,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48997","meta48997",773731205,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48996";

cljs.core.async.t_cljs$core$async48996.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48996");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48996 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48996(f__$1,ch__$1,meta48994__$1,___$2,fn1__$1,meta48997){
return (new cljs.core.async.t_cljs$core$async48996(f__$1,ch__$1,meta48994__$1,___$2,fn1__$1,meta48997));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48996(self__.f,self__.ch,self__.meta48994,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28411__auto__ = ret;
if(cljs.core.truth_(and__28411__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28411__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48994","meta48994",1989802759,null)], null);
});

cljs.core.async.t_cljs$core$async48993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48993";

cljs.core.async.t_cljs$core$async48993.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48993");
});

cljs.core.async.__GT_t_cljs$core$async48993 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48993(f__$1,ch__$1,meta48994){
return (new cljs.core.async.t_cljs$core$async48993(f__$1,ch__$1,meta48994));
});

}

return (new cljs.core.async.t_cljs$core$async48993(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48999 = (function (f,ch,meta49000){
this.f = f;
this.ch = ch;
this.meta49000 = meta49000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49001,meta49000__$1){
var self__ = this;
var _49001__$1 = this;
return (new cljs.core.async.t_cljs$core$async48999(self__.f,self__.ch,meta49000__$1));
});

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49001){
var self__ = this;
var _49001__$1 = this;
return self__.meta49000;
});

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49000","meta49000",-477186567,null)], null);
});

cljs.core.async.t_cljs$core$async48999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48999";

cljs.core.async.t_cljs$core$async48999.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48999");
});

cljs.core.async.__GT_t_cljs$core$async48999 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48999(f__$1,ch__$1,meta49000){
return (new cljs.core.async.t_cljs$core$async48999(f__$1,ch__$1,meta49000));
});

}

return (new cljs.core.async.t_cljs$core$async48999(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49002 = (function (p,ch,meta49003){
this.p = p;
this.ch = ch;
this.meta49003 = meta49003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49004,meta49003__$1){
var self__ = this;
var _49004__$1 = this;
return (new cljs.core.async.t_cljs$core$async49002(self__.p,self__.ch,meta49003__$1));
});

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49004){
var self__ = this;
var _49004__$1 = this;
return self__.meta49003;
});

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49003","meta49003",-934597556,null)], null);
});

cljs.core.async.t_cljs$core$async49002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49002";

cljs.core.async.t_cljs$core$async49002.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async49002");
});

cljs.core.async.__GT_t_cljs$core$async49002 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49002(p__$1,ch__$1,meta49003){
return (new cljs.core.async.t_cljs$core$async49002(p__$1,ch__$1,meta49003));
});

}

return (new cljs.core.async.t_cljs$core$async49002(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49006 = arguments.length;
switch (G__49006) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34079__auto___49046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___49046,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___49046,out){
return (function (state_49027){
var state_val_49028 = (state_49027[(1)]);
if((state_val_49028 === (7))){
var inst_49023 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
var statearr_49029_49047 = state_49027__$1;
(statearr_49029_49047[(2)] = inst_49023);

(statearr_49029_49047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (1))){
var state_49027__$1 = state_49027;
var statearr_49030_49048 = state_49027__$1;
(statearr_49030_49048[(2)] = null);

(statearr_49030_49048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (4))){
var inst_49009 = (state_49027[(7)]);
var inst_49009__$1 = (state_49027[(2)]);
var inst_49010 = (inst_49009__$1 == null);
var state_49027__$1 = (function (){var statearr_49031 = state_49027;
(statearr_49031[(7)] = inst_49009__$1);

return statearr_49031;
})();
if(cljs.core.truth_(inst_49010)){
var statearr_49032_49049 = state_49027__$1;
(statearr_49032_49049[(1)] = (5));

} else {
var statearr_49033_49050 = state_49027__$1;
(statearr_49033_49050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (6))){
var inst_49009 = (state_49027[(7)]);
var inst_49014 = p.call(null,inst_49009);
var state_49027__$1 = state_49027;
if(cljs.core.truth_(inst_49014)){
var statearr_49034_49051 = state_49027__$1;
(statearr_49034_49051[(1)] = (8));

} else {
var statearr_49035_49052 = state_49027__$1;
(statearr_49035_49052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (3))){
var inst_49025 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49027__$1,inst_49025);
} else {
if((state_val_49028 === (2))){
var state_49027__$1 = state_49027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49027__$1,(4),ch);
} else {
if((state_val_49028 === (11))){
var inst_49017 = (state_49027[(2)]);
var state_49027__$1 = state_49027;
var statearr_49036_49053 = state_49027__$1;
(statearr_49036_49053[(2)] = inst_49017);

(statearr_49036_49053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (9))){
var state_49027__$1 = state_49027;
var statearr_49037_49054 = state_49027__$1;
(statearr_49037_49054[(2)] = null);

(statearr_49037_49054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (5))){
var inst_49012 = cljs.core.async.close_BANG_.call(null,out);
var state_49027__$1 = state_49027;
var statearr_49038_49055 = state_49027__$1;
(statearr_49038_49055[(2)] = inst_49012);

(statearr_49038_49055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (10))){
var inst_49020 = (state_49027[(2)]);
var state_49027__$1 = (function (){var statearr_49039 = state_49027;
(statearr_49039[(8)] = inst_49020);

return statearr_49039;
})();
var statearr_49040_49056 = state_49027__$1;
(statearr_49040_49056[(2)] = null);

(statearr_49040_49056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49028 === (8))){
var inst_49009 = (state_49027[(7)]);
var state_49027__$1 = state_49027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49027__$1,(11),out,inst_49009);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___49046,out))
;
return ((function (switch__33991__auto__,c__34079__auto___49046,out){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_49041 = [null,null,null,null,null,null,null,null,null];
(statearr_49041[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_49041[(1)] = (1));

return statearr_49041;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_49027){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49042){if((e49042 instanceof Object)){
var ex__33995__auto__ = e49042;
var statearr_49043_49057 = state_49027;
(statearr_49043_49057[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49058 = state_49027;
state_49027 = G__49058;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_49027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_49027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___49046,out))
})();
var state__34081__auto__ = (function (){var statearr_49044 = f__34080__auto__.call(null);
(statearr_49044[(6)] = c__34079__auto___49046);

return statearr_49044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___49046,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49060 = arguments.length;
switch (G__49060) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__){
return (function (state_49123){
var state_val_49124 = (state_49123[(1)]);
if((state_val_49124 === (7))){
var inst_49119 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
var statearr_49125_49163 = state_49123__$1;
(statearr_49125_49163[(2)] = inst_49119);

(statearr_49125_49163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (20))){
var inst_49089 = (state_49123[(7)]);
var inst_49100 = (state_49123[(2)]);
var inst_49101 = cljs.core.next.call(null,inst_49089);
var inst_49075 = inst_49101;
var inst_49076 = null;
var inst_49077 = (0);
var inst_49078 = (0);
var state_49123__$1 = (function (){var statearr_49126 = state_49123;
(statearr_49126[(8)] = inst_49077);

(statearr_49126[(9)] = inst_49100);

(statearr_49126[(10)] = inst_49076);

(statearr_49126[(11)] = inst_49078);

(statearr_49126[(12)] = inst_49075);

return statearr_49126;
})();
var statearr_49127_49164 = state_49123__$1;
(statearr_49127_49164[(2)] = null);

(statearr_49127_49164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (1))){
var state_49123__$1 = state_49123;
var statearr_49128_49165 = state_49123__$1;
(statearr_49128_49165[(2)] = null);

(statearr_49128_49165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (4))){
var inst_49064 = (state_49123[(13)]);
var inst_49064__$1 = (state_49123[(2)]);
var inst_49065 = (inst_49064__$1 == null);
var state_49123__$1 = (function (){var statearr_49129 = state_49123;
(statearr_49129[(13)] = inst_49064__$1);

return statearr_49129;
})();
if(cljs.core.truth_(inst_49065)){
var statearr_49130_49166 = state_49123__$1;
(statearr_49130_49166[(1)] = (5));

} else {
var statearr_49131_49167 = state_49123__$1;
(statearr_49131_49167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (15))){
var state_49123__$1 = state_49123;
var statearr_49135_49168 = state_49123__$1;
(statearr_49135_49168[(2)] = null);

(statearr_49135_49168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (21))){
var state_49123__$1 = state_49123;
var statearr_49136_49169 = state_49123__$1;
(statearr_49136_49169[(2)] = null);

(statearr_49136_49169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (13))){
var inst_49077 = (state_49123[(8)]);
var inst_49076 = (state_49123[(10)]);
var inst_49078 = (state_49123[(11)]);
var inst_49075 = (state_49123[(12)]);
var inst_49085 = (state_49123[(2)]);
var inst_49086 = (inst_49078 + (1));
var tmp49132 = inst_49077;
var tmp49133 = inst_49076;
var tmp49134 = inst_49075;
var inst_49075__$1 = tmp49134;
var inst_49076__$1 = tmp49133;
var inst_49077__$1 = tmp49132;
var inst_49078__$1 = inst_49086;
var state_49123__$1 = (function (){var statearr_49137 = state_49123;
(statearr_49137[(8)] = inst_49077__$1);

(statearr_49137[(14)] = inst_49085);

(statearr_49137[(10)] = inst_49076__$1);

(statearr_49137[(11)] = inst_49078__$1);

(statearr_49137[(12)] = inst_49075__$1);

return statearr_49137;
})();
var statearr_49138_49170 = state_49123__$1;
(statearr_49138_49170[(2)] = null);

(statearr_49138_49170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (22))){
var state_49123__$1 = state_49123;
var statearr_49139_49171 = state_49123__$1;
(statearr_49139_49171[(2)] = null);

(statearr_49139_49171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (6))){
var inst_49064 = (state_49123[(13)]);
var inst_49073 = f.call(null,inst_49064);
var inst_49074 = cljs.core.seq.call(null,inst_49073);
var inst_49075 = inst_49074;
var inst_49076 = null;
var inst_49077 = (0);
var inst_49078 = (0);
var state_49123__$1 = (function (){var statearr_49140 = state_49123;
(statearr_49140[(8)] = inst_49077);

(statearr_49140[(10)] = inst_49076);

(statearr_49140[(11)] = inst_49078);

(statearr_49140[(12)] = inst_49075);

return statearr_49140;
})();
var statearr_49141_49172 = state_49123__$1;
(statearr_49141_49172[(2)] = null);

(statearr_49141_49172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (17))){
var inst_49089 = (state_49123[(7)]);
var inst_49093 = cljs.core.chunk_first.call(null,inst_49089);
var inst_49094 = cljs.core.chunk_rest.call(null,inst_49089);
var inst_49095 = cljs.core.count.call(null,inst_49093);
var inst_49075 = inst_49094;
var inst_49076 = inst_49093;
var inst_49077 = inst_49095;
var inst_49078 = (0);
var state_49123__$1 = (function (){var statearr_49142 = state_49123;
(statearr_49142[(8)] = inst_49077);

(statearr_49142[(10)] = inst_49076);

(statearr_49142[(11)] = inst_49078);

(statearr_49142[(12)] = inst_49075);

return statearr_49142;
})();
var statearr_49143_49173 = state_49123__$1;
(statearr_49143_49173[(2)] = null);

(statearr_49143_49173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (3))){
var inst_49121 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49123__$1,inst_49121);
} else {
if((state_val_49124 === (12))){
var inst_49109 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
var statearr_49144_49174 = state_49123__$1;
(statearr_49144_49174[(2)] = inst_49109);

(statearr_49144_49174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (2))){
var state_49123__$1 = state_49123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49123__$1,(4),in$);
} else {
if((state_val_49124 === (23))){
var inst_49117 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
var statearr_49145_49175 = state_49123__$1;
(statearr_49145_49175[(2)] = inst_49117);

(statearr_49145_49175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (19))){
var inst_49104 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
var statearr_49146_49176 = state_49123__$1;
(statearr_49146_49176[(2)] = inst_49104);

(statearr_49146_49176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (11))){
var inst_49089 = (state_49123[(7)]);
var inst_49075 = (state_49123[(12)]);
var inst_49089__$1 = cljs.core.seq.call(null,inst_49075);
var state_49123__$1 = (function (){var statearr_49147 = state_49123;
(statearr_49147[(7)] = inst_49089__$1);

return statearr_49147;
})();
if(inst_49089__$1){
var statearr_49148_49177 = state_49123__$1;
(statearr_49148_49177[(1)] = (14));

} else {
var statearr_49149_49178 = state_49123__$1;
(statearr_49149_49178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (9))){
var inst_49111 = (state_49123[(2)]);
var inst_49112 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49123__$1 = (function (){var statearr_49150 = state_49123;
(statearr_49150[(15)] = inst_49111);

return statearr_49150;
})();
if(cljs.core.truth_(inst_49112)){
var statearr_49151_49179 = state_49123__$1;
(statearr_49151_49179[(1)] = (21));

} else {
var statearr_49152_49180 = state_49123__$1;
(statearr_49152_49180[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (5))){
var inst_49067 = cljs.core.async.close_BANG_.call(null,out);
var state_49123__$1 = state_49123;
var statearr_49153_49181 = state_49123__$1;
(statearr_49153_49181[(2)] = inst_49067);

(statearr_49153_49181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (14))){
var inst_49089 = (state_49123[(7)]);
var inst_49091 = cljs.core.chunked_seq_QMARK_.call(null,inst_49089);
var state_49123__$1 = state_49123;
if(inst_49091){
var statearr_49154_49182 = state_49123__$1;
(statearr_49154_49182[(1)] = (17));

} else {
var statearr_49155_49183 = state_49123__$1;
(statearr_49155_49183[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (16))){
var inst_49107 = (state_49123[(2)]);
var state_49123__$1 = state_49123;
var statearr_49156_49184 = state_49123__$1;
(statearr_49156_49184[(2)] = inst_49107);

(statearr_49156_49184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49124 === (10))){
var inst_49076 = (state_49123[(10)]);
var inst_49078 = (state_49123[(11)]);
var inst_49083 = cljs.core._nth.call(null,inst_49076,inst_49078);
var state_49123__$1 = state_49123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49123__$1,(13),out,inst_49083);
} else {
if((state_val_49124 === (18))){
var inst_49089 = (state_49123[(7)]);
var inst_49098 = cljs.core.first.call(null,inst_49089);
var state_49123__$1 = state_49123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49123__$1,(20),out,inst_49098);
} else {
if((state_val_49124 === (8))){
var inst_49077 = (state_49123[(8)]);
var inst_49078 = (state_49123[(11)]);
var inst_49080 = (inst_49078 < inst_49077);
var inst_49081 = inst_49080;
var state_49123__$1 = state_49123;
if(cljs.core.truth_(inst_49081)){
var statearr_49157_49185 = state_49123__$1;
(statearr_49157_49185[(1)] = (10));

} else {
var statearr_49158_49186 = state_49123__$1;
(statearr_49158_49186[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33992__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33992__auto____0 = (function (){
var statearr_49159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49159[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33992__auto__);

(statearr_49159[(1)] = (1));

return statearr_49159;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33992__auto____1 = (function (state_49123){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49160){if((e49160 instanceof Object)){
var ex__33995__auto__ = e49160;
var statearr_49161_49187 = state_49123;
(statearr_49161_49187[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49188 = state_49123;
state_49123 = G__49188;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33992__auto__ = function(state_49123){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33992__auto____1.call(this,state_49123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33992__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33992__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__))
})();
var state__34081__auto__ = (function (){var statearr_49162 = f__34080__auto__.call(null);
(statearr_49162[(6)] = c__34079__auto__);

return statearr_49162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__))
);

return c__34079__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49190 = arguments.length;
switch (G__49190) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49193 = arguments.length;
switch (G__49193) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49196 = arguments.length;
switch (G__49196) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34079__auto___49243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___49243,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___49243,out){
return (function (state_49220){
var state_val_49221 = (state_49220[(1)]);
if((state_val_49221 === (7))){
var inst_49215 = (state_49220[(2)]);
var state_49220__$1 = state_49220;
var statearr_49222_49244 = state_49220__$1;
(statearr_49222_49244[(2)] = inst_49215);

(statearr_49222_49244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (1))){
var inst_49197 = null;
var state_49220__$1 = (function (){var statearr_49223 = state_49220;
(statearr_49223[(7)] = inst_49197);

return statearr_49223;
})();
var statearr_49224_49245 = state_49220__$1;
(statearr_49224_49245[(2)] = null);

(statearr_49224_49245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (4))){
var inst_49200 = (state_49220[(8)]);
var inst_49200__$1 = (state_49220[(2)]);
var inst_49201 = (inst_49200__$1 == null);
var inst_49202 = cljs.core.not.call(null,inst_49201);
var state_49220__$1 = (function (){var statearr_49225 = state_49220;
(statearr_49225[(8)] = inst_49200__$1);

return statearr_49225;
})();
if(inst_49202){
var statearr_49226_49246 = state_49220__$1;
(statearr_49226_49246[(1)] = (5));

} else {
var statearr_49227_49247 = state_49220__$1;
(statearr_49227_49247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (6))){
var state_49220__$1 = state_49220;
var statearr_49228_49248 = state_49220__$1;
(statearr_49228_49248[(2)] = null);

(statearr_49228_49248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (3))){
var inst_49217 = (state_49220[(2)]);
var inst_49218 = cljs.core.async.close_BANG_.call(null,out);
var state_49220__$1 = (function (){var statearr_49229 = state_49220;
(statearr_49229[(9)] = inst_49217);

return statearr_49229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49220__$1,inst_49218);
} else {
if((state_val_49221 === (2))){
var state_49220__$1 = state_49220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49220__$1,(4),ch);
} else {
if((state_val_49221 === (11))){
var inst_49200 = (state_49220[(8)]);
var inst_49209 = (state_49220[(2)]);
var inst_49197 = inst_49200;
var state_49220__$1 = (function (){var statearr_49230 = state_49220;
(statearr_49230[(10)] = inst_49209);

(statearr_49230[(7)] = inst_49197);

return statearr_49230;
})();
var statearr_49231_49249 = state_49220__$1;
(statearr_49231_49249[(2)] = null);

(statearr_49231_49249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (9))){
var inst_49200 = (state_49220[(8)]);
var state_49220__$1 = state_49220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49220__$1,(11),out,inst_49200);
} else {
if((state_val_49221 === (5))){
var inst_49200 = (state_49220[(8)]);
var inst_49197 = (state_49220[(7)]);
var inst_49204 = cljs.core._EQ_.call(null,inst_49200,inst_49197);
var state_49220__$1 = state_49220;
if(inst_49204){
var statearr_49233_49250 = state_49220__$1;
(statearr_49233_49250[(1)] = (8));

} else {
var statearr_49234_49251 = state_49220__$1;
(statearr_49234_49251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (10))){
var inst_49212 = (state_49220[(2)]);
var state_49220__$1 = state_49220;
var statearr_49235_49252 = state_49220__$1;
(statearr_49235_49252[(2)] = inst_49212);

(statearr_49235_49252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49221 === (8))){
var inst_49197 = (state_49220[(7)]);
var tmp49232 = inst_49197;
var inst_49197__$1 = tmp49232;
var state_49220__$1 = (function (){var statearr_49236 = state_49220;
(statearr_49236[(7)] = inst_49197__$1);

return statearr_49236;
})();
var statearr_49237_49253 = state_49220__$1;
(statearr_49237_49253[(2)] = null);

(statearr_49237_49253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___49243,out))
;
return ((function (switch__33991__auto__,c__34079__auto___49243,out){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_49238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49238[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_49238[(1)] = (1));

return statearr_49238;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_49220){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49239){if((e49239 instanceof Object)){
var ex__33995__auto__ = e49239;
var statearr_49240_49254 = state_49220;
(statearr_49240_49254[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49255 = state_49220;
state_49220 = G__49255;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_49220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_49220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___49243,out))
})();
var state__34081__auto__ = (function (){var statearr_49241 = f__34080__auto__.call(null);
(statearr_49241[(6)] = c__34079__auto___49243);

return statearr_49241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___49243,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49257 = arguments.length;
switch (G__49257) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34079__auto___49323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___49323,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___49323,out){
return (function (state_49295){
var state_val_49296 = (state_49295[(1)]);
if((state_val_49296 === (7))){
var inst_49291 = (state_49295[(2)]);
var state_49295__$1 = state_49295;
var statearr_49297_49324 = state_49295__$1;
(statearr_49297_49324[(2)] = inst_49291);

(statearr_49297_49324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (1))){
var inst_49258 = (new Array(n));
var inst_49259 = inst_49258;
var inst_49260 = (0);
var state_49295__$1 = (function (){var statearr_49298 = state_49295;
(statearr_49298[(7)] = inst_49259);

(statearr_49298[(8)] = inst_49260);

return statearr_49298;
})();
var statearr_49299_49325 = state_49295__$1;
(statearr_49299_49325[(2)] = null);

(statearr_49299_49325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (4))){
var inst_49263 = (state_49295[(9)]);
var inst_49263__$1 = (state_49295[(2)]);
var inst_49264 = (inst_49263__$1 == null);
var inst_49265 = cljs.core.not.call(null,inst_49264);
var state_49295__$1 = (function (){var statearr_49300 = state_49295;
(statearr_49300[(9)] = inst_49263__$1);

return statearr_49300;
})();
if(inst_49265){
var statearr_49301_49326 = state_49295__$1;
(statearr_49301_49326[(1)] = (5));

} else {
var statearr_49302_49327 = state_49295__$1;
(statearr_49302_49327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (15))){
var inst_49285 = (state_49295[(2)]);
var state_49295__$1 = state_49295;
var statearr_49303_49328 = state_49295__$1;
(statearr_49303_49328[(2)] = inst_49285);

(statearr_49303_49328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (13))){
var state_49295__$1 = state_49295;
var statearr_49304_49329 = state_49295__$1;
(statearr_49304_49329[(2)] = null);

(statearr_49304_49329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (6))){
var inst_49260 = (state_49295[(8)]);
var inst_49281 = (inst_49260 > (0));
var state_49295__$1 = state_49295;
if(cljs.core.truth_(inst_49281)){
var statearr_49305_49330 = state_49295__$1;
(statearr_49305_49330[(1)] = (12));

} else {
var statearr_49306_49331 = state_49295__$1;
(statearr_49306_49331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (3))){
var inst_49293 = (state_49295[(2)]);
var state_49295__$1 = state_49295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49295__$1,inst_49293);
} else {
if((state_val_49296 === (12))){
var inst_49259 = (state_49295[(7)]);
var inst_49283 = cljs.core.vec.call(null,inst_49259);
var state_49295__$1 = state_49295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49295__$1,(15),out,inst_49283);
} else {
if((state_val_49296 === (2))){
var state_49295__$1 = state_49295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49295__$1,(4),ch);
} else {
if((state_val_49296 === (11))){
var inst_49275 = (state_49295[(2)]);
var inst_49276 = (new Array(n));
var inst_49259 = inst_49276;
var inst_49260 = (0);
var state_49295__$1 = (function (){var statearr_49307 = state_49295;
(statearr_49307[(7)] = inst_49259);

(statearr_49307[(10)] = inst_49275);

(statearr_49307[(8)] = inst_49260);

return statearr_49307;
})();
var statearr_49308_49332 = state_49295__$1;
(statearr_49308_49332[(2)] = null);

(statearr_49308_49332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (9))){
var inst_49259 = (state_49295[(7)]);
var inst_49273 = cljs.core.vec.call(null,inst_49259);
var state_49295__$1 = state_49295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49295__$1,(11),out,inst_49273);
} else {
if((state_val_49296 === (5))){
var inst_49268 = (state_49295[(11)]);
var inst_49259 = (state_49295[(7)]);
var inst_49260 = (state_49295[(8)]);
var inst_49263 = (state_49295[(9)]);
var inst_49267 = (inst_49259[inst_49260] = inst_49263);
var inst_49268__$1 = (inst_49260 + (1));
var inst_49269 = (inst_49268__$1 < n);
var state_49295__$1 = (function (){var statearr_49309 = state_49295;
(statearr_49309[(11)] = inst_49268__$1);

(statearr_49309[(12)] = inst_49267);

return statearr_49309;
})();
if(cljs.core.truth_(inst_49269)){
var statearr_49310_49333 = state_49295__$1;
(statearr_49310_49333[(1)] = (8));

} else {
var statearr_49311_49334 = state_49295__$1;
(statearr_49311_49334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (14))){
var inst_49288 = (state_49295[(2)]);
var inst_49289 = cljs.core.async.close_BANG_.call(null,out);
var state_49295__$1 = (function (){var statearr_49313 = state_49295;
(statearr_49313[(13)] = inst_49288);

return statearr_49313;
})();
var statearr_49314_49335 = state_49295__$1;
(statearr_49314_49335[(2)] = inst_49289);

(statearr_49314_49335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (10))){
var inst_49279 = (state_49295[(2)]);
var state_49295__$1 = state_49295;
var statearr_49315_49336 = state_49295__$1;
(statearr_49315_49336[(2)] = inst_49279);

(statearr_49315_49336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49296 === (8))){
var inst_49268 = (state_49295[(11)]);
var inst_49259 = (state_49295[(7)]);
var tmp49312 = inst_49259;
var inst_49259__$1 = tmp49312;
var inst_49260 = inst_49268;
var state_49295__$1 = (function (){var statearr_49316 = state_49295;
(statearr_49316[(7)] = inst_49259__$1);

(statearr_49316[(8)] = inst_49260);

return statearr_49316;
})();
var statearr_49317_49337 = state_49295__$1;
(statearr_49317_49337[(2)] = null);

(statearr_49317_49337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___49323,out))
;
return ((function (switch__33991__auto__,c__34079__auto___49323,out){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_49318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49318[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_49318[(1)] = (1));

return statearr_49318;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_49295){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49319){if((e49319 instanceof Object)){
var ex__33995__auto__ = e49319;
var statearr_49320_49338 = state_49295;
(statearr_49320_49338[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49339 = state_49295;
state_49295 = G__49339;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_49295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_49295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___49323,out))
})();
var state__34081__auto__ = (function (){var statearr_49321 = f__34080__auto__.call(null);
(statearr_49321[(6)] = c__34079__auto___49323);

return statearr_49321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___49323,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49341 = arguments.length;
switch (G__49341) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34079__auto___49411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___49411,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___49411,out){
return (function (state_49383){
var state_val_49384 = (state_49383[(1)]);
if((state_val_49384 === (7))){
var inst_49379 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49385_49412 = state_49383__$1;
(statearr_49385_49412[(2)] = inst_49379);

(statearr_49385_49412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (1))){
var inst_49342 = [];
var inst_49343 = inst_49342;
var inst_49344 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49383__$1 = (function (){var statearr_49386 = state_49383;
(statearr_49386[(7)] = inst_49343);

(statearr_49386[(8)] = inst_49344);

return statearr_49386;
})();
var statearr_49387_49413 = state_49383__$1;
(statearr_49387_49413[(2)] = null);

(statearr_49387_49413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (4))){
var inst_49347 = (state_49383[(9)]);
var inst_49347__$1 = (state_49383[(2)]);
var inst_49348 = (inst_49347__$1 == null);
var inst_49349 = cljs.core.not.call(null,inst_49348);
var state_49383__$1 = (function (){var statearr_49388 = state_49383;
(statearr_49388[(9)] = inst_49347__$1);

return statearr_49388;
})();
if(inst_49349){
var statearr_49389_49414 = state_49383__$1;
(statearr_49389_49414[(1)] = (5));

} else {
var statearr_49390_49415 = state_49383__$1;
(statearr_49390_49415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (15))){
var inst_49373 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49391_49416 = state_49383__$1;
(statearr_49391_49416[(2)] = inst_49373);

(statearr_49391_49416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (13))){
var state_49383__$1 = state_49383;
var statearr_49392_49417 = state_49383__$1;
(statearr_49392_49417[(2)] = null);

(statearr_49392_49417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (6))){
var inst_49343 = (state_49383[(7)]);
var inst_49368 = inst_49343.length;
var inst_49369 = (inst_49368 > (0));
var state_49383__$1 = state_49383;
if(cljs.core.truth_(inst_49369)){
var statearr_49393_49418 = state_49383__$1;
(statearr_49393_49418[(1)] = (12));

} else {
var statearr_49394_49419 = state_49383__$1;
(statearr_49394_49419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (3))){
var inst_49381 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49383__$1,inst_49381);
} else {
if((state_val_49384 === (12))){
var inst_49343 = (state_49383[(7)]);
var inst_49371 = cljs.core.vec.call(null,inst_49343);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49383__$1,(15),out,inst_49371);
} else {
if((state_val_49384 === (2))){
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49383__$1,(4),ch);
} else {
if((state_val_49384 === (11))){
var inst_49351 = (state_49383[(10)]);
var inst_49347 = (state_49383[(9)]);
var inst_49361 = (state_49383[(2)]);
var inst_49362 = [];
var inst_49363 = inst_49362.push(inst_49347);
var inst_49343 = inst_49362;
var inst_49344 = inst_49351;
var state_49383__$1 = (function (){var statearr_49395 = state_49383;
(statearr_49395[(7)] = inst_49343);

(statearr_49395[(11)] = inst_49361);

(statearr_49395[(8)] = inst_49344);

(statearr_49395[(12)] = inst_49363);

return statearr_49395;
})();
var statearr_49396_49420 = state_49383__$1;
(statearr_49396_49420[(2)] = null);

(statearr_49396_49420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (9))){
var inst_49343 = (state_49383[(7)]);
var inst_49359 = cljs.core.vec.call(null,inst_49343);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49383__$1,(11),out,inst_49359);
} else {
if((state_val_49384 === (5))){
var inst_49351 = (state_49383[(10)]);
var inst_49347 = (state_49383[(9)]);
var inst_49344 = (state_49383[(8)]);
var inst_49351__$1 = f.call(null,inst_49347);
var inst_49352 = cljs.core._EQ_.call(null,inst_49351__$1,inst_49344);
var inst_49353 = cljs.core.keyword_identical_QMARK_.call(null,inst_49344,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49354 = (inst_49352) || (inst_49353);
var state_49383__$1 = (function (){var statearr_49397 = state_49383;
(statearr_49397[(10)] = inst_49351__$1);

return statearr_49397;
})();
if(cljs.core.truth_(inst_49354)){
var statearr_49398_49421 = state_49383__$1;
(statearr_49398_49421[(1)] = (8));

} else {
var statearr_49399_49422 = state_49383__$1;
(statearr_49399_49422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (14))){
var inst_49376 = (state_49383[(2)]);
var inst_49377 = cljs.core.async.close_BANG_.call(null,out);
var state_49383__$1 = (function (){var statearr_49401 = state_49383;
(statearr_49401[(13)] = inst_49376);

return statearr_49401;
})();
var statearr_49402_49423 = state_49383__$1;
(statearr_49402_49423[(2)] = inst_49377);

(statearr_49402_49423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (10))){
var inst_49366 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49403_49424 = state_49383__$1;
(statearr_49403_49424[(2)] = inst_49366);

(statearr_49403_49424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (8))){
var inst_49343 = (state_49383[(7)]);
var inst_49351 = (state_49383[(10)]);
var inst_49347 = (state_49383[(9)]);
var inst_49356 = inst_49343.push(inst_49347);
var tmp49400 = inst_49343;
var inst_49343__$1 = tmp49400;
var inst_49344 = inst_49351;
var state_49383__$1 = (function (){var statearr_49404 = state_49383;
(statearr_49404[(7)] = inst_49343__$1);

(statearr_49404[(14)] = inst_49356);

(statearr_49404[(8)] = inst_49344);

return statearr_49404;
})();
var statearr_49405_49425 = state_49383__$1;
(statearr_49405_49425[(2)] = null);

(statearr_49405_49425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34079__auto___49411,out))
;
return ((function (switch__33991__auto__,c__34079__auto___49411,out){
return (function() {
var cljs$core$async$state_machine__33992__auto__ = null;
var cljs$core$async$state_machine__33992__auto____0 = (function (){
var statearr_49406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49406[(0)] = cljs$core$async$state_machine__33992__auto__);

(statearr_49406[(1)] = (1));

return statearr_49406;
});
var cljs$core$async$state_machine__33992__auto____1 = (function (state_49383){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_49383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e49407){if((e49407 instanceof Object)){
var ex__33995__auto__ = e49407;
var statearr_49408_49426 = state_49383;
(statearr_49408_49426[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49427 = state_49383;
state_49383 = G__49427;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
cljs$core$async$state_machine__33992__auto__ = function(state_49383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33992__auto____1.call(this,state_49383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33992__auto____0;
cljs$core$async$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33992__auto____1;
return cljs$core$async$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___49411,out))
})();
var state__34081__auto__ = (function (){var statearr_49409 = f__34080__auto__.call(null);
(statearr_49409[(6)] = c__34079__auto___49411);

return statearr_49409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___49411,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518440299423
