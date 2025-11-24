import * as positioRepository from "@modules/positions/repositories/position.repository";
import HttpError from "@shared/errors/HttpError";

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
    throw new HttpError("Company not found.", 404);
  }

  return position;
}