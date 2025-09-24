import pool from "@config/database";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.MUNICIPALITIES LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const municipalities = await pool.query(query, values);
  return municipalities;
};

export const findById = async (id: number) => {
  const query = "SELECT * FROM DELTHA.MUNICIPALITIES WHERE MUNICIPALITY_CODE = $1";
  const values = [id];
  const municipalities = await pool.query(query, values);
  return municipalities;
};
