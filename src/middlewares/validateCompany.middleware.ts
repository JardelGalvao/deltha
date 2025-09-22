import { CompanySchema } from "@schema/company.schema";
import { NextFunction, Request, Response } from "express";

export const companyValidate = (companySchema: typeof CompanySchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = companySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }

  next();
};
