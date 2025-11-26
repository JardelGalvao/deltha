import { Request, Response, NextFunction } from "express";
import * as clientService from "@modules/clients/services/client.service";
import HttpError from "@shared/errors/HttpError";

export const findClients = async (req: Request<{ page: number }>, res: Response, next: NextFunction) => {
  try {
    const page = req.params.page;
    
    const clients = await clientService.findAllClients(page);

    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

export const findClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const clientId = Number(id);

    if (!Number.isInteger(clientId) || clientId <= 0) {  
      throw new HttpError("Invalid client code.", 400);  
    }
    
    const client = await clientService.findClient(clientId);

    res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};

export const createClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('SSSSSSSSSSSSSSSSS')
    const clientData = req.body;
    
    const client = await clientService.createClient(clientData);

    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
};

export const updateClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clientData = req.body;
    const { id } = req.params;
    const clientId = Number(id);

    if (!Number.isInteger(clientId) || clientId <= 0) {  
      throw new HttpError("Invalid client code.", 400);  
    }

    const updatedClient = await clientService.updateClient(clientData, clientId);
  
    res.status(200).json(updatedClient);
  } catch (error) {
    next(error);
  }
};

export const deleteClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const clientId = Number(id);

    if (!Number.isInteger(clientId) || clientId <= 0) {  
      throw new HttpError("Invalid client code.", 400);  
    }

    await clientService.deleteClient(clientId);
    
    res.status(200).json({
      message: "success!" 
    });
  } catch (error) {
    next(error);
  }
};

