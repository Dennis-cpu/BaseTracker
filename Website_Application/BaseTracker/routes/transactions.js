const express = require("express");
const router = express.Router();

router.get('/buy-now', (req, res) => {
    res.render(__dirname + '/../views/admin/pages/transactions/buy-now', {});

})



module.exports = router;