// const express = require('express')
// var cors = require('cors')
// const app = express()
// app.use(cors())

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3030;
app.get('/', function (req, res) {
       res.send('HOUSSEIN')
    })
// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});