import { Request, Response, NextFunction } from "express";
import * as employeeService from "@modules/employees/services/employee.service";

export const findEmployees = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const result = await employeeService.findAllEmployees(page);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const findEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await employeeService.findEmployee(parseInt(id))
    res.json(result);
  } catch(error) {
    next(error);
  }
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employeeData = req.body;
    const result = await employeeService.createEmployee(employeeData);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
