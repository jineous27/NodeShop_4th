const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    res.json({
        message:"BBS is posted"
    });
});

router.get('/', (req, res) => {
    res.json({
        message:"BBS is retrived"
    });
});

router.patch('/', (req, res) => {
    res.json({
        message:"BBS is patched"
    });
});

router.delete('/', (req, res) => {
    res.json({
        message:"BBS is deleted"
    });
});


module.exports = router;
