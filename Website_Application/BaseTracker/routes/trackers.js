const express = require("express");
const router = express.Router();

router.get('/tables/new-trackers', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/tables/new-trackers', {});

})

router.get('/tables/sold-trackers', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/tables/sold-trackers', {});

})

module.exports = router;
