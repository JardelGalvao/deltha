import * as companyRepository from "../repository/company.repository.js";

export const finAllCompanies = async (page=1) => {
  page = Math.max(parseInt(page), 1);
  const pageSize = 10;
  const offset = (page - 1) * pageSize;
  const companies = await companyRepository.findAll(pageSize, offset);
  return companies.rows;
};

export const findCompany = async (id) => {
  const company = await companyRepository.findById(id);

  if(company.rowCount == 0){
    const error = new Error("Empresa não encontrada.");
    error.statusCode = 400;
    throw error; 
  }

  return company.rows;
};

export const createCompany = async (companyData) => {
  const company = await companyRepository.create(companyData);
  return company.rows;
};
