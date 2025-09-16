import pool from "../../config/database.js";

export const findAll = async (pageSize, offset) => {
  const query = "SELECT * FROM DELTHA.EMPRESAS LIMIT $1 OFFSET $2;";
  const values = [pageSize, offset];
  const companies = await pool.query(query, values);
  return companies;
};

export const findById = async (id) => {
  const query = "SELECT * FROM DELTHA.EMPRESAS WHERE CODIGO_EMPRESA = $1";
  const values = [id];
  const company = await pool.query(query, values);
  return company;
};

export const findByInscription = async (inscription) => {
  const query = "SELECT * FROM DELTHA.EMPRESAS WHERE INSCRICAO LIKE $1";
  const values = [inscription];
  const company = await pool.query(query, values);
  return company;
};

export const create = async (companyData) => {
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
  `;
  const company = await pool.query(query, values);
  return company;
};
