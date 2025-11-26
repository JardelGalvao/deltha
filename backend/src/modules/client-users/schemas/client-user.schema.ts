import { z } from "zod";
  
export const clientUserBaseSchema = z.object({  
  client_user_code: z  
    .number()  
    .int()  
    .positive(),  
  client_code: z  
    .number()  
    .int()  
    .positive(),  
  name: z  
    .string()  
    .min(1)  
    .max(255),  
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
    client_user_code: true,  
    created_at: true,  
    updated_at: true,  
  })  
  .extend({  
    is_active: z.boolean().optional().default(true),  
    password: clientUserBaseSchema.shape.password,  
  });
  
// For updating a client user (all fields optional except client_user_code)  
export const clientUserUpdateSchema = clientUserBaseSchema  
  .partial()  
  .omit({  
    client_user_code: true,  
    created_at: true,  
    updated_at: true,  
  })  
  .extend({  
    password: clientUserBaseSchema.shape.password.optional(),  
  });
  
// Type inference  
export type ClientUser = z.infer<typeof clientUserBaseSchema>;  
export type CreateClientUserDto = z.infer<typeof clientUserCreateSchema>;  
export type UpdateClientUserDto = z.infer<typeof clientUserUpdateSchema>;  