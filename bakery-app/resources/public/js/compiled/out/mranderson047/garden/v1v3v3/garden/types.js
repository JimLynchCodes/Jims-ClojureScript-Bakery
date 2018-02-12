// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.garden.v1v3v3.garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
mranderson047.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k43649,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__43653 = k43649;
var G__43653__$1 = (((G__43653 instanceof cljs.core.Keyword))?G__43653.fqn:null);
switch (G__43653__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43649,else__29066__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43648){
var self__ = this;
var G__43648__$1 = this;
return (new cljs.core.RecordIter((0),G__43648__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (671341226 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43650,other43651){
var self__ = this;
var this43650__$1 = this;
return (!((other43651 == null))) && ((this43650__$1.constructor === other43651.constructor)) && (cljs.core._EQ_.call(null,this43650__$1.unit,other43651.unit)) && (cljs.core._EQ_.call(null,this43650__$1.magnitude,other43651.magnitude)) && (cljs.core._EQ_.call(null,this43650__$1.__extmap,other43651.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__43648){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__43654 = cljs.core.keyword_identical_QMARK_;
var expr__43655 = k__29071__auto__;
if(cljs.core.truth_(pred__43654.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__43655))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(G__43648,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43654.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__43655))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__43648,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__43648),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__43648){
var self__ = this;
var this__29062__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__43648,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mranderson047.garden.v1v3v3.garden.types/CSSUnit");
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSUnit");
});

mranderson047.garden.v1v3v3.garden.types.__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

mranderson047.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__43652){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__43652),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__43652),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__43652,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
mranderson047.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k43659,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__43663 = k43659;
var G__43663__$1 = (((G__43663 instanceof cljs.core.Keyword))?G__43663.fqn:null);
switch (G__43663__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43659,else__29066__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43658){
var self__ = this;
var G__43658__$1 = this;
return (new cljs.core.RecordIter((0),G__43658__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (-830866841 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43660,other43661){
var self__ = this;
var this43660__$1 = this;
return (!((other43661 == null))) && ((this43660__$1.constructor === other43661.constructor)) && (cljs.core._EQ_.call(null,this43660__$1.function,other43661.function)) && (cljs.core._EQ_.call(null,this43660__$1.args,other43661.args)) && (cljs.core._EQ_.call(null,this43660__$1.__extmap,other43661.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__43658){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__43664 = cljs.core.keyword_identical_QMARK_;
var expr__43665 = k__29071__auto__;
if(cljs.core.truth_(pred__43664.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__43665))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(G__43658,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43664.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__43665))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__43658,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__43658),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__43658){
var self__ = this;
var this__29062__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__43658,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mranderson047.garden.v1v3v3.garden.types/CSSFunction");
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSFunction");
});

mranderson047.garden.v1v3v3.garden.types.__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

mranderson047.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__43662){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__43662),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__43662),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__43662,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
mranderson047.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k43669,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__43673 = k43669;
var G__43673__$1 = (((G__43673 instanceof cljs.core.Keyword))?G__43673.fqn:null);
switch (G__43673__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43669,else__29066__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43668){
var self__ = this;
var G__43668__$1 = this;
return (new cljs.core.RecordIter((0),G__43668__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (845600990 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43670,other43671){
var self__ = this;
var this43670__$1 = this;
return (!((other43671 == null))) && ((this43670__$1.constructor === other43671.constructor)) && (cljs.core._EQ_.call(null,this43670__$1.identifier,other43671.identifier)) && (cljs.core._EQ_.call(null,this43670__$1.value,other43671.value)) && (cljs.core._EQ_.call(null,this43670__$1.__extmap,other43671.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__43668){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__43674 = cljs.core.keyword_identical_QMARK_;
var expr__43675 = k__29071__auto__;
if(cljs.core.truth_(pred__43674.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__43675))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(G__43668,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43674.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__43675))){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__43668,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__43668),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__43668){
var self__ = this;
var this__29062__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__43668,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule");
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule");
});

mranderson047.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

mranderson047.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__43672){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__43672),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__43672),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__43672,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});


//# sourceMappingURL=types.js.map?rel=1518440282995
