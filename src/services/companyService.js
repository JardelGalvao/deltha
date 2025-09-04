import pool from "../../config/database.js";

export const getCompanies = async () => {
    const companies = await pool.query('SELECT * FROM deltha.organizations;');
    console.log(companies)
}