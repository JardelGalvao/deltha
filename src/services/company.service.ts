import * as companyRepository from "@repository/company.repository";
import * as municipalityRepository from "@repository/municipalities.repository"
import HttpError  from "@errors/HttpError";
import { Company, CompanyUpdate } from "@schema/company.schema";

// Find All companies max 10 pages
export const findAllCompanies = async (page: number = 1) => {
  // 1. Pagination Calculation
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const companies = await companyRepository.findAll(pageSize, offset);

  return companies;
};

// Find a Company by ID
export const findCompany = async (id: number) => {
  // Searching company by id
  const company = await companyRepository.findById(id);

  if (company.rowCount === 0) {
    throw new HttpError ("Company not found.", 404);
  }

  return company;
};

// Create Company
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
  return newCompany;
};

// Update Company
export const updateCompany = async (companyData: CompanyUpdate, id: number) => {
  const { tax_id_type, tax_id, municipality_code } = companyData;

  if (!tax_id_type && tax_id || tax_id_type && !tax_id){
    throw new HttpError("Both tax_id_type and tax_id must be provided together.", 409);
  }

  if(tax_id){
    // Verify if a company with the TaxId already exists
    const existingCompany = await companyRepository.findByTaxId(tax_id);

    if (existingCompany.rows.length > 0) {
      throw new HttpError("There is already a company registered with this inscription.", 409);
    }
  }
  
  // Verify if the municipality_code is valid
  if (municipality_code) {
    const municipality = await municipalityRepository.findById(municipality_code);
    if (municipality.rowCount === 0) {
      throw new HttpError(`There is no Municipality for the code ${municipality_code}.`, 400);
    }
  }

  await companyRepository.update(companyData, id);
  
};

export const deleteCompany = async (id: number) => {
  // Searching company by id
  const company = await companyRepository.findById(id);

  if (company.rowCount === 0) {
    throw new HttpError ("Company not found.", 404);
  }

  await companyRepository.remove(id);
}