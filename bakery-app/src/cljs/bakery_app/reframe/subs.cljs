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

(re-frame/reg-sub
  ::cartItems
  (fn [db]
    (:cartItems (:shoppingCart db))))


(defn ya [acc item]
  (println "ARFFF")
  (println "item " item)
  (println "acc " acc)
  (println "item keyword " (nth item 0))
  (println "item obj " (nth item 1))
  (println "price of quantity selected " (get (nth item 1) :priceOfQuantitySelected))

  (println "END ARFFF")
;  (+ (get-in item [:]) acc)
  (+ acc (get (nth item 1) :priceOfQuantitySelected))
  )

(re-frame/reg-sub
  ::totalPrice
  (fn [db]


    (reduce
     ya
      0 (:items db))
;
    ))
;    (for [item (:shoppingCart db)]
;      ^{:key item}
;
;      (println "in sub!" item)

;      ()
;      )))

