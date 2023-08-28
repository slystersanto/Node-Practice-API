const Product=require('../models/productModel')

//get product
const getProduct= async (req, res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };


  //createProduct
  const createProduct=async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  //get one product
  const getOneProduct= async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id)
        const product=await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}


//editproduct
const editProduct =async(req,res)=>{
    try {
        const {id}=req.params
        const product=await Product.findByIdAndUpdate(id,req.body)
        console.log(id)
        console.log(req.body)
        if(!product){
            return res.status(404).json({message:`cannot find the product by ID ${id}`})
        }
        const updatedProduct=await Product.findById(id)
        res.status(200).json({updatedProduct:"now you can edit"})
    } catch (error) {
        console.log(error)
        res.status(200).json({message:error.message})
    }
}


//delete product
const deleteProduct =async(req,res)=>{
    try {
        const {id} =req.params;
        const product=await Product.findByIdAndDelete(id)
        res.status(200).json({product : "Deleted succesfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


  module.exports={
    getProduct,
    createProduct,
    getOneProduct,
    editProduct,
    deleteProduct
  }