import express from 'express'
import cors from 'cors'
import { errorHandler } from './middleware/ErrorMiddleware.js'
const app = express()
const PORT = process.env.PORT || 8000



/// connecting to mongose
import { connectDB } from './config/mongodbConfig.js'
connectDB()
// Middleware 
app.use(express.json())
app.use(cors())



//api endpoint
import userRouter from './routers/userRouter.js'
import transcationRouter from './routers/transactionRouter.js'
import { auth } from './middleware/authMiddleware.js'

app.use("/api/v1/users",userRouter);
app.use("/api/v1/transactions",auth,transcationRouter);

app.get("/",(req,res)=>{
    res.json({
        message:"it is live"
        
    })
});

// 404 page not found 
app.use ((req,res,next)=>{
 const error = new Error ("Page Not Found")
 error.statusCode = 404;
 next(error)
})


//golbal error handler
app.use( errorHandler )

 
app.listen(PORT,error =>{
    error
    ? console.log(error)
    :console.log(`server is running at http://localhost:${PORT}`);


});
