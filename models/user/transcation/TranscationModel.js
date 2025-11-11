import TransactionSchema from "./TransactionSchema.js";


// inserting 

export const insertTransaction = (obj) =>{
    return TransactionSchema(obj).save();
}