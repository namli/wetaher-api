import fp from 'fastify-plugin';
import { InfluxDB, QueryApi } from '@influxdata/influxdb-client';
import { FastifyPluginAsync } from 'fastify';

interface InfluxPlugin {
  queryApi: QueryApi;
}

const dbPlugin: FastifyPluginAsync = fp(async (fastify) => {
  const url = process.env.INFLUXDB_URL as string;
  const token = process.env.INFLUXDB_TOKEN as string;
  const org = process.env.INFLUXDB_ORG as string;

  const influxDB = new InfluxDB({ url, token });
  const queryApi: QueryApi = influxDB.getQueryApi(org);

  fastify.decorate('influx', {
    queryApi,
  });
});

export default dbPlugin;

// Расширяем декларацию FastifyInstance, добавляя influx
declare module 'fastify' {
  interface FastifyInstance {
    influx: InfluxPlugin;
  }
}