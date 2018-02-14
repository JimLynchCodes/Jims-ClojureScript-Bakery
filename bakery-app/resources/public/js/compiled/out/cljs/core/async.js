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
var G__34121 = arguments.length;
switch (G__34121) {
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
if(typeof cljs.core.async.t_cljs$core$async34122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34122 = (function (f,blockable,meta34123){
this.f = f;
this.blockable = blockable;
this.meta34123 = meta34123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34124,meta34123__$1){
var self__ = this;
var _34124__$1 = this;
return (new cljs.core.async.t_cljs$core$async34122(self__.f,self__.blockable,meta34123__$1));
});

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34124){
var self__ = this;
var _34124__$1 = this;
return self__.meta34123;
});

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34123","meta34123",570143412,null)], null);
});

cljs.core.async.t_cljs$core$async34122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34122";

cljs.core.async.t_cljs$core$async34122.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34122");
});

cljs.core.async.__GT_t_cljs$core$async34122 = (function cljs$core$async$__GT_t_cljs$core$async34122(f__$1,blockable__$1,meta34123){
return (new cljs.core.async.t_cljs$core$async34122(f__$1,blockable__$1,meta34123));
});

}

return (new cljs.core.async.t_cljs$core$async34122(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34128 = arguments.length;
switch (G__34128) {
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
var G__34131 = arguments.length;
switch (G__34131) {
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
var G__34134 = arguments.length;
switch (G__34134) {
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
var val_34136 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34136);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34136,ret){
return (function (){
return fn1.call(null,val_34136);
});})(val_34136,ret))
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
var G__34138 = arguments.length;
switch (G__34138) {
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
var n__29368__auto___34140 = n;
var x_34141 = (0);
while(true){
if((x_34141 < n__29368__auto___34140)){
(a[x_34141] = (0));

var G__34142 = (x_34141 + (1));
x_34141 = G__34142;
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

var G__34143 = (i + (1));
i = G__34143;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34144 = (function (flag,meta34145){
this.flag = flag;
this.meta34145 = meta34145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34146,meta34145__$1){
var self__ = this;
var _34146__$1 = this;
return (new cljs.core.async.t_cljs$core$async34144(self__.flag,meta34145__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34146){
var self__ = this;
var _34146__$1 = this;
return self__.meta34145;
});})(flag))
;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34144.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34145","meta34145",-204539862,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34144";

cljs.core.async.t_cljs$core$async34144.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34144");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34144 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34144(flag__$1,meta34145){
return (new cljs.core.async.t_cljs$core$async34144(flag__$1,meta34145));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34144(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34147 = (function (flag,cb,meta34148){
this.flag = flag;
this.cb = cb;
this.meta34148 = meta34148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34149,meta34148__$1){
var self__ = this;
var _34149__$1 = this;
return (new cljs.core.async.t_cljs$core$async34147(self__.flag,self__.cb,meta34148__$1));
});

cljs.core.async.t_cljs$core$async34147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34149){
var self__ = this;
var _34149__$1 = this;
return self__.meta34148;
});

cljs.core.async.t_cljs$core$async34147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34148","meta34148",312393489,null)], null);
});

cljs.core.async.t_cljs$core$async34147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34147";

cljs.core.async.t_cljs$core$async34147.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34147");
});

cljs.core.async.__GT_t_cljs$core$async34147 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34147(flag__$1,cb__$1,meta34148){
return (new cljs.core.async.t_cljs$core$async34147(flag__$1,cb__$1,meta34148));
});

}

return (new cljs.core.async.t_cljs$core$async34147(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34150_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34150_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34151_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34151_SHARP_,port], null));
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
var G__34152 = (i + (1));
i = G__34152;
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
var len__29592__auto___34158 = arguments.length;
var i__29593__auto___34159 = (0);
while(true){
if((i__29593__auto___34159 < len__29592__auto___34158)){
args__29599__auto__.push((arguments[i__29593__auto___34159]));

var G__34160 = (i__29593__auto___34159 + (1));
i__29593__auto___34159 = G__34160;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34155){
var map__34156 = p__34155;
var map__34156__$1 = ((((!((map__34156 == null)))?((((map__34156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34156):map__34156);
var opts = map__34156__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34153){
var G__34154 = cljs.core.first.call(null,seq34153);
var seq34153__$1 = cljs.core.next.call(null,seq34153);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34154,seq34153__$1);
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
var G__34162 = arguments.length;
switch (G__34162) {
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
var c__34075__auto___34208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___34208){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___34208){
return (function (state_34186){
var state_val_34187 = (state_34186[(1)]);
if((state_val_34187 === (7))){
var inst_34182 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34188_34209 = state_34186__$1;
(statearr_34188_34209[(2)] = inst_34182);

(statearr_34188_34209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (1))){
var state_34186__$1 = state_34186;
var statearr_34189_34210 = state_34186__$1;
(statearr_34189_34210[(2)] = null);

(statearr_34189_34210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (4))){
var inst_34165 = (state_34186[(7)]);
var inst_34165__$1 = (state_34186[(2)]);
var inst_34166 = (inst_34165__$1 == null);
var state_34186__$1 = (function (){var statearr_34190 = state_34186;
(statearr_34190[(7)] = inst_34165__$1);

return statearr_34190;
})();
if(cljs.core.truth_(inst_34166)){
var statearr_34191_34211 = state_34186__$1;
(statearr_34191_34211[(1)] = (5));

} else {
var statearr_34192_34212 = state_34186__$1;
(statearr_34192_34212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (13))){
var state_34186__$1 = state_34186;
var statearr_34193_34213 = state_34186__$1;
(statearr_34193_34213[(2)] = null);

(statearr_34193_34213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (6))){
var inst_34165 = (state_34186[(7)]);
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34186__$1,(11),to,inst_34165);
} else {
if((state_val_34187 === (3))){
var inst_34184 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34186__$1,inst_34184);
} else {
if((state_val_34187 === (12))){
var state_34186__$1 = state_34186;
var statearr_34194_34214 = state_34186__$1;
(statearr_34194_34214[(2)] = null);

(statearr_34194_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (2))){
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34186__$1,(4),from);
} else {
if((state_val_34187 === (11))){
var inst_34175 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34175)){
var statearr_34195_34215 = state_34186__$1;
(statearr_34195_34215[(1)] = (12));

} else {
var statearr_34196_34216 = state_34186__$1;
(statearr_34196_34216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (9))){
var state_34186__$1 = state_34186;
var statearr_34197_34217 = state_34186__$1;
(statearr_34197_34217[(2)] = null);

(statearr_34197_34217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (5))){
var state_34186__$1 = state_34186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34198_34218 = state_34186__$1;
(statearr_34198_34218[(1)] = (8));

} else {
var statearr_34199_34219 = state_34186__$1;
(statearr_34199_34219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (14))){
var inst_34180 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34200_34220 = state_34186__$1;
(statearr_34200_34220[(2)] = inst_34180);

(statearr_34200_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (10))){
var inst_34172 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34201_34221 = state_34186__$1;
(statearr_34201_34221[(2)] = inst_34172);

(statearr_34201_34221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (8))){
var inst_34169 = cljs.core.async.close_BANG_.call(null,to);
var state_34186__$1 = state_34186;
var statearr_34202_34222 = state_34186__$1;
(statearr_34202_34222[(2)] = inst_34169);

(statearr_34202_34222[(1)] = (10));


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
});})(c__34075__auto___34208))
;
return ((function (switch__33987__auto__,c__34075__auto___34208){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_34203 = [null,null,null,null,null,null,null,null];
(statearr_34203[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_34203[(1)] = (1));

return statearr_34203;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_34186){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34204){if((e34204 instanceof Object)){
var ex__33991__auto__ = e34204;
var statearr_34205_34223 = state_34186;
(statearr_34205_34223[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34224 = state_34186;
state_34186 = G__34224;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_34186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_34186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___34208))
})();
var state__34077__auto__ = (function (){var statearr_34206 = f__34076__auto__.call(null);
(statearr_34206[(6)] = c__34075__auto___34208);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___34208))
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
return (function (p__34225){
var vec__34226 = p__34225;
var v = cljs.core.nth.call(null,vec__34226,(0),null);
var p = cljs.core.nth.call(null,vec__34226,(1),null);
var job = vec__34226;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34075__auto___34397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___34397,res,vec__34226,v,p,job,jobs,results){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___34397,res,vec__34226,v,p,job,jobs,results){
return (function (state_34233){
var state_val_34234 = (state_34233[(1)]);
if((state_val_34234 === (1))){
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34233__$1,(2),res,v);
} else {
if((state_val_34234 === (2))){
var inst_34230 = (state_34233[(2)]);
var inst_34231 = cljs.core.async.close_BANG_.call(null,res);
var state_34233__$1 = (function (){var statearr_34235 = state_34233;
(statearr_34235[(7)] = inst_34230);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34233__$1,inst_34231);
} else {
return null;
}
}
});})(c__34075__auto___34397,res,vec__34226,v,p,job,jobs,results))
;
return ((function (switch__33987__auto__,c__34075__auto___34397,res,vec__34226,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0 = (function (){
var statearr_34236 = [null,null,null,null,null,null,null,null];
(statearr_34236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__);

(statearr_34236[(1)] = (1));

return statearr_34236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1 = (function (state_34233){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34237){if((e34237 instanceof Object)){
var ex__33991__auto__ = e34237;
var statearr_34238_34398 = state_34233;
(statearr_34238_34398[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34399 = state_34233;
state_34233 = G__34399;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = function(state_34233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1.call(this,state_34233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___34397,res,vec__34226,v,p,job,jobs,results))
})();
var state__34077__auto__ = (function (){var statearr_34239 = f__34076__auto__.call(null);
(statearr_34239[(6)] = c__34075__auto___34397);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___34397,res,vec__34226,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34240){
var vec__34241 = p__34240;
var v = cljs.core.nth.call(null,vec__34241,(0),null);
var p = cljs.core.nth.call(null,vec__34241,(1),null);
var job = vec__34241;
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
var n__29368__auto___34400 = n;
var __34401 = (0);
while(true){
if((__34401 < n__29368__auto___34400)){
var G__34244_34402 = type;
var G__34244_34403__$1 = (((G__34244_34402 instanceof cljs.core.Keyword))?G__34244_34402.fqn:null);
switch (G__34244_34403__$1) {
case "compute":
var c__34075__auto___34405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34401,c__34075__auto___34405,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (__34401,c__34075__auto___34405,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async){
return (function (state_34257){
var state_val_34258 = (state_34257[(1)]);
if((state_val_34258 === (1))){
var state_34257__$1 = state_34257;
var statearr_34259_34406 = state_34257__$1;
(statearr_34259_34406[(2)] = null);

(statearr_34259_34406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (2))){
var state_34257__$1 = state_34257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34257__$1,(4),jobs);
} else {
if((state_val_34258 === (3))){
var inst_34255 = (state_34257[(2)]);
var state_34257__$1 = state_34257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34257__$1,inst_34255);
} else {
if((state_val_34258 === (4))){
var inst_34247 = (state_34257[(2)]);
var inst_34248 = process.call(null,inst_34247);
var state_34257__$1 = state_34257;
if(cljs.core.truth_(inst_34248)){
var statearr_34260_34407 = state_34257__$1;
(statearr_34260_34407[(1)] = (5));

} else {
var statearr_34261_34408 = state_34257__$1;
(statearr_34261_34408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (5))){
var state_34257__$1 = state_34257;
var statearr_34262_34409 = state_34257__$1;
(statearr_34262_34409[(2)] = null);

(statearr_34262_34409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (6))){
var state_34257__$1 = state_34257;
var statearr_34263_34410 = state_34257__$1;
(statearr_34263_34410[(2)] = null);

(statearr_34263_34410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (7))){
var inst_34253 = (state_34257[(2)]);
var state_34257__$1 = state_34257;
var statearr_34264_34411 = state_34257__$1;
(statearr_34264_34411[(2)] = inst_34253);

(statearr_34264_34411[(1)] = (3));


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
});})(__34401,c__34075__auto___34405,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async))
;
return ((function (__34401,switch__33987__auto__,c__34075__auto___34405,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0 = (function (){
var statearr_34265 = [null,null,null,null,null,null,null];
(statearr_34265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__);

(statearr_34265[(1)] = (1));

return statearr_34265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1 = (function (state_34257){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34266){if((e34266 instanceof Object)){
var ex__33991__auto__ = e34266;
var statearr_34267_34412 = state_34257;
(statearr_34267_34412[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34413 = state_34257;
state_34257 = G__34413;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = function(state_34257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1.call(this,state_34257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__;
})()
;})(__34401,switch__33987__auto__,c__34075__auto___34405,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async))
})();
var state__34077__auto__ = (function (){var statearr_34268 = f__34076__auto__.call(null);
(statearr_34268[(6)] = c__34075__auto___34405);

return statearr_34268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(__34401,c__34075__auto___34405,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async))
);


break;
case "async":
var c__34075__auto___34414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34401,c__34075__auto___34414,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (__34401,c__34075__auto___34414,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async){
return (function (state_34281){
var state_val_34282 = (state_34281[(1)]);
if((state_val_34282 === (1))){
var state_34281__$1 = state_34281;
var statearr_34283_34415 = state_34281__$1;
(statearr_34283_34415[(2)] = null);

(statearr_34283_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34282 === (2))){
var state_34281__$1 = state_34281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34281__$1,(4),jobs);
} else {
if((state_val_34282 === (3))){
var inst_34279 = (state_34281[(2)]);
var state_34281__$1 = state_34281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34281__$1,inst_34279);
} else {
if((state_val_34282 === (4))){
var inst_34271 = (state_34281[(2)]);
var inst_34272 = async.call(null,inst_34271);
var state_34281__$1 = state_34281;
if(cljs.core.truth_(inst_34272)){
var statearr_34284_34416 = state_34281__$1;
(statearr_34284_34416[(1)] = (5));

} else {
var statearr_34285_34417 = state_34281__$1;
(statearr_34285_34417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34282 === (5))){
var state_34281__$1 = state_34281;
var statearr_34286_34418 = state_34281__$1;
(statearr_34286_34418[(2)] = null);

(statearr_34286_34418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34282 === (6))){
var state_34281__$1 = state_34281;
var statearr_34287_34419 = state_34281__$1;
(statearr_34287_34419[(2)] = null);

(statearr_34287_34419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34282 === (7))){
var inst_34277 = (state_34281[(2)]);
var state_34281__$1 = state_34281;
var statearr_34288_34420 = state_34281__$1;
(statearr_34288_34420[(2)] = inst_34277);

(statearr_34288_34420[(1)] = (3));


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
});})(__34401,c__34075__auto___34414,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async))
;
return ((function (__34401,switch__33987__auto__,c__34075__auto___34414,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0 = (function (){
var statearr_34289 = [null,null,null,null,null,null,null];
(statearr_34289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__);

(statearr_34289[(1)] = (1));

return statearr_34289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1 = (function (state_34281){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34290){if((e34290 instanceof Object)){
var ex__33991__auto__ = e34290;
var statearr_34291_34421 = state_34281;
(statearr_34291_34421[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34422 = state_34281;
state_34281 = G__34422;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = function(state_34281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1.call(this,state_34281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__;
})()
;})(__34401,switch__33987__auto__,c__34075__auto___34414,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async))
})();
var state__34077__auto__ = (function (){var statearr_34292 = f__34076__auto__.call(null);
(statearr_34292[(6)] = c__34075__auto___34414);

return statearr_34292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(__34401,c__34075__auto___34414,G__34244_34402,G__34244_34403__$1,n__29368__auto___34400,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34244_34403__$1)].join('')));

}

var G__34423 = (__34401 + (1));
__34401 = G__34423;
continue;
} else {
}
break;
}

var c__34075__auto___34424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___34424,jobs,results,process,async){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___34424,jobs,results,process,async){
return (function (state_34314){
var state_val_34315 = (state_34314[(1)]);
if((state_val_34315 === (1))){
var state_34314__$1 = state_34314;
var statearr_34316_34425 = state_34314__$1;
(statearr_34316_34425[(2)] = null);

(statearr_34316_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (2))){
var state_34314__$1 = state_34314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34314__$1,(4),from);
} else {
if((state_val_34315 === (3))){
var inst_34312 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34314__$1,inst_34312);
} else {
if((state_val_34315 === (4))){
var inst_34295 = (state_34314[(7)]);
var inst_34295__$1 = (state_34314[(2)]);
var inst_34296 = (inst_34295__$1 == null);
var state_34314__$1 = (function (){var statearr_34317 = state_34314;
(statearr_34317[(7)] = inst_34295__$1);

return statearr_34317;
})();
if(cljs.core.truth_(inst_34296)){
var statearr_34318_34426 = state_34314__$1;
(statearr_34318_34426[(1)] = (5));

} else {
var statearr_34319_34427 = state_34314__$1;
(statearr_34319_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (5))){
var inst_34298 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34314__$1 = state_34314;
var statearr_34320_34428 = state_34314__$1;
(statearr_34320_34428[(2)] = inst_34298);

(statearr_34320_34428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (6))){
var inst_34295 = (state_34314[(7)]);
var inst_34300 = (state_34314[(8)]);
var inst_34300__$1 = cljs.core.async.chan.call(null,(1));
var inst_34301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34302 = [inst_34295,inst_34300__$1];
var inst_34303 = (new cljs.core.PersistentVector(null,2,(5),inst_34301,inst_34302,null));
var state_34314__$1 = (function (){var statearr_34321 = state_34314;
(statearr_34321[(8)] = inst_34300__$1);

return statearr_34321;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34314__$1,(8),jobs,inst_34303);
} else {
if((state_val_34315 === (7))){
var inst_34310 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34322_34429 = state_34314__$1;
(statearr_34322_34429[(2)] = inst_34310);

(statearr_34322_34429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (8))){
var inst_34300 = (state_34314[(8)]);
var inst_34305 = (state_34314[(2)]);
var state_34314__$1 = (function (){var statearr_34323 = state_34314;
(statearr_34323[(9)] = inst_34305);

return statearr_34323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34314__$1,(9),results,inst_34300);
} else {
if((state_val_34315 === (9))){
var inst_34307 = (state_34314[(2)]);
var state_34314__$1 = (function (){var statearr_34324 = state_34314;
(statearr_34324[(10)] = inst_34307);

return statearr_34324;
})();
var statearr_34325_34430 = state_34314__$1;
(statearr_34325_34430[(2)] = null);

(statearr_34325_34430[(1)] = (2));


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
});})(c__34075__auto___34424,jobs,results,process,async))
;
return ((function (switch__33987__auto__,c__34075__auto___34424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0 = (function (){
var statearr_34326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__);

(statearr_34326[(1)] = (1));

return statearr_34326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1 = (function (state_34314){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34327){if((e34327 instanceof Object)){
var ex__33991__auto__ = e34327;
var statearr_34328_34431 = state_34314;
(statearr_34328_34431[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_34314;
state_34314 = G__34432;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = function(state_34314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1.call(this,state_34314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___34424,jobs,results,process,async))
})();
var state__34077__auto__ = (function (){var statearr_34329 = f__34076__auto__.call(null);
(statearr_34329[(6)] = c__34075__auto___34424);

return statearr_34329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___34424,jobs,results,process,async))
);


var c__34075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto__,jobs,results,process,async){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto__,jobs,results,process,async){
return (function (state_34367){
var state_val_34368 = (state_34367[(1)]);
if((state_val_34368 === (7))){
var inst_34363 = (state_34367[(2)]);
var state_34367__$1 = state_34367;
var statearr_34369_34433 = state_34367__$1;
(statearr_34369_34433[(2)] = inst_34363);

(statearr_34369_34433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (20))){
var state_34367__$1 = state_34367;
var statearr_34370_34434 = state_34367__$1;
(statearr_34370_34434[(2)] = null);

(statearr_34370_34434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (1))){
var state_34367__$1 = state_34367;
var statearr_34371_34435 = state_34367__$1;
(statearr_34371_34435[(2)] = null);

(statearr_34371_34435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (4))){
var inst_34332 = (state_34367[(7)]);
var inst_34332__$1 = (state_34367[(2)]);
var inst_34333 = (inst_34332__$1 == null);
var state_34367__$1 = (function (){var statearr_34372 = state_34367;
(statearr_34372[(7)] = inst_34332__$1);

return statearr_34372;
})();
if(cljs.core.truth_(inst_34333)){
var statearr_34373_34436 = state_34367__$1;
(statearr_34373_34436[(1)] = (5));

} else {
var statearr_34374_34437 = state_34367__$1;
(statearr_34374_34437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (15))){
var inst_34345 = (state_34367[(8)]);
var state_34367__$1 = state_34367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34367__$1,(18),to,inst_34345);
} else {
if((state_val_34368 === (21))){
var inst_34358 = (state_34367[(2)]);
var state_34367__$1 = state_34367;
var statearr_34375_34438 = state_34367__$1;
(statearr_34375_34438[(2)] = inst_34358);

(statearr_34375_34438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (13))){
var inst_34360 = (state_34367[(2)]);
var state_34367__$1 = (function (){var statearr_34376 = state_34367;
(statearr_34376[(9)] = inst_34360);

return statearr_34376;
})();
var statearr_34377_34439 = state_34367__$1;
(statearr_34377_34439[(2)] = null);

(statearr_34377_34439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (6))){
var inst_34332 = (state_34367[(7)]);
var state_34367__$1 = state_34367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34367__$1,(11),inst_34332);
} else {
if((state_val_34368 === (17))){
var inst_34353 = (state_34367[(2)]);
var state_34367__$1 = state_34367;
if(cljs.core.truth_(inst_34353)){
var statearr_34378_34440 = state_34367__$1;
(statearr_34378_34440[(1)] = (19));

} else {
var statearr_34379_34441 = state_34367__$1;
(statearr_34379_34441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (3))){
var inst_34365 = (state_34367[(2)]);
var state_34367__$1 = state_34367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34367__$1,inst_34365);
} else {
if((state_val_34368 === (12))){
var inst_34342 = (state_34367[(10)]);
var state_34367__$1 = state_34367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34367__$1,(14),inst_34342);
} else {
if((state_val_34368 === (2))){
var state_34367__$1 = state_34367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34367__$1,(4),results);
} else {
if((state_val_34368 === (19))){
var state_34367__$1 = state_34367;
var statearr_34380_34442 = state_34367__$1;
(statearr_34380_34442[(2)] = null);

(statearr_34380_34442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (11))){
var inst_34342 = (state_34367[(2)]);
var state_34367__$1 = (function (){var statearr_34381 = state_34367;
(statearr_34381[(10)] = inst_34342);

return statearr_34381;
})();
var statearr_34382_34443 = state_34367__$1;
(statearr_34382_34443[(2)] = null);

(statearr_34382_34443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (9))){
var state_34367__$1 = state_34367;
var statearr_34383_34444 = state_34367__$1;
(statearr_34383_34444[(2)] = null);

(statearr_34383_34444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (5))){
var state_34367__$1 = state_34367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34384_34445 = state_34367__$1;
(statearr_34384_34445[(1)] = (8));

} else {
var statearr_34385_34446 = state_34367__$1;
(statearr_34385_34446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (14))){
var inst_34345 = (state_34367[(8)]);
var inst_34347 = (state_34367[(11)]);
var inst_34345__$1 = (state_34367[(2)]);
var inst_34346 = (inst_34345__$1 == null);
var inst_34347__$1 = cljs.core.not.call(null,inst_34346);
var state_34367__$1 = (function (){var statearr_34386 = state_34367;
(statearr_34386[(8)] = inst_34345__$1);

(statearr_34386[(11)] = inst_34347__$1);

return statearr_34386;
})();
if(inst_34347__$1){
var statearr_34387_34447 = state_34367__$1;
(statearr_34387_34447[(1)] = (15));

} else {
var statearr_34388_34448 = state_34367__$1;
(statearr_34388_34448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (16))){
var inst_34347 = (state_34367[(11)]);
var state_34367__$1 = state_34367;
var statearr_34389_34449 = state_34367__$1;
(statearr_34389_34449[(2)] = inst_34347);

(statearr_34389_34449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (10))){
var inst_34339 = (state_34367[(2)]);
var state_34367__$1 = state_34367;
var statearr_34390_34450 = state_34367__$1;
(statearr_34390_34450[(2)] = inst_34339);

(statearr_34390_34450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (18))){
var inst_34350 = (state_34367[(2)]);
var state_34367__$1 = state_34367;
var statearr_34391_34451 = state_34367__$1;
(statearr_34391_34451[(2)] = inst_34350);

(statearr_34391_34451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34368 === (8))){
var inst_34336 = cljs.core.async.close_BANG_.call(null,to);
var state_34367__$1 = state_34367;
var statearr_34392_34452 = state_34367__$1;
(statearr_34392_34452[(2)] = inst_34336);

(statearr_34392_34452[(1)] = (10));


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
});})(c__34075__auto__,jobs,results,process,async))
;
return ((function (switch__33987__auto__,c__34075__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0 = (function (){
var statearr_34393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__);

(statearr_34393[(1)] = (1));

return statearr_34393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1 = (function (state_34367){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34394){if((e34394 instanceof Object)){
var ex__33991__auto__ = e34394;
var statearr_34395_34453 = state_34367;
(statearr_34395_34453[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34454 = state_34367;
state_34367 = G__34454;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__ = function(state_34367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1.call(this,state_34367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33988__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto__,jobs,results,process,async))
})();
var state__34077__auto__ = (function (){var statearr_34396 = f__34076__auto__.call(null);
(statearr_34396[(6)] = c__34075__auto__);

return statearr_34396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto__,jobs,results,process,async))
);

return c__34075__auto__;
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
var G__34456 = arguments.length;
switch (G__34456) {
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
var G__34459 = arguments.length;
switch (G__34459) {
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
var G__34462 = arguments.length;
switch (G__34462) {
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
var c__34075__auto___34511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___34511,tc,fc){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___34511,tc,fc){
return (function (state_34488){
var state_val_34489 = (state_34488[(1)]);
if((state_val_34489 === (7))){
var inst_34484 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
var statearr_34490_34512 = state_34488__$1;
(statearr_34490_34512[(2)] = inst_34484);

(statearr_34490_34512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (1))){
var state_34488__$1 = state_34488;
var statearr_34491_34513 = state_34488__$1;
(statearr_34491_34513[(2)] = null);

(statearr_34491_34513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (4))){
var inst_34465 = (state_34488[(7)]);
var inst_34465__$1 = (state_34488[(2)]);
var inst_34466 = (inst_34465__$1 == null);
var state_34488__$1 = (function (){var statearr_34492 = state_34488;
(statearr_34492[(7)] = inst_34465__$1);

return statearr_34492;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34493_34514 = state_34488__$1;
(statearr_34493_34514[(1)] = (5));

} else {
var statearr_34494_34515 = state_34488__$1;
(statearr_34494_34515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (13))){
var state_34488__$1 = state_34488;
var statearr_34495_34516 = state_34488__$1;
(statearr_34495_34516[(2)] = null);

(statearr_34495_34516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (6))){
var inst_34465 = (state_34488[(7)]);
var inst_34471 = p.call(null,inst_34465);
var state_34488__$1 = state_34488;
if(cljs.core.truth_(inst_34471)){
var statearr_34496_34517 = state_34488__$1;
(statearr_34496_34517[(1)] = (9));

} else {
var statearr_34497_34518 = state_34488__$1;
(statearr_34497_34518[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (3))){
var inst_34486 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34488__$1,inst_34486);
} else {
if((state_val_34489 === (12))){
var state_34488__$1 = state_34488;
var statearr_34498_34519 = state_34488__$1;
(statearr_34498_34519[(2)] = null);

(statearr_34498_34519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (2))){
var state_34488__$1 = state_34488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34488__$1,(4),ch);
} else {
if((state_val_34489 === (11))){
var inst_34465 = (state_34488[(7)]);
var inst_34475 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34488__$1,(8),inst_34475,inst_34465);
} else {
if((state_val_34489 === (9))){
var state_34488__$1 = state_34488;
var statearr_34499_34520 = state_34488__$1;
(statearr_34499_34520[(2)] = tc);

(statearr_34499_34520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (5))){
var inst_34468 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34469 = cljs.core.async.close_BANG_.call(null,fc);
var state_34488__$1 = (function (){var statearr_34500 = state_34488;
(statearr_34500[(8)] = inst_34468);

return statearr_34500;
})();
var statearr_34501_34521 = state_34488__$1;
(statearr_34501_34521[(2)] = inst_34469);

(statearr_34501_34521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (14))){
var inst_34482 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
var statearr_34502_34522 = state_34488__$1;
(statearr_34502_34522[(2)] = inst_34482);

(statearr_34502_34522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (10))){
var state_34488__$1 = state_34488;
var statearr_34503_34523 = state_34488__$1;
(statearr_34503_34523[(2)] = fc);

(statearr_34503_34523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34489 === (8))){
var inst_34477 = (state_34488[(2)]);
var state_34488__$1 = state_34488;
if(cljs.core.truth_(inst_34477)){
var statearr_34504_34524 = state_34488__$1;
(statearr_34504_34524[(1)] = (12));

} else {
var statearr_34505_34525 = state_34488__$1;
(statearr_34505_34525[(1)] = (13));

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
});})(c__34075__auto___34511,tc,fc))
;
return ((function (switch__33987__auto__,c__34075__auto___34511,tc,fc){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null,null,null];
(statearr_34506[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_34488){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34507){if((e34507 instanceof Object)){
var ex__33991__auto__ = e34507;
var statearr_34508_34526 = state_34488;
(statearr_34508_34526[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34527 = state_34488;
state_34488 = G__34527;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_34488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_34488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___34511,tc,fc))
})();
var state__34077__auto__ = (function (){var statearr_34509 = f__34076__auto__.call(null);
(statearr_34509[(6)] = c__34075__auto___34511);

return statearr_34509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___34511,tc,fc))
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
var c__34075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto__){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto__){
return (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34550_34568 = state_34548__$1;
(statearr_34550_34568[(2)] = inst_34544);

(statearr_34550_34568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var inst_34528 = init;
var state_34548__$1 = (function (){var statearr_34551 = state_34548;
(statearr_34551[(7)] = inst_34528);

return statearr_34551;
})();
var statearr_34552_34569 = state_34548__$1;
(statearr_34552_34569[(2)] = null);

(statearr_34552_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34531 = (state_34548[(8)]);
var inst_34531__$1 = (state_34548[(2)]);
var inst_34532 = (inst_34531__$1 == null);
var state_34548__$1 = (function (){var statearr_34553 = state_34548;
(statearr_34553[(8)] = inst_34531__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34554_34570 = state_34548__$1;
(statearr_34554_34570[(1)] = (5));

} else {
var statearr_34555_34571 = state_34548__$1;
(statearr_34555_34571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34535 = (state_34548[(9)]);
var inst_34528 = (state_34548[(7)]);
var inst_34531 = (state_34548[(8)]);
var inst_34535__$1 = f.call(null,inst_34528,inst_34531);
var inst_34536 = cljs.core.reduced_QMARK_.call(null,inst_34535__$1);
var state_34548__$1 = (function (){var statearr_34556 = state_34548;
(statearr_34556[(9)] = inst_34535__$1);

return statearr_34556;
})();
if(inst_34536){
var statearr_34557_34572 = state_34548__$1;
(statearr_34557_34572[(1)] = (8));

} else {
var statearr_34558_34573 = state_34548__$1;
(statearr_34558_34573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (3))){
var inst_34546 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34548__$1,inst_34546);
} else {
if((state_val_34549 === (2))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34548__$1,(4),ch);
} else {
if((state_val_34549 === (9))){
var inst_34535 = (state_34548[(9)]);
var inst_34528 = inst_34535;
var state_34548__$1 = (function (){var statearr_34559 = state_34548;
(statearr_34559[(7)] = inst_34528);

return statearr_34559;
})();
var statearr_34560_34574 = state_34548__$1;
(statearr_34560_34574[(2)] = null);

(statearr_34560_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34528 = (state_34548[(7)]);
var state_34548__$1 = state_34548;
var statearr_34561_34575 = state_34548__$1;
(statearr_34561_34575[(2)] = inst_34528);

(statearr_34561_34575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (10))){
var inst_34542 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34562_34576 = state_34548__$1;
(statearr_34562_34576[(2)] = inst_34542);

(statearr_34562_34576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34535 = (state_34548[(9)]);
var inst_34538 = cljs.core.deref.call(null,inst_34535);
var state_34548__$1 = state_34548;
var statearr_34563_34577 = state_34548__$1;
(statearr_34563_34577[(2)] = inst_34538);

(statearr_34563_34577[(1)] = (10));


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
});})(c__34075__auto__))
;
return ((function (switch__33987__auto__,c__34075__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33988__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33988__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = cljs$core$async$reduce_$_state_machine__33988__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var cljs$core$async$reduce_$_state_machine__33988__auto____1 = (function (state_34548){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__33991__auto__ = e34565;
var statearr_34566_34578 = state_34548;
(statearr_34566_34578[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_34548;
state_34548 = G__34579;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33988__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33988__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33988__auto____0;
cljs$core$async$reduce_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33988__auto____1;
return cljs$core$async$reduce_$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto__))
})();
var state__34077__auto__ = (function (){var statearr_34567 = f__34076__auto__.call(null);
(statearr_34567[(6)] = c__34075__auto__);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto__))
);

return c__34075__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto__,f__$1){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto__,f__$1){
return (function (state_34585){
var state_val_34586 = (state_34585[(1)]);
if((state_val_34586 === (1))){
var inst_34580 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34585__$1,(2),inst_34580);
} else {
if((state_val_34586 === (2))){
var inst_34582 = (state_34585[(2)]);
var inst_34583 = f__$1.call(null,inst_34582);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34585__$1,inst_34583);
} else {
return null;
}
}
});})(c__34075__auto__,f__$1))
;
return ((function (switch__33987__auto__,c__34075__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33988__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33988__auto____0 = (function (){
var statearr_34587 = [null,null,null,null,null,null,null];
(statearr_34587[(0)] = cljs$core$async$transduce_$_state_machine__33988__auto__);

(statearr_34587[(1)] = (1));

return statearr_34587;
});
var cljs$core$async$transduce_$_state_machine__33988__auto____1 = (function (state_34585){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34588){if((e34588 instanceof Object)){
var ex__33991__auto__ = e34588;
var statearr_34589_34591 = state_34585;
(statearr_34589_34591[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_34585;
state_34585 = G__34592;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33988__auto__ = function(state_34585){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33988__auto____1.call(this,state_34585);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33988__auto____0;
cljs$core$async$transduce_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33988__auto____1;
return cljs$core$async$transduce_$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto__,f__$1))
})();
var state__34077__auto__ = (function (){var statearr_34590 = f__34076__auto__.call(null);
(statearr_34590[(6)] = c__34075__auto__);

return statearr_34590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto__,f__$1))
);

return c__34075__auto__;
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
var G__34594 = arguments.length;
switch (G__34594) {
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
var c__34075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto__){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto__){
return (function (state_34619){
var state_val_34620 = (state_34619[(1)]);
if((state_val_34620 === (7))){
var inst_34601 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34621_34642 = state_34619__$1;
(statearr_34621_34642[(2)] = inst_34601);

(statearr_34621_34642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (1))){
var inst_34595 = cljs.core.seq.call(null,coll);
var inst_34596 = inst_34595;
var state_34619__$1 = (function (){var statearr_34622 = state_34619;
(statearr_34622[(7)] = inst_34596);

return statearr_34622;
})();
var statearr_34623_34643 = state_34619__$1;
(statearr_34623_34643[(2)] = null);

(statearr_34623_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (4))){
var inst_34596 = (state_34619[(7)]);
var inst_34599 = cljs.core.first.call(null,inst_34596);
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34619__$1,(7),ch,inst_34599);
} else {
if((state_val_34620 === (13))){
var inst_34613 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34624_34644 = state_34619__$1;
(statearr_34624_34644[(2)] = inst_34613);

(statearr_34624_34644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (6))){
var inst_34604 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
if(cljs.core.truth_(inst_34604)){
var statearr_34625_34645 = state_34619__$1;
(statearr_34625_34645[(1)] = (8));

} else {
var statearr_34626_34646 = state_34619__$1;
(statearr_34626_34646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (3))){
var inst_34617 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34619__$1,inst_34617);
} else {
if((state_val_34620 === (12))){
var state_34619__$1 = state_34619;
var statearr_34627_34647 = state_34619__$1;
(statearr_34627_34647[(2)] = null);

(statearr_34627_34647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (2))){
var inst_34596 = (state_34619[(7)]);
var state_34619__$1 = state_34619;
if(cljs.core.truth_(inst_34596)){
var statearr_34628_34648 = state_34619__$1;
(statearr_34628_34648[(1)] = (4));

} else {
var statearr_34629_34649 = state_34619__$1;
(statearr_34629_34649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (11))){
var inst_34610 = cljs.core.async.close_BANG_.call(null,ch);
var state_34619__$1 = state_34619;
var statearr_34630_34650 = state_34619__$1;
(statearr_34630_34650[(2)] = inst_34610);

(statearr_34630_34650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (9))){
var state_34619__$1 = state_34619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34631_34651 = state_34619__$1;
(statearr_34631_34651[(1)] = (11));

} else {
var statearr_34632_34652 = state_34619__$1;
(statearr_34632_34652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (5))){
var inst_34596 = (state_34619[(7)]);
var state_34619__$1 = state_34619;
var statearr_34633_34653 = state_34619__$1;
(statearr_34633_34653[(2)] = inst_34596);

(statearr_34633_34653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (10))){
var inst_34615 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34634_34654 = state_34619__$1;
(statearr_34634_34654[(2)] = inst_34615);

(statearr_34634_34654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (8))){
var inst_34596 = (state_34619[(7)]);
var inst_34606 = cljs.core.next.call(null,inst_34596);
var inst_34596__$1 = inst_34606;
var state_34619__$1 = (function (){var statearr_34635 = state_34619;
(statearr_34635[(7)] = inst_34596__$1);

return statearr_34635;
})();
var statearr_34636_34655 = state_34619__$1;
(statearr_34636_34655[(2)] = null);

(statearr_34636_34655[(1)] = (2));


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
});})(c__34075__auto__))
;
return ((function (switch__33987__auto__,c__34075__auto__){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_34637 = [null,null,null,null,null,null,null,null];
(statearr_34637[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_34637[(1)] = (1));

return statearr_34637;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_34619){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34638){if((e34638 instanceof Object)){
var ex__33991__auto__ = e34638;
var statearr_34639_34656 = state_34619;
(statearr_34639_34656[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34657 = state_34619;
state_34619 = G__34657;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_34619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_34619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto__))
})();
var state__34077__auto__ = (function (){var statearr_34640 = f__34076__auto__.call(null);
(statearr_34640[(6)] = c__34075__auto__);

return statearr_34640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto__))
);

return c__34075__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34658 = (function (ch,cs,meta34659){
this.ch = ch;
this.cs = cs;
this.meta34659 = meta34659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34660,meta34659__$1){
var self__ = this;
var _34660__$1 = this;
return (new cljs.core.async.t_cljs$core$async34658(self__.ch,self__.cs,meta34659__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34660){
var self__ = this;
var _34660__$1 = this;
return self__.meta34659;
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34659","meta34659",-569591261,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34658";

cljs.core.async.t_cljs$core$async34658.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34658");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34658 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34658(ch__$1,cs__$1,meta34659){
return (new cljs.core.async.t_cljs$core$async34658(ch__$1,cs__$1,meta34659));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34658(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34075__auto___34880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___34880,cs,m,dchan,dctr,done){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___34880,cs,m,dchan,dctr,done){
return (function (state_34795){
var state_val_34796 = (state_34795[(1)]);
if((state_val_34796 === (7))){
var inst_34791 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34797_34881 = state_34795__$1;
(statearr_34797_34881[(2)] = inst_34791);

(statearr_34797_34881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (20))){
var inst_34694 = (state_34795[(7)]);
var inst_34706 = cljs.core.first.call(null,inst_34694);
var inst_34707 = cljs.core.nth.call(null,inst_34706,(0),null);
var inst_34708 = cljs.core.nth.call(null,inst_34706,(1),null);
var state_34795__$1 = (function (){var statearr_34798 = state_34795;
(statearr_34798[(8)] = inst_34707);

return statearr_34798;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34799_34882 = state_34795__$1;
(statearr_34799_34882[(1)] = (22));

} else {
var statearr_34800_34883 = state_34795__$1;
(statearr_34800_34883[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (27))){
var inst_34663 = (state_34795[(9)]);
var inst_34738 = (state_34795[(10)]);
var inst_34743 = (state_34795[(11)]);
var inst_34736 = (state_34795[(12)]);
var inst_34743__$1 = cljs.core._nth.call(null,inst_34736,inst_34738);
var inst_34744 = cljs.core.async.put_BANG_.call(null,inst_34743__$1,inst_34663,done);
var state_34795__$1 = (function (){var statearr_34801 = state_34795;
(statearr_34801[(11)] = inst_34743__$1);

return statearr_34801;
})();
if(cljs.core.truth_(inst_34744)){
var statearr_34802_34884 = state_34795__$1;
(statearr_34802_34884[(1)] = (30));

} else {
var statearr_34803_34885 = state_34795__$1;
(statearr_34803_34885[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (1))){
var state_34795__$1 = state_34795;
var statearr_34804_34886 = state_34795__$1;
(statearr_34804_34886[(2)] = null);

(statearr_34804_34886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (24))){
var inst_34694 = (state_34795[(7)]);
var inst_34713 = (state_34795[(2)]);
var inst_34714 = cljs.core.next.call(null,inst_34694);
var inst_34672 = inst_34714;
var inst_34673 = null;
var inst_34674 = (0);
var inst_34675 = (0);
var state_34795__$1 = (function (){var statearr_34805 = state_34795;
(statearr_34805[(13)] = inst_34713);

(statearr_34805[(14)] = inst_34675);

(statearr_34805[(15)] = inst_34674);

(statearr_34805[(16)] = inst_34672);

(statearr_34805[(17)] = inst_34673);

return statearr_34805;
})();
var statearr_34806_34887 = state_34795__$1;
(statearr_34806_34887[(2)] = null);

(statearr_34806_34887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (39))){
var state_34795__$1 = state_34795;
var statearr_34810_34888 = state_34795__$1;
(statearr_34810_34888[(2)] = null);

(statearr_34810_34888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (4))){
var inst_34663 = (state_34795[(9)]);
var inst_34663__$1 = (state_34795[(2)]);
var inst_34664 = (inst_34663__$1 == null);
var state_34795__$1 = (function (){var statearr_34811 = state_34795;
(statearr_34811[(9)] = inst_34663__$1);

return statearr_34811;
})();
if(cljs.core.truth_(inst_34664)){
var statearr_34812_34889 = state_34795__$1;
(statearr_34812_34889[(1)] = (5));

} else {
var statearr_34813_34890 = state_34795__$1;
(statearr_34813_34890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (15))){
var inst_34675 = (state_34795[(14)]);
var inst_34674 = (state_34795[(15)]);
var inst_34672 = (state_34795[(16)]);
var inst_34673 = (state_34795[(17)]);
var inst_34690 = (state_34795[(2)]);
var inst_34691 = (inst_34675 + (1));
var tmp34807 = inst_34674;
var tmp34808 = inst_34672;
var tmp34809 = inst_34673;
var inst_34672__$1 = tmp34808;
var inst_34673__$1 = tmp34809;
var inst_34674__$1 = tmp34807;
var inst_34675__$1 = inst_34691;
var state_34795__$1 = (function (){var statearr_34814 = state_34795;
(statearr_34814[(14)] = inst_34675__$1);

(statearr_34814[(15)] = inst_34674__$1);

(statearr_34814[(18)] = inst_34690);

(statearr_34814[(16)] = inst_34672__$1);

(statearr_34814[(17)] = inst_34673__$1);

return statearr_34814;
})();
var statearr_34815_34891 = state_34795__$1;
(statearr_34815_34891[(2)] = null);

(statearr_34815_34891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (21))){
var inst_34717 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34819_34892 = state_34795__$1;
(statearr_34819_34892[(2)] = inst_34717);

(statearr_34819_34892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (31))){
var inst_34743 = (state_34795[(11)]);
var inst_34747 = done.call(null,null);
var inst_34748 = cljs.core.async.untap_STAR_.call(null,m,inst_34743);
var state_34795__$1 = (function (){var statearr_34820 = state_34795;
(statearr_34820[(19)] = inst_34747);

return statearr_34820;
})();
var statearr_34821_34893 = state_34795__$1;
(statearr_34821_34893[(2)] = inst_34748);

(statearr_34821_34893[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (32))){
var inst_34737 = (state_34795[(20)]);
var inst_34738 = (state_34795[(10)]);
var inst_34735 = (state_34795[(21)]);
var inst_34736 = (state_34795[(12)]);
var inst_34750 = (state_34795[(2)]);
var inst_34751 = (inst_34738 + (1));
var tmp34816 = inst_34737;
var tmp34817 = inst_34735;
var tmp34818 = inst_34736;
var inst_34735__$1 = tmp34817;
var inst_34736__$1 = tmp34818;
var inst_34737__$1 = tmp34816;
var inst_34738__$1 = inst_34751;
var state_34795__$1 = (function (){var statearr_34822 = state_34795;
(statearr_34822[(20)] = inst_34737__$1);

(statearr_34822[(22)] = inst_34750);

(statearr_34822[(10)] = inst_34738__$1);

(statearr_34822[(21)] = inst_34735__$1);

(statearr_34822[(12)] = inst_34736__$1);

return statearr_34822;
})();
var statearr_34823_34894 = state_34795__$1;
(statearr_34823_34894[(2)] = null);

(statearr_34823_34894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (40))){
var inst_34763 = (state_34795[(23)]);
var inst_34767 = done.call(null,null);
var inst_34768 = cljs.core.async.untap_STAR_.call(null,m,inst_34763);
var state_34795__$1 = (function (){var statearr_34824 = state_34795;
(statearr_34824[(24)] = inst_34767);

return statearr_34824;
})();
var statearr_34825_34895 = state_34795__$1;
(statearr_34825_34895[(2)] = inst_34768);

(statearr_34825_34895[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (33))){
var inst_34754 = (state_34795[(25)]);
var inst_34756 = cljs.core.chunked_seq_QMARK_.call(null,inst_34754);
var state_34795__$1 = state_34795;
if(inst_34756){
var statearr_34826_34896 = state_34795__$1;
(statearr_34826_34896[(1)] = (36));

} else {
var statearr_34827_34897 = state_34795__$1;
(statearr_34827_34897[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (13))){
var inst_34684 = (state_34795[(26)]);
var inst_34687 = cljs.core.async.close_BANG_.call(null,inst_34684);
var state_34795__$1 = state_34795;
var statearr_34828_34898 = state_34795__$1;
(statearr_34828_34898[(2)] = inst_34687);

(statearr_34828_34898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (22))){
var inst_34707 = (state_34795[(8)]);
var inst_34710 = cljs.core.async.close_BANG_.call(null,inst_34707);
var state_34795__$1 = state_34795;
var statearr_34829_34899 = state_34795__$1;
(statearr_34829_34899[(2)] = inst_34710);

(statearr_34829_34899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (36))){
var inst_34754 = (state_34795[(25)]);
var inst_34758 = cljs.core.chunk_first.call(null,inst_34754);
var inst_34759 = cljs.core.chunk_rest.call(null,inst_34754);
var inst_34760 = cljs.core.count.call(null,inst_34758);
var inst_34735 = inst_34759;
var inst_34736 = inst_34758;
var inst_34737 = inst_34760;
var inst_34738 = (0);
var state_34795__$1 = (function (){var statearr_34830 = state_34795;
(statearr_34830[(20)] = inst_34737);

(statearr_34830[(10)] = inst_34738);

(statearr_34830[(21)] = inst_34735);

(statearr_34830[(12)] = inst_34736);

return statearr_34830;
})();
var statearr_34831_34900 = state_34795__$1;
(statearr_34831_34900[(2)] = null);

(statearr_34831_34900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (41))){
var inst_34754 = (state_34795[(25)]);
var inst_34770 = (state_34795[(2)]);
var inst_34771 = cljs.core.next.call(null,inst_34754);
var inst_34735 = inst_34771;
var inst_34736 = null;
var inst_34737 = (0);
var inst_34738 = (0);
var state_34795__$1 = (function (){var statearr_34832 = state_34795;
(statearr_34832[(20)] = inst_34737);

(statearr_34832[(10)] = inst_34738);

(statearr_34832[(27)] = inst_34770);

(statearr_34832[(21)] = inst_34735);

(statearr_34832[(12)] = inst_34736);

return statearr_34832;
})();
var statearr_34833_34901 = state_34795__$1;
(statearr_34833_34901[(2)] = null);

(statearr_34833_34901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (43))){
var state_34795__$1 = state_34795;
var statearr_34834_34902 = state_34795__$1;
(statearr_34834_34902[(2)] = null);

(statearr_34834_34902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (29))){
var inst_34779 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34835_34903 = state_34795__$1;
(statearr_34835_34903[(2)] = inst_34779);

(statearr_34835_34903[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (44))){
var inst_34788 = (state_34795[(2)]);
var state_34795__$1 = (function (){var statearr_34836 = state_34795;
(statearr_34836[(28)] = inst_34788);

return statearr_34836;
})();
var statearr_34837_34904 = state_34795__$1;
(statearr_34837_34904[(2)] = null);

(statearr_34837_34904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (6))){
var inst_34727 = (state_34795[(29)]);
var inst_34726 = cljs.core.deref.call(null,cs);
var inst_34727__$1 = cljs.core.keys.call(null,inst_34726);
var inst_34728 = cljs.core.count.call(null,inst_34727__$1);
var inst_34729 = cljs.core.reset_BANG_.call(null,dctr,inst_34728);
var inst_34734 = cljs.core.seq.call(null,inst_34727__$1);
var inst_34735 = inst_34734;
var inst_34736 = null;
var inst_34737 = (0);
var inst_34738 = (0);
var state_34795__$1 = (function (){var statearr_34838 = state_34795;
(statearr_34838[(29)] = inst_34727__$1);

(statearr_34838[(20)] = inst_34737);

(statearr_34838[(10)] = inst_34738);

(statearr_34838[(21)] = inst_34735);

(statearr_34838[(12)] = inst_34736);

(statearr_34838[(30)] = inst_34729);

return statearr_34838;
})();
var statearr_34839_34905 = state_34795__$1;
(statearr_34839_34905[(2)] = null);

(statearr_34839_34905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (28))){
var inst_34735 = (state_34795[(21)]);
var inst_34754 = (state_34795[(25)]);
var inst_34754__$1 = cljs.core.seq.call(null,inst_34735);
var state_34795__$1 = (function (){var statearr_34840 = state_34795;
(statearr_34840[(25)] = inst_34754__$1);

return statearr_34840;
})();
if(inst_34754__$1){
var statearr_34841_34906 = state_34795__$1;
(statearr_34841_34906[(1)] = (33));

} else {
var statearr_34842_34907 = state_34795__$1;
(statearr_34842_34907[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (25))){
var inst_34737 = (state_34795[(20)]);
var inst_34738 = (state_34795[(10)]);
var inst_34740 = (inst_34738 < inst_34737);
var inst_34741 = inst_34740;
var state_34795__$1 = state_34795;
if(cljs.core.truth_(inst_34741)){
var statearr_34843_34908 = state_34795__$1;
(statearr_34843_34908[(1)] = (27));

} else {
var statearr_34844_34909 = state_34795__$1;
(statearr_34844_34909[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (34))){
var state_34795__$1 = state_34795;
var statearr_34845_34910 = state_34795__$1;
(statearr_34845_34910[(2)] = null);

(statearr_34845_34910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (17))){
var state_34795__$1 = state_34795;
var statearr_34846_34911 = state_34795__$1;
(statearr_34846_34911[(2)] = null);

(statearr_34846_34911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (3))){
var inst_34793 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34795__$1,inst_34793);
} else {
if((state_val_34796 === (12))){
var inst_34722 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34847_34912 = state_34795__$1;
(statearr_34847_34912[(2)] = inst_34722);

(statearr_34847_34912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (2))){
var state_34795__$1 = state_34795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34795__$1,(4),ch);
} else {
if((state_val_34796 === (23))){
var state_34795__$1 = state_34795;
var statearr_34848_34913 = state_34795__$1;
(statearr_34848_34913[(2)] = null);

(statearr_34848_34913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (35))){
var inst_34777 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34849_34914 = state_34795__$1;
(statearr_34849_34914[(2)] = inst_34777);

(statearr_34849_34914[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (19))){
var inst_34694 = (state_34795[(7)]);
var inst_34698 = cljs.core.chunk_first.call(null,inst_34694);
var inst_34699 = cljs.core.chunk_rest.call(null,inst_34694);
var inst_34700 = cljs.core.count.call(null,inst_34698);
var inst_34672 = inst_34699;
var inst_34673 = inst_34698;
var inst_34674 = inst_34700;
var inst_34675 = (0);
var state_34795__$1 = (function (){var statearr_34850 = state_34795;
(statearr_34850[(14)] = inst_34675);

(statearr_34850[(15)] = inst_34674);

(statearr_34850[(16)] = inst_34672);

(statearr_34850[(17)] = inst_34673);

return statearr_34850;
})();
var statearr_34851_34915 = state_34795__$1;
(statearr_34851_34915[(2)] = null);

(statearr_34851_34915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (11))){
var inst_34694 = (state_34795[(7)]);
var inst_34672 = (state_34795[(16)]);
var inst_34694__$1 = cljs.core.seq.call(null,inst_34672);
var state_34795__$1 = (function (){var statearr_34852 = state_34795;
(statearr_34852[(7)] = inst_34694__$1);

return statearr_34852;
})();
if(inst_34694__$1){
var statearr_34853_34916 = state_34795__$1;
(statearr_34853_34916[(1)] = (16));

} else {
var statearr_34854_34917 = state_34795__$1;
(statearr_34854_34917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (9))){
var inst_34724 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34855_34918 = state_34795__$1;
(statearr_34855_34918[(2)] = inst_34724);

(statearr_34855_34918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (5))){
var inst_34670 = cljs.core.deref.call(null,cs);
var inst_34671 = cljs.core.seq.call(null,inst_34670);
var inst_34672 = inst_34671;
var inst_34673 = null;
var inst_34674 = (0);
var inst_34675 = (0);
var state_34795__$1 = (function (){var statearr_34856 = state_34795;
(statearr_34856[(14)] = inst_34675);

(statearr_34856[(15)] = inst_34674);

(statearr_34856[(16)] = inst_34672);

(statearr_34856[(17)] = inst_34673);

return statearr_34856;
})();
var statearr_34857_34919 = state_34795__$1;
(statearr_34857_34919[(2)] = null);

(statearr_34857_34919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (14))){
var state_34795__$1 = state_34795;
var statearr_34858_34920 = state_34795__$1;
(statearr_34858_34920[(2)] = null);

(statearr_34858_34920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (45))){
var inst_34785 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34859_34921 = state_34795__$1;
(statearr_34859_34921[(2)] = inst_34785);

(statearr_34859_34921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (26))){
var inst_34727 = (state_34795[(29)]);
var inst_34781 = (state_34795[(2)]);
var inst_34782 = cljs.core.seq.call(null,inst_34727);
var state_34795__$1 = (function (){var statearr_34860 = state_34795;
(statearr_34860[(31)] = inst_34781);

return statearr_34860;
})();
if(inst_34782){
var statearr_34861_34922 = state_34795__$1;
(statearr_34861_34922[(1)] = (42));

} else {
var statearr_34862_34923 = state_34795__$1;
(statearr_34862_34923[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (16))){
var inst_34694 = (state_34795[(7)]);
var inst_34696 = cljs.core.chunked_seq_QMARK_.call(null,inst_34694);
var state_34795__$1 = state_34795;
if(inst_34696){
var statearr_34863_34924 = state_34795__$1;
(statearr_34863_34924[(1)] = (19));

} else {
var statearr_34864_34925 = state_34795__$1;
(statearr_34864_34925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (38))){
var inst_34774 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34865_34926 = state_34795__$1;
(statearr_34865_34926[(2)] = inst_34774);

(statearr_34865_34926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (30))){
var state_34795__$1 = state_34795;
var statearr_34866_34927 = state_34795__$1;
(statearr_34866_34927[(2)] = null);

(statearr_34866_34927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (10))){
var inst_34675 = (state_34795[(14)]);
var inst_34673 = (state_34795[(17)]);
var inst_34683 = cljs.core._nth.call(null,inst_34673,inst_34675);
var inst_34684 = cljs.core.nth.call(null,inst_34683,(0),null);
var inst_34685 = cljs.core.nth.call(null,inst_34683,(1),null);
var state_34795__$1 = (function (){var statearr_34867 = state_34795;
(statearr_34867[(26)] = inst_34684);

return statearr_34867;
})();
if(cljs.core.truth_(inst_34685)){
var statearr_34868_34928 = state_34795__$1;
(statearr_34868_34928[(1)] = (13));

} else {
var statearr_34869_34929 = state_34795__$1;
(statearr_34869_34929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (18))){
var inst_34720 = (state_34795[(2)]);
var state_34795__$1 = state_34795;
var statearr_34870_34930 = state_34795__$1;
(statearr_34870_34930[(2)] = inst_34720);

(statearr_34870_34930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (42))){
var state_34795__$1 = state_34795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34795__$1,(45),dchan);
} else {
if((state_val_34796 === (37))){
var inst_34663 = (state_34795[(9)]);
var inst_34763 = (state_34795[(23)]);
var inst_34754 = (state_34795[(25)]);
var inst_34763__$1 = cljs.core.first.call(null,inst_34754);
var inst_34764 = cljs.core.async.put_BANG_.call(null,inst_34763__$1,inst_34663,done);
var state_34795__$1 = (function (){var statearr_34871 = state_34795;
(statearr_34871[(23)] = inst_34763__$1);

return statearr_34871;
})();
if(cljs.core.truth_(inst_34764)){
var statearr_34872_34931 = state_34795__$1;
(statearr_34872_34931[(1)] = (39));

} else {
var statearr_34873_34932 = state_34795__$1;
(statearr_34873_34932[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34796 === (8))){
var inst_34675 = (state_34795[(14)]);
var inst_34674 = (state_34795[(15)]);
var inst_34677 = (inst_34675 < inst_34674);
var inst_34678 = inst_34677;
var state_34795__$1 = state_34795;
if(cljs.core.truth_(inst_34678)){
var statearr_34874_34933 = state_34795__$1;
(statearr_34874_34933[(1)] = (10));

} else {
var statearr_34875_34934 = state_34795__$1;
(statearr_34875_34934[(1)] = (11));

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
});})(c__34075__auto___34880,cs,m,dchan,dctr,done))
;
return ((function (switch__33987__auto__,c__34075__auto___34880,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33988__auto__ = null;
var cljs$core$async$mult_$_state_machine__33988__auto____0 = (function (){
var statearr_34876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34876[(0)] = cljs$core$async$mult_$_state_machine__33988__auto__);

(statearr_34876[(1)] = (1));

return statearr_34876;
});
var cljs$core$async$mult_$_state_machine__33988__auto____1 = (function (state_34795){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_34795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e34877){if((e34877 instanceof Object)){
var ex__33991__auto__ = e34877;
var statearr_34878_34935 = state_34795;
(statearr_34878_34935[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34936 = state_34795;
state_34795 = G__34936;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33988__auto__ = function(state_34795){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33988__auto____1.call(this,state_34795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33988__auto____0;
cljs$core$async$mult_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33988__auto____1;
return cljs$core$async$mult_$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___34880,cs,m,dchan,dctr,done))
})();
var state__34077__auto__ = (function (){var statearr_34879 = f__34076__auto__.call(null);
(statearr_34879[(6)] = c__34075__auto___34880);

return statearr_34879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___34880,cs,m,dchan,dctr,done))
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
var G__34938 = arguments.length;
switch (G__34938) {
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
var len__29592__auto___34950 = arguments.length;
var i__29593__auto___34951 = (0);
while(true){
if((i__29593__auto___34951 < len__29592__auto___34950)){
args__29599__auto__.push((arguments[i__29593__auto___34951]));

var G__34952 = (i__29593__auto___34951 + (1));
i__29593__auto___34951 = G__34952;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34944){
var map__34945 = p__34944;
var map__34945__$1 = ((((!((map__34945 == null)))?((((map__34945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34945):map__34945);
var opts = map__34945__$1;
var statearr_34947_34953 = state;
(statearr_34947_34953[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34945,map__34945__$1,opts){
return (function (val){
var statearr_34948_34954 = state;
(statearr_34948_34954[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34945,map__34945__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34949_34955 = state;
(statearr_34949_34955[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34940){
var G__34941 = cljs.core.first.call(null,seq34940);
var seq34940__$1 = cljs.core.next.call(null,seq34940);
var G__34942 = cljs.core.first.call(null,seq34940__$1);
var seq34940__$2 = cljs.core.next.call(null,seq34940__$1);
var G__34943 = cljs.core.first.call(null,seq34940__$2);
var seq34940__$3 = cljs.core.next.call(null,seq34940__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34941,G__34942,G__34943,seq34940__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34956 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34957){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34957 = meta34957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34958,meta34957__$1){
var self__ = this;
var _34958__$1 = this;
return (new cljs.core.async.t_cljs$core$async34956(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34957__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34958){
var self__ = this;
var _34958__$1 = this;
return self__.meta34957;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34956.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34957","meta34957",393552074,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34956";

cljs.core.async.t_cljs$core$async34956.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async34956");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34956 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34956(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34957){
return (new cljs.core.async.t_cljs$core$async34956(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34957));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34956(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34075__auto___35120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35060){
var state_val_35061 = (state_35060[(1)]);
if((state_val_35061 === (7))){
var inst_34975 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
var statearr_35062_35121 = state_35060__$1;
(statearr_35062_35121[(2)] = inst_34975);

(statearr_35062_35121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (20))){
var inst_34987 = (state_35060[(7)]);
var state_35060__$1 = state_35060;
var statearr_35063_35122 = state_35060__$1;
(statearr_35063_35122[(2)] = inst_34987);

(statearr_35063_35122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (27))){
var state_35060__$1 = state_35060;
var statearr_35064_35123 = state_35060__$1;
(statearr_35064_35123[(2)] = null);

(statearr_35064_35123[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (1))){
var inst_34962 = (state_35060[(8)]);
var inst_34962__$1 = calc_state.call(null);
var inst_34964 = (inst_34962__$1 == null);
var inst_34965 = cljs.core.not.call(null,inst_34964);
var state_35060__$1 = (function (){var statearr_35065 = state_35060;
(statearr_35065[(8)] = inst_34962__$1);

return statearr_35065;
})();
if(inst_34965){
var statearr_35066_35124 = state_35060__$1;
(statearr_35066_35124[(1)] = (2));

} else {
var statearr_35067_35125 = state_35060__$1;
(statearr_35067_35125[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (24))){
var inst_35020 = (state_35060[(9)]);
var inst_35034 = (state_35060[(10)]);
var inst_35011 = (state_35060[(11)]);
var inst_35034__$1 = inst_35011.call(null,inst_35020);
var state_35060__$1 = (function (){var statearr_35068 = state_35060;
(statearr_35068[(10)] = inst_35034__$1);

return statearr_35068;
})();
if(cljs.core.truth_(inst_35034__$1)){
var statearr_35069_35126 = state_35060__$1;
(statearr_35069_35126[(1)] = (29));

} else {
var statearr_35070_35127 = state_35060__$1;
(statearr_35070_35127[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (4))){
var inst_34978 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_34978)){
var statearr_35071_35128 = state_35060__$1;
(statearr_35071_35128[(1)] = (8));

} else {
var statearr_35072_35129 = state_35060__$1;
(statearr_35072_35129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (15))){
var inst_35005 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_35005)){
var statearr_35073_35130 = state_35060__$1;
(statearr_35073_35130[(1)] = (19));

} else {
var statearr_35074_35131 = state_35060__$1;
(statearr_35074_35131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (21))){
var inst_35010 = (state_35060[(12)]);
var inst_35010__$1 = (state_35060[(2)]);
var inst_35011 = cljs.core.get.call(null,inst_35010__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35012 = cljs.core.get.call(null,inst_35010__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35013 = cljs.core.get.call(null,inst_35010__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35060__$1 = (function (){var statearr_35075 = state_35060;
(statearr_35075[(12)] = inst_35010__$1);

(statearr_35075[(13)] = inst_35012);

(statearr_35075[(11)] = inst_35011);

return statearr_35075;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35060__$1,(22),inst_35013);
} else {
if((state_val_35061 === (31))){
var inst_35042 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_35042)){
var statearr_35076_35132 = state_35060__$1;
(statearr_35076_35132[(1)] = (32));

} else {
var statearr_35077_35133 = state_35060__$1;
(statearr_35077_35133[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (32))){
var inst_35019 = (state_35060[(14)]);
var state_35060__$1 = state_35060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35060__$1,(35),out,inst_35019);
} else {
if((state_val_35061 === (33))){
var inst_35010 = (state_35060[(12)]);
var inst_34987 = inst_35010;
var state_35060__$1 = (function (){var statearr_35078 = state_35060;
(statearr_35078[(7)] = inst_34987);

return statearr_35078;
})();
var statearr_35079_35134 = state_35060__$1;
(statearr_35079_35134[(2)] = null);

(statearr_35079_35134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (13))){
var inst_34987 = (state_35060[(7)]);
var inst_34994 = inst_34987.cljs$lang$protocol_mask$partition0$;
var inst_34995 = (inst_34994 & (64));
var inst_34996 = inst_34987.cljs$core$ISeq$;
var inst_34997 = (cljs.core.PROTOCOL_SENTINEL === inst_34996);
var inst_34998 = (inst_34995) || (inst_34997);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_34998)){
var statearr_35080_35135 = state_35060__$1;
(statearr_35080_35135[(1)] = (16));

} else {
var statearr_35081_35136 = state_35060__$1;
(statearr_35081_35136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (22))){
var inst_35020 = (state_35060[(9)]);
var inst_35019 = (state_35060[(14)]);
var inst_35018 = (state_35060[(2)]);
var inst_35019__$1 = cljs.core.nth.call(null,inst_35018,(0),null);
var inst_35020__$1 = cljs.core.nth.call(null,inst_35018,(1),null);
var inst_35021 = (inst_35019__$1 == null);
var inst_35022 = cljs.core._EQ_.call(null,inst_35020__$1,change);
var inst_35023 = (inst_35021) || (inst_35022);
var state_35060__$1 = (function (){var statearr_35082 = state_35060;
(statearr_35082[(9)] = inst_35020__$1);

(statearr_35082[(14)] = inst_35019__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_35023)){
var statearr_35083_35137 = state_35060__$1;
(statearr_35083_35137[(1)] = (23));

} else {
var statearr_35084_35138 = state_35060__$1;
(statearr_35084_35138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (36))){
var inst_35010 = (state_35060[(12)]);
var inst_34987 = inst_35010;
var state_35060__$1 = (function (){var statearr_35085 = state_35060;
(statearr_35085[(7)] = inst_34987);

return statearr_35085;
})();
var statearr_35086_35139 = state_35060__$1;
(statearr_35086_35139[(2)] = null);

(statearr_35086_35139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (29))){
var inst_35034 = (state_35060[(10)]);
var state_35060__$1 = state_35060;
var statearr_35087_35140 = state_35060__$1;
(statearr_35087_35140[(2)] = inst_35034);

(statearr_35087_35140[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (6))){
var state_35060__$1 = state_35060;
var statearr_35088_35141 = state_35060__$1;
(statearr_35088_35141[(2)] = false);

(statearr_35088_35141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (28))){
var inst_35030 = (state_35060[(2)]);
var inst_35031 = calc_state.call(null);
var inst_34987 = inst_35031;
var state_35060__$1 = (function (){var statearr_35089 = state_35060;
(statearr_35089[(15)] = inst_35030);

(statearr_35089[(7)] = inst_34987);

return statearr_35089;
})();
var statearr_35090_35142 = state_35060__$1;
(statearr_35090_35142[(2)] = null);

(statearr_35090_35142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (25))){
var inst_35056 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
var statearr_35091_35143 = state_35060__$1;
(statearr_35091_35143[(2)] = inst_35056);

(statearr_35091_35143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (34))){
var inst_35054 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
var statearr_35092_35144 = state_35060__$1;
(statearr_35092_35144[(2)] = inst_35054);

(statearr_35092_35144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (17))){
var state_35060__$1 = state_35060;
var statearr_35093_35145 = state_35060__$1;
(statearr_35093_35145[(2)] = false);

(statearr_35093_35145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (3))){
var state_35060__$1 = state_35060;
var statearr_35094_35146 = state_35060__$1;
(statearr_35094_35146[(2)] = false);

(statearr_35094_35146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (12))){
var inst_35058 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35060__$1,inst_35058);
} else {
if((state_val_35061 === (2))){
var inst_34962 = (state_35060[(8)]);
var inst_34967 = inst_34962.cljs$lang$protocol_mask$partition0$;
var inst_34968 = (inst_34967 & (64));
var inst_34969 = inst_34962.cljs$core$ISeq$;
var inst_34970 = (cljs.core.PROTOCOL_SENTINEL === inst_34969);
var inst_34971 = (inst_34968) || (inst_34970);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_34971)){
var statearr_35095_35147 = state_35060__$1;
(statearr_35095_35147[(1)] = (5));

} else {
var statearr_35096_35148 = state_35060__$1;
(statearr_35096_35148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (23))){
var inst_35019 = (state_35060[(14)]);
var inst_35025 = (inst_35019 == null);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_35025)){
var statearr_35097_35149 = state_35060__$1;
(statearr_35097_35149[(1)] = (26));

} else {
var statearr_35098_35150 = state_35060__$1;
(statearr_35098_35150[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (35))){
var inst_35045 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
if(cljs.core.truth_(inst_35045)){
var statearr_35099_35151 = state_35060__$1;
(statearr_35099_35151[(1)] = (36));

} else {
var statearr_35100_35152 = state_35060__$1;
(statearr_35100_35152[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (19))){
var inst_34987 = (state_35060[(7)]);
var inst_35007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34987);
var state_35060__$1 = state_35060;
var statearr_35101_35153 = state_35060__$1;
(statearr_35101_35153[(2)] = inst_35007);

(statearr_35101_35153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (11))){
var inst_34987 = (state_35060[(7)]);
var inst_34991 = (inst_34987 == null);
var inst_34992 = cljs.core.not.call(null,inst_34991);
var state_35060__$1 = state_35060;
if(inst_34992){
var statearr_35102_35154 = state_35060__$1;
(statearr_35102_35154[(1)] = (13));

} else {
var statearr_35103_35155 = state_35060__$1;
(statearr_35103_35155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (9))){
var inst_34962 = (state_35060[(8)]);
var state_35060__$1 = state_35060;
var statearr_35104_35156 = state_35060__$1;
(statearr_35104_35156[(2)] = inst_34962);

(statearr_35104_35156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (5))){
var state_35060__$1 = state_35060;
var statearr_35105_35157 = state_35060__$1;
(statearr_35105_35157[(2)] = true);

(statearr_35105_35157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (14))){
var state_35060__$1 = state_35060;
var statearr_35106_35158 = state_35060__$1;
(statearr_35106_35158[(2)] = false);

(statearr_35106_35158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (26))){
var inst_35020 = (state_35060[(9)]);
var inst_35027 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35020);
var state_35060__$1 = state_35060;
var statearr_35107_35159 = state_35060__$1;
(statearr_35107_35159[(2)] = inst_35027);

(statearr_35107_35159[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (16))){
var state_35060__$1 = state_35060;
var statearr_35108_35160 = state_35060__$1;
(statearr_35108_35160[(2)] = true);

(statearr_35108_35160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (38))){
var inst_35050 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
var statearr_35109_35161 = state_35060__$1;
(statearr_35109_35161[(2)] = inst_35050);

(statearr_35109_35161[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (30))){
var inst_35020 = (state_35060[(9)]);
var inst_35012 = (state_35060[(13)]);
var inst_35011 = (state_35060[(11)]);
var inst_35037 = cljs.core.empty_QMARK_.call(null,inst_35011);
var inst_35038 = inst_35012.call(null,inst_35020);
var inst_35039 = cljs.core.not.call(null,inst_35038);
var inst_35040 = (inst_35037) && (inst_35039);
var state_35060__$1 = state_35060;
var statearr_35110_35162 = state_35060__$1;
(statearr_35110_35162[(2)] = inst_35040);

(statearr_35110_35162[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (10))){
var inst_34962 = (state_35060[(8)]);
var inst_34983 = (state_35060[(2)]);
var inst_34984 = cljs.core.get.call(null,inst_34983,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34985 = cljs.core.get.call(null,inst_34983,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34986 = cljs.core.get.call(null,inst_34983,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34987 = inst_34962;
var state_35060__$1 = (function (){var statearr_35111 = state_35060;
(statearr_35111[(16)] = inst_34985);

(statearr_35111[(17)] = inst_34986);

(statearr_35111[(7)] = inst_34987);

(statearr_35111[(18)] = inst_34984);

return statearr_35111;
})();
var statearr_35112_35163 = state_35060__$1;
(statearr_35112_35163[(2)] = null);

(statearr_35112_35163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (18))){
var inst_35002 = (state_35060[(2)]);
var state_35060__$1 = state_35060;
var statearr_35113_35164 = state_35060__$1;
(statearr_35113_35164[(2)] = inst_35002);

(statearr_35113_35164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (37))){
var state_35060__$1 = state_35060;
var statearr_35114_35165 = state_35060__$1;
(statearr_35114_35165[(2)] = null);

(statearr_35114_35165[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35061 === (8))){
var inst_34962 = (state_35060[(8)]);
var inst_34980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34962);
var state_35060__$1 = state_35060;
var statearr_35115_35166 = state_35060__$1;
(statearr_35115_35166[(2)] = inst_34980);

(statearr_35115_35166[(1)] = (10));


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
});})(c__34075__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33987__auto__,c__34075__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33988__auto__ = null;
var cljs$core$async$mix_$_state_machine__33988__auto____0 = (function (){
var statearr_35116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35116[(0)] = cljs$core$async$mix_$_state_machine__33988__auto__);

(statearr_35116[(1)] = (1));

return statearr_35116;
});
var cljs$core$async$mix_$_state_machine__33988__auto____1 = (function (state_35060){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35117){if((e35117 instanceof Object)){
var ex__33991__auto__ = e35117;
var statearr_35118_35167 = state_35060;
(statearr_35118_35167[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35168 = state_35060;
state_35060 = G__35168;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33988__auto__ = function(state_35060){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33988__auto____1.call(this,state_35060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33988__auto____0;
cljs$core$async$mix_$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33988__auto____1;
return cljs$core$async$mix_$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34077__auto__ = (function (){var statearr_35119 = f__34076__auto__.call(null);
(statearr_35119[(6)] = c__34075__auto___35120);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35170 = arguments.length;
switch (G__35170) {
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
var G__35174 = arguments.length;
switch (G__35174) {
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
return (function (p1__35172_SHARP_){
if(cljs.core.truth_(p1__35172_SHARP_.call(null,topic))){
return p1__35172_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35172_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28423__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35175 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35176){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35176 = meta35176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35177,meta35176__$1){
var self__ = this;
var _35177__$1 = this;
return (new cljs.core.async.t_cljs$core$async35175(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35176__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35177){
var self__ = this;
var _35177__$1 = this;
return self__.meta35176;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35176","meta35176",-242634919,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35175";

cljs.core.async.t_cljs$core$async35175.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35175");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35175 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35176){
return (new cljs.core.async.t_cljs$core$async35175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35176));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35175(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34075__auto___35295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35295,mults,ensure_mult,p){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35295,mults,ensure_mult,p){
return (function (state_35249){
var state_val_35250 = (state_35249[(1)]);
if((state_val_35250 === (7))){
var inst_35245 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35251_35296 = state_35249__$1;
(statearr_35251_35296[(2)] = inst_35245);

(statearr_35251_35296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (20))){
var state_35249__$1 = state_35249;
var statearr_35252_35297 = state_35249__$1;
(statearr_35252_35297[(2)] = null);

(statearr_35252_35297[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (1))){
var state_35249__$1 = state_35249;
var statearr_35253_35298 = state_35249__$1;
(statearr_35253_35298[(2)] = null);

(statearr_35253_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (24))){
var inst_35228 = (state_35249[(7)]);
var inst_35237 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35228);
var state_35249__$1 = state_35249;
var statearr_35254_35299 = state_35249__$1;
(statearr_35254_35299[(2)] = inst_35237);

(statearr_35254_35299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (4))){
var inst_35180 = (state_35249[(8)]);
var inst_35180__$1 = (state_35249[(2)]);
var inst_35181 = (inst_35180__$1 == null);
var state_35249__$1 = (function (){var statearr_35255 = state_35249;
(statearr_35255[(8)] = inst_35180__$1);

return statearr_35255;
})();
if(cljs.core.truth_(inst_35181)){
var statearr_35256_35300 = state_35249__$1;
(statearr_35256_35300[(1)] = (5));

} else {
var statearr_35257_35301 = state_35249__$1;
(statearr_35257_35301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (15))){
var inst_35222 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35258_35302 = state_35249__$1;
(statearr_35258_35302[(2)] = inst_35222);

(statearr_35258_35302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (21))){
var inst_35242 = (state_35249[(2)]);
var state_35249__$1 = (function (){var statearr_35259 = state_35249;
(statearr_35259[(9)] = inst_35242);

return statearr_35259;
})();
var statearr_35260_35303 = state_35249__$1;
(statearr_35260_35303[(2)] = null);

(statearr_35260_35303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (13))){
var inst_35204 = (state_35249[(10)]);
var inst_35206 = cljs.core.chunked_seq_QMARK_.call(null,inst_35204);
var state_35249__$1 = state_35249;
if(inst_35206){
var statearr_35261_35304 = state_35249__$1;
(statearr_35261_35304[(1)] = (16));

} else {
var statearr_35262_35305 = state_35249__$1;
(statearr_35262_35305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (22))){
var inst_35234 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
if(cljs.core.truth_(inst_35234)){
var statearr_35263_35306 = state_35249__$1;
(statearr_35263_35306[(1)] = (23));

} else {
var statearr_35264_35307 = state_35249__$1;
(statearr_35264_35307[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (6))){
var inst_35180 = (state_35249[(8)]);
var inst_35230 = (state_35249[(11)]);
var inst_35228 = (state_35249[(7)]);
var inst_35228__$1 = topic_fn.call(null,inst_35180);
var inst_35229 = cljs.core.deref.call(null,mults);
var inst_35230__$1 = cljs.core.get.call(null,inst_35229,inst_35228__$1);
var state_35249__$1 = (function (){var statearr_35265 = state_35249;
(statearr_35265[(11)] = inst_35230__$1);

(statearr_35265[(7)] = inst_35228__$1);

return statearr_35265;
})();
if(cljs.core.truth_(inst_35230__$1)){
var statearr_35266_35308 = state_35249__$1;
(statearr_35266_35308[(1)] = (19));

} else {
var statearr_35267_35309 = state_35249__$1;
(statearr_35267_35309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (25))){
var inst_35239 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35268_35310 = state_35249__$1;
(statearr_35268_35310[(2)] = inst_35239);

(statearr_35268_35310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (17))){
var inst_35204 = (state_35249[(10)]);
var inst_35213 = cljs.core.first.call(null,inst_35204);
var inst_35214 = cljs.core.async.muxch_STAR_.call(null,inst_35213);
var inst_35215 = cljs.core.async.close_BANG_.call(null,inst_35214);
var inst_35216 = cljs.core.next.call(null,inst_35204);
var inst_35190 = inst_35216;
var inst_35191 = null;
var inst_35192 = (0);
var inst_35193 = (0);
var state_35249__$1 = (function (){var statearr_35269 = state_35249;
(statearr_35269[(12)] = inst_35215);

(statearr_35269[(13)] = inst_35193);

(statearr_35269[(14)] = inst_35190);

(statearr_35269[(15)] = inst_35191);

(statearr_35269[(16)] = inst_35192);

return statearr_35269;
})();
var statearr_35270_35311 = state_35249__$1;
(statearr_35270_35311[(2)] = null);

(statearr_35270_35311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (3))){
var inst_35247 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35249__$1,inst_35247);
} else {
if((state_val_35250 === (12))){
var inst_35224 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35271_35312 = state_35249__$1;
(statearr_35271_35312[(2)] = inst_35224);

(statearr_35271_35312[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (2))){
var state_35249__$1 = state_35249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35249__$1,(4),ch);
} else {
if((state_val_35250 === (23))){
var state_35249__$1 = state_35249;
var statearr_35272_35313 = state_35249__$1;
(statearr_35272_35313[(2)] = null);

(statearr_35272_35313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (19))){
var inst_35180 = (state_35249[(8)]);
var inst_35230 = (state_35249[(11)]);
var inst_35232 = cljs.core.async.muxch_STAR_.call(null,inst_35230);
var state_35249__$1 = state_35249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35249__$1,(22),inst_35232,inst_35180);
} else {
if((state_val_35250 === (11))){
var inst_35190 = (state_35249[(14)]);
var inst_35204 = (state_35249[(10)]);
var inst_35204__$1 = cljs.core.seq.call(null,inst_35190);
var state_35249__$1 = (function (){var statearr_35273 = state_35249;
(statearr_35273[(10)] = inst_35204__$1);

return statearr_35273;
})();
if(inst_35204__$1){
var statearr_35274_35314 = state_35249__$1;
(statearr_35274_35314[(1)] = (13));

} else {
var statearr_35275_35315 = state_35249__$1;
(statearr_35275_35315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (9))){
var inst_35226 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35276_35316 = state_35249__$1;
(statearr_35276_35316[(2)] = inst_35226);

(statearr_35276_35316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (5))){
var inst_35187 = cljs.core.deref.call(null,mults);
var inst_35188 = cljs.core.vals.call(null,inst_35187);
var inst_35189 = cljs.core.seq.call(null,inst_35188);
var inst_35190 = inst_35189;
var inst_35191 = null;
var inst_35192 = (0);
var inst_35193 = (0);
var state_35249__$1 = (function (){var statearr_35277 = state_35249;
(statearr_35277[(13)] = inst_35193);

(statearr_35277[(14)] = inst_35190);

(statearr_35277[(15)] = inst_35191);

(statearr_35277[(16)] = inst_35192);

return statearr_35277;
})();
var statearr_35278_35317 = state_35249__$1;
(statearr_35278_35317[(2)] = null);

(statearr_35278_35317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (14))){
var state_35249__$1 = state_35249;
var statearr_35282_35318 = state_35249__$1;
(statearr_35282_35318[(2)] = null);

(statearr_35282_35318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (16))){
var inst_35204 = (state_35249[(10)]);
var inst_35208 = cljs.core.chunk_first.call(null,inst_35204);
var inst_35209 = cljs.core.chunk_rest.call(null,inst_35204);
var inst_35210 = cljs.core.count.call(null,inst_35208);
var inst_35190 = inst_35209;
var inst_35191 = inst_35208;
var inst_35192 = inst_35210;
var inst_35193 = (0);
var state_35249__$1 = (function (){var statearr_35283 = state_35249;
(statearr_35283[(13)] = inst_35193);

(statearr_35283[(14)] = inst_35190);

(statearr_35283[(15)] = inst_35191);

(statearr_35283[(16)] = inst_35192);

return statearr_35283;
})();
var statearr_35284_35319 = state_35249__$1;
(statearr_35284_35319[(2)] = null);

(statearr_35284_35319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (10))){
var inst_35193 = (state_35249[(13)]);
var inst_35190 = (state_35249[(14)]);
var inst_35191 = (state_35249[(15)]);
var inst_35192 = (state_35249[(16)]);
var inst_35198 = cljs.core._nth.call(null,inst_35191,inst_35193);
var inst_35199 = cljs.core.async.muxch_STAR_.call(null,inst_35198);
var inst_35200 = cljs.core.async.close_BANG_.call(null,inst_35199);
var inst_35201 = (inst_35193 + (1));
var tmp35279 = inst_35190;
var tmp35280 = inst_35191;
var tmp35281 = inst_35192;
var inst_35190__$1 = tmp35279;
var inst_35191__$1 = tmp35280;
var inst_35192__$1 = tmp35281;
var inst_35193__$1 = inst_35201;
var state_35249__$1 = (function (){var statearr_35285 = state_35249;
(statearr_35285[(13)] = inst_35193__$1);

(statearr_35285[(14)] = inst_35190__$1);

(statearr_35285[(15)] = inst_35191__$1);

(statearr_35285[(16)] = inst_35192__$1);

(statearr_35285[(17)] = inst_35200);

return statearr_35285;
})();
var statearr_35286_35320 = state_35249__$1;
(statearr_35286_35320[(2)] = null);

(statearr_35286_35320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (18))){
var inst_35219 = (state_35249[(2)]);
var state_35249__$1 = state_35249;
var statearr_35287_35321 = state_35249__$1;
(statearr_35287_35321[(2)] = inst_35219);

(statearr_35287_35321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35250 === (8))){
var inst_35193 = (state_35249[(13)]);
var inst_35192 = (state_35249[(16)]);
var inst_35195 = (inst_35193 < inst_35192);
var inst_35196 = inst_35195;
var state_35249__$1 = state_35249;
if(cljs.core.truth_(inst_35196)){
var statearr_35288_35322 = state_35249__$1;
(statearr_35288_35322[(1)] = (10));

} else {
var statearr_35289_35323 = state_35249__$1;
(statearr_35289_35323[(1)] = (11));

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
});})(c__34075__auto___35295,mults,ensure_mult,p))
;
return ((function (switch__33987__auto__,c__34075__auto___35295,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35249){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__33991__auto__ = e35291;
var statearr_35292_35324 = state_35249;
(statearr_35292_35324[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35325 = state_35249;
state_35249 = G__35325;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35295,mults,ensure_mult,p))
})();
var state__34077__auto__ = (function (){var statearr_35293 = f__34076__auto__.call(null);
(statearr_35293[(6)] = c__34075__auto___35295);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35295,mults,ensure_mult,p))
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
var G__35327 = arguments.length;
switch (G__35327) {
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
var G__35330 = arguments.length;
switch (G__35330) {
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
var G__35333 = arguments.length;
switch (G__35333) {
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
var c__34075__auto___35400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35372){
var state_val_35373 = (state_35372[(1)]);
if((state_val_35373 === (7))){
var state_35372__$1 = state_35372;
var statearr_35374_35401 = state_35372__$1;
(statearr_35374_35401[(2)] = null);

(statearr_35374_35401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (1))){
var state_35372__$1 = state_35372;
var statearr_35375_35402 = state_35372__$1;
(statearr_35375_35402[(2)] = null);

(statearr_35375_35402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (4))){
var inst_35336 = (state_35372[(7)]);
var inst_35338 = (inst_35336 < cnt);
var state_35372__$1 = state_35372;
if(cljs.core.truth_(inst_35338)){
var statearr_35376_35403 = state_35372__$1;
(statearr_35376_35403[(1)] = (6));

} else {
var statearr_35377_35404 = state_35372__$1;
(statearr_35377_35404[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (15))){
var inst_35368 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
var statearr_35378_35405 = state_35372__$1;
(statearr_35378_35405[(2)] = inst_35368);

(statearr_35378_35405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (13))){
var inst_35361 = cljs.core.async.close_BANG_.call(null,out);
var state_35372__$1 = state_35372;
var statearr_35379_35406 = state_35372__$1;
(statearr_35379_35406[(2)] = inst_35361);

(statearr_35379_35406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (6))){
var state_35372__$1 = state_35372;
var statearr_35380_35407 = state_35372__$1;
(statearr_35380_35407[(2)] = null);

(statearr_35380_35407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (3))){
var inst_35370 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35372__$1,inst_35370);
} else {
if((state_val_35373 === (12))){
var inst_35358 = (state_35372[(8)]);
var inst_35358__$1 = (state_35372[(2)]);
var inst_35359 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35358__$1);
var state_35372__$1 = (function (){var statearr_35381 = state_35372;
(statearr_35381[(8)] = inst_35358__$1);

return statearr_35381;
})();
if(cljs.core.truth_(inst_35359)){
var statearr_35382_35408 = state_35372__$1;
(statearr_35382_35408[(1)] = (13));

} else {
var statearr_35383_35409 = state_35372__$1;
(statearr_35383_35409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (2))){
var inst_35335 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35336 = (0);
var state_35372__$1 = (function (){var statearr_35384 = state_35372;
(statearr_35384[(9)] = inst_35335);

(statearr_35384[(7)] = inst_35336);

return statearr_35384;
})();
var statearr_35385_35410 = state_35372__$1;
(statearr_35385_35410[(2)] = null);

(statearr_35385_35410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (11))){
var inst_35336 = (state_35372[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35372,(10),Object,null,(9));
var inst_35345 = chs__$1.call(null,inst_35336);
var inst_35346 = done.call(null,inst_35336);
var inst_35347 = cljs.core.async.take_BANG_.call(null,inst_35345,inst_35346);
var state_35372__$1 = state_35372;
var statearr_35386_35411 = state_35372__$1;
(statearr_35386_35411[(2)] = inst_35347);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35372__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (9))){
var inst_35336 = (state_35372[(7)]);
var inst_35349 = (state_35372[(2)]);
var inst_35350 = (inst_35336 + (1));
var inst_35336__$1 = inst_35350;
var state_35372__$1 = (function (){var statearr_35387 = state_35372;
(statearr_35387[(10)] = inst_35349);

(statearr_35387[(7)] = inst_35336__$1);

return statearr_35387;
})();
var statearr_35388_35412 = state_35372__$1;
(statearr_35388_35412[(2)] = null);

(statearr_35388_35412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (5))){
var inst_35356 = (state_35372[(2)]);
var state_35372__$1 = (function (){var statearr_35389 = state_35372;
(statearr_35389[(11)] = inst_35356);

return statearr_35389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35372__$1,(12),dchan);
} else {
if((state_val_35373 === (14))){
var inst_35358 = (state_35372[(8)]);
var inst_35363 = cljs.core.apply.call(null,f,inst_35358);
var state_35372__$1 = state_35372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35372__$1,(16),out,inst_35363);
} else {
if((state_val_35373 === (16))){
var inst_35365 = (state_35372[(2)]);
var state_35372__$1 = (function (){var statearr_35390 = state_35372;
(statearr_35390[(12)] = inst_35365);

return statearr_35390;
})();
var statearr_35391_35413 = state_35372__$1;
(statearr_35391_35413[(2)] = null);

(statearr_35391_35413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (10))){
var inst_35340 = (state_35372[(2)]);
var inst_35341 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35372__$1 = (function (){var statearr_35392 = state_35372;
(statearr_35392[(13)] = inst_35340);

return statearr_35392;
})();
var statearr_35393_35414 = state_35372__$1;
(statearr_35393_35414[(2)] = inst_35341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35372__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (8))){
var inst_35354 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
var statearr_35394_35415 = state_35372__$1;
(statearr_35394_35415[(2)] = inst_35354);

(statearr_35394_35415[(1)] = (5));


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
});})(c__34075__auto___35400,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33987__auto__,c__34075__auto___35400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35395[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35395[(1)] = (1));

return statearr_35395;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35372){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35396){if((e35396 instanceof Object)){
var ex__33991__auto__ = e35396;
var statearr_35397_35416 = state_35372;
(statearr_35397_35416[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35417 = state_35372;
state_35372 = G__35417;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35400,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34077__auto__ = (function (){var statearr_35398 = f__34076__auto__.call(null);
(statearr_35398[(6)] = c__34075__auto___35400);

return statearr_35398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35400,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35420 = arguments.length;
switch (G__35420) {
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
var c__34075__auto___35474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35474,out){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35474,out){
return (function (state_35452){
var state_val_35453 = (state_35452[(1)]);
if((state_val_35453 === (7))){
var inst_35431 = (state_35452[(7)]);
var inst_35432 = (state_35452[(8)]);
var inst_35431__$1 = (state_35452[(2)]);
var inst_35432__$1 = cljs.core.nth.call(null,inst_35431__$1,(0),null);
var inst_35433 = cljs.core.nth.call(null,inst_35431__$1,(1),null);
var inst_35434 = (inst_35432__$1 == null);
var state_35452__$1 = (function (){var statearr_35454 = state_35452;
(statearr_35454[(7)] = inst_35431__$1);

(statearr_35454[(8)] = inst_35432__$1);

(statearr_35454[(9)] = inst_35433);

return statearr_35454;
})();
if(cljs.core.truth_(inst_35434)){
var statearr_35455_35475 = state_35452__$1;
(statearr_35455_35475[(1)] = (8));

} else {
var statearr_35456_35476 = state_35452__$1;
(statearr_35456_35476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (1))){
var inst_35421 = cljs.core.vec.call(null,chs);
var inst_35422 = inst_35421;
var state_35452__$1 = (function (){var statearr_35457 = state_35452;
(statearr_35457[(10)] = inst_35422);

return statearr_35457;
})();
var statearr_35458_35477 = state_35452__$1;
(statearr_35458_35477[(2)] = null);

(statearr_35458_35477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (4))){
var inst_35422 = (state_35452[(10)]);
var state_35452__$1 = state_35452;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35452__$1,(7),inst_35422);
} else {
if((state_val_35453 === (6))){
var inst_35448 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35459_35478 = state_35452__$1;
(statearr_35459_35478[(2)] = inst_35448);

(statearr_35459_35478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (3))){
var inst_35450 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35452__$1,inst_35450);
} else {
if((state_val_35453 === (2))){
var inst_35422 = (state_35452[(10)]);
var inst_35424 = cljs.core.count.call(null,inst_35422);
var inst_35425 = (inst_35424 > (0));
var state_35452__$1 = state_35452;
if(cljs.core.truth_(inst_35425)){
var statearr_35461_35479 = state_35452__$1;
(statearr_35461_35479[(1)] = (4));

} else {
var statearr_35462_35480 = state_35452__$1;
(statearr_35462_35480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (11))){
var inst_35422 = (state_35452[(10)]);
var inst_35441 = (state_35452[(2)]);
var tmp35460 = inst_35422;
var inst_35422__$1 = tmp35460;
var state_35452__$1 = (function (){var statearr_35463 = state_35452;
(statearr_35463[(10)] = inst_35422__$1);

(statearr_35463[(11)] = inst_35441);

return statearr_35463;
})();
var statearr_35464_35481 = state_35452__$1;
(statearr_35464_35481[(2)] = null);

(statearr_35464_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (9))){
var inst_35432 = (state_35452[(8)]);
var state_35452__$1 = state_35452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35452__$1,(11),out,inst_35432);
} else {
if((state_val_35453 === (5))){
var inst_35446 = cljs.core.async.close_BANG_.call(null,out);
var state_35452__$1 = state_35452;
var statearr_35465_35482 = state_35452__$1;
(statearr_35465_35482[(2)] = inst_35446);

(statearr_35465_35482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (10))){
var inst_35444 = (state_35452[(2)]);
var state_35452__$1 = state_35452;
var statearr_35466_35483 = state_35452__$1;
(statearr_35466_35483[(2)] = inst_35444);

(statearr_35466_35483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35453 === (8))){
var inst_35431 = (state_35452[(7)]);
var inst_35422 = (state_35452[(10)]);
var inst_35432 = (state_35452[(8)]);
var inst_35433 = (state_35452[(9)]);
var inst_35436 = (function (){var cs = inst_35422;
var vec__35427 = inst_35431;
var v = inst_35432;
var c = inst_35433;
return ((function (cs,vec__35427,v,c,inst_35431,inst_35422,inst_35432,inst_35433,state_val_35453,c__34075__auto___35474,out){
return (function (p1__35418_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35418_SHARP_);
});
;})(cs,vec__35427,v,c,inst_35431,inst_35422,inst_35432,inst_35433,state_val_35453,c__34075__auto___35474,out))
})();
var inst_35437 = cljs.core.filterv.call(null,inst_35436,inst_35422);
var inst_35422__$1 = inst_35437;
var state_35452__$1 = (function (){var statearr_35467 = state_35452;
(statearr_35467[(10)] = inst_35422__$1);

return statearr_35467;
})();
var statearr_35468_35484 = state_35452__$1;
(statearr_35468_35484[(2)] = null);

(statearr_35468_35484[(1)] = (2));


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
});})(c__34075__auto___35474,out))
;
return ((function (switch__33987__auto__,c__34075__auto___35474,out){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35469 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35469[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35469[(1)] = (1));

return statearr_35469;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35452){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35470){if((e35470 instanceof Object)){
var ex__33991__auto__ = e35470;
var statearr_35471_35485 = state_35452;
(statearr_35471_35485[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35486 = state_35452;
state_35452 = G__35486;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35474,out))
})();
var state__34077__auto__ = (function (){var statearr_35472 = f__34076__auto__.call(null);
(statearr_35472[(6)] = c__34075__auto___35474);

return statearr_35472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35474,out))
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
var G__35488 = arguments.length;
switch (G__35488) {
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
var c__34075__auto___35533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35533,out){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35533,out){
return (function (state_35512){
var state_val_35513 = (state_35512[(1)]);
if((state_val_35513 === (7))){
var inst_35494 = (state_35512[(7)]);
var inst_35494__$1 = (state_35512[(2)]);
var inst_35495 = (inst_35494__$1 == null);
var inst_35496 = cljs.core.not.call(null,inst_35495);
var state_35512__$1 = (function (){var statearr_35514 = state_35512;
(statearr_35514[(7)] = inst_35494__$1);

return statearr_35514;
})();
if(inst_35496){
var statearr_35515_35534 = state_35512__$1;
(statearr_35515_35534[(1)] = (8));

} else {
var statearr_35516_35535 = state_35512__$1;
(statearr_35516_35535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (1))){
var inst_35489 = (0);
var state_35512__$1 = (function (){var statearr_35517 = state_35512;
(statearr_35517[(8)] = inst_35489);

return statearr_35517;
})();
var statearr_35518_35536 = state_35512__$1;
(statearr_35518_35536[(2)] = null);

(statearr_35518_35536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (4))){
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35512__$1,(7),ch);
} else {
if((state_val_35513 === (6))){
var inst_35507 = (state_35512[(2)]);
var state_35512__$1 = state_35512;
var statearr_35519_35537 = state_35512__$1;
(statearr_35519_35537[(2)] = inst_35507);

(statearr_35519_35537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (3))){
var inst_35509 = (state_35512[(2)]);
var inst_35510 = cljs.core.async.close_BANG_.call(null,out);
var state_35512__$1 = (function (){var statearr_35520 = state_35512;
(statearr_35520[(9)] = inst_35509);

return statearr_35520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35512__$1,inst_35510);
} else {
if((state_val_35513 === (2))){
var inst_35489 = (state_35512[(8)]);
var inst_35491 = (inst_35489 < n);
var state_35512__$1 = state_35512;
if(cljs.core.truth_(inst_35491)){
var statearr_35521_35538 = state_35512__$1;
(statearr_35521_35538[(1)] = (4));

} else {
var statearr_35522_35539 = state_35512__$1;
(statearr_35522_35539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (11))){
var inst_35489 = (state_35512[(8)]);
var inst_35499 = (state_35512[(2)]);
var inst_35500 = (inst_35489 + (1));
var inst_35489__$1 = inst_35500;
var state_35512__$1 = (function (){var statearr_35523 = state_35512;
(statearr_35523[(8)] = inst_35489__$1);

(statearr_35523[(10)] = inst_35499);

return statearr_35523;
})();
var statearr_35524_35540 = state_35512__$1;
(statearr_35524_35540[(2)] = null);

(statearr_35524_35540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (9))){
var state_35512__$1 = state_35512;
var statearr_35525_35541 = state_35512__$1;
(statearr_35525_35541[(2)] = null);

(statearr_35525_35541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (5))){
var state_35512__$1 = state_35512;
var statearr_35526_35542 = state_35512__$1;
(statearr_35526_35542[(2)] = null);

(statearr_35526_35542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (10))){
var inst_35504 = (state_35512[(2)]);
var state_35512__$1 = state_35512;
var statearr_35527_35543 = state_35512__$1;
(statearr_35527_35543[(2)] = inst_35504);

(statearr_35527_35543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (8))){
var inst_35494 = (state_35512[(7)]);
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35512__$1,(11),out,inst_35494);
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
});})(c__34075__auto___35533,out))
;
return ((function (switch__33987__auto__,c__34075__auto___35533,out){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35528[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35528[(1)] = (1));

return statearr_35528;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35512){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35529){if((e35529 instanceof Object)){
var ex__33991__auto__ = e35529;
var statearr_35530_35544 = state_35512;
(statearr_35530_35544[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35545 = state_35512;
state_35512 = G__35545;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35533,out))
})();
var state__34077__auto__ = (function (){var statearr_35531 = f__34076__auto__.call(null);
(statearr_35531[(6)] = c__34075__auto___35533);

return statearr_35531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35533,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35547 = (function (f,ch,meta35548){
this.f = f;
this.ch = ch;
this.meta35548 = meta35548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35549,meta35548__$1){
var self__ = this;
var _35549__$1 = this;
return (new cljs.core.async.t_cljs$core$async35547(self__.f,self__.ch,meta35548__$1));
});

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35549){
var self__ = this;
var _35549__$1 = this;
return self__.meta35548;
});

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35550 = (function (f,ch,meta35548,_,fn1,meta35551){
this.f = f;
this.ch = ch;
this.meta35548 = meta35548;
this._ = _;
this.fn1 = fn1;
this.meta35551 = meta35551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35552,meta35551__$1){
var self__ = this;
var _35552__$1 = this;
return (new cljs.core.async.t_cljs$core$async35550(self__.f,self__.ch,self__.meta35548,self__._,self__.fn1,meta35551__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35552){
var self__ = this;
var _35552__$1 = this;
return self__.meta35551;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35546_SHARP_){
return f1.call(null,(((p1__35546_SHARP_ == null))?null:self__.f.call(null,p1__35546_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35550.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35548","meta35548",-708545917,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35547","cljs.core.async/t_cljs$core$async35547",852679518,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35551","meta35551",759219168,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35550";

cljs.core.async.t_cljs$core$async35550.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35550");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35550 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35550(f__$1,ch__$1,meta35548__$1,___$2,fn1__$1,meta35551){
return (new cljs.core.async.t_cljs$core$async35550(f__$1,ch__$1,meta35548__$1,___$2,fn1__$1,meta35551));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35550(self__.f,self__.ch,self__.meta35548,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35548","meta35548",-708545917,null)], null);
});

cljs.core.async.t_cljs$core$async35547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35547";

cljs.core.async.t_cljs$core$async35547.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35547");
});

cljs.core.async.__GT_t_cljs$core$async35547 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35547(f__$1,ch__$1,meta35548){
return (new cljs.core.async.t_cljs$core$async35547(f__$1,ch__$1,meta35548));
});

}

return (new cljs.core.async.t_cljs$core$async35547(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35553 = (function (f,ch,meta35554){
this.f = f;
this.ch = ch;
this.meta35554 = meta35554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35555,meta35554__$1){
var self__ = this;
var _35555__$1 = this;
return (new cljs.core.async.t_cljs$core$async35553(self__.f,self__.ch,meta35554__$1));
});

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35555){
var self__ = this;
var _35555__$1 = this;
return self__.meta35554;
});

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35554","meta35554",1696100943,null)], null);
});

cljs.core.async.t_cljs$core$async35553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35553";

cljs.core.async.t_cljs$core$async35553.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35553");
});

cljs.core.async.__GT_t_cljs$core$async35553 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35553(f__$1,ch__$1,meta35554){
return (new cljs.core.async.t_cljs$core$async35553(f__$1,ch__$1,meta35554));
});

}

return (new cljs.core.async.t_cljs$core$async35553(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35556 = (function (p,ch,meta35557){
this.p = p;
this.ch = ch;
this.meta35557 = meta35557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35558,meta35557__$1){
var self__ = this;
var _35558__$1 = this;
return (new cljs.core.async.t_cljs$core$async35556(self__.p,self__.ch,meta35557__$1));
});

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35558){
var self__ = this;
var _35558__$1 = this;
return self__.meta35557;
});

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35557","meta35557",1742675323,null)], null);
});

cljs.core.async.t_cljs$core$async35556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35556";

cljs.core.async.t_cljs$core$async35556.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async35556");
});

cljs.core.async.__GT_t_cljs$core$async35556 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35556(p__$1,ch__$1,meta35557){
return (new cljs.core.async.t_cljs$core$async35556(p__$1,ch__$1,meta35557));
});

}

return (new cljs.core.async.t_cljs$core$async35556(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35560 = arguments.length;
switch (G__35560) {
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
var c__34075__auto___35600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35600,out){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35600,out){
return (function (state_35581){
var state_val_35582 = (state_35581[(1)]);
if((state_val_35582 === (7))){
var inst_35577 = (state_35581[(2)]);
var state_35581__$1 = state_35581;
var statearr_35583_35601 = state_35581__$1;
(statearr_35583_35601[(2)] = inst_35577);

(statearr_35583_35601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (1))){
var state_35581__$1 = state_35581;
var statearr_35584_35602 = state_35581__$1;
(statearr_35584_35602[(2)] = null);

(statearr_35584_35602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (4))){
var inst_35563 = (state_35581[(7)]);
var inst_35563__$1 = (state_35581[(2)]);
var inst_35564 = (inst_35563__$1 == null);
var state_35581__$1 = (function (){var statearr_35585 = state_35581;
(statearr_35585[(7)] = inst_35563__$1);

return statearr_35585;
})();
if(cljs.core.truth_(inst_35564)){
var statearr_35586_35603 = state_35581__$1;
(statearr_35586_35603[(1)] = (5));

} else {
var statearr_35587_35604 = state_35581__$1;
(statearr_35587_35604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (6))){
var inst_35563 = (state_35581[(7)]);
var inst_35568 = p.call(null,inst_35563);
var state_35581__$1 = state_35581;
if(cljs.core.truth_(inst_35568)){
var statearr_35588_35605 = state_35581__$1;
(statearr_35588_35605[(1)] = (8));

} else {
var statearr_35589_35606 = state_35581__$1;
(statearr_35589_35606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (3))){
var inst_35579 = (state_35581[(2)]);
var state_35581__$1 = state_35581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35581__$1,inst_35579);
} else {
if((state_val_35582 === (2))){
var state_35581__$1 = state_35581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35581__$1,(4),ch);
} else {
if((state_val_35582 === (11))){
var inst_35571 = (state_35581[(2)]);
var state_35581__$1 = state_35581;
var statearr_35590_35607 = state_35581__$1;
(statearr_35590_35607[(2)] = inst_35571);

(statearr_35590_35607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (9))){
var state_35581__$1 = state_35581;
var statearr_35591_35608 = state_35581__$1;
(statearr_35591_35608[(2)] = null);

(statearr_35591_35608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (5))){
var inst_35566 = cljs.core.async.close_BANG_.call(null,out);
var state_35581__$1 = state_35581;
var statearr_35592_35609 = state_35581__$1;
(statearr_35592_35609[(2)] = inst_35566);

(statearr_35592_35609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (10))){
var inst_35574 = (state_35581[(2)]);
var state_35581__$1 = (function (){var statearr_35593 = state_35581;
(statearr_35593[(8)] = inst_35574);

return statearr_35593;
})();
var statearr_35594_35610 = state_35581__$1;
(statearr_35594_35610[(2)] = null);

(statearr_35594_35610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (8))){
var inst_35563 = (state_35581[(7)]);
var state_35581__$1 = state_35581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35581__$1,(11),out,inst_35563);
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
});})(c__34075__auto___35600,out))
;
return ((function (switch__33987__auto__,c__34075__auto___35600,out){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35595 = [null,null,null,null,null,null,null,null,null];
(statearr_35595[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35595[(1)] = (1));

return statearr_35595;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35581){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35596){if((e35596 instanceof Object)){
var ex__33991__auto__ = e35596;
var statearr_35597_35611 = state_35581;
(statearr_35597_35611[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35612 = state_35581;
state_35581 = G__35612;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35600,out))
})();
var state__34077__auto__ = (function (){var statearr_35598 = f__34076__auto__.call(null);
(statearr_35598[(6)] = c__34075__auto___35600);

return statearr_35598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35600,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35614 = arguments.length;
switch (G__35614) {
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
var c__34075__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto__){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto__){
return (function (state_35677){
var state_val_35678 = (state_35677[(1)]);
if((state_val_35678 === (7))){
var inst_35673 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35679_35717 = state_35677__$1;
(statearr_35679_35717[(2)] = inst_35673);

(statearr_35679_35717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (20))){
var inst_35643 = (state_35677[(7)]);
var inst_35654 = (state_35677[(2)]);
var inst_35655 = cljs.core.next.call(null,inst_35643);
var inst_35629 = inst_35655;
var inst_35630 = null;
var inst_35631 = (0);
var inst_35632 = (0);
var state_35677__$1 = (function (){var statearr_35680 = state_35677;
(statearr_35680[(8)] = inst_35629);

(statearr_35680[(9)] = inst_35654);

(statearr_35680[(10)] = inst_35630);

(statearr_35680[(11)] = inst_35631);

(statearr_35680[(12)] = inst_35632);

return statearr_35680;
})();
var statearr_35681_35718 = state_35677__$1;
(statearr_35681_35718[(2)] = null);

(statearr_35681_35718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (1))){
var state_35677__$1 = state_35677;
var statearr_35682_35719 = state_35677__$1;
(statearr_35682_35719[(2)] = null);

(statearr_35682_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (4))){
var inst_35618 = (state_35677[(13)]);
var inst_35618__$1 = (state_35677[(2)]);
var inst_35619 = (inst_35618__$1 == null);
var state_35677__$1 = (function (){var statearr_35683 = state_35677;
(statearr_35683[(13)] = inst_35618__$1);

return statearr_35683;
})();
if(cljs.core.truth_(inst_35619)){
var statearr_35684_35720 = state_35677__$1;
(statearr_35684_35720[(1)] = (5));

} else {
var statearr_35685_35721 = state_35677__$1;
(statearr_35685_35721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (15))){
var state_35677__$1 = state_35677;
var statearr_35689_35722 = state_35677__$1;
(statearr_35689_35722[(2)] = null);

(statearr_35689_35722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (21))){
var state_35677__$1 = state_35677;
var statearr_35690_35723 = state_35677__$1;
(statearr_35690_35723[(2)] = null);

(statearr_35690_35723[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (13))){
var inst_35629 = (state_35677[(8)]);
var inst_35630 = (state_35677[(10)]);
var inst_35631 = (state_35677[(11)]);
var inst_35632 = (state_35677[(12)]);
var inst_35639 = (state_35677[(2)]);
var inst_35640 = (inst_35632 + (1));
var tmp35686 = inst_35629;
var tmp35687 = inst_35630;
var tmp35688 = inst_35631;
var inst_35629__$1 = tmp35686;
var inst_35630__$1 = tmp35687;
var inst_35631__$1 = tmp35688;
var inst_35632__$1 = inst_35640;
var state_35677__$1 = (function (){var statearr_35691 = state_35677;
(statearr_35691[(8)] = inst_35629__$1);

(statearr_35691[(10)] = inst_35630__$1);

(statearr_35691[(14)] = inst_35639);

(statearr_35691[(11)] = inst_35631__$1);

(statearr_35691[(12)] = inst_35632__$1);

return statearr_35691;
})();
var statearr_35692_35724 = state_35677__$1;
(statearr_35692_35724[(2)] = null);

(statearr_35692_35724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (22))){
var state_35677__$1 = state_35677;
var statearr_35693_35725 = state_35677__$1;
(statearr_35693_35725[(2)] = null);

(statearr_35693_35725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (6))){
var inst_35618 = (state_35677[(13)]);
var inst_35627 = f.call(null,inst_35618);
var inst_35628 = cljs.core.seq.call(null,inst_35627);
var inst_35629 = inst_35628;
var inst_35630 = null;
var inst_35631 = (0);
var inst_35632 = (0);
var state_35677__$1 = (function (){var statearr_35694 = state_35677;
(statearr_35694[(8)] = inst_35629);

(statearr_35694[(10)] = inst_35630);

(statearr_35694[(11)] = inst_35631);

(statearr_35694[(12)] = inst_35632);

return statearr_35694;
})();
var statearr_35695_35726 = state_35677__$1;
(statearr_35695_35726[(2)] = null);

(statearr_35695_35726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (17))){
var inst_35643 = (state_35677[(7)]);
var inst_35647 = cljs.core.chunk_first.call(null,inst_35643);
var inst_35648 = cljs.core.chunk_rest.call(null,inst_35643);
var inst_35649 = cljs.core.count.call(null,inst_35647);
var inst_35629 = inst_35648;
var inst_35630 = inst_35647;
var inst_35631 = inst_35649;
var inst_35632 = (0);
var state_35677__$1 = (function (){var statearr_35696 = state_35677;
(statearr_35696[(8)] = inst_35629);

(statearr_35696[(10)] = inst_35630);

(statearr_35696[(11)] = inst_35631);

(statearr_35696[(12)] = inst_35632);

return statearr_35696;
})();
var statearr_35697_35727 = state_35677__$1;
(statearr_35697_35727[(2)] = null);

(statearr_35697_35727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (3))){
var inst_35675 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35677__$1,inst_35675);
} else {
if((state_val_35678 === (12))){
var inst_35663 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35698_35728 = state_35677__$1;
(statearr_35698_35728[(2)] = inst_35663);

(statearr_35698_35728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (2))){
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35677__$1,(4),in$);
} else {
if((state_val_35678 === (23))){
var inst_35671 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35699_35729 = state_35677__$1;
(statearr_35699_35729[(2)] = inst_35671);

(statearr_35699_35729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (19))){
var inst_35658 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35700_35730 = state_35677__$1;
(statearr_35700_35730[(2)] = inst_35658);

(statearr_35700_35730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (11))){
var inst_35629 = (state_35677[(8)]);
var inst_35643 = (state_35677[(7)]);
var inst_35643__$1 = cljs.core.seq.call(null,inst_35629);
var state_35677__$1 = (function (){var statearr_35701 = state_35677;
(statearr_35701[(7)] = inst_35643__$1);

return statearr_35701;
})();
if(inst_35643__$1){
var statearr_35702_35731 = state_35677__$1;
(statearr_35702_35731[(1)] = (14));

} else {
var statearr_35703_35732 = state_35677__$1;
(statearr_35703_35732[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (9))){
var inst_35665 = (state_35677[(2)]);
var inst_35666 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35677__$1 = (function (){var statearr_35704 = state_35677;
(statearr_35704[(15)] = inst_35665);

return statearr_35704;
})();
if(cljs.core.truth_(inst_35666)){
var statearr_35705_35733 = state_35677__$1;
(statearr_35705_35733[(1)] = (21));

} else {
var statearr_35706_35734 = state_35677__$1;
(statearr_35706_35734[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (5))){
var inst_35621 = cljs.core.async.close_BANG_.call(null,out);
var state_35677__$1 = state_35677;
var statearr_35707_35735 = state_35677__$1;
(statearr_35707_35735[(2)] = inst_35621);

(statearr_35707_35735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (14))){
var inst_35643 = (state_35677[(7)]);
var inst_35645 = cljs.core.chunked_seq_QMARK_.call(null,inst_35643);
var state_35677__$1 = state_35677;
if(inst_35645){
var statearr_35708_35736 = state_35677__$1;
(statearr_35708_35736[(1)] = (17));

} else {
var statearr_35709_35737 = state_35677__$1;
(statearr_35709_35737[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (16))){
var inst_35661 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35710_35738 = state_35677__$1;
(statearr_35710_35738[(2)] = inst_35661);

(statearr_35710_35738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (10))){
var inst_35630 = (state_35677[(10)]);
var inst_35632 = (state_35677[(12)]);
var inst_35637 = cljs.core._nth.call(null,inst_35630,inst_35632);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35677__$1,(13),out,inst_35637);
} else {
if((state_val_35678 === (18))){
var inst_35643 = (state_35677[(7)]);
var inst_35652 = cljs.core.first.call(null,inst_35643);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35677__$1,(20),out,inst_35652);
} else {
if((state_val_35678 === (8))){
var inst_35631 = (state_35677[(11)]);
var inst_35632 = (state_35677[(12)]);
var inst_35634 = (inst_35632 < inst_35631);
var inst_35635 = inst_35634;
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35635)){
var statearr_35711_35739 = state_35677__$1;
(statearr_35711_35739[(1)] = (10));

} else {
var statearr_35712_35740 = state_35677__$1;
(statearr_35712_35740[(1)] = (11));

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
});})(c__34075__auto__))
;
return ((function (switch__33987__auto__,c__34075__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33988__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33988__auto____0 = (function (){
var statearr_35713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35713[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33988__auto__);

(statearr_35713[(1)] = (1));

return statearr_35713;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33988__auto____1 = (function (state_35677){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35714){if((e35714 instanceof Object)){
var ex__33991__auto__ = e35714;
var statearr_35715_35741 = state_35677;
(statearr_35715_35741[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35742 = state_35677;
state_35677 = G__35742;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33988__auto__ = function(state_35677){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33988__auto____1.call(this,state_35677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33988__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33988__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto__))
})();
var state__34077__auto__ = (function (){var statearr_35716 = f__34076__auto__.call(null);
(statearr_35716[(6)] = c__34075__auto__);

return statearr_35716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto__))
);

return c__34075__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35744 = arguments.length;
switch (G__35744) {
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
var G__35747 = arguments.length;
switch (G__35747) {
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
var G__35750 = arguments.length;
switch (G__35750) {
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
var c__34075__auto___35797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35797,out){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35797,out){
return (function (state_35774){
var state_val_35775 = (state_35774[(1)]);
if((state_val_35775 === (7))){
var inst_35769 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35776_35798 = state_35774__$1;
(statearr_35776_35798[(2)] = inst_35769);

(statearr_35776_35798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (1))){
var inst_35751 = null;
var state_35774__$1 = (function (){var statearr_35777 = state_35774;
(statearr_35777[(7)] = inst_35751);

return statearr_35777;
})();
var statearr_35778_35799 = state_35774__$1;
(statearr_35778_35799[(2)] = null);

(statearr_35778_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (4))){
var inst_35754 = (state_35774[(8)]);
var inst_35754__$1 = (state_35774[(2)]);
var inst_35755 = (inst_35754__$1 == null);
var inst_35756 = cljs.core.not.call(null,inst_35755);
var state_35774__$1 = (function (){var statearr_35779 = state_35774;
(statearr_35779[(8)] = inst_35754__$1);

return statearr_35779;
})();
if(inst_35756){
var statearr_35780_35800 = state_35774__$1;
(statearr_35780_35800[(1)] = (5));

} else {
var statearr_35781_35801 = state_35774__$1;
(statearr_35781_35801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (6))){
var state_35774__$1 = state_35774;
var statearr_35782_35802 = state_35774__$1;
(statearr_35782_35802[(2)] = null);

(statearr_35782_35802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (3))){
var inst_35771 = (state_35774[(2)]);
var inst_35772 = cljs.core.async.close_BANG_.call(null,out);
var state_35774__$1 = (function (){var statearr_35783 = state_35774;
(statearr_35783[(9)] = inst_35771);

return statearr_35783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35774__$1,inst_35772);
} else {
if((state_val_35775 === (2))){
var state_35774__$1 = state_35774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35774__$1,(4),ch);
} else {
if((state_val_35775 === (11))){
var inst_35754 = (state_35774[(8)]);
var inst_35763 = (state_35774[(2)]);
var inst_35751 = inst_35754;
var state_35774__$1 = (function (){var statearr_35784 = state_35774;
(statearr_35784[(7)] = inst_35751);

(statearr_35784[(10)] = inst_35763);

return statearr_35784;
})();
var statearr_35785_35803 = state_35774__$1;
(statearr_35785_35803[(2)] = null);

(statearr_35785_35803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (9))){
var inst_35754 = (state_35774[(8)]);
var state_35774__$1 = state_35774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35774__$1,(11),out,inst_35754);
} else {
if((state_val_35775 === (5))){
var inst_35754 = (state_35774[(8)]);
var inst_35751 = (state_35774[(7)]);
var inst_35758 = cljs.core._EQ_.call(null,inst_35754,inst_35751);
var state_35774__$1 = state_35774;
if(inst_35758){
var statearr_35787_35804 = state_35774__$1;
(statearr_35787_35804[(1)] = (8));

} else {
var statearr_35788_35805 = state_35774__$1;
(statearr_35788_35805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (10))){
var inst_35766 = (state_35774[(2)]);
var state_35774__$1 = state_35774;
var statearr_35789_35806 = state_35774__$1;
(statearr_35789_35806[(2)] = inst_35766);

(statearr_35789_35806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35775 === (8))){
var inst_35751 = (state_35774[(7)]);
var tmp35786 = inst_35751;
var inst_35751__$1 = tmp35786;
var state_35774__$1 = (function (){var statearr_35790 = state_35774;
(statearr_35790[(7)] = inst_35751__$1);

return statearr_35790;
})();
var statearr_35791_35807 = state_35774__$1;
(statearr_35791_35807[(2)] = null);

(statearr_35791_35807[(1)] = (2));


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
});})(c__34075__auto___35797,out))
;
return ((function (switch__33987__auto__,c__34075__auto___35797,out){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35792[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35792[(1)] = (1));

return statearr_35792;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35774){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35793){if((e35793 instanceof Object)){
var ex__33991__auto__ = e35793;
var statearr_35794_35808 = state_35774;
(statearr_35794_35808[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35809 = state_35774;
state_35774 = G__35809;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35797,out))
})();
var state__34077__auto__ = (function (){var statearr_35795 = f__34076__auto__.call(null);
(statearr_35795[(6)] = c__34075__auto___35797);

return statearr_35795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35797,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35811 = arguments.length;
switch (G__35811) {
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
var c__34075__auto___35877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35877,out){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35877,out){
return (function (state_35849){
var state_val_35850 = (state_35849[(1)]);
if((state_val_35850 === (7))){
var inst_35845 = (state_35849[(2)]);
var state_35849__$1 = state_35849;
var statearr_35851_35878 = state_35849__$1;
(statearr_35851_35878[(2)] = inst_35845);

(statearr_35851_35878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (1))){
var inst_35812 = (new Array(n));
var inst_35813 = inst_35812;
var inst_35814 = (0);
var state_35849__$1 = (function (){var statearr_35852 = state_35849;
(statearr_35852[(7)] = inst_35813);

(statearr_35852[(8)] = inst_35814);

return statearr_35852;
})();
var statearr_35853_35879 = state_35849__$1;
(statearr_35853_35879[(2)] = null);

(statearr_35853_35879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (4))){
var inst_35817 = (state_35849[(9)]);
var inst_35817__$1 = (state_35849[(2)]);
var inst_35818 = (inst_35817__$1 == null);
var inst_35819 = cljs.core.not.call(null,inst_35818);
var state_35849__$1 = (function (){var statearr_35854 = state_35849;
(statearr_35854[(9)] = inst_35817__$1);

return statearr_35854;
})();
if(inst_35819){
var statearr_35855_35880 = state_35849__$1;
(statearr_35855_35880[(1)] = (5));

} else {
var statearr_35856_35881 = state_35849__$1;
(statearr_35856_35881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (15))){
var inst_35839 = (state_35849[(2)]);
var state_35849__$1 = state_35849;
var statearr_35857_35882 = state_35849__$1;
(statearr_35857_35882[(2)] = inst_35839);

(statearr_35857_35882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (13))){
var state_35849__$1 = state_35849;
var statearr_35858_35883 = state_35849__$1;
(statearr_35858_35883[(2)] = null);

(statearr_35858_35883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (6))){
var inst_35814 = (state_35849[(8)]);
var inst_35835 = (inst_35814 > (0));
var state_35849__$1 = state_35849;
if(cljs.core.truth_(inst_35835)){
var statearr_35859_35884 = state_35849__$1;
(statearr_35859_35884[(1)] = (12));

} else {
var statearr_35860_35885 = state_35849__$1;
(statearr_35860_35885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (3))){
var inst_35847 = (state_35849[(2)]);
var state_35849__$1 = state_35849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35849__$1,inst_35847);
} else {
if((state_val_35850 === (12))){
var inst_35813 = (state_35849[(7)]);
var inst_35837 = cljs.core.vec.call(null,inst_35813);
var state_35849__$1 = state_35849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35849__$1,(15),out,inst_35837);
} else {
if((state_val_35850 === (2))){
var state_35849__$1 = state_35849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35849__$1,(4),ch);
} else {
if((state_val_35850 === (11))){
var inst_35829 = (state_35849[(2)]);
var inst_35830 = (new Array(n));
var inst_35813 = inst_35830;
var inst_35814 = (0);
var state_35849__$1 = (function (){var statearr_35861 = state_35849;
(statearr_35861[(7)] = inst_35813);

(statearr_35861[(10)] = inst_35829);

(statearr_35861[(8)] = inst_35814);

return statearr_35861;
})();
var statearr_35862_35886 = state_35849__$1;
(statearr_35862_35886[(2)] = null);

(statearr_35862_35886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (9))){
var inst_35813 = (state_35849[(7)]);
var inst_35827 = cljs.core.vec.call(null,inst_35813);
var state_35849__$1 = state_35849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35849__$1,(11),out,inst_35827);
} else {
if((state_val_35850 === (5))){
var inst_35813 = (state_35849[(7)]);
var inst_35822 = (state_35849[(11)]);
var inst_35817 = (state_35849[(9)]);
var inst_35814 = (state_35849[(8)]);
var inst_35821 = (inst_35813[inst_35814] = inst_35817);
var inst_35822__$1 = (inst_35814 + (1));
var inst_35823 = (inst_35822__$1 < n);
var state_35849__$1 = (function (){var statearr_35863 = state_35849;
(statearr_35863[(11)] = inst_35822__$1);

(statearr_35863[(12)] = inst_35821);

return statearr_35863;
})();
if(cljs.core.truth_(inst_35823)){
var statearr_35864_35887 = state_35849__$1;
(statearr_35864_35887[(1)] = (8));

} else {
var statearr_35865_35888 = state_35849__$1;
(statearr_35865_35888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (14))){
var inst_35842 = (state_35849[(2)]);
var inst_35843 = cljs.core.async.close_BANG_.call(null,out);
var state_35849__$1 = (function (){var statearr_35867 = state_35849;
(statearr_35867[(13)] = inst_35842);

return statearr_35867;
})();
var statearr_35868_35889 = state_35849__$1;
(statearr_35868_35889[(2)] = inst_35843);

(statearr_35868_35889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (10))){
var inst_35833 = (state_35849[(2)]);
var state_35849__$1 = state_35849;
var statearr_35869_35890 = state_35849__$1;
(statearr_35869_35890[(2)] = inst_35833);

(statearr_35869_35890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35850 === (8))){
var inst_35813 = (state_35849[(7)]);
var inst_35822 = (state_35849[(11)]);
var tmp35866 = inst_35813;
var inst_35813__$1 = tmp35866;
var inst_35814 = inst_35822;
var state_35849__$1 = (function (){var statearr_35870 = state_35849;
(statearr_35870[(7)] = inst_35813__$1);

(statearr_35870[(8)] = inst_35814);

return statearr_35870;
})();
var statearr_35871_35891 = state_35849__$1;
(statearr_35871_35891[(2)] = null);

(statearr_35871_35891[(1)] = (2));


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
});})(c__34075__auto___35877,out))
;
return ((function (switch__33987__auto__,c__34075__auto___35877,out){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35872[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35872[(1)] = (1));

return statearr_35872;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35849){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35873){if((e35873 instanceof Object)){
var ex__33991__auto__ = e35873;
var statearr_35874_35892 = state_35849;
(statearr_35874_35892[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35893 = state_35849;
state_35849 = G__35893;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35877,out))
})();
var state__34077__auto__ = (function (){var statearr_35875 = f__34076__auto__.call(null);
(statearr_35875[(6)] = c__34075__auto___35877);

return statearr_35875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35877,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35895 = arguments.length;
switch (G__35895) {
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
var c__34075__auto___35965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34075__auto___35965,out){
return (function (){
var f__34076__auto__ = (function (){var switch__33987__auto__ = ((function (c__34075__auto___35965,out){
return (function (state_35937){
var state_val_35938 = (state_35937[(1)]);
if((state_val_35938 === (7))){
var inst_35933 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35939_35966 = state_35937__$1;
(statearr_35939_35966[(2)] = inst_35933);

(statearr_35939_35966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (1))){
var inst_35896 = [];
var inst_35897 = inst_35896;
var inst_35898 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35937__$1 = (function (){var statearr_35940 = state_35937;
(statearr_35940[(7)] = inst_35898);

(statearr_35940[(8)] = inst_35897);

return statearr_35940;
})();
var statearr_35941_35967 = state_35937__$1;
(statearr_35941_35967[(2)] = null);

(statearr_35941_35967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (4))){
var inst_35901 = (state_35937[(9)]);
var inst_35901__$1 = (state_35937[(2)]);
var inst_35902 = (inst_35901__$1 == null);
var inst_35903 = cljs.core.not.call(null,inst_35902);
var state_35937__$1 = (function (){var statearr_35942 = state_35937;
(statearr_35942[(9)] = inst_35901__$1);

return statearr_35942;
})();
if(inst_35903){
var statearr_35943_35968 = state_35937__$1;
(statearr_35943_35968[(1)] = (5));

} else {
var statearr_35944_35969 = state_35937__$1;
(statearr_35944_35969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (15))){
var inst_35927 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35945_35970 = state_35937__$1;
(statearr_35945_35970[(2)] = inst_35927);

(statearr_35945_35970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (13))){
var state_35937__$1 = state_35937;
var statearr_35946_35971 = state_35937__$1;
(statearr_35946_35971[(2)] = null);

(statearr_35946_35971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (6))){
var inst_35897 = (state_35937[(8)]);
var inst_35922 = inst_35897.length;
var inst_35923 = (inst_35922 > (0));
var state_35937__$1 = state_35937;
if(cljs.core.truth_(inst_35923)){
var statearr_35947_35972 = state_35937__$1;
(statearr_35947_35972[(1)] = (12));

} else {
var statearr_35948_35973 = state_35937__$1;
(statearr_35948_35973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (3))){
var inst_35935 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35937__$1,inst_35935);
} else {
if((state_val_35938 === (12))){
var inst_35897 = (state_35937[(8)]);
var inst_35925 = cljs.core.vec.call(null,inst_35897);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35937__$1,(15),out,inst_35925);
} else {
if((state_val_35938 === (2))){
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35937__$1,(4),ch);
} else {
if((state_val_35938 === (11))){
var inst_35901 = (state_35937[(9)]);
var inst_35905 = (state_35937[(10)]);
var inst_35915 = (state_35937[(2)]);
var inst_35916 = [];
var inst_35917 = inst_35916.push(inst_35901);
var inst_35897 = inst_35916;
var inst_35898 = inst_35905;
var state_35937__$1 = (function (){var statearr_35949 = state_35937;
(statearr_35949[(11)] = inst_35917);

(statearr_35949[(7)] = inst_35898);

(statearr_35949[(8)] = inst_35897);

(statearr_35949[(12)] = inst_35915);

return statearr_35949;
})();
var statearr_35950_35974 = state_35937__$1;
(statearr_35950_35974[(2)] = null);

(statearr_35950_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (9))){
var inst_35897 = (state_35937[(8)]);
var inst_35913 = cljs.core.vec.call(null,inst_35897);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35937__$1,(11),out,inst_35913);
} else {
if((state_val_35938 === (5))){
var inst_35901 = (state_35937[(9)]);
var inst_35898 = (state_35937[(7)]);
var inst_35905 = (state_35937[(10)]);
var inst_35905__$1 = f.call(null,inst_35901);
var inst_35906 = cljs.core._EQ_.call(null,inst_35905__$1,inst_35898);
var inst_35907 = cljs.core.keyword_identical_QMARK_.call(null,inst_35898,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35908 = (inst_35906) || (inst_35907);
var state_35937__$1 = (function (){var statearr_35951 = state_35937;
(statearr_35951[(10)] = inst_35905__$1);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35908)){
var statearr_35952_35975 = state_35937__$1;
(statearr_35952_35975[(1)] = (8));

} else {
var statearr_35953_35976 = state_35937__$1;
(statearr_35953_35976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (14))){
var inst_35930 = (state_35937[(2)]);
var inst_35931 = cljs.core.async.close_BANG_.call(null,out);
var state_35937__$1 = (function (){var statearr_35955 = state_35937;
(statearr_35955[(13)] = inst_35930);

return statearr_35955;
})();
var statearr_35956_35977 = state_35937__$1;
(statearr_35956_35977[(2)] = inst_35931);

(statearr_35956_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (10))){
var inst_35920 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35957_35978 = state_35937__$1;
(statearr_35957_35978[(2)] = inst_35920);

(statearr_35957_35978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (8))){
var inst_35901 = (state_35937[(9)]);
var inst_35905 = (state_35937[(10)]);
var inst_35897 = (state_35937[(8)]);
var inst_35910 = inst_35897.push(inst_35901);
var tmp35954 = inst_35897;
var inst_35897__$1 = tmp35954;
var inst_35898 = inst_35905;
var state_35937__$1 = (function (){var statearr_35958 = state_35937;
(statearr_35958[(7)] = inst_35898);

(statearr_35958[(14)] = inst_35910);

(statearr_35958[(8)] = inst_35897__$1);

return statearr_35958;
})();
var statearr_35959_35979 = state_35937__$1;
(statearr_35959_35979[(2)] = null);

(statearr_35959_35979[(1)] = (2));


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
});})(c__34075__auto___35965,out))
;
return ((function (switch__33987__auto__,c__34075__auto___35965,out){
return (function() {
var cljs$core$async$state_machine__33988__auto__ = null;
var cljs$core$async$state_machine__33988__auto____0 = (function (){
var statearr_35960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35960[(0)] = cljs$core$async$state_machine__33988__auto__);

(statearr_35960[(1)] = (1));

return statearr_35960;
});
var cljs$core$async$state_machine__33988__auto____1 = (function (state_35937){
while(true){
var ret_value__33989__auto__ = (function (){try{while(true){
var result__33990__auto__ = switch__33987__auto__.call(null,state_35937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33990__auto__;
}
break;
}
}catch (e35961){if((e35961 instanceof Object)){
var ex__33991__auto__ = e35961;
var statearr_35962_35980 = state_35937;
(statearr_35962_35980[(5)] = ex__33991__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35981 = state_35937;
state_35937 = G__35981;
continue;
} else {
return ret_value__33989__auto__;
}
break;
}
});
cljs$core$async$state_machine__33988__auto__ = function(state_35937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33988__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33988__auto____1.call(this,state_35937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33988__auto____0;
cljs$core$async$state_machine__33988__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33988__auto____1;
return cljs$core$async$state_machine__33988__auto__;
})()
;})(switch__33987__auto__,c__34075__auto___35965,out))
})();
var state__34077__auto__ = (function (){var statearr_35963 = f__34076__auto__.call(null);
(statearr_35963[(6)] = c__34075__auto___35965);

return statearr_35963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34077__auto__);
});})(c__34075__auto___35965,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518580806990
