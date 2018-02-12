(ns bakery-app.components.container.shopping-cart
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            [goog.string :as gstring]
            [goog.string.format]))

(defn shopping-cart-component []
  (let [name       (re-frame/subscribe [::subs/name])
        items  (re-frame/subscribe [::subs/items])
        totalPrice  (re-frame/subscribe [::subs/totalPrice])

        ]

    [:div {:class "shoppingCartContainer"}
      [:div {:class "shoppingCartBox"}
      [:h2 "Cart"]
       [:hr]
        [:div
         (for [item @items]
           ^{:key item}

           (if (> (:quantity (nth item 1)) 0)
              [:div {:class "shoppingCart__item"}
                [:span (:name (nth item 1))]
                " x "
                [:span (:quantity (nth item 1))]
                " ...... $"
                [:span (gstring/format "%.2f" (:priceOfQuantitySelected (nth item 1)))]
              ])
             )
         [:div
           [:div {:class "shoppingCart__totalContainer"} "Total $"
           [:span
            (gstring/format "%.2f" @totalPrice)
            ]]]

      [:button {:on-click #(js/alert "Credit card processing coming soon!") :class "shoppingCart__checkoutButton"}
       (str "Checkout")]
      ]]

     ]

    ))