import { Router } from "express";
import * as clientUserController from "@modules/client-users/controllers/client-user.controller";
import * as clientUserValidator from "@modules/client-users/validators/client-user.validator";
import * as clientUserSchema from "@modules/client-users/schemas/client-user.schema";

const clientUserRouter = Router();

clientUserRouter.get("/", clientUserController.findClientUsers);
clientUserRouter.get("/:id", clientUserController.findClientUser);
clientUserRouter.post("/", clientUserValidator.clientUserCreateValidate(clientUserSchema.clientUserCreateSchema), clientUserController.createClientUser);
clientUserRouter.put("/:id", clientUserValidator.clientUserUpdateValidate(clientUserSchema.clientUserUpdateSchema), clientUserController.updateClientUser);
clientUserRouter.delete("/:id", clientUserController.deleteClientUser);

export default clientUserRouter;

