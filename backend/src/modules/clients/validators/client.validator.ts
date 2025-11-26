import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const clientCreateValidate = (createClientSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  createClientSchema.parse(req.body);
  next();
};

export const clientUpdateValidate = (updateClientSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  updateClientSchema.parse(req.body);
  next();
};

