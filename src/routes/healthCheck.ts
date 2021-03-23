import { Middleware } from 'src/types/koa';

export const healthCheckHandler: Middleware = (ctx) => {
  ctx.body = 'ok';
};
