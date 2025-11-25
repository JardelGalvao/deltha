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

export const findById = async (id: number) => {
  const query = `
    SELECT *
    FROM DELTHA.POSITIONS
    WHERE POSITION_CODE = $1
    ORDER BY POSITION_CODE
  `.trim();

  const values = [id];

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const update = async (positionData: UpdatePositionDto, id: number) => {
  const keys = Object.keys(positionData);
  let values = Object.values(positionData);

  const setColumns = keys.map((value, index) => `${value} = $${index + 1}`);
  
  const query = `
    UPDATE DELTHA.POSITIONS
    SET ${setColumns}
    WHERE POSITION_CODE = $${keys.length + 1}
    RETURNING *;
  `.trim();

  values = [...values, id];

  const queryResult = await pool.query(query, values);

  return queryResult.rows;
};