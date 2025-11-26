import * as clientRepository from "@modules/clients/repositories/client.repository";
import HttpError from "@shared/errors/HttpError";
import { CreateClientDto, UpdateClientDto } from "@modules/clients/schemas/client.schema";

// Find All clients max 10 pages
export const findAllClients = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const clients = await clientRepository.findAll(pageSize, offset);

  return clients;
};

// Find a Client by ID
export const findClient = async (id: number) => {
  const client = await clientRepository.findById(id);

  if (client.length === 0) {
    throw new HttpError("Client not found.", 404);
  }

  return client;
};

// Create Client
export const createClient = async (clientData: CreateClientDto) => {
  // Create the client
  const newClient = await clientRepository.create(clientData);
  
  return newClient;
};

// Update Client
export const updateClient = async (clientData: UpdateClientDto, id: number) => {
  // Verify if the client exists
  const clientById = await clientRepository.findById(id);

  if (clientById.length === 0) {
    throw new HttpError("Client not found.", 404);
  }

  const updatedClient = await clientRepository.update(clientData, id);
  
  return updatedClient;
};

// Delete Client
export const deleteClient = async (id: number) => {
  const client = await clientRepository.findById(id);

  if (client.length === 0) {
    throw new HttpError("Client not found.", 404);
  }

  await clientRepository.remove(id);
};

