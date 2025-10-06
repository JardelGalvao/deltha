import { CompanySchema, CompanyUpdateSchema } from "@schema/company.schema";
import { NextFunction, Request, Response } from "express";
import z from "zod";

export const companyCreateValidate = (companySchema: typeof CompanySchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = companySchema.safeParse(req.body);

  if (!result.success) {
    const formErrors  =  z.flattenError(result.error);
    return res.status(400).json({ errors: formErrors });
  }

  next();
};

export const companyUpdadteValidate = (companyPutSchema: typeof CompanyUpdateSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = companyPutSchema.safeParse(req.body);

  if (!result.success) {
    const formErrors  =  z.flattenError(result.error);
    return res.status(400).json({ errors: formErrors });
  }
  
  next();
};