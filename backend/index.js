const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
require("dotenv").config();


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})