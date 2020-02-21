const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    res.json({
        message:"The cart is created"
    });
});

router.get('/', (req, res) => {
    res.json({
        message:"The cart is got"
    });
});

router.patch('/', (req, res) => {
    res.json({
        message: "The cart is patched"
    });
});

router.delete('/', (req, res) => {
    res.json({
        message: "The cart is delted"
    });
});




module.exports = router;