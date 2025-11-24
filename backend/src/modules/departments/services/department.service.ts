import * as departmentRepository from "@modules/departments/repositories/department.repository";
import HttpError from "@shared/errors/HttpError";
import { CreateDepartmentDto } from "@modules/departments/schemas/department.schema";
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
  const result = await departmentRepository.findById(id);

  if (result.rowCount === 0) {
    throw new HttpError("Department not found.", 404);
  }

  return result.rows;
};

// Create department
export const createDepartment = async (departmentData: CreateDepartmentDto) => {
  const { company_code } = departmentData;
  
  const company = await companyRepository.findById(company_code);

  if(company.length === 0){
    throw new HttpError(`There is not company with the company code ${company_code}.`, 409);
  }

  const department = departmentRepositoy.create(departmentData);
  return department;
}