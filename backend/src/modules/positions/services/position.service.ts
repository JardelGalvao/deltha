import * as positioRepository from "@modules/positions/repositories/position.repository";
import HttpError from "@shared/errors/HttpError";
import { UpdatePositionDto } from "../schemas/position.schema";

export const findAllPositions = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const positions = await positioRepository.findAll(pageSize, offset);

  return positions;
};

export const findPosition = async (id: number) => {
  const position = await positioRepository.findById(id);

  if (position.length === 0) {
    throw new HttpError("Position not found.", 404);
  }

  return position;
};

export const updatePosition = async (positionData: UpdatePositionDto, id: number) => {
  // Verify if position exists
  const position = await positioRepository.findById(id);

  if (position.length === 0) {
    throw new HttpError("Position not found.", 404);
  }

  const updatedPosition = await positioRepository.update(positionData, id);

  return updatedPosition;
};