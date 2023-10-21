const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

// C=Create
router.post("/createProduct", productController.createProducts)

// R=Read
router.get("/readProduct",productController.readProduct);
router.get("/readProductByID/:id",productController.readProductByID);



// U=Update
router.patch("/updateProduct/:id",productController.updateProduct);


// Delete
router.delete("/deleteProduct/:id",productController.deleteProduct);


module.exports= router;