const connectToMongo  = require('./db');

connectToMongo();
const express = require('express')
const app = express()
const port = 3000

//middleware to use req.body
app.use(express.json())

app.use('/api/list', require('./routes/list'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})