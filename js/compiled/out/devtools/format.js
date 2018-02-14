// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__29106__auto__ = (((value == null))?null:value);
var m__29107__auto__ = (devtools.format._header[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,value);
} else {
var m__29107__auto____$1 = (devtools.format._header["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__29106__auto__ = (((value == null))?null:value);
var m__29107__auto__ = (devtools.format._has_body[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,value);
} else {
var m__29107__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__29106__auto__ = (((value == null))?null:value);
var m__29107__auto__ = (devtools.format._body[goog.typeOf(x__29106__auto__)]);
if(!((m__29107__auto__ == null))){
return m__29107__auto__.call(null,value);
} else {
var m__29107__auto____$1 = (devtools.format._body["_"]);
if(!((m__29107__auto____$1 == null))){
return m__29107__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41912 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41912["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41913 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41913["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41914 = temp__4655__auto____$2;
return (o41914["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41915 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41915["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41916 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41916["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41917 = temp__4655__auto____$2;
return (o41917["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41918 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41918["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41919 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41919["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41920 = temp__4655__auto____$2;
return (o41920["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41921 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41921["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41922 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41922["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41923 = temp__4655__auto____$2;
return (o41923["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41924 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41924["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41925 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41925["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41926 = temp__4655__auto____$2;
return (o41926["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41927 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41927["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41928 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41928["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41929 = temp__4655__auto____$2;
return (o41929["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o41930 = temp__4655__auto__;
var temp__4655__auto____$1 = (o41930["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o41931 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o41931["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o41932 = temp__4655__auto____$2;
return (o41932["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41934 = arguments.length;
var i__29593__auto___41935 = (0);
while(true){
if((i__29593__auto___41935 < len__29592__auto___41934)){
args__29599__auto__.push((arguments[i__29593__auto___41935]));

var G__41936 = (i__29593__auto___41935 + (1));
i__29593__auto___41935 = G__41936;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq41933){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41933));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41938 = arguments.length;
var i__29593__auto___41939 = (0);
while(true){
if((i__29593__auto___41939 < len__29592__auto___41938)){
args__29599__auto__.push((arguments[i__29593__auto___41939]));

var G__41940 = (i__29593__auto___41939 + (1));
i__29593__auto___41939 = G__41940;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq41937){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41937));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41942 = arguments.length;
var i__29593__auto___41943 = (0);
while(true){
if((i__29593__auto___41943 < len__29592__auto___41942)){
args__29599__auto__.push((arguments[i__29593__auto___41943]));

var G__41944 = (i__29593__auto___41943 + (1));
i__29593__auto___41943 = G__41944;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq41941){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41941));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41946 = arguments.length;
var i__29593__auto___41947 = (0);
while(true){
if((i__29593__auto___41947 < len__29592__auto___41946)){
args__29599__auto__.push((arguments[i__29593__auto___41947]));

var G__41948 = (i__29593__auto___41947 + (1));
i__29593__auto___41947 = G__41948;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41945){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41945));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41950 = arguments.length;
var i__29593__auto___41951 = (0);
while(true){
if((i__29593__auto___41951 < len__29592__auto___41950)){
args__29599__auto__.push((arguments[i__29593__auto___41951]));

var G__41952 = (i__29593__auto___41951 + (1));
i__29593__auto___41951 = G__41952;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq41949){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41949));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41954 = arguments.length;
var i__29593__auto___41955 = (0);
while(true){
if((i__29593__auto___41955 < len__29592__auto___41954)){
args__29599__auto__.push((arguments[i__29593__auto___41955]));

var G__41956 = (i__29593__auto___41955 + (1));
i__29593__auto___41955 = G__41956;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq41953){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41953));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41958 = arguments.length;
var i__29593__auto___41959 = (0);
while(true){
if((i__29593__auto___41959 < len__29592__auto___41958)){
args__29599__auto__.push((arguments[i__29593__auto___41959]));

var G__41960 = (i__29593__auto___41959 + (1));
i__29593__auto___41959 = G__41960;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq41957){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41957));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41968 = arguments.length;
var i__29593__auto___41969 = (0);
while(true){
if((i__29593__auto___41969 < len__29592__auto___41968)){
args__29599__auto__.push((arguments[i__29593__auto___41969]));

var G__41970 = (i__29593__auto___41969 + (1));
i__29593__auto___41969 = G__41970;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41964){
var vec__41965 = p__41964;
var state_override = cljs.core.nth.call(null,vec__41965,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41965,state_override){
return (function (p1__41961_SHARP_){
return cljs.core.merge.call(null,p1__41961_SHARP_,state_override);
});})(vec__41965,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq41962){
var G__41963 = cljs.core.first.call(null,seq41962);
var seq41962__$1 = cljs.core.next.call(null,seq41962);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__41963,seq41962__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41972 = arguments.length;
var i__29593__auto___41973 = (0);
while(true){
if((i__29593__auto___41973 < len__29592__auto___41972)){
args__29599__auto__.push((arguments[i__29593__auto___41973]));

var G__41974 = (i__29593__auto___41973 + (1));
i__29593__auto___41973 = G__41974;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((0) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29600__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq41971){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41971));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29599__auto__ = [];
var len__29592__auto___41977 = arguments.length;
var i__29593__auto___41978 = (0);
while(true){
if((i__29593__auto___41978 < len__29592__auto___41977)){
args__29599__auto__.push((arguments[i__29593__auto___41978]));

var G__41979 = (i__29593__auto___41978 + (1));
i__29593__auto___41978 = G__41979;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41975){
var G__41976 = cljs.core.first.call(null,seq41975);
var seq41975__$1 = cljs.core.next.call(null,seq41975);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__41976,seq41975__$1);
});


//# sourceMappingURL=format.js.map?rel=1518582102044
