import HttpError from "@shared/errors/HttpError";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const errorHandler = (
  error: HttpError | Error | ZodError ,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle Zod validation errors
  if (error instanceof ZodError) {
    const firstError = error;
    return res.status(400).json({
      error: firstError.issues[0] || "Validation failed"
    });
  }

  // This check should come before the more generic HttpError check.
  if ('code' in error && error.code === '23505') {
    return res.status(409).json({
      error: "Duplicate key error: a record with this identifier already exists."
    });
  }

  // This covers all your custom HTTP errors (400, 409, etc.) in one block.
  if (error instanceof HttpError) {
    
    return res.status(error.statusCode).json({
      error: error.message
    });
  }

  console.log(error)
  // This ensures that even unforeseen errors are handled gracefully.
  return res.status(500).json({
    error: "An internal server error occurred.",
  });
};

export default errorHandler;