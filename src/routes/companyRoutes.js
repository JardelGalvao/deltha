import { Router } from "express";
import * as companyRoutes from "../controllers/companyController.js";
import { companyValidate } from "../middlewares/validateCompanyMiddleware.js";
import { companySchema } from "../schema/companySchema.js";

const router = Router();

router.get("/", companyRoutes.findCompanies);
router.get("/:id", companyRoutes.findCompany);
router.post("/", companyValidate(companySchema), companyRoutes.createCompany);

export default router;
