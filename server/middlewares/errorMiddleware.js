import mongoose from "mongoose";

// const mongooseErrror = (req,res,next) =>{
//       mongoose.isValidObjectId()
// }
const notFound = (req, res, next) => {
  const error = new Error(` not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // error.name === "CastError" ?
  res.status(statusCode);
  res.json({
    message:
      error.name === "CastError"
        ? `Resource not found invalid: ${error.path}`
        : error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
};

export { notFound, errorHandler };
