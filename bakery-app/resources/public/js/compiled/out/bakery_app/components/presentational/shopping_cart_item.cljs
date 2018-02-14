(ns bakery-app.components.presentational.shopping-cart-item
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            [goog.string :as gstring]
            [goog.string.format]))

(defn shopping-cart-component [item]
  [:div {:class "shoppingCart__item"}
   [:span (:name (nth item 1))]
   " x "
   [:span (:quantity (nth item 1))]
   " ...... $"
   [:span (gstring/format "%.2f" (:priceOfQuantitySelected (nth item 1)))]])