import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker";

export const seedDepartments = async (prismaClient: PrismaClient) => {
  await prismaClient.departments.deleteMany();

  console.log('Seeding departments...');  
  const departments = [];
  let client_id = 1;

  for(let i = 0; i < 9; i++){
    if (client_id > 3)  {
      client_id = 1
    }
    const department = await prismaClient.departments.create({
      data: {
        department_id: i + 1,
        client_id: client_id,
        company_id: i + 1,
        name: fakerPT_BR.company.name(),
        description: fakerPT_BR.company.name(),
      }
    })
    client_id += 1;
    departments.push(department);
  }
  console.log('Seeding completed!');  
  return departments;  
};