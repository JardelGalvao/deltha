import { Request, Response, NextFunction } from "express";
import * as companyService from "@modules/companies/services/company.service";
import { companyCreateSchema } from "@modules/companies/schemas/company.schema";

export const findCompanies = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const result = await companyService.findAllCompanies(page);
    res.json(result);
  } catch (error) {
    next(error);
  };
};

export const findCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await companyService.findCompany(parseInt(id));
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const companyData = req.body;
    companyCreateSchema.parse(req.body);
    const result = await companyService.createCompany(companyData);
    res.json(result);
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
    "message" : "sucess!"
  });
};