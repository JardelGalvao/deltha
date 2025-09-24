import { Router } from "express";
import * as companyController from "@controllers/company.controller";
import { companyCreateValidate, companyUpdadteValidate } from "@middlewares/validateCompany.middleware";
import { CompanySchema, CompanyPutSchema } from "../schema/company.schema";

const router = Router();

router.get("/", companyController.findCompanies);
router.get("/:id", companyController.findCompany);
router.post("/", companyCreateValidate(CompanySchema), companyController.createCompany);
router.put("/:id", companyUpdadteValidate(CompanyPutSchema), companyController.updateCompany);

export default router;
