import { Router } from "express";
import * as companyController from "../controllers/company.controller.js";
import { companyValidate } from "../middlewares/validateCompany.middleware.js";
import { companySchema } from "../schema/company.schema.js";

const router = Router();

router.get("/", companyController.findCompanies);
router.get("/:id", companyController.findCompany);
router.post("/", companyValidate(companySchema), companyController.createCompany);
router.put("/", companyValidate(companySchema), companyController.updateCompany);

export default router;
