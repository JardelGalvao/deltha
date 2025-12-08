import { Request, Response, NextFunction } from "express";
import * as companyService from "@modules/companies/services/company.service";
import HttpError from "@shared/errors/HttpError";

export const findCompanies = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    
    const companies = await companyService.findAllCompanies(page);

    res.status(200).json(companies);
  } catch (error) {
    next(error);
  }
};


export const findCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const companyId = Number(id);

    if (!Number.isInteger(companyId) || companyId <= 0) {  
      throw new HttpError("Invalid company id.", 400);  
    }
    
    const company = await companyService.findCompany(companyId);

    res.status(200).json(company);
  } catch (error) {
    next(error);
  }
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companyData = req.body;

    const company = await companyService.createCompany(companyData);

    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

export const updateCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.body || Object.keys(req.body).length === 0) {
      throw new HttpError("No data to update.", 404);
    }

    const { id } = req.params;
    const companyId = parseInt(id, 10);

    if (!Number.isInteger(companyId) || companyId <= 0) {  
      throw new HttpError("Invalid company id.", 400);  
    }
    
    const companyData = req.body;
    const updatedCompany = await companyService.updateCompany(companyData, companyId);
  
    res.status(200).json(updatedCompany);

  } catch (error) {
    next(error);
  }
 
};

export const deleteCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const companyId = parseInt(id, 10);

    if (!Number.isInteger(companyId) || companyId <= 0) {  
      throw new HttpError("Invalid company id.", 400);  
    }

    await companyService.deleteCompany(companyId);
    
    res.status(200).json({
      message: "success!" 
    });
  } catch (error) {
    next(error);
  }
};
