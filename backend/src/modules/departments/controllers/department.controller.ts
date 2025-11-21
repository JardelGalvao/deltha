import { Request, Response, NextFunction } from "express";
import * as departmentService from "@modules/departments/services/department.service";

export const findDepartments = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const departments = await departmentService.findAllDepartments(page);
    res.json(departments);
  } catch (error) {
    next(error);
  };
};