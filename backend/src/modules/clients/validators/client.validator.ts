import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const clientCreateValidate = (createClientSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = createClientSchema.parse(req.body);
  next();
};

export const clientUpdateValidate = (updateClientSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = updateClientSchema.parse(req.body);
  next();
};

