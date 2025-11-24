import * as employeeRepository from "@modules/employees/repositories/employee.repository";
import HttpError from "@shared/errors/HttpError";
import { CreateEmployeeDto, Employee, UpdateEmployeeDto } from "../schemas/employee.schema";
import { validTaxId } from "@modules/companies/validators/tax-id.validator";
import * as municipalities from "@modules/localization/repositories/municipalities.repository";
import * as companyRepository from "@modules/companies/repositories/company.repository";

// Find All companies max 10 pages
export const findAllEmployees = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const employess = await employeeRepository.findAll(pageSize, offset);

  return employess;
};

export const findEmployee = async (id: number) => {
  const employee  = await employeeRepository.findById(id);

  if (employee.length === 0) {
    throw new HttpError("Employee not found.", 404);
  }

  return employee;
};

export const createEmployee = async (employeeData: CreateEmployeeDto) => {
  const { national_id, municipality_code, department_code, position_code } = employeeData;

  if(!validTaxId(national_id)){
    throw new HttpError("Invalid national_id.", 422);
  };
  
  // Verify if a Employee with the TaxId already exists
  const existingEmployee = await employeeRepository.findByNationalId(national_id);
  if (existingEmployee.length > 0) {
    throw new HttpError('There is already a employee registered with this national id.', 409);
  };

  // Verify if the municipality_code is valid
  if (municipality_code) {
    const municipality = await municipalities.findById(municipality_code);
    if (municipality.length === 0) {
      throw new HttpError(`Municipality not found.`, 404);
    };
  };

  // Create the Employee
  const employee = await employeeRepository.create(employeeData);
  return employee;
};

export const updateEmployee = async (employeeData: UpdateEmployeeDto, id: number) => {
  const { company_code } = employeeData;

  if (company_code) {
    const company = await companyRepository.findById(company_code);

    if (company.length === 0) {
      throw new HttpError("Company not found.", 404);
    }
  }

  const employee = await employeeRepository.findById(id);

  if (employee.length === 0) {
    throw new HttpError("Employee not found.", 404);
  }

  // Update employee
  const employeeUpdated = await employeeRepository.update(employeeData, id);

  return employeeUpdated;
};

export const deleteEmployee = async (id: number) => {
  const employee = await employeeRepository.findById(id);

  if (employee.length === 0) {
    throw new HttpError("Employee not found.", 404);
  }

  await employeeRepository.remove(id);
}