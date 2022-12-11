const express = require("express");
const router = express.Router();

router.get('/tables/new-trackers', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/tables/new-trackers', {});

})

router.get('/tables/sold-trackers', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/tables/sold-trackers', {});

})



router.get('/profile/new-tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/profile/new-tracker', {});

})


router.get('/profile/sold-tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/profile/sold-tracker', {});

})

router.get('/update/new-tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/update/new-tracker', {});

})

router.get('/update/sold-tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/update/sold-tracker', {});

})


router.get('/remove/sold-tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/remove/sold-tracker', {});

})

router.get('/remove/new-tracker', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/remove/new-tracker', {});

})


module.exports = router;
