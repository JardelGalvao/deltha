import * as positioRepository from "@modules/positions/repositories/position.repository";

export const findAllPositions = async (page: number = 1) => {
  const pageNumber = Math.max(page, 1);
  const pageSize = 10;
  const offset = (pageNumber - 1) * pageSize;

  const positions = await positioRepository.findAll(pageSize, offset);

  return positions;
};