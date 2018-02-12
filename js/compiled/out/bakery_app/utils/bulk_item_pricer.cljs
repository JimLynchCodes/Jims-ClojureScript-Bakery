(ns bakery-app.utils.bulk-item-pricer)

(defn get-price [quantity singlePrice bulkAmount bulkPrice]
  (if (= nil bulkAmount)
    (* quantity singlePrice)
    (if (< quantity bulkAmount)
      (* quantity singlePrice)
      (+ (* (Math/floor (/ quantity bulkAmount)) bulkPrice)
         (* (mod quantity bulkAmount) singlePrice)))))