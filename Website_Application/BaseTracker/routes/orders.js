const express = require("express");
const User = require("../model/user");
const router = express.Router();

router.get('/history-orders', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/orders/history', {});

})

router.get('/add-order', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/orders/add-order', {});

})


router.get('/pending-orders', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/orders/pending', {});

})

module.exports = router;