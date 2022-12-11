const express = require('express')
const bodyParser = require("express");
const path = require('path')

const User = require('./model/user')
const ApiDataHandler = require('./services/data_handler')
const users = require('./routes/users')
const dashboard = require('./routes/dashboard')
const orders = require('./routes/orders')
const trackers = require('./routes/trackers')
const transactions = require('./routes/transactions')


const app = express();
const db = new ApiDataHandler();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views/pages'))
app.set('view engine', 'ejs')




app.use(express.static(__dirname));
app.use(express.static("views/admin"))



app.use('/', dashboard)
app.use('/', users)
app.use('/', trackers)
app.use('/', orders)
app.use('/', transactions)












app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`)
})




