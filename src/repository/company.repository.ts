import pool from "@/config/database"
import { Company } from "@schema/company.schema.js";

export const findAll = async (pageSize: number, offset: number) => {
  const query = "SELECT * FROM DELTHA.COMPANIES LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const companies = await pool.query(query, values);
  
  return companies;
};

export const findById = async (id: number) => {
  const query = "SELECT * FROM DELTHA.COMPANIES WHERE COMPANY_CODE = $1";
  const values = [id];
  const company = await pool.query(query, values);
  return company;
};

export const findByTaxId = async (tax_id: string) => {
  const query = "SELECT * FROM DELTHA.COMPANIES WHERE TAX_ID LIKE $1";
  const values = [tax_id];
  const company = await pool.query(query, values);
  return company;
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

  const company = await pool.query(query, values);
  return company;
};

export const update = async(companyData: Company, id: number) => {
  const fields = Object.keys(companyData);
  const values = Object.values(companyData);
  const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const query = `UPDATE DELTHA.COMPANIES SET ${setClauses} WHERE COMPANY_CODE = ${id} RETURNING *`;
  console.log(query)
  const params = [...values];
  const result = await pool.query(query, params);
  return result.rows[0];
};