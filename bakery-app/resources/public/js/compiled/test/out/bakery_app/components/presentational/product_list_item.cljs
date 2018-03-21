(ns bakery-app.components.presentational.product-list-item
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            [goog.string :as gstring]
            [goog.string.format]))

(defn list-item [item]
  [:div {:class "productBox"}
   [:img {:src (get (nth item 1) :imageURL ) :class "productBox__image"}]
   [:div {:class "productBox__textContainer"}
    [:h3 (get (nth item 1) :name)]
    "$"
    [:span (get (nth item 1) :price)]
    (if (= nil (get (nth item 1) :bulkPricing))
        [:span " each"]
        [:span
         " or "
         [:span (str (get (get (nth item 1) :bulkPricing) :amount))]
         " for $"
         [:span (str (get (get (nth item 1) :bulkPricing) :totalPrice))]])
    [:br]
    [:button
     {:class "productBox__addtoCartButton"
      :on-click #(re-frame.core/dispatch [::events/change-item-quantity {:itemName (nth item 0) :amountToChange 1}])}
     (str "Add to Cart")]]])