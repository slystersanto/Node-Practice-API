const express=require('express')
const Product = require("../models/productModel");
const {getProduct,createProduct,getOneProduct,editProduct, deleteProduct}=require('../controller/productController')

const router=express.Router()

//get routes
router.get("/",getProduct)

//create post route
router.post("/", createProduct)


//to get a single product 

router.get('/:id',getOneProduct)

//edit products

router.put('/:id',editProduct)

//delete the product
router.delete('/:id',deleteProduct)

module.exports=router;