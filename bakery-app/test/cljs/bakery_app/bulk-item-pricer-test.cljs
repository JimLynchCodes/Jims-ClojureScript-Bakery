(ns bakery-app.utils.bulk-item-pricer-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [bakery-app.utils.bulk-item-pricer :as bulk-item-pricer]))

(deftest singleItem
  (testing "should multiply single item price by quantity"
           (is (= 1 (bulk-item-pricer/get-price 1 1 5 5)))))

(deftest oneBulkCase
  (testing "should use bulk price"
           (is (= 10 (bulk-item-pricer/get-price 5 3 5 10)))))

(deftest twoBulkAndThreeSingle
  (testing "should calculate correctly for two bulk cases and three single items."
           (is (= 7 (bulk-item-pricer/get-price  13 1 5 2)))))

(deftest nilBulk
  (testing "should calculate correctly for nil bulk values."
           (is (= 100 (bulk-item-pricer/get-price 100 1 nil nil)))))
