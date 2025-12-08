import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const clientUserCreateValidate = (createClientUserSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = createClientUserSchema.parse(req.body);
  next();
};

export const clientUserUpdateValidate = (updateClientUserSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = updateClientUserSchema.parse(req.body);
  next();
};

