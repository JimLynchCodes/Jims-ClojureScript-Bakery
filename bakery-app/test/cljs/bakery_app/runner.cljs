(ns bakery-app.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [bakery-app.core-test]))

(doo-tests 'bakery-app.core-test)
