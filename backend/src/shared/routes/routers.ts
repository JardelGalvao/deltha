import { Router } from 'express';
import companyRouter from "@modules/companies/routes";
import employeeRouter from "@modules/employees/routes";
import departmentRouter from "@modules/departments/routes";
import positionRouter from '@modules/positions/routes';

const router = Router();

router.use("/companies", companyRouter);
router.use("/employees", employeeRouter);
router.use("/departments", departmentRouter);
router.use("/positions", positionRouter);

export default router;