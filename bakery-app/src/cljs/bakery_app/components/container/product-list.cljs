(ns bakery-app.components.container.product-list
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            ))

;(defn product-list []
;  (let [name       (re-frame/subscribe [::subs/name])]
;    [:button       {:on-click #(re-frame.core/dispatch [::button-clicked "Jafwamo!"])}
;     (str "Press me! " @name)]))


;(defn main-panel []
;  (let [name       (re-frame/subscribe [::subs/name])
;        kablamming (re-frame/subscribe [::subs/kablamming])]
;    [:div
;      [:svg {:viewBox "0 0 960 300"} "\t"
;       [:symbol {:id "s-text"} "\t\t"
;        [:text {:text-anchor "middle", :x "50%", :y "80%"} @name]"\t"]"\n\t"
;       [:g {:class "g-ants"} "\t\t"
;        [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
;        [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
;        [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
;        [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
;        [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t"]]
;     [:div.footer.pretty-font "A cool ClojureScript thing by "[:a.jim-anchor {:href "https://github.com/JimTheMan"}"Jim"]]
;      [label-changing-button]
;     ]))

;
;[:ul
; (for [item @items]
;   ^{:key item}
;   [:div
;
;
;                                 [:li "Item " (str item)]
;    [:li "Itemzz "
;
;     (do
;       (println "hellopp " (nth item 0))
;       (println "hellopp " (nth item 1))
;       ;           (println "hellopp " (get item (nth item 1)))
;       ;           (println "hellopppp ")
;       (str (get item (nth item 0)))
;       (str (nth item 0))
;       (str (nth item 1))
;
;       (get (nth item 1) :name))]]
;
;   [:hr])]]

(defn product-list-component []
  (let [name       (re-frame/subscribe [::subs/name])
        items      (re-frame/subscribe [::subs/items])
        ]

    [:div
     ;      [:div "Hello fffrom " (:name (:muffin @items))]
      [:h2 "Product List"]

     [:hr]


      [:ul
       (for [item @items]
         ^{:key item} [:div




;            (do
;              (println "hellopp " (nth item 0) )
;              (println "hellopp " (nth item 1) )
;              ;           (println "hellopp " (get item (nth item 1)))
;              ;           (println "hellopppp ")
;              (str (get item (nth item 0)))
;              (str (nth item 0))
;              (str (nth item 1))
;
;              (get (nth item 1) :name)
;              (get (nth item 1) :name)
;              (get (nth item 1) :bulkPricing)
;              (get (get (nth item 1) :price) :bulkPricing )
;              (get (get (nth item 1) :amount) :bulkPricing )
;
;              )
;



            [:img {:src (get (nth item 1) :imageURL)}]
            [:h3 (get (nth item 1) :name)]
            [:div
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