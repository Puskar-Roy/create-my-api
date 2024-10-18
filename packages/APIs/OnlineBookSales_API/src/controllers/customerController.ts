import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Customer from "../models/customerSchema.js";
import Feedback from "../models/feebackSchema.js";
import {sendToken} from "../utils/jwtToken.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();
// CUSTOMER REGISTRATION ROUTE
import validator from 'validator';

export const registerCustomer = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }


    const customer = await Customer.create({
      name,
      email,
      password,
      avatar: {
        public_id: "This is Public ID",
        url: "ThisisSecureUrl",
      },
    });

    // Access JWT secret key from environment variables
    const jwtSecret = process.env.JWT_SECRET;

    // Check if jwtSecret is defined
    if (!jwtSecret) {
      console.error("JWT secret key is not defined in the environment variables.");
      process.exit(1); // Terminate the application
    }

    // Print the user detail
    const payload = {
      name,
      email,
    };

    const token = jwt.sign(payload, jwtSecret);
    sendToken(customer, 201, res);
  } catch (error) {
    console.error("Error occurred during user registration:", error);
    next(error); // Pass the error to the error handling middleware
  }
});



// CUSTOMER LOGIN ROUTE
export const loginCustomer = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
   
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
  
    const customer= await Customer.findOne({ email }).select("+password");
  
    if (!customer) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
    // @ts-ignore
    const isPasswordMatched = await customer.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }
  
    sendToken(customer, 200, res);
  });
  
    //CUSTOMER LOGOUT ROUTE
    export const logoutCustomer = catchAsyncErrors(async (req,res,next) => {
      const customer = await Customer.findById(req.user.id);
       
      if(!customer){
        return next(new ErrorHandler("Invalid logout request", 401));
      }
  
      const options = {
        httpOnly: true,
        secure: true
      }
  
      return res.status(200)
                .clearCookie("token", options)
                .json({
                   success: true
                })
      
    })
    
  


// GET CUSTOMER DETAIL
export const getCustomerDetails = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  res.status(200).json({
    success: true,
    customer,
  });
});

// UPDATE CUSTOMER PASSWORD
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id).select("+password");
  // @ts-ignore
  const isPasswordMatched = await customer.comparePassword(
    req.body.oldPassword
  );
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  customer.password = req.body.newPassword;

  await customer.save();

  sendToken(customer, 200, res);
});

// UPDATE CUSTOMER PROFILE
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newCustomerData = {
    name: req.body.name,
    email: req.body.email,
  };

  const customer = await Customer.findByIdAndUpdate(
    req.user.id,
    newCustomerData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});


export const addFeedback = catchAsyncErrors(async (req, res, next) => {
  const { feedback,topic } = req.body;
  try{
   // sendMailToAdmin(newFeedback);
   const newFeedback = await Feedback.create({
      feedback,
      topic,
      user: req.body.user._id,
    });
    res.status(200).json({
      success: true,
      newFeedback,
    });
  } catch (error) {
    console.error("Error occurred during feedback creation:", error);
    next(error);
  }
});
const sendMailToAdmin = async (newFeedback) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },  
  });
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: 'admin email',
    subject: "New Feedback",
    text: `New Feedback received from ${newFeedback.user}`,
  };
};