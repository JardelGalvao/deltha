import * as employeeRepository from "@modules/employees/repositories/employee.repository";
import HttpError from "@shared/errors/HttpError";
import { CreateEmployeeDto } from "../schemas/employee.schema";
import { validTaxId } from "@modules/companies/validators/tax-id.validator";
import * as municipalities from "@modules/localization/repositories/municipalities.repository"

// Find All companies max 10 pages
export const findAllEmployees = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;
  const companies = await employeeRepository.findAll(pageSize, offset);

  return companies.rows;
};

export const findEmployee = async (id: number) => {
  const employee = await employeeRepository.findById(id);

  if (employee.rowCount === 0) {
    throw new HttpError("Employee not found.", 404);
  }
  return employee.rows;
};

export const createEmployee = async (employeeData: CreateEmployeeDto) => {
  const { national_id, municipality_code, department_code, position_code } = employeeData;

  if(!validTaxId(national_id)){
    throw new HttpError("Invalid national_id.", 422);
  };
  
  // Verify if a Employee with the TaxId already exists
  const existingEmployee = await employeeRepository.findByNationalId(national_id);
  if (existingEmployee.rows.length > 0) {
    throw new HttpError('There is already a employee registered with this national id.', 409);
  };

  // Verify if the municipality_code is valid
  if (municipality_code) {
    const municipality = await municipalities.findById(municipality_code);
    if (municipality.rowCount === 0) {
      throw new HttpError(`There is no Municipality for the code ${municipality_code}.`, 400);
    };
  };

  // Create the Employee
  const newEmployee = await employeeRepository.create(employeeData);
  return newEmployee.rows;
}