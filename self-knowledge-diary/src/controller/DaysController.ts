import { getRepository } from 'typeorm';
import { Days } from '../entity/Days';
import { Request, Response } from 'express';

export const getDays = async (request: Request, response: Response) => {
  const days = await getRepository(Days).find();
  return response.json(days);
};

export const getDay = async (request: Request, response: Response) => {
  const { id } = request.params;
  const day = await getRepository(Days).findOne(id);
  return response.json(day);
};

export const saveDay = async (request: Request, response: Response) => {
  const days = await getRepository(Days).save(request.body);
  response.json(days);
};

export const updateDay = async (request: Request, response: Response) => {
  const { id } = request.params;
  const day = await getRepository(Days).update(id, request.body);
  if (day.affected === 1) {
    const dayUpdated = await getRepository(Days).findOne(id);
    return response.json(dayUpdated);
  }

  return response.status(404).json({ message: 'Day not found' });
};
