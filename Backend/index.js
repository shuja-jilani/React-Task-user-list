const connectToMongo = require("./db");

var express = require("express");
var cors = require('cors')
connectToMongo();
var app = express()
const port = 5000;

app.use(cors())



//middleware to use req.body
app.use(express.json());

app.use("/api/list", require("./routes/list"));

app.listen(port, () => {
  console.log(`UserList backend listening on port ${port}`);
});
