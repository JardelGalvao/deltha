import pool from "@shared/database/connection";
import { CreateClientUserDto, UpdateClientUserDto } from "@modules/client-users/schemas/client-user.schema";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.CLIENT_USERS
    ORDER BY CLIENT_USER_CODE LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findById = async (id: number) => {
  const query = `
    SELECT *
    FROM DELTHA.CLIENT_USERS
    WHERE CLIENT_USER_CODE = $1
    `.trim();

  const values = [id];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findByClientId = async (clientId: number) => {
  const query = `
    SELECT *
    FROM DELTHA.CLIENT_USERS
    WHERE CLIENT_CODE = $1
    `.trim();

  const values = [clientId];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const create = async (clientUserData: CreateClientUserDto) => {
  const fields = Object.keys(clientUserData);
  const values = Object.values(clientUserData);

  const setColumns = fields.map((field) => `${field}`).join(", ");
  const setValues = fields.map((value, index) => `$${index + 1}`).join(", ");

  const query = `
    INSERT INTO DELTHA.CLIENT_USERS (${setColumns}) 
    VALUES(${setValues})
    RETURNING *;
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const update = async (clientUserData: UpdateClientUserDto, id: number) => {
  const fields = Object.keys(clientUserData);
  let values = Object.values(clientUserData);

  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const setIdClause = `$${fields.length + 1}`;

  values = [...values, id];

  const query = `
    UPDATE DELTHA.CLIENT_USERS
    SET ${setClauses}
    WHERE CLIENT_USER_CODE = ${setIdClause}
    RETURNING *
    `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const remove = async (id: number) => {
  const query = `
    DELETE FROM DELTHA.CLIENT_USERS
    WHERE CLIENT_USER_CODE = $1
    `.trim();

  const queryResult: QueryResult = await pool.query(query, [id]);
  
  return queryResult.rows;
};

