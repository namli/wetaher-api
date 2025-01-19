import dotenv from 'dotenv';
dotenv.config(); 
import Fastify, { FastifyInstance } from 'fastify';

import dbPlugin from './plugins/db.js';
import itemsRoutes from './routes/v1/items/index.js';

const fastify: FastifyInstance = Fastify({ logger: true });

// Подключаем плагины
fastify.register(dbPlugin);

// Подключаем маршруты
fastify.register(itemsRoutes, { prefix: '/api/v1/items' });
// ... другие маршруты


export default fastify;