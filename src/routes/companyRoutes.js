import { Router } from "express";
import { getCompaniesController, createCompanyController } from "../controllers/companyController.js";
import { companyValidate } from "../middlewares/companyValidation.js";
import { companySchema } from "../schema/companySchema.js";

const router = Router();

router.get("/", getCompaniesController);
router.post("/", companyValidate(companySchema), createCompanyController);

export default router;
