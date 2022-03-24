const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())// add this line
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

  const barang = require('./sql_test')

  app.get('/api/sql1',barang.getBarang);

  app.get('/api/sql2',barang.stokBarang);

  const fibonacii = require('./fibonacii')

  // fibonacii part
  app.get('/api/fibonacii/:numbers',fibonacii.readFibonacii);

  const bilGanjil = require('./bilangan_ganjil')

  // bil Ganjil part
  app.get('/api/bilGanjil/:numbers',bilGanjil.drawBilanganGanjil);

  const pad = require('./str_pad')
  // bil pad Part
  app.post('/api/Pad',pad.readPad);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
   });
  