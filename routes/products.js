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
});

// 선택된 제품을 불러오는 API를 만들어 보자. productID를 상수화 시키자. Productmodel 그릇안에서 해당 ID ckwrl
router.get('/:productID', (req, res) => {
    const productID = req.params.productID;
    productModel
        .findById(productID)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.json({
                    msg: "Get successful product detail",
                    productInfo: doc 
                })
            } else {
                res.json({
                    msg: "No valid entry found for provided ID"
                });
            }
        })
        .catch(error => {
            res.json({
                err: error
            });
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




module.exports=router; //그래야 딴데서 읽혀져요//