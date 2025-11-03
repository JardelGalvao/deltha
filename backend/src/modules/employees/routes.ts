import { Router } from "express";
import * as employeeControllers from "@modules/employees/controllers/employee.controller";
import * as employeeValidators from "@modules/employees/validators/employee.validator";

const employeeRouter = Router();

employeeRouter.get("/", employeeControllers.findEmployees);

export default employeeRouter;