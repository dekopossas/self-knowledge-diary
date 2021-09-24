import { Router, Request, Response } from 'express';

import { getDays, saveDays } from './controller/DaysController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world3!' });
});

routes.get('/days', getDays);
routes.post('/days', saveDays);

export default routes;
