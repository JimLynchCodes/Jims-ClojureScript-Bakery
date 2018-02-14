// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k32338,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__32342 = k32338;
var G__32342__$1 = (((G__32342 instanceof cljs.core.Keyword))?G__32342.fqn:null);
switch (G__32342__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32338,else__29066__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__32343,opts){
var self__ = this;
var map__32344 = p__32343;
var map__32344__$1 = ((((!((map__32344 == null)))?((((map__32344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32344):map__32344);
var request__$1 = cljs.core.get.call(null,map__32344__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__32346 = this;
var map__32346__$1 = ((((!((map__32346 == null)))?((((map__32346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);
var request__$2 = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__32348,xhrio){
var self__ = this;
var map__32349 = p__32348;
var map__32349__$1 = ((((!((map__32349 == null)))?((((map__32349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32349):map__32349);
var response__$1 = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__32351 = this;
var map__32351__$1 = ((((!((map__32351 == null)))?((((map__32351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32351):map__32351);
var response__$2 = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32337){
var self__ = this;
var G__32337__$1 = this;
return (new cljs.core.RecordIter((0),G__32337__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32339,other32340){
var self__ = this;
var this32339__$1 = this;
return (!((other32340 == null))) && ((this32339__$1.constructor === other32340.constructor)) && (cljs.core._EQ_.call(null,this32339__$1.name,other32340.name)) && (cljs.core._EQ_.call(null,this32339__$1.request,other32340.request)) && (cljs.core._EQ_.call(null,this32339__$1.response,other32340.response)) && (cljs.core._EQ_.call(null,this32339__$1.__extmap,other32340.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__32337){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__32353 = cljs.core.keyword_identical_QMARK_;
var expr__32354 = k__29071__auto__;
if(cljs.core.truth_(pred__32353.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32354))){
return (new ajax.interceptors.StandardInterceptor(G__32337,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32353.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__32354))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__32337,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32353.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__32354))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__32337,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__32337),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__32337){
var self__ = this;
var this__29062__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__32337,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__32341){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32341),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__32341),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__32341),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32341,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__32357,xhrio){
var map__32358 = p__32357;
var map__32358__$1 = ((((!((map__32358 == null)))?((((map__32358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);
var description = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__29599__auto__ = [];
var len__29592__auto___32364 = arguments.length;
var i__29593__auto___32365 = (0);
while(true){
if((i__29593__auto___32365 < len__29592__auto___32364)){
args__29599__auto__.push((arguments[i__29593__auto___32365]));

var G__32366 = (i__29593__auto___32365 + (1));
i__29593__auto___32365 = G__32366;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((3) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29600__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq32360){
var G__32361 = cljs.core.first.call(null,seq32360);
var seq32360__$1 = cljs.core.next.call(null,seq32360);
var G__32362 = cljs.core.first.call(null,seq32360__$1);
var seq32360__$2 = cljs.core.next.call(null,seq32360__$1);
var G__32363 = cljs.core.first.call(null,seq32360__$2);
var seq32360__$3 = cljs.core.next.call(null,seq32360__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__32361,G__32362,G__32363,seq32360__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k32369,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__32373 = k32369;
var G__32373__$1 = (((G__32373 instanceof cljs.core.Keyword))?G__32373.fqn:null);
switch (G__32373__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32369,else__29066__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__32374,request){
var self__ = this;
var map__32375 = p__32374;
var map__32375__$1 = ((((!((map__32375 == null)))?((((map__32375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32375):map__32375);
var content_type__$1 = cljs.core.get.call(null,map__32375__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__32377 = this;
var map__32377__$1 = ((((!((map__32377 == null)))?((((map__32377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);
var content_type__$2 = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__32377,map__32377__$1,content_type__$2,map__32375,map__32375__$1,content_type__$1){
return (function (p1__32367_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__28423__auto__ = p1__32367_SHARP_;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__32377,map__32377__$1,content_type__$2,map__32375,map__32375__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__32379,xhrio){
var self__ = this;
var map__32380 = p__32379;
var map__32380__$1 = ((((!((map__32380 == null)))?((((map__32380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32380):map__32380);
var format = map__32380__$1;
var read__$1 = cljs.core.get.call(null,map__32380__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__32382 = this;
var map__32382__$1 = ((((!((map__32382 == null)))?((((map__32382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32382):map__32382);
var format__$1 = map__32382__$1;
var read__$2 = cljs.core.get.call(null,map__32382__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__32385 = status;
switch (G__32385) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e32386){if((e32386 instanceof Object)){
var e = e32386;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e32386;

}
}
}
}catch (e32384){if((e32384 instanceof Object)){
var e = e32384;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e32384;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32368){
var self__ = this;
var G__32368__$1 = this;
return (new cljs.core.RecordIter((0),G__32368__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32370,other32371){
var self__ = this;
var this32370__$1 = this;
return (!((other32371 == null))) && ((this32370__$1.constructor === other32371.constructor)) && (cljs.core._EQ_.call(null,this32370__$1.read,other32371.read)) && (cljs.core._EQ_.call(null,this32370__$1.description,other32371.description)) && (cljs.core._EQ_.call(null,this32370__$1.content_type,other32371.content_type)) && (cljs.core._EQ_.call(null,this32370__$1.__extmap,other32371.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__32368){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__32387 = cljs.core.keyword_identical_QMARK_;
var expr__32388 = k__29071__auto__;
if(cljs.core.truth_(pred__32387.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__32388))){
return (new ajax.interceptors.ResponseFormat(G__32368,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32387.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__32388))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__32368,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32387.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__32388))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__32368,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__32368),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__32368){
var self__ = this;
var this__29062__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__32368,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__32372){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__32372),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__32372),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__32372),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32372,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k32393,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__32397 = k32393;
switch (G__32397) {
default:
return cljs.core.get.call(null,self__.__extmap,k32393,else__29066__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__32398){
var self__ = this;
var map__32399 = p__32398;
var map__32399__$1 = ((((!((map__32399 == null)))?((((map__32399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32399):map__32399);
var request = map__32399__$1;
var uri = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__32399__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__32401 = ajax.interceptors.get_request_format.call(null,format);
var map__32401__$1 = ((((!((map__32401 == null)))?((((map__32401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32401):map__32401);
var write = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__28423__auto__ = headers;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32392){
var self__ = this;
var G__32392__$1 = this;
return (new cljs.core.RecordIter((0),G__32392__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32394,other32395){
var self__ = this;
var this32394__$1 = this;
return (!((other32395 == null))) && ((this32394__$1.constructor === other32395.constructor)) && (cljs.core._EQ_.call(null,this32394__$1.__extmap,other32395.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__32392){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__32403 = cljs.core.keyword_identical_QMARK_;
var expr__32404 = k__29071__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__32392),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__32392){
var self__ = this;
var this__29062__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__32392,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__32396){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32396)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__32408 = arguments.length;
switch (G__32408) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__32409,uri){
var map__32410 = p__32409;
var map__32410__$1 = ((((!((map__32410 == null)))?((((map__32410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);
var vec_strategy = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__32412){
var map__32413 = p__32412;
var map__32413__$1 = ((((!((map__32413 == null)))?((((map__32413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32413):map__32413);
var vec_strategy = cljs.core.get.call(null,map__32413__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__32413__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__32413,map__32413__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__32413,map__32413__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k32417,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__32421 = k32417;
switch (G__32421) {
default:
return cljs.core.get.call(null,self__.__extmap,k32417,else__29066__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__32422){
var self__ = this;
var map__32423 = p__32422;
var map__32423__$1 = ((((!((map__32423 == null)))?((((map__32423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32423):map__32423);
var request = map__32423__$1;
var method = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32416){
var self__ = this;
var G__32416__$1 = this;
return (new cljs.core.RecordIter((0),G__32416__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32418,other32419){
var self__ = this;
var this32418__$1 = this;
return (!((other32419 == null))) && ((this32418__$1.constructor === other32419.constructor)) && (cljs.core._EQ_.call(null,this32418__$1.__extmap,other32419.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__32416){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__32425 = cljs.core.keyword_identical_QMARK_;
var expr__32426 = k__29071__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__32416),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__32416){
var self__ = this;
var this__29062__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__32416,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__32420){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32420)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k32430,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__32434 = k32430;
switch (G__32434) {
default:
return cljs.core.get.call(null,self__.__extmap,k32430,else__29066__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__32435){
var self__ = this;
var map__32436 = p__32435;
var map__32436__$1 = ((((!((map__32436 == null)))?((((map__32436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32436):map__32436);
var request = map__32436__$1;
var body = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32429){
var self__ = this;
var G__32429__$1 = this;
return (new cljs.core.RecordIter((0),G__32429__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32431,other32432){
var self__ = this;
var this32431__$1 = this;
return (!((other32432 == null))) && ((this32431__$1.constructor === other32432.constructor)) && (cljs.core._EQ_.call(null,this32431__$1.__extmap,other32432.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__32429){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__32438 = cljs.core.keyword_identical_QMARK_;
var expr__32439 = k__29071__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__32429),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__32429){
var self__ = this;
var this__29062__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__32429,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__32433){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__32433)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__32442){
var map__32443 = p__32442;
var map__32443__$1 = ((((!((map__32443 == null)))?((((map__32443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32443):map__32443);
var opts = map__32443__$1;
var response_format = cljs.core.get.call(null,map__32443__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1518582078459
