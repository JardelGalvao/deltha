"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.findByTaxId = exports.findById = exports.findAll = void 0;
const database_js_1 = __importDefault(require("@/config/database.js"));
const findAll = async (pageSize, offset) => {
    const query = "SELECT * FROM DELTHA.COMPANIES LIMIT $1 OFFSET $2;";
    const values = [pageSize, offset];
    const companies = await database_js_1.default.query(query, values);
    return companies;
};
exports.findAll = findAll;
const findById = async (id) => {
    const query = "SELECT * FROM DELTHA.COMPANIES WHERE CODIGO_EMPRESA = $1";
    const values = [id];
    const company = await database_js_1.default.query(query, values);
    return company;
};
exports.findById = findById;
const findByTaxId = async (tax_id) => {
    const query = "SELECT * FROM DELTHA.COMPANIES WHERE TAX_ID LIKE $1";
    const values = [tax_id];
    const company = await database_js_1.default.query(query, values);
    console.log(company);
    return company;
};
exports.findByTaxId = findByTaxId;
const create = async (companyData) => {
    const values = Object.values(companyData);
    const query = `
    INSERT INTO DELTHA.COMPANIES (TAX_ID_TYPE, TAX_ID, CORPORATE_NAME, NAME, ADDRESS, ADDRESS_NUMBER, ADDRESS_COMPLEMENT, POSTAL_CODE, NEIGHBORHOOD, MUNICIPALITY_CODE, AREA_CODE, PHONE, EMAIL) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING COMPANY_CODE, TAX_ID, CORPORATE_NAME;
  `;
    const company = await database_js_1.default.query(query, values);
    return company;
};
exports.create = create;
const update = async (companyData) => {
    const fields = Object.keys(companyData);
    const values = Object.values(companyData);
    const setClauses = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
    const query = `UPDATE DELTHA.COMPANIES SET ${setClauses} WHERE COMPANY_ID = $${fields.length + 1} RETURNING *`;
    const params = [...values, 16];
    const result = await database_js_1.default.query(query, params);
    return result.rows[0];
};
exports.update = update;
