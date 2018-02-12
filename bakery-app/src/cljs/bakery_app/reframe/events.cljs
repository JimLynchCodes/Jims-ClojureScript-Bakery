(ns bakery-app.reframe.events
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.db :as db]
            [bakery-app.utils.bulk-item-pricer :as bulk-item-pricer]
            ))

(re-frame/reg-event-db
  ::fuck
  (fn  [_ _]
    db/default-db))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))


;(re-frame/reg-event-db
;  ::load-product-list
;  (fn  [_ _]
;    db/default-db))

(re-frame/reg-event-db
  ::change-item-quantity
  (fn
    [db [f g]]



    (println "db is " db)
    (println "g is " g)
    (println "f is " f)
    (println "in event " (get g :itemName))
    (println "in event " (get g :itemName))


;    (assoc-in db :items { :muffin {:quantity -1}})

;    {:muffin {:quantity -1 :flavor 'blueberry}} [:muffin :quantity] 3)
;  {:muffin {:quantity 3, :flavor blueberry}}

;  (assoc-in {:muffin {:quantity -1 :flavor "blueberry"}})

    (let [newQuantity
      (if (= 1 (:amountToChange g))
                    (inc (get-in db [:items (get g :itemName) :quantity]))
                    (dec (get-in db [:items (get g :itemName) :quantity])))
          ]

    (assoc-in

      (if (= 1 (:amountToChange g))
          (assoc-in db [:items (get g :itemName) :quantity]
                    newQuantity)
          (assoc-in db [:items (get g :itemName) :quantity]
                    newQuantity))

      [:items (get g :itemName) :priceOfQuantitySelected ]
      (bulk-item-pricer/get-price
        newQuantity
        (get-in db [:items (get g :itemName) :price])
        (get-in db [:items (get g :itemName) :bulkPricing :amount])
        (get-in db [:items (get g :itemName) :bulkPricing :totalPrice])
      ))
    )






      )
  )



(re-frame/reg-event-db
  ::initialize-shopping-cart
  (fn
    [db []]

    (println "init shopping cart!")
    ;; kick off the GET, making sure to supply a callback for success and failure
    ;    (GET
    ;      "./resources/public/products-data.json"
    ;      {:handler      #(re-frame/dispatch [:process-response %1])
    ;       ;; further dispatch !!
    ;       :error-handler #(re-frame/dispatch [:bad-response %1])})
    ;; further dispatch !!


    ;    (node-slurp/node-slurp (js->clj "./resources/public/products-data.json")


    ;; update a flag in `app-db` ... presumably to trigger UI changes

    (assoc db :shoppingCart {
                              :cartItems []

                              :totalPrice 0

;                              :muffin {:id 1
;                               :name "Muffin"
;                               :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
;                               :price 2.00
;                               :bulkPricing {:amount 4 :totalPrice 7.00}
;                               :quantitySelected 0
;                               :priceOfQuantitySelected 0}
;
;                      :brownie {:id 1
;                                :name "Brownie"
;                                :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
;                                :price 2.00
;                                :bulkPricing {:amount 4 :totalPrice 7.00}
;                                :quantitySelected 0
;                                :priceOfQuantitySelected 0}
                      })))