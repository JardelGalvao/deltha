import pool from "@shared/database/connection";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.EMPLOYEES ORDER BY EMPLOYEE_CODE LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const companies = await pool.query(query, values);
  
  return companies;
};
