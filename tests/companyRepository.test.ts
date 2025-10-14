import * as companyRepository from '../src/repository/company.repository';

describe('CompanyRepository', () => {
  describe('Create', () => {
    it('Should create a new company', async () => {
      const companyData = {
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
      expect(result).toHaveProperty('company_code');
      expect(result.tax_id).toBe(companyData.tax_id);
      expect(result.corporate_name).toBe(companyData.corporate_name);
    });
  });

  describe('findById', () => {
    it('Should return company when found', async () => {
      const companyData = {
        tax_id_type : 1,
        tax_id : "58913211000103",
        corporate_name : "Company test",
      }

      const result = await companyRepository.create(companyData);
      const company = await companyRepository.findById(result.company_code);
      
      expect(company).toHaveProperty('company_code');
      expect(company.tax_id).toBe(companyData.tax_id);
      expect(company.corporate_name).toBe(companyData.corporate_name);
    })
  });
});

