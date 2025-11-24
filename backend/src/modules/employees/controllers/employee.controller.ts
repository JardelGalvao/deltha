import { Request, Response, NextFunction } from "express";
import * as employeeService from "@modules/employees/services/employee.service";
import HttpError from "@shared/errors/HttpError";

export const findEmployees = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;

    const result = await employeeService.findAllEmployees(page);

     res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const findEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const employeeId = Number(id);

    if (!Number.isInteger(employeeId) || employeeId <= 0) {  
      throw new HttpError("Invalid employee code.", 400);  
    }

    const result = await employeeService.findEmployee(parseInt(id))

     res.status(200).json(result);
  } catch(error) {
    next(error);
  }
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employeeData = req.body;

    const result = await employeeService.createEmployee(employeeData);
    
     res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
