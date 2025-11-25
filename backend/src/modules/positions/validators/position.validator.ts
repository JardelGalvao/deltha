import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const createPositionValidate = (createPositionSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  createPositionSchema.parse(req.body);
  next();
};

export const updatePositionValidate = (updatePositionSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  updatePositionSchema.parse(req.body);
  next();
};