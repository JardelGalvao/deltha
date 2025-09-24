import { z } from "zod";

// Creeate company Schema

export const CompanySchema = z.object({
  tax_id_type: z.number().int().refine((val) => val === 1 || val === 2, {
    message: "The Tax ID type must be 1 or 2",
  }),
  tax_id: z.string(),
  corporate_name: z.string().max(255, "Corporate name must be at most 255 characters"),
  name: z.string().max(255, "Name must be at most 255 characters").optional(),
  address: z.string().max(40, "Address must be at most 40 characters").optional(),
  address_number: z.number().min(1).max(999999, "Address number must be at most 999999 characters").optional(),
  address_complement: z.string().max(30, "Address complement must be at most 30 characters").optional(),
  postal_code: z.string().max(8, "Postal code must be at most 8 characters").optional(),
  neighborhood: z.string().max(60, "Neighborhood must be at most 60 characters").optional(),
  municipality_code: z.number().optional(),
  area_code: z.string().min(3, "Phone area code must be 3 characters").max(3, "Phone area code must be 3 characters").optional(),
  phone: z.string().max(14, "Phone must be at most 14 characters").optional(),
  email: z.string().email("Invalid email format").optional(),
}).refine((data) => {
  if (data.tax_id_type === 1) {
    return data.tax_id.length === 14;
  } else if (data.tax_id_type === 2) {
    return data.tax_id.length === 11;
  }
  return false;
}, {
  message: "Invalid registration length for the provided registration type",
  path: ["tax_id"],
});

export type Company = z.infer<typeof CompanySchema>;

// Update company schema

export const CompanyPutSchema = CompanySchema.partial().omit({
  tax_id_type: true,
  tax_id: true,
});

export type CompanyPut = z.infer<typeof CompanyPutSchema>;