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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37249_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37249_SHARP_));
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
var seq__37250 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37251 = null;
var count__37252 = (0);
var i__37253 = (0);
while(true){
if((i__37253 < count__37252)){
var n = cljs.core._nth.call(null,chunk__37251,i__37253);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37254 = seq__37250;
var G__37255 = chunk__37251;
var G__37256 = count__37252;
var G__37257 = (i__37253 + (1));
seq__37250 = G__37254;
chunk__37251 = G__37255;
count__37252 = G__37256;
i__37253 = G__37257;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37250);
if(temp__4657__auto__){
var seq__37250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37250__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__37250__$1);
var G__37258 = cljs.core.chunk_rest.call(null,seq__37250__$1);
var G__37259 = c__29262__auto__;
var G__37260 = cljs.core.count.call(null,c__29262__auto__);
var G__37261 = (0);
seq__37250 = G__37258;
chunk__37251 = G__37259;
count__37252 = G__37260;
i__37253 = G__37261;
continue;
} else {
var n = cljs.core.first.call(null,seq__37250__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37262 = cljs.core.next.call(null,seq__37250__$1);
var G__37263 = null;
var G__37264 = (0);
var G__37265 = (0);
seq__37250 = G__37262;
chunk__37251 = G__37263;
count__37252 = G__37264;
i__37253 = G__37265;
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

var seq__37275_37283 = cljs.core.seq.call(null,deps);
var chunk__37276_37284 = null;
var count__37277_37285 = (0);
var i__37278_37286 = (0);
while(true){
if((i__37278_37286 < count__37277_37285)){
var dep_37287 = cljs.core._nth.call(null,chunk__37276_37284,i__37278_37286);
topo_sort_helper_STAR_.call(null,dep_37287,(depth + (1)),state);

var G__37288 = seq__37275_37283;
var G__37289 = chunk__37276_37284;
var G__37290 = count__37277_37285;
var G__37291 = (i__37278_37286 + (1));
seq__37275_37283 = G__37288;
chunk__37276_37284 = G__37289;
count__37277_37285 = G__37290;
i__37278_37286 = G__37291;
continue;
} else {
var temp__4657__auto___37292 = cljs.core.seq.call(null,seq__37275_37283);
if(temp__4657__auto___37292){
var seq__37275_37293__$1 = temp__4657__auto___37292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37275_37293__$1)){
var c__29262__auto___37294 = cljs.core.chunk_first.call(null,seq__37275_37293__$1);
var G__37295 = cljs.core.chunk_rest.call(null,seq__37275_37293__$1);
var G__37296 = c__29262__auto___37294;
var G__37297 = cljs.core.count.call(null,c__29262__auto___37294);
var G__37298 = (0);
seq__37275_37283 = G__37295;
chunk__37276_37284 = G__37296;
count__37277_37285 = G__37297;
i__37278_37286 = G__37298;
continue;
} else {
var dep_37299 = cljs.core.first.call(null,seq__37275_37293__$1);
topo_sort_helper_STAR_.call(null,dep_37299,(depth + (1)),state);

var G__37300 = cljs.core.next.call(null,seq__37275_37293__$1);
var G__37301 = null;
var G__37302 = (0);
var G__37303 = (0);
seq__37275_37283 = G__37300;
chunk__37276_37284 = G__37301;
count__37277_37285 = G__37302;
i__37278_37286 = G__37303;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37279){
var vec__37280 = p__37279;
var seq__37281 = cljs.core.seq.call(null,vec__37280);
var first__37282 = cljs.core.first.call(null,seq__37281);
var seq__37281__$1 = cljs.core.next.call(null,seq__37281);
var x = first__37282;
var xs = seq__37281__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37280,seq__37281,first__37282,seq__37281__$1,x,xs,get_deps__$1){
return (function (p1__37266_SHARP_){
return clojure.set.difference.call(null,p1__37266_SHARP_,x);
});})(vec__37280,seq__37281,first__37282,seq__37281__$1,x,xs,get_deps__$1))
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
var seq__37304 = cljs.core.seq.call(null,provides);
var chunk__37305 = null;
var count__37306 = (0);
var i__37307 = (0);
while(true){
if((i__37307 < count__37306)){
var prov = cljs.core._nth.call(null,chunk__37305,i__37307);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37308_37316 = cljs.core.seq.call(null,requires);
var chunk__37309_37317 = null;
var count__37310_37318 = (0);
var i__37311_37319 = (0);
while(true){
if((i__37311_37319 < count__37310_37318)){
var req_37320 = cljs.core._nth.call(null,chunk__37309_37317,i__37311_37319);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37320,prov);

var G__37321 = seq__37308_37316;
var G__37322 = chunk__37309_37317;
var G__37323 = count__37310_37318;
var G__37324 = (i__37311_37319 + (1));
seq__37308_37316 = G__37321;
chunk__37309_37317 = G__37322;
count__37310_37318 = G__37323;
i__37311_37319 = G__37324;
continue;
} else {
var temp__4657__auto___37325 = cljs.core.seq.call(null,seq__37308_37316);
if(temp__4657__auto___37325){
var seq__37308_37326__$1 = temp__4657__auto___37325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37308_37326__$1)){
var c__29262__auto___37327 = cljs.core.chunk_first.call(null,seq__37308_37326__$1);
var G__37328 = cljs.core.chunk_rest.call(null,seq__37308_37326__$1);
var G__37329 = c__29262__auto___37327;
var G__37330 = cljs.core.count.call(null,c__29262__auto___37327);
var G__37331 = (0);
seq__37308_37316 = G__37328;
chunk__37309_37317 = G__37329;
count__37310_37318 = G__37330;
i__37311_37319 = G__37331;
continue;
} else {
var req_37332 = cljs.core.first.call(null,seq__37308_37326__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37332,prov);

var G__37333 = cljs.core.next.call(null,seq__37308_37326__$1);
var G__37334 = null;
var G__37335 = (0);
var G__37336 = (0);
seq__37308_37316 = G__37333;
chunk__37309_37317 = G__37334;
count__37310_37318 = G__37335;
i__37311_37319 = G__37336;
continue;
}
} else {
}
}
break;
}

var G__37337 = seq__37304;
var G__37338 = chunk__37305;
var G__37339 = count__37306;
var G__37340 = (i__37307 + (1));
seq__37304 = G__37337;
chunk__37305 = G__37338;
count__37306 = G__37339;
i__37307 = G__37340;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37304);
if(temp__4657__auto__){
var seq__37304__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37304__$1)){
var c__29262__auto__ = cljs.core.chunk_first.call(null,seq__37304__$1);
var G__37341 = cljs.core.chunk_rest.call(null,seq__37304__$1);
var G__37342 = c__29262__auto__;
var G__37343 = cljs.core.count.call(null,c__29262__auto__);
var G__37344 = (0);
seq__37304 = G__37341;
chunk__37305 = G__37342;
count__37306 = G__37343;
i__37307 = G__37344;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37304__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37312_37345 = cljs.core.seq.call(null,requires);
var chunk__37313_37346 = null;
var count__37314_37347 = (0);
var i__37315_37348 = (0);
while(true){
if((i__37315_37348 < count__37314_37347)){
var req_37349 = cljs.core._nth.call(null,chunk__37313_37346,i__37315_37348);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37349,prov);

var G__37350 = seq__37312_37345;
var G__37351 = chunk__37313_37346;
var G__37352 = count__37314_37347;
var G__37353 = (i__37315_37348 + (1));
seq__37312_37345 = G__37350;
chunk__37313_37346 = G__37351;
count__37314_37347 = G__37352;
i__37315_37348 = G__37353;
continue;
} else {
var temp__4657__auto___37354__$1 = cljs.core.seq.call(null,seq__37312_37345);
if(temp__4657__auto___37354__$1){
var seq__37312_37355__$1 = temp__4657__auto___37354__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37312_37355__$1)){
var c__29262__auto___37356 = cljs.core.chunk_first.call(null,seq__37312_37355__$1);
var G__37357 = cljs.core.chunk_rest.call(null,seq__37312_37355__$1);
var G__37358 = c__29262__auto___37356;
var G__37359 = cljs.core.count.call(null,c__29262__auto___37356);
var G__37360 = (0);
seq__37312_37345 = G__37357;
chunk__37313_37346 = G__37358;
count__37314_37347 = G__37359;
i__37315_37348 = G__37360;
continue;
} else {
var req_37361 = cljs.core.first.call(null,seq__37312_37355__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37361,prov);

var G__37362 = cljs.core.next.call(null,seq__37312_37355__$1);
var G__37363 = null;
var G__37364 = (0);
var G__37365 = (0);
seq__37312_37345 = G__37362;
chunk__37313_37346 = G__37363;
count__37314_37347 = G__37364;
i__37315_37348 = G__37365;
continue;
}
} else {
}
}
break;
}

var G__37366 = cljs.core.next.call(null,seq__37304__$1);
var G__37367 = null;
var G__37368 = (0);
var G__37369 = (0);
seq__37304 = G__37366;
chunk__37305 = G__37367;
count__37306 = G__37368;
i__37307 = G__37369;
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
var seq__37370_37374 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37371_37375 = null;
var count__37372_37376 = (0);
var i__37373_37377 = (0);
while(true){
if((i__37373_37377 < count__37372_37376)){
var ns_37378 = cljs.core._nth.call(null,chunk__37371_37375,i__37373_37377);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37378);

var G__37379 = seq__37370_37374;
var G__37380 = chunk__37371_37375;
var G__37381 = count__37372_37376;
var G__37382 = (i__37373_37377 + (1));
seq__37370_37374 = G__37379;
chunk__37371_37375 = G__37380;
count__37372_37376 = G__37381;
i__37373_37377 = G__37382;
continue;
} else {
var temp__4657__auto___37383 = cljs.core.seq.call(null,seq__37370_37374);
if(temp__4657__auto___37383){
var seq__37370_37384__$1 = temp__4657__auto___37383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37370_37384__$1)){
var c__29262__auto___37385 = cljs.core.chunk_first.call(null,seq__37370_37384__$1);
var G__37386 = cljs.core.chunk_rest.call(null,seq__37370_37384__$1);
var G__37387 = c__29262__auto___37385;
var G__37388 = cljs.core.count.call(null,c__29262__auto___37385);
var G__37389 = (0);
seq__37370_37374 = G__37386;
chunk__37371_37375 = G__37387;
count__37372_37376 = G__37388;
i__37373_37377 = G__37389;
continue;
} else {
var ns_37390 = cljs.core.first.call(null,seq__37370_37384__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37390);

var G__37391 = cljs.core.next.call(null,seq__37370_37384__$1);
var G__37392 = null;
var G__37393 = (0);
var G__37394 = (0);
seq__37370_37374 = G__37391;
chunk__37371_37375 = G__37392;
count__37372_37376 = G__37393;
i__37373_37377 = G__37394;
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
var G__37395__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37396__i = 0, G__37396__a = new Array(arguments.length -  0);
while (G__37396__i < G__37396__a.length) {G__37396__a[G__37396__i] = arguments[G__37396__i + 0]; ++G__37396__i;}
  args = new cljs.core.IndexedSeq(G__37396__a,0,null);
} 
return G__37395__delegate.call(this,args);};
G__37395.cljs$lang$maxFixedArity = 0;
G__37395.cljs$lang$applyTo = (function (arglist__37397){
var args = cljs.core.seq(arglist__37397);
return G__37395__delegate(args);
});
G__37395.cljs$core$IFn$_invoke$arity$variadic = G__37395__delegate;
return G__37395;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37398_SHARP_,p2__37399_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37398_SHARP_)].join('')),p2__37399_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37400_SHARP_,p2__37401_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37400_SHARP_)].join(''),p2__37401_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37402 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37402.addCallback(((function (G__37402){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37402))
);

G__37402.addErrback(((function (G__37402){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37402))
);

return G__37402;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37403 = cljs.core._EQ_;
var expr__37404 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37403.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37404))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37403,expr__37404){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37403,expr__37404))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37403,expr__37404){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37406){if((e37406 instanceof Error)){
var e = e37406;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37406;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37403,expr__37404))
} else {
if(cljs.core.truth_(pred__37403.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37404))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37403.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37404))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37403.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37404))){
return ((function (pred__37403,expr__37404){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37407){if((e37407 instanceof Error)){
var e = e37407;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37407;

}
}})());
});
;})(pred__37403,expr__37404))
} else {
return ((function (pred__37403,expr__37404){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37403,expr__37404))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37408,callback){
var map__37409 = p__37408;
var map__37409__$1 = ((((!((map__37409 == null)))?((((map__37409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37409):map__37409);
var file_msg = map__37409__$1;
var request_url = cljs.core.get.call(null,map__37409__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37409,map__37409__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37409,map__37409__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__){
return (function (state_37433){
var state_val_37434 = (state_37433[(1)]);
if((state_val_37434 === (7))){
var inst_37429 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
var statearr_37435_37452 = state_37433__$1;
(statearr_37435_37452[(2)] = inst_37429);

(statearr_37435_37452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (1))){
var state_37433__$1 = state_37433;
var statearr_37436_37453 = state_37433__$1;
(statearr_37436_37453[(2)] = null);

(statearr_37436_37453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (4))){
var inst_37413 = (state_37433[(7)]);
var inst_37413__$1 = (state_37433[(2)]);
var state_37433__$1 = (function (){var statearr_37437 = state_37433;
(statearr_37437[(7)] = inst_37413__$1);

return statearr_37437;
})();
if(cljs.core.truth_(inst_37413__$1)){
var statearr_37438_37454 = state_37433__$1;
(statearr_37438_37454[(1)] = (5));

} else {
var statearr_37439_37455 = state_37433__$1;
(statearr_37439_37455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (6))){
var state_37433__$1 = state_37433;
var statearr_37440_37456 = state_37433__$1;
(statearr_37440_37456[(2)] = null);

(statearr_37440_37456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (3))){
var inst_37431 = (state_37433[(2)]);
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37433__$1,inst_37431);
} else {
if((state_val_37434 === (2))){
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37433__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37434 === (11))){
var inst_37425 = (state_37433[(2)]);
var state_37433__$1 = (function (){var statearr_37441 = state_37433;
(statearr_37441[(8)] = inst_37425);

return statearr_37441;
})();
var statearr_37442_37457 = state_37433__$1;
(statearr_37442_37457[(2)] = null);

(statearr_37442_37457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (9))){
var inst_37419 = (state_37433[(9)]);
var inst_37417 = (state_37433[(10)]);
var inst_37421 = inst_37419.call(null,inst_37417);
var state_37433__$1 = state_37433;
var statearr_37443_37458 = state_37433__$1;
(statearr_37443_37458[(2)] = inst_37421);

(statearr_37443_37458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (5))){
var inst_37413 = (state_37433[(7)]);
var inst_37415 = figwheel.client.file_reloading.blocking_load.call(null,inst_37413);
var state_37433__$1 = state_37433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37433__$1,(8),inst_37415);
} else {
if((state_val_37434 === (10))){
var inst_37417 = (state_37433[(10)]);
var inst_37423 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37417);
var state_37433__$1 = state_37433;
var statearr_37444_37459 = state_37433__$1;
(statearr_37444_37459[(2)] = inst_37423);

(statearr_37444_37459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37434 === (8))){
var inst_37419 = (state_37433[(9)]);
var inst_37413 = (state_37433[(7)]);
var inst_37417 = (state_37433[(2)]);
var inst_37418 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37419__$1 = cljs.core.get.call(null,inst_37418,inst_37413);
var state_37433__$1 = (function (){var statearr_37445 = state_37433;
(statearr_37445[(9)] = inst_37419__$1);

(statearr_37445[(10)] = inst_37417);

return statearr_37445;
})();
if(cljs.core.truth_(inst_37419__$1)){
var statearr_37446_37460 = state_37433__$1;
(statearr_37446_37460[(1)] = (9));

} else {
var statearr_37447_37461 = state_37433__$1;
(statearr_37447_37461[(1)] = (10));

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
});})(c__34079__auto__))
;
return ((function (switch__33991__auto__,c__34079__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33992__auto__ = null;
var figwheel$client$file_reloading$state_machine__33992__auto____0 = (function (){
var statearr_37448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37448[(0)] = figwheel$client$file_reloading$state_machine__33992__auto__);

(statearr_37448[(1)] = (1));

return statearr_37448;
});
var figwheel$client$file_reloading$state_machine__33992__auto____1 = (function (state_37433){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_37433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e37449){if((e37449 instanceof Object)){
var ex__33995__auto__ = e37449;
var statearr_37450_37462 = state_37433;
(statearr_37450_37462[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37463 = state_37433;
state_37433 = G__37463;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33992__auto__ = function(state_37433){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33992__auto____1.call(this,state_37433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33992__auto____0;
figwheel$client$file_reloading$state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33992__auto____1;
return figwheel$client$file_reloading$state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__))
})();
var state__34081__auto__ = (function (){var statearr_37451 = f__34080__auto__.call(null);
(statearr_37451[(6)] = c__34079__auto__);

return statearr_37451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__))
);

return c__34079__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37464,callback){
var map__37465 = p__37464;
var map__37465__$1 = ((((!((map__37465 == null)))?((((map__37465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37465):map__37465);
var file_msg = map__37465__$1;
var namespace = cljs.core.get.call(null,map__37465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37465,map__37465__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37465,map__37465__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37467){
var map__37468 = p__37467;
var map__37468__$1 = ((((!((map__37468 == null)))?((((map__37468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37468):map__37468);
var file_msg = map__37468__$1;
var namespace = cljs.core.get.call(null,map__37468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37470){
var map__37471 = p__37470;
var map__37471__$1 = ((((!((map__37471 == null)))?((((map__37471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37471):map__37471);
var file_msg = map__37471__$1;
var namespace = cljs.core.get.call(null,map__37471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37473,callback){
var map__37474 = p__37473;
var map__37474__$1 = ((((!((map__37474 == null)))?((((map__37474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37474):map__37474);
var file_msg = map__37474__$1;
var request_url = cljs.core.get.call(null,map__37474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34079__auto___37524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto___37524,out){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto___37524,out){
return (function (state_37509){
var state_val_37510 = (state_37509[(1)]);
if((state_val_37510 === (1))){
var inst_37483 = cljs.core.seq.call(null,files);
var inst_37484 = cljs.core.first.call(null,inst_37483);
var inst_37485 = cljs.core.next.call(null,inst_37483);
var inst_37486 = files;
var state_37509__$1 = (function (){var statearr_37511 = state_37509;
(statearr_37511[(7)] = inst_37486);

(statearr_37511[(8)] = inst_37485);

(statearr_37511[(9)] = inst_37484);

return statearr_37511;
})();
var statearr_37512_37525 = state_37509__$1;
(statearr_37512_37525[(2)] = null);

(statearr_37512_37525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (2))){
var inst_37486 = (state_37509[(7)]);
var inst_37492 = (state_37509[(10)]);
var inst_37491 = cljs.core.seq.call(null,inst_37486);
var inst_37492__$1 = cljs.core.first.call(null,inst_37491);
var inst_37493 = cljs.core.next.call(null,inst_37491);
var inst_37494 = (inst_37492__$1 == null);
var inst_37495 = cljs.core.not.call(null,inst_37494);
var state_37509__$1 = (function (){var statearr_37513 = state_37509;
(statearr_37513[(10)] = inst_37492__$1);

(statearr_37513[(11)] = inst_37493);

return statearr_37513;
})();
if(inst_37495){
var statearr_37514_37526 = state_37509__$1;
(statearr_37514_37526[(1)] = (4));

} else {
var statearr_37515_37527 = state_37509__$1;
(statearr_37515_37527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (3))){
var inst_37507 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37509__$1,inst_37507);
} else {
if((state_val_37510 === (4))){
var inst_37492 = (state_37509[(10)]);
var inst_37497 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37492);
var state_37509__$1 = state_37509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37509__$1,(7),inst_37497);
} else {
if((state_val_37510 === (5))){
var inst_37503 = cljs.core.async.close_BANG_.call(null,out);
var state_37509__$1 = state_37509;
var statearr_37516_37528 = state_37509__$1;
(statearr_37516_37528[(2)] = inst_37503);

(statearr_37516_37528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (6))){
var inst_37505 = (state_37509[(2)]);
var state_37509__$1 = state_37509;
var statearr_37517_37529 = state_37509__$1;
(statearr_37517_37529[(2)] = inst_37505);

(statearr_37517_37529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37510 === (7))){
var inst_37493 = (state_37509[(11)]);
var inst_37499 = (state_37509[(2)]);
var inst_37500 = cljs.core.async.put_BANG_.call(null,out,inst_37499);
var inst_37486 = inst_37493;
var state_37509__$1 = (function (){var statearr_37518 = state_37509;
(statearr_37518[(7)] = inst_37486);

(statearr_37518[(12)] = inst_37500);

return statearr_37518;
})();
var statearr_37519_37530 = state_37509__$1;
(statearr_37519_37530[(2)] = null);

(statearr_37519_37530[(1)] = (2));


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
});})(c__34079__auto___37524,out))
;
return ((function (switch__33991__auto__,c__34079__auto___37524,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto____0 = (function (){
var statearr_37520 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37520[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto__);

(statearr_37520[(1)] = (1));

return statearr_37520;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto____1 = (function (state_37509){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_37509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e37521){if((e37521 instanceof Object)){
var ex__33995__auto__ = e37521;
var statearr_37522_37531 = state_37509;
(statearr_37522_37531[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37532 = state_37509;
state_37509 = G__37532;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto__ = function(state_37509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto____1.call(this,state_37509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto___37524,out))
})();
var state__34081__auto__ = (function (){var statearr_37523 = f__34080__auto__.call(null);
(statearr_37523[(6)] = c__34079__auto___37524);

return statearr_37523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto___37524,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37533,opts){
var map__37534 = p__37533;
var map__37534__$1 = ((((!((map__37534 == null)))?((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var eval_body = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37536){var e = e37536;
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
return (function (p1__37537_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37537_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37538){
var vec__37539 = p__37538;
var k = cljs.core.nth.call(null,vec__37539,(0),null);
var v = cljs.core.nth.call(null,vec__37539,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37542){
var vec__37543 = p__37542;
var k = cljs.core.nth.call(null,vec__37543,(0),null);
var v = cljs.core.nth.call(null,vec__37543,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37549,p__37550){
var map__37551 = p__37549;
var map__37551__$1 = ((((!((map__37551 == null)))?((((map__37551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37551):map__37551);
var opts = map__37551__$1;
var before_jsload = cljs.core.get.call(null,map__37551__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37551__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37551__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37552 = p__37550;
var map__37552__$1 = ((((!((map__37552 == null)))?((((map__37552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37552):map__37552);
var msg = map__37552__$1;
var files = cljs.core.get.call(null,map__37552__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37552__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37552__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34079__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34080__auto__ = (function (){var switch__33991__auto__ = ((function (c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37706){
var state_val_37707 = (state_37706[(1)]);
if((state_val_37707 === (7))){
var inst_37567 = (state_37706[(7)]);
var inst_37569 = (state_37706[(8)]);
var inst_37566 = (state_37706[(9)]);
var inst_37568 = (state_37706[(10)]);
var inst_37574 = cljs.core._nth.call(null,inst_37567,inst_37569);
var inst_37575 = figwheel.client.file_reloading.eval_body.call(null,inst_37574,opts);
var inst_37576 = (inst_37569 + (1));
var tmp37708 = inst_37567;
var tmp37709 = inst_37566;
var tmp37710 = inst_37568;
var inst_37566__$1 = tmp37709;
var inst_37567__$1 = tmp37708;
var inst_37568__$1 = tmp37710;
var inst_37569__$1 = inst_37576;
var state_37706__$1 = (function (){var statearr_37711 = state_37706;
(statearr_37711[(11)] = inst_37575);

(statearr_37711[(7)] = inst_37567__$1);

(statearr_37711[(8)] = inst_37569__$1);

(statearr_37711[(9)] = inst_37566__$1);

(statearr_37711[(10)] = inst_37568__$1);

return statearr_37711;
})();
var statearr_37712_37795 = state_37706__$1;
(statearr_37712_37795[(2)] = null);

(statearr_37712_37795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (20))){
var inst_37609 = (state_37706[(12)]);
var inst_37617 = figwheel.client.file_reloading.sort_files.call(null,inst_37609);
var state_37706__$1 = state_37706;
var statearr_37713_37796 = state_37706__$1;
(statearr_37713_37796[(2)] = inst_37617);

(statearr_37713_37796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (27))){
var state_37706__$1 = state_37706;
var statearr_37714_37797 = state_37706__$1;
(statearr_37714_37797[(2)] = null);

(statearr_37714_37797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (1))){
var inst_37558 = (state_37706[(13)]);
var inst_37555 = before_jsload.call(null,files);
var inst_37556 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37557 = (function (){return ((function (inst_37558,inst_37555,inst_37556,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37546_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37546_SHARP_);
});
;})(inst_37558,inst_37555,inst_37556,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37558__$1 = cljs.core.filter.call(null,inst_37557,files);
var inst_37559 = cljs.core.not_empty.call(null,inst_37558__$1);
var state_37706__$1 = (function (){var statearr_37715 = state_37706;
(statearr_37715[(14)] = inst_37555);

(statearr_37715[(15)] = inst_37556);

(statearr_37715[(13)] = inst_37558__$1);

return statearr_37715;
})();
if(cljs.core.truth_(inst_37559)){
var statearr_37716_37798 = state_37706__$1;
(statearr_37716_37798[(1)] = (2));

} else {
var statearr_37717_37799 = state_37706__$1;
(statearr_37717_37799[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (24))){
var state_37706__$1 = state_37706;
var statearr_37718_37800 = state_37706__$1;
(statearr_37718_37800[(2)] = null);

(statearr_37718_37800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (39))){
var inst_37659 = (state_37706[(16)]);
var state_37706__$1 = state_37706;
var statearr_37719_37801 = state_37706__$1;
(statearr_37719_37801[(2)] = inst_37659);

(statearr_37719_37801[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (46))){
var inst_37701 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37720_37802 = state_37706__$1;
(statearr_37720_37802[(2)] = inst_37701);

(statearr_37720_37802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (4))){
var inst_37603 = (state_37706[(2)]);
var inst_37604 = cljs.core.List.EMPTY;
var inst_37605 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37604);
var inst_37606 = (function (){return ((function (inst_37603,inst_37604,inst_37605,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37547_SHARP_){
var and__28411__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37547_SHARP_);
if(cljs.core.truth_(and__28411__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37547_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37547_SHARP_)));
} else {
return and__28411__auto__;
}
});
;})(inst_37603,inst_37604,inst_37605,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37607 = cljs.core.filter.call(null,inst_37606,files);
var inst_37608 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37609 = cljs.core.concat.call(null,inst_37607,inst_37608);
var state_37706__$1 = (function (){var statearr_37721 = state_37706;
(statearr_37721[(17)] = inst_37603);

(statearr_37721[(18)] = inst_37605);

(statearr_37721[(12)] = inst_37609);

return statearr_37721;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37722_37803 = state_37706__$1;
(statearr_37722_37803[(1)] = (16));

} else {
var statearr_37723_37804 = state_37706__$1;
(statearr_37723_37804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (15))){
var inst_37593 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37724_37805 = state_37706__$1;
(statearr_37724_37805[(2)] = inst_37593);

(statearr_37724_37805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (21))){
var inst_37619 = (state_37706[(19)]);
var inst_37619__$1 = (state_37706[(2)]);
var inst_37620 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37619__$1);
var state_37706__$1 = (function (){var statearr_37725 = state_37706;
(statearr_37725[(19)] = inst_37619__$1);

return statearr_37725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(22),inst_37620);
} else {
if((state_val_37707 === (31))){
var inst_37704 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37706__$1,inst_37704);
} else {
if((state_val_37707 === (32))){
var inst_37659 = (state_37706[(16)]);
var inst_37664 = inst_37659.cljs$lang$protocol_mask$partition0$;
var inst_37665 = (inst_37664 & (64));
var inst_37666 = inst_37659.cljs$core$ISeq$;
var inst_37667 = (cljs.core.PROTOCOL_SENTINEL === inst_37666);
var inst_37668 = (inst_37665) || (inst_37667);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37668)){
var statearr_37726_37806 = state_37706__$1;
(statearr_37726_37806[(1)] = (35));

} else {
var statearr_37727_37807 = state_37706__$1;
(statearr_37727_37807[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (40))){
var inst_37681 = (state_37706[(20)]);
var inst_37680 = (state_37706[(2)]);
var inst_37681__$1 = cljs.core.get.call(null,inst_37680,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37682 = cljs.core.get.call(null,inst_37680,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37683 = cljs.core.not_empty.call(null,inst_37681__$1);
var state_37706__$1 = (function (){var statearr_37728 = state_37706;
(statearr_37728[(21)] = inst_37682);

(statearr_37728[(20)] = inst_37681__$1);

return statearr_37728;
})();
if(cljs.core.truth_(inst_37683)){
var statearr_37729_37808 = state_37706__$1;
(statearr_37729_37808[(1)] = (41));

} else {
var statearr_37730_37809 = state_37706__$1;
(statearr_37730_37809[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (33))){
var state_37706__$1 = state_37706;
var statearr_37731_37810 = state_37706__$1;
(statearr_37731_37810[(2)] = false);

(statearr_37731_37810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (13))){
var inst_37579 = (state_37706[(22)]);
var inst_37583 = cljs.core.chunk_first.call(null,inst_37579);
var inst_37584 = cljs.core.chunk_rest.call(null,inst_37579);
var inst_37585 = cljs.core.count.call(null,inst_37583);
var inst_37566 = inst_37584;
var inst_37567 = inst_37583;
var inst_37568 = inst_37585;
var inst_37569 = (0);
var state_37706__$1 = (function (){var statearr_37732 = state_37706;
(statearr_37732[(7)] = inst_37567);

(statearr_37732[(8)] = inst_37569);

(statearr_37732[(9)] = inst_37566);

(statearr_37732[(10)] = inst_37568);

return statearr_37732;
})();
var statearr_37733_37811 = state_37706__$1;
(statearr_37733_37811[(2)] = null);

(statearr_37733_37811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (22))){
var inst_37622 = (state_37706[(23)]);
var inst_37623 = (state_37706[(24)]);
var inst_37627 = (state_37706[(25)]);
var inst_37619 = (state_37706[(19)]);
var inst_37622__$1 = (state_37706[(2)]);
var inst_37623__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37622__$1);
var inst_37624 = (function (){var all_files = inst_37619;
var res_SINGLEQUOTE_ = inst_37622__$1;
var res = inst_37623__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37622,inst_37623,inst_37627,inst_37619,inst_37622__$1,inst_37623__$1,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37548_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37548_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37622,inst_37623,inst_37627,inst_37619,inst_37622__$1,inst_37623__$1,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37625 = cljs.core.filter.call(null,inst_37624,inst_37622__$1);
var inst_37626 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37627__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37626);
var inst_37628 = cljs.core.not_empty.call(null,inst_37627__$1);
var state_37706__$1 = (function (){var statearr_37734 = state_37706;
(statearr_37734[(23)] = inst_37622__$1);

(statearr_37734[(24)] = inst_37623__$1);

(statearr_37734[(26)] = inst_37625);

(statearr_37734[(25)] = inst_37627__$1);

return statearr_37734;
})();
if(cljs.core.truth_(inst_37628)){
var statearr_37735_37812 = state_37706__$1;
(statearr_37735_37812[(1)] = (23));

} else {
var statearr_37736_37813 = state_37706__$1;
(statearr_37736_37813[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (36))){
var state_37706__$1 = state_37706;
var statearr_37737_37814 = state_37706__$1;
(statearr_37737_37814[(2)] = false);

(statearr_37737_37814[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (41))){
var inst_37681 = (state_37706[(20)]);
var inst_37685 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37686 = cljs.core.map.call(null,inst_37685,inst_37681);
var inst_37687 = cljs.core.pr_str.call(null,inst_37686);
var inst_37688 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37687)].join('');
var inst_37689 = figwheel.client.utils.log.call(null,inst_37688);
var state_37706__$1 = state_37706;
var statearr_37738_37815 = state_37706__$1;
(statearr_37738_37815[(2)] = inst_37689);

(statearr_37738_37815[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (43))){
var inst_37682 = (state_37706[(21)]);
var inst_37692 = (state_37706[(2)]);
var inst_37693 = cljs.core.not_empty.call(null,inst_37682);
var state_37706__$1 = (function (){var statearr_37739 = state_37706;
(statearr_37739[(27)] = inst_37692);

return statearr_37739;
})();
if(cljs.core.truth_(inst_37693)){
var statearr_37740_37816 = state_37706__$1;
(statearr_37740_37816[(1)] = (44));

} else {
var statearr_37741_37817 = state_37706__$1;
(statearr_37741_37817[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (29))){
var inst_37622 = (state_37706[(23)]);
var inst_37659 = (state_37706[(16)]);
var inst_37623 = (state_37706[(24)]);
var inst_37625 = (state_37706[(26)]);
var inst_37627 = (state_37706[(25)]);
var inst_37619 = (state_37706[(19)]);
var inst_37655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37658 = (function (){var all_files = inst_37619;
var res_SINGLEQUOTE_ = inst_37622;
var res = inst_37623;
var files_not_loaded = inst_37625;
var dependencies_that_loaded = inst_37627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37659,inst_37623,inst_37625,inst_37627,inst_37619,inst_37655,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37657){
var map__37742 = p__37657;
var map__37742__$1 = ((((!((map__37742 == null)))?((((map__37742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37742):map__37742);
var namespace = cljs.core.get.call(null,map__37742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37659,inst_37623,inst_37625,inst_37627,inst_37619,inst_37655,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37659__$1 = cljs.core.group_by.call(null,inst_37658,inst_37625);
var inst_37661 = (inst_37659__$1 == null);
var inst_37662 = cljs.core.not.call(null,inst_37661);
var state_37706__$1 = (function (){var statearr_37744 = state_37706;
(statearr_37744[(16)] = inst_37659__$1);

(statearr_37744[(28)] = inst_37655);

return statearr_37744;
})();
if(inst_37662){
var statearr_37745_37818 = state_37706__$1;
(statearr_37745_37818[(1)] = (32));

} else {
var statearr_37746_37819 = state_37706__$1;
(statearr_37746_37819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (44))){
var inst_37682 = (state_37706[(21)]);
var inst_37695 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37682);
var inst_37696 = cljs.core.pr_str.call(null,inst_37695);
var inst_37697 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37696)].join('');
var inst_37698 = figwheel.client.utils.log.call(null,inst_37697);
var state_37706__$1 = state_37706;
var statearr_37747_37820 = state_37706__$1;
(statearr_37747_37820[(2)] = inst_37698);

(statearr_37747_37820[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (6))){
var inst_37600 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37748_37821 = state_37706__$1;
(statearr_37748_37821[(2)] = inst_37600);

(statearr_37748_37821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (28))){
var inst_37625 = (state_37706[(26)]);
var inst_37652 = (state_37706[(2)]);
var inst_37653 = cljs.core.not_empty.call(null,inst_37625);
var state_37706__$1 = (function (){var statearr_37749 = state_37706;
(statearr_37749[(29)] = inst_37652);

return statearr_37749;
})();
if(cljs.core.truth_(inst_37653)){
var statearr_37750_37822 = state_37706__$1;
(statearr_37750_37822[(1)] = (29));

} else {
var statearr_37751_37823 = state_37706__$1;
(statearr_37751_37823[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (25))){
var inst_37623 = (state_37706[(24)]);
var inst_37639 = (state_37706[(2)]);
var inst_37640 = cljs.core.not_empty.call(null,inst_37623);
var state_37706__$1 = (function (){var statearr_37752 = state_37706;
(statearr_37752[(30)] = inst_37639);

return statearr_37752;
})();
if(cljs.core.truth_(inst_37640)){
var statearr_37753_37824 = state_37706__$1;
(statearr_37753_37824[(1)] = (26));

} else {
var statearr_37754_37825 = state_37706__$1;
(statearr_37754_37825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (34))){
var inst_37675 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37675)){
var statearr_37755_37826 = state_37706__$1;
(statearr_37755_37826[(1)] = (38));

} else {
var statearr_37756_37827 = state_37706__$1;
(statearr_37756_37827[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (17))){
var state_37706__$1 = state_37706;
var statearr_37757_37828 = state_37706__$1;
(statearr_37757_37828[(2)] = recompile_dependents);

(statearr_37757_37828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (3))){
var state_37706__$1 = state_37706;
var statearr_37758_37829 = state_37706__$1;
(statearr_37758_37829[(2)] = null);

(statearr_37758_37829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (12))){
var inst_37596 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37759_37830 = state_37706__$1;
(statearr_37759_37830[(2)] = inst_37596);

(statearr_37759_37830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (2))){
var inst_37558 = (state_37706[(13)]);
var inst_37565 = cljs.core.seq.call(null,inst_37558);
var inst_37566 = inst_37565;
var inst_37567 = null;
var inst_37568 = (0);
var inst_37569 = (0);
var state_37706__$1 = (function (){var statearr_37760 = state_37706;
(statearr_37760[(7)] = inst_37567);

(statearr_37760[(8)] = inst_37569);

(statearr_37760[(9)] = inst_37566);

(statearr_37760[(10)] = inst_37568);

return statearr_37760;
})();
var statearr_37761_37831 = state_37706__$1;
(statearr_37761_37831[(2)] = null);

(statearr_37761_37831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (23))){
var inst_37622 = (state_37706[(23)]);
var inst_37623 = (state_37706[(24)]);
var inst_37625 = (state_37706[(26)]);
var inst_37627 = (state_37706[(25)]);
var inst_37619 = (state_37706[(19)]);
var inst_37630 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37632 = (function (){var all_files = inst_37619;
var res_SINGLEQUOTE_ = inst_37622;
var res = inst_37623;
var files_not_loaded = inst_37625;
var dependencies_that_loaded = inst_37627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37623,inst_37625,inst_37627,inst_37619,inst_37630,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37631){
var map__37762 = p__37631;
var map__37762__$1 = ((((!((map__37762 == null)))?((((map__37762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37762):map__37762);
var request_url = cljs.core.get.call(null,map__37762__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37623,inst_37625,inst_37627,inst_37619,inst_37630,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37633 = cljs.core.reverse.call(null,inst_37627);
var inst_37634 = cljs.core.map.call(null,inst_37632,inst_37633);
var inst_37635 = cljs.core.pr_str.call(null,inst_37634);
var inst_37636 = figwheel.client.utils.log.call(null,inst_37635);
var state_37706__$1 = (function (){var statearr_37764 = state_37706;
(statearr_37764[(31)] = inst_37630);

return statearr_37764;
})();
var statearr_37765_37832 = state_37706__$1;
(statearr_37765_37832[(2)] = inst_37636);

(statearr_37765_37832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (35))){
var state_37706__$1 = state_37706;
var statearr_37766_37833 = state_37706__$1;
(statearr_37766_37833[(2)] = true);

(statearr_37766_37833[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (19))){
var inst_37609 = (state_37706[(12)]);
var inst_37615 = figwheel.client.file_reloading.expand_files.call(null,inst_37609);
var state_37706__$1 = state_37706;
var statearr_37767_37834 = state_37706__$1;
(statearr_37767_37834[(2)] = inst_37615);

(statearr_37767_37834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (11))){
var state_37706__$1 = state_37706;
var statearr_37768_37835 = state_37706__$1;
(statearr_37768_37835[(2)] = null);

(statearr_37768_37835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (9))){
var inst_37598 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37769_37836 = state_37706__$1;
(statearr_37769_37836[(2)] = inst_37598);

(statearr_37769_37836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (5))){
var inst_37569 = (state_37706[(8)]);
var inst_37568 = (state_37706[(10)]);
var inst_37571 = (inst_37569 < inst_37568);
var inst_37572 = inst_37571;
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37572)){
var statearr_37770_37837 = state_37706__$1;
(statearr_37770_37837[(1)] = (7));

} else {
var statearr_37771_37838 = state_37706__$1;
(statearr_37771_37838[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (14))){
var inst_37579 = (state_37706[(22)]);
var inst_37588 = cljs.core.first.call(null,inst_37579);
var inst_37589 = figwheel.client.file_reloading.eval_body.call(null,inst_37588,opts);
var inst_37590 = cljs.core.next.call(null,inst_37579);
var inst_37566 = inst_37590;
var inst_37567 = null;
var inst_37568 = (0);
var inst_37569 = (0);
var state_37706__$1 = (function (){var statearr_37772 = state_37706;
(statearr_37772[(7)] = inst_37567);

(statearr_37772[(8)] = inst_37569);

(statearr_37772[(9)] = inst_37566);

(statearr_37772[(32)] = inst_37589);

(statearr_37772[(10)] = inst_37568);

return statearr_37772;
})();
var statearr_37773_37839 = state_37706__$1;
(statearr_37773_37839[(2)] = null);

(statearr_37773_37839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (45))){
var state_37706__$1 = state_37706;
var statearr_37774_37840 = state_37706__$1;
(statearr_37774_37840[(2)] = null);

(statearr_37774_37840[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (26))){
var inst_37622 = (state_37706[(23)]);
var inst_37623 = (state_37706[(24)]);
var inst_37625 = (state_37706[(26)]);
var inst_37627 = (state_37706[(25)]);
var inst_37619 = (state_37706[(19)]);
var inst_37642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37644 = (function (){var all_files = inst_37619;
var res_SINGLEQUOTE_ = inst_37622;
var res = inst_37623;
var files_not_loaded = inst_37625;
var dependencies_that_loaded = inst_37627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37623,inst_37625,inst_37627,inst_37619,inst_37642,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37643){
var map__37775 = p__37643;
var map__37775__$1 = ((((!((map__37775 == null)))?((((map__37775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37775):map__37775);
var namespace = cljs.core.get.call(null,map__37775__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37623,inst_37625,inst_37627,inst_37619,inst_37642,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37645 = cljs.core.map.call(null,inst_37644,inst_37623);
var inst_37646 = cljs.core.pr_str.call(null,inst_37645);
var inst_37647 = figwheel.client.utils.log.call(null,inst_37646);
var inst_37648 = (function (){var all_files = inst_37619;
var res_SINGLEQUOTE_ = inst_37622;
var res = inst_37623;
var files_not_loaded = inst_37625;
var dependencies_that_loaded = inst_37627;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37623,inst_37625,inst_37627,inst_37619,inst_37642,inst_37644,inst_37645,inst_37646,inst_37647,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37622,inst_37623,inst_37625,inst_37627,inst_37619,inst_37642,inst_37644,inst_37645,inst_37646,inst_37647,state_val_37707,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37649 = setTimeout(inst_37648,(10));
var state_37706__$1 = (function (){var statearr_37777 = state_37706;
(statearr_37777[(33)] = inst_37642);

(statearr_37777[(34)] = inst_37647);

return statearr_37777;
})();
var statearr_37778_37841 = state_37706__$1;
(statearr_37778_37841[(2)] = inst_37649);

(statearr_37778_37841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (16))){
var state_37706__$1 = state_37706;
var statearr_37779_37842 = state_37706__$1;
(statearr_37779_37842[(2)] = reload_dependents);

(statearr_37779_37842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (38))){
var inst_37659 = (state_37706[(16)]);
var inst_37677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37659);
var state_37706__$1 = state_37706;
var statearr_37780_37843 = state_37706__$1;
(statearr_37780_37843[(2)] = inst_37677);

(statearr_37780_37843[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (30))){
var state_37706__$1 = state_37706;
var statearr_37781_37844 = state_37706__$1;
(statearr_37781_37844[(2)] = null);

(statearr_37781_37844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (10))){
var inst_37579 = (state_37706[(22)]);
var inst_37581 = cljs.core.chunked_seq_QMARK_.call(null,inst_37579);
var state_37706__$1 = state_37706;
if(inst_37581){
var statearr_37782_37845 = state_37706__$1;
(statearr_37782_37845[(1)] = (13));

} else {
var statearr_37783_37846 = state_37706__$1;
(statearr_37783_37846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (18))){
var inst_37613 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37613)){
var statearr_37784_37847 = state_37706__$1;
(statearr_37784_37847[(1)] = (19));

} else {
var statearr_37785_37848 = state_37706__$1;
(statearr_37785_37848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (42))){
var state_37706__$1 = state_37706;
var statearr_37786_37849 = state_37706__$1;
(statearr_37786_37849[(2)] = null);

(statearr_37786_37849[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (37))){
var inst_37672 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37787_37850 = state_37706__$1;
(statearr_37787_37850[(2)] = inst_37672);

(statearr_37787_37850[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (8))){
var inst_37579 = (state_37706[(22)]);
var inst_37566 = (state_37706[(9)]);
var inst_37579__$1 = cljs.core.seq.call(null,inst_37566);
var state_37706__$1 = (function (){var statearr_37788 = state_37706;
(statearr_37788[(22)] = inst_37579__$1);

return statearr_37788;
})();
if(inst_37579__$1){
var statearr_37789_37851 = state_37706__$1;
(statearr_37789_37851[(1)] = (10));

} else {
var statearr_37790_37852 = state_37706__$1;
(statearr_37790_37852[(1)] = (11));

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
});})(c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33991__auto__,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto____0 = (function (){
var statearr_37791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37791[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto__);

(statearr_37791[(1)] = (1));

return statearr_37791;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto____1 = (function (state_37706){
while(true){
var ret_value__33993__auto__ = (function (){try{while(true){
var result__33994__auto__ = switch__33991__auto__.call(null,state_37706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33994__auto__;
}
break;
}
}catch (e37792){if((e37792 instanceof Object)){
var ex__33995__auto__ = e37792;
var statearr_37793_37853 = state_37706;
(statearr_37793_37853[(5)] = ex__33995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37854 = state_37706;
state_37706 = G__37854;
continue;
} else {
return ret_value__33993__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto__ = function(state_37706){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto____1.call(this,state_37706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33992__auto__;
})()
;})(switch__33991__auto__,c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34081__auto__ = (function (){var statearr_37794 = f__34080__auto__.call(null);
(statearr_37794[(6)] = c__34079__auto__);

return statearr_37794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34081__auto__);
});})(c__34079__auto__,map__37551,map__37551__$1,opts,before_jsload,on_jsload,reload_dependents,map__37552,map__37552__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34079__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37857,link){
var map__37858 = p__37857;
var map__37858__$1 = ((((!((map__37858 == null)))?((((map__37858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37858):map__37858);
var file = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37858,map__37858__$1,file){
return (function (p1__37855_SHARP_,p2__37856_SHARP_){
if(cljs.core._EQ_.call(null,p1__37855_SHARP_,p2__37856_SHARP_)){
return p1__37855_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37858,map__37858__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37861){
var map__37862 = p__37861;
var map__37862__$1 = ((((!((map__37862 == null)))?((((map__37862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37862):map__37862);
var match_length = cljs.core.get.call(null,map__37862__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37862__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37860_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37860_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37864_SHARP_,p2__37865_SHARP_){
return cljs.core.assoc.call(null,p1__37864_SHARP_,cljs.core.get.call(null,p2__37865_SHARP_,key),p2__37865_SHARP_);
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
var loaded_f_datas_37866 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37866);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37866);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37867,p__37868){
var map__37869 = p__37867;
var map__37869__$1 = ((((!((map__37869 == null)))?((((map__37869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37869):map__37869);
var on_cssload = cljs.core.get.call(null,map__37869__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37870 = p__37868;
var map__37870__$1 = ((((!((map__37870 == null)))?((((map__37870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37870):map__37870);
var files_msg = map__37870__$1;
var files = cljs.core.get.call(null,map__37870__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1518440264391
