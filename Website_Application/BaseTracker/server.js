const User = require('./model/user')
const ApiDataHandler = require('./services/data_handler')
//const Load = require('./util/load')
const express = require('express')
const bodyParser = require("express");
const path = require('path')




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views/pages'))
app.set('view engine', 'ejs')


const db = new ApiDataHandler();
//const load = new Load(app)
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static("views/admin"))





//load.dashboard();



app.get('/dashboard', (req, res) => {
    res.render(__dirname + '/views/admin/pages/index', {});
    //console.log(__dirname)

})

// app.get('/tables/trackers', (req, res) => {
//     res.render(__dirname + '/views/admin/pages/tables/trackers', {});
//     //console.log(__dirname)
//
// })


// app.get('/', (req, res)=>{
//     res.sendFile("index.html");
// })

// app.get("/test", function (req, res) {
//     res.sendFile("");
//
//     // let name = req.body.first_name
//     // console.log(name)
// })








// app.get('/admin/tables/users', function (req, res) {
//
//     db.getAllUsers((users) =>{
//         res.render(__dirname + '/views/admin/tables/users', {users: users});
//     })
//
//
//
// })


app.get('/register/user', (req, res) => {
    res.render(__dirname + '/views/admin/pages/register/user', {});

})


app.get('/register/tracker', (req, res) => {
    res.render(__dirname + '/views/admin/pages/register/tracker', {});

})


app.get('/tables/users', (req, res) => {
    res.render(__dirname + '/views/admin/pages/tables/users', {});

})


app.get('/tables/new-trackers', (req, res) => {
    res.render(__dirname + '/views/admin/pages/tables/new-trackers', {});

})

app.get('/tables/sold-trackers', (req, res) => {
    res.render(__dirname + '/views/admin/pages/tables/sold-trackers', {});

})



app.get('/history-orders', (req, res) => {
    res.render(__dirname + '/views/admin/pages/orders/history', {});

})

app.get('/add-order', (req, res) => {
    res.render(__dirname + '/views/admin/pages/orders/add-order', {});

})


app.get('/pending-orders', (req, res) => {
    res.render(__dirname + '/views/admin/pages/orders/pending', {});

})


app.get('/user-profile', (req, res) => {
    res.render(__dirname + '/views/admin/pages/profile/user', {});

})


app.get('/user-update', (req, res) => {
    res.render(__dirname + '/views/admin/pages/update/user', {});

})





app.post('/register/user', (req, res)=>{

    const value = req.body

    let date = new Date();


    let today = date.toISOString().slice(0, 10)
    let time = date.toLocaleTimeString()


    let address = `${value.txtStreet}#${value.txtSuburb}#${value.txtCity}#${value.txtProvince}#
    ${value.txtPostcode}#${value.txtCountry}`

    //    constructor(id, name, surname, email, contacts, address, is_active, reg_date, reg_time, passwords, kin_contacts, kin_name) {

    let newUser = new User(value.txtName, value.txtSurname, value.txtEmail, value.txtContacts,
        address, "Yes", today, time, '123456', value.txtKContacts, value.txtKName)

    console.log(newUser)

    // db.createUser(newUser, (findUser) =>{
    //     //res.redirect('/')
    // })

    //res.redirect('/')
    //console.log(val)
})



app.listen(port, ()=>{
    console.log(`listening to port ${port}...`)
})




