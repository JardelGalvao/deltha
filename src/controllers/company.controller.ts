import { Request, Response, NextFunction } from "express";
import * as companyService from "@services/company.service";

export const findCompanies = async (req: Request<{ page: string }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const companies = await companyService.finAllCompanies(parseInt(page));
    res.json(companies);
  } catch (err) {
    next(err);
  };
};

export const findCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const company = await companyService.findCompany(parseInt(id));
    res.json(company);
  } catch (err) {
    next(err);
  }
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companyData = req.body;
    const company = await companyService.createCompany(companyData);
    res.json(company);
  } catch (err) {
    next(err);
  };
};

export const updateCompany = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Chegou no controller")
  const companyData = req.body;
  await companyService.updateCompany(companyData);
  res.json(companyData);
}
