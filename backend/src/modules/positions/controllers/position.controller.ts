import * as positionService from "@modules/positions/services/position.service";
import { Request, Response, NextFunction } from "express";

export const findPositions = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;

    const positions = await positionService.findAllPositions(page);

    res.status(200).json(positions);
  } catch (error) {
      next(error);
  }
};