const express = require("express");
const User = require("../model/user");
const router = express.Router();

router.get('/register/user', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/register/user', {});

})

router.get('/tables/users', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/tables/users', {});

})


router.get('/register/tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/register/tracker', {});

})


router.get('/user-profile', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/profile/user', {});

})


router.get('/user-update', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/update/user', {});

})



router.get('/user-trackers', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/profile/user-trackers', {});

})

router.post('/register/user', (req, res)=>{

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



module.exports = router;