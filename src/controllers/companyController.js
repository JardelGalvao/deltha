import { getCompanies, createCompany } from "../services/companyService.js";

export const getCompaniesController = async (req, res, next) => {
  try {
    const companies = await getCompanies();
    res.json(companies);
  } catch (err) {
    next(err);
  };
};

export const createCompanyController = async (req, res, next) => {
  try {
    const companyData = req.body;
    const company = await createCompany(companyData);
    res.json(company);
  } catch (err) {
    next(err);
  };
};
