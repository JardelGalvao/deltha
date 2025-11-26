import { Router } from "express";
import * as companyController from "@modules/companies/controllers/company.controller";
import * as companyValidate from "@modules/companies/validators/company.validator";
import * as companySchema from "@modules/companies/schemas/company.schema"

const companyRouter = Router();

companyRouter.get("/", companyController.findCompanies);
companyRouter.get("/:id", companyController.findCompany);
companyRouter.post("/", companyValidate.companyCreateValidate(companySchema.companyCreateSchema), companyController.createCompany);
companyRouter.put("/:id", companyValidate.companyUpdadteValidate(companySchema.companyUpdateSchema), companyController.updateCompany);
companyRouter.delete("/:id", companyController.deleteCompany);

export default companyRouter;