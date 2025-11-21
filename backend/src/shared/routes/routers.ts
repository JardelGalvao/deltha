import { Router } from 'express';
import companyRouter from "@modules/companies/routes";
import employeeRouter from "@modules/employees/routes";
import departmentRouter from "@modules/departments/routes";

const router = Router();

router.use("/companies", companyRouter);
router.use("/employees", employeeRouter);
router.use("/departmnets", departmentRouter);

export default router;