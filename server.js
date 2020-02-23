const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/*
app.use((req, res) => {
    res.json({
        message:"Okay"
    });
});
*/

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');
const bbsRoutes = require('./routes/bbs');

const DB = "mongodb+srv://4nodeshop-admin:wlsl4378@cluster0-a5s3l.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("MongoDB Connected 가 완료되었어요"))
    .catch(err => console.log("err"));


app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//사용하기 위한 설정값//

app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/bbs', bbsRoutes);

const PORT = 1357;




app.listen(PORT, () => console.log("Server started"));