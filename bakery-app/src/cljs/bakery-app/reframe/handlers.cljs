(ns bakery-app.reframe.handlers
  (:require [ajax.core :refer [GET POST]]
            [re-frame.core :as re-frame]
            [bakery-app.reframe.db :as db]
;            [bakery-app.utils.node-slurp :as node-slurp]


            ))

(re-frame/register-handler
  ::load-product-list
  (fn
    [db []]

    (println "getting data!")
    ;; kick off the GET, making sure to supply a callback for success and failure
;    (GET
;      "./resources/public/products-data.json"
;      {:handler      #(re-frame/dispatch [:process-response %1])
;       ;; further dispatch !!
;       :error-handler #(re-frame/dispatch [:bad-response %1])})
    ;; further dispatch !!


;    (node-slurp/node-slurp (js->clj "./resources/public/products-data.json")


    ;; update a flag in `app-db` ... presumably to trigger UI changes


    (assoc db :items {
                :brownie {
                  :id 1
                  :name "Brownie"
                  :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
                  :price 2.00
                  :bulkPricing {:amount 4 :totalPrice 7.00}
                  :quantity 0
                  :priceOfQuantitySelected 0}
                :keyLimeCheesecake {
                  :id 1
                  :name "Key Lime Cheesecake"
                  :imageURL "http://1.bp.blogspot.com/-7we9Z0C_fpI/T90JXcg3YsI/AAAAAAAABn4/EN7u2vMuRug/s1600/key+lime+cheesecake+slice+in+front.jpg"
                  :price 8.00
                  :bulkPricing nil
                  :quantity 0
                  :priceOfQuantitySelected 0}
                :cookie {
                  :id 1
                  :name "cookie"
                  :imageURL "http://www.mayheminthekitchen.com/wp-content/uploads/2015/05/chocolate-cookie-square.jpg"
                  :price 1.25
                  :bulkPricing {:amount 6 :totalPrice 6.00}
                  :quantity 0
                  :priceOfQuantitySelected 0}
                :miniGingerbreadDonut {
                  :id 1
                  :name "Mini Gingerbread Donut"
                  :imageURL "https://s3.amazonaws.com/pinchofyum/gingerbread-donuts-22.jpg"
                  :price 0.50
                  :bulkPricing nil
                  :quantity 0
                  :priceOfQuantitySelected 0}
                })))




;; pure handlers must return a db


(re-frame/register-handler               ;; when the GET succeeds
  :process-response ;; the GET callback dispatched this event
  (fn
    [db [_ response]] ;; extract the response from the dispatch event vector
    (-> db
        (assoc :loading? false) ;; take away that modal
        (assoc :data (js->clj response)))))  ;; fairly lame processing


