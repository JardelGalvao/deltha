import * as companyRepository from "@repository/company.repository";
import HttpError  from "@errors/HttpError";
import { Company } from "@schema/company.schema";

export const finAllCompanies = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;
  const companies = await companyRepository.findAll(pageSize, offset);
  return companies.rows;
};

export const findCompany = async (id: number) => {
  const company = await companyRepository.findById(id);

  if (company.rowCount === 0) {
    throw new HttpError ("Company not found.", 400);
  }

  return company.rows;
};

export const createCompany = async (companyData: Company) => {
  const companyTaxId = companyData.tax_id;
  const municipalitiesCode = companyData.municipality_code;
  const companyByTaxId = await companyRepository.findByTaxId(companyTaxId);

  if (companyByTaxId.rows.length > 0) {
    throw new HttpError ("There is already a company registered with this inscription.", 409);
  }

  const company = await companyRepository.create(companyData);
  return company.rows;
};

export const updateCompany = async (companyData: Company) => {
  await companyRepository.update(companyData);
};
