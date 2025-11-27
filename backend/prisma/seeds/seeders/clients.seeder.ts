import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from '@faker-js/faker'; 

export const seedClients = async (prismaClient: PrismaClient) => {    
  await prismaClient.clients.deleteMany();
    
  console.log('Seeding clients...');    
  const clients = [];  
  
  for (let i = 0; i < 3; i++) {    
    const client = await prismaClient.clients.create({    
      data: {    
        client_id: i + 1,
        name: fakerPT_BR.person.fullName(),
        corporate_name: fakerPT_BR.person.fullName(),
        tax_id_type: 1,
        tax_id: fakerPT_BR.string.numeric(14),
        address: fakerPT_BR.location.street(),
        address_number: fakerPT_BR.string.numeric(5),
        postal_code: fakerPT_BR.string.numeric(5),
        neighborhood: fakerPT_BR.location.street(),
        area_code: fakerPT_BR.string.numeric(3),
        phone: fakerPT_BR.string.numeric(8),
        email: fakerPT_BR.internet.email(),
        is_active: fakerPT_BR.datatype.boolean(1),
        municipality_id: i + 1,
      },    
    });    
    clients.push(client);    
  }  
  console.log('Seeding completed!');  
  return clients;  
};