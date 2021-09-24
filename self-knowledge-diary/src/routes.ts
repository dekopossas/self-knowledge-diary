import { Router, Request, Response } from 'express';

import { getDays, saveDay } from './controller/DaysController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world3!' });
});

routes.get('/days', getDays);
routes.post('/days', saveDay);

export default routes;
