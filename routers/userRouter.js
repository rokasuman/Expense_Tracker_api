import express from 'express'
import { getUserByEmail, insertUser } from '../models/user/userModel.js'
import { comparePassword, hashPassword } from '../utlis/bycrpt.js'
import { signJWT } from '../utlis/jwt.js';
import { auth } from '../middleware/authMiddleware.js';

const router = express.Router()

// User signup
router.post("/", async (req, res) => {
    try {
        const { password } = req.body;

        // Check required fields
        if (!password) {
            return res.json({
                status: "error",
                message: "Password is required",
            });
        }

        // Encrypt password
        req.body.password = await hashPassword(password);
        console.log(req.body.password);

        // Insert user
        const user = await insertUser(req.body);

        return user?._id
            ? res.json({
                status: "success",
                message: "Your account has been created. You may login now",
            })
            : res.json({
                status: "error",
                message: "Error creating user. Please try again",
            });
    } catch (error) {
        return res.json({
            status: "error",
            message: error.message,
        });
    }
});

//login user endoint 

router.post("/login", async(req,res,next)=>{
    try {
        // receive email and password 
           const {email, password} = req.body
         // find the user by email
         const user = await getUserByEmail(email);
         if(user?._id){
            // verify the password
            const match = comparePassword(password, user.password)

            if(match){
                // the user is authenticated
                // jwt and store the jwt in db and return the user object with jwt
             const accessJWT  = signJWT({
                email:email
             })


         user.password = undefined;
        return res.json({
        status:"success",
        message:" login in successfully",
        user,
        accessJWT,
       });
    }
}    
       return res.status(401).json({
        error: "invalid password or email"
       })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
        
    }
})

// get a user form the jwt
router.get('/',auth,(req,res,next)=>{
    try {
        
        const user = req.userInfo;

        //1. recive the token
        //2. create a auth middleware 
          //- if token valid 
          //- is user email is valid
          //- get user by email

          res.json({
            status:"success",
            message:"Here is the user Profile",
            user
          })
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
        
    }
})

export default router;
