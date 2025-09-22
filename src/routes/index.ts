import { Router } from "express";
import companyRoutes from "@routes/company.routes"

const router = Router();

router.use("/company", companyRoutes);

export default router;
