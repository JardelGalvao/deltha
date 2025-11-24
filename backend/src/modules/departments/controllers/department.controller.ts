import { Request, Response, NextFunction } from "express";
import HttpError from "@shared/errors/HttpError";
import * as departmentService from "@modules/departments/services/department.service";

export const findDepartments = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;

    const departments = await departmentService.findAllDepartments(page);

     res.status(200).json(departments);
  } catch (error) {
    next(error);
  }
};

export const findDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const departmentId = Number(id);

    if (!Number.isInteger(departmentId) || departmentId <= 0) {  
      throw new HttpError("Invalid department code.", 400);  
    }

    const result = await departmentService.findDepartment(parseInt(id));
    
     res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const departmentData = req.body;

    const result = await departmentService.createDepartment(departmentData);

     res.status(201).json(result);
  }catch (error) {
    next(error);
  }
};

export const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const departmentData = req.body;
    const { id } = req.params;
    const departmentId = Number(id);

    if (!Number.isInteger(departmentId) || departmentId <= 0) {  
      throw new HttpError("Invalid department code.", 400);  
    }

    await departmentService.updateDepartment(departmentData, parseInt(id));

     res.status(200).json(departmentData);
  } catch (error) {
    next(error);
  }
};

export const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const departmentId = Number(id);

    if (!Number.isInteger(departmentId) || departmentId <= 0) {  
      throw new HttpError("Invalid department code.", 400);  
    }

    await departmentService.deleteDepartment(parseInt(id));

    res.status(200).json({
      message: "success!" 
    });
  } catch (error) {
    next(error);
  }

}