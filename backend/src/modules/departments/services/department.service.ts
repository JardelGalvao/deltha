import * as departmentRepository from "@modules/departments/repositories/department.repository";
import HttpError from "@shared/errors/HttpError";
import { CreateDepartmentDto, UpdateDepartmentDto } from "@modules/departments/schemas/department.schema";
import * as departmentRepositoy from "@modules/departments/repositories/department.repository";
import * as companyRepository from "@modules/companies/repositories/company.repository";

// Find All departments max 10 pages
export const findAllDepartments = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;
  
  const companies = await departmentRepository.findAll(pageSize, offset);

  return companies.rows;
};

// Find a department by ID
export const findDepartment = async (id: number) => {
  const department = await departmentRepository.findById(id);

  if (department.length === 0) {
    throw new HttpError("Department not found.", 404);
  }

  return department;
};

// Create Department
export const createDepartment = async (departmentData: CreateDepartmentDto) => {
  const { company_id } = departmentData;
  
  const company = await companyRepository.findById(company_id);

  if(company.length === 0){
    throw new HttpError("Company not found.", 404);
  }

  const department = departmentRepositoy.create(departmentData);
  return department;
};

// Update Department
export const updateDepartment = async (departmentData: UpdateDepartmentDto, id: number) => {
  const { company_id } = departmentData;

  const fields = Object.keys(departmentData);

  if (fields.length === 0) {
    throw new HttpError("No fields to update", 400);
  }

  if (company_id) {
    // Verify if the company exists
    const companyById = await companyRepository.findById(company_id);
    if (companyById.length === 0){
      throw new HttpError("Company not found.", 404);
    }
  }

  await departmentRepository.update(departmentData, id)
};

// Delete Department
export const deleteDepartment = async (id: number) => {
  const departament = await departmentRepository.findById(id);

  if (departament.length === 0){
    throw new HttpError("Department not found.", 404);
  }

  await departmentRepository.remove(id);
}