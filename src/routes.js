import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Felipe Ricieri Bergamin',
    email: 'felipebergamin6@gmail.com',
    password_hash: '434823984928492839482',
  });

  return res.json(user);
});

export default routes;
