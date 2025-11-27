import { PrismaClient } from "@prisma/client";
import { BRAZILIAN_MUNICIPALITIES } from "../data/municippalities.data";
import { fakerPT_BR } from '@faker-js/faker'; 

export const seedCompanies = async (prismaClient: PrismaClient) => {
  await prismaClient.companies.deleteMany();

  console.log('Seeding companies...');
  const companies = [];
  let client_id = 1;
  let tax_id_type = 0;
  let tax_id = ''

  for(let i = 0; i < 9; i++){
    if (client_id > 3)  {
        client_id = 1
    }

    if (i % 2 === 0) {
      tax_id_type = 1
      tax_id =  fakerPT_BR.string.numeric(14)
    } else {
      tax_id_type = 2
      tax_id =  fakerPT_BR.string.numeric(11)
    }
    
    const company = await prismaClient.companies.create({
        data: {
          company_id: i +  1,
          client_id: client_id,
          municipality_id: BRAZILIAN_MUNICIPALITIES[i].municipality_id,
          tax_id_type: tax_id_type,
          tax_id: tax_id,
          corporate_name: fakerPT_BR.company.name(),
          name: fakerPT_BR.company.name(),
          address: fakerPT_BR.location.street(),
          postal_code: fakerPT_BR.string.numeric(5),
          neighborhood: fakerPT_BR.location.street(),
          area_code: fakerPT_BR.string.numeric(3),
          phone: fakerPT_BR.string.numeric(8),
          email: fakerPT_BR.internet.email(),
        }
    })
    client_id += 1;
    companies.push(company); 
  }
  console.log('Seeding completed!');  
  return companies;
};