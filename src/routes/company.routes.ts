import { Router } from "express";
import * as companyController from "@controllers/company.controller";
import { companyCreateValidate, companyUpdadteValidate } from "@middlewares/validateCompany.middleware";
import { CompanySchema, CompanyUpdateSchema } from "../schema/company.schema";

const router = Router();

router.get("/", companyController.findCompanies);
router.get("/:id", companyController.findCompany);
router.post("/", companyCreateValidate(CompanySchema), companyController.createCompany);
router.put("/:id", companyUpdadteValidate(CompanyUpdateSchema), companyController.updateCompany);
router.delete("/:id", companyController.deleteCompany);

export default router;
