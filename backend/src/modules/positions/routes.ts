import { Router } from "express";
import * as positionController from "@modules/positions/controllers/position.controller";
import * as positionValidate from "@modules/positions/validators/position.validator";
import * as positionSchema from "@modules/positions/schemas/position.schema";

export const positionRouter = Router();

positionRouter.get("/", positionController.findPositions);
positionRouter.get("/:id", positionController.findPosition);
positionRouter.post("/", positionValidate.createPositionValidate(positionSchema.positionCreateSchema), positionController.createPosition);
positionRouter.put("/:id", positionValidate.updatePositionValidate(positionSchema.positionUpdateSchema), positionController.updatePosition);
positionRouter.delete("/:id", positionController.deletePosition);

export default positionRouter;