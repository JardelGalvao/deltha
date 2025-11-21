import * as employeeDepartment from "@modules/departments/repositories/department.repository";

// Find All companies max 10 pages
export const findAllDepartments = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;
  const companies = await employeeDepartment.findAll(pageSize, offset);

  return companies.rows;
};