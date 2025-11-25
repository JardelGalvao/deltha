import * as positioRepository from "@modules/positions/repositories/position.repository";
import HttpError from "@shared/errors/HttpError";
import { CreatePositionDto, UpdatePositionDto } from "../schemas/position.schema";
import { CreateCompanyDto } from "@modules/companies/schemas/company.schema";
import * as departmentRepository from "@modules/departments/repositories/department.repository";
import * as companyRepository from "@modules/companies/repositories/company.repository";

export const findAllPositions = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const positions = await positioRepository.findAll(pageSize, offset);

  return positions;
};

export const findPosition = async (id: number) => {
  const position = await positioRepository.findById(id);

  if (position.length === 0) {
    throw new HttpError("Position not found.", 404);
  }

  return position;
};

export const createPosition = async (positionData: CreatePositionDto) => {
  const { company_code, department_code } = positionData;

  if (company_code && company_code > 0) {
    const company = await companyRepository.findById(company_code);
    if (company.length === 0) {
      throw new HttpError("Company not found.", 404);
    }
  }

  if (department_code && department_code > 0) {
    const department = await departmentRepository.findById(department_code);
    if (department.length === 0) {
      throw new HttpError("Department not found.", 404);
    }
  }

  const createdPosition = await positioRepository.create(positionData);

  return createdPosition;
};

export const updatePosition = async (positionData: UpdatePositionDto, id: number) => {
  // Verify if position exists
  const position = await positioRepository.findById(id);

  if (position.length === 0) {
    throw new HttpError("Position not found.", 404);
  }

  const { company_code, department_code } = positionData;

  if (company_code && company_code > 0) {
    const company = await companyRepository.findById(company_code);
    if (company.length === 0) {
      throw new HttpError("Company not found.", 404);
    }
  }

  if (department_code && department_code > 0) {
    const department = await departmentRepository.findById(1);
    if (department.length === 0) {
      throw new HttpError("Department not found.", 404);
    }
  }

  const updatedPosition = await positioRepository.update(positionData, id);

  return updatedPosition;
};

export const deletePosition = async (id: number) => {
  const position = await positioRepository.findById(id);

  if (position.length === 0){
    throw new HttpError("Position not found.", 404);
  }

  const deletedPosition = positioRepository.remove(id);
  
  return deletedPosition;
}