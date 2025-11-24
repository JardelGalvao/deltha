import pool from "@shared/database/connection";
import { CreatePositionDto, UpdatePositionDto } from "@modules/positions/schemas/position.schema";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.POSITIONS
    ORDER BY POSITION_CODE LIMIT $1 OFFSET $2;
  `.trim();

  const values = [pageSize, offset];
  const queryResult: QueryResult = await pool.query(query, values);
  
  return queryResult.rows;
};