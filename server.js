const express = require("express");
const app = express();

/*
app.use((req, res) => {
    res.json({
        message:"Okay"
    });
});
*/

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');



app.use('/products', productRoutes);
app.use('/carts', cartRoutes);


const PORT = 1357;




app.listen(PORT, () => console.log("Server started"));