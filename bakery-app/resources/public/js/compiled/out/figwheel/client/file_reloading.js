// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28423__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28423__auto__){
return or__28423__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28423__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
var or__28423__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28423__auto____$1)){
return or__28423__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37241_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37241_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37242 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37243 = null;
var count__37244 = (0);
var i__37245 = (0);
while(true){
if((i__37245 < count__37244)){
var n = cljs.core._nth.call(null,chunk__37243,i__37245);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37246 = seq__37242;
var G__37247 = chunk__37243;
var G__37248 = count__37244;
var G__37249 = (i__37245 + (1));
seq__37242 = G__37246;
chunk__37243 = G__37247;
count__37244 = G__37248;
i__37245 = G__37249;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37242);
if(temp__4657__auto__){
var seq__37242__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37242__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__37242__$1);
var G__37250 = cljs.core.chunk_rest.call(null,seq__37242__$1);
var G__37251 = c__29262__auto__;
var G__37252 = cljs.core.count.call(null,c__29262__auto__);
var G__37253 = (0);
seq__37242 = G__37250;
chunk__37243 = G__37251;
count__37244 = G__37252;
i__37245 = G__37253;
continue;
} else {
var n = cljs.core.first.call(null,seq__37242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37254 = cljs.core.next.call(null,seq__37242__$1);
var G__37255 = null;
var G__37256 = (0);
var G__37257 = (0);
seq__37242 = G__37254;
chunk__37243 = G__37255;
count__37244 = G__37256;
i__37245 = G__37257;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37267_37275 = cljs.core.seq.call(null,deps);
var chunk__37268_37276 = null;
var count__37269_37277 = (0);
var i__37270_37278 = (0);
while(true){
if((i__37270_37278 < count__37269_37277)){
var dep_37279 = cljs.core._nth.call(null,chunk__37268_37276,i__37270_37278);
topo_sort_helper_STAR_.call(null,dep_37279,(depth + (1)),state);

var G__37280 = seq__37267_37275;
var G__37281 = chunk__37268_37276;
var G__37282 = count__37269_37277;
var G__37283 = (i__37270_37278 + (1));
seq__37267_37275 = G__37280;
chunk__37268_37276 = G__37281;
count__37269_37277 = G__37282;
i__37270_37278 = G__37283;
continue;
} else {
var temp__4657__auto___37284 = cljs.core.seq.call(null,seq__37267_37275);
if(temp__4657__auto___37284){
var seq__37267_37285__$1 = temp__4657__auto___37284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37267_37285__$1)){
var c__29262__auto___37286 = cljs.core.chunk_first.call(null,seq__37267_37285__$1);
var G__37287 = cljs.core.chunk_rest.call(null,seq__37267_37285__$1);
var G__37288 = c__29262__auto___37286;
var G__37289 = cljs.core.count.call(null,c__29262__auto___37286);
var G__37290 = (0);
seq__37267_37275 = G__37287;
chunk__37268_37276 = G__37288;
count__37269_37277 = G__37289;
i__37270_37278 = G__37290;
continue;
} else {
var dep_37291 = cljs.core.first.call(null,seq__37267_37285__$1);
topo_sort_helper_STAR_.call(null,dep_37291,(depth + (1)),state);

var G__37292 = cljs.core.next.call(null,seq__37267_37285__$1);
var G__37293 = null;
var G__37294 = (0);
var G__37295 = (0);
seq__37267_37275 = G__37292;
chunk__37268_37276 = G__37293;
count__37269_37277 = G__37294;
i__37270_37278 = G__37295;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37271){
var vec__37272 = p__37271;
var seq__37273 = cljs.core.seq.call(null,vec__37272);
var first__37274 = cljs.core.first.call(null,seq__37273);
var seq__37273__$1 = cljs.core.next.call(null,seq__37273);
var x = first__37274;
var xs = seq__37273__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37272,seq__37273,first__37274,seq__37273__$1,x,xs,get_deps__$1){
return (function (p1__37258_SHARP_){
return clojure.set.difference.call(null,p1__37258_SHARP_,x);
});})(vec__37272,seq__37273,first__37274,seq__37273__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37296 = cljs.core.seq.call(null,provides);
var chunk__37297 = null;
var count__37298 = (0);
var i__37299 = (0);
while(true){
if((i__37299 < count__37298)){
var prov = cljs.core._nth.call(null,chunk__37297,i__37299);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37300_37308 = cljs.core.seq.call(null,requires);
var chunk__37301_37309 = null;
var count__37302_37310 = (0);
var i__37303_37311 = (0);
while(true){
if((i__37303_37311 < count__37302_37310)){
var req_37312 = cljs.core._nth.call(null,chunk__37301_37309,i__37303_37311);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37312,prov);

var G__37313 = seq__37300_37308;
var G__37314 = chunk__37301_37309;
var G__37315 = count__37302_37310;
var G__37316 = (i__37303_37311 + (1));
seq__37300_37308 = G__37313;
chunk__37301_37309 = G__37314;
count__37302_37310 = G__37315;
i__37303_37311 = G__37316;
continue;
} else {
var temp__4657__auto___37317 = cljs.core.seq.call(null,seq__37300_37308);
if(temp__4657__auto___37317){
var seq__37300_37318__$1 = temp__4657__auto___37317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37300_37318__$1)){
var c__29262__auto___37319 = cljs.core.chunk_first.call(null,seq__37300_37318__$1);
var G__37320 = cljs.core.chunk_rest.call(null,seq__37300_37318__$1);
var G__37321 = c__29262__auto___37319;
var G__37322 = cljs.core.count.call(null,c__29262__auto___37319);
var G__37323 = (0);
seq__37300_37308 = G__37320;
chunk__37301_37309 = G__37321;
count__37302_37310 = G__37322;
i__37303_37311 = G__37323;
continue;
} else {
var req_37324 = cljs.core.first.call(null,seq__37300_37318__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37324,prov);

var G__37325 = cljs.core.next.call(null,seq__37300_37318__$1);
var G__37326 = null;
var G__37327 = (0);
var G__37328 = (0);
seq__37300_37308 = G__37325;
chunk__37301_37309 = G__37326;
count__37302_37310 = G__37327;
i__37303_37311 = G__37328;
continue;
}
} else {
}
}
break;
}

var G__37329 = seq__37296;
var G__37330 = chunk__37297;
var G__37331 = count__37298;
var G__37332 = (i__37299 + (1));
seq__37296 = G__37329;
chunk__37297 = G__37330;
count__37298 = G__37331;
i__37299 = G__37332;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37296);
if(temp__4657__auto__){
var seq__37296__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37296__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__37296__$1);
var G__37333 = cljs.core.chunk_rest.call(null,seq__37296__$1);
var G__37334 = c__29262__auto__;
var G__37335 = cljs.core.count.call(null,c__29262__auto__);
var G__37336 = (0);
seq__37296 = G__37333;
chunk__37297 = G__37334;
count__37298 = G__37335;
i__37299 = G__37336;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37296__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37304_37337 = cljs.core.seq.call(null,requires);
var chunk__37305_37338 = null;
var count__37306_37339 = (0);
var i__37307_37340 = (0);
while(true){
if((i__37307_37340 < count__37306_37339)){
var req_37341 = cljs.core._nth.call(null,chunk__37305_37338,i__37307_37340);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37341,prov);

var G__37342 = seq__37304_37337;
var G__37343 = chunk__37305_37338;
var G__37344 = count__37306_37339;
var G__37345 = (i__37307_37340 + (1));
seq__37304_37337 = G__37342;
chunk__37305_37338 = G__37343;
count__37306_37339 = G__37344;
i__37307_37340 = G__37345;
continue;
} else {
var temp__4657__auto___37346__$1 = cljs.core.seq.call(null,seq__37304_37337);
if(temp__4657__auto___37346__$1){
var seq__37304_37347__$1 = temp__4657__auto___37346__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37304_37347__$1)){
var c__29262__auto___37348 = cljs.core.chunk_first.call(null,seq__37304_37347__$1);
var G__37349 = cljs.core.chunk_rest.call(null,seq__37304_37347__$1);
var G__37350 = c__29262__auto___37348;
var G__37351 = cljs.core.count.call(null,c__29262__auto___37348);
var G__37352 = (0);
seq__37304_37337 = G__37349;
chunk__37305_37338 = G__37350;
count__37306_37339 = G__37351;
i__37307_37340 = G__37352;
continue;
} else {
var req_37353 = cljs.core.first.call(null,seq__37304_37347__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37353,prov);

var G__37354 = cljs.core.next.call(null,seq__37304_37347__$1);
var G__37355 = null;
var G__37356 = (0);
var G__37357 = (0);
seq__37304_37337 = G__37354;
chunk__37305_37338 = G__37355;
count__37306_37339 = G__37356;
i__37307_37340 = G__37357;
continue;
}
} else {
}
}
break;
}

var G__37358 = cljs.core.next.call(null,seq__37296__$1);
var G__37359 = null;
var G__37360 = (0);
var G__37361 = (0);
seq__37296 = G__37358;
chunk__37297 = G__37359;
count__37298 = G__37360;
i__37299 = G__37361;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37362_37366 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37363_37367 = null;
var count__37364_37368 = (0);
var i__37365_37369 = (0);
while(true){
if((i__37365_37369 < count__37364_37368)){
var ns_37370 = cljs.core._nth.call(null,chunk__37363_37367,i__37365_37369);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37370);

var G__37371 = seq__37362_37366;
var G__37372 = chunk__37363_37367;
var G__37373 = count__37364_37368;
var G__37374 = (i__37365_37369 + (1));
seq__37362_37366 = G__37371;
chunk__37363_37367 = G__37372;
count__37364_37368 = G__37373;
i__37365_37369 = G__37374;
continue;
} else {
var temp__4657__auto___37375 = cljs.core.seq.call(null,seq__37362_37366);
if(temp__4657__auto___37375){
var seq__37362_37376__$1 = temp__4657__auto___37375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37362_37376__$1)){
var c__29262__auto___37377 = cljs.core.chunk_first.call(null,seq__37362_37376__$1);
var G__37378 = cljs.core.chunk_rest.call(null,seq__37362_37376__$1);
var G__37379 = c__29262__auto___37377;
var G__37380 = cljs.core.count.call(null,c__29262__auto___37377);
var G__37381 = (0);
seq__37362_37366 = G__37378;
chunk__37363_37367 = G__37379;
count__37364_37368 = G__37380;
i__37365_37369 = G__37381;
continue;
} else {
var ns_37382 = cljs.core.first.call(null,seq__37362_37376__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37382);

var G__37383 = cljs.core.next.call(null,seq__37362_37376__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__37362_37366 = G__37383;
chunk__37363_37367 = G__37384;
count__37364_37368 = G__37385;
i__37365_37369 = G__37386;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28423__auto__ = goog.require__;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37387__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37388__i = 0, G__37388__a = new Array(arguments.length -  0);
while (G__37388__i < G__37388__a.length) {G__37388__a[G__37388__i] = arguments[G__37388__i + 0]; ++G__37388__i;}
  args = new cljs.core.IndexedSeq(G__37388__a,0,null);
} 
return G__37387__delegate.call(this,args);};
G__37387.cljs$lang$maxFixedArity = 0;
G__37387.cljs$lang$applyTo = (function (arglist__37389){
var args = cljs.core.seq(arglist__37389);
return G__37387__delegate(args);
});
G__37387.cljs$core$IFn$_invoke$arity$variadic = G__37387__delegate;
return G__37387;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37390_SHARP_,p2__37391_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37390_SHARP_)].join('')),p2__37391_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37392_SHARP_,p2__37393_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37392_SHARP_)].join(''),p2__37393_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37394 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37394.addCallback(((function (G__37394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37394))
);

G__37394.addErrback(((function (G__37394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37394))
);

return G__37394;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37395 = cljs.core._EQ_;
var expr__37396 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37395.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37396))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37395,expr__37396){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37395,expr__37396))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37395,expr__37396){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37398){if((e37398 instanceof Error)){
var e = e37398;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37398;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37395,expr__37396))
} else {
if(cljs.core.truth_(pred__37395.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37396))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37395.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37396))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37395.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37396))){
return ((function (pred__37395,expr__37396){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37399){if((e37399 instanceof Error)){
var e = e37399;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37399;

}
}})());
});
;})(pred__37395,expr__37396))
} else {
return ((function (pred__37395,expr__37396){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37395,expr__37396))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37400,callback){
var map__37401 = p__37400;
var map__37401__$1 = ((((!((map__37401 == null)))?((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401):map__37401);
var file_msg = map__37401__$1;
var request_url = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37401,map__37401__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37401,map__37401__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__){
return (function (state_37425){
var state_val_37426 = (state_37425[(1)]);
if((state_val_37426 === (7))){
var inst_37421 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
var statearr_37427_37444 = state_37425__$1;
(statearr_37427_37444[(2)] = inst_37421);

(statearr_37427_37444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (1))){
var state_37425__$1 = state_37425;
var statearr_37428_37445 = state_37425__$1;
(statearr_37428_37445[(2)] = null);

(statearr_37428_37445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (4))){
var inst_37405 = (state_37425[(7)]);
var inst_37405__$1 = (state_37425[(2)]);
var state_37425__$1 = (function (){var statearr_37429 = state_37425;
(statearr_37429[(7)] = inst_37405__$1);

return statearr_37429;
})();
if(cljs.core.truth_(inst_37405__$1)){
var statearr_37430_37446 = state_37425__$1;
(statearr_37430_37446[(1)] = (5));

} else {
var statearr_37431_37447 = state_37425__$1;
(statearr_37431_37447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (6))){
var state_37425__$1 = state_37425;
var statearr_37432_37448 = state_37425__$1;
(statearr_37432_37448[(2)] = null);

(statearr_37432_37448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (3))){
var inst_37423 = (state_37425[(2)]);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37425__$1,inst_37423);
} else {
if((state_val_37426 === (2))){
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37426 === (11))){
var inst_37417 = (state_37425[(2)]);
var state_37425__$1 = (function (){var statearr_37433 = state_37425;
(statearr_37433[(8)] = inst_37417);

return statearr_37433;
})();
var statearr_37434_37449 = state_37425__$1;
(statearr_37434_37449[(2)] = null);

(statearr_37434_37449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (9))){
var inst_37409 = (state_37425[(9)]);
var inst_37411 = (state_37425[(10)]);
var inst_37413 = inst_37411.call(null,inst_37409);
var state_37425__$1 = state_37425;
var statearr_37435_37450 = state_37425__$1;
(statearr_37435_37450[(2)] = inst_37413);

(statearr_37435_37450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (5))){
var inst_37405 = (state_37425[(7)]);
var inst_37407 = figwheel.client.file_reloading.blocking_load.call(null,inst_37405);
var state_37425__$1 = state_37425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37425__$1,(8),inst_37407);
} else {
if((state_val_37426 === (10))){
var inst_37409 = (state_37425[(9)]);
var inst_37415 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37409);
var state_37425__$1 = state_37425;
var statearr_37436_37451 = state_37425__$1;
(statearr_37436_37451[(2)] = inst_37415);

(statearr_37436_37451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37426 === (8))){
var inst_37405 = (state_37425[(7)]);
var inst_37411 = (state_37425[(10)]);
var inst_37409 = (state_37425[(2)]);
var inst_37410 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37411__$1 = cljs.core.get.call(null,inst_37410,inst_37405);
var state_37425__$1 = (function (){var statearr_37437 = state_37425;
(statearr_37437[(9)] = inst_37409);

(statearr_37437[(10)] = inst_37411__$1);

return statearr_37437;
})();
if(cljs.core.truth_(inst_37411__$1)){
var statearr_37438_37452 = state_37425__$1;
(statearr_37438_37452[(1)] = (9));

} else {
var statearr_37439_37453 = state_37425__$1;
(statearr_37439_37453[(1)] = (10));

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
});})(c__34071__auto__))
;
return ((function (switch__33983__auto__,c__34071__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33984__auto__ = null;
var figwheel$client$file_reloading$state_machine__33984__auto____0 = (function (){
var statearr_37440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37440[(0)] = figwheel$client$file_reloading$state_machine__33984__auto__);

(statearr_37440[(1)] = (1));

return statearr_37440;
});
var figwheel$client$file_reloading$state_machine__33984__auto____1 = (function (state_37425){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_37425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e37441){if((e37441 instanceof Object)){
var ex__33987__auto__ = e37441;
var statearr_37442_37454 = state_37425;
(statearr_37442_37454[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37455 = state_37425;
state_37425 = G__37455;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33984__auto__ = function(state_37425){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33984__auto____1.call(this,state_37425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33984__auto____0;
figwheel$client$file_reloading$state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33984__auto____1;
return figwheel$client$file_reloading$state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__))
})();
var state__34073__auto__ = (function (){var statearr_37443 = f__34072__auto__.call(null);
(statearr_37443[(6)] = c__34071__auto__);

return statearr_37443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__))
);

return c__34071__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37456,callback){
var map__37457 = p__37456;
var map__37457__$1 = ((((!((map__37457 == null)))?((((map__37457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37457):map__37457);
var file_msg = map__37457__$1;
var namespace = cljs.core.get.call(null,map__37457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37457,map__37457__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37457,map__37457__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37459){
var map__37460 = p__37459;
var map__37460__$1 = ((((!((map__37460 == null)))?((((map__37460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37460):map__37460);
var file_msg = map__37460__$1;
var namespace = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37462){
var map__37463 = p__37462;
var map__37463__$1 = ((((!((map__37463 == null)))?((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37463):map__37463);
var file_msg = map__37463__$1;
var namespace = cljs.core.get.call(null,map__37463__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28411__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28411__auto__){
var or__28423__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
var or__28423__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28423__auto____$1)){
return or__28423__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28411__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37465,callback){
var map__37466 = p__37465;
var map__37466__$1 = ((((!((map__37466 == null)))?((((map__37466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37466):map__37466);
var file_msg = map__37466__$1;
var request_url = cljs.core.get.call(null,map__37466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37466__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34071__auto___37516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto___37516,out){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto___37516,out){
return (function (state_37501){
var state_val_37502 = (state_37501[(1)]);
if((state_val_37502 === (1))){
var inst_37475 = cljs.core.seq.call(null,files);
var inst_37476 = cljs.core.first.call(null,inst_37475);
var inst_37477 = cljs.core.next.call(null,inst_37475);
var inst_37478 = files;
var state_37501__$1 = (function (){var statearr_37503 = state_37501;
(statearr_37503[(7)] = inst_37476);

(statearr_37503[(8)] = inst_37478);

(statearr_37503[(9)] = inst_37477);

return statearr_37503;
})();
var statearr_37504_37517 = state_37501__$1;
(statearr_37504_37517[(2)] = null);

(statearr_37504_37517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (2))){
var inst_37478 = (state_37501[(8)]);
var inst_37484 = (state_37501[(10)]);
var inst_37483 = cljs.core.seq.call(null,inst_37478);
var inst_37484__$1 = cljs.core.first.call(null,inst_37483);
var inst_37485 = cljs.core.next.call(null,inst_37483);
var inst_37486 = (inst_37484__$1 == null);
var inst_37487 = cljs.core.not.call(null,inst_37486);
var state_37501__$1 = (function (){var statearr_37505 = state_37501;
(statearr_37505[(11)] = inst_37485);

(statearr_37505[(10)] = inst_37484__$1);

return statearr_37505;
})();
if(inst_37487){
var statearr_37506_37518 = state_37501__$1;
(statearr_37506_37518[(1)] = (4));

} else {
var statearr_37507_37519 = state_37501__$1;
(statearr_37507_37519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (3))){
var inst_37499 = (state_37501[(2)]);
var state_37501__$1 = state_37501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37501__$1,inst_37499);
} else {
if((state_val_37502 === (4))){
var inst_37484 = (state_37501[(10)]);
var inst_37489 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37484);
var state_37501__$1 = state_37501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37501__$1,(7),inst_37489);
} else {
if((state_val_37502 === (5))){
var inst_37495 = cljs.core.async.close_BANG_.call(null,out);
var state_37501__$1 = state_37501;
var statearr_37508_37520 = state_37501__$1;
(statearr_37508_37520[(2)] = inst_37495);

(statearr_37508_37520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (6))){
var inst_37497 = (state_37501[(2)]);
var state_37501__$1 = state_37501;
var statearr_37509_37521 = state_37501__$1;
(statearr_37509_37521[(2)] = inst_37497);

(statearr_37509_37521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (7))){
var inst_37485 = (state_37501[(11)]);
var inst_37491 = (state_37501[(2)]);
var inst_37492 = cljs.core.async.put_BANG_.call(null,out,inst_37491);
var inst_37478 = inst_37485;
var state_37501__$1 = (function (){var statearr_37510 = state_37501;
(statearr_37510[(8)] = inst_37478);

(statearr_37510[(12)] = inst_37492);

return statearr_37510;
})();
var statearr_37511_37522 = state_37501__$1;
(statearr_37511_37522[(2)] = null);

(statearr_37511_37522[(1)] = (2));


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
});})(c__34071__auto___37516,out))
;
return ((function (switch__33983__auto__,c__34071__auto___37516,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto____0 = (function (){
var statearr_37512 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37512[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto__);

(statearr_37512[(1)] = (1));

return statearr_37512;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto____1 = (function (state_37501){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_37501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e37513){if((e37513 instanceof Object)){
var ex__33987__auto__ = e37513;
var statearr_37514_37523 = state_37501;
(statearr_37514_37523[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37524 = state_37501;
state_37501 = G__37524;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto__ = function(state_37501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto____1.call(this,state_37501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto___37516,out))
})();
var state__34073__auto__ = (function (){var statearr_37515 = f__34072__auto__.call(null);
(statearr_37515[(6)] = c__34071__auto___37516);

return statearr_37515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto___37516,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37525,opts){
var map__37526 = p__37525;
var map__37526__$1 = ((((!((map__37526 == null)))?((((map__37526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37526):map__37526);
var eval_body = cljs.core.get.call(null,map__37526__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28411__auto__ = eval_body;
if(cljs.core.truth_(and__28411__auto__)){
return typeof eval_body === 'string';
} else {
return and__28411__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37528){var e = e37528;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37529_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37529_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37530){
var vec__37531 = p__37530;
var k = cljs.core.nth.call(null,vec__37531,(0),null);
var v = cljs.core.nth.call(null,vec__37531,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37534){
var vec__37535 = p__37534;
var k = cljs.core.nth.call(null,vec__37535,(0),null);
var v = cljs.core.nth.call(null,vec__37535,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37541,p__37542){
var map__37543 = p__37541;
var map__37543__$1 = ((((!((map__37543 == null)))?((((map__37543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37543):map__37543);
var opts = map__37543__$1;
var before_jsload = cljs.core.get.call(null,map__37543__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37543__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37543__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37544 = p__37542;
var map__37544__$1 = ((((!((map__37544 == null)))?((((map__37544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37544):map__37544);
var msg = map__37544__$1;
var files = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34072__auto__ = (function (){var switch__33983__auto__ = ((function (c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37698){
var state_val_37699 = (state_37698[(1)]);
if((state_val_37699 === (7))){
var inst_37560 = (state_37698[(7)]);
var inst_37561 = (state_37698[(8)]);
var inst_37558 = (state_37698[(9)]);
var inst_37559 = (state_37698[(10)]);
var inst_37566 = cljs.core._nth.call(null,inst_37559,inst_37561);
var inst_37567 = figwheel.client.file_reloading.eval_body.call(null,inst_37566,opts);
var inst_37568 = (inst_37561 + (1));
var tmp37700 = inst_37560;
var tmp37701 = inst_37558;
var tmp37702 = inst_37559;
var inst_37558__$1 = tmp37701;
var inst_37559__$1 = tmp37702;
var inst_37560__$1 = tmp37700;
var inst_37561__$1 = inst_37568;
var state_37698__$1 = (function (){var statearr_37703 = state_37698;
(statearr_37703[(7)] = inst_37560__$1);

(statearr_37703[(11)] = inst_37567);

(statearr_37703[(8)] = inst_37561__$1);

(statearr_37703[(9)] = inst_37558__$1);

(statearr_37703[(10)] = inst_37559__$1);

return statearr_37703;
})();
var statearr_37704_37787 = state_37698__$1;
(statearr_37704_37787[(2)] = null);

(statearr_37704_37787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (20))){
var inst_37601 = (state_37698[(12)]);
var inst_37609 = figwheel.client.file_reloading.sort_files.call(null,inst_37601);
var state_37698__$1 = state_37698;
var statearr_37705_37788 = state_37698__$1;
(statearr_37705_37788[(2)] = inst_37609);

(statearr_37705_37788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (27))){
var state_37698__$1 = state_37698;
var statearr_37706_37789 = state_37698__$1;
(statearr_37706_37789[(2)] = null);

(statearr_37706_37789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (1))){
var inst_37550 = (state_37698[(13)]);
var inst_37547 = before_jsload.call(null,files);
var inst_37548 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37549 = (function (){return ((function (inst_37550,inst_37547,inst_37548,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37538_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37538_SHARP_);
});
;})(inst_37550,inst_37547,inst_37548,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37550__$1 = cljs.core.filter.call(null,inst_37549,files);
var inst_37551 = cljs.core.not_empty.call(null,inst_37550__$1);
var state_37698__$1 = (function (){var statearr_37707 = state_37698;
(statearr_37707[(13)] = inst_37550__$1);

(statearr_37707[(14)] = inst_37548);

(statearr_37707[(15)] = inst_37547);

return statearr_37707;
})();
if(cljs.core.truth_(inst_37551)){
var statearr_37708_37790 = state_37698__$1;
(statearr_37708_37790[(1)] = (2));

} else {
var statearr_37709_37791 = state_37698__$1;
(statearr_37709_37791[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (24))){
var state_37698__$1 = state_37698;
var statearr_37710_37792 = state_37698__$1;
(statearr_37710_37792[(2)] = null);

(statearr_37710_37792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (39))){
var inst_37651 = (state_37698[(16)]);
var state_37698__$1 = state_37698;
var statearr_37711_37793 = state_37698__$1;
(statearr_37711_37793[(2)] = inst_37651);

(statearr_37711_37793[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (46))){
var inst_37693 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37712_37794 = state_37698__$1;
(statearr_37712_37794[(2)] = inst_37693);

(statearr_37712_37794[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (4))){
var inst_37595 = (state_37698[(2)]);
var inst_37596 = cljs.core.List.EMPTY;
var inst_37597 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37596);
var inst_37598 = (function (){return ((function (inst_37595,inst_37596,inst_37597,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37539_SHARP_){
var and__28411__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37539_SHARP_);
if(cljs.core.truth_(and__28411__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37539_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37539_SHARP_)));
} else {
return and__28411__auto__;
}
});
;})(inst_37595,inst_37596,inst_37597,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37599 = cljs.core.filter.call(null,inst_37598,files);
var inst_37600 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37601 = cljs.core.concat.call(null,inst_37599,inst_37600);
var state_37698__$1 = (function (){var statearr_37713 = state_37698;
(statearr_37713[(17)] = inst_37597);

(statearr_37713[(12)] = inst_37601);

(statearr_37713[(18)] = inst_37595);

return statearr_37713;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37714_37795 = state_37698__$1;
(statearr_37714_37795[(1)] = (16));

} else {
var statearr_37715_37796 = state_37698__$1;
(statearr_37715_37796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (15))){
var inst_37585 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37716_37797 = state_37698__$1;
(statearr_37716_37797[(2)] = inst_37585);

(statearr_37716_37797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (21))){
var inst_37611 = (state_37698[(19)]);
var inst_37611__$1 = (state_37698[(2)]);
var inst_37612 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37611__$1);
var state_37698__$1 = (function (){var statearr_37717 = state_37698;
(statearr_37717[(19)] = inst_37611__$1);

return statearr_37717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37698__$1,(22),inst_37612);
} else {
if((state_val_37699 === (31))){
var inst_37696 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37698__$1,inst_37696);
} else {
if((state_val_37699 === (32))){
var inst_37651 = (state_37698[(16)]);
var inst_37656 = inst_37651.cljs$lang$protocol_mask$partition0$;
var inst_37657 = (inst_37656 & (64));
var inst_37658 = inst_37651.cljs$core$ISeq$;
var inst_37659 = (cljs.core.PROTOCOL_SENTINEL === inst_37658);
var inst_37660 = (inst_37657) || (inst_37659);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37660)){
var statearr_37718_37798 = state_37698__$1;
(statearr_37718_37798[(1)] = (35));

} else {
var statearr_37719_37799 = state_37698__$1;
(statearr_37719_37799[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (40))){
var inst_37673 = (state_37698[(20)]);
var inst_37672 = (state_37698[(2)]);
var inst_37673__$1 = cljs.core.get.call(null,inst_37672,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37674 = cljs.core.get.call(null,inst_37672,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37675 = cljs.core.not_empty.call(null,inst_37673__$1);
var state_37698__$1 = (function (){var statearr_37720 = state_37698;
(statearr_37720[(20)] = inst_37673__$1);

(statearr_37720[(21)] = inst_37674);

return statearr_37720;
})();
if(cljs.core.truth_(inst_37675)){
var statearr_37721_37800 = state_37698__$1;
(statearr_37721_37800[(1)] = (41));

} else {
var statearr_37722_37801 = state_37698__$1;
(statearr_37722_37801[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (33))){
var state_37698__$1 = state_37698;
var statearr_37723_37802 = state_37698__$1;
(statearr_37723_37802[(2)] = false);

(statearr_37723_37802[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (13))){
var inst_37571 = (state_37698[(22)]);
var inst_37575 = cljs.core.chunk_first.call(null,inst_37571);
var inst_37576 = cljs.core.chunk_rest.call(null,inst_37571);
var inst_37577 = cljs.core.count.call(null,inst_37575);
var inst_37558 = inst_37576;
var inst_37559 = inst_37575;
var inst_37560 = inst_37577;
var inst_37561 = (0);
var state_37698__$1 = (function (){var statearr_37724 = state_37698;
(statearr_37724[(7)] = inst_37560);

(statearr_37724[(8)] = inst_37561);

(statearr_37724[(9)] = inst_37558);

(statearr_37724[(10)] = inst_37559);

return statearr_37724;
})();
var statearr_37725_37803 = state_37698__$1;
(statearr_37725_37803[(2)] = null);

(statearr_37725_37803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (22))){
var inst_37615 = (state_37698[(23)]);
var inst_37619 = (state_37698[(24)]);
var inst_37614 = (state_37698[(25)]);
var inst_37611 = (state_37698[(19)]);
var inst_37614__$1 = (state_37698[(2)]);
var inst_37615__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37614__$1);
var inst_37616 = (function (){var all_files = inst_37611;
var res_SINGLEQUOTE_ = inst_37614__$1;
var res = inst_37615__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37615,inst_37619,inst_37614,inst_37611,inst_37614__$1,inst_37615__$1,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37540_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37540_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37615,inst_37619,inst_37614,inst_37611,inst_37614__$1,inst_37615__$1,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37617 = cljs.core.filter.call(null,inst_37616,inst_37614__$1);
var inst_37618 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37619__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37618);
var inst_37620 = cljs.core.not_empty.call(null,inst_37619__$1);
var state_37698__$1 = (function (){var statearr_37726 = state_37698;
(statearr_37726[(23)] = inst_37615__$1);

(statearr_37726[(26)] = inst_37617);

(statearr_37726[(24)] = inst_37619__$1);

(statearr_37726[(25)] = inst_37614__$1);

return statearr_37726;
})();
if(cljs.core.truth_(inst_37620)){
var statearr_37727_37804 = state_37698__$1;
(statearr_37727_37804[(1)] = (23));

} else {
var statearr_37728_37805 = state_37698__$1;
(statearr_37728_37805[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (36))){
var state_37698__$1 = state_37698;
var statearr_37729_37806 = state_37698__$1;
(statearr_37729_37806[(2)] = false);

(statearr_37729_37806[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (41))){
var inst_37673 = (state_37698[(20)]);
var inst_37677 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37678 = cljs.core.map.call(null,inst_37677,inst_37673);
var inst_37679 = cljs.core.pr_str.call(null,inst_37678);
var inst_37680 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37679)].join('');
var inst_37681 = figwheel.client.utils.log.call(null,inst_37680);
var state_37698__$1 = state_37698;
var statearr_37730_37807 = state_37698__$1;
(statearr_37730_37807[(2)] = inst_37681);

(statearr_37730_37807[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (43))){
var inst_37674 = (state_37698[(21)]);
var inst_37684 = (state_37698[(2)]);
var inst_37685 = cljs.core.not_empty.call(null,inst_37674);
var state_37698__$1 = (function (){var statearr_37731 = state_37698;
(statearr_37731[(27)] = inst_37684);

return statearr_37731;
})();
if(cljs.core.truth_(inst_37685)){
var statearr_37732_37808 = state_37698__$1;
(statearr_37732_37808[(1)] = (44));

} else {
var statearr_37733_37809 = state_37698__$1;
(statearr_37733_37809[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (29))){
var inst_37615 = (state_37698[(23)]);
var inst_37617 = (state_37698[(26)]);
var inst_37619 = (state_37698[(24)]);
var inst_37614 = (state_37698[(25)]);
var inst_37651 = (state_37698[(16)]);
var inst_37611 = (state_37698[(19)]);
var inst_37647 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37650 = (function (){var all_files = inst_37611;
var res_SINGLEQUOTE_ = inst_37614;
var res = inst_37615;
var files_not_loaded = inst_37617;
var dependencies_that_loaded = inst_37619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37651,inst_37611,inst_37647,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37649){
var map__37734 = p__37649;
var map__37734__$1 = ((((!((map__37734 == null)))?((((map__37734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37734):map__37734);
var namespace = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37651,inst_37611,inst_37647,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37651__$1 = cljs.core.group_by.call(null,inst_37650,inst_37617);
var inst_37653 = (inst_37651__$1 == null);
var inst_37654 = cljs.core.not.call(null,inst_37653);
var state_37698__$1 = (function (){var statearr_37736 = state_37698;
(statearr_37736[(16)] = inst_37651__$1);

(statearr_37736[(28)] = inst_37647);

return statearr_37736;
})();
if(inst_37654){
var statearr_37737_37810 = state_37698__$1;
(statearr_37737_37810[(1)] = (32));

} else {
var statearr_37738_37811 = state_37698__$1;
(statearr_37738_37811[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (44))){
var inst_37674 = (state_37698[(21)]);
var inst_37687 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37674);
var inst_37688 = cljs.core.pr_str.call(null,inst_37687);
var inst_37689 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37688)].join('');
var inst_37690 = figwheel.client.utils.log.call(null,inst_37689);
var state_37698__$1 = state_37698;
var statearr_37739_37812 = state_37698__$1;
(statearr_37739_37812[(2)] = inst_37690);

(statearr_37739_37812[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (6))){
var inst_37592 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37740_37813 = state_37698__$1;
(statearr_37740_37813[(2)] = inst_37592);

(statearr_37740_37813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (28))){
var inst_37617 = (state_37698[(26)]);
var inst_37644 = (state_37698[(2)]);
var inst_37645 = cljs.core.not_empty.call(null,inst_37617);
var state_37698__$1 = (function (){var statearr_37741 = state_37698;
(statearr_37741[(29)] = inst_37644);

return statearr_37741;
})();
if(cljs.core.truth_(inst_37645)){
var statearr_37742_37814 = state_37698__$1;
(statearr_37742_37814[(1)] = (29));

} else {
var statearr_37743_37815 = state_37698__$1;
(statearr_37743_37815[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (25))){
var inst_37615 = (state_37698[(23)]);
var inst_37631 = (state_37698[(2)]);
var inst_37632 = cljs.core.not_empty.call(null,inst_37615);
var state_37698__$1 = (function (){var statearr_37744 = state_37698;
(statearr_37744[(30)] = inst_37631);

return statearr_37744;
})();
if(cljs.core.truth_(inst_37632)){
var statearr_37745_37816 = state_37698__$1;
(statearr_37745_37816[(1)] = (26));

} else {
var statearr_37746_37817 = state_37698__$1;
(statearr_37746_37817[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (34))){
var inst_37667 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37667)){
var statearr_37747_37818 = state_37698__$1;
(statearr_37747_37818[(1)] = (38));

} else {
var statearr_37748_37819 = state_37698__$1;
(statearr_37748_37819[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (17))){
var state_37698__$1 = state_37698;
var statearr_37749_37820 = state_37698__$1;
(statearr_37749_37820[(2)] = recompile_dependents);

(statearr_37749_37820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (3))){
var state_37698__$1 = state_37698;
var statearr_37750_37821 = state_37698__$1;
(statearr_37750_37821[(2)] = null);

(statearr_37750_37821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (12))){
var inst_37588 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37751_37822 = state_37698__$1;
(statearr_37751_37822[(2)] = inst_37588);

(statearr_37751_37822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (2))){
var inst_37550 = (state_37698[(13)]);
var inst_37557 = cljs.core.seq.call(null,inst_37550);
var inst_37558 = inst_37557;
var inst_37559 = null;
var inst_37560 = (0);
var inst_37561 = (0);
var state_37698__$1 = (function (){var statearr_37752 = state_37698;
(statearr_37752[(7)] = inst_37560);

(statearr_37752[(8)] = inst_37561);

(statearr_37752[(9)] = inst_37558);

(statearr_37752[(10)] = inst_37559);

return statearr_37752;
})();
var statearr_37753_37823 = state_37698__$1;
(statearr_37753_37823[(2)] = null);

(statearr_37753_37823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (23))){
var inst_37615 = (state_37698[(23)]);
var inst_37617 = (state_37698[(26)]);
var inst_37619 = (state_37698[(24)]);
var inst_37614 = (state_37698[(25)]);
var inst_37611 = (state_37698[(19)]);
var inst_37622 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37624 = (function (){var all_files = inst_37611;
var res_SINGLEQUOTE_ = inst_37614;
var res = inst_37615;
var files_not_loaded = inst_37617;
var dependencies_that_loaded = inst_37619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37611,inst_37622,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37623){
var map__37754 = p__37623;
var map__37754__$1 = ((((!((map__37754 == null)))?((((map__37754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37754):map__37754);
var request_url = cljs.core.get.call(null,map__37754__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37611,inst_37622,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37625 = cljs.core.reverse.call(null,inst_37619);
var inst_37626 = cljs.core.map.call(null,inst_37624,inst_37625);
var inst_37627 = cljs.core.pr_str.call(null,inst_37626);
var inst_37628 = figwheel.client.utils.log.call(null,inst_37627);
var state_37698__$1 = (function (){var statearr_37756 = state_37698;
(statearr_37756[(31)] = inst_37622);

return statearr_37756;
})();
var statearr_37757_37824 = state_37698__$1;
(statearr_37757_37824[(2)] = inst_37628);

(statearr_37757_37824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (35))){
var state_37698__$1 = state_37698;
var statearr_37758_37825 = state_37698__$1;
(statearr_37758_37825[(2)] = true);

(statearr_37758_37825[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (19))){
var inst_37601 = (state_37698[(12)]);
var inst_37607 = figwheel.client.file_reloading.expand_files.call(null,inst_37601);
var state_37698__$1 = state_37698;
var statearr_37759_37826 = state_37698__$1;
(statearr_37759_37826[(2)] = inst_37607);

(statearr_37759_37826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (11))){
var state_37698__$1 = state_37698;
var statearr_37760_37827 = state_37698__$1;
(statearr_37760_37827[(2)] = null);

(statearr_37760_37827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (9))){
var inst_37590 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37761_37828 = state_37698__$1;
(statearr_37761_37828[(2)] = inst_37590);

(statearr_37761_37828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (5))){
var inst_37560 = (state_37698[(7)]);
var inst_37561 = (state_37698[(8)]);
var inst_37563 = (inst_37561 < inst_37560);
var inst_37564 = inst_37563;
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37564)){
var statearr_37762_37829 = state_37698__$1;
(statearr_37762_37829[(1)] = (7));

} else {
var statearr_37763_37830 = state_37698__$1;
(statearr_37763_37830[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (14))){
var inst_37571 = (state_37698[(22)]);
var inst_37580 = cljs.core.first.call(null,inst_37571);
var inst_37581 = figwheel.client.file_reloading.eval_body.call(null,inst_37580,opts);
var inst_37582 = cljs.core.next.call(null,inst_37571);
var inst_37558 = inst_37582;
var inst_37559 = null;
var inst_37560 = (0);
var inst_37561 = (0);
var state_37698__$1 = (function (){var statearr_37764 = state_37698;
(statearr_37764[(7)] = inst_37560);

(statearr_37764[(8)] = inst_37561);

(statearr_37764[(9)] = inst_37558);

(statearr_37764[(10)] = inst_37559);

(statearr_37764[(32)] = inst_37581);

return statearr_37764;
})();
var statearr_37765_37831 = state_37698__$1;
(statearr_37765_37831[(2)] = null);

(statearr_37765_37831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (45))){
var state_37698__$1 = state_37698;
var statearr_37766_37832 = state_37698__$1;
(statearr_37766_37832[(2)] = null);

(statearr_37766_37832[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (26))){
var inst_37615 = (state_37698[(23)]);
var inst_37617 = (state_37698[(26)]);
var inst_37619 = (state_37698[(24)]);
var inst_37614 = (state_37698[(25)]);
var inst_37611 = (state_37698[(19)]);
var inst_37634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37636 = (function (){var all_files = inst_37611;
var res_SINGLEQUOTE_ = inst_37614;
var res = inst_37615;
var files_not_loaded = inst_37617;
var dependencies_that_loaded = inst_37619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37611,inst_37634,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37635){
var map__37767 = p__37635;
var map__37767__$1 = ((((!((map__37767 == null)))?((((map__37767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37767):map__37767);
var namespace = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37611,inst_37634,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37637 = cljs.core.map.call(null,inst_37636,inst_37615);
var inst_37638 = cljs.core.pr_str.call(null,inst_37637);
var inst_37639 = figwheel.client.utils.log.call(null,inst_37638);
var inst_37640 = (function (){var all_files = inst_37611;
var res_SINGLEQUOTE_ = inst_37614;
var res = inst_37615;
var files_not_loaded = inst_37617;
var dependencies_that_loaded = inst_37619;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37611,inst_37634,inst_37636,inst_37637,inst_37638,inst_37639,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37615,inst_37617,inst_37619,inst_37614,inst_37611,inst_37634,inst_37636,inst_37637,inst_37638,inst_37639,state_val_37699,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37641 = setTimeout(inst_37640,(10));
var state_37698__$1 = (function (){var statearr_37769 = state_37698;
(statearr_37769[(33)] = inst_37634);

(statearr_37769[(34)] = inst_37639);

return statearr_37769;
})();
var statearr_37770_37833 = state_37698__$1;
(statearr_37770_37833[(2)] = inst_37641);

(statearr_37770_37833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (16))){
var state_37698__$1 = state_37698;
var statearr_37771_37834 = state_37698__$1;
(statearr_37771_37834[(2)] = reload_dependents);

(statearr_37771_37834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (38))){
var inst_37651 = (state_37698[(16)]);
var inst_37669 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37651);
var state_37698__$1 = state_37698;
var statearr_37772_37835 = state_37698__$1;
(statearr_37772_37835[(2)] = inst_37669);

(statearr_37772_37835[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (30))){
var state_37698__$1 = state_37698;
var statearr_37773_37836 = state_37698__$1;
(statearr_37773_37836[(2)] = null);

(statearr_37773_37836[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (10))){
var inst_37571 = (state_37698[(22)]);
var inst_37573 = cljs.core.chunked_seq_QMARK_.call(null,inst_37571);
var state_37698__$1 = state_37698;
if(inst_37573){
var statearr_37774_37837 = state_37698__$1;
(statearr_37774_37837[(1)] = (13));

} else {
var statearr_37775_37838 = state_37698__$1;
(statearr_37775_37838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (18))){
var inst_37605 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37605)){
var statearr_37776_37839 = state_37698__$1;
(statearr_37776_37839[(1)] = (19));

} else {
var statearr_37777_37840 = state_37698__$1;
(statearr_37777_37840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (42))){
var state_37698__$1 = state_37698;
var statearr_37778_37841 = state_37698__$1;
(statearr_37778_37841[(2)] = null);

(statearr_37778_37841[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (37))){
var inst_37664 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37779_37842 = state_37698__$1;
(statearr_37779_37842[(2)] = inst_37664);

(statearr_37779_37842[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (8))){
var inst_37558 = (state_37698[(9)]);
var inst_37571 = (state_37698[(22)]);
var inst_37571__$1 = cljs.core.seq.call(null,inst_37558);
var state_37698__$1 = (function (){var statearr_37780 = state_37698;
(statearr_37780[(22)] = inst_37571__$1);

return statearr_37780;
})();
if(inst_37571__$1){
var statearr_37781_37843 = state_37698__$1;
(statearr_37781_37843[(1)] = (10));

} else {
var statearr_37782_37844 = state_37698__$1;
(statearr_37782_37844[(1)] = (11));

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
}
});})(c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33983__auto__,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto____0 = (function (){
var statearr_37783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37783[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto__);

(statearr_37783[(1)] = (1));

return statearr_37783;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto____1 = (function (state_37698){
while(true){
var ret_value__33985__auto__ = (function (){try{while(true){
var result__33986__auto__ = switch__33983__auto__.call(null,state_37698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33986__auto__;
}
break;
}
}catch (e37784){if((e37784 instanceof Object)){
var ex__33987__auto__ = e37784;
var statearr_37785_37845 = state_37698;
(statearr_37785_37845[(5)] = ex__33987__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37846 = state_37698;
state_37698 = G__37846;
continue;
} else {
return ret_value__33985__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto__ = function(state_37698){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto____1.call(this,state_37698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33984__auto__;
})()
;})(switch__33983__auto__,c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34073__auto__ = (function (){var statearr_37786 = f__34072__auto__.call(null);
(statearr_37786[(6)] = c__34071__auto__);

return statearr_37786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34073__auto__);
});})(c__34071__auto__,map__37543,map__37543__$1,opts,before_jsload,on_jsload,reload_dependents,map__37544,map__37544__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37849,link){
var map__37850 = p__37849;
var map__37850__$1 = ((((!((map__37850 == null)))?((((map__37850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37850):map__37850);
var file = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37850,map__37850__$1,file){
return (function (p1__37847_SHARP_,p2__37848_SHARP_){
if(cljs.core._EQ_.call(null,p1__37847_SHARP_,p2__37848_SHARP_)){
return p1__37847_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37850,map__37850__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37853){
var map__37854 = p__37853;
var map__37854__$1 = ((((!((map__37854 == null)))?((((map__37854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37854):map__37854);
var match_length = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37852_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37852_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37856_SHARP_,p2__37857_SHARP_){
return cljs.core.assoc.call(null,p1__37856_SHARP_,cljs.core.get.call(null,p2__37857_SHARP_,key),p2__37857_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37858 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37858);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37858);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37859,p__37860){
var map__37861 = p__37859;
var map__37861__$1 = ((((!((map__37861 == null)))?((((map__37861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37861):map__37861);
var on_cssload = cljs.core.get.call(null,map__37861__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37862 = p__37860;
var map__37862__$1 = ((((!((map__37862 == null)))?((((map__37862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37862):map__37862);
var files_msg = map__37862__$1;
var files = cljs.core.get.call(null,map__37862__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518582090480
