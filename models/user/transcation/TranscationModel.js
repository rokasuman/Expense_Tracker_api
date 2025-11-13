import TransactionSchema from "./TransactionSchema.js";


// inserting 

export const insertTransaction = (obj) =>{
    return TransactionSchema(obj).save();
}


export const getTransactions = (userId)=>{
    if(!userId){
        throw new Error("UserId is required!");
    }
    return TransactionSchema.find({userId});

}