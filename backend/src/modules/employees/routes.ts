import { Router } from "express";
import * as employeeController from "@modules/employees/controllers/employee.controller";
import * as employeeValidator from "@modules/employees/validators/employee.validator";
import * as employeeSchema from "@modules/employees/schemas/employee.schema"
import { employeeCreateSchema } from "./schemas/employee.schema";

const employeeRouter = Router();

employeeRouter.get("/", employeeController.findEmployees);
employeeRouter.get("/:id", employeeController.findEmployee);
employeeRouter.post("/", employeeValidator.employeeCreateValidate(employeeSchema.employeeCreateSchema), employeeController.createEmployee);

export default employeeRouter;