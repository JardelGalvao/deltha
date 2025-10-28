import { Router } from "express";
import * as companyController from "@modules/companies/controllers/company.controller";

const comapnyRouter = Router();

comapnyRouter.get("/", companyController.findCompanies);

export default comapnyRouter;