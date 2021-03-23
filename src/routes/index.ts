import Router from '@koa/router';

import { healthCheckHandler } from './healthCheck';
import { topPostHandler } from './topPost';

export const router = new Router()
  .get('/health', healthCheckHandler)
  .get('/posts/top', topPostHandler);
