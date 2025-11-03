import { Router } from 'express';
import companyRouter from "@modules/companies/routes";
import employeeRouter from "@modules/employees/routes";

const router = Router();

router.use("/company", companyRouter);
router.use("/employee", employeeRouter);

export default router;