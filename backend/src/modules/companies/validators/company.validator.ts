import * as companySchemas from "@modules/companies/schemas/company.schema";
import { NextFunction, Request, Response } from "express";

export const companyCreateValidate = (createCompanySchema: typeof companySchemas.companyCreateSchema) => (req: Request, res: Response, next: NextFunction) => {
  createCompanySchema.parse(req.body);
  next();
};

export const companyUpdadteValidate = (companyPutSchema: typeof companySchemas.companyUpdateSchema) => (req: Request, res: Response, next: NextFunction) => {
  companyPutSchema.parse(req.body);
  next();
};