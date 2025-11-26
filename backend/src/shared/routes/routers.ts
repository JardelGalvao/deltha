import { Router } from 'express';
import companyRouter from "@modules/companies/routes";
import employeeRouter from "@modules/employees/routes";
import departmentRouter from "@modules/departments/routes";
import positionRouter from '@modules/positions/routes';
import clientRouter from "@modules/clients/routes";
import clientUserRouter from "@modules/client-users/routes";

const router = Router();

router.use("/companies", companyRouter);
router.use("/employees", employeeRouter);
router.use("/departments", departmentRouter);
router.use("/positions", positionRouter);
router.use("/clients", clientRouter);
router.use("/client-users", clientUserRouter);

export default router;