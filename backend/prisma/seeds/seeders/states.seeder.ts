import { PrismaClient } from "@prisma/client";
import { BRAZILIAN_STATES } from "../data/states.data";
    
export const seedStates = async (prismaClient: PrismaClient) => {    
  await prismaClient.states.deleteMany();
    
  console.log('Seeding states...');    
  const states = [];  
  
  for (let i = 0; i < 10; i++) {    
    const state = await prismaClient.states.create({    
      data: {    
        state_id: BRAZILIAN_STATES[i].state_id,   
        name: BRAZILIAN_STATES[i].name,  
        abbreviation: BRAZILIAN_STATES[i].abbreviation, 
      },    
    });    
    states.push(state);    
  }  
  console.log('Seeding completed!');  
  return states;  
};