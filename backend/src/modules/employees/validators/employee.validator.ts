import * as employeeSchemas from "@modules/employees/schemas/employee.schema";
import { NextFunction, Request, Response } from "express";

export const employeeCreateValidate = (createEmployeeSchema: typeof employeeSchemas.employeeCreateSchema) => (req: Request, res: Response, next: NextFunction) => {
  createEmployeeSchema.parse(req.body);
  next();
};

export const employeeUpdadteValidate = (employeePutSchema: typeof employeeSchemas.employeeUpdateSchema) => (req: Request, res: Response, next: NextFunction) => {
  employeePutSchema.parse(req.body);
  next();
};