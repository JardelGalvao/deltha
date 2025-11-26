import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const clientUserCreateValidate = (createClientUserSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  createClientUserSchema.parse(req.body);
  next();
};

export const clientUserUpdateValidate = (updateClientUserSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  updateClientUserSchema.parse(req.body);
  next();
};

