import pool from "@shared/database/connection";
import { QueryResult } from "pg";
import * as departmentSchemas from "@modules/departments/schemas/department.schema";

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.DEPARTMENTS
    ORDER BY DEPARTMENT_ID LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult: QueryResult = await pool.query(query, values);
  
  return queryResult;
};

export const findById = async (id: number) => {
  const query = `
    SELECT *
    FROM DELTHA.DEPARTMENTS
    WHERE DEPARTMENT_ID = $1
  `.trim();

  const values = [id];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const create = async (departmentData: departmentSchemas.CreateDepartmentDto) => {
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

export const update = async (departmentData: departmentSchemas.UpdateDepartmentDto, id: number) => {
  const fields = Object.keys(departmentData);
  let values = Object.values(departmentData);

  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const setIdClause = `$${fields.length + 1}`;

  values = [...values, id];

  const query = `
    UPDATE DELTHA.DEPARTMENTS
    SET ${setClauses}
    WHERE DEPARTMENT_ID = ${setIdClause}
    RETURNING *
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const remove = async (id: number) => {
  const values = [id];

  const query = `
    DELETE
    FROM DELTHA.DEPARTMENTS
    WHERE DEPARTMENT_ID = $1
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
}