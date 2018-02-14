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
var G__47559 = arguments.length;
switch (G__47559) {
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
if(typeof cljs.core.async.t_cljs$core$async47560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47560 = (function (f,blockable,meta47561){
this.f = f;
this.blockable = blockable;
this.meta47561 = meta47561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47562,meta47561__$1){
var self__ = this;
var _47562__$1 = this;
return (new cljs.core.async.t_cljs$core$async47560(self__.f,self__.blockable,meta47561__$1));
});

cljs.core.async.t_cljs$core$async47560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47562){
var self__ = this;
var _47562__$1 = this;
return self__.meta47561;
});

cljs.core.async.t_cljs$core$async47560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47561","meta47561",-258425964,null)], null);
});

cljs.core.async.t_cljs$core$async47560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47560";

cljs.core.async.t_cljs$core$async47560.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async47560");
});

cljs.core.async.__GT_t_cljs$core$async47560 = (function cljs$core$async$__GT_t_cljs$core$async47560(f__$1,blockable__$1,meta47561){
return (new cljs.core.async.t_cljs$core$async47560(f__$1,blockable__$1,meta47561));
});

}

return (new cljs.core.async.t_cljs$core$async47560(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47566 = arguments.length;
switch (G__47566) {
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
var G__47569 = arguments.length;
switch (G__47569) {
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
var G__47572 = arguments.length;
switch (G__47572) {
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
var val_47574 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47574);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47574,ret){
return (function (){
return fn1.call(null,val_47574);
});})(val_47574,ret))
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
var G__47576 = arguments.length;
switch (G__47576) {
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
var n__29368__auto___47578 = n;
var x_47579 = (0);
while(true){
if((x_47579 < n__29368__auto___47578)){
(a[x_47579] = (0));

var G__47580 = (x_47579 + (1));
x_47579 = G__47580;
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

var G__47581 = (i + (1));
i = G__47581;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47582 = (function (flag,meta47583){
this.flag = flag;
this.meta47583 = meta47583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47584,meta47583__$1){
var self__ = this;
var _47584__$1 = this;
return (new cljs.core.async.t_cljs$core$async47582(self__.flag,meta47583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47584){
var self__ = this;
var _47584__$1 = this;
return self__.meta47583;
});})(flag))
;

cljs.core.async.t_cljs$core$async47582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47583","meta47583",1670558482,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47582";

cljs.core.async.t_cljs$core$async47582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async47582");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47582(flag__$1,meta47583){
return (new cljs.core.async.t_cljs$core$async47582(flag__$1,meta47583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47582(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47585 = (function (flag,cb,meta47586){
this.flag = flag;
this.cb = cb;
this.meta47586 = meta47586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47587,meta47586__$1){
var self__ = this;
var _47587__$1 = this;
return (new cljs.core.async.t_cljs$core$async47585(self__.flag,self__.cb,meta47586__$1));
});

cljs.core.async.t_cljs$core$async47585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47587){
var self__ = this;
var _47587__$1 = this;
return self__.meta47586;
});

cljs.core.async.t_cljs$core$async47585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47586","meta47586",-1214444467,null)], null);
});

cljs.core.async.t_cljs$core$async47585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47585";

cljs.core.async.t_cljs$core$async47585.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async47585");
});

cljs.core.async.__GT_t_cljs$core$async47585 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47585(flag__$1,cb__$1,meta47586){
return (new cljs.core.async.t_cljs$core$async47585(flag__$1,cb__$1,meta47586));
});

}

return (new cljs.core.async.t_cljs$core$async47585(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47588_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47589_SHARP_,port], null));
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
var G__47590 = (i + (1));
i = G__47590;
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
var len__29592__auto___47596 = arguments.length;
var i__29593__auto___47597 = (0);
while(true){
if((i__29593__auto___47597 < len__29592__auto___47596)){
args__29599__auto__.push((arguments[i__29593__auto___47597]));

var G__47598 = (i__29593__auto___47597 + (1));
i__29593__auto___47597 = G__47598;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47593){
var map__47594 = p__47593;
var map__47594__$1 = ((((!((map__47594 == null)))?((((map__47594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47594):map__47594);
var opts = map__47594__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47591){
var G__47592 = cljs.core.first.call(null,seq47591);
var seq47591__$1 = cljs.core.next.call(null,seq47591);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47592,seq47591__$1);
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
var G__47600 = arguments.length;
switch (G__47600) {
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
var c__34071__auto___47646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___47646){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___47646){
return (function (state_47624){
var state_val_47625 = (state_47624[(1)]);
if((state_val_47625 === (7))){
var inst_47620 = (state_47624[(2)]);
var state_47624__$1 = state_47624;
var statearr_47626_47647 = state_47624__$1;
(statearr_47626_47647[(2)] = inst_47620);

(statearr_47626_47647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (1))){
var state_47624__$1 = state_47624;
var statearr_47627_47648 = state_47624__$1;
(statearr_47627_47648[(2)] = null);

(statearr_47627_47648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (4))){
var inst_47603 = (state_47624[(7)]);
var inst_47603__$1 = (state_47624[(2)]);
var inst_47604 = (inst_47603__$1 == null);
var state_47624__$1 = (function (){var statearr_47628 = state_47624;
(statearr_47628[(7)] = inst_47603__$1);

return statearr_47628;
})();
if(cljs.core.truth_(inst_47604)){
var statearr_47629_47649 = state_47624__$1;
(statearr_47629_47649[(1)] = (5));

} else {
var statearr_47630_47650 = state_47624__$1;
(statearr_47630_47650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (13))){
var state_47624__$1 = state_47624;
var statearr_47631_47651 = state_47624__$1;
(statearr_47631_47651[(2)] = null);

(statearr_47631_47651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (6))){
var inst_47603 = (state_47624[(7)]);
var state_47624__$1 = state_47624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47624__$1,(11),to,inst_47603);
} else {
if((state_val_47625 === (3))){
var inst_47622 = (state_47624[(2)]);
var state_47624__$1 = state_47624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47624__$1,inst_47622);
} else {
if((state_val_47625 === (12))){
var state_47624__$1 = state_47624;
var statearr_47632_47652 = state_47624__$1;
(statearr_47632_47652[(2)] = null);

(statearr_47632_47652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (2))){
var state_47624__$1 = state_47624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47624__$1,(4),from);
} else {
if((state_val_47625 === (11))){
var inst_47613 = (state_47624[(2)]);
var state_47624__$1 = state_47624;
if(cljs.core.truth_(inst_47613)){
var statearr_47633_47653 = state_47624__$1;
(statearr_47633_47653[(1)] = (12));

} else {
var statearr_47634_47654 = state_47624__$1;
(statearr_47634_47654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (9))){
var state_47624__$1 = state_47624;
var statearr_47635_47655 = state_47624__$1;
(statearr_47635_47655[(2)] = null);

(statearr_47635_47655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (5))){
var state_47624__$1 = state_47624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47636_47656 = state_47624__$1;
(statearr_47636_47656[(1)] = (8));

} else {
var statearr_47637_47657 = state_47624__$1;
(statearr_47637_47657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (14))){
var inst_47618 = (state_47624[(2)]);
var state_47624__$1 = state_47624;
var statearr_47638_47658 = state_47624__$1;
(statearr_47638_47658[(2)] = inst_47618);

(statearr_47638_47658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (10))){
var inst_47610 = (state_47624[(2)]);
var state_47624__$1 = state_47624;
var statearr_47639_47659 = state_47624__$1;
(statearr_47639_47659[(2)] = inst_47610);

(statearr_47639_47659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47625 === (8))){
var inst_47607 = cljs.core.async.close_BANG_.call(null,to);
var state_47624__$1 = state_47624;
var statearr_47640_47660 = state_47624__$1;
(statearr_47640_47660[(2)] = inst_47607);

(statearr_47640_47660[(1)] = (10));


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
});})(c__34071__auto___47646))
;
return ((function (switch__33983__auto__,c__34071__auto___47646){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_47641 = [null,null,null,null,null,null,null,null];
(statearr_47641[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_47641[(1)] = (1));

return statearr_47641;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_47624){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47642){if((e47642 instanceof Object)){
var ex__33987__auto__ = e47642;
var statearr_47643_47661 = state_47624;
(statearr_47643_47661[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47662 = state_47624;
state_47624 = G__47662;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_47624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_47624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___47646))
})();
var state__34073__auto__ = (function (){var statearr_47644 = f__34072__auto__.call(null);
(statearr_47644[(6)] = c__34071__auto___47646);

return statearr_47644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___47646))
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
return (function (p__47663){
var vec__47664 = p__47663;
var v = cljs.core.nth.call(null,vec__47664,(0),null);
var p = cljs.core.nth.call(null,vec__47664,(1),null);
var job = vec__47664;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34071__auto___47835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___47835,res,vec__47664,v,p,job,jobs,results){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___47835,res,vec__47664,v,p,job,jobs,results){
return (function (state_47671){
var state_val_47672 = (state_47671[(1)]);
if((state_val_47672 === (1))){
var state_47671__$1 = state_47671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47671__$1,(2),res,v);
} else {
if((state_val_47672 === (2))){
var inst_47668 = (state_47671[(2)]);
var inst_47669 = cljs.core.async.close_BANG_.call(null,res);
var state_47671__$1 = (function (){var statearr_47673 = state_47671;
(statearr_47673[(7)] = inst_47668);

return statearr_47673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47671__$1,inst_47669);
} else {
return null;
}
}
});})(c__34071__auto___47835,res,vec__47664,v,p,job,jobs,results))
;
return ((function (switch__33983__auto__,c__34071__auto___47835,res,vec__47664,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0 = (function (){
var statearr_47674 = [null,null,null,null,null,null,null,null];
(statearr_47674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__);

(statearr_47674[(1)] = (1));

return statearr_47674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1 = (function (state_47671){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47675){if((e47675 instanceof Object)){
var ex__33987__auto__ = e47675;
var statearr_47676_47836 = state_47671;
(statearr_47676_47836[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47837 = state_47671;
state_47671 = G__47837;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = function(state_47671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1.call(this,state_47671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___47835,res,vec__47664,v,p,job,jobs,results))
})();
var state__34073__auto__ = (function (){var statearr_47677 = f__34072__auto__.call(null);
(statearr_47677[(6)] = c__34071__auto___47835);

return statearr_47677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___47835,res,vec__47664,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47678){
var vec__47679 = p__47678;
var v = cljs.core.nth.call(null,vec__47679,(0),null);
var p = cljs.core.nth.call(null,vec__47679,(1),null);
var job = vec__47679;
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
var n__29368__auto___47838 = n;
var __47839 = (0);
while(true){
if((__47839 < n__29368__auto___47838)){
var G__47682_47840 = type;
var G__47682_47841__$1 = (((G__47682_47840 instanceof cljs.core.Keyword))?G__47682_47840.fqn:null);
switch (G__47682_47841__$1) {
case "compute":
var c__34071__auto___47843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47839,c__34071__auto___47843,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (__47839,c__34071__auto___47843,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async){
return (function (state_47695){
var state_val_47696 = (state_47695[(1)]);
if((state_val_47696 === (1))){
var state_47695__$1 = state_47695;
var statearr_47697_47844 = state_47695__$1;
(statearr_47697_47844[(2)] = null);

(statearr_47697_47844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47696 === (2))){
var state_47695__$1 = state_47695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47695__$1,(4),jobs);
} else {
if((state_val_47696 === (3))){
var inst_47693 = (state_47695[(2)]);
var state_47695__$1 = state_47695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47695__$1,inst_47693);
} else {
if((state_val_47696 === (4))){
var inst_47685 = (state_47695[(2)]);
var inst_47686 = process.call(null,inst_47685);
var state_47695__$1 = state_47695;
if(cljs.core.truth_(inst_47686)){
var statearr_47698_47845 = state_47695__$1;
(statearr_47698_47845[(1)] = (5));

} else {
var statearr_47699_47846 = state_47695__$1;
(statearr_47699_47846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47696 === (5))){
var state_47695__$1 = state_47695;
var statearr_47700_47847 = state_47695__$1;
(statearr_47700_47847[(2)] = null);

(statearr_47700_47847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47696 === (6))){
var state_47695__$1 = state_47695;
var statearr_47701_47848 = state_47695__$1;
(statearr_47701_47848[(2)] = null);

(statearr_47701_47848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47696 === (7))){
var inst_47691 = (state_47695[(2)]);
var state_47695__$1 = state_47695;
var statearr_47702_47849 = state_47695__$1;
(statearr_47702_47849[(2)] = inst_47691);

(statearr_47702_47849[(1)] = (3));


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
});})(__47839,c__34071__auto___47843,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async))
;
return ((function (__47839,switch__33983__auto__,c__34071__auto___47843,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0 = (function (){
var statearr_47703 = [null,null,null,null,null,null,null];
(statearr_47703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__);

(statearr_47703[(1)] = (1));

return statearr_47703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1 = (function (state_47695){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47704){if((e47704 instanceof Object)){
var ex__33987__auto__ = e47704;
var statearr_47705_47850 = state_47695;
(statearr_47705_47850[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47851 = state_47695;
state_47695 = G__47851;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = function(state_47695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1.call(this,state_47695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__;
})()
;})(__47839,switch__33983__auto__,c__34071__auto___47843,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_47706 = f__34072__auto__.call(null);
(statearr_47706[(6)] = c__34071__auto___47843);

return statearr_47706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(__47839,c__34071__auto___47843,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async))
);


break;
case "async":
var c__34071__auto___47852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47839,c__34071__auto___47852,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (__47839,c__34071__auto___47852,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async){
return (function (state_47719){
var state_val_47720 = (state_47719[(1)]);
if((state_val_47720 === (1))){
var state_47719__$1 = state_47719;
var statearr_47721_47853 = state_47719__$1;
(statearr_47721_47853[(2)] = null);

(statearr_47721_47853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47720 === (2))){
var state_47719__$1 = state_47719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47719__$1,(4),jobs);
} else {
if((state_val_47720 === (3))){
var inst_47717 = (state_47719[(2)]);
var state_47719__$1 = state_47719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47719__$1,inst_47717);
} else {
if((state_val_47720 === (4))){
var inst_47709 = (state_47719[(2)]);
var inst_47710 = async.call(null,inst_47709);
var state_47719__$1 = state_47719;
if(cljs.core.truth_(inst_47710)){
var statearr_47722_47854 = state_47719__$1;
(statearr_47722_47854[(1)] = (5));

} else {
var statearr_47723_47855 = state_47719__$1;
(statearr_47723_47855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47720 === (5))){
var state_47719__$1 = state_47719;
var statearr_47724_47856 = state_47719__$1;
(statearr_47724_47856[(2)] = null);

(statearr_47724_47856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47720 === (6))){
var state_47719__$1 = state_47719;
var statearr_47725_47857 = state_47719__$1;
(statearr_47725_47857[(2)] = null);

(statearr_47725_47857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47720 === (7))){
var inst_47715 = (state_47719[(2)]);
var state_47719__$1 = state_47719;
var statearr_47726_47858 = state_47719__$1;
(statearr_47726_47858[(2)] = inst_47715);

(statearr_47726_47858[(1)] = (3));


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
});})(__47839,c__34071__auto___47852,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async))
;
return ((function (__47839,switch__33983__auto__,c__34071__auto___47852,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0 = (function (){
var statearr_47727 = [null,null,null,null,null,null,null];
(statearr_47727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__);

(statearr_47727[(1)] = (1));

return statearr_47727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1 = (function (state_47719){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47728){if((e47728 instanceof Object)){
var ex__33987__auto__ = e47728;
var statearr_47729_47859 = state_47719;
(statearr_47729_47859[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47860 = state_47719;
state_47719 = G__47860;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = function(state_47719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1.call(this,state_47719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__;
})()
;})(__47839,switch__33983__auto__,c__34071__auto___47852,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_47730 = f__34072__auto__.call(null);
(statearr_47730[(6)] = c__34071__auto___47852);

return statearr_47730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(__47839,c__34071__auto___47852,G__47682_47840,G__47682_47841__$1,n__29368__auto___47838,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47682_47841__$1)].join('')));

}

var G__47861 = (__47839 + (1));
__47839 = G__47861;
continue;
} else {
}
break;
}

var c__34071__auto___47862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___47862,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___47862,jobs,results,process,async){
return (function (state_47752){
var state_val_47753 = (state_47752[(1)]);
if((state_val_47753 === (1))){
var state_47752__$1 = state_47752;
var statearr_47754_47863 = state_47752__$1;
(statearr_47754_47863[(2)] = null);

(statearr_47754_47863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (2))){
var state_47752__$1 = state_47752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47752__$1,(4),from);
} else {
if((state_val_47753 === (3))){
var inst_47750 = (state_47752[(2)]);
var state_47752__$1 = state_47752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47752__$1,inst_47750);
} else {
if((state_val_47753 === (4))){
var inst_47733 = (state_47752[(7)]);
var inst_47733__$1 = (state_47752[(2)]);
var inst_47734 = (inst_47733__$1 == null);
var state_47752__$1 = (function (){var statearr_47755 = state_47752;
(statearr_47755[(7)] = inst_47733__$1);

return statearr_47755;
})();
if(cljs.core.truth_(inst_47734)){
var statearr_47756_47864 = state_47752__$1;
(statearr_47756_47864[(1)] = (5));

} else {
var statearr_47757_47865 = state_47752__$1;
(statearr_47757_47865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (5))){
var inst_47736 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47752__$1 = state_47752;
var statearr_47758_47866 = state_47752__$1;
(statearr_47758_47866[(2)] = inst_47736);

(statearr_47758_47866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (6))){
var inst_47738 = (state_47752[(8)]);
var inst_47733 = (state_47752[(7)]);
var inst_47738__$1 = cljs.core.async.chan.call(null,(1));
var inst_47739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47740 = [inst_47733,inst_47738__$1];
var inst_47741 = (new cljs.core.PersistentVector(null,2,(5),inst_47739,inst_47740,null));
var state_47752__$1 = (function (){var statearr_47759 = state_47752;
(statearr_47759[(8)] = inst_47738__$1);

return statearr_47759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47752__$1,(8),jobs,inst_47741);
} else {
if((state_val_47753 === (7))){
var inst_47748 = (state_47752[(2)]);
var state_47752__$1 = state_47752;
var statearr_47760_47867 = state_47752__$1;
(statearr_47760_47867[(2)] = inst_47748);

(statearr_47760_47867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47753 === (8))){
var inst_47738 = (state_47752[(8)]);
var inst_47743 = (state_47752[(2)]);
var state_47752__$1 = (function (){var statearr_47761 = state_47752;
(statearr_47761[(9)] = inst_47743);

return statearr_47761;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47752__$1,(9),results,inst_47738);
} else {
if((state_val_47753 === (9))){
var inst_47745 = (state_47752[(2)]);
var state_47752__$1 = (function (){var statearr_47762 = state_47752;
(statearr_47762[(10)] = inst_47745);

return statearr_47762;
})();
var statearr_47763_47868 = state_47752__$1;
(statearr_47763_47868[(2)] = null);

(statearr_47763_47868[(1)] = (2));


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
});})(c__34071__auto___47862,jobs,results,process,async))
;
return ((function (switch__33983__auto__,c__34071__auto___47862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0 = (function (){
var statearr_47764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__);

(statearr_47764[(1)] = (1));

return statearr_47764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1 = (function (state_47752){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47765){if((e47765 instanceof Object)){
var ex__33987__auto__ = e47765;
var statearr_47766_47869 = state_47752;
(statearr_47766_47869[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47870 = state_47752;
state_47752 = G__47870;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = function(state_47752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1.call(this,state_47752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___47862,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_47767 = f__34072__auto__.call(null);
(statearr_47767[(6)] = c__34071__auto___47862);

return statearr_47767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___47862,jobs,results,process,async))
);


var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,jobs,results,process,async){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__,jobs,results,process,async){
return (function (state_47805){
var state_val_47806 = (state_47805[(1)]);
if((state_val_47806 === (7))){
var inst_47801 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47807_47871 = state_47805__$1;
(statearr_47807_47871[(2)] = inst_47801);

(statearr_47807_47871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (20))){
var state_47805__$1 = state_47805;
var statearr_47808_47872 = state_47805__$1;
(statearr_47808_47872[(2)] = null);

(statearr_47808_47872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (1))){
var state_47805__$1 = state_47805;
var statearr_47809_47873 = state_47805__$1;
(statearr_47809_47873[(2)] = null);

(statearr_47809_47873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (4))){
var inst_47770 = (state_47805[(7)]);
var inst_47770__$1 = (state_47805[(2)]);
var inst_47771 = (inst_47770__$1 == null);
var state_47805__$1 = (function (){var statearr_47810 = state_47805;
(statearr_47810[(7)] = inst_47770__$1);

return statearr_47810;
})();
if(cljs.core.truth_(inst_47771)){
var statearr_47811_47874 = state_47805__$1;
(statearr_47811_47874[(1)] = (5));

} else {
var statearr_47812_47875 = state_47805__$1;
(statearr_47812_47875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (15))){
var inst_47783 = (state_47805[(8)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47805__$1,(18),to,inst_47783);
} else {
if((state_val_47806 === (21))){
var inst_47796 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47813_47876 = state_47805__$1;
(statearr_47813_47876[(2)] = inst_47796);

(statearr_47813_47876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (13))){
var inst_47798 = (state_47805[(2)]);
var state_47805__$1 = (function (){var statearr_47814 = state_47805;
(statearr_47814[(9)] = inst_47798);

return statearr_47814;
})();
var statearr_47815_47877 = state_47805__$1;
(statearr_47815_47877[(2)] = null);

(statearr_47815_47877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (6))){
var inst_47770 = (state_47805[(7)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47805__$1,(11),inst_47770);
} else {
if((state_val_47806 === (17))){
var inst_47791 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47791)){
var statearr_47816_47878 = state_47805__$1;
(statearr_47816_47878[(1)] = (19));

} else {
var statearr_47817_47879 = state_47805__$1;
(statearr_47817_47879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (3))){
var inst_47803 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47805__$1,inst_47803);
} else {
if((state_val_47806 === (12))){
var inst_47780 = (state_47805[(10)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47805__$1,(14),inst_47780);
} else {
if((state_val_47806 === (2))){
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47805__$1,(4),results);
} else {
if((state_val_47806 === (19))){
var state_47805__$1 = state_47805;
var statearr_47818_47880 = state_47805__$1;
(statearr_47818_47880[(2)] = null);

(statearr_47818_47880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (11))){
var inst_47780 = (state_47805[(2)]);
var state_47805__$1 = (function (){var statearr_47819 = state_47805;
(statearr_47819[(10)] = inst_47780);

return statearr_47819;
})();
var statearr_47820_47881 = state_47805__$1;
(statearr_47820_47881[(2)] = null);

(statearr_47820_47881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (9))){
var state_47805__$1 = state_47805;
var statearr_47821_47882 = state_47805__$1;
(statearr_47821_47882[(2)] = null);

(statearr_47821_47882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (5))){
var state_47805__$1 = state_47805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47822_47883 = state_47805__$1;
(statearr_47822_47883[(1)] = (8));

} else {
var statearr_47823_47884 = state_47805__$1;
(statearr_47823_47884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (14))){
var inst_47783 = (state_47805[(8)]);
var inst_47785 = (state_47805[(11)]);
var inst_47783__$1 = (state_47805[(2)]);
var inst_47784 = (inst_47783__$1 == null);
var inst_47785__$1 = cljs.core.not.call(null,inst_47784);
var state_47805__$1 = (function (){var statearr_47824 = state_47805;
(statearr_47824[(8)] = inst_47783__$1);

(statearr_47824[(11)] = inst_47785__$1);

return statearr_47824;
})();
if(inst_47785__$1){
var statearr_47825_47885 = state_47805__$1;
(statearr_47825_47885[(1)] = (15));

} else {
var statearr_47826_47886 = state_47805__$1;
(statearr_47826_47886[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (16))){
var inst_47785 = (state_47805[(11)]);
var state_47805__$1 = state_47805;
var statearr_47827_47887 = state_47805__$1;
(statearr_47827_47887[(2)] = inst_47785);

(statearr_47827_47887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (10))){
var inst_47777 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47828_47888 = state_47805__$1;
(statearr_47828_47888[(2)] = inst_47777);

(statearr_47828_47888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (18))){
var inst_47788 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47829_47889 = state_47805__$1;
(statearr_47829_47889[(2)] = inst_47788);

(statearr_47829_47889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (8))){
var inst_47774 = cljs.core.async.close_BANG_.call(null,to);
var state_47805__$1 = state_47805;
var statearr_47830_47890 = state_47805__$1;
(statearr_47830_47890[(2)] = inst_47774);

(statearr_47830_47890[(1)] = (10));


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
});})(c__34071__auto__,jobs,results,process,async))
;
return ((function (switch__33983__auto__,c__34071__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0 = (function (){
var statearr_47831 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__);

(statearr_47831[(1)] = (1));

return statearr_47831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1 = (function (state_47805){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47832){if((e47832 instanceof Object)){
var ex__33987__auto__ = e47832;
var statearr_47833_47891 = state_47805;
(statearr_47833_47891[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47892 = state_47805;
state_47805 = G__47892;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__ = function(state_47805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1.call(this,state_47805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__,jobs,results,process,async))
})();
var state__34073__auto__ = (function (){var statearr_47834 = f__34072__auto__.call(null);
(statearr_47834[(6)] = c__34071__auto__);

return statearr_47834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,jobs,results,process,async))
);

return c__34071__auto__;
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
var G__47894 = arguments.length;
switch (G__47894) {
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
var G__47897 = arguments.length;
switch (G__47897) {
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
var G__47900 = arguments.length;
switch (G__47900) {
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
var c__34071__auto___47949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___47949,tc,fc){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___47949,tc,fc){
return (function (state_47926){
var state_val_47927 = (state_47926[(1)]);
if((state_val_47927 === (7))){
var inst_47922 = (state_47926[(2)]);
var state_47926__$1 = state_47926;
var statearr_47928_47950 = state_47926__$1;
(statearr_47928_47950[(2)] = inst_47922);

(statearr_47928_47950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (1))){
var state_47926__$1 = state_47926;
var statearr_47929_47951 = state_47926__$1;
(statearr_47929_47951[(2)] = null);

(statearr_47929_47951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (4))){
var inst_47903 = (state_47926[(7)]);
var inst_47903__$1 = (state_47926[(2)]);
var inst_47904 = (inst_47903__$1 == null);
var state_47926__$1 = (function (){var statearr_47930 = state_47926;
(statearr_47930[(7)] = inst_47903__$1);

return statearr_47930;
})();
if(cljs.core.truth_(inst_47904)){
var statearr_47931_47952 = state_47926__$1;
(statearr_47931_47952[(1)] = (5));

} else {
var statearr_47932_47953 = state_47926__$1;
(statearr_47932_47953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (13))){
var state_47926__$1 = state_47926;
var statearr_47933_47954 = state_47926__$1;
(statearr_47933_47954[(2)] = null);

(statearr_47933_47954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (6))){
var inst_47903 = (state_47926[(7)]);
var inst_47909 = p.call(null,inst_47903);
var state_47926__$1 = state_47926;
if(cljs.core.truth_(inst_47909)){
var statearr_47934_47955 = state_47926__$1;
(statearr_47934_47955[(1)] = (9));

} else {
var statearr_47935_47956 = state_47926__$1;
(statearr_47935_47956[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (3))){
var inst_47924 = (state_47926[(2)]);
var state_47926__$1 = state_47926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47926__$1,inst_47924);
} else {
if((state_val_47927 === (12))){
var state_47926__$1 = state_47926;
var statearr_47936_47957 = state_47926__$1;
(statearr_47936_47957[(2)] = null);

(statearr_47936_47957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (2))){
var state_47926__$1 = state_47926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47926__$1,(4),ch);
} else {
if((state_val_47927 === (11))){
var inst_47903 = (state_47926[(7)]);
var inst_47913 = (state_47926[(2)]);
var state_47926__$1 = state_47926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47926__$1,(8),inst_47913,inst_47903);
} else {
if((state_val_47927 === (9))){
var state_47926__$1 = state_47926;
var statearr_47937_47958 = state_47926__$1;
(statearr_47937_47958[(2)] = tc);

(statearr_47937_47958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (5))){
var inst_47906 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47907 = cljs.core.async.close_BANG_.call(null,fc);
var state_47926__$1 = (function (){var statearr_47938 = state_47926;
(statearr_47938[(8)] = inst_47906);

return statearr_47938;
})();
var statearr_47939_47959 = state_47926__$1;
(statearr_47939_47959[(2)] = inst_47907);

(statearr_47939_47959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (14))){
var inst_47920 = (state_47926[(2)]);
var state_47926__$1 = state_47926;
var statearr_47940_47960 = state_47926__$1;
(statearr_47940_47960[(2)] = inst_47920);

(statearr_47940_47960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (10))){
var state_47926__$1 = state_47926;
var statearr_47941_47961 = state_47926__$1;
(statearr_47941_47961[(2)] = fc);

(statearr_47941_47961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47927 === (8))){
var inst_47915 = (state_47926[(2)]);
var state_47926__$1 = state_47926;
if(cljs.core.truth_(inst_47915)){
var statearr_47942_47962 = state_47926__$1;
(statearr_47942_47962[(1)] = (12));

} else {
var statearr_47943_47963 = state_47926__$1;
(statearr_47943_47963[(1)] = (13));

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
});})(c__34071__auto___47949,tc,fc))
;
return ((function (switch__33983__auto__,c__34071__auto___47949,tc,fc){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_47944 = [null,null,null,null,null,null,null,null,null];
(statearr_47944[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_47944[(1)] = (1));

return statearr_47944;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_47926){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e47945){if((e47945 instanceof Object)){
var ex__33987__auto__ = e47945;
var statearr_47946_47964 = state_47926;
(statearr_47946_47964[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47965 = state_47926;
state_47926 = G__47965;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_47926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_47926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___47949,tc,fc))
})();
var state__34073__auto__ = (function (){var statearr_47947 = f__34072__auto__.call(null);
(statearr_47947[(6)] = c__34071__auto___47949);

return statearr_47947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___47949,tc,fc))
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__){
return (function (state_47986){
var state_val_47987 = (state_47986[(1)]);
if((state_val_47987 === (7))){
var inst_47982 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
var statearr_47988_48006 = state_47986__$1;
(statearr_47988_48006[(2)] = inst_47982);

(statearr_47988_48006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (1))){
var inst_47966 = init;
var state_47986__$1 = (function (){var statearr_47989 = state_47986;
(statearr_47989[(7)] = inst_47966);

return statearr_47989;
})();
var statearr_47990_48007 = state_47986__$1;
(statearr_47990_48007[(2)] = null);

(statearr_47990_48007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (4))){
var inst_47969 = (state_47986[(8)]);
var inst_47969__$1 = (state_47986[(2)]);
var inst_47970 = (inst_47969__$1 == null);
var state_47986__$1 = (function (){var statearr_47991 = state_47986;
(statearr_47991[(8)] = inst_47969__$1);

return statearr_47991;
})();
if(cljs.core.truth_(inst_47970)){
var statearr_47992_48008 = state_47986__$1;
(statearr_47992_48008[(1)] = (5));

} else {
var statearr_47993_48009 = state_47986__$1;
(statearr_47993_48009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (6))){
var inst_47969 = (state_47986[(8)]);
var inst_47973 = (state_47986[(9)]);
var inst_47966 = (state_47986[(7)]);
var inst_47973__$1 = f.call(null,inst_47966,inst_47969);
var inst_47974 = cljs.core.reduced_QMARK_.call(null,inst_47973__$1);
var state_47986__$1 = (function (){var statearr_47994 = state_47986;
(statearr_47994[(9)] = inst_47973__$1);

return statearr_47994;
})();
if(inst_47974){
var statearr_47995_48010 = state_47986__$1;
(statearr_47995_48010[(1)] = (8));

} else {
var statearr_47996_48011 = state_47986__$1;
(statearr_47996_48011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (3))){
var inst_47984 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47986__$1,inst_47984);
} else {
if((state_val_47987 === (2))){
var state_47986__$1 = state_47986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47986__$1,(4),ch);
} else {
if((state_val_47987 === (9))){
var inst_47973 = (state_47986[(9)]);
var inst_47966 = inst_47973;
var state_47986__$1 = (function (){var statearr_47997 = state_47986;
(statearr_47997[(7)] = inst_47966);

return statearr_47997;
})();
var statearr_47998_48012 = state_47986__$1;
(statearr_47998_48012[(2)] = null);

(statearr_47998_48012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (5))){
var inst_47966 = (state_47986[(7)]);
var state_47986__$1 = state_47986;
var statearr_47999_48013 = state_47986__$1;
(statearr_47999_48013[(2)] = inst_47966);

(statearr_47999_48013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (10))){
var inst_47980 = (state_47986[(2)]);
var state_47986__$1 = state_47986;
var statearr_48000_48014 = state_47986__$1;
(statearr_48000_48014[(2)] = inst_47980);

(statearr_48000_48014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47987 === (8))){
var inst_47973 = (state_47986[(9)]);
var inst_47976 = cljs.core.deref.call(null,inst_47973);
var state_47986__$1 = state_47986;
var statearr_48001_48015 = state_47986__$1;
(statearr_48001_48015[(2)] = inst_47976);

(statearr_48001_48015[(1)] = (10));


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
});})(c__34071__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33984__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33984__auto____0 = (function (){
var statearr_48002 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48002[(0)] = cljs$core$async$reduce_$_state_machine__33984__auto__);

(statearr_48002[(1)] = (1));

return statearr_48002;
});
var cljs$core$async$reduce_$_state_machine__33984__auto____1 = (function (state_47986){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_47986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48003){if((e48003 instanceof Object)){
var ex__33987__auto__ = e48003;
var statearr_48004_48016 = state_47986;
(statearr_48004_48016[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48017 = state_47986;
state_47986 = G__48017;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33984__auto__ = function(state_47986){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33984__auto____1.call(this,state_47986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33984__auto____0;
cljs$core$async$reduce_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33984__auto____1;
return cljs$core$async$reduce_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_48005 = f__34072__auto__.call(null);
(statearr_48005[(6)] = c__34071__auto__);

return statearr_48005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,f__$1){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__,f__$1){
return (function (state_48023){
var state_val_48024 = (state_48023[(1)]);
if((state_val_48024 === (1))){
var inst_48018 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48023__$1 = state_48023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48023__$1,(2),inst_48018);
} else {
if((state_val_48024 === (2))){
var inst_48020 = (state_48023[(2)]);
var inst_48021 = f__$1.call(null,inst_48020);
var state_48023__$1 = state_48023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48023__$1,inst_48021);
} else {
return null;
}
}
});})(c__34071__auto__,f__$1))
;
return ((function (switch__33983__auto__,c__34071__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33984__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33984__auto____0 = (function (){
var statearr_48025 = [null,null,null,null,null,null,null];
(statearr_48025[(0)] = cljs$core$async$transduce_$_state_machine__33984__auto__);

(statearr_48025[(1)] = (1));

return statearr_48025;
});
var cljs$core$async$transduce_$_state_machine__33984__auto____1 = (function (state_48023){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48026){if((e48026 instanceof Object)){
var ex__33987__auto__ = e48026;
var statearr_48027_48029 = state_48023;
(statearr_48027_48029[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48030 = state_48023;
state_48023 = G__48030;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33984__auto__ = function(state_48023){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33984__auto____1.call(this,state_48023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33984__auto____0;
cljs$core$async$transduce_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33984__auto____1;
return cljs$core$async$transduce_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__,f__$1))
})();
var state__34073__auto__ = (function (){var statearr_48028 = f__34072__auto__.call(null);
(statearr_48028[(6)] = c__34071__auto__);

return statearr_48028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,f__$1))
);

return c__34071__auto__;
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
var G__48032 = arguments.length;
switch (G__48032) {
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__){
return (function (state_48057){
var state_val_48058 = (state_48057[(1)]);
if((state_val_48058 === (7))){
var inst_48039 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
var statearr_48059_48080 = state_48057__$1;
(statearr_48059_48080[(2)] = inst_48039);

(statearr_48059_48080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (1))){
var inst_48033 = cljs.core.seq.call(null,coll);
var inst_48034 = inst_48033;
var state_48057__$1 = (function (){var statearr_48060 = state_48057;
(statearr_48060[(7)] = inst_48034);

return statearr_48060;
})();
var statearr_48061_48081 = state_48057__$1;
(statearr_48061_48081[(2)] = null);

(statearr_48061_48081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (4))){
var inst_48034 = (state_48057[(7)]);
var inst_48037 = cljs.core.first.call(null,inst_48034);
var state_48057__$1 = state_48057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48057__$1,(7),ch,inst_48037);
} else {
if((state_val_48058 === (13))){
var inst_48051 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
var statearr_48062_48082 = state_48057__$1;
(statearr_48062_48082[(2)] = inst_48051);

(statearr_48062_48082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (6))){
var inst_48042 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
if(cljs.core.truth_(inst_48042)){
var statearr_48063_48083 = state_48057__$1;
(statearr_48063_48083[(1)] = (8));

} else {
var statearr_48064_48084 = state_48057__$1;
(statearr_48064_48084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (3))){
var inst_48055 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48057__$1,inst_48055);
} else {
if((state_val_48058 === (12))){
var state_48057__$1 = state_48057;
var statearr_48065_48085 = state_48057__$1;
(statearr_48065_48085[(2)] = null);

(statearr_48065_48085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (2))){
var inst_48034 = (state_48057[(7)]);
var state_48057__$1 = state_48057;
if(cljs.core.truth_(inst_48034)){
var statearr_48066_48086 = state_48057__$1;
(statearr_48066_48086[(1)] = (4));

} else {
var statearr_48067_48087 = state_48057__$1;
(statearr_48067_48087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (11))){
var inst_48048 = cljs.core.async.close_BANG_.call(null,ch);
var state_48057__$1 = state_48057;
var statearr_48068_48088 = state_48057__$1;
(statearr_48068_48088[(2)] = inst_48048);

(statearr_48068_48088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (9))){
var state_48057__$1 = state_48057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48069_48089 = state_48057__$1;
(statearr_48069_48089[(1)] = (11));

} else {
var statearr_48070_48090 = state_48057__$1;
(statearr_48070_48090[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (5))){
var inst_48034 = (state_48057[(7)]);
var state_48057__$1 = state_48057;
var statearr_48071_48091 = state_48057__$1;
(statearr_48071_48091[(2)] = inst_48034);

(statearr_48071_48091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (10))){
var inst_48053 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
var statearr_48072_48092 = state_48057__$1;
(statearr_48072_48092[(2)] = inst_48053);

(statearr_48072_48092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (8))){
var inst_48034 = (state_48057[(7)]);
var inst_48044 = cljs.core.next.call(null,inst_48034);
var inst_48034__$1 = inst_48044;
var state_48057__$1 = (function (){var statearr_48073 = state_48057;
(statearr_48073[(7)] = inst_48034__$1);

return statearr_48073;
})();
var statearr_48074_48093 = state_48057__$1;
(statearr_48074_48093[(2)] = null);

(statearr_48074_48093[(1)] = (2));


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
});})(c__34071__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_48075 = [null,null,null,null,null,null,null,null];
(statearr_48075[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_48075[(1)] = (1));

return statearr_48075;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_48057){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48076){if((e48076 instanceof Object)){
var ex__33987__auto__ = e48076;
var statearr_48077_48094 = state_48057;
(statearr_48077_48094[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48095 = state_48057;
state_48057 = G__48095;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_48057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_48057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_48078 = f__34072__auto__.call(null);
(statearr_48078[(6)] = c__34071__auto__);

return statearr_48078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async48096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48096 = (function (ch,cs,meta48097){
this.ch = ch;
this.cs = cs;
this.meta48097 = meta48097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48098,meta48097__$1){
var self__ = this;
var _48098__$1 = this;
return (new cljs.core.async.t_cljs$core$async48096(self__.ch,self__.cs,meta48097__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48098){
var self__ = this;
var _48098__$1 = this;
return self__.meta48097;
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48097","meta48097",-874477268,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48096";

cljs.core.async.t_cljs$core$async48096.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48096");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48096 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48096(ch__$1,cs__$1,meta48097){
return (new cljs.core.async.t_cljs$core$async48096(ch__$1,cs__$1,meta48097));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48096(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34071__auto___48318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___48318,cs,m,dchan,dctr,done){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___48318,cs,m,dchan,dctr,done){
return (function (state_48233){
var state_val_48234 = (state_48233[(1)]);
if((state_val_48234 === (7))){
var inst_48229 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48235_48319 = state_48233__$1;
(statearr_48235_48319[(2)] = inst_48229);

(statearr_48235_48319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (20))){
var inst_48132 = (state_48233[(7)]);
var inst_48144 = cljs.core.first.call(null,inst_48132);
var inst_48145 = cljs.core.nth.call(null,inst_48144,(0),null);
var inst_48146 = cljs.core.nth.call(null,inst_48144,(1),null);
var state_48233__$1 = (function (){var statearr_48236 = state_48233;
(statearr_48236[(8)] = inst_48145);

return statearr_48236;
})();
if(cljs.core.truth_(inst_48146)){
var statearr_48237_48320 = state_48233__$1;
(statearr_48237_48320[(1)] = (22));

} else {
var statearr_48238_48321 = state_48233__$1;
(statearr_48238_48321[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (27))){
var inst_48176 = (state_48233[(9)]);
var inst_48174 = (state_48233[(10)]);
var inst_48181 = (state_48233[(11)]);
var inst_48101 = (state_48233[(12)]);
var inst_48181__$1 = cljs.core._nth.call(null,inst_48174,inst_48176);
var inst_48182 = cljs.core.async.put_BANG_.call(null,inst_48181__$1,inst_48101,done);
var state_48233__$1 = (function (){var statearr_48239 = state_48233;
(statearr_48239[(11)] = inst_48181__$1);

return statearr_48239;
})();
if(cljs.core.truth_(inst_48182)){
var statearr_48240_48322 = state_48233__$1;
(statearr_48240_48322[(1)] = (30));

} else {
var statearr_48241_48323 = state_48233__$1;
(statearr_48241_48323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (1))){
var state_48233__$1 = state_48233;
var statearr_48242_48324 = state_48233__$1;
(statearr_48242_48324[(2)] = null);

(statearr_48242_48324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (24))){
var inst_48132 = (state_48233[(7)]);
var inst_48151 = (state_48233[(2)]);
var inst_48152 = cljs.core.next.call(null,inst_48132);
var inst_48110 = inst_48152;
var inst_48111 = null;
var inst_48112 = (0);
var inst_48113 = (0);
var state_48233__$1 = (function (){var statearr_48243 = state_48233;
(statearr_48243[(13)] = inst_48151);

(statearr_48243[(14)] = inst_48111);

(statearr_48243[(15)] = inst_48112);

(statearr_48243[(16)] = inst_48113);

(statearr_48243[(17)] = inst_48110);

return statearr_48243;
})();
var statearr_48244_48325 = state_48233__$1;
(statearr_48244_48325[(2)] = null);

(statearr_48244_48325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (39))){
var state_48233__$1 = state_48233;
var statearr_48248_48326 = state_48233__$1;
(statearr_48248_48326[(2)] = null);

(statearr_48248_48326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (4))){
var inst_48101 = (state_48233[(12)]);
var inst_48101__$1 = (state_48233[(2)]);
var inst_48102 = (inst_48101__$1 == null);
var state_48233__$1 = (function (){var statearr_48249 = state_48233;
(statearr_48249[(12)] = inst_48101__$1);

return statearr_48249;
})();
if(cljs.core.truth_(inst_48102)){
var statearr_48250_48327 = state_48233__$1;
(statearr_48250_48327[(1)] = (5));

} else {
var statearr_48251_48328 = state_48233__$1;
(statearr_48251_48328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (15))){
var inst_48111 = (state_48233[(14)]);
var inst_48112 = (state_48233[(15)]);
var inst_48113 = (state_48233[(16)]);
var inst_48110 = (state_48233[(17)]);
var inst_48128 = (state_48233[(2)]);
var inst_48129 = (inst_48113 + (1));
var tmp48245 = inst_48111;
var tmp48246 = inst_48112;
var tmp48247 = inst_48110;
var inst_48110__$1 = tmp48247;
var inst_48111__$1 = tmp48245;
var inst_48112__$1 = tmp48246;
var inst_48113__$1 = inst_48129;
var state_48233__$1 = (function (){var statearr_48252 = state_48233;
(statearr_48252[(14)] = inst_48111__$1);

(statearr_48252[(15)] = inst_48112__$1);

(statearr_48252[(18)] = inst_48128);

(statearr_48252[(16)] = inst_48113__$1);

(statearr_48252[(17)] = inst_48110__$1);

return statearr_48252;
})();
var statearr_48253_48329 = state_48233__$1;
(statearr_48253_48329[(2)] = null);

(statearr_48253_48329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (21))){
var inst_48155 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48257_48330 = state_48233__$1;
(statearr_48257_48330[(2)] = inst_48155);

(statearr_48257_48330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (31))){
var inst_48181 = (state_48233[(11)]);
var inst_48185 = done.call(null,null);
var inst_48186 = cljs.core.async.untap_STAR_.call(null,m,inst_48181);
var state_48233__$1 = (function (){var statearr_48258 = state_48233;
(statearr_48258[(19)] = inst_48185);

return statearr_48258;
})();
var statearr_48259_48331 = state_48233__$1;
(statearr_48259_48331[(2)] = inst_48186);

(statearr_48259_48331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (32))){
var inst_48176 = (state_48233[(9)]);
var inst_48173 = (state_48233[(20)]);
var inst_48175 = (state_48233[(21)]);
var inst_48174 = (state_48233[(10)]);
var inst_48188 = (state_48233[(2)]);
var inst_48189 = (inst_48176 + (1));
var tmp48254 = inst_48173;
var tmp48255 = inst_48175;
var tmp48256 = inst_48174;
var inst_48173__$1 = tmp48254;
var inst_48174__$1 = tmp48256;
var inst_48175__$1 = tmp48255;
var inst_48176__$1 = inst_48189;
var state_48233__$1 = (function (){var statearr_48260 = state_48233;
(statearr_48260[(9)] = inst_48176__$1);

(statearr_48260[(20)] = inst_48173__$1);

(statearr_48260[(22)] = inst_48188);

(statearr_48260[(21)] = inst_48175__$1);

(statearr_48260[(10)] = inst_48174__$1);

return statearr_48260;
})();
var statearr_48261_48332 = state_48233__$1;
(statearr_48261_48332[(2)] = null);

(statearr_48261_48332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (40))){
var inst_48201 = (state_48233[(23)]);
var inst_48205 = done.call(null,null);
var inst_48206 = cljs.core.async.untap_STAR_.call(null,m,inst_48201);
var state_48233__$1 = (function (){var statearr_48262 = state_48233;
(statearr_48262[(24)] = inst_48205);

return statearr_48262;
})();
var statearr_48263_48333 = state_48233__$1;
(statearr_48263_48333[(2)] = inst_48206);

(statearr_48263_48333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (33))){
var inst_48192 = (state_48233[(25)]);
var inst_48194 = cljs.core.chunked_seq_QMARK_.call(null,inst_48192);
var state_48233__$1 = state_48233;
if(inst_48194){
var statearr_48264_48334 = state_48233__$1;
(statearr_48264_48334[(1)] = (36));

} else {
var statearr_48265_48335 = state_48233__$1;
(statearr_48265_48335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (13))){
var inst_48122 = (state_48233[(26)]);
var inst_48125 = cljs.core.async.close_BANG_.call(null,inst_48122);
var state_48233__$1 = state_48233;
var statearr_48266_48336 = state_48233__$1;
(statearr_48266_48336[(2)] = inst_48125);

(statearr_48266_48336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (22))){
var inst_48145 = (state_48233[(8)]);
var inst_48148 = cljs.core.async.close_BANG_.call(null,inst_48145);
var state_48233__$1 = state_48233;
var statearr_48267_48337 = state_48233__$1;
(statearr_48267_48337[(2)] = inst_48148);

(statearr_48267_48337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (36))){
var inst_48192 = (state_48233[(25)]);
var inst_48196 = cljs.core.chunk_first.call(null,inst_48192);
var inst_48197 = cljs.core.chunk_rest.call(null,inst_48192);
var inst_48198 = cljs.core.count.call(null,inst_48196);
var inst_48173 = inst_48197;
var inst_48174 = inst_48196;
var inst_48175 = inst_48198;
var inst_48176 = (0);
var state_48233__$1 = (function (){var statearr_48268 = state_48233;
(statearr_48268[(9)] = inst_48176);

(statearr_48268[(20)] = inst_48173);

(statearr_48268[(21)] = inst_48175);

(statearr_48268[(10)] = inst_48174);

return statearr_48268;
})();
var statearr_48269_48338 = state_48233__$1;
(statearr_48269_48338[(2)] = null);

(statearr_48269_48338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (41))){
var inst_48192 = (state_48233[(25)]);
var inst_48208 = (state_48233[(2)]);
var inst_48209 = cljs.core.next.call(null,inst_48192);
var inst_48173 = inst_48209;
var inst_48174 = null;
var inst_48175 = (0);
var inst_48176 = (0);
var state_48233__$1 = (function (){var statearr_48270 = state_48233;
(statearr_48270[(9)] = inst_48176);

(statearr_48270[(20)] = inst_48173);

(statearr_48270[(21)] = inst_48175);

(statearr_48270[(10)] = inst_48174);

(statearr_48270[(27)] = inst_48208);

return statearr_48270;
})();
var statearr_48271_48339 = state_48233__$1;
(statearr_48271_48339[(2)] = null);

(statearr_48271_48339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (43))){
var state_48233__$1 = state_48233;
var statearr_48272_48340 = state_48233__$1;
(statearr_48272_48340[(2)] = null);

(statearr_48272_48340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (29))){
var inst_48217 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48273_48341 = state_48233__$1;
(statearr_48273_48341[(2)] = inst_48217);

(statearr_48273_48341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (44))){
var inst_48226 = (state_48233[(2)]);
var state_48233__$1 = (function (){var statearr_48274 = state_48233;
(statearr_48274[(28)] = inst_48226);

return statearr_48274;
})();
var statearr_48275_48342 = state_48233__$1;
(statearr_48275_48342[(2)] = null);

(statearr_48275_48342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (6))){
var inst_48165 = (state_48233[(29)]);
var inst_48164 = cljs.core.deref.call(null,cs);
var inst_48165__$1 = cljs.core.keys.call(null,inst_48164);
var inst_48166 = cljs.core.count.call(null,inst_48165__$1);
var inst_48167 = cljs.core.reset_BANG_.call(null,dctr,inst_48166);
var inst_48172 = cljs.core.seq.call(null,inst_48165__$1);
var inst_48173 = inst_48172;
var inst_48174 = null;
var inst_48175 = (0);
var inst_48176 = (0);
var state_48233__$1 = (function (){var statearr_48276 = state_48233;
(statearr_48276[(9)] = inst_48176);

(statearr_48276[(20)] = inst_48173);

(statearr_48276[(30)] = inst_48167);

(statearr_48276[(21)] = inst_48175);

(statearr_48276[(10)] = inst_48174);

(statearr_48276[(29)] = inst_48165__$1);

return statearr_48276;
})();
var statearr_48277_48343 = state_48233__$1;
(statearr_48277_48343[(2)] = null);

(statearr_48277_48343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (28))){
var inst_48173 = (state_48233[(20)]);
var inst_48192 = (state_48233[(25)]);
var inst_48192__$1 = cljs.core.seq.call(null,inst_48173);
var state_48233__$1 = (function (){var statearr_48278 = state_48233;
(statearr_48278[(25)] = inst_48192__$1);

return statearr_48278;
})();
if(inst_48192__$1){
var statearr_48279_48344 = state_48233__$1;
(statearr_48279_48344[(1)] = (33));

} else {
var statearr_48280_48345 = state_48233__$1;
(statearr_48280_48345[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (25))){
var inst_48176 = (state_48233[(9)]);
var inst_48175 = (state_48233[(21)]);
var inst_48178 = (inst_48176 < inst_48175);
var inst_48179 = inst_48178;
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48179)){
var statearr_48281_48346 = state_48233__$1;
(statearr_48281_48346[(1)] = (27));

} else {
var statearr_48282_48347 = state_48233__$1;
(statearr_48282_48347[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (34))){
var state_48233__$1 = state_48233;
var statearr_48283_48348 = state_48233__$1;
(statearr_48283_48348[(2)] = null);

(statearr_48283_48348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (17))){
var state_48233__$1 = state_48233;
var statearr_48284_48349 = state_48233__$1;
(statearr_48284_48349[(2)] = null);

(statearr_48284_48349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (3))){
var inst_48231 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48233__$1,inst_48231);
} else {
if((state_val_48234 === (12))){
var inst_48160 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48285_48350 = state_48233__$1;
(statearr_48285_48350[(2)] = inst_48160);

(statearr_48285_48350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (2))){
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(4),ch);
} else {
if((state_val_48234 === (23))){
var state_48233__$1 = state_48233;
var statearr_48286_48351 = state_48233__$1;
(statearr_48286_48351[(2)] = null);

(statearr_48286_48351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (35))){
var inst_48215 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48287_48352 = state_48233__$1;
(statearr_48287_48352[(2)] = inst_48215);

(statearr_48287_48352[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (19))){
var inst_48132 = (state_48233[(7)]);
var inst_48136 = cljs.core.chunk_first.call(null,inst_48132);
var inst_48137 = cljs.core.chunk_rest.call(null,inst_48132);
var inst_48138 = cljs.core.count.call(null,inst_48136);
var inst_48110 = inst_48137;
var inst_48111 = inst_48136;
var inst_48112 = inst_48138;
var inst_48113 = (0);
var state_48233__$1 = (function (){var statearr_48288 = state_48233;
(statearr_48288[(14)] = inst_48111);

(statearr_48288[(15)] = inst_48112);

(statearr_48288[(16)] = inst_48113);

(statearr_48288[(17)] = inst_48110);

return statearr_48288;
})();
var statearr_48289_48353 = state_48233__$1;
(statearr_48289_48353[(2)] = null);

(statearr_48289_48353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (11))){
var inst_48132 = (state_48233[(7)]);
var inst_48110 = (state_48233[(17)]);
var inst_48132__$1 = cljs.core.seq.call(null,inst_48110);
var state_48233__$1 = (function (){var statearr_48290 = state_48233;
(statearr_48290[(7)] = inst_48132__$1);

return statearr_48290;
})();
if(inst_48132__$1){
var statearr_48291_48354 = state_48233__$1;
(statearr_48291_48354[(1)] = (16));

} else {
var statearr_48292_48355 = state_48233__$1;
(statearr_48292_48355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (9))){
var inst_48162 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48293_48356 = state_48233__$1;
(statearr_48293_48356[(2)] = inst_48162);

(statearr_48293_48356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (5))){
var inst_48108 = cljs.core.deref.call(null,cs);
var inst_48109 = cljs.core.seq.call(null,inst_48108);
var inst_48110 = inst_48109;
var inst_48111 = null;
var inst_48112 = (0);
var inst_48113 = (0);
var state_48233__$1 = (function (){var statearr_48294 = state_48233;
(statearr_48294[(14)] = inst_48111);

(statearr_48294[(15)] = inst_48112);

(statearr_48294[(16)] = inst_48113);

(statearr_48294[(17)] = inst_48110);

return statearr_48294;
})();
var statearr_48295_48357 = state_48233__$1;
(statearr_48295_48357[(2)] = null);

(statearr_48295_48357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (14))){
var state_48233__$1 = state_48233;
var statearr_48296_48358 = state_48233__$1;
(statearr_48296_48358[(2)] = null);

(statearr_48296_48358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (45))){
var inst_48223 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48297_48359 = state_48233__$1;
(statearr_48297_48359[(2)] = inst_48223);

(statearr_48297_48359[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (26))){
var inst_48165 = (state_48233[(29)]);
var inst_48219 = (state_48233[(2)]);
var inst_48220 = cljs.core.seq.call(null,inst_48165);
var state_48233__$1 = (function (){var statearr_48298 = state_48233;
(statearr_48298[(31)] = inst_48219);

return statearr_48298;
})();
if(inst_48220){
var statearr_48299_48360 = state_48233__$1;
(statearr_48299_48360[(1)] = (42));

} else {
var statearr_48300_48361 = state_48233__$1;
(statearr_48300_48361[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (16))){
var inst_48132 = (state_48233[(7)]);
var inst_48134 = cljs.core.chunked_seq_QMARK_.call(null,inst_48132);
var state_48233__$1 = state_48233;
if(inst_48134){
var statearr_48301_48362 = state_48233__$1;
(statearr_48301_48362[(1)] = (19));

} else {
var statearr_48302_48363 = state_48233__$1;
(statearr_48302_48363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (38))){
var inst_48212 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48303_48364 = state_48233__$1;
(statearr_48303_48364[(2)] = inst_48212);

(statearr_48303_48364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (30))){
var state_48233__$1 = state_48233;
var statearr_48304_48365 = state_48233__$1;
(statearr_48304_48365[(2)] = null);

(statearr_48304_48365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (10))){
var inst_48111 = (state_48233[(14)]);
var inst_48113 = (state_48233[(16)]);
var inst_48121 = cljs.core._nth.call(null,inst_48111,inst_48113);
var inst_48122 = cljs.core.nth.call(null,inst_48121,(0),null);
var inst_48123 = cljs.core.nth.call(null,inst_48121,(1),null);
var state_48233__$1 = (function (){var statearr_48305 = state_48233;
(statearr_48305[(26)] = inst_48122);

return statearr_48305;
})();
if(cljs.core.truth_(inst_48123)){
var statearr_48306_48366 = state_48233__$1;
(statearr_48306_48366[(1)] = (13));

} else {
var statearr_48307_48367 = state_48233__$1;
(statearr_48307_48367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (18))){
var inst_48158 = (state_48233[(2)]);
var state_48233__$1 = state_48233;
var statearr_48308_48368 = state_48233__$1;
(statearr_48308_48368[(2)] = inst_48158);

(statearr_48308_48368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (42))){
var state_48233__$1 = state_48233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48233__$1,(45),dchan);
} else {
if((state_val_48234 === (37))){
var inst_48201 = (state_48233[(23)]);
var inst_48192 = (state_48233[(25)]);
var inst_48101 = (state_48233[(12)]);
var inst_48201__$1 = cljs.core.first.call(null,inst_48192);
var inst_48202 = cljs.core.async.put_BANG_.call(null,inst_48201__$1,inst_48101,done);
var state_48233__$1 = (function (){var statearr_48309 = state_48233;
(statearr_48309[(23)] = inst_48201__$1);

return statearr_48309;
})();
if(cljs.core.truth_(inst_48202)){
var statearr_48310_48369 = state_48233__$1;
(statearr_48310_48369[(1)] = (39));

} else {
var statearr_48311_48370 = state_48233__$1;
(statearr_48311_48370[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48234 === (8))){
var inst_48112 = (state_48233[(15)]);
var inst_48113 = (state_48233[(16)]);
var inst_48115 = (inst_48113 < inst_48112);
var inst_48116 = inst_48115;
var state_48233__$1 = state_48233;
if(cljs.core.truth_(inst_48116)){
var statearr_48312_48371 = state_48233__$1;
(statearr_48312_48371[(1)] = (10));

} else {
var statearr_48313_48372 = state_48233__$1;
(statearr_48313_48372[(1)] = (11));

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
});})(c__34071__auto___48318,cs,m,dchan,dctr,done))
;
return ((function (switch__33983__auto__,c__34071__auto___48318,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33984__auto__ = null;
var cljs$core$async$mult_$_state_machine__33984__auto____0 = (function (){
var statearr_48314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48314[(0)] = cljs$core$async$mult_$_state_machine__33984__auto__);

(statearr_48314[(1)] = (1));

return statearr_48314;
});
var cljs$core$async$mult_$_state_machine__33984__auto____1 = (function (state_48233){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48315){if((e48315 instanceof Object)){
var ex__33987__auto__ = e48315;
var statearr_48316_48373 = state_48233;
(statearr_48316_48373[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48374 = state_48233;
state_48233 = G__48374;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33984__auto__ = function(state_48233){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33984__auto____1.call(this,state_48233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33984__auto____0;
cljs$core$async$mult_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33984__auto____1;
return cljs$core$async$mult_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___48318,cs,m,dchan,dctr,done))
})();
var state__34073__auto__ = (function (){var statearr_48317 = f__34072__auto__.call(null);
(statearr_48317[(6)] = c__34071__auto___48318);

return statearr_48317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___48318,cs,m,dchan,dctr,done))
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
var G__48376 = arguments.length;
switch (G__48376) {
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
var len__29592__auto___48388 = arguments.length;
var i__29593__auto___48389 = (0);
while(true){
if((i__29593__auto___48389 < len__29592__auto___48388)){
args__29599__auto__.push((arguments[i__29593__auto___48389]));

var G__48390 = (i__29593__auto___48389 + (1));
i__29593__auto___48389 = G__48390;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48382){
var map__48383 = p__48382;
var map__48383__$1 = ((((!((map__48383 == null)))?((((map__48383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48383):map__48383);
var opts = map__48383__$1;
var statearr_48385_48391 = state;
(statearr_48385_48391[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48383,map__48383__$1,opts){
return (function (val){
var statearr_48386_48392 = state;
(statearr_48386_48392[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48383,map__48383__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48387_48393 = state;
(statearr_48387_48393[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48378){
var G__48379 = cljs.core.first.call(null,seq48378);
var seq48378__$1 = cljs.core.next.call(null,seq48378);
var G__48380 = cljs.core.first.call(null,seq48378__$1);
var seq48378__$2 = cljs.core.next.call(null,seq48378__$1);
var G__48381 = cljs.core.first.call(null,seq48378__$2);
var seq48378__$3 = cljs.core.next.call(null,seq48378__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48379,G__48380,G__48381,seq48378__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48394 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48395){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48395 = meta48395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48396,meta48395__$1){
var self__ = this;
var _48396__$1 = this;
return (new cljs.core.async.t_cljs$core$async48394(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48395__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48396){
var self__ = this;
var _48396__$1 = this;
return self__.meta48395;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async48394.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48395","meta48395",1418540367,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48394";

cljs.core.async.t_cljs$core$async48394.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48394");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48394 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48394(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48395){
return (new cljs.core.async.t_cljs$core$async48394(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48395));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48394(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34071__auto___48558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___48558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___48558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48498){
var state_val_48499 = (state_48498[(1)]);
if((state_val_48499 === (7))){
var inst_48413 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48500_48559 = state_48498__$1;
(statearr_48500_48559[(2)] = inst_48413);

(statearr_48500_48559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (20))){
var inst_48425 = (state_48498[(7)]);
var state_48498__$1 = state_48498;
var statearr_48501_48560 = state_48498__$1;
(statearr_48501_48560[(2)] = inst_48425);

(statearr_48501_48560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (27))){
var state_48498__$1 = state_48498;
var statearr_48502_48561 = state_48498__$1;
(statearr_48502_48561[(2)] = null);

(statearr_48502_48561[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (1))){
var inst_48400 = (state_48498[(8)]);
var inst_48400__$1 = calc_state.call(null);
var inst_48402 = (inst_48400__$1 == null);
var inst_48403 = cljs.core.not.call(null,inst_48402);
var state_48498__$1 = (function (){var statearr_48503 = state_48498;
(statearr_48503[(8)] = inst_48400__$1);

return statearr_48503;
})();
if(inst_48403){
var statearr_48504_48562 = state_48498__$1;
(statearr_48504_48562[(1)] = (2));

} else {
var statearr_48505_48563 = state_48498__$1;
(statearr_48505_48563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (24))){
var inst_48449 = (state_48498[(9)]);
var inst_48472 = (state_48498[(10)]);
var inst_48458 = (state_48498[(11)]);
var inst_48472__$1 = inst_48449.call(null,inst_48458);
var state_48498__$1 = (function (){var statearr_48506 = state_48498;
(statearr_48506[(10)] = inst_48472__$1);

return statearr_48506;
})();
if(cljs.core.truth_(inst_48472__$1)){
var statearr_48507_48564 = state_48498__$1;
(statearr_48507_48564[(1)] = (29));

} else {
var statearr_48508_48565 = state_48498__$1;
(statearr_48508_48565[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (4))){
var inst_48416 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48416)){
var statearr_48509_48566 = state_48498__$1;
(statearr_48509_48566[(1)] = (8));

} else {
var statearr_48510_48567 = state_48498__$1;
(statearr_48510_48567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (15))){
var inst_48443 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48443)){
var statearr_48511_48568 = state_48498__$1;
(statearr_48511_48568[(1)] = (19));

} else {
var statearr_48512_48569 = state_48498__$1;
(statearr_48512_48569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (21))){
var inst_48448 = (state_48498[(12)]);
var inst_48448__$1 = (state_48498[(2)]);
var inst_48449 = cljs.core.get.call(null,inst_48448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48450 = cljs.core.get.call(null,inst_48448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48451 = cljs.core.get.call(null,inst_48448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48498__$1 = (function (){var statearr_48513 = state_48498;
(statearr_48513[(9)] = inst_48449);

(statearr_48513[(13)] = inst_48450);

(statearr_48513[(12)] = inst_48448__$1);

return statearr_48513;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48498__$1,(22),inst_48451);
} else {
if((state_val_48499 === (31))){
var inst_48480 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48480)){
var statearr_48514_48570 = state_48498__$1;
(statearr_48514_48570[(1)] = (32));

} else {
var statearr_48515_48571 = state_48498__$1;
(statearr_48515_48571[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (32))){
var inst_48457 = (state_48498[(14)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48498__$1,(35),out,inst_48457);
} else {
if((state_val_48499 === (33))){
var inst_48448 = (state_48498[(12)]);
var inst_48425 = inst_48448;
var state_48498__$1 = (function (){var statearr_48516 = state_48498;
(statearr_48516[(7)] = inst_48425);

return statearr_48516;
})();
var statearr_48517_48572 = state_48498__$1;
(statearr_48517_48572[(2)] = null);

(statearr_48517_48572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (13))){
var inst_48425 = (state_48498[(7)]);
var inst_48432 = inst_48425.cljs$lang$protocol_mask$partition0$;
var inst_48433 = (inst_48432 & (64));
var inst_48434 = inst_48425.cljs$core$ISeq$;
var inst_48435 = (cljs.core.PROTOCOL_SENTINEL === inst_48434);
var inst_48436 = (inst_48433) || (inst_48435);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48436)){
var statearr_48518_48573 = state_48498__$1;
(statearr_48518_48573[(1)] = (16));

} else {
var statearr_48519_48574 = state_48498__$1;
(statearr_48519_48574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (22))){
var inst_48457 = (state_48498[(14)]);
var inst_48458 = (state_48498[(11)]);
var inst_48456 = (state_48498[(2)]);
var inst_48457__$1 = cljs.core.nth.call(null,inst_48456,(0),null);
var inst_48458__$1 = cljs.core.nth.call(null,inst_48456,(1),null);
var inst_48459 = (inst_48457__$1 == null);
var inst_48460 = cljs.core._EQ_.call(null,inst_48458__$1,change);
var inst_48461 = (inst_48459) || (inst_48460);
var state_48498__$1 = (function (){var statearr_48520 = state_48498;
(statearr_48520[(14)] = inst_48457__$1);

(statearr_48520[(11)] = inst_48458__$1);

return statearr_48520;
})();
if(cljs.core.truth_(inst_48461)){
var statearr_48521_48575 = state_48498__$1;
(statearr_48521_48575[(1)] = (23));

} else {
var statearr_48522_48576 = state_48498__$1;
(statearr_48522_48576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (36))){
var inst_48448 = (state_48498[(12)]);
var inst_48425 = inst_48448;
var state_48498__$1 = (function (){var statearr_48523 = state_48498;
(statearr_48523[(7)] = inst_48425);

return statearr_48523;
})();
var statearr_48524_48577 = state_48498__$1;
(statearr_48524_48577[(2)] = null);

(statearr_48524_48577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (29))){
var inst_48472 = (state_48498[(10)]);
var state_48498__$1 = state_48498;
var statearr_48525_48578 = state_48498__$1;
(statearr_48525_48578[(2)] = inst_48472);

(statearr_48525_48578[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (6))){
var state_48498__$1 = state_48498;
var statearr_48526_48579 = state_48498__$1;
(statearr_48526_48579[(2)] = false);

(statearr_48526_48579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (28))){
var inst_48468 = (state_48498[(2)]);
var inst_48469 = calc_state.call(null);
var inst_48425 = inst_48469;
var state_48498__$1 = (function (){var statearr_48527 = state_48498;
(statearr_48527[(7)] = inst_48425);

(statearr_48527[(15)] = inst_48468);

return statearr_48527;
})();
var statearr_48528_48580 = state_48498__$1;
(statearr_48528_48580[(2)] = null);

(statearr_48528_48580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (25))){
var inst_48494 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48529_48581 = state_48498__$1;
(statearr_48529_48581[(2)] = inst_48494);

(statearr_48529_48581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (34))){
var inst_48492 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48530_48582 = state_48498__$1;
(statearr_48530_48582[(2)] = inst_48492);

(statearr_48530_48582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (17))){
var state_48498__$1 = state_48498;
var statearr_48531_48583 = state_48498__$1;
(statearr_48531_48583[(2)] = false);

(statearr_48531_48583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (3))){
var state_48498__$1 = state_48498;
var statearr_48532_48584 = state_48498__$1;
(statearr_48532_48584[(2)] = false);

(statearr_48532_48584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (12))){
var inst_48496 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48498__$1,inst_48496);
} else {
if((state_val_48499 === (2))){
var inst_48400 = (state_48498[(8)]);
var inst_48405 = inst_48400.cljs$lang$protocol_mask$partition0$;
var inst_48406 = (inst_48405 & (64));
var inst_48407 = inst_48400.cljs$core$ISeq$;
var inst_48408 = (cljs.core.PROTOCOL_SENTINEL === inst_48407);
var inst_48409 = (inst_48406) || (inst_48408);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48409)){
var statearr_48533_48585 = state_48498__$1;
(statearr_48533_48585[(1)] = (5));

} else {
var statearr_48534_48586 = state_48498__$1;
(statearr_48534_48586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (23))){
var inst_48457 = (state_48498[(14)]);
var inst_48463 = (inst_48457 == null);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48463)){
var statearr_48535_48587 = state_48498__$1;
(statearr_48535_48587[(1)] = (26));

} else {
var statearr_48536_48588 = state_48498__$1;
(statearr_48536_48588[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (35))){
var inst_48483 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48483)){
var statearr_48537_48589 = state_48498__$1;
(statearr_48537_48589[(1)] = (36));

} else {
var statearr_48538_48590 = state_48498__$1;
(statearr_48538_48590[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (19))){
var inst_48425 = (state_48498[(7)]);
var inst_48445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48425);
var state_48498__$1 = state_48498;
var statearr_48539_48591 = state_48498__$1;
(statearr_48539_48591[(2)] = inst_48445);

(statearr_48539_48591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (11))){
var inst_48425 = (state_48498[(7)]);
var inst_48429 = (inst_48425 == null);
var inst_48430 = cljs.core.not.call(null,inst_48429);
var state_48498__$1 = state_48498;
if(inst_48430){
var statearr_48540_48592 = state_48498__$1;
(statearr_48540_48592[(1)] = (13));

} else {
var statearr_48541_48593 = state_48498__$1;
(statearr_48541_48593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (9))){
var inst_48400 = (state_48498[(8)]);
var state_48498__$1 = state_48498;
var statearr_48542_48594 = state_48498__$1;
(statearr_48542_48594[(2)] = inst_48400);

(statearr_48542_48594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (5))){
var state_48498__$1 = state_48498;
var statearr_48543_48595 = state_48498__$1;
(statearr_48543_48595[(2)] = true);

(statearr_48543_48595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (14))){
var state_48498__$1 = state_48498;
var statearr_48544_48596 = state_48498__$1;
(statearr_48544_48596[(2)] = false);

(statearr_48544_48596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (26))){
var inst_48458 = (state_48498[(11)]);
var inst_48465 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48458);
var state_48498__$1 = state_48498;
var statearr_48545_48597 = state_48498__$1;
(statearr_48545_48597[(2)] = inst_48465);

(statearr_48545_48597[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (16))){
var state_48498__$1 = state_48498;
var statearr_48546_48598 = state_48498__$1;
(statearr_48546_48598[(2)] = true);

(statearr_48546_48598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (38))){
var inst_48488 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48547_48599 = state_48498__$1;
(statearr_48547_48599[(2)] = inst_48488);

(statearr_48547_48599[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (30))){
var inst_48449 = (state_48498[(9)]);
var inst_48458 = (state_48498[(11)]);
var inst_48450 = (state_48498[(13)]);
var inst_48475 = cljs.core.empty_QMARK_.call(null,inst_48449);
var inst_48476 = inst_48450.call(null,inst_48458);
var inst_48477 = cljs.core.not.call(null,inst_48476);
var inst_48478 = (inst_48475) && (inst_48477);
var state_48498__$1 = state_48498;
var statearr_48548_48600 = state_48498__$1;
(statearr_48548_48600[(2)] = inst_48478);

(statearr_48548_48600[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (10))){
var inst_48400 = (state_48498[(8)]);
var inst_48421 = (state_48498[(2)]);
var inst_48422 = cljs.core.get.call(null,inst_48421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48423 = cljs.core.get.call(null,inst_48421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48424 = cljs.core.get.call(null,inst_48421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48425 = inst_48400;
var state_48498__$1 = (function (){var statearr_48549 = state_48498;
(statearr_48549[(16)] = inst_48422);

(statearr_48549[(7)] = inst_48425);

(statearr_48549[(17)] = inst_48423);

(statearr_48549[(18)] = inst_48424);

return statearr_48549;
})();
var statearr_48550_48601 = state_48498__$1;
(statearr_48550_48601[(2)] = null);

(statearr_48550_48601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (18))){
var inst_48440 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48551_48602 = state_48498__$1;
(statearr_48551_48602[(2)] = inst_48440);

(statearr_48551_48602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (37))){
var state_48498__$1 = state_48498;
var statearr_48552_48603 = state_48498__$1;
(statearr_48552_48603[(2)] = null);

(statearr_48552_48603[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (8))){
var inst_48400 = (state_48498[(8)]);
var inst_48418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48400);
var state_48498__$1 = state_48498;
var statearr_48553_48604 = state_48498__$1;
(statearr_48553_48604[(2)] = inst_48418);

(statearr_48553_48604[(1)] = (10));


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
});})(c__34071__auto___48558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33983__auto__,c__34071__auto___48558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33984__auto__ = null;
var cljs$core$async$mix_$_state_machine__33984__auto____0 = (function (){
var statearr_48554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48554[(0)] = cljs$core$async$mix_$_state_machine__33984__auto__);

(statearr_48554[(1)] = (1));

return statearr_48554;
});
var cljs$core$async$mix_$_state_machine__33984__auto____1 = (function (state_48498){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48555){if((e48555 instanceof Object)){
var ex__33987__auto__ = e48555;
var statearr_48556_48605 = state_48498;
(statearr_48556_48605[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48606 = state_48498;
state_48498 = G__48606;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33984__auto__ = function(state_48498){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33984__auto____1.call(this,state_48498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33984__auto____0;
cljs$core$async$mix_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33984__auto____1;
return cljs$core$async$mix_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___48558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34073__auto__ = (function (){var statearr_48557 = f__34072__auto__.call(null);
(statearr_48557[(6)] = c__34071__auto___48558);

return statearr_48557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___48558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__48608 = arguments.length;
switch (G__48608) {
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
var G__48612 = arguments.length;
switch (G__48612) {
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
return (function (p1__48610_SHARP_){
if(cljs.core.truth_(p1__48610_SHARP_.call(null,topic))){
return p1__48610_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48610_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28423__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48613 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48614){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48614 = meta48614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48615,meta48614__$1){
var self__ = this;
var _48615__$1 = this;
return (new cljs.core.async.t_cljs$core$async48613(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48614__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48615){
var self__ = this;
var _48615__$1 = this;
return self__.meta48614;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48614","meta48614",-613342802,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48613";

cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48613");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48613 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48614){
return (new cljs.core.async.t_cljs$core$async48613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48614));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48613(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34071__auto___48733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___48733,mults,ensure_mult,p){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___48733,mults,ensure_mult,p){
return (function (state_48687){
var state_val_48688 = (state_48687[(1)]);
if((state_val_48688 === (7))){
var inst_48683 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
var statearr_48689_48734 = state_48687__$1;
(statearr_48689_48734[(2)] = inst_48683);

(statearr_48689_48734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (20))){
var state_48687__$1 = state_48687;
var statearr_48690_48735 = state_48687__$1;
(statearr_48690_48735[(2)] = null);

(statearr_48690_48735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (1))){
var state_48687__$1 = state_48687;
var statearr_48691_48736 = state_48687__$1;
(statearr_48691_48736[(2)] = null);

(statearr_48691_48736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (24))){
var inst_48666 = (state_48687[(7)]);
var inst_48675 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48666);
var state_48687__$1 = state_48687;
var statearr_48692_48737 = state_48687__$1;
(statearr_48692_48737[(2)] = inst_48675);

(statearr_48692_48737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (4))){
var inst_48618 = (state_48687[(8)]);
var inst_48618__$1 = (state_48687[(2)]);
var inst_48619 = (inst_48618__$1 == null);
var state_48687__$1 = (function (){var statearr_48693 = state_48687;
(statearr_48693[(8)] = inst_48618__$1);

return statearr_48693;
})();
if(cljs.core.truth_(inst_48619)){
var statearr_48694_48738 = state_48687__$1;
(statearr_48694_48738[(1)] = (5));

} else {
var statearr_48695_48739 = state_48687__$1;
(statearr_48695_48739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (15))){
var inst_48660 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
var statearr_48696_48740 = state_48687__$1;
(statearr_48696_48740[(2)] = inst_48660);

(statearr_48696_48740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (21))){
var inst_48680 = (state_48687[(2)]);
var state_48687__$1 = (function (){var statearr_48697 = state_48687;
(statearr_48697[(9)] = inst_48680);

return statearr_48697;
})();
var statearr_48698_48741 = state_48687__$1;
(statearr_48698_48741[(2)] = null);

(statearr_48698_48741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (13))){
var inst_48642 = (state_48687[(10)]);
var inst_48644 = cljs.core.chunked_seq_QMARK_.call(null,inst_48642);
var state_48687__$1 = state_48687;
if(inst_48644){
var statearr_48699_48742 = state_48687__$1;
(statearr_48699_48742[(1)] = (16));

} else {
var statearr_48700_48743 = state_48687__$1;
(statearr_48700_48743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (22))){
var inst_48672 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
if(cljs.core.truth_(inst_48672)){
var statearr_48701_48744 = state_48687__$1;
(statearr_48701_48744[(1)] = (23));

} else {
var statearr_48702_48745 = state_48687__$1;
(statearr_48702_48745[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (6))){
var inst_48666 = (state_48687[(7)]);
var inst_48668 = (state_48687[(11)]);
var inst_48618 = (state_48687[(8)]);
var inst_48666__$1 = topic_fn.call(null,inst_48618);
var inst_48667 = cljs.core.deref.call(null,mults);
var inst_48668__$1 = cljs.core.get.call(null,inst_48667,inst_48666__$1);
var state_48687__$1 = (function (){var statearr_48703 = state_48687;
(statearr_48703[(7)] = inst_48666__$1);

(statearr_48703[(11)] = inst_48668__$1);

return statearr_48703;
})();
if(cljs.core.truth_(inst_48668__$1)){
var statearr_48704_48746 = state_48687__$1;
(statearr_48704_48746[(1)] = (19));

} else {
var statearr_48705_48747 = state_48687__$1;
(statearr_48705_48747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (25))){
var inst_48677 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
var statearr_48706_48748 = state_48687__$1;
(statearr_48706_48748[(2)] = inst_48677);

(statearr_48706_48748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (17))){
var inst_48642 = (state_48687[(10)]);
var inst_48651 = cljs.core.first.call(null,inst_48642);
var inst_48652 = cljs.core.async.muxch_STAR_.call(null,inst_48651);
var inst_48653 = cljs.core.async.close_BANG_.call(null,inst_48652);
var inst_48654 = cljs.core.next.call(null,inst_48642);
var inst_48628 = inst_48654;
var inst_48629 = null;
var inst_48630 = (0);
var inst_48631 = (0);
var state_48687__$1 = (function (){var statearr_48707 = state_48687;
(statearr_48707[(12)] = inst_48628);

(statearr_48707[(13)] = inst_48653);

(statearr_48707[(14)] = inst_48631);

(statearr_48707[(15)] = inst_48629);

(statearr_48707[(16)] = inst_48630);

return statearr_48707;
})();
var statearr_48708_48749 = state_48687__$1;
(statearr_48708_48749[(2)] = null);

(statearr_48708_48749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (3))){
var inst_48685 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48687__$1,inst_48685);
} else {
if((state_val_48688 === (12))){
var inst_48662 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
var statearr_48709_48750 = state_48687__$1;
(statearr_48709_48750[(2)] = inst_48662);

(statearr_48709_48750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (2))){
var state_48687__$1 = state_48687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48687__$1,(4),ch);
} else {
if((state_val_48688 === (23))){
var state_48687__$1 = state_48687;
var statearr_48710_48751 = state_48687__$1;
(statearr_48710_48751[(2)] = null);

(statearr_48710_48751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (19))){
var inst_48668 = (state_48687[(11)]);
var inst_48618 = (state_48687[(8)]);
var inst_48670 = cljs.core.async.muxch_STAR_.call(null,inst_48668);
var state_48687__$1 = state_48687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48687__$1,(22),inst_48670,inst_48618);
} else {
if((state_val_48688 === (11))){
var inst_48642 = (state_48687[(10)]);
var inst_48628 = (state_48687[(12)]);
var inst_48642__$1 = cljs.core.seq.call(null,inst_48628);
var state_48687__$1 = (function (){var statearr_48711 = state_48687;
(statearr_48711[(10)] = inst_48642__$1);

return statearr_48711;
})();
if(inst_48642__$1){
var statearr_48712_48752 = state_48687__$1;
(statearr_48712_48752[(1)] = (13));

} else {
var statearr_48713_48753 = state_48687__$1;
(statearr_48713_48753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (9))){
var inst_48664 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
var statearr_48714_48754 = state_48687__$1;
(statearr_48714_48754[(2)] = inst_48664);

(statearr_48714_48754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (5))){
var inst_48625 = cljs.core.deref.call(null,mults);
var inst_48626 = cljs.core.vals.call(null,inst_48625);
var inst_48627 = cljs.core.seq.call(null,inst_48626);
var inst_48628 = inst_48627;
var inst_48629 = null;
var inst_48630 = (0);
var inst_48631 = (0);
var state_48687__$1 = (function (){var statearr_48715 = state_48687;
(statearr_48715[(12)] = inst_48628);

(statearr_48715[(14)] = inst_48631);

(statearr_48715[(15)] = inst_48629);

(statearr_48715[(16)] = inst_48630);

return statearr_48715;
})();
var statearr_48716_48755 = state_48687__$1;
(statearr_48716_48755[(2)] = null);

(statearr_48716_48755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (14))){
var state_48687__$1 = state_48687;
var statearr_48720_48756 = state_48687__$1;
(statearr_48720_48756[(2)] = null);

(statearr_48720_48756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (16))){
var inst_48642 = (state_48687[(10)]);
var inst_48646 = cljs.core.chunk_first.call(null,inst_48642);
var inst_48647 = cljs.core.chunk_rest.call(null,inst_48642);
var inst_48648 = cljs.core.count.call(null,inst_48646);
var inst_48628 = inst_48647;
var inst_48629 = inst_48646;
var inst_48630 = inst_48648;
var inst_48631 = (0);
var state_48687__$1 = (function (){var statearr_48721 = state_48687;
(statearr_48721[(12)] = inst_48628);

(statearr_48721[(14)] = inst_48631);

(statearr_48721[(15)] = inst_48629);

(statearr_48721[(16)] = inst_48630);

return statearr_48721;
})();
var statearr_48722_48757 = state_48687__$1;
(statearr_48722_48757[(2)] = null);

(statearr_48722_48757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (10))){
var inst_48628 = (state_48687[(12)]);
var inst_48631 = (state_48687[(14)]);
var inst_48629 = (state_48687[(15)]);
var inst_48630 = (state_48687[(16)]);
var inst_48636 = cljs.core._nth.call(null,inst_48629,inst_48631);
var inst_48637 = cljs.core.async.muxch_STAR_.call(null,inst_48636);
var inst_48638 = cljs.core.async.close_BANG_.call(null,inst_48637);
var inst_48639 = (inst_48631 + (1));
var tmp48717 = inst_48628;
var tmp48718 = inst_48629;
var tmp48719 = inst_48630;
var inst_48628__$1 = tmp48717;
var inst_48629__$1 = tmp48718;
var inst_48630__$1 = tmp48719;
var inst_48631__$1 = inst_48639;
var state_48687__$1 = (function (){var statearr_48723 = state_48687;
(statearr_48723[(17)] = inst_48638);

(statearr_48723[(12)] = inst_48628__$1);

(statearr_48723[(14)] = inst_48631__$1);

(statearr_48723[(15)] = inst_48629__$1);

(statearr_48723[(16)] = inst_48630__$1);

return statearr_48723;
})();
var statearr_48724_48758 = state_48687__$1;
(statearr_48724_48758[(2)] = null);

(statearr_48724_48758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (18))){
var inst_48657 = (state_48687[(2)]);
var state_48687__$1 = state_48687;
var statearr_48725_48759 = state_48687__$1;
(statearr_48725_48759[(2)] = inst_48657);

(statearr_48725_48759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48688 === (8))){
var inst_48631 = (state_48687[(14)]);
var inst_48630 = (state_48687[(16)]);
var inst_48633 = (inst_48631 < inst_48630);
var inst_48634 = inst_48633;
var state_48687__$1 = state_48687;
if(cljs.core.truth_(inst_48634)){
var statearr_48726_48760 = state_48687__$1;
(statearr_48726_48760[(1)] = (10));

} else {
var statearr_48727_48761 = state_48687__$1;
(statearr_48727_48761[(1)] = (11));

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
});})(c__34071__auto___48733,mults,ensure_mult,p))
;
return ((function (switch__33983__auto__,c__34071__auto___48733,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_48728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48728[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_48728[(1)] = (1));

return statearr_48728;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_48687){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48729){if((e48729 instanceof Object)){
var ex__33987__auto__ = e48729;
var statearr_48730_48762 = state_48687;
(statearr_48730_48762[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48763 = state_48687;
state_48687 = G__48763;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_48687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_48687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___48733,mults,ensure_mult,p))
})();
var state__34073__auto__ = (function (){var statearr_48731 = f__34072__auto__.call(null);
(statearr_48731[(6)] = c__34071__auto___48733);

return statearr_48731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___48733,mults,ensure_mult,p))
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
var G__48765 = arguments.length;
switch (G__48765) {
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
var G__48768 = arguments.length;
switch (G__48768) {
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
var G__48771 = arguments.length;
switch (G__48771) {
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
var c__34071__auto___48838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___48838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___48838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48810){
var state_val_48811 = (state_48810[(1)]);
if((state_val_48811 === (7))){
var state_48810__$1 = state_48810;
var statearr_48812_48839 = state_48810__$1;
(statearr_48812_48839[(2)] = null);

(statearr_48812_48839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (1))){
var state_48810__$1 = state_48810;
var statearr_48813_48840 = state_48810__$1;
(statearr_48813_48840[(2)] = null);

(statearr_48813_48840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (4))){
var inst_48774 = (state_48810[(7)]);
var inst_48776 = (inst_48774 < cnt);
var state_48810__$1 = state_48810;
if(cljs.core.truth_(inst_48776)){
var statearr_48814_48841 = state_48810__$1;
(statearr_48814_48841[(1)] = (6));

} else {
var statearr_48815_48842 = state_48810__$1;
(statearr_48815_48842[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (15))){
var inst_48806 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
var statearr_48816_48843 = state_48810__$1;
(statearr_48816_48843[(2)] = inst_48806);

(statearr_48816_48843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (13))){
var inst_48799 = cljs.core.async.close_BANG_.call(null,out);
var state_48810__$1 = state_48810;
var statearr_48817_48844 = state_48810__$1;
(statearr_48817_48844[(2)] = inst_48799);

(statearr_48817_48844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (6))){
var state_48810__$1 = state_48810;
var statearr_48818_48845 = state_48810__$1;
(statearr_48818_48845[(2)] = null);

(statearr_48818_48845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (3))){
var inst_48808 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48810__$1,inst_48808);
} else {
if((state_val_48811 === (12))){
var inst_48796 = (state_48810[(8)]);
var inst_48796__$1 = (state_48810[(2)]);
var inst_48797 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48796__$1);
var state_48810__$1 = (function (){var statearr_48819 = state_48810;
(statearr_48819[(8)] = inst_48796__$1);

return statearr_48819;
})();
if(cljs.core.truth_(inst_48797)){
var statearr_48820_48846 = state_48810__$1;
(statearr_48820_48846[(1)] = (13));

} else {
var statearr_48821_48847 = state_48810__$1;
(statearr_48821_48847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (2))){
var inst_48773 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48774 = (0);
var state_48810__$1 = (function (){var statearr_48822 = state_48810;
(statearr_48822[(9)] = inst_48773);

(statearr_48822[(7)] = inst_48774);

return statearr_48822;
})();
var statearr_48823_48848 = state_48810__$1;
(statearr_48823_48848[(2)] = null);

(statearr_48823_48848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (11))){
var inst_48774 = (state_48810[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48810,(10),Object,null,(9));
var inst_48783 = chs__$1.call(null,inst_48774);
var inst_48784 = done.call(null,inst_48774);
var inst_48785 = cljs.core.async.take_BANG_.call(null,inst_48783,inst_48784);
var state_48810__$1 = state_48810;
var statearr_48824_48849 = state_48810__$1;
(statearr_48824_48849[(2)] = inst_48785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48810__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (9))){
var inst_48774 = (state_48810[(7)]);
var inst_48787 = (state_48810[(2)]);
var inst_48788 = (inst_48774 + (1));
var inst_48774__$1 = inst_48788;
var state_48810__$1 = (function (){var statearr_48825 = state_48810;
(statearr_48825[(7)] = inst_48774__$1);

(statearr_48825[(10)] = inst_48787);

return statearr_48825;
})();
var statearr_48826_48850 = state_48810__$1;
(statearr_48826_48850[(2)] = null);

(statearr_48826_48850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (5))){
var inst_48794 = (state_48810[(2)]);
var state_48810__$1 = (function (){var statearr_48827 = state_48810;
(statearr_48827[(11)] = inst_48794);

return statearr_48827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48810__$1,(12),dchan);
} else {
if((state_val_48811 === (14))){
var inst_48796 = (state_48810[(8)]);
var inst_48801 = cljs.core.apply.call(null,f,inst_48796);
var state_48810__$1 = state_48810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48810__$1,(16),out,inst_48801);
} else {
if((state_val_48811 === (16))){
var inst_48803 = (state_48810[(2)]);
var state_48810__$1 = (function (){var statearr_48828 = state_48810;
(statearr_48828[(12)] = inst_48803);

return statearr_48828;
})();
var statearr_48829_48851 = state_48810__$1;
(statearr_48829_48851[(2)] = null);

(statearr_48829_48851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (10))){
var inst_48778 = (state_48810[(2)]);
var inst_48779 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48810__$1 = (function (){var statearr_48830 = state_48810;
(statearr_48830[(13)] = inst_48778);

return statearr_48830;
})();
var statearr_48831_48852 = state_48810__$1;
(statearr_48831_48852[(2)] = inst_48779);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48810__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (8))){
var inst_48792 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
var statearr_48832_48853 = state_48810__$1;
(statearr_48832_48853[(2)] = inst_48792);

(statearr_48832_48853[(1)] = (5));


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
});})(c__34071__auto___48838,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33983__auto__,c__34071__auto___48838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_48833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48833[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_48833[(1)] = (1));

return statearr_48833;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_48810){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48834){if((e48834 instanceof Object)){
var ex__33987__auto__ = e48834;
var statearr_48835_48854 = state_48810;
(statearr_48835_48854[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48855 = state_48810;
state_48810 = G__48855;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_48810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_48810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___48838,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34073__auto__ = (function (){var statearr_48836 = f__34072__auto__.call(null);
(statearr_48836[(6)] = c__34071__auto___48838);

return statearr_48836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___48838,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48858 = arguments.length;
switch (G__48858) {
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
var c__34071__auto___48912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___48912,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___48912,out){
return (function (state_48890){
var state_val_48891 = (state_48890[(1)]);
if((state_val_48891 === (7))){
var inst_48869 = (state_48890[(7)]);
var inst_48870 = (state_48890[(8)]);
var inst_48869__$1 = (state_48890[(2)]);
var inst_48870__$1 = cljs.core.nth.call(null,inst_48869__$1,(0),null);
var inst_48871 = cljs.core.nth.call(null,inst_48869__$1,(1),null);
var inst_48872 = (inst_48870__$1 == null);
var state_48890__$1 = (function (){var statearr_48892 = state_48890;
(statearr_48892[(7)] = inst_48869__$1);

(statearr_48892[(9)] = inst_48871);

(statearr_48892[(8)] = inst_48870__$1);

return statearr_48892;
})();
if(cljs.core.truth_(inst_48872)){
var statearr_48893_48913 = state_48890__$1;
(statearr_48893_48913[(1)] = (8));

} else {
var statearr_48894_48914 = state_48890__$1;
(statearr_48894_48914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (1))){
var inst_48859 = cljs.core.vec.call(null,chs);
var inst_48860 = inst_48859;
var state_48890__$1 = (function (){var statearr_48895 = state_48890;
(statearr_48895[(10)] = inst_48860);

return statearr_48895;
})();
var statearr_48896_48915 = state_48890__$1;
(statearr_48896_48915[(2)] = null);

(statearr_48896_48915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (4))){
var inst_48860 = (state_48890[(10)]);
var state_48890__$1 = state_48890;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48890__$1,(7),inst_48860);
} else {
if((state_val_48891 === (6))){
var inst_48886 = (state_48890[(2)]);
var state_48890__$1 = state_48890;
var statearr_48897_48916 = state_48890__$1;
(statearr_48897_48916[(2)] = inst_48886);

(statearr_48897_48916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (3))){
var inst_48888 = (state_48890[(2)]);
var state_48890__$1 = state_48890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48890__$1,inst_48888);
} else {
if((state_val_48891 === (2))){
var inst_48860 = (state_48890[(10)]);
var inst_48862 = cljs.core.count.call(null,inst_48860);
var inst_48863 = (inst_48862 > (0));
var state_48890__$1 = state_48890;
if(cljs.core.truth_(inst_48863)){
var statearr_48899_48917 = state_48890__$1;
(statearr_48899_48917[(1)] = (4));

} else {
var statearr_48900_48918 = state_48890__$1;
(statearr_48900_48918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (11))){
var inst_48860 = (state_48890[(10)]);
var inst_48879 = (state_48890[(2)]);
var tmp48898 = inst_48860;
var inst_48860__$1 = tmp48898;
var state_48890__$1 = (function (){var statearr_48901 = state_48890;
(statearr_48901[(11)] = inst_48879);

(statearr_48901[(10)] = inst_48860__$1);

return statearr_48901;
})();
var statearr_48902_48919 = state_48890__$1;
(statearr_48902_48919[(2)] = null);

(statearr_48902_48919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (9))){
var inst_48870 = (state_48890[(8)]);
var state_48890__$1 = state_48890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48890__$1,(11),out,inst_48870);
} else {
if((state_val_48891 === (5))){
var inst_48884 = cljs.core.async.close_BANG_.call(null,out);
var state_48890__$1 = state_48890;
var statearr_48903_48920 = state_48890__$1;
(statearr_48903_48920[(2)] = inst_48884);

(statearr_48903_48920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (10))){
var inst_48882 = (state_48890[(2)]);
var state_48890__$1 = state_48890;
var statearr_48904_48921 = state_48890__$1;
(statearr_48904_48921[(2)] = inst_48882);

(statearr_48904_48921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48891 === (8))){
var inst_48869 = (state_48890[(7)]);
var inst_48871 = (state_48890[(9)]);
var inst_48870 = (state_48890[(8)]);
var inst_48860 = (state_48890[(10)]);
var inst_48874 = (function (){var cs = inst_48860;
var vec__48865 = inst_48869;
var v = inst_48870;
var c = inst_48871;
return ((function (cs,vec__48865,v,c,inst_48869,inst_48871,inst_48870,inst_48860,state_val_48891,c__34071__auto___48912,out){
return (function (p1__48856_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48856_SHARP_);
});
;})(cs,vec__48865,v,c,inst_48869,inst_48871,inst_48870,inst_48860,state_val_48891,c__34071__auto___48912,out))
})();
var inst_48875 = cljs.core.filterv.call(null,inst_48874,inst_48860);
var inst_48860__$1 = inst_48875;
var state_48890__$1 = (function (){var statearr_48905 = state_48890;
(statearr_48905[(10)] = inst_48860__$1);

return statearr_48905;
})();
var statearr_48906_48922 = state_48890__$1;
(statearr_48906_48922[(2)] = null);

(statearr_48906_48922[(1)] = (2));


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
});})(c__34071__auto___48912,out))
;
return ((function (switch__33983__auto__,c__34071__auto___48912,out){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_48907 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48907[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_48907[(1)] = (1));

return statearr_48907;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_48890){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48908){if((e48908 instanceof Object)){
var ex__33987__auto__ = e48908;
var statearr_48909_48923 = state_48890;
(statearr_48909_48923[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48924 = state_48890;
state_48890 = G__48924;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_48890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_48890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___48912,out))
})();
var state__34073__auto__ = (function (){var statearr_48910 = f__34072__auto__.call(null);
(statearr_48910[(6)] = c__34071__auto___48912);

return statearr_48910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___48912,out))
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
var G__48926 = arguments.length;
switch (G__48926) {
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
var c__34071__auto___48971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___48971,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___48971,out){
return (function (state_48950){
var state_val_48951 = (state_48950[(1)]);
if((state_val_48951 === (7))){
var inst_48932 = (state_48950[(7)]);
var inst_48932__$1 = (state_48950[(2)]);
var inst_48933 = (inst_48932__$1 == null);
var inst_48934 = cljs.core.not.call(null,inst_48933);
var state_48950__$1 = (function (){var statearr_48952 = state_48950;
(statearr_48952[(7)] = inst_48932__$1);

return statearr_48952;
})();
if(inst_48934){
var statearr_48953_48972 = state_48950__$1;
(statearr_48953_48972[(1)] = (8));

} else {
var statearr_48954_48973 = state_48950__$1;
(statearr_48954_48973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (1))){
var inst_48927 = (0);
var state_48950__$1 = (function (){var statearr_48955 = state_48950;
(statearr_48955[(8)] = inst_48927);

return statearr_48955;
})();
var statearr_48956_48974 = state_48950__$1;
(statearr_48956_48974[(2)] = null);

(statearr_48956_48974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (4))){
var state_48950__$1 = state_48950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48950__$1,(7),ch);
} else {
if((state_val_48951 === (6))){
var inst_48945 = (state_48950[(2)]);
var state_48950__$1 = state_48950;
var statearr_48957_48975 = state_48950__$1;
(statearr_48957_48975[(2)] = inst_48945);

(statearr_48957_48975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (3))){
var inst_48947 = (state_48950[(2)]);
var inst_48948 = cljs.core.async.close_BANG_.call(null,out);
var state_48950__$1 = (function (){var statearr_48958 = state_48950;
(statearr_48958[(9)] = inst_48947);

return statearr_48958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48950__$1,inst_48948);
} else {
if((state_val_48951 === (2))){
var inst_48927 = (state_48950[(8)]);
var inst_48929 = (inst_48927 < n);
var state_48950__$1 = state_48950;
if(cljs.core.truth_(inst_48929)){
var statearr_48959_48976 = state_48950__$1;
(statearr_48959_48976[(1)] = (4));

} else {
var statearr_48960_48977 = state_48950__$1;
(statearr_48960_48977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (11))){
var inst_48927 = (state_48950[(8)]);
var inst_48937 = (state_48950[(2)]);
var inst_48938 = (inst_48927 + (1));
var inst_48927__$1 = inst_48938;
var state_48950__$1 = (function (){var statearr_48961 = state_48950;
(statearr_48961[(10)] = inst_48937);

(statearr_48961[(8)] = inst_48927__$1);

return statearr_48961;
})();
var statearr_48962_48978 = state_48950__$1;
(statearr_48962_48978[(2)] = null);

(statearr_48962_48978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (9))){
var state_48950__$1 = state_48950;
var statearr_48963_48979 = state_48950__$1;
(statearr_48963_48979[(2)] = null);

(statearr_48963_48979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (5))){
var state_48950__$1 = state_48950;
var statearr_48964_48980 = state_48950__$1;
(statearr_48964_48980[(2)] = null);

(statearr_48964_48980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (10))){
var inst_48942 = (state_48950[(2)]);
var state_48950__$1 = state_48950;
var statearr_48965_48981 = state_48950__$1;
(statearr_48965_48981[(2)] = inst_48942);

(statearr_48965_48981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48951 === (8))){
var inst_48932 = (state_48950[(7)]);
var state_48950__$1 = state_48950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48950__$1,(11),out,inst_48932);
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
});})(c__34071__auto___48971,out))
;
return ((function (switch__33983__auto__,c__34071__auto___48971,out){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_48966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48966[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_48966[(1)] = (1));

return statearr_48966;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_48950){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_48950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e48967){if((e48967 instanceof Object)){
var ex__33987__auto__ = e48967;
var statearr_48968_48982 = state_48950;
(statearr_48968_48982[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48983 = state_48950;
state_48950 = G__48983;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_48950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_48950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___48971,out))
})();
var state__34073__auto__ = (function (){var statearr_48969 = f__34072__auto__.call(null);
(statearr_48969[(6)] = c__34071__auto___48971);

return statearr_48969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___48971,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48985 = (function (f,ch,meta48986){
this.f = f;
this.ch = ch;
this.meta48986 = meta48986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48987,meta48986__$1){
var self__ = this;
var _48987__$1 = this;
return (new cljs.core.async.t_cljs$core$async48985(self__.f,self__.ch,meta48986__$1));
});

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48987){
var self__ = this;
var _48987__$1 = this;
return self__.meta48986;
});

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48988 = (function (f,ch,meta48986,_,fn1,meta48989){
this.f = f;
this.ch = ch;
this.meta48986 = meta48986;
this._ = _;
this.fn1 = fn1;
this.meta48989 = meta48989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48990,meta48989__$1){
var self__ = this;
var _48990__$1 = this;
return (new cljs.core.async.t_cljs$core$async48988(self__.f,self__.ch,self__.meta48986,self__._,self__.fn1,meta48989__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48990){
var self__ = this;
var _48990__$1 = this;
return self__.meta48989;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48984_SHARP_){
return f1.call(null,(((p1__48984_SHARP_ == null))?null:self__.f.call(null,p1__48984_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48988.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48986","meta48986",-746946775,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48985","cljs.core.async/t_cljs$core$async48985",270333230,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48989","meta48989",-626958397,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48988";

cljs.core.async.t_cljs$core$async48988.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48988");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48988 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48988(f__$1,ch__$1,meta48986__$1,___$2,fn1__$1,meta48989){
return (new cljs.core.async.t_cljs$core$async48988(f__$1,ch__$1,meta48986__$1,___$2,fn1__$1,meta48989));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48988(self__.f,self__.ch,self__.meta48986,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48986","meta48986",-746946775,null)], null);
});

cljs.core.async.t_cljs$core$async48985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48985";

cljs.core.async.t_cljs$core$async48985.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48985");
});

cljs.core.async.__GT_t_cljs$core$async48985 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48985(f__$1,ch__$1,meta48986){
return (new cljs.core.async.t_cljs$core$async48985(f__$1,ch__$1,meta48986));
});

}

return (new cljs.core.async.t_cljs$core$async48985(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48991 = (function (f,ch,meta48992){
this.f = f;
this.ch = ch;
this.meta48992 = meta48992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48993,meta48992__$1){
var self__ = this;
var _48993__$1 = this;
return (new cljs.core.async.t_cljs$core$async48991(self__.f,self__.ch,meta48992__$1));
});

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48993){
var self__ = this;
var _48993__$1 = this;
return self__.meta48992;
});

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48992","meta48992",-82303227,null)], null);
});

cljs.core.async.t_cljs$core$async48991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48991";

cljs.core.async.t_cljs$core$async48991.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48991");
});

cljs.core.async.__GT_t_cljs$core$async48991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48991(f__$1,ch__$1,meta48992){
return (new cljs.core.async.t_cljs$core$async48991(f__$1,ch__$1,meta48992));
});

}

return (new cljs.core.async.t_cljs$core$async48991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48994 = (function (p,ch,meta48995){
this.p = p;
this.ch = ch;
this.meta48995 = meta48995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48996,meta48995__$1){
var self__ = this;
var _48996__$1 = this;
return (new cljs.core.async.t_cljs$core$async48994(self__.p,self__.ch,meta48995__$1));
});

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48996){
var self__ = this;
var _48996__$1 = this;
return self__.meta48995;
});

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48995","meta48995",-1609624484,null)], null);
});

cljs.core.async.t_cljs$core$async48994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48994";

cljs.core.async.t_cljs$core$async48994.cljs$lang$ctorPrWriter = (function (this__29048__auto__,writer__29049__auto__,opt__29050__auto__){
return cljs.core._write.call(null,writer__29049__auto__,"cljs.core.async/t_cljs$core$async48994");
});

cljs.core.async.__GT_t_cljs$core$async48994 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48994(p__$1,ch__$1,meta48995){
return (new cljs.core.async.t_cljs$core$async48994(p__$1,ch__$1,meta48995));
});

}

return (new cljs.core.async.t_cljs$core$async48994(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48998 = arguments.length;
switch (G__48998) {
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
var c__34071__auto___49038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___49038,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___49038,out){
return (function (state_49019){
var state_val_49020 = (state_49019[(1)]);
if((state_val_49020 === (7))){
var inst_49015 = (state_49019[(2)]);
var state_49019__$1 = state_49019;
var statearr_49021_49039 = state_49019__$1;
(statearr_49021_49039[(2)] = inst_49015);

(statearr_49021_49039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (1))){
var state_49019__$1 = state_49019;
var statearr_49022_49040 = state_49019__$1;
(statearr_49022_49040[(2)] = null);

(statearr_49022_49040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (4))){
var inst_49001 = (state_49019[(7)]);
var inst_49001__$1 = (state_49019[(2)]);
var inst_49002 = (inst_49001__$1 == null);
var state_49019__$1 = (function (){var statearr_49023 = state_49019;
(statearr_49023[(7)] = inst_49001__$1);

return statearr_49023;
})();
if(cljs.core.truth_(inst_49002)){
var statearr_49024_49041 = state_49019__$1;
(statearr_49024_49041[(1)] = (5));

} else {
var statearr_49025_49042 = state_49019__$1;
(statearr_49025_49042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (6))){
var inst_49001 = (state_49019[(7)]);
var inst_49006 = p.call(null,inst_49001);
var state_49019__$1 = state_49019;
if(cljs.core.truth_(inst_49006)){
var statearr_49026_49043 = state_49019__$1;
(statearr_49026_49043[(1)] = (8));

} else {
var statearr_49027_49044 = state_49019__$1;
(statearr_49027_49044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (3))){
var inst_49017 = (state_49019[(2)]);
var state_49019__$1 = state_49019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49019__$1,inst_49017);
} else {
if((state_val_49020 === (2))){
var state_49019__$1 = state_49019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49019__$1,(4),ch);
} else {
if((state_val_49020 === (11))){
var inst_49009 = (state_49019[(2)]);
var state_49019__$1 = state_49019;
var statearr_49028_49045 = state_49019__$1;
(statearr_49028_49045[(2)] = inst_49009);

(statearr_49028_49045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (9))){
var state_49019__$1 = state_49019;
var statearr_49029_49046 = state_49019__$1;
(statearr_49029_49046[(2)] = null);

(statearr_49029_49046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (5))){
var inst_49004 = cljs.core.async.close_BANG_.call(null,out);
var state_49019__$1 = state_49019;
var statearr_49030_49047 = state_49019__$1;
(statearr_49030_49047[(2)] = inst_49004);

(statearr_49030_49047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (10))){
var inst_49012 = (state_49019[(2)]);
var state_49019__$1 = (function (){var statearr_49031 = state_49019;
(statearr_49031[(8)] = inst_49012);

return statearr_49031;
})();
var statearr_49032_49048 = state_49019__$1;
(statearr_49032_49048[(2)] = null);

(statearr_49032_49048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (8))){
var inst_49001 = (state_49019[(7)]);
var state_49019__$1 = state_49019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49019__$1,(11),out,inst_49001);
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
});})(c__34071__auto___49038,out))
;
return ((function (switch__33983__auto__,c__34071__auto___49038,out){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_49033 = [null,null,null,null,null,null,null,null,null];
(statearr_49033[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_49033[(1)] = (1));

return statearr_49033;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_49019){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49034){if((e49034 instanceof Object)){
var ex__33987__auto__ = e49034;
var statearr_49035_49049 = state_49019;
(statearr_49035_49049[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49050 = state_49019;
state_49019 = G__49050;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_49019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_49019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___49038,out))
})();
var state__34073__auto__ = (function (){var statearr_49036 = f__34072__auto__.call(null);
(statearr_49036[(6)] = c__34071__auto___49038);

return statearr_49036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___49038,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49052 = arguments.length;
switch (G__49052) {
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
var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__){
return (function (state_49115){
var state_val_49116 = (state_49115[(1)]);
if((state_val_49116 === (7))){
var inst_49111 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
var statearr_49117_49155 = state_49115__$1;
(statearr_49117_49155[(2)] = inst_49111);

(statearr_49117_49155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (20))){
var inst_49081 = (state_49115[(7)]);
var inst_49092 = (state_49115[(2)]);
var inst_49093 = cljs.core.next.call(null,inst_49081);
var inst_49067 = inst_49093;
var inst_49068 = null;
var inst_49069 = (0);
var inst_49070 = (0);
var state_49115__$1 = (function (){var statearr_49118 = state_49115;
(statearr_49118[(8)] = inst_49070);

(statearr_49118[(9)] = inst_49092);

(statearr_49118[(10)] = inst_49069);

(statearr_49118[(11)] = inst_49067);

(statearr_49118[(12)] = inst_49068);

return statearr_49118;
})();
var statearr_49119_49156 = state_49115__$1;
(statearr_49119_49156[(2)] = null);

(statearr_49119_49156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (1))){
var state_49115__$1 = state_49115;
var statearr_49120_49157 = state_49115__$1;
(statearr_49120_49157[(2)] = null);

(statearr_49120_49157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (4))){
var inst_49056 = (state_49115[(13)]);
var inst_49056__$1 = (state_49115[(2)]);
var inst_49057 = (inst_49056__$1 == null);
var state_49115__$1 = (function (){var statearr_49121 = state_49115;
(statearr_49121[(13)] = inst_49056__$1);

return statearr_49121;
})();
if(cljs.core.truth_(inst_49057)){
var statearr_49122_49158 = state_49115__$1;
(statearr_49122_49158[(1)] = (5));

} else {
var statearr_49123_49159 = state_49115__$1;
(statearr_49123_49159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (15))){
var state_49115__$1 = state_49115;
var statearr_49127_49160 = state_49115__$1;
(statearr_49127_49160[(2)] = null);

(statearr_49127_49160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (21))){
var state_49115__$1 = state_49115;
var statearr_49128_49161 = state_49115__$1;
(statearr_49128_49161[(2)] = null);

(statearr_49128_49161[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (13))){
var inst_49070 = (state_49115[(8)]);
var inst_49069 = (state_49115[(10)]);
var inst_49067 = (state_49115[(11)]);
var inst_49068 = (state_49115[(12)]);
var inst_49077 = (state_49115[(2)]);
var inst_49078 = (inst_49070 + (1));
var tmp49124 = inst_49069;
var tmp49125 = inst_49067;
var tmp49126 = inst_49068;
var inst_49067__$1 = tmp49125;
var inst_49068__$1 = tmp49126;
var inst_49069__$1 = tmp49124;
var inst_49070__$1 = inst_49078;
var state_49115__$1 = (function (){var statearr_49129 = state_49115;
(statearr_49129[(8)] = inst_49070__$1);

(statearr_49129[(14)] = inst_49077);

(statearr_49129[(10)] = inst_49069__$1);

(statearr_49129[(11)] = inst_49067__$1);

(statearr_49129[(12)] = inst_49068__$1);

return statearr_49129;
})();
var statearr_49130_49162 = state_49115__$1;
(statearr_49130_49162[(2)] = null);

(statearr_49130_49162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (22))){
var state_49115__$1 = state_49115;
var statearr_49131_49163 = state_49115__$1;
(statearr_49131_49163[(2)] = null);

(statearr_49131_49163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (6))){
var inst_49056 = (state_49115[(13)]);
var inst_49065 = f.call(null,inst_49056);
var inst_49066 = cljs.core.seq.call(null,inst_49065);
var inst_49067 = inst_49066;
var inst_49068 = null;
var inst_49069 = (0);
var inst_49070 = (0);
var state_49115__$1 = (function (){var statearr_49132 = state_49115;
(statearr_49132[(8)] = inst_49070);

(statearr_49132[(10)] = inst_49069);

(statearr_49132[(11)] = inst_49067);

(statearr_49132[(12)] = inst_49068);

return statearr_49132;
})();
var statearr_49133_49164 = state_49115__$1;
(statearr_49133_49164[(2)] = null);

(statearr_49133_49164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (17))){
var inst_49081 = (state_49115[(7)]);
var inst_49085 = cljs.core.chunk_first.call(null,inst_49081);
var inst_49086 = cljs.core.chunk_rest.call(null,inst_49081);
var inst_49087 = cljs.core.count.call(null,inst_49085);
var inst_49067 = inst_49086;
var inst_49068 = inst_49085;
var inst_49069 = inst_49087;
var inst_49070 = (0);
var state_49115__$1 = (function (){var statearr_49134 = state_49115;
(statearr_49134[(8)] = inst_49070);

(statearr_49134[(10)] = inst_49069);

(statearr_49134[(11)] = inst_49067);

(statearr_49134[(12)] = inst_49068);

return statearr_49134;
})();
var statearr_49135_49165 = state_49115__$1;
(statearr_49135_49165[(2)] = null);

(statearr_49135_49165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (3))){
var inst_49113 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49115__$1,inst_49113);
} else {
if((state_val_49116 === (12))){
var inst_49101 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
var statearr_49136_49166 = state_49115__$1;
(statearr_49136_49166[(2)] = inst_49101);

(statearr_49136_49166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (2))){
var state_49115__$1 = state_49115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49115__$1,(4),in$);
} else {
if((state_val_49116 === (23))){
var inst_49109 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
var statearr_49137_49167 = state_49115__$1;
(statearr_49137_49167[(2)] = inst_49109);

(statearr_49137_49167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (19))){
var inst_49096 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
var statearr_49138_49168 = state_49115__$1;
(statearr_49138_49168[(2)] = inst_49096);

(statearr_49138_49168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (11))){
var inst_49081 = (state_49115[(7)]);
var inst_49067 = (state_49115[(11)]);
var inst_49081__$1 = cljs.core.seq.call(null,inst_49067);
var state_49115__$1 = (function (){var statearr_49139 = state_49115;
(statearr_49139[(7)] = inst_49081__$1);

return statearr_49139;
})();
if(inst_49081__$1){
var statearr_49140_49169 = state_49115__$1;
(statearr_49140_49169[(1)] = (14));

} else {
var statearr_49141_49170 = state_49115__$1;
(statearr_49141_49170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (9))){
var inst_49103 = (state_49115[(2)]);
var inst_49104 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49115__$1 = (function (){var statearr_49142 = state_49115;
(statearr_49142[(15)] = inst_49103);

return statearr_49142;
})();
if(cljs.core.truth_(inst_49104)){
var statearr_49143_49171 = state_49115__$1;
(statearr_49143_49171[(1)] = (21));

} else {
var statearr_49144_49172 = state_49115__$1;
(statearr_49144_49172[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (5))){
var inst_49059 = cljs.core.async.close_BANG_.call(null,out);
var state_49115__$1 = state_49115;
var statearr_49145_49173 = state_49115__$1;
(statearr_49145_49173[(2)] = inst_49059);

(statearr_49145_49173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (14))){
var inst_49081 = (state_49115[(7)]);
var inst_49083 = cljs.core.chunked_seq_QMARK_.call(null,inst_49081);
var state_49115__$1 = state_49115;
if(inst_49083){
var statearr_49146_49174 = state_49115__$1;
(statearr_49146_49174[(1)] = (17));

} else {
var statearr_49147_49175 = state_49115__$1;
(statearr_49147_49175[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (16))){
var inst_49099 = (state_49115[(2)]);
var state_49115__$1 = state_49115;
var statearr_49148_49176 = state_49115__$1;
(statearr_49148_49176[(2)] = inst_49099);

(statearr_49148_49176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49116 === (10))){
var inst_49070 = (state_49115[(8)]);
var inst_49068 = (state_49115[(12)]);
var inst_49075 = cljs.core._nth.call(null,inst_49068,inst_49070);
var state_49115__$1 = state_49115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49115__$1,(13),out,inst_49075);
} else {
if((state_val_49116 === (18))){
var inst_49081 = (state_49115[(7)]);
var inst_49090 = cljs.core.first.call(null,inst_49081);
var state_49115__$1 = state_49115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49115__$1,(20),out,inst_49090);
} else {
if((state_val_49116 === (8))){
var inst_49070 = (state_49115[(8)]);
var inst_49069 = (state_49115[(10)]);
var inst_49072 = (inst_49070 < inst_49069);
var inst_49073 = inst_49072;
var state_49115__$1 = state_49115;
if(cljs.core.truth_(inst_49073)){
var statearr_49149_49177 = state_49115__$1;
(statearr_49149_49177[(1)] = (10));

} else {
var statearr_49150_49178 = state_49115__$1;
(statearr_49150_49178[(1)] = (11));

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
});})(c__34071__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33984__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33984__auto____0 = (function (){
var statearr_49151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49151[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33984__auto__);

(statearr_49151[(1)] = (1));

return statearr_49151;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33984__auto____1 = (function (state_49115){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49152){if((e49152 instanceof Object)){
var ex__33987__auto__ = e49152;
var statearr_49153_49179 = state_49115;
(statearr_49153_49179[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49180 = state_49115;
state_49115 = G__49180;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33984__auto__ = function(state_49115){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33984__auto____1.call(this,state_49115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33984__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33984__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_49154 = f__34072__auto__.call(null);
(statearr_49154[(6)] = c__34071__auto__);

return statearr_49154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49182 = arguments.length;
switch (G__49182) {
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
var G__49185 = arguments.length;
switch (G__49185) {
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
var G__49188 = arguments.length;
switch (G__49188) {
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
var c__34071__auto___49235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___49235,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___49235,out){
return (function (state_49212){
var state_val_49213 = (state_49212[(1)]);
if((state_val_49213 === (7))){
var inst_49207 = (state_49212[(2)]);
var state_49212__$1 = state_49212;
var statearr_49214_49236 = state_49212__$1;
(statearr_49214_49236[(2)] = inst_49207);

(statearr_49214_49236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (1))){
var inst_49189 = null;
var state_49212__$1 = (function (){var statearr_49215 = state_49212;
(statearr_49215[(7)] = inst_49189);

return statearr_49215;
})();
var statearr_49216_49237 = state_49212__$1;
(statearr_49216_49237[(2)] = null);

(statearr_49216_49237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (4))){
var inst_49192 = (state_49212[(8)]);
var inst_49192__$1 = (state_49212[(2)]);
var inst_49193 = (inst_49192__$1 == null);
var inst_49194 = cljs.core.not.call(null,inst_49193);
var state_49212__$1 = (function (){var statearr_49217 = state_49212;
(statearr_49217[(8)] = inst_49192__$1);

return statearr_49217;
})();
if(inst_49194){
var statearr_49218_49238 = state_49212__$1;
(statearr_49218_49238[(1)] = (5));

} else {
var statearr_49219_49239 = state_49212__$1;
(statearr_49219_49239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (6))){
var state_49212__$1 = state_49212;
var statearr_49220_49240 = state_49212__$1;
(statearr_49220_49240[(2)] = null);

(statearr_49220_49240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (3))){
var inst_49209 = (state_49212[(2)]);
var inst_49210 = cljs.core.async.close_BANG_.call(null,out);
var state_49212__$1 = (function (){var statearr_49221 = state_49212;
(statearr_49221[(9)] = inst_49209);

return statearr_49221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49212__$1,inst_49210);
} else {
if((state_val_49213 === (2))){
var state_49212__$1 = state_49212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49212__$1,(4),ch);
} else {
if((state_val_49213 === (11))){
var inst_49192 = (state_49212[(8)]);
var inst_49201 = (state_49212[(2)]);
var inst_49189 = inst_49192;
var state_49212__$1 = (function (){var statearr_49222 = state_49212;
(statearr_49222[(10)] = inst_49201);

(statearr_49222[(7)] = inst_49189);

return statearr_49222;
})();
var statearr_49223_49241 = state_49212__$1;
(statearr_49223_49241[(2)] = null);

(statearr_49223_49241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (9))){
var inst_49192 = (state_49212[(8)]);
var state_49212__$1 = state_49212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49212__$1,(11),out,inst_49192);
} else {
if((state_val_49213 === (5))){
var inst_49189 = (state_49212[(7)]);
var inst_49192 = (state_49212[(8)]);
var inst_49196 = cljs.core._EQ_.call(null,inst_49192,inst_49189);
var state_49212__$1 = state_49212;
if(inst_49196){
var statearr_49225_49242 = state_49212__$1;
(statearr_49225_49242[(1)] = (8));

} else {
var statearr_49226_49243 = state_49212__$1;
(statearr_49226_49243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (10))){
var inst_49204 = (state_49212[(2)]);
var state_49212__$1 = state_49212;
var statearr_49227_49244 = state_49212__$1;
(statearr_49227_49244[(2)] = inst_49204);

(statearr_49227_49244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49213 === (8))){
var inst_49189 = (state_49212[(7)]);
var tmp49224 = inst_49189;
var inst_49189__$1 = tmp49224;
var state_49212__$1 = (function (){var statearr_49228 = state_49212;
(statearr_49228[(7)] = inst_49189__$1);

return statearr_49228;
})();
var statearr_49229_49245 = state_49212__$1;
(statearr_49229_49245[(2)] = null);

(statearr_49229_49245[(1)] = (2));


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
});})(c__34071__auto___49235,out))
;
return ((function (switch__33983__auto__,c__34071__auto___49235,out){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_49230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49230[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_49230[(1)] = (1));

return statearr_49230;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_49212){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49231){if((e49231 instanceof Object)){
var ex__33987__auto__ = e49231;
var statearr_49232_49246 = state_49212;
(statearr_49232_49246[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49247 = state_49212;
state_49212 = G__49247;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_49212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_49212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___49235,out))
})();
var state__34073__auto__ = (function (){var statearr_49233 = f__34072__auto__.call(null);
(statearr_49233[(6)] = c__34071__auto___49235);

return statearr_49233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___49235,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49249 = arguments.length;
switch (G__49249) {
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
var c__34071__auto___49315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___49315,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___49315,out){
return (function (state_49287){
var state_val_49288 = (state_49287[(1)]);
if((state_val_49288 === (7))){
var inst_49283 = (state_49287[(2)]);
var state_49287__$1 = state_49287;
var statearr_49289_49316 = state_49287__$1;
(statearr_49289_49316[(2)] = inst_49283);

(statearr_49289_49316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (1))){
var inst_49250 = (new Array(n));
var inst_49251 = inst_49250;
var inst_49252 = (0);
var state_49287__$1 = (function (){var statearr_49290 = state_49287;
(statearr_49290[(7)] = inst_49252);

(statearr_49290[(8)] = inst_49251);

return statearr_49290;
})();
var statearr_49291_49317 = state_49287__$1;
(statearr_49291_49317[(2)] = null);

(statearr_49291_49317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (4))){
var inst_49255 = (state_49287[(9)]);
var inst_49255__$1 = (state_49287[(2)]);
var inst_49256 = (inst_49255__$1 == null);
var inst_49257 = cljs.core.not.call(null,inst_49256);
var state_49287__$1 = (function (){var statearr_49292 = state_49287;
(statearr_49292[(9)] = inst_49255__$1);

return statearr_49292;
})();
if(inst_49257){
var statearr_49293_49318 = state_49287__$1;
(statearr_49293_49318[(1)] = (5));

} else {
var statearr_49294_49319 = state_49287__$1;
(statearr_49294_49319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (15))){
var inst_49277 = (state_49287[(2)]);
var state_49287__$1 = state_49287;
var statearr_49295_49320 = state_49287__$1;
(statearr_49295_49320[(2)] = inst_49277);

(statearr_49295_49320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (13))){
var state_49287__$1 = state_49287;
var statearr_49296_49321 = state_49287__$1;
(statearr_49296_49321[(2)] = null);

(statearr_49296_49321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (6))){
var inst_49252 = (state_49287[(7)]);
var inst_49273 = (inst_49252 > (0));
var state_49287__$1 = state_49287;
if(cljs.core.truth_(inst_49273)){
var statearr_49297_49322 = state_49287__$1;
(statearr_49297_49322[(1)] = (12));

} else {
var statearr_49298_49323 = state_49287__$1;
(statearr_49298_49323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (3))){
var inst_49285 = (state_49287[(2)]);
var state_49287__$1 = state_49287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49287__$1,inst_49285);
} else {
if((state_val_49288 === (12))){
var inst_49251 = (state_49287[(8)]);
var inst_49275 = cljs.core.vec.call(null,inst_49251);
var state_49287__$1 = state_49287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49287__$1,(15),out,inst_49275);
} else {
if((state_val_49288 === (2))){
var state_49287__$1 = state_49287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49287__$1,(4),ch);
} else {
if((state_val_49288 === (11))){
var inst_49267 = (state_49287[(2)]);
var inst_49268 = (new Array(n));
var inst_49251 = inst_49268;
var inst_49252 = (0);
var state_49287__$1 = (function (){var statearr_49299 = state_49287;
(statearr_49299[(7)] = inst_49252);

(statearr_49299[(8)] = inst_49251);

(statearr_49299[(10)] = inst_49267);

return statearr_49299;
})();
var statearr_49300_49324 = state_49287__$1;
(statearr_49300_49324[(2)] = null);

(statearr_49300_49324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (9))){
var inst_49251 = (state_49287[(8)]);
var inst_49265 = cljs.core.vec.call(null,inst_49251);
var state_49287__$1 = state_49287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49287__$1,(11),out,inst_49265);
} else {
if((state_val_49288 === (5))){
var inst_49252 = (state_49287[(7)]);
var inst_49260 = (state_49287[(11)]);
var inst_49255 = (state_49287[(9)]);
var inst_49251 = (state_49287[(8)]);
var inst_49259 = (inst_49251[inst_49252] = inst_49255);
var inst_49260__$1 = (inst_49252 + (1));
var inst_49261 = (inst_49260__$1 < n);
var state_49287__$1 = (function (){var statearr_49301 = state_49287;
(statearr_49301[(12)] = inst_49259);

(statearr_49301[(11)] = inst_49260__$1);

return statearr_49301;
})();
if(cljs.core.truth_(inst_49261)){
var statearr_49302_49325 = state_49287__$1;
(statearr_49302_49325[(1)] = (8));

} else {
var statearr_49303_49326 = state_49287__$1;
(statearr_49303_49326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (14))){
var inst_49280 = (state_49287[(2)]);
var inst_49281 = cljs.core.async.close_BANG_.call(null,out);
var state_49287__$1 = (function (){var statearr_49305 = state_49287;
(statearr_49305[(13)] = inst_49280);

return statearr_49305;
})();
var statearr_49306_49327 = state_49287__$1;
(statearr_49306_49327[(2)] = inst_49281);

(statearr_49306_49327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (10))){
var inst_49271 = (state_49287[(2)]);
var state_49287__$1 = state_49287;
var statearr_49307_49328 = state_49287__$1;
(statearr_49307_49328[(2)] = inst_49271);

(statearr_49307_49328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49288 === (8))){
var inst_49260 = (state_49287[(11)]);
var inst_49251 = (state_49287[(8)]);
var tmp49304 = inst_49251;
var inst_49251__$1 = tmp49304;
var inst_49252 = inst_49260;
var state_49287__$1 = (function (){var statearr_49308 = state_49287;
(statearr_49308[(7)] = inst_49252);

(statearr_49308[(8)] = inst_49251__$1);

return statearr_49308;
})();
var statearr_49309_49329 = state_49287__$1;
(statearr_49309_49329[(2)] = null);

(statearr_49309_49329[(1)] = (2));


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
});})(c__34071__auto___49315,out))
;
return ((function (switch__33983__auto__,c__34071__auto___49315,out){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_49310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49310[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_49310[(1)] = (1));

return statearr_49310;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_49287){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49311){if((e49311 instanceof Object)){
var ex__33987__auto__ = e49311;
var statearr_49312_49330 = state_49287;
(statearr_49312_49330[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49331 = state_49287;
state_49287 = G__49331;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_49287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_49287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___49315,out))
})();
var state__34073__auto__ = (function (){var statearr_49313 = f__34072__auto__.call(null);
(statearr_49313[(6)] = c__34071__auto___49315);

return statearr_49313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___49315,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49333 = arguments.length;
switch (G__49333) {
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
var c__34071__auto___49403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___49403,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___49403,out){
return (function (state_49375){
var state_val_49376 = (state_49375[(1)]);
if((state_val_49376 === (7))){
var inst_49371 = (state_49375[(2)]);
var state_49375__$1 = state_49375;
var statearr_49377_49404 = state_49375__$1;
(statearr_49377_49404[(2)] = inst_49371);

(statearr_49377_49404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (1))){
var inst_49334 = [];
var inst_49335 = inst_49334;
var inst_49336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49375__$1 = (function (){var statearr_49378 = state_49375;
(statearr_49378[(7)] = inst_49335);

(statearr_49378[(8)] = inst_49336);

return statearr_49378;
})();
var statearr_49379_49405 = state_49375__$1;
(statearr_49379_49405[(2)] = null);

(statearr_49379_49405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (4))){
var inst_49339 = (state_49375[(9)]);
var inst_49339__$1 = (state_49375[(2)]);
var inst_49340 = (inst_49339__$1 == null);
var inst_49341 = cljs.core.not.call(null,inst_49340);
var state_49375__$1 = (function (){var statearr_49380 = state_49375;
(statearr_49380[(9)] = inst_49339__$1);

return statearr_49380;
})();
if(inst_49341){
var statearr_49381_49406 = state_49375__$1;
(statearr_49381_49406[(1)] = (5));

} else {
var statearr_49382_49407 = state_49375__$1;
(statearr_49382_49407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (15))){
var inst_49365 = (state_49375[(2)]);
var state_49375__$1 = state_49375;
var statearr_49383_49408 = state_49375__$1;
(statearr_49383_49408[(2)] = inst_49365);

(statearr_49383_49408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (13))){
var state_49375__$1 = state_49375;
var statearr_49384_49409 = state_49375__$1;
(statearr_49384_49409[(2)] = null);

(statearr_49384_49409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (6))){
var inst_49335 = (state_49375[(7)]);
var inst_49360 = inst_49335.length;
var inst_49361 = (inst_49360 > (0));
var state_49375__$1 = state_49375;
if(cljs.core.truth_(inst_49361)){
var statearr_49385_49410 = state_49375__$1;
(statearr_49385_49410[(1)] = (12));

} else {
var statearr_49386_49411 = state_49375__$1;
(statearr_49386_49411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (3))){
var inst_49373 = (state_49375[(2)]);
var state_49375__$1 = state_49375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49375__$1,inst_49373);
} else {
if((state_val_49376 === (12))){
var inst_49335 = (state_49375[(7)]);
var inst_49363 = cljs.core.vec.call(null,inst_49335);
var state_49375__$1 = state_49375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49375__$1,(15),out,inst_49363);
} else {
if((state_val_49376 === (2))){
var state_49375__$1 = state_49375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49375__$1,(4),ch);
} else {
if((state_val_49376 === (11))){
var inst_49343 = (state_49375[(10)]);
var inst_49339 = (state_49375[(9)]);
var inst_49353 = (state_49375[(2)]);
var inst_49354 = [];
var inst_49355 = inst_49354.push(inst_49339);
var inst_49335 = inst_49354;
var inst_49336 = inst_49343;
var state_49375__$1 = (function (){var statearr_49387 = state_49375;
(statearr_49387[(11)] = inst_49353);

(statearr_49387[(7)] = inst_49335);

(statearr_49387[(8)] = inst_49336);

(statearr_49387[(12)] = inst_49355);

return statearr_49387;
})();
var statearr_49388_49412 = state_49375__$1;
(statearr_49388_49412[(2)] = null);

(statearr_49388_49412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (9))){
var inst_49335 = (state_49375[(7)]);
var inst_49351 = cljs.core.vec.call(null,inst_49335);
var state_49375__$1 = state_49375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49375__$1,(11),out,inst_49351);
} else {
if((state_val_49376 === (5))){
var inst_49343 = (state_49375[(10)]);
var inst_49339 = (state_49375[(9)]);
var inst_49336 = (state_49375[(8)]);
var inst_49343__$1 = f.call(null,inst_49339);
var inst_49344 = cljs.core._EQ_.call(null,inst_49343__$1,inst_49336);
var inst_49345 = cljs.core.keyword_identical_QMARK_.call(null,inst_49336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49346 = (inst_49344) || (inst_49345);
var state_49375__$1 = (function (){var statearr_49389 = state_49375;
(statearr_49389[(10)] = inst_49343__$1);

return statearr_49389;
})();
if(cljs.core.truth_(inst_49346)){
var statearr_49390_49413 = state_49375__$1;
(statearr_49390_49413[(1)] = (8));

} else {
var statearr_49391_49414 = state_49375__$1;
(statearr_49391_49414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (14))){
var inst_49368 = (state_49375[(2)]);
var inst_49369 = cljs.core.async.close_BANG_.call(null,out);
var state_49375__$1 = (function (){var statearr_49393 = state_49375;
(statearr_49393[(13)] = inst_49368);

return statearr_49393;
})();
var statearr_49394_49415 = state_49375__$1;
(statearr_49394_49415[(2)] = inst_49369);

(statearr_49394_49415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (10))){
var inst_49358 = (state_49375[(2)]);
var state_49375__$1 = state_49375;
var statearr_49395_49416 = state_49375__$1;
(statearr_49395_49416[(2)] = inst_49358);

(statearr_49395_49416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49376 === (8))){
var inst_49343 = (state_49375[(10)]);
var inst_49335 = (state_49375[(7)]);
var inst_49339 = (state_49375[(9)]);
var inst_49348 = inst_49335.push(inst_49339);
var tmp49392 = inst_49335;
var inst_49335__$1 = tmp49392;
var inst_49336 = inst_49343;
var state_49375__$1 = (function (){var statearr_49396 = state_49375;
(statearr_49396[(14)] = inst_49348);

(statearr_49396[(7)] = inst_49335__$1);

(statearr_49396[(8)] = inst_49336);

return statearr_49396;
})();
var statearr_49397_49417 = state_49375__$1;
(statearr_49397_49417[(2)] = null);

(statearr_49397_49417[(1)] = (2));


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
});})(c__34071__auto___49403,out))
;
return ((function (switch__33983__auto__,c__34071__auto___49403,out){
return (function() {
var cljs$core$async$state_machine__33984__auto__ = null;
var cljs$core$async$state_machine__33984__auto____0 = (function (){
var statearr_49398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49398[(0)] = cljs$core$async$state_machine__33984__auto__);

(statearr_49398[(1)] = (1));

return statearr_49398;
});
var cljs$core$async$state_machine__33984__auto____1 = (function (state_49375){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_49375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e49399){if((e49399 instanceof Object)){
var ex__33987__auto__ = e49399;
var statearr_49400_49418 = state_49375;
(statearr_49400_49418[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49419 = state_49375;
state_49375 = G__49419;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
cljs$core$async$state_machine__33984__auto__ = function(state_49375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33984__auto____1.call(this,state_49375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33984__auto____0;
cljs$core$async$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33984__auto____1;
return cljs$core$async$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___49403,out))
})();
var state__34073__auto__ = (function (){var statearr_49401 = f__34072__auto__.call(null);
(statearr_49401[(6)] = c__34071__auto___49403);

return statearr_49401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___49403,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518582125385
