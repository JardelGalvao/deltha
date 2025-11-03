import * as employeeSchemas from "@modules/employees/schemas/employee.schema";
import { NextFunction, Request, Response } from "express";

export const companyCreateValidate = (createCompanySchema: typeof employeeSchemas.employeeCreateSchema) => (req: Request, res: Response, next: NextFunction) => {
  createCompanySchema.parse(req.body);
  next();
};

export const companyUpdadteValidate = (companyPutSchema: typeof employeeSchemas.employeeUpdateSchema) => (req: Request, res: Response, next: NextFunction) => {
  companyPutSchema.parse(req.body);
  next();
};