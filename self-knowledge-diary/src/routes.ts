import { Router, Request, Response } from 'express';

import { getDays, saveDay, getDay } from './controller/DaysController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world3!' });
});

routes.get('/days', getDays);
routes.get('/days/:id', getDay);
routes.post('/days', saveDay);

export default routes;
