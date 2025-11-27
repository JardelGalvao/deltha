import { PrismaClient } from "@prisma/client";  
import { seedStates } from './seeders/states.seeder';
import { seedMunicipalities } from "./seeders/municipalities.seeder";
import { seedClients } from "./seeders/clients.seeder";
import { seedClientsUsers } from "./seeders/clients_users_seeder";
import { seedCompanies } from "./seeders/companies.seeder";
import { seedDepartments } from "./seeders/departments_seeder";
import { seedPositions } from "./seeders/positions.seeder";

export const prisma = new PrismaClient();

async function runSeeders() {  
  try {  
    await seedStates(prisma); 
    await seedMunicipalities(prisma); 
    await seedClients(prisma);
    await seedClientsUsers(prisma);
    await seedCompanies(prisma);
    await seedDepartments(prisma);
    await seedPositions(prisma);

  } catch (e) {  
    console.error(e);  
  } finally {  
    await prisma.$disconnect();  
  }  
}
  
runSeeders();  