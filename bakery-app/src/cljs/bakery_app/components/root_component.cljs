(ns bakery-app.components.root-component
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [reagent.core :as reagent]
            [bakery-app.reframe.events :as events]
            [bakery-app.reframe.handlers :as handlers]
            [bakery-app.components.container.product-list :as product-list]
            [bakery-app.components.container.shopping-cart :as shopping-cart]
            ))

(defn root-component []
  (let [name (re-frame/subscribe [::subs/name])]

    (reagent/create-class                
      {:component-did-mount               
         #((re-frame/dispatch [::handlers/load-product-list]))
       :display-name  "mail-panel"  ;; for more helpful warnings & errors

       :render       
                      (fn []         
                        [:div {:class "root-component"}
                         [product-list/product-list-component]
                         [shopping-cart/shopping-cart-component]])})))

