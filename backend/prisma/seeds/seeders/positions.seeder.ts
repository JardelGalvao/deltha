import { PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker";

export const seedPositions = async (prismaClient: PrismaClient) => {
  await prismaClient.positions.deleteMany();
  await prismaClient.companies
  const positions = [];
  let client_id = 1;

  for(let i = 0; i < 9; i++) {
    if (client_id === 3)  {
      client_id = 1
    }

    const position = await prismaClient.positions.create({
      data: {
        position_id: i + 1,
        client_id: client_id,
        company_id: i + 1,
        department_id: i + 1,
        name: fakerPT_BR.company.name(),
        description: fakerPT_BR.company.name(),
      }
    })
    client_id += 1;
    positions.push(position);
  }
  return positions;
}