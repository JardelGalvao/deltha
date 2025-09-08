import { Router } from "express";
import { getCompaniesController, createCompanyController } from "../controllers/company.controller.js";
import { companyValidate } from "../middlewares/validateCompanyMiddleware.js";
import { companySchema } from "../schema/company.schema.js";

const router = Router();

router.get("/", getCompaniesController);
router.post("/", companyValidate(companySchema), createCompanyController);

export default router;
