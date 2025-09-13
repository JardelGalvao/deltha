import pool from "../../config/database.js";

export const getCompanyRepository = async () => {
  const query = "SELECT * FROM deltha.empresas;"
  const companies = await pool.query(query);
  return companies;
}

export const createCompanyRepository = async(companyData) => {
  const values = [
    companyData.tipo_inscricao,
    companyData.inscricao,
    companyData.razao_social,
    companyData.nome,
    companyData.endereco,
    companyData.numero_endereco,
    companyData.complemento_endereco,
    companyData.cep,
    companyData.bairro,
    companyData.codigo_municipio,
    companyData.ddd,
    companyData.telefone,
    companyData.email
  ];
  const query = `
    INSERT INTO DELTHA.EMPRESAS (TIPO_INSCRICAO, INSCRICAO, RAZAO_SOCIAL, NOME, ENDERECO, NUMERO_ENDERECO, COMPLEMENTO_ENDERECO, CEP, BAIRRO, CODIGO_MUNICIPIO, DDD, TELEFONE, EMAIL) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING CODIGO_EMPRESA, INSCRICAO, RAZAO_SOCIAL;
  `
  const company = await pool.query(query, values);
  return company;
}