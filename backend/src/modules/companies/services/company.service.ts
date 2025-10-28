import * as companyRepository from "@modules/companies/repositories/company.repository";

// Find All companies max 10 pages
export const findAllCompanies = async (page: number = 1) => {
  // 1. Pagination Calculation
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const companies = await companyRepository.findAll(pageSize, offset);

  return companies.rows;
};
