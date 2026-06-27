import {Schema,model} from "mongoose";

let userSchema=Schema({
    name:{
        type:String, 
        required:[true, "Name is required"]},
    address:{
        type:String, 
        required:[true, "Address is required"]},
    email:{
        type:String, 
        required:[true, "Email is required"], unique:true},
    password:{
        type:String, 
        required:[true, "Password is required"]},
    phone:{
        type:Number, 
        required:[true, "Phone is required"]},
});

let User=model("User",userSchema);

export default User;