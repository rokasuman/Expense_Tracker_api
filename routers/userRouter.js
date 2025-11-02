import express from 'express'
import { insertUser } from '../models/user/userModel.js'
import { hashPassword } from '../utlis/bycrpt.js'

const router = express.Router()


//User signup

router.post("/",async (req,res, next) =>{
    try {
        //get the user obj 
        //encrypt the pasword
       req.body.password = hashPassword(req.body.password)
        console.log(eq.body.password );
        // data verification 
       const user = await insertUser(req.body)

       user?._id
        ? res.json({
            status: "success",
            message:"Your account has been create you may login now"
        })
         :res.json({
            status: "error",
            message:"error creating in user.Please try again"
        })
    } catch (error) {
        res.json({
            status:"error",
            message:error.message
        })
        
    }
})

//User Login

//User Profile

export default router;