import { Request, Response, NextFunction } from "express";
import * as employeeService from "@modules/employees/services/employee.service";
import { employeeCreateSchema } from "@modules/employees/schemas/employee.schema"; 

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

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employeeData = req.body;
    employeeCreateSchema.parse(req.body);
    const company = await employeeService.createEmployee(employeeData);
    res.json(company);
  } catch (error) {
    next(error);
  };
};
