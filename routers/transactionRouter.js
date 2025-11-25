import express from 'express'
import { insertTransaction } from '../models/user/transcation/TranscationModel.js';
 import { getTransactions } from '../models/user/transcation/TranscationModel.js';
 import { deleteTransaction } from '../models/user/transcation/TranscationModel.js';
const router = express.Router()

// insert the transcatiom
router.post("/",async (req,res, next) => {
  try {
    const {_id} = req.userInfo;
    req.body.userId = _id;
        console.log(_id)
        const result =  await insertTransaction(req.body);
        result?._id ?
    res.json({
        status:"success",
        message:" new transaction add sucessfully"


    }) :
    res.json({
        status:"error",
        message:"Unable to add the transaction"
    });
} catch (error) {
    console.log(error)
    res.json({
        status:"error",
        message:error.message
    });
}
})

// read all the transaction of the user 

router.get("/", async(req,res)=>{
    try {
        const {_id} = req.userInfo
        console.log(_id);
        // get all the transaction of the database
        const transactions = await getTransactions(_id) || [];

        res.json({
            status: "success",
            message:"here are the transactions",
            transactions,
        })
    } catch (error) {
        
        console.log(error);
        res.json({
            status:error,
            message: error.message
        })
    }
})

//delete the transcation 
router.delete("/", async (req, res) => {
    try {
        const ids = req.body;
        const { _id } = req.userInfo;

        const result = await deleteTransaction(_id, ids);

        return res.json({
            status: "success",
            message: result.deletedCount + " transaction(s) have been deleted"
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: "error",
            message: error.message
        });
    }
});




export default router;






