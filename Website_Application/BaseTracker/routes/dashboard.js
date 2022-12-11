const express = require("express");
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/index', {});

})

module.exports = router