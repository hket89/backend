import Koa from 'koa';
import compose from 'koa-compose';
import { ValidationError } from 'yup';

const errorHandler: Koa.Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err: unknown) {
    if (err instanceof ValidationError) {
      return ctx.throw(401, err.message);
    }
    throw err;
  }
};

export const createApp = <State, Context>(
  ...middleware: Koa.Middleware<State, Context>[]
) => new Koa().use(errorHandler).use(compose(middleware));
