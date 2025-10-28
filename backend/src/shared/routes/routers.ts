import { Router } from 'express';
import comapnyRouter from "@modules/companies/routes";

const router = Router();

router.use("/company", comapnyRouter);

export default router;