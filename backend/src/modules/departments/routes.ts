import { Router } from "express";
import * as departmentController from "@modules/departments/controllers/department.controller";

const departmentRouter = Router();

departmentRouter.get("/", departmentController.findDepartments);
departmentRouter.get("/:id", departmentController.findDepartment);

export default departmentRouter;