import mongoose from "mongoose";

const transactionSchma =  mongoose.Schema({
     type:{
        type:String,
        required:true
     } ,
    title:{
        type:String,
        required:true,
        
     } ,
    amount :{
        type:Number,
        required:true,
     
     },
    tDate :{
        type:Date,
        required:true,
     
     },
     userId:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"User",
         required:true,
     }

},{
    timeStamps: true
}
);

export default mongoose.model("Transaction",transactionSchma)