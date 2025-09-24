import * as companyRepository from "@repository/company.repository";
import * as municipalityRepository from "@repository/municipalities.repository"
import HttpError  from "@errors/HttpError";
import { Company } from "@schema/company.schema";

export const findAllCompanies = async (page: number = 1) => {
  // 1. Pagination Calculation
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const companies = await companyRepository.findAll(pageSize, offset);

  return companies.rows;
};

export const findCompany = async (id: number) => {
  // Searching company by id
  const company = await companyRepository.findById(id);

  if (company.rowCount === 0) {
    throw new HttpError ("Company not found.", 404);
  }

  return company.rows[0];
};

export const createCompany = async (companyData: Company) => {
  const { tax_id, municipality_code } = companyData;

  // Verify if a company with the TaxId already exists
  const existingCompany = await companyRepository.findByTaxId(tax_id);
  if (existingCompany.rows.length > 0) {
    throw new HttpError("There is already a company registered with this inscription.", 409);
  }

  // Verify if the municipality_code is valid
  if (municipality_code) {
    const municipality = await municipalityRepository.findById(municipality_code);
    if (municipality.rowCount === 0) {
      throw new HttpError(`There is no Municipality for the code ${municipality_code}.`, 400);
    }
  }

  // Create the company
  const newCompany = await companyRepository.create(companyData);
  return newCompany.rows[0];
};

export const updateCompany = async (companyData: Company, id: number) => {

  await companyRepository.update(companyData, id);
  
};
