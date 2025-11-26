export const errorHandler = (error,req,res,next)=>{

    // seting up the defult value i,e status and message

    const statusCode = error.statusCode || 500
    const message = error.message || "interal server error"

    res.status(statusCode).json({
        status:"error",
        message,

    })

}