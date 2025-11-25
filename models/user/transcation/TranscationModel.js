import TransactionSchema from "./TransactionSchema.js";


// inserting the transactions

export const insertTransaction = (obj) =>{
    return TransactionSchema(obj).save();
}


export const getTransactions = (userId)=>{
    if(!userId){
        throw new Error("UserId is required!");
    }
    return TransactionSchema.find({userId});

}

//delte the transaction 
export const deleteTransaction = (userId, idsToDelete) => {
    return TransactionSchema.deleteMany({
        userId: userId,
        _id: { $in: idsToDelete }
    });
};

