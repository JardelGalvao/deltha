import * as companyRepository from '../src/repository/company.repository';
import { CompanyUpdate, Company } from '../src/schema/company.schema'

describe('CompanyRepository', () => {
  
  describe('Create', () => {
    it('Should create a new company', async () => {
      const companyData : Company = {
        tax_id_type : 1,
        tax_id : "58913211000103",
        corporate_name : "Company test",
        name : "Example",
        address : "Example St",
        address_number : 459,
        address_complement : "Suite 789",
        postal_code : "12345678",
        neighborhood : "Example Neighborhood",
        municipality_code : 3,
        area_code : "123",
        phone : "1234567890",
        email : "example@example.com"
      };
      const result = await companyRepository.create(companyData);

      expect(result.rows[0]).toHaveProperty('company_code');
      expect(result.rows[0].tax_id).toBe(companyData.tax_id);
      expect(result.rows[0].corporate_name).toBe(companyData.corporate_name);
    });
  });

  describe('FindById', () => {
    it('Should return company when found', async () => {
      const companyData : Company = {
        tax_id_type : 1,
        tax_id : "58913211000103",
        corporate_name : "Company test",
      }

      const result = await companyRepository.create(companyData);
      const company = await companyRepository.findById(result.rows[0].company_code);
      
      expect(company.rows[0]).toHaveProperty('company_code');
      expect(company.rows[0].tax_id).toBe(companyData.tax_id);
      expect(company.rows[0].corporate_name).toBe(companyData.corporate_name);
    })
  });

  describe('Update', () => {
    it('Should update the company data', async () => {
      const companyData: Company = {
        tax_id_type : 1,
        tax_id : "58913211000103",
        corporate_name : "Company test",
      }

      const result = await companyRepository.create(companyData);

      const updatedData: CompanyUpdate = {
        corporate_name : "New corporate name",
      };

      const updatedCompany = await companyRepository.update(updatedData, result.rows[0].company_code);
      expect(updatedCompany.rows[0].corporate_name).toBe(updatedData.corporate_name);
    })
  })

  describe('Delete', () => {
    it('Should delete the company', async () => {
       const companyData: Company = {
        tax_id_type : 1,
        tax_id : "58913211000103",
        corporate_name : "Company test",
      }

      const result = await companyRepository.create(companyData);
      const deletedCompany = await companyRepository.remove(result.rows[0].company_code)
      
      expect(deletedCompany.rowCount).toBe(1);
    })
  })
});

