import { Request, Response, NextFunction } from "express";
import HttpError from "@shared/errors/HttpError";
import * as departmentService from "@modules/departments/services/department.service";

export const findDepartments = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const departments = await departmentService.findAllDepartments(page);
    res.json(departments);
  } catch (error) {
    next(error);
  }
};

export const findDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await departmentService.findDepartment(parseInt(id));
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const departmentData = req.body;
    const result = await departmentService.createDepartment(departmentData);
    res.json(result);
  }catch (error) {
    next(error);
  }
};