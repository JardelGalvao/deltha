import pool from "../../config/database.js";

export const getCompanies = async () => {
  const companies = await pool.query("SELECT * FROM deltha.organizations;");
  return companies.rows;
};

export const createCompany = async (companyData) => {
  const tipo_inscricao = companyData.tipo_inscricao
  const inscricao = companyData.inscricao
  const razao_social = companyData.razao_social
  const nome = companyData.nome
  const endereco = companyData.endereco
  const numero_endereco = companyData.numero_endereco
  const complemento_endereco = companyData.complemento_endereco
  const cep = companyData.cep
  const bairro = companyData.bairro
  const codigo_municipio = companyData.codigo_municipio
  const ddd = companyData.ddd
  const telefone = companyData.telefone
  const email = companyData.email
  
  // const company = await pool.query("INSERT INTO deltha.organizations (org_id, name, city_id) VALUES (13, 'Apple', 1) RETURNING *;");
  // return company.rows[0];
};
