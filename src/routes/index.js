import { Router } from "express";
import companyRoutes from "./companyRoutes.js";

const router = Router();

router.use('/company', companyRoutes);

export default router;