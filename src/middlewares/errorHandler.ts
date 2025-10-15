import HttpError from "@/errors/HttpError";
import { NextFunction, Request, Response } from "express";

const errorHandler = (
  error: HttpError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  // This ensures that even unforeseen errors are handled gracefully.
  return res.status(500).json({
    error: "An internal server error occurred.",
  });
};

export default errorHandler;
