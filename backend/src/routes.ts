import { Router, Request, Response } from 'express';

import { getDays, saveDay, getDay, updateDay, deleteDay } from './controller/DaysController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world3!' });
});

routes.get('/days', getDays);
routes.get('/days/:id', getDay);
routes.post('/days', saveDay);
routes.put('/days/:id', updateDay);
routes.delete('/days/:id', deleteDay);

export default routes;
