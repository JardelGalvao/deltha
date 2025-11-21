import pool from "@shared/database/connection";
import { CreateEmployeeDto } from "../schemas/employee.schema";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.EMPLOYEES ORDER BY EMPLOYEE_CODE LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const companies = await pool.query(query, values);
  
  return companies;
};

export const findById = async (id: number) => {
  const values = [id];
  const query = "SELECT * FROM DELTHA.EMPLOYEES WHERE EMPLOYEE_CODE =  $1 ORDER BY EMPLOYEE_CODE;";
  const employee = await pool.query(query, values);

  return employee
};

export const findByNationalId = async (nationalId: string) => {
  const query = "SELECT * FROM DELTHA.EMPLOYEES WHERE NATIONAL_ID LIKE $1";
  const values = [nationalId];
  const queryResult: QueryResult = await pool.query(query, values);
  return queryResult;
};

export const create = async (employeeData: CreateEmployeeDto) => {
  const values = Object.values(employeeData);
  const fields = Object.keys(employeeData);
  const setColumns = fields.map((field) => `${field}`).join(", ");
  const setValues = fields.map((value, index) => `$${index + 1}`).join(", ");
  const query = `
    INSERT INTO DELTHA.EMPLOYEES (${setColumns}) 
    VALUES(${setValues})
    RETURNING *;
  `;
  const queryResult: QueryResult = await pool.query(query, values);
  return queryResult;
};

