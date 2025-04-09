import CheckError from "../util/checkError.js";

const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};

export default errorHandler;
