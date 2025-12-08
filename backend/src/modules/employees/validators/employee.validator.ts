import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const employeeCreateValidate = (createEmployeeSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = createEmployeeSchema.parse(req.body);
  next();
};

export const employeeUpdadteValidate = (employeePutSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  req.body = employeePutSchema.parse(req.body);
  next();
};