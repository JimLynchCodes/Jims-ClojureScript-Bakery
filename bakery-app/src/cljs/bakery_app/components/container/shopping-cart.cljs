(ns bakery-app.components.container.shopping-cart
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]))

(defn shopping-cart-component []
  (let [name       (re-frame/subscribe [::subs/name])
        items  (re-frame/subscribe [::subs/items])
        totalPrice  (re-frame/subscribe [::subs/totalPrice])

        ]

    [:div
    [:h1 "Cart"]


    [:h1 @totalPrice]

     ;      [:div "Hello fffrom " (:name (:muffin @items))]
;      [:div "Hello fffrom " (str @name)]
;      [:div "Hello fffrom " (str @cartItems)]

     [:hr]


      [:ul
       (for [item @items]
         ^{:key item} [:div

;              [:span (str item)]
;              [:span (nth item 1)]

              [:span (:name (nth item 1))]
                       " x "
              [:span (:quantity (nth item 1))]
                       " $"
              [:span (:priceOfQuantitySelected (nth item 1))]

            ]

            )


       [:div
       [:span "Total "]
       [:span @totalPrice]
        ]

    [:button {:on-click #(js/alert "Navigating to checkout!")}
     (str "Checkout")]
    ]]


    ))