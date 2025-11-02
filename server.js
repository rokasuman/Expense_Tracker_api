import express from 'express'

const app = express()
const PORT = process.env.PORT || 8000



/// connecting to mongose
import { connectDB } from './config/mongodbConfig.js'
connectDB()
// Middleware 
app.use(express.json())


//api endpoint
import userRouter from './routers/userRouter.js'

app.use("/api/v1/users",userRouter);

app.get("/",(req,res)=>{
    res.json({
        message:"it is live"
        
    })
})


app.listen(PORT,error =>{
    error
    ? console.log(error)
    :console.log(`server is running at http://localhost:${PORT}`);


});
