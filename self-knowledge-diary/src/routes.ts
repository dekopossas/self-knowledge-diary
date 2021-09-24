import { Router, Request, Response } from 'express';

import { getDays } from './controller/DaysController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world3!' });
});

routes.get('/days', getDays);

export default routes;
