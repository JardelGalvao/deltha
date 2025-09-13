import { Router } from "express";
import * as companyRoutes from "../controllers/company.controller.js";
import { companyValidate } from "../middlewares/validateCompanyMiddleware.js";
import { companySchema } from "../schema/company.schema.js";

const router = Router();

router.get("/", companyRoutes.findCompanies);
router.get("/", companyRoutes.findCompany);
router.post("/", companyValidate(companySchema), companyRoutes.createCompany);

export default router;
