import { Router } from "express";
import * as employeeControllers from "@modules/employees/controllers/employee.controller";
import * as employeeValidators from "@modules/employees/validators/employee.validator";
import * as employeeSchemas from "@modules/employees/schemas/employee.schema"
import { employeeCreateSchema } from "./schemas/employee.schema";

const employeeRouter = Router();

employeeRouter.get("/", employeeControllers.findEmployees);
employeeRouter.get("/:id", employeeControllers.findEmployee);
employeeRouter.post("/", employeeValidators.employeeCreateValidate(employeeSchemas.employeeCreateSchema), employeeControllers.createEmployee);

export default employeeRouter;