import { Router } from "express";
import * as companyController from "@modules/companies/controllers/company.controller";
import * as companyValidate from "@modules/companies/validators/company.validator";
import * as companySchemas from "@modules/companies/schemas/company.schema"

const companyRouter = Router();

companyRouter.get("/", companyController.findCompanies);
companyRouter.get("/:id", companyController.findCompany);
companyRouter.post("/", companyValidate.companyCreateValidate(companySchemas.companyCreateSchema), companyController.createCompany);
companyRouter.delete("/:id", companyController.deleteCompany);
companyRouter.put("/:id", companyValidate.companyUpdadteValidate(companySchemas.companyUpdateSchema), companyController.updateCompany);

export default companyRouter;