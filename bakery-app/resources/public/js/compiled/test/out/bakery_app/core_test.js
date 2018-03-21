// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('bakery_app.core');
bakery_app.core_test.fake_test = (function bakery_app$core_test$fake_test(){
return cljs.test.test_var.call(null,bakery_app.core_test.fake_test.cljs$lang$var);
});
bakery_app.core_test.fake_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"fake description");

try{try{var values__12675__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__12676__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12675__auto__);
if(cljs.core.truth_(result__12676__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12675__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12675__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12676__auto__;
}catch (e12963){var t__12720__auto__ = e12963;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__12720__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

bakery_app.core_test.fake_test.cljs$lang$var = new cljs.core.Var(function(){return bakery_app.core_test.fake_test;},new cljs.core.Symbol("bakery-app.core-test","fake-test","bakery-app.core-test/fake-test",-714176980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Symbol(null,"fake-test","fake-test",2147428714,null),"/Users/jameslynch/Git-Projects/Jims-ClojureScript-Bakery/bakery-app/test/cljs/bakery_app/core_test.cljs",19,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.core_test.fake_test)?bakery_app.core_test.fake_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map
