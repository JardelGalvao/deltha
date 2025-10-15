import pool from "@/config/connection"
import { Company, CompanyUpdate } from "@schema/company.schema.js";
import { QueryResult } from "pg";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.COMPANIES ORDER BY COMPANY_CODE LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const companies = await pool.query(query, values);
  
  return companies;
};

export const findById = async (id: number) => {
  const query = "SELECT * FROM DELTHA.COMPANIES WHERE COMPANY_CODE = $1";
  const values = [id];
  const queryResult: QueryResult = await pool.query(query, values);
  return queryResult;
};

export const findByTaxId = async (tax_id: string) => {
  const query = "SELECT * FROM DELTHA.COMPANIES WHERE TAX_ID LIKE $1";
  const values = [tax_id];
  const queryResult: QueryResult = await pool.query(query, values);
  return queryResult;
};

export const create = async (companyData: Company) => {
  const values = Object.values(companyData);
  const fields = Object.keys(companyData);
  const setColumns = fields.map((field) => `${field}`).join(", ");
  const setValues = fields.map((value, index) => `$${index + 1}`).join(", ");
  const query = `
    INSERT INTO DELTHA.COMPANIES (${setColumns}) 
    VALUES(${setValues})
    RETURNING COMPANY_CODE, TAX_ID, CORPORATE_NAME;
  `;
  const queryResult: QueryResult = await pool.query(query, values);
  return queryResult;
};

export const update = async (companyData: CompanyUpdate, id: number) => {
  const fields = Object.keys(companyData);
  const values = Object.values(companyData);

  if (fields.length === 0) {
    throw new Error("No fields to update");
  }

  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const query = `UPDATE DELTHA.COMPANIES SET ${setClauses} WHERE COMPANY_CODE = ${id} RETURNING *`;

  const queryResult: QueryResult = await pool.query(query, values);
  return queryResult;
};

export const remove = async(id: number) => {
  const query = `DELETE FROM DELTHA.COMPANIES WHERE COMPANY_CODE = $1`;
  const queryResult: QueryResult = await pool.query(query, [id]);
  return queryResult;
};