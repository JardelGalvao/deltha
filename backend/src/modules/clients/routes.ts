import { Router } from "express";
import * as clientController from "@modules/clients/controllers/client.controller";
import * as clientValidator from "@modules/clients/validators/client.validator";
import * as clientSchema from "@modules/clients/schemas/client.schema";

const clientRouter = Router();

clientRouter.get("/", clientController.findClients);
clientRouter.get("/:id", clientController.findClient);
clientRouter.post("/", clientValidator.clientCreateValidate(clientSchema.clientCreateSchema), clientController.createClient);
clientRouter.put("/:id", clientValidator.clientUpdateValidate(clientSchema.clientUpdateSchema), clientController.updateClient);
clientRouter.delete("/:id", clientController.deleteClient);

export default clientRouter;