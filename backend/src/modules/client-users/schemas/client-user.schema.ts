import { z } from "zod";
  
export const clientUserBaseSchema = z.object({  
  client_user_id: z  
    .number()  
    .int()  
    .positive(),  
  client_id: z  
    .number()  
    .int()  
    .positive(),  
  first_name: z  
    .string()  
    .min(1)  
    .max(100, "First name must be at most 100 characters."),  
  last_name: z  
    .string()  
    .min(1)  
    .max(100, "First name must be at most 100 characters."),  
  email: z  
    .string()  
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')  
    .max(255),   
  password: z  
    .string()  
    .min(8, "Password must be at least 8 characters long")  
    .max(255),  
  is_active: z  
    .boolean()  
    .default(true),  
  created_at: z  
    .date(),  
  updated_at: z  
    .date()  
});
  
// For creating a new client user (without auto-generated fields)  
export const clientUserCreateSchema = clientUserBaseSchema  
  .strict()  
  .omit({  
    client_user_id: true,  
    created_at: true,  
    updated_at: true,  
  });
  
// For updating a client user (all fields optional except client_user_id)  
export const clientUserUpdateSchema = clientUserBaseSchema  
  .partial()  
  .omit({  
    client_user_id: true,  
    created_at: true,  
    updated_at: true,  
  });
  
// Type inference  
export type ClientUser = z.infer<typeof clientUserBaseSchema>;  
export type CreateClientUserDto = z.infer<typeof clientUserCreateSchema>;  
export type UpdateClientUserDto = z.infer<typeof clientUserUpdateSchema>;  