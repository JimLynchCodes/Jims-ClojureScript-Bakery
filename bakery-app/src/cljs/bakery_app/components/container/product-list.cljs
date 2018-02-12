(ns bakery-app.components.container.product-list
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            ))


(defn product-list-component []
  (let [name       (re-frame/subscribe [::subs/name])
        items      (re-frame/subscribe [::subs/items])
        ]

    [:div {:class "productList"}
     ;      [:div "Hello fffrom " (:name (:muffin @items))]
      [:h2 {:class "productBox__textContainer__title" } "Products"]

     [:hr]


      [:div
       (for [item @items]
         ^{:key item}

         [:div {:class "productBox"}


                 [:img {:src (get (nth item 1) :imageURL ) :class "productBox__image"}]
            [:div {:class "productBox__textContainer"}
            [:h3 (get (nth item 1) :name)]
             "$"
             [:span (get (nth item 1) :price)]
             " or "
             [:span (str (get (get (nth item 1) :bulkPricing) :amount))]
              " for $"
             [:span (str (get (get (nth item 1) :bulkPricing) :totalPrice))]
             ]

;            [:h4 "Select Quantity"]
;             [:div
;             [:button       {:on-click #(re-frame.core/dispatch [::events/change-item-quantity [(nth item 0)] -1)]}
;             [:button       {:on-click #(re-frame.core/dispatch [::events/change-item-quantity {:itemName (nth item 0) :amountToChange -1}])}
;              (str "-")]

;             [:span (str (get (nth item 1) :quantity))]

;             " $"[:span (get (nth item 1) :priceOfQuantitySelected)]

;             [:button       {:on-click #(re-frame.core/dispatch [::events/change-item-quantity {:itemName (nth item 0) :amountToChange 1}])}
;              (str "+")]
;             ]

            [:button
             {:on-click #(re-frame.core/dispatch [::events/change-item-quantity {:itemName (nth item 0) :amountToChange 1}])}
;             [:button       {:on-click #(re-frame.core/dispatch [::events/add-to-cart (nth item 0)])}
              (str "Add to Cart")]




           [:hr]

           ])]

     ]

    ;      )))


    ))