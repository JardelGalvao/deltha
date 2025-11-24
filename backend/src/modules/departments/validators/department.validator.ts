import { z } from "zod";
import { NextFunction, Request, Response } from "express";


export const departmentCreateValidate = (createDepartmentSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    createDepartmentSchema.parse(req.body);
    next();
};

export const departmentUpdateValidate = (updateDepartmentSchema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    updateDepartmentSchema.parse(req.body);
    next();
};