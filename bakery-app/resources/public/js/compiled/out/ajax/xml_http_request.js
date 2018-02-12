// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31914,handler){
var map__31915 = p__31914;
var map__31915__$1 = ((((!((map__31915 == null)))?((((map__31915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31915):map__31915);
var uri = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31915,map__31915__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31913_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31913_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31915,map__31915__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31927 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31927)){
var response_type_31928 = temp__4657__auto___31927;
this$__$1.responseType = cljs.core.name.call(null,response_type_31928);
} else {
}

var seq__31917_31929 = cljs.core.seq.call(null,headers);
var chunk__31918_31930 = null;
var count__31919_31931 = (0);
var i__31920_31932 = (0);
while(true){
if((i__31920_31932 < count__31919_31931)){
var vec__31921_31933 = cljs.core._nth.call(null,chunk__31918_31930,i__31920_31932);
var k_31934 = cljs.core.nth.call(null,vec__31921_31933,(0),null);
var v_31935 = cljs.core.nth.call(null,vec__31921_31933,(1),null);
this$__$1.setRequestHeader(k_31934,v_31935);

var G__31936 = seq__31917_31929;
var G__31937 = chunk__31918_31930;
var G__31938 = count__31919_31931;
var G__31939 = (i__31920_31932 + (1));
seq__31917_31929 = G__31936;
chunk__31918_31930 = G__31937;
count__31919_31931 = G__31938;
i__31920_31932 = G__31939;
continue;
} else {
var temp__4657__auto___31940 = cljs.core.seq.call(null,seq__31917_31929);
if(temp__4657__auto___31940){
var seq__31917_31941__$1 = temp__4657__auto___31940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31917_31941__$1)){
var c__29262__auto___31942 = cljs.core.chunk_first.call(null,seq__31917_31941__$1);
var G__31943 = cljs.core.chunk_rest.call(null,seq__31917_31941__$1);
var G__31944 = c__29262__auto___31942;
var G__31945 = cljs.core.count.call(null,c__29262__auto___31942);
var G__31946 = (0);
seq__31917_31929 = G__31943;
chunk__31918_31930 = G__31944;
count__31919_31931 = G__31945;
i__31920_31932 = G__31946;
continue;
} else {
var vec__31924_31947 = cljs.core.first.call(null,seq__31917_31941__$1);
var k_31948 = cljs.core.nth.call(null,vec__31924_31947,(0),null);
var v_31949 = cljs.core.nth.call(null,vec__31924_31947,(1),null);
this$__$1.setRequestHeader(k_31948,v_31949);

var G__31950 = cljs.core.next.call(null,seq__31917_31941__$1);
var G__31951 = null;
var G__31952 = (0);
var G__31953 = (0);
seq__31917_31929 = G__31950;
chunk__31918_31930 = G__31951;
count__31919_31931 = G__31952;
i__31920_31932 = G__31953;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28423__auto__ = body;
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1518440253801
