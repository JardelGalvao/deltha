import pool from "@shared/database/connection"
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.DEPARTMENTS ORDER BY DEPARTMENT_CODE LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const departments = await pool.query(query, values);
  
  return departments;
};
