import * as employeeRepository from "@modules/employees/repositories/employee.repository";

// Find All companies max 10 pages
export const findAllEmployees = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;
  const companies = await employeeRepository.findAll(pageSize, offset);

  return companies.rows;
};