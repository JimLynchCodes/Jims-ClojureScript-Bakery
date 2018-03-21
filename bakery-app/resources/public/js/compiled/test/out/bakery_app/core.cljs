(ns bakery-app.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [bakery-app.reframe.events :as events]
            [bakery-app.components.root-component :as view]
            [bakery-app.config :as config]
            [bakery-app.reframe.handlers :as handlers]))

(enable-console-print!)
(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [view/root-component]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
