import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { rateLimit } from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import helmet from 'helmet';
import cors from "cors";
import customer from "./routes/customerRoutes.js";
import product from "./routes/productRoutes.js";
import order from "./routes/orderRoutes.js";
import admin from "./routes/adminRoutes.js";
import { authorizeRoles } from './middlewares/auth.js';
import errorMiddleware from "./middlewares/error.js";


dotenv.config()

const app = express();

const PORT = process.env.PORT || 8080;
console.log(process.env.MONGO_URL);

/*MONGODB CONNECTION START*/
const MONGO_URL = process.env.MONGO_URL ;

// cors

app.use(cors())


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);


// Or, to sanitize data that only contains $, without .(dot)
// Can be useful for letting data pass that is meant for querying nested documents.
app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);


//Helmet helps secure Express apps by setting HTTP response headers.
app.use(helmet());


// Check if MONGO_URL is defined
if (!MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1); // Terminate the application
}

// MongoDB connection 
mongoose.connect(MONGO_URL)
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err) => {
    console.log("Error Connecting to Database", err)
})
/*MONGODB CONNECTION END*/

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//HPP puts array parameters in req.query and/or req.body aside and just selects the last parameter value. You add the middleware and you are done.
app.use(hpp()); // Make sure the body is parsed beforehand.



app.use("/customer", customer);
app.use("/product", product);
app.use("/order", order);
//Add authorisation here
app.use('/admin',admin);
// Middleware for Errors
app.use(errorMiddleware);
app.get('/', (req, res) => {
    res.send(`Welcome to Scizers Assignment !!!    Made by Trisha Sahu`);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

export default app;