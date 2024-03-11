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
  // app.get('/', function (req, res) {
  //     res.send('HOUSSEIN')
  //    })
// your code
 app.get('/', function (req, res) {
    let data =[{id:1,name:'ali'},{id:2,name:'housein'},{id:3,name:'sophie'}]
    res.send(data);
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});