import pool from "../../config/database.js";

export const getCompanies = async () => {
  const companies = await pool.query("SELECT * FROM deltha.organizations;");
  return companies.rows;
};

export const createCompany = async (companyData) => {
  const company = await pool.query("INSERT INTO deltha.organizations (org_id, name, city_id) VALUES (13, 'Apple', 1) RETURNING *;");
  return company.rows[0];
};
