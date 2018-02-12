(ns figwheel.connect.build-dev (:require [bakery-app.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/bakery-app.core.mount-root (apply js/bakery-app.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'bakery-app.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

