import pool from "@shared/database/connection";
import { QueryResult } from "pg";
import { CreateDepartmentDto } from "@modules/departments/schemas/department.schema";

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.DEPARTMENTS
    ORDER BY DEPARTMENT_CODE LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult: QueryResult = await pool.query(query, values);
  
  return queryResult;
};

export const findById = async (id: number) => {
  const query = `
    SELECT *
    FROM DELTHA.DEPARTMENTS
    WHERE DEPARTMENT_CODE = $1
  `.trim();

  const values = [id];
  const result: QueryResult = await pool.query(query, values);

  return result;
};

export const create = async (departmentData: CreateDepartmentDto) => {
  const values = Object.values(departmentData);
  const fields = Object.keys(departmentData);

  const setColumns = fields.map((field) => `${field}`).join(", ");
  const setValues = fields.map((value, index) => `$${index + 1}`).join(", ");

  const query = `
    INSERT INTO DELTHA.DEPARTMENTS (${setColumns}) 
    VALUES(${setValues})
    RETURNING *;
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);
  
  return queryResult.rows;
};
