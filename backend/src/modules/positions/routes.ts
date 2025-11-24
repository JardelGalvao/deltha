import { Router } from "express";
import * as positionController from "@modules/positions/controllers/position.controller";

export const positionRouter = Router();

positionRouter.get('/', positionController.findPositions);
positionRouter.get('/:id', positionController.findPosition);

export default positionRouter;