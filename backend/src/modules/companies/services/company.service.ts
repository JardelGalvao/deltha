import * as companyRepository from "@modules/companies/repositories/company.repository";
import { CreateCompanyDto, CompanyUpdateDto } from "@modules/companies/schemas/company.schema";
import HttpError from "@shared/errors/HttpError";
import { validTaxId } from "@modules/companies/validators/tax-id.validator";
import * as municipalities from "@modules/localization/repositories/municipalities.repository"

// Find All companies max 10 pages
export const findAllCompanies = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const companies = await companyRepository.findAll(pageSize, offset);

  return companies;
};

// Find a Company by ID
export const findCompany = async (id: number) => {
  const company = await companyRepository.findById(id);

  if (company.length === 0) {
    throw new HttpError("Company not found.", 404);
  }

  return company;
};

// Create Company
export const createCompany = async (companyData: CreateCompanyDto) => {
  const { tax_id, municipality_code } = companyData;
  
  if(!validTaxId(tax_id)){
    throw new HttpError("Invalid tax_id.", 422);
  }

  // Verify if a company with the TaxId already exists
  const existingCompany = await companyRepository.findByTaxId(tax_id);
  if (existingCompany.length > 0) {
    throw new HttpError('There is already a company with this tax id.', 400);
  }

  // Verify if the municipality_code is valid
  if (municipality_code) {
    const municipality = await municipalities.findById(municipality_code);
    if (municipality.length === 0) {
      throw new HttpError(`Municipality not found.`, 404);
    }
  }

  // Create the company
  const newCompany = await companyRepository.create(companyData);
  
  return newCompany;
};

// Update Company
export const updateCompany = async (companyData: CompanyUpdateDto, id: number) => {
  const { tax_id_type, tax_id, municipality_code } = companyData;

  // Verify if the company exists
  const companyById = await companyRepository.findById(id);

  if (companyById.length === 0){
    throw new HttpError("Company not found.", 404);
  }

  // Verify if tax_id exists and if it's valid
  if (tax_id && !validTaxId(tax_id!)){
    throw new HttpError("Invalid tax_id.", 422);
  }
  
  // Verify if the tax_id is the same or not of the current company
  if (tax_id){
    const existingCompany = await companyRepository.findByTaxId(String(tax_id));
    if (existingCompany.length !== 0 && existingCompany[0].company_code !== id) {
      throw new HttpError(`There is already a company with this tax id.`, 400);
    }
  }

  // Verify if Both tax_id_type and tax_id was provided
  if (tax_id_type && !tax_id){
    throw new HttpError("Both tax_id_type and tax_id must be provided together.", 409);
  }
  
  // Verify if the municipality_code is valid
  if (municipality_code) {
    const municipality = await municipalities.findById(municipality_code);
    if (municipality.length === 0) {
      throw new HttpError(`Municipality not found.`, 404);
    }
  }

  const updatedCompany = await companyRepository.update(companyData, id);
  
  return updatedCompany;
};

// Delete company
export const deleteCompany = async (id: number) => {
  const company = await companyRepository.findById(id);

  if (!company) {
    throw new HttpError ("Company not found.", 404);
  }

  await companyRepository.remove(id);
};