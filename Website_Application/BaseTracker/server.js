const User = require('./model/user')
const ApiDataHandler = require('./services/data_handler')
const express = require('express')
const bodyParser = require("express");
const path = require('path')


const db = new ApiDataHandler();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views/pages'))
app.set('view engine', 'ejs')



const port = process.env.PORT || 44318;

app.use(express.static(__dirname));
app.use(express.static("views/admin"))






app.get('/register/users', function (req, res) {
    res.render(__dirname + '/views/admin/pages/register/user', {});
    console.log(__dirname)

})


app.get('/dashboard', function (req, res) {
    res.render(__dirname + '/views/admin/pages/index', {});
    console.log(__dirname)

})


// app.get('/', (req, res)=>{
//     res.sendFile("index.html");
// })

// app.get("/test", function (req, res) {
//     res.sendFile("");
//
//     // let name = req.body.first_name
//     // console.log(name)
// })






db.getAllUsers((users) =>{
    console.log(users)
})


// app.get('/admin/tables/users', function (req, res) {
//
//     db.getAllUsers((users) =>{
//         res.render(__dirname + '/views/admin/tables/users', {users: users});
//     })
//
//
//
// })


// app.get('/admin/register/users', function (req, res) {
//     res.render(__dirname + '/views/admin/register/users', {});
//     console.log(__dirname)
//
// })




// app.post('/admin/register/users', (req, res)=>{
//
//     const value = req.body
//
//     let date = new Date();
//
//
//     let today = date.toISOString().slice(0, 10)
//     let time = date.toLocaleTimeString()
//
//
//     let address = `${value.txtStreet}#${value.txtSuburb}#${value.txtCity}#${value.txtProvince}#
//     ${value.txtPostcode}#${value.txtCountry}`
//
//     let newUser = new User(value.txtName, value.txtSurname, value.txtEmail, value.txtContacts,
//         address, "Yes", today, time, '123456')
//
//     console.log(newUser)
//
//     db.createUser(newUser, (findUser) =>{
//         //res.redirect('/')
//     })
//
//     //res.redirect('/')
//     //console.log(val)
// })



app.listen(port, ()=>{
    console.log(`listening to port ${port}...`)
})





function home() {

}