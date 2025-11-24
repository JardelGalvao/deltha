import { Router } from "express";
import * as departmentController from "@modules/departments/controllers/department.controller";
import * as departmentValidator from  "@modules/departments/validators/department.validator";
import * as departmentSchema from "@modules/departments/schemas/department.schema";

const departmentRouter = Router();

departmentRouter.get("/", departmentController.findDepartments);
departmentRouter.get("/:id", departmentController.findDepartment);
departmentRouter.post("/", departmentValidator.departmentCreateValidate(departmentSchema.departmentCreateSchema), departmentController.createDepartment);

export default departmentRouter;