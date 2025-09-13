import * as companyService from "../services/company.service.js";

export const findCompanies = async (req, res, next) => {
  try {
    const companies = await companyService.finAllCompanies();
    res.json(companies);
  } catch (err) {
    next(err);
  };
};

export const findCompany = async (req, res, next) => {
  try {
    const id = req.params.id;
    const company = await companyService.findCompany(id);
    res.json(company);
  } catch (err) {
    next(err);
  }
};

export const createCompany = async (req, res, next) => {
  try {
    const companyData = req.body;
    const company = await companyService.createCompany(companyData);
    res.json(company);
  } catch (err) {
    next(err);
  };
};
