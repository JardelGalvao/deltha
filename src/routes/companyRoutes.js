import { Router } from "express";
import { getCompaniesController } from "../controllers/companyController.js";

const router = Router();

router.get('/', getCompaniesController);

export default router;