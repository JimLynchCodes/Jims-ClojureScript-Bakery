(ns bakery-app.reframe.db)

(def default-db
  {:name "re-frame"
   :items {}
   :shoppingCart
    {
      :cartItems { :muffin {
                             :name "derp"
                              :quantity 1
                              :subtotal 500 }
                   :brownie {
                             :name "brownie"
                             :quantity 1
                             :subtotal 500 }

                   }
      :orderTotalPrice 0
      }
   })
