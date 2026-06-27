import { Router } from "express";
import Product from "../schema/productSchema.js";


const productRoutes = Router();

productRoutes
.route("/")
.post(async (req, res,next) => {
    try{
        let result = await Product.create(req.body);
        res.json({
            success:true,
            message:"Product created successfully",
            result: result,
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message,
        })
    }
})
.get(async (req, res,next) => {
    try{
        let result = await Product.find();
        res.json({
            success:true,
            message:"Product read successfully",
            result: result,
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message,
        })
    }
})

productRoutes
.route("/:id")
.get(async (req, res,next) => {
    try{
        let result = await Product.findById(req.params.id);
        res.json({
            success:true,
            message:"Product read successfully",
            result: result,
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message,
        })
    }
})
.patch(async (req, res,next) => {
    try{
        let result = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json({
            success:true,
            message:"Product updated successfully",
            result: result,
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message,
        })
    }
})
.delete(async (req, res,next) => {
    try{
        let result = await Product.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            message:"Product deleted successfully",
            result: result,
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message,
        })
    }
})

export default productRoutes; 