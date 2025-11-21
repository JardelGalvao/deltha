import pool from "@shared/database/connection"
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.DEPARTMENTS ORDER BY DEPARTMENT_CODE LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const departments: QueryResult = await pool.query(query, values);
  
  return departments;
};

export const findById = async (id: number) => {
  const query = "SELECT * FROM DELTHA.DEPARTMENTS WHERE DEPARTMENT_CODE = $1";
  const values = [id];
  const result: QueryResult = await pool.query(query, values);
  return result;
};