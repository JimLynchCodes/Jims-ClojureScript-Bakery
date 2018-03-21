(ns bakery-app.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [bakery-app.core-test]
              [bakery-app.utils.bulk-item-pricer-test]
              ))

(doo-tests 'bakery-app.core-test
           'bakery-app.utils.bulk-item-pricer-test)
