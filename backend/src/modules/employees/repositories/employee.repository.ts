import pool from "@shared/database/connection";
import { CreateEmployeeDto, UpdateEmployeeDto } from "@modules/employees/schemas/employee.schema";
import { QueryResult } from "pg";
import { queryObjects } from "v8";

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.EMPLOYEES
    ORDER BY EMPLOYEE_CODE LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findById = async (id: number) => {
  const values = [id];

  const query =`
    SELECT *
    FROM DELTHA.EMPLOYEES
    WHERE EMPLOYEE_CODE =  $1 
    ORDER BY EMPLOYEE_CODE;
    `.trim();

  const queryResult = await pool.query(query, values);

  return queryResult.rows
};

export const findByNationalId = async (nationalId: string) => {
  const query = `
    SELECT *
    FROM DELTHA.EMPLOYEES
    WHERE NATIONAL_ID LIKE $1
    `.trim();

  const values = [nationalId];
  const queryResult : QueryResult = await pool.query(query, values);

  return queryResult.rows;
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
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);
  
  return queryResult.rows;
};

export const update = async (employeeData: UpdateEmployeeDto, id: number) => {
  const fields = Object.keys(employeeData);
  let values = Object.values(employeeData);

  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const setIdClause = `$${fields.length + 1}`;

  values = [...values, id];

  const query = `
    UPDATE DELTHA.EMPLOYEES
    SET ${setClauses}
    WHERE EMPLOYEE_CODE = ${setIdClause}
    RETURNING *;
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const remove = async (id: number) => {
  const values = [id]

  const query = `
    DELETE
    FROM DELTHA.EMPLOYEES
    WHERE EMPLOYEE_CODE = $1
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};