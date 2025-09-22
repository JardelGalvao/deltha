import { CompanySchema } from "@schema/company.schema";
import { NextFunction, Request, Response } from "express";
import z from "zod";

export const companyValidate = (companySchema: typeof CompanySchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = companySchema.safeParse(req.body);

  if (!result.success) {
    const formErrors  =  z.flattenError(result.error);
    return res.status(400).json({ errors: formErrors });
  }

  next();
};
