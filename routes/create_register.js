const express = require('express');
const router = express.Router();

router.get('/create_register', (req, res) => {
    res.render('create_register');
});

module.exports = router;