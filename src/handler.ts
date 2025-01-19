import proxy from '@fastify/aws-lambda';
import app from './app'; // Путь не изменился

export const handler = proxy(app);