(ns bakery-app.reframe.handlers
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.db :as db]))


;; Ran out of time and just hardcoded the data into a map, but I think the real i/o side-effect operation
;; of reading from a text file deserves a handler rather than an event.
(re-frame/register-handler
  ::load-product-list
  (fn
    [db []]
    (assoc db
     :items {
      :brownie {
        :id 1
        :name "Brownie"
        :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
        :price 2.00
        :bulkPricing {:amount 4 :totalPrice 7.00}
        :quantity 0
        :priceOfQuantitySelected 0}
      :keyLimeCheesecake {
        :id 2
        :name "Key Lime Cheesecake"
        :imageURL "http://1.bp.blogspot.com/-7we9Z0C_fpI/T90JXcg3YsI/AAAAAAAABn4/EN7u2vMuRug/s1600/key+lime+cheesecake+slice+in+front.jpg"
        :price 8.00
        :bulkPricing nil
        :quantity 0
        :priceOfQuantitySelected 0}
      :cookie {
        :id 3
        :name "cookie"
        :imageURL "http://www.mayheminthekitchen.com/wp-content/uploads/2015/05/chocolate-cookie-square.jpg"
        :price 1.25
        :bulkPricing {:amount 6 :totalPrice 6.00}
        :quantity 0
        :priceOfQuantitySelected 0}
      :miniGingerbreadDonut {
        :id 4
        :name "Mini Gingerbread Donut"
        :imageURL "https://s3.amazonaws.com/pinchofyum/gingerbread-donuts-22.jpg"
        :price 0.50
        :bulkPricing nil
        :quantity 0
        :priceOfQuantitySelected 0}
      })))
