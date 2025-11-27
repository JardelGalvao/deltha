import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from '@faker-js/faker'; 

export const seedClientsUsers = async (prismaClient: PrismaClient) => {    
  await prismaClient.clientUsers.deleteMany();
    
  console.log('Seeding clients users...');    
  const clients_users = [];  
  let client_id = 1;
  
  for (let i = 0; i < 6; i++) { 
    if (client_id > 3)  {
      client_id = 1
    }   

    const client_user = await prismaClient.clientUsers.create({    
      data: {
        client_user_id: i + 1,    
        client_id: client_id,
        first_name: fakerPT_BR.person.firstName(),
        last_name:  fakerPT_BR.person.lastName(),
        password_hash: fakerPT_BR.internet.password(),
        email: fakerPT_BR.internet.email(),
        is_active: fakerPT_BR.datatype.boolean(1),
      },    
    });    
    clients_users.push(client_user);
    client_id += 1;   
  }  
  console.log('Seeding completed!');  
  return clients_users;  
};