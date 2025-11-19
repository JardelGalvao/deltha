import { Request, Response, NextFunction } from "express";
import * as employeeService from "@modules/employees/services/employee.service";

export const findEmployees = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const companies = await employeeService.findAllEmployees(page);
    res.json(companies);
  } catch (error) {
    next(error);
  };
};

export const findEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.findEmployee(parseInt(id))
    res.json(employee);
  } catch(error) {
    next(error);
  };
};
