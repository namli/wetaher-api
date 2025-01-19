// src/routes/v1/items/index.ts
import { FastifyPluginAsync } from 'fastify';

const itemsRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get('/', async (request, reply) => {
    return { message: 'Hello World from items route!' };
  });
};

export default itemsRoutes;