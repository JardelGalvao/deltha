import HttpError from "@/errors/HttpError";
import { Request, Response, NextFunction } from "express";


const errorHandler = (error: HttpError | Error, req: Request, res: Response, next: NextFunction) => {
  
  // Handle PostgreSQL unique constraint error
  if ('code' in error && error.code === '23505') {
    return res.status(409).json({
      error: "Duplicate key error: an organization with this ID already exists."
    });
  }
  
  // Handle error 400
  if ('code' in error && error.code === '400') {
    return res.status(400).json({
      error: error.message
    });
  }

  // Handle error 409
  if ('code' in error && error.code === '409') {
    return res.status(409).json({
      error: error.message
    });
  }

  // Default fallback
  return res.status(500).json({
    error: error.message,
  });
};
//"Internal Server Error."
export default errorHandler;
