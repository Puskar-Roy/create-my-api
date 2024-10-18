import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import pkg from 'jsonwebtoken';
const { verify } = pkg;
import Customer  from "../models/customerSchema.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedData = verify(token, process.env.JWT_SECRET);
  // @ts-ignore
  req.user = await Customer.findById(decodedData.id);
  next();
});

export function authorizeRoles(...roles) {
  return (req, res, next) => {
    console.log(roles)
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
}
