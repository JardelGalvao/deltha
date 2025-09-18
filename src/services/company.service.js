import * as companyRepository from "../repository/company.repository.js";

export const finAllCompanies = async (page = 1) => {
  page = Math.max(parseInt(page), 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;
  const companies = await companyRepository.findAll(pageSize, offset);
  return companies.rows;
};

export const findCompany = async (id) => {
  const company = await companyRepository.findById(id);

  if (company.rowCount === 0) {
    const error = new Error("Company not found.");
    error.statusCode = 400;
    throw error;
  }
  return company.rows;
};

export const createCompany = async (companyData) => {
  const companyTaxId = companyData.tax_id;
  const companyByTaxId = await companyRepository.findByTaxId(companyTaxId);
  if (companyByTaxId.rows.length > 0) {
    const error = new Error("There is already a company registered with this inscription.");
    error.statusCode = 409;
    throw error;
  }

  const company = await companyRepository.create(companyData);
  return company.rows;
};

export const updateCompany = async (companyData) => {
  await companyRepository.update(companyData);
};
