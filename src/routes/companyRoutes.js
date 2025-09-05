import { Router } from "express";
import { getCompaniesController, createCompanyController } from "../controllers/companyController.js";

const router = Router();

router.get("/", getCompaniesController);
router.post("/", createCompanyController);

export default router;
