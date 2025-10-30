import { Router } from "express";
import * as companyController from "@modules/companies/controllers/company.controller";
import * as companyValidate from "@modules/companies/validators/company.validator";
import * as companySchemas from "@modules/companies/schemas/company.schema"

const comapnyRouter = Router();

comapnyRouter.get("/", companyController.findCompanies);
comapnyRouter.get("/:id", companyController.findCompany);
comapnyRouter.post("/", companyValidate.companyCreateValidate(companySchemas.companyCreateSchema), companyController.createCompany);
comapnyRouter.delete("/:id", companyController.deleteCompany);
comapnyRouter.put("/:id", companyValidate.companyUpdadteValidate(companySchemas.companyUpdateSchema), companyController.updateCompany);

export default comapnyRouter;