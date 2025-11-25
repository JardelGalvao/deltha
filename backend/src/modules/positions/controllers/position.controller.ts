import * as positionService from "@modules/positions/services/position.service";
import HttpError from "@shared/errors/HttpError";
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

export const findPosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const positionId = Number(id);

    if (!Number.isInteger(positionId) || positionId <= 0) {  
      throw new HttpError("Invalid position code.", 400);  
    }
    
    const position = await positionService.findPosition(positionId);

    res.status(200).json(position);
  } catch (error) {
    next(error);
  }
};

export const createPosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqBody = req.body;

    if (!reqBody || Object.keys(reqBody).length === 0) {
      throw new HttpError("No create data provided.", 400);  
    }

    const createdPosition = await positionService.createPosition(reqBody);

    res.status(201).json(createdPosition);
  } catch (error) {
    next(error);
  }
};

export const updatePosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqBody = req.body;

    if (!reqBody || Object.keys(reqBody).length === 0) {
      throw new HttpError("No update data provided.", 400);  
    }
     
    const { id } = req.params;
    const positionId = Number(id);

    if (!Number.isInteger(positionId) || positionId <= 0) {
      throw new HttpError("Invalid position code.", 400);  
    }

    const updatedPosition = await positionService.updatePosition(reqBody, positionId);
    
    res.status(200).json(updatedPosition);
  } catch (error) {
    next(error);
  }
};

export const deletePosition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const positionId = Number(id);

    if (!Number.isInteger(positionId) || positionId <= 0) {  
      throw new HttpError("Invalid position code.", 400);  
    }

    await positionService.deletePosition(positionId);

    res.status(200).json({
      message: "success!" 
    });
  } catch (error) {
    next(error);
  }
};