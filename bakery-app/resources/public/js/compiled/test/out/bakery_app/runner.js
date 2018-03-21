// Compiled by ClojureScript 1.9.908 {}
goog.provide('bakery_app.runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('bakery_app.core_test');
goog.require('bakery_app.utils.bulk_item_pricer_test');
doo.runner.set_entry_point_BANG_.call(null,(cljs.core.truth_(doo.runner.karma_QMARK_.call(null))?(function (tc__12993__auto__){
jx.reporter.karma.start.call(null,tc__12993__auto__,(5));

return cljs.test.run_block.call(null,(function (){var env13001 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary13002 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13001,summary13002){
return (function (){
cljs.test.set_env_BANG_.call(null,env13001);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__12786__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13001,summary13002){
return (function (){
if((env__12786__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__12786__auto__,env13001,summary13002))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bakery_app.core_test.fake_test;},new cljs.core.Symbol("bakery-app.core-test","fake-test","bakery-app.core-test/fake-test",-714176980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Symbol(null,"fake-test","fake-test",2147428714,null),"/Users/jameslynch/Git-Projects/Jims-ClojureScript-Bakery/bakery-app/test/cljs/bakery_app/core_test.cljs",19,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.core_test.fake_test)?bakery_app.core_test.fake_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13001,summary13002){
return (function (){
if((env__12786__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__12786__auto__,env13001,summary13002))
], null));
})());
});})(env13001,summary13002))
,((function (env13001,summary13002){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13001,summary13002))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13001,summary13002){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13002,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13002),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13001,summary13002))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13001,summary13002){
return (function (){
cljs.test.set_env_BANG_.call(null,env13001);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__12786__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13001,summary13002){
return (function (){
if((env__12786__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__12786__auto__,env13001,summary13002))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.singleItem;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","singleItem","bakery-app.utils.bulk-item-pricer-test/singleItem",678699084,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"singleItem","singleItem",-323772468,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",20,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.singleItem)?bakery_app.utils.bulk_item_pricer_test.singleItem.cljs$lang$test:null)])),new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.oneBulkCase;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","oneBulkCase","bakery-app.utils.bulk-item-pricer-test/oneBulkCase",-1203596312,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"oneBulkCase","oneBulkCase",2089291368,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.oneBulkCase)?bakery_app.utils.bulk_item_pricer_test.oneBulkCase.cljs$lang$test:null)])),new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","twoBulkAndThreeSingle","bakery-app.utils.bulk-item-pricer-test/twoBulkAndThreeSingle",-1572748164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"twoBulkAndThreeSingle","twoBulkAndThreeSingle",-383893252,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",31,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle)?bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle.cljs$lang$test:null)])),new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.nilBulk;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","nilBulk","bakery-app.utils.bulk-item-pricer-test/nilBulk",-1679897350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"nilBulk","nilBulk",-426227590,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",17,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.nilBulk)?bakery_app.utils.bulk_item_pricer_test.nilBulk.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13001,summary13002){
return (function (){
if((env__12786__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__12786__auto__,env13001,summary13002))
], null));
})());
});})(env13001,summary13002))
,((function (env13001,summary13002){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13001,summary13002))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13001,summary13002){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13002,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13002),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13001,summary13002))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13001,summary13002){
return (function (){
cljs.test.set_env_BANG_.call(null,env13001);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13002));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13002),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13001,summary13002))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env13003 = cljs.test.empty_env.call(null);
var summary13004 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13003,summary13004){
return (function (){
cljs.test.set_env_BANG_.call(null,env13003);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__12786__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13003,summary13004){
return (function (){
if((env__12786__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__12786__auto__,env13003,summary13004))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bakery_app.core_test.fake_test;},new cljs.core.Symbol("bakery-app.core-test","fake-test","bakery-app.core-test/fake-test",-714176980,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Symbol(null,"fake-test","fake-test",2147428714,null),"/Users/jameslynch/Git-Projects/Jims-ClojureScript-Bakery/bakery-app/test/cljs/bakery_app/core_test.cljs",19,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.core_test.fake_test)?bakery_app.core_test.fake_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13003,summary13004){
return (function (){
if((env__12786__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__12786__auto__,env13003,summary13004))
], null));
})());
});})(env13003,summary13004))
,((function (env13003,summary13004){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.core-test","bakery-app.core-test",53170217,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13003,summary13004))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13003,summary13004){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13004,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13004),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13003,summary13004))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13003,summary13004){
return (function (){
cljs.test.set_env_BANG_.call(null,env13003);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__12786__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13003,summary13004){
return (function (){
if((env__12786__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__12786__auto__,env13003,summary13004))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.singleItem;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","singleItem","bakery-app.utils.bulk-item-pricer-test/singleItem",678699084,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"singleItem","singleItem",-323772468,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",20,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.singleItem)?bakery_app.utils.bulk_item_pricer_test.singleItem.cljs$lang$test:null)])),new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.oneBulkCase;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","oneBulkCase","bakery-app.utils.bulk-item-pricer-test/oneBulkCase",-1203596312,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"oneBulkCase","oneBulkCase",2089291368,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.oneBulkCase)?bakery_app.utils.bulk_item_pricer_test.oneBulkCase.cljs$lang$test:null)])),new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","twoBulkAndThreeSingle","bakery-app.utils.bulk-item-pricer-test/twoBulkAndThreeSingle",-1572748164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"twoBulkAndThreeSingle","twoBulkAndThreeSingle",-383893252,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",31,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle)?bakery_app.utils.bulk_item_pricer_test.twoBulkAndThreeSingle.cljs$lang$test:null)])),new cljs.core.Var(function(){return bakery_app.utils.bulk_item_pricer_test.nilBulk;},new cljs.core.Symbol("bakery-app.utils.bulk-item-pricer-test","nilBulk","bakery-app.utils.bulk-item-pricer-test/nilBulk",-1679897350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Symbol(null,"nilBulk","nilBulk",-426227590,null),"test/cljs/bakery_app/bulk-item-pricer-test.cljs",17,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(bakery_app.utils.bulk_item_pricer_test.nilBulk)?bakery_app.utils.bulk_item_pricer_test.nilBulk.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__12786__auto__,env13003,summary13004){
return (function (){
if((env__12786__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__12786__auto__,env13003,summary13004))
], null));
})());
});})(env13003,summary13004))
,((function (env13003,summary13004){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"bakery-app.utils.bulk-item-pricer-test","bakery-app.utils.bulk-item-pricer-test",-713684822,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13003,summary13004))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13003,summary13004){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13004,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13004),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13003,summary13004))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13003,summary13004){
return (function (){
cljs.test.set_env_BANG_.call(null,env13003);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13004));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13003,summary13004))
], null));
})());
})));

//# sourceMappingURL=runner.js.map
