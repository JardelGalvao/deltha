import * as departmentSchemas from "@modules/departments/schemas/department.schema";
import { NextFunction, Request, Response } from "express";


export const departmentCreateValidate = (createDepartmentSchema: typeof departmentSchemas.departmentCreateSchema) => (req: Request, res: Response, next: NextFunction) => {
    createDepartmentSchema.parse(req.body);
    next();
};

export const departmentUpdateValidate = (updateDepartmentSchema: typeof departmentSchemas.departmentUpdateSchema) => (req: Request, res: Response, next: NextFunction) => {
    updateDepartmentSchema.parse(req.body);
    next();
};