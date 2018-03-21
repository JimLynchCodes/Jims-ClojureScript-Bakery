// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.utils.bulk_item_pricer_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('bakery_app.utils.bulk_item_pricer');
bakery_app.utils.bulk_item_pricer_test.singleItem = (function bakery_app$utils$bulk_item_pricer_test$singleItem(){
return cljs.test.test_var.call(null,bakery_app.utils.bulk_item_pricer_test.singleItem.cljs$lang$var);
});
bakery_app.utils.bulk_item_pricer_test.singleItem.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"should multiply single item price by quantity");

try{try{var values__12675__auto__ = cljs.core._conj.call(null,(function (){var x__8449__auto__ = bakery_app.utils.bulk_item_pricer.get_price.call(null,(1),(1),(5),(5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),(1));
var result__12676__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12675__auto__);
if(cljs.core.truth_(result__12676__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(1),(1),(5),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12675__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(1),(1),(5),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12675__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12676__auto__;
}catch (e12966){var t__12720__auto__ = e12966;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(1),(1),(5),(5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12720__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

bakery_app.utils.bulk_item_pricer_test.singleItem.cljs$lang$var = new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.singleItem;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","singleItem","bakery-app.utils.bulk-item-pricer-test/singleItem",678699084,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"singleItem","singleItem",-323772468,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",20,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.singleItem)?bakery_app.utils.bulk_item_pricer_test.singleItem.cljs$lang$test:null)]));
bakery_app.utils.bulk_item_pricer_test.oneBulkCase = (function bakery_app$utils$bulk_item_pricer_test$oneBulkCase(){
return cljs.test.test_var.call(null,bakery_app.utils.bulk_item_pricer_test.oneBulkCase.cljs$lang$var);
});
bakery_app.utils.bulk_item_pricer_test.oneBulkCase.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"should use bulk price");

try{try{var values__12675__auto__ = cljs.core._conj.call(null,(function (){var x__8449__auto__ = bakery_app.utils.bulk_item_pricer.get_price.call(null,(5),(3),(5),(10));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),(10));
var result__12676__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12675__auto__);
if(cljs.core.truth_(result__12676__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(5),(3),(5),(10))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12675__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(5),(3),(5),(10))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12675__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12676__auto__;
}catch (e12967){var t__12720__auto__ = e12967;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(10),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(5),(3),(5),(10))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12720__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

bakery_app.utils.bulk_item_pricer_test.oneBulkCase.cljs$lang$var = new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.oneBulkCase;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","oneBulkCase","bakery-app.utils.bulk-item-pricer-test/oneBulkCase",-1203596312,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"oneBulkCase","oneBulkCase",2089291368,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.oneBulkCase)?bakery_app.utils.bulk_item_pricer_test.oneBulkCase.cljs$lang$test:null)]));
bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle = (function bakery_app$utils$bulk_item_pricer_test$twoBulkAndThreeSingle(){
return cljs.test.test_var.call(null,bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle.cljs$lang$var);
});
bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"should calculate correctly for two bulk cases and three single items.");

try{try{var values__12675__auto__ = cljs.core._conj.call(null,(function (){var x__8449__auto__ = bakery_app.utils.bulk_item_pricer.get_price.call(null,(13),(1),(5),(2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),(7));
var result__12676__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12675__auto__);
if(cljs.core.truth_(result__12676__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(7),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(13),(1),(5),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12675__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(7),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(13),(1),(5),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12675__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12676__auto__;
}catch (e12968){var t__12720__auto__ = e12968;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(7),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(13),(1),(5),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12720__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle.cljs$lang$var = new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","twoBulkAndThreeSingle","bakery-app.utils.bulk-item-pricer-test/twoBulkAndThreeSingle",-1572748164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"twoBulkAndThreeSingle","twoBulkAndThreeSingle",-383893252,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",31,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle)?bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle.cljs$lang$test:null)]));
bakery_app.utils.bulk_item_pricer_test.nilBulk = (function bakery_app$utils$bulk_item_pricer_test$nilBulk(){
return cljs.test.test_var.call(null,bakery_app.utils.bulk_item_pricer_test.nilBulk.cljs$lang$var);
});
bakery_app.utils.bulk_item_pricer_test.nilBulk.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"should calculate correctly for nil bulk values.");

try{try{var values__12675__auto__ = cljs.core._conj.call(null,(function (){var x__8449__auto__ = bakery_app.utils.bulk_item_pricer.get_price.call(null,(100),(1),null,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),(100));
var result__12676__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12675__auto__);
if(cljs.core.truth_(result__12676__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(100),(1),null,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12675__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(100),(1),null,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12675__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12676__auto__;
}catch (e12969){var t__12720__auto__ = e12969;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(100),cljs.core.list(new cljs.core.Symbol("bulk-item-pricer","get-price","bulk-item-pricer/get-price",-423718533,null),(100),(1),null,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12720__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

bakery_app.utils.bulk_item_pricer_test.nilBulk.cljs$lang$var = new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.nilBulk;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","nilBulk","bakery-app.utils.bulk-item-pricer-test/nilBulk",-1679897350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"nilBulk","nilBulk",-426227590,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",17,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.nilBulk)?bakery_app.utils.bulk_item_pricer_test.nilBulk.cljs$lang$test:null)]));

//# sourceMappingURL=bulk_item_pricer_test.js.map
