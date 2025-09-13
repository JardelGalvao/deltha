import * as companyRepository from "../repository/company.repository.js";

export const finAllCompanies = async () => {
  const companies = await companyRepository.findAll();
  return companies.rows;
};

export const findCompany = async (id) => {
  const company = await companyRepository.findById(id);
  return company.rows;
};

export const createCompany = async (companyData) => {
  const company = await companyRepository.create(companyData);
  return company.rows;
};
