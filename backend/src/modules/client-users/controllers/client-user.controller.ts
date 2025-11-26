import { Request, Response, NextFunction } from "express";
import * as clientUserService from "@modules/client-users/services/client-user.service";
import HttpError from "@shared/errors/HttpError";

export const findClientUsers = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    
    const clientUsers = await clientUserService.findAllClientUsers(page);

    res.status(200).json(clientUsers);
  } catch (error) {
    next(error);
  }
};

export const findClientUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const clientUserId = Number(id);

    if (!Number.isInteger(clientUserId) || clientUserId <= 0) {  
      throw new HttpError("Invalid client user code.", 400);  
    }
    
    const clientUser = await clientUserService.findClientUser(clientUserId);

    res.status(200).json(clientUser);
  } catch (error) {
    next(error);
  }
};

export const createClientUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clientUserData = req.body;

    const clientUser = await clientUserService.createClientUser(clientUserData);

    res.status(201).json(clientUser);
  } catch (error) {
    next(error);
  }
};

export const updateClientUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clientUserData = req.body;
    const { id } = req.params;
    const clientUserId = Number(id);

    if (!Number.isInteger(clientUserId) || clientUserId <= 0) {  
      throw new HttpError("Invalid client user code.", 400);  
    }

    const updatedClientUser = await clientUserService.updateClientUser(clientUserData, clientUserId);
  
    res.status(200).json(updatedClientUser);
  } catch (error) {
    next(error);
  }
};

export const deleteClientUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const clientUserId = Number(id);

    if (!Number.isInteger(clientUserId) || clientUserId <= 0) {  
      throw new HttpError("Invalid client user code.", 400);  
    }

    await clientUserService.deleteClientUser(clientUserId);
    
    res.status(200).json({
      message: "success!" 
    });
  } catch (error) {
    next(error);
  }
};

