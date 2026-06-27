import {Schema,model} from "mongoose";

let productSchema=Schema({
    name:{
        type:String, 
        required:[true, "Name is required"]},
    price:{
        type:Number, 
        required:[true, "Price is required"]},
    quantity:{
        type:Number, 
        required:[true, "Quantity is required"]},
    description:{
        type:String, 
        required:[true, "Description is required"]},  
});

let Product=model("Product",productSchema);

export default Product;