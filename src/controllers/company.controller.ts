import { Request, Response, NextFunction } from "express";
import * as companyService from "@services/company.service";

export const findCompanies = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const companies = await companyService.findAllCompanies(page);
    res.json(companies);
  } catch (error) {
    next(error);
  };
};

export const findCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const company = await companyService.findCompany(parseInt(id));
    res.json(company);
  } catch (error) {
    next(error);
  }
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companyData = req.body;
    const company = await companyService.createCompany(companyData);
    res.json(company);
  } catch (error) {
    next(error);
  };
};

export const updateCompany = async (req: Request, res: Response) => {
  const companyData = req.body;
  const { id } = req.params;
  
  await companyService.updateCompany(companyData, parseInt(id));
  res.json(companyData);
};

export const deleteCompany = async(req: Request, res: Response) => {
  const { id } = req.params;
  await companyService.deleteCompany(parseInt(id));
  res.json({
    "Message" : "Sucess!"
  });
}