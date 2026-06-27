import {Schema,model} from "mongoose";

let schoolSchema=Schema({
    name:{
        type:String,
        required:[true, "Name is required"]},
    address:{
        type:String,},
    phone:{
        type:Number,},
    email:{
        type:String,},
    noOfRooms:{
        type:Number,},
    
});

let School=model("School",schoolSchema);

export default School;