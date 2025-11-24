import pool from "@shared/database/connection"
import { CreateCompanyDto, CompanyUpdateDto } from "@modules/companies/schemas/company.schema";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {

  const query = `
    SELECT *
    FROM DELTHA.COMPANIES
    ORDER BY COMPANY_CODE LIMIT $1 OFFSET $2;
    `.trim();

  const values = [pageSize, offset];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findById = async (id: number) => {

  const query = `
    SELECT *
    FROM DELTHA.COMPANIES 
    WHERE COMPANY_CODE = $1
    `.trim();

  const values = [id];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const findByTaxId = async (tax_id: string) => {

  const query = `
    SELECT *
    FROM DELTHA.COMPANIES
    WHERE TAX_ID LIKE $1
    `.trim();

  const values = [tax_id];
  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const create = async (companyData: CreateCompanyDto) => {
  const fields = Object.keys(companyData);
  const values = Object.values(companyData);

  const setColumns = fields.map((field) => `${field}`).join(", ");
  const setValues = fields.map((value, index) => `$${index + 1}`).join(", ");

  const query = `
    INSERT INTO DELTHA.COMPANIES (${setColumns}) 
    VALUES(${setValues})
    RETURNING *;
  `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const update = async (companyData: CompanyUpdateDto, id: number) => {
  const fields = Object.keys(companyData);
  let values = Object.values(companyData);

  if (fields.length === 0) {
    throw new Error("No fields to update");
  };

  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const setIdClause = `$${fields.length + 1}`;

  values = [...values, id];

  const query = `
    UPDATE DELTHA.COMPANIES
    SET ${setClauses}
    WHERE COMPANY_CODE = ${setIdClause}
    RETURNING *
    `.trim();

  const queryResult: QueryResult = await pool.query(query, values);

  return queryResult.rows;
};

export const remove = async (id: number) => {
  if (!id || id <= 0) {  
    throw new Error("Invalid company ID");  
  }

  const query = `
    DELETE FROM DELTHA.COMPANIES
    WHERE COMPANY_CODE = $1
    `.trim();

  const queryResult: QueryResult = await pool.query(query, [id]);
  
  return queryResult.rows;
};