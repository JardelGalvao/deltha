import * as departmentRepository from "@modules/departments/repositories/department.repository";
import HttpError from "@shared/errors/HttpError";

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
