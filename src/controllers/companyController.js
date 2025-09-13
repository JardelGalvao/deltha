import { getCompaniesService, createCompanyService } from "../services/companyService.js";

export const getCompaniesController = async (req, res, next) => {
  try {
    const companies = await getCompaniesService();
    res.json(companies);
  } catch (err) {
    next(err);
  };
};

export const createCompanyController = async (req, res, next) => {
  try {
    const companyData = req.body;
    const company = await createCompanyService(companyData);
    res.json(company);
  } catch (err) {
    next(err);
  };
};
