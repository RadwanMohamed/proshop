
const    successResponse = (res,body,message='success')=>
    {
        res.status(200).json({
            statusCode : 200,
            status : true,
            message : message,
            data : body,
        })
    };
    const errorResponse = (res,body,code = 422 ,message='failed')=>
    {
         res.status(code).json({
            statusCode : code,
            status : false,
            message : message,
            data : body,
        })
    };

    export {successResponse , errorResponse};
    

