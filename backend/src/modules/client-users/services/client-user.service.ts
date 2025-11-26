import * as clientUserRepository from "@modules/client-users/repositories/client-user.repository";
import * as clientRepository from "@modules/clients/repositories/client.repository";
import HttpError from "@shared/errors/HttpError";
import { CreateClientUserDto, UpdateClientUserDto } from "@modules/client-users/schemas/client-user.schema";

// Find All client users max 10 pages
export const findAllClientUsers = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const clientUsers = await clientUserRepository.findAll(pageSize, offset);

  return clientUsers;
};

// Find a Client User by ID
export const findClientUser = async (id: number) => {
  const clientUser = await clientUserRepository.findById(id);

  if (clientUser.length === 0) {
    throw new HttpError("Client user not found.", 404);
  }

  return clientUser;
};

// Create Client User
export const createClientUser = async (clientUserData: CreateClientUserDto) => {
  const { client_code } = clientUserData;

  // Verify if the client exists
  const client = await clientRepository.findById(client_code);
  if (client.length === 0) {
    throw new HttpError("Client not found.", 404);
  }

  // Create the client user
  const newClientUser = await clientUserRepository.create(clientUserData);
  
  return newClientUser;
};

// Update Client User
export const updateClientUser = async (clientUserData: UpdateClientUserDto, id: number) => {
  // Verify if the client user exists
  const clientUserById = await clientUserRepository.findById(id);

  if (clientUserById.length === 0) {
    throw new HttpError("Client user not found.", 404);
  }

  // Verify if client_code is being updated and if it exists
  if (clientUserData.client_code) {
    const client = await clientRepository.findById(clientUserData.client_code);
    if (client.length === 0) {
      throw new HttpError("Client not found.", 404);
    }
  }

  const updatedClientUser = await clientUserRepository.update(clientUserData, id);
  
  return updatedClientUser;
};

// Delete Client User
export const deleteClientUser = async (id: number) => {
  const clientUser = await clientUserRepository.findById(id);

  if (clientUser.length === 0) {
    throw new HttpError("Client user not found.", 404);
  }

  await clientUserRepository.remove(id);
};

