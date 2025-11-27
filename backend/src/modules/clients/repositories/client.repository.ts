import pool from "@shared/database/connection";
import { CreateClientDto, UpdateClientDto } from "@modules/clients/schemas/client.schema";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = `
    SELECT *
    FROM DELTHA.CLIENTS
    ORDER BY CLIENT_ID LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findById = async (id: number) => {
  const query = `
    SELECT *
    FROM DELTHA.CLIENTS
    WHERE CLIENT_ID = $1
    `.trim();

  const values = [id];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const create = async (clientData: CreateClientDto) => {
  const fields = Object.keys(clientData);
  const values = Object.values(clientData);

  const setColumns = fields.map((field) => `${field}`).join(", ");
  const setValues = fields.map((value, index) => `$${index + 1}`).join(", ");

  const query = `
    INSERT INTO DELTHA.CLIENTS (${setColumns}) 
    VALUES(${setValues})
    RETURNING *;
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const update = async (clientData: UpdateClientDto, id: number) => {
  const fields = Object.keys(clientData);
  let values: any[] = Object.values(clientData);

  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const setIdClause = `$${fields.length + 1}`;

  values = [...values, id];

  const query = `
    UPDATE DELTHA.CLIENTS
    SET ${setClauses}
    WHERE CLIENT_ID = ${setIdClause}
    RETURNING *
    `.trim();
  
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const remove = async (id: number) => {
  const query = `
    DELETE FROM DELTHA.CLIENTS
    WHERE CLIENT_ID = $1
    `.trim();

  const queryResult: QueryResult = await pool.query(query, [id]);
  
  return queryResult.rows;
};

