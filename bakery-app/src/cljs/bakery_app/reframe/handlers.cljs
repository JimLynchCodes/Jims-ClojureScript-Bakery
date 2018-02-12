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


    (assoc
    (assoc db :items {:muffin {:id 1
                                :name "Muffin"
                                :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
                                :price 2.00
                                :bulkPricing {:amount 4 :totalPrice 7.00}
                                :quantity 0
                                :priceOfQuantitySelected 0}

                       :brownie {:id 1
                                :name "Brownie"
                                :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
                                :price 2.00
                                :bulkPricing {:amount 4 :totalPrice 7.00}
                                :quantity 0
                                :priceOfQuantitySelected 0}
                       }

           )

    :shoppingCart { :cartItems {

                                   :muffin {:id 1
                                            :name "Muffin"
                                            :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
                                            :price 2.00
                                            :bulkPricing {:amount 4 :totalPrice 7.00}
                                            :quantity 0
                                            :priceOfQuantitySelected 0}

                                   :brownie {:id 1
                                             :name "Brownie"
                                             :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
                                             :price 2.00
                                             :bulkPricing {:amount 4 :totalPrice 7.00}
                                             :quantity 0
                                             :priceOfQuantitySelected 0}
                                   }
                    }
      )
    ))




;; pure handlers must return a db


(re-frame/register-handler               ;; when the GET succeeds
  :process-response ;; the GET callback dispatched this event
  (fn
    [db [_ response]] ;; extract the response from the dispatch event vector
    (-> db
        (assoc :loading? false) ;; take away that modal
        (assoc :data (js->clj response)))))  ;; fairly lame processing


