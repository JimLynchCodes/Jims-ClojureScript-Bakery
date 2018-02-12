(ns bakery-app.utils.bulk-item-pricer
  )

(defn get-price [quantity singlePrice bulkAmount bulkPrice]

  (print "In bulk pricer!")
  (print "In bulk pricer!" quantity)
  (print "In bulk pricer!" singlePrice)
  (print "In bulk pricer!" bulkAmount)
  (print "In bulk pricer!" bulkPrice)

  (print "number of bulks!" (Math/floor (/ quantity bulkAmount)))
  (print "price of bulks!" (Math/floor (/ quantity bulkAmount)))
  (print "price of bulks!" (* (Math/floor (/ quantity bulkAmount)) bulkPrice))
  (print "leftovers!" (mod bulkPrice quantity))
  (print "leftovers!" (mod quantity bulkPrice))



(let [g
  (if (< quantity bulkAmount)
    (* quantity singlePrice)
    (+ (* (Math/floor (/ quantity bulkAmount)) bulkPrice)
         (* (mod quantity bulkAmount) singlePrice))


      )

      ]

  (println "g is " g)
  g)


  )