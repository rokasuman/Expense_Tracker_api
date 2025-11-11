import express from 'express'
import { insertTransaction } from '../models/user/transcation/TranscationModel.js';
 
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



export default router;






