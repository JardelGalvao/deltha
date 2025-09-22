"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = void 0;
const zod_1 = require("zod");
exports.CompanySchema = zod_1.z.object({
    tax_id_type: zod_1.z.number().int().refine((val) => val === 1 || val === 2, {
        message: "The Tax ID type must be 1 or 2",
    }),
    tax_id: zod_1.z.string(),
    corporate_name: zod_1.z.string().max(255, "Corporate name must be at most 255 characters"),
    name: zod_1.z.string().max(255, "Name must be at most 255 characters").optional(),
    address: zod_1.z.string().max(40, "Address must be at most 40 characters").optional(),
    address_number: zod_1.z.number().optional(),
    address_complement: zod_1.z.string().max(30, "Address complement must be at most 30 characters").optional(),
    postal_code: zod_1.z.string().max(8, "Postal code must be at most 8 characters").optional(),
    neighborhood: zod_1.z.string().max(60, "Neighborhood must be at most 60 characters").optional(),
    municipality_code: zod_1.z.number().optional(),
    area_code: zod_1.z.string().max(3, "Phone area code must be at most 3 characters").optional(),
    phone: zod_1.z.string().max(14, "Phone must be at most 14 characters").optional(),
    email: zod_1.z.string().email("Invalid email format").optional(),
}).refine((data) => {
    if (data.tax_id_type === 1) {
        return data.tax_id.length === 14;
    }
    else if (data.tax_id_type === 2) {
        return data.tax_id.length === 11;
    }
    return false;
}, {
    message: "Invalid registration length for the provided registration type",
    path: ["registration"],
});
