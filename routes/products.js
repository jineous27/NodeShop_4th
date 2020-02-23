const express = require("express");
const router = express.Router();
const productModel = require('../models/product');

//API - Post
router.post('/', (req, res) => {
    const product = new productModel({
        name: req.body.name,
        price: req.body.price
    });

    product
        .save()
        .then(result => {
            res.json({
                message: "Your product is successfully registered",
                productInfo: result
            });
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });
});

//API - Retrieve
router.get('/', (req, res) => {
    productModel
        .find()
        .exec()
        .then(docs => {
            res.json({
                message: "Successful Total Get Data",
                products: docs
            });
        })
        .catch(error => {
            res.json ({
                err: error
            });
        });




    // res.json({
    //     message: "The product is displayed"
    // });
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




module.exports=router; //그래야 딴데서 읽혀져요//