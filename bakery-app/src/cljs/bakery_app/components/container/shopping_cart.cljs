(ns bakery-app.components.container.shopping-cart
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            [goog.string :as gstring]
            [goog.string.format]
            [bakery-app.components.presentational.shopping-cart-item :as cart-item]))

(defn shopping-cart-component []
  (let  [items       (re-frame/subscribe [::subs/items])
         totalPrice  (re-frame/subscribe [::subs/totalPrice])]
    [:div {:class "shoppingCartContainer"}
      [:div {:class "shoppingCartBox"}
        [:h2 {:class "cart-header"} "Cart" ]
          [:hr]
          [:div
           (for [item @items]
             ^{:key (:id (nth item 1))}
             (if (> (:quantity (nth item 1)) 0)
               [:div {:key (:id (nth item 1))}
                [cart-item/shopping-cart-component item]]
               [:div {:key (:id (nth item 1))}]))
          [:div
            [:div {:class "shoppingCart__totalContainer"} "Total $"
            [:span (gstring/format "%.2f" @totalPrice)]]]
          [:button {:on-click #(js/alert "Credit card processing coming soon!") :class "shoppingCart__checkoutButton"}
           (str "Checkout")]]]]))
