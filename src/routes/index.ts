import Router from '@koa/router';

import { healthCheckHandler } from './healthCheck';

export const router = new Router().get('/health', healthCheckHandler);
