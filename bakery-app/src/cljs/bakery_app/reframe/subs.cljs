(ns bakery-app.reframe.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
  ::items
  (fn [db]
    (:items db)))

(defn combinePricesOfSelected [acc item]
  (+ acc (get (nth item 1) :priceOfQuantitySelected)))

(re-frame/reg-sub
  ::totalPrice
  (fn [db]
    (reduce combinePricesOfSelected 0 (:items db))))
