import pool from "@shared/database/connection"

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.MUNICIPALITIES LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findById = async (id: number) => {
  const query = `
    SELECT *
    FROM DELTHA.MUNICIPALITIES
    WHERE MUNICIPALITY_CODE = $1
    `.trim();

  const values = [id];
  const queryResult = await pool.query(query, values);

  return queryResult.rows;
};