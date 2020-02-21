const express = require("express");
const router = express.Router();

//API - Post
router.post('/', (req, res) => {
    res.json({
        message: "The post is created!"
    });
});

//API - Retrieve
router.get('/', (req, res) => {
    res.json({
        message: "The product is displayed"
    });
});

//API - Patch
router.patch('/', (req, res) => {
    res.json({
        message: "The product is patched"
    });
});

//API - Delete
router.delete('/', (req, res) => {
    res.json({
        message: "The product is deleted"
    });
});




module.exports=router;