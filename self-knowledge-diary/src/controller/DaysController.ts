import { getRepository } from 'typeorm';
import { Days } from '../entity/Days';
import { Request, Response } from 'express';

export const getDays = async (request: Request, response: Response) => {
  const days = await getRepository(Days).find();
  return response.json(days);
};

export const saveDay = async (request: Request, response: Response) => {
  const days = await getRepository(Days).save(request.body);
  response.json(days);
};
