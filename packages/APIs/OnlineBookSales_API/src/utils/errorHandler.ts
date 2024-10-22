class ErrorHandler extends Error{
    statusCode: any;
    message: any;
    constructor(message:any,statusCode:any){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);

    }
    
}

export default ErrorHandler