(ns bakery-app.components.container.product-list
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [bakery-app.reframe.events :as events]
            [bakery-app.components.presentational.product-list-item :as product-item-element]))

(defn product-list-component []
  (let [items      (re-frame/subscribe [::subs/items])]

    [:div {:class "productList"}
      [:h2 {:class "productBox__textContainer__title" } "Products"]
      [:hr]
      [:div
       (for [item @items]
         ^{:key (:id (nth item 1))}
         [product-item-element/list-item item])]]))