import { PrismaClient } from '@prisma/client';
import { BRAZILIAN_MUNICIPALITIES } from '../data/municippalities.data';

export const seedMunicipalities = async(prismaClient: PrismaClient) => {    
  await prismaClient.municipalities.deleteMany();
    
  console.log('Seeding municipalities...');    
  const municipalities = [];  
  
  for (let i = 0; i < 10; i++) {    
    const state = await prismaClient.municipalities.create({    
      data: {    
        municipality_id: BRAZILIAN_MUNICIPALITIES[i].municipality_id,   
        name: BRAZILIAN_MUNICIPALITIES[i].name,  
        state_id: BRAZILIAN_MUNICIPALITIES[i].state_id,
      },    
    });    
    municipalities.push(state);    
  }  
  console.log('Seeding completed!');  
  return municipalities;  
}