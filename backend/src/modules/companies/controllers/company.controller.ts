import { Request, Response, NextFunction } from "express";
import * as companyService from "@modules/companies/services/company.service";

export const findCompanies = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    const companies = await companyService.findAllCompanies(page);
    res.json(companies);
  } catch (error) {
    next(error);
  };
};