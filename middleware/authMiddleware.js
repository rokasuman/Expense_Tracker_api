import { getUserByEmail } from "../models/user/userModel.js";
import { verifyJWT } from "../utlis/jwt.js";

export const auth = async(req,res,next) =>{
    try {

        const {authorization} = req.headers;

        const result = verifyJWT(authorization)
        if(result?.email){
            const user= await getUserByEmail(result.email)
            if(user?._id){
                //user is authorized


                //store user into req headers
                req.userInfo = user;
                return next()
            }
        }
          res.status(403).json({
            error:"Unauthorized"

        })
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }

}