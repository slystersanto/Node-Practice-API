const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema(

    {
        name:{
            type:String,
            required:[true,"please enter a product"]
        },
        quantity:{
            type:Number,
            required:true

        },
        price:{
            type:Number,
            required:true
        },
        images:{
            type:String,
            required:false
        },
    },{
        timestamps:true
    }
)

const Products=mongoose.model("Product",ProductSchema);
module.exports=Products;