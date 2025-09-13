import { getCompanyRepository, createCompanyRepository } from "../repository/companyRepository.js";

export const getCompaniesService = async () => {
  const companies = await getCompanyRepository();
  return companies.rows;
};

export const createCompanyService = async (companyData) => {
  const company = await createCompanyRepository(companyData);
  return company.rows;
};
