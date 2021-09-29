import {errorResponse , successResponse} from "../helper/utils.js"
const errorHandler = (error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500; 
    const message = error.message;
    const data = error.data;
    errorResponse(res,data,status,message);
}

export default errorHandler;