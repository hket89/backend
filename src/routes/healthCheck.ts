import { Middleware } from '../types/koa';

export const healthCheckHandler: Middleware = (ctx) => {
  ctx.body = 'ok';
};
