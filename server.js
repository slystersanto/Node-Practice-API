const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const ProductRoute=require("./routes/productRoute")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server started");
});

//routes
app.use("/api/products",ProductRoute)



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
