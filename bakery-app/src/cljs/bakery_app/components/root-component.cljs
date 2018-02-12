(ns bakery-app.components.root-component
  (:require [re-frame.core :as re-frame]
            [bakery-app.reframe.subs :as subs]
            [reagent.core :as reagent]
            [bakery-app.reframe.events :as events]
            [bakery-app.reframe.handlers :as handlers]
            [bakery-app.components.container.product-list :as product-list]
            [bakery-app.components.container.shopping-cart :as shopping-cart]
;            [bakery-app.components.container.product-list] as product-list]
            ))

(defn root-component []
  (let [name (re-frame/subscribe [::subs/name])]

    (reagent/create-class                 ;; <-- expects a map of functions
      {:component-did-mount               ;; the name of a lifecycle function
                      #(do (println "component did mount!")
                          (re-frame/dispatch [::handlers/load-product-list])
;                          (re-frame/dispatch [::events/initialize-shopping-cart])
;                          (re-frame/dispatch [::events/fuck])


                        )

       ;; other lifecycle funcs can go in here

       :display-name  "mail-panel"  ;; for more helpful warnings & errors

       :render        ;; Note:  is not :render
                      (fn []           ;; remember to repeat parameters
                        [:div

                         [product-list/product-list-component]
                         [shopping-cart/shopping-cart-component]
                         ]

                         )})




  )
)

