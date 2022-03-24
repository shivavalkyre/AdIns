const pool = require('./dbCon');

const getBarang = (request, response) => {

    var items = [];
    var res = []

     var sql= `SELECT n1."KODEBRG",
     n1."NAMABRG",
     sum(n1.jml_barang) AS jml_jual
    FROM ( SELECT tbl_barang."KODEBRG",
             tbl_barang."NAMABRG",
                 CASE
                     WHEN tbl_jual."JUMLAH" IS NULL THEN 0
                     ELSE tbl_jual."JUMLAH"
                 END AS jml_barang
            FROM tbl_barang
              LEFT JOIN tbl_jual ON tbl_barang."KODEBRG" = tbl_jual."KODEBRG"
           GROUP BY tbl_barang."KODEBRG", tbl_barang."NAMABRG", tbl_jual."JUMLAH"
           ORDER BY tbl_barang."KODEBRG") n1
   GROUP BY n1."KODEBRG", n1."NAMABRG"`

    pool.query(sql ,(error, results) => {
       if (error) {
         throw error
       }
       items.push({rows:results.rows})
       res.push(items)
       //response.status(200).send({success:true,data:res})
       response.status(200).send(res)
     })

   


  }


  const stokBarang = (request, response) => {

    var items = [];
    var res = []

     var sql= `SELECT tbl_history_stock_barang.kode_barang,
     tbl_history_stock_barang.stock_akhir
    FROM tbl_history_stock_barang
   WHERE (tbl_history_stock_barang.kode_stock IN ( SELECT max(tbl_history_stock_barang_1.kode_stock) AS kode_stock
            FROM tbl_history_stock_barang tbl_history_stock_barang_1
           WHERE (tbl_history_stock_barang_1.kode_barang::text IN ( SELECT DISTINCT ON (tbl_history_stock_barang_2.kode_barang) tbl_history_stock_barang_2.kode_barang
                    FROM tbl_history_stock_barang tbl_history_stock_barang_2))
           GROUP BY tbl_history_stock_barang_1.kode_barang
           ORDER BY (max(tbl_history_stock_barang_1.kode_stock))))
   ORDER BY tbl_history_stock_barang.kode_barang`

    pool.query(sql ,(error, results) => {
       if (error) {
         throw error
       }
       items.push({rows:results.rows})
       res.push(items)
       //response.status(200).send({success:true,data:res})
       response.status(200).send(res)
     })

   


  }


  module.exports = {
    getBarang,
    stokBarang
}
