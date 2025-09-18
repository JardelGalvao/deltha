import * as companyService from "../services/company.service.js";

export const findCompanies = async (req, res, next) => {
  try {
    const page = req.params.page;
    const companies = await companyService.finAllCompanies(page);
    res.json(companies);
  } catch (err) {
    next(err);
  };
};

export const findCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
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

export const updateCompany = async (req, res, bext) => {
  console.log("Chegou no controller")
  const companyData = req.body;
  await companyService.updateCompany(companyData);
  res.json(companyData);
}
