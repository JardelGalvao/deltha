import pool from "@shared/database/connection";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.EMPLOYEES ORDER BY EMPLOYEE_CODE LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const companies = await pool.query(query, values);
  
  return companies;
};

export const findById = async (id: number) => {
  const values = [id];
  const query = "SELECT * FROM DELTHA.EMPLOYEES WHERE EMPLOYEES.EMPLOYEE_CODE =  $1 ORDER BY EMPLOYEE_CODE;";
  const employee = await pool.query(query, values);

  return employee
}