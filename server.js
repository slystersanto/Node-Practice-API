const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server started");
});

//get routes
app.get("/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//create post route
app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


//to get a single product 

app.get('/product/:id',async(req,res)=>{
    try {
        const {id}=req.params
        console.log(id)
        const product=await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

//edit products

app.put('/product/:id',async(req,res)=>{
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
})

//delete the product
app.delete('/product/:id',async(req,res)=>{
    try {
        const {id} =req.params;
        const product=await Product.findByIdAndDelete(id)
        res.status(200).json({product : "Deleted succesfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})

mongoose
  .connect(
    "mongodb+srv://admin:sandyrockz007@cluster0.nxhf9ma.mongodb.net/api-practices"
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Node server is started successfully");
    });
    console.log("Mongo DB Connected! ");
  })
  .catch((error) => console.log(error));
