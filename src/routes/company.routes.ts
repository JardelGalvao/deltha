import { Router } from "express";
import * as companyController from "@controllers/company.controller";
import { companyValidate } from "@middlewares/validateCompany.middleware";
import { CompanySchema } from "../schema/company.schema";

const router = Router();

router.get("/", companyController.findCompanies);
router.get("/:id", companyController.findCompany);
router.post("/", companyValidate(CompanySchema), companyController.createCompany);
router.put("/", companyValidate(CompanySchema), companyController.updateCompany);

export default router;
