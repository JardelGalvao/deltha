import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const companyCreateValidate = (createCompanySchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = createCompanySchema.parse(req.body);
  next();
};

export const companyUpdadteValidate = (companyPutSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = companyPutSchema.parse(req.body);
  next();
};